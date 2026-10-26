import test from 'node:test';
import assert from 'node:assert/strict';
import {weaponViewPose,adsEyeBlend,aimCameraPosition,showViewWeapon,cameraPosition} from '../dist/view.js';
import * as THREE from '../dist/vendor/three.module.js';
import {addWeaponDetails,makeCrossbow} from '../dist/weapon-models.js';
import {weapons} from '../dist/catalog.js';

// Perspective projection with the view camera at its default origin facing -Z.
function project(point,pose){
 const p=point.map((n,i)=>n*pose.scale+[pose.x,pose.y,pose.z][i]);
 const tangent=Math.tan(pose.fov*Math.PI/360);
 return [p[0]/(-p[2]*tangent*pose.aspect),p[1]/(-p[2]*tangent),-p[2]];
}
const references=[
 {weapon:{cat:'hg'},rear:[0,.215,.145],front:[0,.215,-.32],opening:.065,receiverTop:.1775},
 {weapon:{cat:'ar'},rear:[0,.265,.30],front:[0,.265,-.60],opening:.09,receiverTop:.1775},
 {weapon:{cat:'sr'},rear:[0,.29,.22],front:[0,.29,-.245],opening:.12,receiverTop:.1775},
 {weapon:{cat:'bow',mechanic:'arrow'},rear:[0,.265,.27],front:[0,.265,-.68],opening:.09,receiverTop:.1775}
];

test('ADS retains the first-person weapon through the complete zoom animation',()=>{
 for(const ads of [0,.01,.31,.32,.5,.9,.99,1])assert.equal(showViewWeapon(false,ads),true);
 assert.equal(showViewWeapon(false,1,true),false);
 assert.equal(showViewWeapon(true,0),false);
 assert.equal(showViewWeapon(true,.5),false);
 assert.equal(showViewWeapon(true,1),true);
 assert.equal(showViewWeapon(true,1,true),false);
});

test('rear and front sight centers share the aiming ray in wide and narrow viewports',()=>{
 for(const reference of references)for(const aspect of [.55,.8,1,1.4,16/9,21/9]){
  const pose=weaponViewPose(reference.weapon,1,aspect,reference);
  for(const point of [reference.rear,reference.front]){
   const [x,y,depth]=project(point,pose);
   assert.ok(Math.abs(x)<1e-12,`horizontal alignment ${reference.weapon.cat}/${aspect}`);
   assert.ok(Math.abs(y)<1e-12,`vertical alignment ${reference.weapon.cat}/${aspect}`);
   assert.ok(depth>.5,'the sight must remain comfortably ahead of the camera near plane');
  }
  const left=project([-reference.opening/2,reference.rear[1],reference.rear[2]],pose)[0];
  const right=project([reference.opening/2,reference.rear[1],reference.rear[2]],pose)[0];
  assert.ok(left<-.01&&right>.01,'the rear notch has a visible opening around the target');
  assert.ok(project([0,reference.receiverTop,0],pose)[1]<-.035,'the receiver stays below the central aiming opening');
 }
});

test('zoom keeps model depth and scale stable instead of enlarging the receiver into the camera',()=>{
 for(const reference of references)for(const aspect of [.55,1,16/9,3]){
  const hip=weaponViewPose(reference.weapon,0,aspect,reference),aimed=weaponViewPose(reference.weapon,1,aspect,reference);
  assert.equal(aimed.z,hip.z);assert.equal(aimed.scale,hip.scale);
  assert.equal(aimed.aspect,Math.max(1.4,aspect));
  // The zoom ratio is bounded even on portrait displays.
  const ratio=Math.tan(hip.fov*Math.PI/360)/Math.tan(aimed.fov*Math.PI/360);
  assert.ok(ratio<1.4);
 }
});

test('actual iron sights, open sniper scopes, and crossbows leave the target ray unobstructed',()=>{
 const ranged=weapons.filter(w=>!w.mechanic||w.mechanic==='rocket'||w.shape==='crossbow'||w.crossbow);
 for(const w of ranged){
  const rig=new THREE.Group();
  if(w.shape==='crossbow'||w.crossbow)makeCrossbow(THREE,rig,w);else addWeaponDetails(THREE,rig,w);
  const sights=rig.userData.sights;assert.ok(sights,w.name+' needs sight metadata');
  const pose=weaponViewPose(w,1,16/9,sights);rig.position.set(pose.x,pose.y,pose.z);rig.scale.setScalar(pose.scale);rig.updateMatrixWorld(true);
  const ray=new THREE.Raycaster(new THREE.Vector3(),new THREE.Vector3(0,0,-1),.02,4);
  const opaque=ray.intersectObject(rig,true).filter(h=>h.object.isMesh&&h.object.visible&&(!h.object.material.transparent||h.object.material.opacity>.5));
  assert.deepEqual(opaque.map(h=>h.object.name),[],w.name+' must not hide the target with a sight cap or front post');
  for(const point of [sights.rear,sights.front]){
   const [x,y]=project(point,pose);assert.ok(Math.abs(x)<1e-12&&Math.abs(y)<1e-12,w.name+' sight references align');
  }
  let meshes=0;rig.traverse(o=>{if(o.isMesh)meshes++});assert.ok(meshes>10,w.name+' keeps its detailed visible model');
  rig.traverse(o=>o.geometry?.dispose());
 }
});

test('third-person ADS removes shoulder parallax smoothly and settles exactly at the eye',()=>{
 const eye=[3,1.7,-4],third=cameraPosition(eye,.7,.2),steps=[0,.2,.4,.6,.8,.9,1];
 let previous=Infinity;
 for(const ads of steps){
  const position=aimCameraPosition(eye,third,ads),distance=Math.hypot(...position.map((n,i)=>n-eye[i]));
  assert.ok(distance<=previous+1e-12);previous=distance;
  if(showViewWeapon(true,ads))assert.ok(distance<.06,'view sights only appear after the camera is nearly at the eye');
 }
 assert.deepEqual(aimCameraPosition(eye,third,0),third);
 assert.deepEqual(aimCameraPosition(eye,third,.9),eye);
 assert.deepEqual(aimCameraPosition(eye,third,1),eye);
 assert.equal(adsEyeBlend(-1),0);assert.equal(adsEyeBlend(2),1);
});

test('legacy bows and melee retain useful poses while malformed viewport values stay finite',()=>{
 const bow=weaponViewPose({mechanic:'arrow'},1,NaN),melee=weaponViewPose({mechanic:'melee'},1,0);
 assert.equal(bow.x,.16);assert.equal(bow.y,-.1);
 assert.equal(melee.x,.2);assert.equal(melee.y,-.25);
 for(const pose of [bow,melee,weaponViewPose({},NaN,-1)])for(const value of Object.values(pose))assert.ok(Number.isFinite(value));
});
