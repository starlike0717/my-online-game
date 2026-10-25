import {MAX_HEALTH} from '../dist/combat.js';
import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {readFile} from 'node:fs/promises';
import {weapons} from '../dist/catalog.js';
import {refillMagazine} from '../dist/ammo.js';
import {Arena} from '../server/arena.mjs';
const source=await readFile(new URL('../dist/game.js',import.meta.url),'utf8');
function body(name){const a=source.indexOf('function '+name+'('),b=source.indexOf('\nfunction ',a+1);return source.slice(a,b)}
function fixture(weapon=0){let now=10000;const arena=new Arena('AMMO',0,()=>now);arena.blocks=[];const p=arena.join('A',weapon);return{arena,p,step(ms){now+=ms},reload(){assert.equal(arena.reload(p.id),true);now+=weapons[p.weapon].reload*1000+1;arena.completeReload(p)}}}
test('finite magazines conserve ammunition for every ranged weapon including partial reloads',()=>{
 const ranged=weapons.filter(w=>w.mechanic!=='melee');assert.equal(ranged.length,52);assert.ok(new Set(ranged.map(w=>w.mag)).size>=15);assert.ok(new Set(ranged.map(w=>w.reserve)).size>=20);
 for(const w of ranged){assert.ok(Number.isInteger(w.reserve)&&w.reserve>0,w.name);for(const reserve of [0,1,3,w.reserve])for(const ammo of [0,w.mag-1,w.mag]){const next=refillMagazine(w,ammo,reserve);assert.equal(next.ammo+next.reserve,ammo+reserve,w.name);assert.ok(next.ammo<=w.mag&&next.reserve>=0,w.name)}}
});
test('server reloads only remaining rounds, rejects empty reserve, and cannot refill by switching',()=>{
 const f=fixture();f.p.ammo=2;f.p.reserve=3;f.reload();assert.equal(f.p.ammo,5);assert.equal(f.p.reserve,0);assert.equal(f.arena.reload(f.p.id),false);
 f.arena.equip(f.p.id,42);assert.equal(f.p.reserve,weapons[42].reserve);f.step(300);f.arena.equip(f.p.id,0);assert.equal(f.p.ammo,5);assert.equal(f.p.reserve,0);assert.equal(f.arena.snapshot().players[0].reserve,0);
 f.arena.spawn(f.p);assert.equal(f.p.ammo,weapons[0].mag);assert.equal(f.p.reserve,weapons[0].reserve);
});
test('rocket reserve permits exactly seven shots per spawn and cancelled reload consumes nothing',()=>{
 const f=fixture(51);for(let n=0;n<7;n++){assert.equal(f.arena.shoot(f.p.id,[0,0,-1]).accepted,true);assert.equal(f.p.ammo,0);if(n<6)f.reload()}
 assert.equal(f.p.reserve,0);assert.equal(f.arena.reload(f.p.id),false);f.step(2000);assert.equal(f.arena.shoot(f.p.id,[0,0,-1]).accepted,false);
 const g=fixture();g.p.ammo=0;g.p.reserve=7;assert.equal(g.arena.reload(g.p.id),true);g.step(200);g.arena.equip(g.p.id,42);g.step(300);g.arena.equip(g.p.id,0);assert.equal(g.p.ammo,0);assert.equal(g.p.reserve,7);
});
test('actual client reload conserves reserve offline and awaits authoritative completion online',()=>{
 const c=vm.createContext({weapons,refillMagazine,mode:'bots',selectedWeapon:0,ammo:2,reserveAmmo:3,reloading:-.01,magazineInventory:new Map(),reserveInventory:new Map(),updateWeaponHud(){},sound(){},$(){return{innerHTML:''}}});new vm.Script(body('completeWeaponReload')).runInContext(c);c.completeWeaponReload();assert.equal(c.ammo,5);assert.equal(c.reserveAmmo,0);assert.equal(c.reserveInventory.get(0),0);
 Object.assign(c,{mode:'online',ammo:0,reserveAmmo:20,reloading:-.01});c.completeWeaponReload();assert.equal(c.ammo,0);assert.equal(c.reserveAmmo,20);assert.ok(c.reloading>0);
});
test('twenty melee weapons have distinct handling, finite server reach, and no ammunition cost',()=>{
 const melee=weapons.filter(w=>w.mechanic==='melee');assert.equal(melee.length,20);assert.equal(new Set(melee.map(w=>[w.damage,w.rate,w.reach].join(','))).size,20);assert.ok(new Set(melee.map(w=>w.shape)).size>=10);
 for(const w of melee){const f=fixture(w.id),b=f.arena.join('B',0);Object.assign(f.p,{x:0,y:0,z:19,invulnerableUntil:0});Object.assign(b,{x:0,y:0,z:19-w.reach-2,invulnerableUntil:0});assert.equal(f.arena.shoot(f.p.id,[0,0,-1]).hits,0,w.name);b.z=19-w.reach+.5;f.step(1000/w.rate+10);assert.equal(f.arena.shoot(f.p.id,[0,0,-1]).hits,1,w.name);assert.ok(b.health<MAX_HEALTH,w.name);assert.equal(f.p.ammo,1);assert.equal(f.p.reserve,0);assert.equal(f.arena.reload(f.p.id),false)}
});
