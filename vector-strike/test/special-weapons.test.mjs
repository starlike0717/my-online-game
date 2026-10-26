import {MAX_HEALTH} from '../dist/combat.js';
import test from 'node:test';
import assert from 'node:assert/strict';
import {weapons} from '../dist/catalog.js';
import {makeProjectile,stepProjectile,blastHits,chargePower} from '../dist/projectiles.js';
import {Arena} from '../server/arena.mjs';
const actor=(id,x,y,z)=>({id,x,y,z,height:1.7,yaw:0,health:MAX_HEALTH});
const dir=(x,y,z)=>{const n=Math.hypot(x,y,z);return [x/n,y/n,z/n]};
function fixture(weapon){let now=10000;const arena=new Arena('SPECIAL',0,()=>now,{random:()=>0}),a=arena.join('A',weapon),b=arena.join('B');Object.assign(a,{x:0,y:0,z:18,invulnerableUntil:0});Object.assign(b,{x:0,y:0,z:10,invulnerableUntil:0});arena.blocks=[];return{arena,a,b,advance(ms){now+=ms;arena.tick()}}}
test('arrows travel over time, fall, and sweep through head hitboxes without tunnelling',()=>{
 const w=weapons[50],p=makeProjectile('arrow','A',w,[0,2,18],[0,0,-1]),b=actor('B',0,0,10);let hit;
 for(let n=0;n<60;n++){hit=stepProjectile(p,1/120,[],[b]);if(hit.done)break}
 assert.equal(hit.target.id,'B');assert.equal(hit.head,true);assert.ok(p.position[1]<2&&p.position[1]>1.9);assert.ok(p.travel>7);
 const blocked=makeProjectile('blocked','A',w,[0,2,18],[0,0,-1]);let collision;for(let n=0;n<60;n++){collision=stepProjectile(blocked,.01,[{min:[-2,0,13],max:[2,4,14]}],[b]);if(collision.done)break}assert.equal(collision.wall,true);assert.equal(collision.target,null);
});
test('bow charge is tracked by the server and cancelled by switching, pausing, and reload',()=>{
 const{arena,a,b,advance}=fixture(50);assert.equal(arena.shoot(a.id,[0,0,-1]).accepted,false);assert.equal(arena.draw(a.id),true);advance(50);assert.equal(arena.shoot(a.id,[0,0,-1]).accepted,false);advance(800);assert.equal(arena.shoot(a.id,dir(0,-.35,-8)).accepted,true);assert.equal(b.health,MAX_HEALTH);advance(40);assert.equal(b.health,MAX_HEALTH);advance(150);assert.ok(b.health<=MAX_HEALTH-79&&b.health>=MAX_HEALTH-81);assert.equal(a.ammo,0);assert.equal(chargePower(0,weapons[50]),.5);assert.equal(chargePower(5,weapons[50]),1);
 assert.equal(arena.reload(a.id),true);advance(600);assert.equal(a.ammo,1);assert.equal(arena.draw(a.id),true);arena.draw(a.id,false);advance(1000);assert.equal(arena.shoot(a.id,[0,0,-1]).accepted,false);
 assert.equal(arena.draw(a.id),true);assert.equal(arena.equip(a.id,0),true);assert.equal(a.drawSince,null);
});
test('rockets collide with the floor and splash respects walls and self-damage',()=>{
 const w=weapons[51],p=makeProjectile('rocket','A',w,[0,1.7,0],dir(0,-1,-.1));let result;for(let i=0;i<30;i++){result=stepProjectile(p,.01,[],[]);if(result.done)break}assert.equal(result.wall,true);assert.ok(p.position[1]>=0&&p.position[1]<.1);
 const a=actor('A',0,0,0),b=actor('B',1.5,0,0),c=actor('C',4,0,0),hits=blastHits(p,w,[a,b,c],[]);assert.ok(hits.find(h=>h.target===a).impulse[1]>0);assert.ok(hits.find(h=>h.target===a).damage<hits.find(h=>h.target===b).damage);assert.ok(hits.find(h=>h.target===c).damage<hits.find(h=>h.target===b).damage);
 const walls=[{min:[2,0,-1],max:[2.2,4,1]}];assert.equal(blastHits(p,w,[c],walls).length,0);
});
test('server rocket hits are delayed and do not award a kill for self elimination',()=>{
 const{arena,a,b,advance}=fixture(51);arena.shoot(a.id,dir(0,-.3,-8));assert.equal(b.health,MAX_HEALTH);advance(100);assert.equal(b.health,MAX_HEALTH);advance(170);assert.equal(b.health,MAX_HEALTH-weapons[51].damage);assert.equal(a.kills,0);assert.equal(arena.reload(a.id),true);advance(2700);arena.shoot(a.id,dir(0,-.3,-8));advance(100);advance(170);assert.equal(b.health,0);assert.equal(a.kills,1);assert.ok(arena.events.some(e=>e.type==='explosion'));
 const self=fixture(51);self.a.health=1;self.b.x=20;self.arena.shoot(self.a.id,[0,-1,0]);self.advance(100);assert.equal(self.a.health,0);assert.equal(self.a.kills,0);assert.equal(self.a.deaths,1);
});
test('knife has finite reach, no consumed ammo, and cannot attack through cover',()=>{
 const{arena,a,b,advance}=fixture(52);b.yaw=Math.PI;arena.shoot(a.id,dir(0,-.35,-8));assert.equal(b.health,MAX_HEALTH);b.z=16;advance(600);arena.shoot(a.id,dir(0,-.35,-2));assert.equal(b.health,MAX_HEALTH-45);assert.equal(a.ammo,1);advance(600);arena.blocks=[{min:[-1,0,16.5],max:[1,3,16.7]}];arena.shoot(a.id,dir(0,-.35,-2));assert.equal(b.health,MAX_HEALTH-45);
});
test('weapon switches retain magazines and cannot replace reloading or bypass equip delay',()=>{
 const{arena,a,advance}=fixture(0);arena.shoot(a.id,[0,0,-1]);const left=a.ammo;assert.equal(arena.equip(a.id,42),true);assert.equal(arena.shoot(a.id,[0,0,-1]).accepted,false);advance(300);assert.equal(arena.equip(a.id,0),true);assert.equal(a.ammo,left);advance(300);a.ammo=0;arena.equip(a.id,42);advance(300);arena.equip(a.id,0);assert.equal(a.ammo,0);assert.equal(arena.reload(a.id),true);advance(2000);assert.equal(a.ammo,weapons[0].mag);assert.equal(arena.equip(a.id,weapons.length),false);
});
test('reload expiry is honored by the next action without waiting for the 50ms server tick',()=>{
 let now=10000;const arena=new Arena('DEADLINE',0,()=>now,{random:()=>0});arena.blocks=[];const a=arena.join('A',0);a.ammo=0;assert.equal(arena.reload(a.id),true);now=a.reloadAt+1;assert.equal(arena.shoot(a.id,[0,0,-1]).accepted,true);assert.equal(a.ammo,weapons[0].mag-1);
 a.ammo=0;assert.equal(arena.reload(a.id),true);now=a.reloadAt+1;assert.equal(arena.equip(a.id,42),true);assert.equal(a.inventory.get(0),weapons[0].mag);
 now+=300;arena.equip(a.id,50);now+=300;a.ammo=0;assert.equal(arena.reload(a.id),true);now=a.reloadAt+1;assert.equal(arena.draw(a.id),true);assert.equal(a.ammo,1);assert.equal(a.reloadAt,0);
});

test('crossbows fire bolts immediately without a draw packet and conserve finite magazines and reserves',()=>{
 for(const id of [73,74]){const f=fixture(id),w=weapons[id];for(let n=0;n<w.mag;n++){const result=f.arena.shoot(f.a.id,dir(0,-.35,-8));assert.equal(result.accepted,true);assert.equal(f.arena.projectiles.at(-1).kind,'bolt');f.advance(500)}assert.equal(f.a.ammo,0);assert.equal(f.arena.shoot(f.a.id,[0,0,-1]).accepted,false);assert.equal(f.arena.reload(f.a.id),true);f.advance(w.reload*1000+1);assert.equal(f.a.ammo,w.mag);assert.equal(f.a.reserve,w.reserve-w.mag);assert.ok(f.b.health<200)}
});
