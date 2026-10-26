import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';
import * as THREE from '../dist/vendor/three.module.js';
import {weapons} from '../dist/catalog.js';
import {damageForHit,shotDirections,rayActor,MAX_HEALTH} from '../dist/combat.js';
import {meleeHit,isRearAttack,activateMeleePerk,restoreMeleeAmmo,meleeDescription} from '../dist/melee.js';
import {advanceMovement} from '../dist/movement.js';
import {Arena} from '../server/arena.mjs';
const source=await readFile(new URL('../dist/game.js',import.meta.url),'utf8');
function body(name){const a=source.indexOf('function '+name+'(');assert.ok(a>=0,name);return source.slice(a,source.indexOf('\nfunction ',a+1))}
function fixture(weapon){let now=10000;const arena=new Arena('MELEE',0,()=>now,{random:()=>0}),a=arena.join('A',weapon),b=arena.join('B');arena.blocks=[];Object.assign(a,{x:0,y:0,z:2,invulnerableUntil:0});Object.assign(b,{x:0,y:0,z:0,yaw:Math.PI,invulnerableUntil:0});return{arena,a,b,dir:new THREE.Vector3(0,-.35,-2).normalize().toArray(),advance(ms){now+=ms;arena.tick()}}}
test('all twenty melee weapons have distinct rear damage and a documented ability; flank hits stay frontal',()=>{
 const target={x:0,z:0,yaw:0},front=[0,1.7,-2],rear=[0,1.7,2];assert.equal(isRearAttack([2,1.7,0],target),false);
 for(const w of weapons.filter(w=>w.mechanic==='melee')){const f=meleeHit(w,false,1.5,front,target),b=meleeHit(w,false,1.5,rear,target);assert.equal(f.damage,w.damage);assert.equal(f.rear,false);assert.equal(b.rear,true);assert.ok(b.damage>f.damage);assert.ok(meleeDescription(w).includes(w.perk.title));if(w.backstab)assert.equal(b.damage,200)}
 for(const yaw of [-7,-Math.PI,0,.7,Math.PI,8]){const rear=[Math.sin(yaw)*2,1.7,Math.cos(yaw)*2];assert.equal(isRearAttack(rear,{...target,yaw}),true);assert.equal(isRearAttack(rear.map((n,i)=>i===1?n:-n),{...target,yaw}),false)}
});
test('authoritative melee executes from behind, keeps front damage, and honors range, walls and spawn protection',()=>{
 const front=fixture(54);front.arena.shoot(front.a.id,front.dir);assert.equal(front.b.health,200-weapons[54].damage);assert.equal(front.arena.events.find(e=>e.type==='hit').rear,false);
 const rear=fixture(54);rear.b.yaw=0;rear.arena.shoot(rear.a.id,rear.dir);assert.equal(rear.b.health,0);assert.equal(rear.a.kills,1);assert.equal(rear.arena.events.find(e=>e.type==='hit').execution,true);
 for(const blocked of ['wall','range','spawn']){const f=fixture(54);f.b.yaw=0;if(blocked==='wall')f.arena.blocks=[{min:[-1,0,.8],max:[1,3,1.1]}];if(blocked==='range')f.b.z=-5;if(blocked==='spawn')f.b.invulnerableUntil=20000;f.arena.shoot(f.a.id,f.dir);assert.equal(f.b.health,200);assert.equal(f.a.kills,0)}
});
test('stun stops server movement and firing, expires, and clears at respawn',()=>{
 const f=fixture(63);f.arena.shoot(f.a.id,f.dir);assert.equal(f.b.stunUntil,10800);assert.equal(f.arena.move(f.b.id,{x:.1,y:0,z:0,yaw:.5,pitch:0,height:1.7}),false);assert.equal(f.b.x,0);assert.equal(f.b.yaw,.5);assert.equal(f.arena.shoot(f.b.id,[0,0,1]).accepted,false);assert.equal(f.arena.snapshot().players.find(p=>p.id===f.b.id).stunUntil,10800);
 f.advance(850);assert.equal(f.arena.move(f.b.id,{x:.1,y:0,z:0,yaw:.5,pitch:0,height:1.7}),true);assert.equal(f.arena.shoot(f.b.id,[0,0,1]).accepted,true);f.b.stunUntil=50000;f.arena.spawn(f.b);assert.equal(f.b.stunUntil,0);
});
test('healing and ammunition perks are server-owned, capped, and cannot be farmed by rapid hits or swapping',()=>{
 const f=fixture(53);f.a.health=195;f.arena.shoot(f.a.id,f.dir);assert.equal(f.a.health,200);assert.equal(f.a.meleeReadyAt,13000);f.a.health=100;f.advance(500);f.arena.shoot(f.a.id,f.dir);assert.equal(f.a.health,100);f.arena.equip(f.a.id,57);f.advance(300);f.arena.shoot(f.a.id,f.dir);assert.equal(f.a.health,100);f.advance(3500);f.b.health=200;f.arena.shoot(f.a.id,f.dir);assert.equal(f.a.health,125);
 const ammo=fixture(60);ammo.a.inventory.set(0,0);ammo.a.reserves.set(0,0);ammo.a.inventory.set(42,1);ammo.a.reserves.set(42,89);ammo.arena.shoot(ammo.a.id,ammo.dir);assert.equal(ammo.a.inventory.get(0),30);assert.equal(ammo.a.reserves.get(0),30);assert.equal(ammo.a.inventory.get(42),15);assert.equal(ammo.a.reserves.get(42),90);const event=ammo.arena.events.find(e=>e.type==='meleePerk');assert.ok(event.inventory.some(row=>row.weapon===0&&row.ammo===30&&row.reserve===30));
});
test('misses, blocked attacks, protected players and friendly hits do not grant active perks',()=>{
 for(const kind of ['miss','cover','protected','friendly']){const f=fixture(53);f.a.health=100;if(kind==='miss')f.b.x=10;if(kind==='cover')f.arena.blocks=[{min:[-1,0,.8],max:[1,3,1.1]}];if(kind==='protected')f.b.invulnerableUntil=20000;if(kind==='friendly'){f.arena.teamSize=1;f.a.team=f.b.team=0}f.arena.shoot(f.a.id,f.dir);assert.equal(f.a.health,100);assert.equal(f.a.meleeReadyAt,0);assert.equal(f.b.health,200)}
});
test('mobility melee grants exactly one extra air jump and stun blocks all movement until released',()=>{
 const player=()=>({pos:new THREE.Vector3(0,5,0),vel:new THREE.Vector3(2,0,0),yaw:0,height:1.7,grounded:false,jumps:2,coyote:0,jumpBuffer:.14,slide:0,slideCooldown:0,slideDir:new THREE.Vector3(),stepOffset:0});
 const extra=player();assert.ok(advanceMovement(extra,{},weapons[52],[],1/120).some(e=>e.type==='jump'));assert.equal(extra.jumps,3);extra.jumpBuffer=.14;assert.equal(advanceMovement(extra,{},weapons[52],[],1/120).length,0);assert.equal(extra.jumps,3);
 const ordinary=player();assert.equal(advanceMovement(ordinary,{},weapons[0],[],1/120).length,0);assert.equal(ordinary.jumps,2);
 const stunned=player(),pos=stunned.pos.toArray();advanceMovement(stunned,{stunned:true,forward:1,sprint:true},weapons[52],[],.2);assert.deepEqual(stunned.pos.toArray(),pos);assert.equal(stunned.jumpBuffer,0);advanceMovement(stunned,{forward:1},weapons[52],[],.2);assert.notDeepEqual(stunned.pos.toArray(),pos);
});
function offline(weapon=54,rear=false){
 const e={hp:100,maxHp:100,mesh:new THREE.Group()};e.mesh.rotation.y=rear?Math.PI:0;
 const feedback=[],c=vm.createContext({weapons,MAX_HEALTH,THREE,combat:true,paused:false,onlineDead:false,mode:'training',selectedWeapon:weapon,ammo:1,reserveAmmo:0,reloading:0,shotCooldown:0,shotIndex:0,recoil:0,aim:false,meleeSwing:0,meleeBackSwing:false,muzzleTime:0,muzzle:new THREE.Object3D(),muzzleLight:{intensity:0},motion:{recoilSide:0,kickVelocity:0},camera:new THREE.PerspectiveCamera(),player:{health:100,grounded:true,speed:0,height:1.7,meleeReadyAt:0},localAvatar:null,raycaster:new THREE.Raycaster(),coverMeshes:[],enemies:[e],totalTime:10,magazineInventory:new Map(),reserveInventory:new Map(),quickSlots:[0,42,weapon],isPlayerStunned:()=>false,attackRay:()=>({origin:new THREE.Vector3(0,1.7,2),base:new THREE.Vector3(0,-.35,-2).normalize()}),shotDirections,rayActor,damageForHit,meleeHit,activateMeleePerk,restoreMeleeAmmo,sound(){},impact(){},flashAgent(){},updateTargetTag(){},hitFeedback(...args){feedback.push(args)},killEnemy(){},updateWeaponHud(){},notice(){},updateMeleeHud(){},setTimeout(){}});
 new vm.Script(['applyLocalMeleePerk','shoot'].map(body).join('\n')).runInContext(c);return{c,e,feedback};
}
test('actual practice attacks use bot-facing conversion, rear thrust animation and identical execution damage',()=>{
 const front=offline();front.c.shoot();assert.equal(front.e.hp,58);assert.equal(front.c.meleeBackSwing,false);assert.equal(front.feedback[0][6],null);
 const rear=offline(54,true);rear.c.shoot();assert.equal(rear.e.hp,-100);assert.equal(rear.c.meleeBackSwing,true);assert.equal(rear.feedback[0][0],200);assert.equal(rear.feedback[0][6],'BACKSTAB');
 const heal=offline(53);heal.c.shoot();assert.equal(heal.c.player.health,118);const ammo=offline(60);ammo.c.magazineInventory.set(0,0);ammo.c.reserveInventory.set(0,0);ammo.c.shoot();assert.equal(ammo.c.magazineInventory.get(0),30);assert.equal(ammo.c.reserveInventory.get(0),30);
});
test('actual stunned bots stop walking and shooting, then recover',()=>{
 const mesh=new THREE.Group();mesh.userData.legs=[new THREE.Object3D(),new THREE.Object3D()];mesh.userData.flash=new THREE.Mesh();const e={mesh,stunUntil:11,speed:5,phase:0,cooldown:-1,strafe:1,multiplier:1,turn:0},c=vm.createContext({THREE,enemies:[e],totalTime:10,player:{pos:new THREE.Vector3(0,0,10),height:1.7},v3:new THREE.Vector3(),animateAgent(){},exp:(v,g,k,dt)=>v+(g-v)*(1-Math.exp(-k*dt)),rand:(a,b)=>(a+b)/2,validPosition:()=>true,lineOfSight:()=>false});new vm.Script(body('updateEnemies')).runInContext(c);c.updateEnemies(.1);assert.deepEqual(mesh.position.toArray(),[0,0,0]);assert.equal(e.cooldown,-1);c.totalTime=11.1;c.updateEnemies(.1);assert.ok(mesh.position.z>0);assert.notEqual(e.cooldown,-1);
});
test('wave refill restores current, primary, sidearm and cached special ammo and cancels an ongoing reload',()=>{
 const magazines=new Map([[0,0],[42,1],[51,0],[54,1]]),reserves=new Map([[0,0],[42,2],[51,0],[54,0]]),c=vm.createContext({weapons,selectedWeapon:54,quickSlots:[0,42,54],magazineInventory:magazines,reserveInventory:reserves,ammo:1,reserveAmmo:0,reloading:1,pendingReload:23,cancelDraw(){c.cancelled=true},updateWeaponHud(){}});new vm.Script(body('refillAllAmmo')).runInContext(c);c.refillAllAmmo();for(const id of [0,42,51,54]){assert.equal(magazines.get(id),weapons[id].mag);assert.equal(reserves.get(id),weapons[id].reserve)}assert.equal(c.reloading,0);assert.equal(c.pendingReload,0);assert.equal(c.cancelled,true);assert.equal(c.ammo,1);
});

test('online stun and perk packets update actual client inventory, health and shared cooldown',()=>{
 const listeners=new Map(),self={stunUntil:0},player={pos:new THREE.Vector3(),vel:new THREE.Vector3(2,3,4),health:20},c=vm.createContext({combat:true,mode:'online',weapons,net:{id:'self',serverNow:10000,players:new Map([['self',self]]),addEventListener(type,cb){listeners.set(type,cb)}},player,mouse:{down:true},selectedWeapon:0,magazineInventory:new Map(),reserveInventory:new Map(),ammo:0,reserveAmmo:0,cancelDraw(){},notice(){},updateWeaponHud(){},updateMeleeHud(){}});
 for(const type of ['stun','meleePerk']){const a=source.indexOf("net.addEventListener('"+type+"'"),b=source.indexOf('\n net.addEventListener',a);new vm.Script(source.slice(a,b)).runInContext(c)}
 new vm.Script(body('isPlayerStunned')).runInContext(c);listeners.get('stun')({detail:{id:'self',until:10800,x:1,y:0,z:2}});assert.equal(c.isPlayerStunned(),true);assert.deepEqual(player.pos.toArray(),[1,0,2]);assert.deepEqual(player.vel.toArray(),[0,0,0]);assert.equal(c.mouse.down,false);
 listeners.get('meleePerk')({detail:{id:'other',health:200,readyAt:20000,inventory:[]}});assert.equal(player.health,20);
 listeners.get('meleePerk')({detail:{id:'self',health:80,readyAt:15000,title:'탄약 회수',inventory:[{weapon:0,ammo:30,reserve:60},{weapon:42,ammo:15,reserve:30}]}});assert.equal(player.health,80);assert.equal(player.meleeReadyAt,15000);assert.equal(c.ammo,30);assert.equal(c.reserveAmmo,60);assert.equal(c.magazineInventory.get(42),15);c.net.serverNow=10801;assert.equal(c.isPlayerStunned(),false);
});

test('static practice targets keep their facing so players can walk around to practice backstabs',()=>{
 const mesh=new THREE.Group(),e={mesh,training:true,speed:0,phase:0},c=vm.createContext({enemies:[e],totalTime:10,player:{pos:new THREE.Vector3(0,0,-5),height:1.7},v3:new THREE.Vector3(),animateAgent(){}});new vm.Script(body('updateEnemies')).runInContext(c);c.updateEnemies(.2);assert.equal(mesh.rotation.y,0);assert.deepEqual(mesh.position.toArray(),[0,0,0]);
});
