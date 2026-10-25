import {MAX_HEALTH} from '../dist/combat.js';
import test from 'node:test';
import assert from 'node:assert/strict';
import { weapons } from '../dist/catalog.js';
import { damageForHit,rayActor,shotDirections,spreadForShot } from '../dist/combat.js';
import { Arena } from '../server/arena.mjs';
const direction=(x,y,z)=>{const len=Math.hypot(x,y,z);return [x/len,y/len,z/len]};
test('every weapon has valid body/head and distance profiles; examples have distinct damage',()=>{
 assert.equal(weapons.length,73);
 for(const w of weapons){assert.ok(w.damage>0&&w.headMultiplier>=1&&w.rangeEnd>w.rangeStart);assert.equal(damageForHit(w,false,0),w.damage);assert.equal(damageForHit(w,true,0),Math.round(w.damage*w.headMultiplier*10)/10);assert.equal(damageForHit(w,false,500),Math.round(w.damage*w.minDamage*10)/10);assert.ok(damageForHit(w,false,(w.rangeStart+w.rangeEnd)/2)<=w.damage)}
 assert.deepEqual([weapons[0].damage,weapons[4].damage,weapons[28].damage],[26,34,95]);
 assert.deepEqual([damageForHit(weapons[0],true),damageForHit(weapons[4],true),damageForHit(weapons[28],true)],[46.8,56.1,190]);
});
test('head includes visor/helmet sides and scales while crouching; weapon and space above miss',()=>{
 const p={x:0,y:0,z:0,height:1.7,yaw:0};
 assert.equal(rayActor([0,1.3,8],[0,0,-1],p).head,false);
 for(const x of [0,.26,-.26])assert.equal(rayActor([x,2,8],[0,0,-1],p).head,true);
 assert.equal(rayActor([0,1.97*1.1/1.7,8],[0,0,-1],{...p,height:1.1}).head,true);
 assert.equal(rayActor([0,2.3,8],[0,0,-1],p).distance,Infinity);
 assert.equal(rayActor([.07,1.22,2],[0,0,-1],{...p,z:0}).distance<2,true);
 // A shot traveling sideways through the gun barrel, in front of the torso, misses the person.
 assert.equal(rayActor([2,1.22,1.3],[-1,0,0],p).distance,Infinity);
 const rotated=rayActor([8,1.3,0],[-1,0,0],{...p,yaw:Math.PI/2});assert.ok(Number.isFinite(rotated.distance));assert.equal(rotated.head,false);
});
test('ADS/crouch reduce spread; movement/air increase it; pellets stay normalized',()=>{
 const w=weapons[0],still=spreadForShot(w);assert.ok(spreadForShot(w,{aim:true})<still);assert.ok(spreadForShot(w,{crouched:true})<still);assert.ok(spreadForShot(w,{grounded:false,speed:9})>still);
 const shotgun=weapons[24],rays=shotDirections([0,0,-1],shotgun,{aim:true});assert.equal(rays.length,shotgun.pellets);for(const d of rays)assert.ok(Math.abs(Math.hypot(...d)-1)<1e-12);
});
function fixture(weapon=0){let now=10000;const arena=new Arena('DAMAGE',0,()=>now,{random:()=>0}),a=arena.join('A',weapon),b=arena.join('B');arena.blocks=[];Object.assign(a,{x:0,y:0,z:18,height:1.7});Object.assign(b,{x:0,y:0,z:10});now+=3000;return{arena,a,b,advance:ms=>now+=ms}}
test('server body and head damage equal the practice formula, including falloff and actual health',()=>{
 for(const weapon of [0,4,10,28,42])for(const head of [false,true])for(const range of [8,80]){
  const{arena,a,b}=fixture(weapon);b.z=a.z-range;const height=head?2:1.35;const d=direction(0,height-1.7,-range);arena.shoot(a.id,d,{aim:true});const hit=arena.events.find(e=>e.type==='hit');assert.ok(hit);assert.equal(hit.head,head);assert.equal(hit.damage,damageForHit(weapons[weapon],head,hit.distance));assert.equal(hit.health,Math.ceil(Math.max(0,MAX_HEALTH-hit.damage)));assert.equal(hit.actualDamage,Math.min(MAX_HEALTH,hit.damage));
 }
});
test('shotgun resolves each pellet and reports total damage once; cover still wins',()=>{
 const{arena,a,b,advance}=fixture(20),w=weapons[20];arena.shoot(a.id,direction(0,-.35,-8));let hits=arena.events.filter(e=>e.type==='hit');assert.equal(hits.length,1);assert.equal(hits[0].damage,Math.round(damageForHit(w,false,hits[0].distance)*w.pellets*10)/10);
 advance(4000);arena.tick();Object.assign(b,{x:0,y:0,z:10,health:MAX_HEALTH,invulnerableUntil:0});arena.blocks=[{min:[-2,0,12],max:[2,4,13]}];arena.events=[];arena.shoot(a.id,direction(0,-.35,-8));assert.equal(b.health,MAX_HEALTH);assert.equal(arena.events.some(e=>e.type==='hit'),false);
});
