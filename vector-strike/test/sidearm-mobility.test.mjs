import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';
import * as THREE from '../dist/vendor/three.module.js';
import {weapons} from '../dist/catalog.js';
import {dashDirection,sidearmDescription} from '../dist/mobility.js';
import {startDash,advanceMovement} from '../dist/movement.js';
import {Arena} from '../server/arena.mjs';
import {zoomFov} from '../dist/view.js';
const player=()=>({pos:new THREE.Vector3(),vel:new THREE.Vector3(),yaw:0,height:1.7,grounded:true,jumps:0,coyote:.1,jumpBuffer:0,slide:0,slideCooldown:0,slideDir:new THREE.Vector3(),stepOffset:0});
test('all eight sidearms carry usable mobility and cardinal/diagonal dashes have equal speed',()=>{
 const sidearms=weapons.filter(w=>w.cat==='hg');assert.equal(sidearms.length,8);for(const w of sidearms){assert.ok(w.dash||w.extraJumps);assert.ok(sidearmDescription(w).includes(w.mobility.title))}
 for(const yaw of [0,.4,Math.PI,-7])for(const[right,forward]of [[0,0],[1,0],[-1,1],[1,1],[0,-1]])assert.ok(Math.abs(Math.hypot(...dashDirection(yaw,right,forward))-1)<1e-10);
 assert.deepEqual(dashDirection(0),[0,-1]);assert.equal(dashDirection(0,2,0),null);assert.equal(dashDirection(0,NaN,0),null);
});
test('dash physics is frame-rate independent, collides with walls, and has a shared cooldown across weapon swaps',()=>{
 const distances=[];for(const fps of [30,60,120]){const p=player();assert.equal(startDash(p,{},weapons[42]),true);for(let i=0;i<fps/2;i++)advanceMovement(p,{forward:1},weapons[42],[],1/fps);distances.push(p.pos.z);assert.equal(startDash(p,{},weapons[48]),false);for(let i=0;i<fps*5;i++)advanceMovement(p,{},weapons[0],[],1/fps);assert.equal(startDash(p,{},weapons[48]),true)}assert.ok(Math.max(...distances)-Math.min(...distances)<.02);
 const p=player(),wall=new THREE.Box3(new THREE.Vector3(-2,0,-1.2),new THREE.Vector3(2,3,-1));startDash(p,{},weapons[42]);advanceMovement(p,{},weapons[42],[wall],.25);assert.ok(p.pos.z>=-.661);
 const stunned=player();assert.equal(startDash(stunned,{stunned:true},weapons[42]),false);assert.equal(startDash(player(),{},weapons[0]),false);
});
test('jump sidearms provide one extra air jump only while equipped',()=>{
 const p=player();p.pos.y=4;p.grounded=false;p.jumps=2;p.jumpBuffer=.14;p.coyote=0;advanceMovement(p,{},weapons[43],[],1/120);assert.equal(p.jumps,3);p.jumpBuffer=.14;advanceMovement(p,{},weapons[43],[],1/120);assert.equal(p.jumps,3);
 const regular=player();regular.pos.y=4;regular.grounded=false;regular.jumps=2;regular.jumpBuffer=.14;regular.coyote=0;advanceMovement(regular,{},weapons[42],[],1/120);assert.equal(regular.jumps,2);
});
test('server authorizes equipped dash profile and rejects forged direction, stun, cooldown and wrong weapon',()=>{
 let now=10000;const arena=new Arena('DASH',0,()=>now),p=arena.join('A',42);arena.blocks=[];Object.assign(p,{x:0,z:0,yaw:0,invulnerableUntil:0});assert.equal(arena.dash(p.id,{right:99,forward:0}),false);assert.equal(arena.dash(p.id,{right:0,forward:1,speed:999,duration:999}),true);assert.equal(p.dashSpeed,20);assert.equal(p.dashUntil,10180);assert.equal(p.dashReadyAt,14500);assert.equal(arena.dash(p.id),false);now+=180;assert.equal(arena.move(p.id,{x:0,y:0,z:-3.6,yaw:0,pitch:0,height:1.7}),true);arena.equip(p.id,48);assert.equal(arena.dash(p.id),false);now=15000;p.stunUntil=15100;assert.equal(arena.dash(p.id),false);now=15200;assert.equal(arena.dash(p.id),true);arena.spawn(p);assert.equal(p.dashReadyAt,0);arena.equip(p.id,0);assert.equal(arena.dash(p.id),false);arena.equip(p.id,42);arena.phase='countdown';assert.equal(arena.dash(p.id),false);
});
test('zoom settings produce true controllable magnification without invalid or inverted projections',()=>{
 const values=[1,1.5,3.5,8].map(n=>zoomFov(85,n));assert.ok(Math.abs(values[0]-85)<1e-10);assert.ok(values.every(Number.isFinite));assert.ok(values.every((n,i)=>!i||n<values[i-1]));assert.ok(zoomFov(85,8)>5);assert.ok(Number.isFinite(zoomFov(NaN,NaN)));
});
test('actual client predicts directional dash and rolls back only the matching rejected acknowledgement',async()=>{
 const source=await readFile(new URL('../dist/game.js',import.meta.url),'utf8');const body=name=>{const a=source.indexOf('function '+name+'('),b=source.indexOf('\nfunction ',a+1);return source.slice(a,b)};
 const packets=[],c=vm.createContext({THREE,weapons,combat:true,paused:false,onlineDead:false,mode:'online',net:{match:{phase:'playing'},serverNow:10000,send:m=>packets.push(m)},player:player(),selectedWeapon:42,keys:new Set(['KeyD']),touchMove:{x:0,y:0},pendingDash:0,actionSeq:0,clamp:(n,a,b)=>Math.max(a,Math.min(b,n)),startDash,isPlayerStunned:()=>false,sound(){},notice(){},sendNetworkPosition(){}});new vm.Script(['dash','handleDashAck'].map(body).join('\n')).runInContext(c);c.dash();assert.equal(c.player.dashSpeed,20);assert.ok(c.player.vel.x>19);assert.equal(packets[0].type,'dash');assert.equal(packets[0].right,1);c.handleDashAck({seq:0,accepted:false});assert.ok(c.player.dash>0);c.handleDashAck({seq:1,accepted:false,readyAt:14500,x:1,y:0,z:2});assert.equal(c.player.dash,0);assert.equal(c.player.dashCooldown,4.5);assert.deepEqual(c.player.pos.toArray(),[1,0,2]);
});

test('authorized dash cannot tunnel through a thin wall even if its endpoint is clear',()=>{let now=10000;const arena=new Arena('WALLDASH',0,()=>now),p=arena.join('A',42);Object.assign(p,{x:0,y:0,z:0,yaw:0});arena.blocks=[{min:[-2,0,-1.3],max:[2,3,-1.2]}];arena.dash(p.id);now+=180;assert.equal(arena.move(p.id,{x:0,y:0,z:-3.6,yaw:0,pitch:0,height:1.7}),false);assert.equal(p.z,0)});
