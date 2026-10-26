import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';
import * as THREE from '../dist/vendor/three.module.js';
import {BOT_SHOT_LIMIT,planBotShot,createBotShot,stepBotShot} from '../dist/bot-combat.js';
import {MAX_HEALTH,damageForHit} from '../dist/combat.js';
import {weapons} from '../dist/catalog.js';
import {makeProjectile,blastHits} from '../dist/projectiles.js';
import {refillMagazine} from '../dist/ammo.js';

const source=await readFile(new URL('../dist/game.js',import.meta.url),'utf8');
function body(name){
 const start=source.indexOf('function '+name+'(');assert.ok(start>=0,name);
 const following=source.slice(start+1).search(/\n(?:async )?function /);return source.slice(start,following<0?source.length:start+1+following);
}
function extract(context,names){new vm.Script(names.map(body).join('\n')).runInContext(context)}
function fixture(){
 const scene=new THREE.Scene(),world=new THREE.Group();scene.add(world);
 const mesh=new THREE.Group();mesh.userData.legs=[new THREE.Object3D(),new THREE.Object3D()];
 mesh.userData.flash=new THREE.Mesh(new THREE.ConeGeometry(.1,.2,4),new THREE.MeshBasicMaterial({color:0xffdf9e}));mesh.userData.flash.visible=false;
 mesh.add(mesh.userData.flash);world.add(mesh);
 const enemy={id:'bot',mesh,speed:0,phase:0,cooldown:-1,strafe:1,multiplier:1,turn:0,training:false};
 const player={pos:new THREE.Vector3(0,0,12),vel:new THREE.Vector3(),height:1.7,yaw:0,health:MAX_HEALTH};
 const stats={shots:0,impacts:0,refills:0,payouts:0};
 const c=vm.createContext({THREE,MAX_HEALTH,BOT_SHOT_LIMIT,createBotShot,stepBotShot,weapons,scene,worldGroup:world,player,enemies:[enemy],botProjectiles:[],botShotSeq:0,v3:new THREE.Vector3(),mode:'waves',practice:{difficulty:'normal',invincible:false},wave:1,totalTime:0,paused:false,damageOpacity:0,audio:null,
  planBotShot:options=>planBotShot(options,()=>0),rand:(a,b)=>(a+b)/2,exp:(v,g,k,dt)=>v+(g-v)*(1-Math.exp(-k*dt)),validPosition:()=>true,cover:[],coverMeshes:[],
  animateAgent(){},fireAgent(){stats.shots++},impact(){stats.impacts++},sound(){},updateHud(){},finish(){c.paused=true},
  localAvatar:null,dyingAgents:[],projectileVisuals:new Map(),localProjectiles:[],remoteAgents:new Map(),effects:[],decor:[],removeProjectileVisual(){},
  waveDelay:0,kills:5,score:0,announce(){},notice(){},toast(){},refillAllAmmo(){stats.refills++},services:{rewardWave(){stats.payouts++;return Promise.resolve(125)}}
 });
 extract(c,['clearBotShots','launchBotShot','updateBotProjectiles','updateEnemies','lineOfSight','damage','clearWorld','completeWave']);
 return {c,enemy,player,stats,scene};
}
const centered=()=>planBotShot({origin:[0,1.55,0],target:[0,1.55,12],difficulty:'normal'},()=>0);
function watchDisposal(mesh){const disposal={geometry:0,material:0};mesh.geometry.addEventListener('dispose',()=>disposal.geometry++);mesh.material.addEventListener('dispose',()=>disposal.material++);return disposal}

test('actual practice bot announces a shot, then damage occurs only when its visible projectile reaches the player',()=>{
 const {c,enemy,player,stats,scene}=fixture();
 c.updateEnemies(.01);assert.ok(enemy.shotPlan);assert.equal(c.botProjectiles.length,0);assert.equal(player.health,200);
 const recorded=enemy.shotPlan.direction.slice();c.updateEnemies(.3);
 assert.ok(enemy.shotPlan);assert.equal(enemy.mesh.userData.flash.visible,true);assert.equal(player.health,200);assert.equal(stats.shots,0);
 c.updateEnemies(.11);assert.equal(enemy.shotPlan,null);assert.equal(stats.shots,1);assert.equal(c.botProjectiles.length,1);assert.equal(player.health,200);
 const projectile=c.botProjectiles[0],disposal=watchDisposal(projectile.mesh);
 assert.equal(projectile.mesh.parent,scene);assert.ok(projectile.velocity.every((n,i)=>Math.abs(n/26-recorded[i])<1e-12));
 c.updateBotProjectiles(.1);assert.equal(player.health,200);assert.equal(c.botProjectiles.length,1);
 c.updateBotProjectiles(.5);assert.equal(player.health,194);assert.equal(c.botProjectiles.length,0);assert.equal(projectile.mesh.parent,null);
 assert.deepEqual(disposal,{geometry:1,material:1});assert.equal(c.damageOpacity,.8);
});

test('actual client bullets miss after a sidestep, duck, slide, or jump instead of using a random damage chance',()=>{
 for(const evasion of [{x:3},{height:1.05},{height:.78},{y:2.1}]){
  const {c,player}=fixture();c.launchBotShot(centered(),'bot');const projectile=c.botProjectiles[0];
  c.updateBotProjectiles(.1);assert.equal(player.health,200);
  if(evasion.x!==undefined)player.pos.x=evasion.x;if(evasion.y!==undefined)player.pos.y=evasion.y;if(evasion.height!==undefined)player.height=evasion.height;
  c.updateBotProjectiles(2);assert.equal(player.health,200,JSON.stringify(evasion));assert.equal(c.botProjectiles.length,0);assert.equal(projectile.mesh.parent,null);
 }
 const {c,player}=fixture();
 for(let n=0;n<240;n++){c.totalTime+=.1;c.updateEnemies(.1)}
 assert.ok(c.botProjectiles.length>0,'bots really fired while only their AI update ran');
 assert.equal(player.health,200,'planning and firing alone can never apply an unavoidable instant hit');
});

test('actual client projectile sweep stops at a thin wall and disposes its mesh before damaging the player',()=>{
 const {c,player,stats}=fixture();c.launchBotShot(centered(),'bot');const projectile=c.botProjectiles[0],disposal=watchDisposal(projectile.mesh);
 c.cover=[new THREE.Box3(new THREE.Vector3(-2,0,6),new THREE.Vector3(2,4,6.02))];
 c.updateBotProjectiles(.8);assert.equal(player.health,200);assert.equal(c.botProjectiles.length,0);assert.equal(stats.impacts,1);
 assert.ok(projectile.position[2]<=6.001);assert.deepEqual(disposal,{geometry:1,material:1});
 const hidden=fixture();hidden.c.cover=c.cover;hidden.c.updateEnemies(.1);assert.equal(hidden.enemy.shotPlan,undefined,'blocked line of sight prevents the windup as well');
});

test('actual wave clear and world reset remove all bot bullet meshes safely and refill the wave',async()=>{
 for(const operation of ['completeWave','clearWorld']){
  const {c,player,stats}=fixture();const shots=[];
  for(let n=0;n<3;n++){c.launchBotShot(centered(),'bot');const p=c.botProjectiles.at(-1);shots.push({mesh:p.mesh,disposal:watchDisposal(p.mesh)})}
  player.health=23;c[operation]();assert.equal(c.botProjectiles.length,0);
  for(const {mesh,disposal}of shots){assert.equal(mesh.parent,null);assert.deepEqual(disposal,{geometry:1,material:1})}
  c.clearBotShots();for(const {disposal}of shots)assert.deepEqual(disposal,{geometry:1,material:1},'cleanup is safe to repeat');
  c.updateBotProjectiles(1);assert.equal(player.health,operation==='completeWave'?200:23);
  if(operation==='completeWave'){assert.equal(stats.refills,1);assert.equal(stats.payouts,1);assert.equal(c.waveDelay,3)}else{assert.equal(c.enemies.length,0);assert.equal(c.worldGroup.parent,c.scene)}
  await Promise.resolve();
 }
});

test('actual bot launch caps visible bullets and a stun cancels the pending telegraph',()=>{
 const {c,enemy,player}=fixture();for(let n=0;n<BOT_SHOT_LIMIT+20;n++)c.launchBotShot(centered(),'bot');
 assert.equal(c.botProjectiles.length,BOT_SHOT_LIMIT);c.clearBotShots();
 c.updateEnemies(.01);assert.ok(enemy.shotPlan);enemy.stunUntil=10;c.totalTime=1;c.updateEnemies(.5);
 assert.equal(enemy.shotPlan,null);assert.equal(enemy.mesh.userData.flash.visible,false);assert.equal(c.botProjectiles.length,0);assert.equal(player.health,200);
});

function crossbowFixture(weapon){
 const visuals=[],timers=[];const elements=new Map();
 const c=vm.createContext({THREE,weapons,selectedWeapon:weapon,combat:true,paused:false,onlineDead:false,mode:'training',ammo:weapons[weapon].mag,reserveAmmo:weapons[weapon].reserve,reloading:0,shotCooldown:0,drawing:false,drawStarted:0,shotIndex:0,recoil:0,aim:false,meleeSwing:0,meleeBackSwing:false,muzzleTime:0,muzzle:new THREE.Object3D(),muzzleLight:{intensity:0},motion:{recoilSide:0,kickVelocity:0},camera:new THREE.PerspectiveCamera(),player:{grounded:true,speed:0,height:1.7},localAvatar:null,localProjectiles:[],projectileSeq:0,magazineInventory:new Map(),reserveInventory:new Map(),pendingReload:0,
  isPlayerStunned:()=>false,attackRay:()=>({origin:new THREE.Vector3(0,1.7,2),base:new THREE.Vector3(0,0,-1)}),makeProjectile,refillMagazine,makeProjectileVisual(p){visuals.push(p)},sound(){},updateWeaponHud(){},notice(){},cancelDraw(){c.drawing=false},setTimeout(callback,delay){timers.push({callback,delay})},$:(id)=>{if(!elements.has(id))elements.set(id,{hidden:true,textContent:''});return elements.get(id)}
 });
 extract(c,['beginAttack','shoot','reload','completeWeaponReload']);return {c,visuals,timers,elements};
}

test('actual crossbow click launches a bolt immediately without bow draw, and reload conserves finite ammunition',()=>{
 for(const w of weapons.filter(w=>w.crossbow)){
  const {c,visuals,timers}=crossbowFixture(w.id),initial=c.ammo+c.reserveAmmo;
  c.beginAttack();assert.equal(c.drawing,false,w.name);assert.equal(c.localProjectiles.length,1);assert.equal(visuals.length,1);assert.equal(c.localProjectiles[0].kind,'bolt');
  assert.equal(c.ammo,w.mag-1);assert.equal(c.reserveAmmo,w.reserve);assert.equal(c.ammo+c.reserveAmmo,initial-1);
  const speed=Math.hypot(...c.localProjectiles[0].velocity);assert.ok(Math.abs(speed-w.projectileSpeed)<1e-8);
  c.shotCooldown=0;c.reload();assert.equal(c.reloading,w.reload);c.completeWeaponReload();
  assert.equal(c.ammo,w.mag);assert.equal(c.reserveAmmo,w.reserve-1);assert.equal(c.ammo+c.reserveAmmo,initial-1);
  assert.equal(timers.length,w.mag===1?1:0);
 }
});


function frameFixture(){
 const setup=fixture(),{c,stats}=setup;stats.finishes=0;stats.impulses=0;
 Object.assign(c,{combat:true,lastTime:0,elapsed:0,shotCooldown:0,reloading:0,onlineDead:false,selectedWeapon:0,drawing:false,respawns:[],mouse:{down:false},viewMode:'first',motion:{ads:0},weaponRig:new THREE.Group(),camera:new THREE.PerspectiveCamera(),viewScene:new THREE.Scene(),viewCamera:new THREE.PerspectiveCamera(),renderer:{render(){},clearDepth(){}},
  requestAnimationFrame(){},updatePlayer(){},updateEnemies(){},updateEffects(){},drawMinimap(){},showViewWeapon:()=>true,
  finish(){stats.finishes++;c.paused=true},blastHits,damageForHit,applyImpulse(){stats.impulses++},explosionVisual(){}
 });
 extract(c,['frame','actorList','resolvePracticeProjectile']);
 c.launchBotShot(planBotShot({origin:[0,1.55,11.4],target:[0,1.55,12]},()=>0),'stale-bot');
 return setup;
}

test('actual frame clears a lethal stale bot bullet as soon as the last enemy dies, before the wave refill',async()=>{
 const {c,player,stats}=frameFixture();player.health=4;
 // The player's projectile kills the final bot during the real frame's projectile phase.
 c.updateProjectiles=()=>{c.enemies=[]};
 const stale=c.botProjectiles[0],disposal=watchDisposal(stale.mesh);
 c.frame(16);
 assert.equal(stats.finishes,0);assert.equal(c.paused,false);assert.equal(player.health,200);
 assert.equal(c.botProjectiles.length,0);assert.equal(stale.mesh.parent,null);assert.deepEqual(disposal,{geometry:1,material:1});
 assert.equal(c.waveDelay,3);assert.equal(stats.refills,1);assert.equal(stats.payouts,1);await Promise.resolve();
});

test('actual frame preserves a self-rocket elimination on the clear frame without healing a dead player',()=>{
 const {c,player,stats}=frameFixture();player.health=4;
 c.updateProjectiles=()=>{
  c.enemies=[];
  // Exercise the actual local rocket splash resolution, including self-damage, in that phase.
  c.resolvePracticeProjectile({weapon:51,owner:'local',kind:'rocket',position:[0,0,12],power:1,travel:0},{expired:false});
 };
 c.frame(16);
 assert.equal(stats.finishes,1);assert.equal(c.paused,true);assert.equal(player.health,0);assert.equal(stats.impulses,1);
 assert.equal(c.botProjectiles.length,0);assert.equal(c.waveDelay,0);assert.equal(stats.refills,0);assert.equal(stats.payouts,0);
});
