import {addViewArms,updateViewArms,articulateAgent,poseAgentRig} from '../dist/rigging.js';
import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {readFile} from 'node:fs/promises';
import * as THREE from '../dist/vendor/three.module.js';
import {weapons} from '../dist/catalog.js';
import {addWeaponDetails,makeCrossbow} from '../dist/weapon-models.js';
import {weaponActionPose,agentActionPose} from '../dist/animation.js';
import {cameraPosition,showViewWeapon,weaponViewPose,aimCameraPosition,zoomFov} from '../dist/view.js';
import {advanceMovement} from '../dist/movement.js';
import {spreadForShot} from '../dist/combat.js';

// Exercise the saved client functions with real Three.js models and movement.
// DOM/audio boundaries are inert; these tests do not render pixels or use a browser.
const source=await readFile(new URL('../dist/game.js',import.meta.url),'utf8');
function body(name){const start=source.indexOf('function '+name+'(');assert.ok(start>=0,name);const next=source.slice(start+1).search(/\n(?:async )?function /);return source.slice(start,next<0?source.length:start+1+next)}
function fixture(id=0){
 const elements=new Map(),element=()=>({hidden:true,textContent:'',style:{setProperty(){}},classList:{values:new Map(),toggle(key,value){this.values.set(key,value)}},querySelector(){return this.child??=element()}});
 const c=vm.createContext({THREE,addViewArms,updateViewArms,articulateAgent,poseAgentRig,weapons,addWeaponDetails,makeCrossbow,weaponActionPose,agentActionPose,cameraPosition,showViewWeapon,weaponViewPose,aimCameraPosition,zoomFov,advanceMovement,spreadForShot,
  selectedWeapon:id,weaponRig:null,weaponParts:{},viewScene:new THREE.Scene(),scene:new THREE.Scene(),camera:new THREE.PerspectiveCamera(85,16/9,.08,240),viewCamera:new THREE.PerspectiveCamera(70,16/9,.02,10),matCache:new Map(),
  magazineInventory:new Map(),reserveInventory:new Map(),rigWeapon:null,muzzle:null,muzzleLight:null,ammo:0,reserveAmmo:0,pendingEquip:0,pendingReload:0,actionSeq:0,aim:false,reloading:0,shotCooldown:0,weaponSwitch:0,combat:false,mode:'bots',
  player:{pos:new THREE.Vector3(),vel:new THREE.Vector3(),yaw:0,pitch:0,height:1.7,health:200,grounded:true,jumps:0,slide:0,slideCooldown:0,slideDir:new THREE.Vector3(),dash:0,dashCooldown:0,dashSpeed:0,speed:0,bob:0,land:0,stepOffset:0,coyote:.1,jumpBuffer:0},
  motion:{slide:0,crouch:0,air:0,flinch:0,ads:0,swayX:0,swayY:0,strafe:0,recoilSide:0,kickVelocity:0,landVelocity:0},
  settings:{shake:false,fov:85,aimZoom:1.5,scopeZoom:3.5},keys:new Set(),mouse:{dx:0,dy:0},touchMove:{x:0,y:0},isTouch:false,pointerFallback:false,document:{pointerLockElement:null},
  recoil:0,kick:0,damageOpacity:0,meleeSwing:0,meleeBackSwing:false,viewMode:'first',onlineDead:false,localAvatar:null,cover:[],coverMeshes:[],lookEuler:new THREE.Euler(0,0,0,'YXZ'),drawing:false,drawStarted:0,performance:{now:()=>425},elapsed:0,lastStep:0,lastTime:0,innerWidth:1280,innerHeight:720,
  cancelDraw(){},updateWeaponHud(){},renderQuickSlots(){},updateQuickMelee(){},isPlayerStunned:()=>false,updateMeleeHud(){},updateMobilityHud(){},notice(){},sound(){},requestAnimationFrame(){},
  clamp:(value,min,max)=>Math.max(min,Math.min(max,value)),lerp:(a,b,t)=>a+(b-a)*t,exp:(value,target,rate,dt)=>value+(target-value)*(1-Math.exp(-rate*dt)),
  $:id=>{if(!elements.has(id))elements.set(id,element());return elements.get(id)}
 });
 new vm.Script(['spring','mat','box','cylinder','restTransform','applyModelPose','createSpecialWeapon','createMeleeWeapon','finishWeapon','createWeapon','updatePlayer','frame'].map(body).join('\n')).runInContext(c);
 c.createWeapon(false);c.weaponSwitch=0;c.shotCooldown=0;
 c.step=(count=1,dt=1/60)=>{for(let i=0;i<count;i++){c.elapsed+=dt;c.updatePlayer(dt)}};
 c.dispose=()=>c.weaponRig.traverse(o=>o.geometry?.dispose());
 return c;
}
function near(actual,expected,epsilon=1e-8){assert.ok(Math.abs(actual-expected)<epsilon,`${actual} should be near ${expected}`)}
function opaqueAndVisible(object){for(let o=object;o;o=o.parent)if(!o.visible)return false;return !object.material.transparent||object.material.opacity>.5}

test('all 75 client weapon builds retain rest transforms and update reload/optional parts without errors or drift',()=>{
 for(const w of weapons){
  const c=fixture(w.id);
  for(const [key,part]of Object.entries(c.weaponParts))if(part?.isObject3D){assert.ok(c.weaponParts.rest[key],w.name+' '+key+' has a rest transform');assert.ok(c.weaponParts.rest[key].p.concat(c.weaponParts.rest[key].r).every(Number.isFinite))}
  if(w.reload>0){c.reloading=w.reload*.5;c.step(2)}
  c.reloading=0;c.step(2);
  for(const key of ['mag','bolt','supportHand','triggerHand']){
   const part=c.weaponParts[key],base=c.weaponParts.rest[key];if(!part||!base)continue;
   part.position.toArray().forEach((n,i)=>near(n,base.p[i]));[part.rotation.x,part.rotation.y,part.rotation.z].forEach((n,i)=>near(n,base.r[i]));
  }
  const bounds=new THREE.Box3().setFromObject(c.weaponRig);assert.ok(bounds.min.toArray().concat(bounds.max.toArray()).every(Number.isFinite),w.name);
  c.dispose();
 }
});

test('actual first-person client ADS keeps full gun models, open aligned sights, and stable projection across viewports',()=>{
 for(const w of weapons.filter(w=>!w.mechanic||w.mechanic==='rocket'||w.crossbow)){
  const c=fixture(w.id);c.aim=true;c.motion.ads=1;
  for(const aspect of [.7,16/9]){
   c.innerWidth=aspect*720;c.step(120);c.viewScene.updateMatrixWorld(true);
   const refs=c.weaponRig.userData.sights;assert.ok(refs,w.name);
   for(const point of [refs.rear,refs.front]){
    const projected=new THREE.Vector3(...point).applyMatrix4(c.weaponRig.matrixWorld).project(c.viewCamera);
    near(projected.x,0);near(projected.y,0);
   }
   const hits=new THREE.Raycaster(new THREE.Vector3(),new THREE.Vector3(0,0,-1),.02,4).intersectObject(c.weaponRig,true).filter(h=>h.object.isMesh&&opaqueAndVisible(h.object));
   assert.deepEqual(hits.map(h=>h.object.name),[],w.name+' full model leaves the center target visible');
   assert.equal(c.viewCamera.aspect,Math.max(1.4,aspect));near(c.weaponRig.scale.x,.7);near(c.weaponRig.position.z,-.95);
  }
  assert.equal(c.$('scopeOverlay').hidden,w.cat!=='sr');
  c.dispose();
 }
});

test('bow drawing keeps the drawing hand attached to the moving string instead of resetting its pose',()=>{
 const c=fixture(50);c.drawing=true;c.step();
 const charge=.425/weapons[50].chargeTime,base=c.weaponParts.rest.drawHand;
 near(c.weaponParts.drawHand.position.z,base.p[2]+charge*.35);
 near(c.weaponParts.arrow.position.z,charge*.3);
 near(c.weaponParts.string.geometry.attributes.position.getZ(1),.12+charge*.35,1e-6);
 c.drawing=false;c.step();near(c.weaponParts.drawHand.position.z,base.p[2]);c.dispose();
});

test('crossbow bolts settle into their rail before reload finishes and do not snap vertically at completion',()=>{
 for(const w of weapons.filter(w=>w.crossbow)){
  const c=fixture(w.id),rest=c.weaponParts.rest.arrow;c.ammo=0;
  c.reloading=w.reload*.4;c.step();assert.equal(c.weaponParts.arrow.visible,false);
  c.reloading=w.reload*.29;c.step();assert.equal(c.weaponParts.arrow.visible,true);assert.ok(c.weaponParts.arrow.position.y>=rest.p[1]);
  c.reloading=w.reload*.06;c.step();near(c.weaponParts.arrow.position.y,rest.p[1]);
  const before=c.weaponParts.arrow.position.clone();c.reloading=0;c.ammo=w.mag;c.step();assert.ok(c.weaponParts.arrow.position.distanceTo(before)<1e-8);c.dispose();
 }
});

test('third-person ADS reaches the exact eye and preserves yaw/pitch orientation without shoulder parallax',()=>{
 const c=fixture(42);c.player.pos.set(5,0,9);c.player.yaw=Math.PI*8+.7;c.player.pitch=-.2;c.viewMode='third';c.aim=true;c.motion.ads=1;c.step();
 const eye=c.player.pos.clone().add(new THREE.Vector3(0,c.player.height,0));assert.ok(c.camera.position.distanceTo(eye)<1e-10);
 const expected=new THREE.Quaternion().setFromEuler(new THREE.Euler(c.player.pitch,c.player.yaw,0,'YXZ'));assert.ok(c.camera.quaternion.angleTo(expected)<1e-7);
 c.dispose();
});

test('frame dispatch includes the weapon view rig during ADS in both camera modes and hides it on death',()=>{
 const c=fixture(42),dispatch=[];
 c.combat=true;c.paused=true;c.renderer={clearDepth(){},render(scene){dispatch.push({view:scene===c.viewScene,visible:c.weaponRig.visible})}};
 for(const viewMode of ['first','third']){c.viewMode=viewMode;c.motion.ads=1;c.frame(1000);assert.equal(dispatch.at(-1).view,true);assert.equal(dispatch.at(-1).visible,true)}
 c.onlineDead=true;c.frame(1016);assert.equal(dispatch.at(-1).visible,false);
 c.onlineDead=false;c.viewMode='third';c.motion.ads=0;c.frame(1032);assert.equal(dispatch.at(-1).visible,false);c.dispose();
});
