import {MAX_HEALTH} from '../dist/combat.js';
import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';
import * as THREE from '../dist/vendor/three.module.js';
import {weapons} from '../dist/catalog.js';
const source=await readFile(new URL('../dist/game.js',import.meta.url),'utf8');
function body(name){const start=source.indexOf('function '+name+'(');if(start<0)return '';let end=source.indexOf('\nfunction ',start+1);return source.slice(start,end<0?undefined:end)}
function fixture(){
 const net=new EventTarget();Object.assign(net,{id:'self',players:new Map(),serverNow:10000,match:{phase:'playing'}});const elements=new Map();
 const c=vm.createContext({MAX_HEALTH,THREE,weapons,net,combat:true,paused:true,mode:'online',selectedWeapon:0,inspectedWeapon:0,ammo:8,reserveAmmo:150,reloading:1.2,pendingOnlineShots:[],pendingEquip:0,pendingReload:0,actionSeq:0,rigWeapon:0,magazineInventory:new Map(),reserveInventory:new Map(),player:{health:MAX_HEALTH,pos:new THREE.Vector3(),vel:new THREE.Vector3()},remoteAgents:new Map(),projectileVisuals:new Map(),keys:new Set(),mouse:{down:false},aim:false,services:{init(){}},toast(){},initAudio(){},sound(){},updateWeaponHud(){},renderQuickSlots(){},updateHud(){},drawMinimap(){},announce(){},cancelDraw(){},resetMotion(){},storage:{set(){}},created:[],createWeapon(notify=true){c.created.push({weapon:c.selectedWeapon,notify});c.reloading=0},$:(id)=>{if(!elements.has(id))elements.set(id,{textContent:'',innerHTML:'',hidden:false});return elements.get(id)}});
 const functions=['applyServerLoadout','syncInventoryFromSnapshot','handleEquipAck','handleReloadAck','handleShotAck','setupNetwork'];new vm.Script(functions.map(body).filter(Boolean).join('\n')+'\nsetupNetwork();').runInContext(c);
 const emit=(type,m)=>net.dispatchEvent(new CustomEvent(type,{detail:m}));const self={id:'self',team:0,health:MAX_HEALTH,kills:0,assists:0,weapon:0,ammo:30,reserve:125,reloadAt:0};return{c,emit,self,snapshot(p={}){const s={...self,...p};net.players=new Map([['self',s]]);emit('snapshot',{time:10000,players:[s],projectiles:[]})}};
}
test('an online reload that completes while the menu is open updates the actual client state',()=>{const f=fixture();f.snapshot();assert.equal(f.c.reloading,0);assert.equal(f.c.ammo,30);assert.equal(f.c.paused,true);assert.equal(f.c.reserveAmmo,125)});
test('a rejected switch at death restores the server weapon instead of leaving a different view model',()=>{const f=fixture();Object.assign(f.c,{selectedWeapon:42,pendingEquip:7});f.emit('equipAck',{seq:7,accepted:false,requested:42,weapon:0,ammo:12,reloadAt:0,readyAt:0,serverTime:10000,health:0});assert.equal(f.c.selectedWeapon,0);assert.equal(f.c.ammo,12);assert.deepEqual(f.c.created,[{weapon:0,notify:false}])});
test('stale equip confirmations and old snapshots cannot replace the latest weapon request',()=>{
 const f=fixture();Object.assign(f.c,{selectedWeapon:51,pendingEquip:9,ammo:1});f.snapshot({weapon:0,ammo:20});assert.equal(f.c.ammo,1);assert.equal(f.c.selectedWeapon,51);f.emit('equipAck',{seq:8,weapon:50,ammo:0,reloadAt:0,serverTime:10000});assert.equal(f.c.selectedWeapon,51);assert.equal(f.c.pendingEquip,9);f.emit('equipAck',{seq:9,weapon:51,ammo:0,reloadAt:0,serverTime:10000});assert.equal(f.c.pendingEquip,0);assert.equal(f.c.ammo,0);
});
test('a later reload request survives an earlier equip confirmation',()=>{
 const f=fixture();Object.assign(f.c,{selectedWeapon:42,pendingEquip:7,pendingReload:8,ammo:0,reloading:1.1});f.emit('equipAck',{seq:7,accepted:true,weapon:42,ammo:0,reloadAt:0,serverTime:10000});assert.equal(f.c.pendingReload,8);assert.equal(f.c.reloading,1.1);f.emit('reloadAck',{seq:8,accepted:true,weapon:42,ammo:0,reloadAt:11100,serverTime:10000});assert.equal(f.c.pendingReload,0);assert.equal(f.c.reloading,1.1);
});
test('unacknowledged shots are counted once across acknowledgements and snapshots',()=>{
 const f=fixture();f.c.pendingOnlineShots=[10,11];f.snapshot({ammo:20});assert.equal(f.c.ammo,18);f.emit('shotAck',{seq:10,weapon:0,ammo:19,reloadAt:0,serverTime:10000});assert.equal(f.c.ammo,18);assert.equal(f.c.pendingOnlineShots.length,1);f.snapshot({ammo:19});assert.equal(f.c.ammo,18);f.emit('shotAck',{seq:11,weapon:0,ammo:18,reloadAt:0,serverTime:10000});assert.equal(f.c.pendingOnlineShots.length,0);assert.equal(f.c.ammo,18);
});
test('a snapshot sent before a reload request cannot cancel its predicted animation',()=>{
 const f=fixture();Object.assign(f.c,{pendingReload:4,reloading:1.8,ammo:5});f.snapshot({ammo:5,reloadAt:0});assert.equal(f.c.reloading,1.8);f.emit('reloadAck',{seq:4,weapon:0,ammo:5,reloadAt:11800,serverTime:10000});assert.equal(f.c.pendingReload,0);assert.equal(f.c.reloading,1.8);f.snapshot({ammo:30,reloadAt:0});assert.equal(f.c.reloading,0);assert.equal(f.c.ammo,30);
});
test('respawn restores the server loadout and ignores old death-time confirmations',()=>{
 const f=fixture();Object.assign(f.c,{selectedWeapon:42,pendingEquip:8,pendingReload:7});f.emit('spawn',{id:'self',x:0,y:0,z:19,yaw:0,weapon:0,ammo:30,reloadAt:0});assert.equal(f.c.selectedWeapon,0);assert.equal(f.c.ammo,30);assert.equal(f.c.pendingEquip,0);assert.equal(f.c.pendingReload,0);assert.equal(f.c.player.health,MAX_HEALTH);f.emit('equipAck',{seq:8,weapon:42,ammo:15,reloadAt:0,serverTime:10000});assert.equal(f.c.selectedWeapon,0);
});
