import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {readFile} from 'node:fs/promises';
import * as THREE from '../dist/vendor/three.module.js';
import {weapons} from '../dist/catalog.js';
// Geometry QA only: exercise the actual procedural model functions, without a browser or a fake renderer.
test('all 72 actual weapon models build finite geometry and special mechanisms have their parts',async()=>{
 const source=await readFile(new URL('../dist/game.js',import.meta.url),'utf8');
 function body(name){const start=source.indexOf('function '+name+'(');assert.ok(start>=0);let end=source.indexOf('\nfunction ',start+1);if(end<0)end=source.length;return source.slice(start,end)}
 const context=vm.createContext({THREE,weapons,selectedWeapon:0,weaponRig:null,viewScene:new THREE.Scene(),matCache:new Map(),weaponParts:{},muzzle:null,muzzleLight:null,rigWeapon:null,magazineInventory:new Map(),reserveInventory:new Map(),ammo:0,reserveAmmo:0,pendingEquip:0,pendingReload:0,actionSeq:0,aim:false,reloading:0,shotCooldown:0,weaponSwitch:0,combat:false,cancelDraw(){},updateWeaponHud(){},renderQuickSlots(){}});
 new vm.Script(['mat','box','cylinder','createSpecialWeapon','createMeleeWeapon','finishWeapon','createWeapon'].map(body).join('\n')).runInContext(context);
 for(const w of weapons){context.selectedWeapon=w.id;new vm.Script('createWeapon()').runInContext(context);const bounds=new THREE.Box3().setFromObject(context.weaponRig);assert.ok(bounds.min.toArray().concat(bounds.max.toArray()).every(Number.isFinite),w.name);assert.ok(context.weaponRig.children.length>3,w.name);assert.equal(context.viewScene.children.length,1,w.name);if(w.cat==='bow'){assert.ok(context.weaponParts.string.isLine);assert.ok(context.weaponParts.arrow.isGroup)}if(w.cat==='launcher')assert.ok(context.weaponParts.warhead.isMesh);assert.equal(context.ammo,w.mag);assert.equal(context.reserveAmmo,w.reserve)}
});
