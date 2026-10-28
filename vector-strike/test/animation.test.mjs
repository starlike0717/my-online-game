import test from 'node:test';
import assert from 'node:assert/strict';
import {weaponActionPose,agentActionPose} from '../dist/animation.js';
import {weapons} from '../dist/catalog.js';

function numericLeaves(value){if(typeof value==='number')return[value];if(value&&typeof value==='object')return Object.values(value).flatMap(numericLeaves);return[]}
function close(actual,expected=0,epsilon=1e-10){assert.ok(Math.abs(actual-expected)<=epsilon,`${actual} should be near ${expected}`)}

test('all weapon actions return finite bounded render deltas for every catalog weapon',()=>{
 const inputs=[0,.08,.2,.36,.5,.7,.85,.97,1,NaN,Infinity,-1,10];
 for(const weapon of weapons)for(const p of inputs){
  const before=JSON.stringify(weapon),pose=weaponActionPose(weapon,{reloadProgress:p,attackProgress:p,shotProgress:p,sliding:p,crouched:p,hit:p,ads:p,airborne:p,moveSpeed:p*100,backAttack:true});
  assert.ok(numericLeaves(pose).every(Number.isFinite),weapon.name);
  assert.ok(pose.position.every(n=>Math.abs(n)<=.85));assert.ok(pose.rotation.every(n=>Math.abs(n)<=1.6));
  assert.equal(JSON.stringify(weapon),before,'animation cannot mutate a weapon profile');
 }
});

test('reload stages remove and replace the magazine before racking the bolt and returning to rest',()=>{
 const weapon=weapons.find(w=>w.cat==='ar'),at=p=>weaponActionPose(weapon,{reloadProgress:p});
 close(at(0).reload.weight);close(at(0).reload.magOut);close(at(1).reload.weight);close(at(1).reload.magOut);close(at(1).bolt);
 assert.ok(at(.37).magPosition[1]<-.35);assert.ok(at(.58).reload.magOut>.5);
 close(at(.73).reload.magOut);assert.ok(at(.83).bolt>.10);close(at(.96).bolt);
 for(const p of [0,1])for(const n of numericLeaves(at(p)).filter(n=>n!==1))close(n);
});

test('bows, crossbows, launchers, shotguns, and melee use appropriate reload gestures',()=>{
 const bow=weapons.find(w=>w.mechanic==='arrow'),rocket=weapons.find(w=>w.mechanic==='rocket'),melee=weapons.find(w=>w.mechanic==='melee');
 const nock=weaponActionPose(bow,{reloadProgress:.5}),launcher=weaponActionPose(rocket,{reloadProgress:.5});
 assert.equal(nock.reload.style,'nock');close(nock.reload.magOut);assert.ok(nock.triggerHand[2]<-.1);
 assert.equal(launcher.reload.style,'rocket');close(launcher.reload.magOut);assert.ok(launcher.supportHand[2]<-.3);
 assert.equal(weaponActionPose(melee,{reloadProgress:.5}).reload.style,'none');
 for(const n of numericLeaves(weaponActionPose(melee,{reloadProgress:.5})))close(n);
 const crossbows=weapons.filter(w=>w.crossbow);assert.equal(crossbows.length,1);
 const single=crossbows.find(w=>w.mag===1),repeater={...single,mag:4};
 assert.equal(weaponActionPose(single,{reloadProgress:.4}).reload.style,'nock');
 assert.ok(weaponActionPose(single,{reloadProgress:.4}).bolt>.18);
 assert.equal(weaponActionPose(repeater,{reloadProgress:.4}).reload.style,'magazine');
 const shotgun=weapons.find(w=>w.cat==='sg'&&!w.auto&&w.mag>2);assert.equal(weaponActionPose(shotgun,{reloadProgress:.5}).reload.style,'shell');
});

test('reload and melee phases are continuous and return smoothly at both endpoints',()=>{
 for(const weapon of [weapons[0],weapons[6],weapons[7],...weapons.filter(w=>w.crossbow),...weapons.filter(w=>w.mechanic==='melee')]){
  let previous=null;
  for(let i=0;i<=1000;i++){
   const p=i/1000,pose=weaponActionPose(weapon,{reloadProgress:p,attackProgress:p}),values=numericLeaves(pose);
   if(previous)assert.ok(Math.max(...values.map((n,j)=>Math.abs(n-previous[j])))<.03,weapon.name+' action has no phase jump');
   previous=values;
  }
  for(const p of [0,1]){const pose=weaponActionPose(weapon,{reloadProgress:p,attackProgress:p});pose.position.forEach(n=>close(n));pose.rotation.forEach(n=>close(n))}
 }
});

test('front melee swings and rear thrusts have distinct windup, strike, and recovery without extra firearm recoil',()=>{
 const knife=weapons.find(w=>w.mechanic==='melee'),front=weaponActionPose(knife,{attackProgress:.4}),rear=weaponActionPose(knife,{attackProgress:.4,backAttack:true});
 assert.ok(front.rotation[2]<-.9);assert.ok(Math.abs(rear.rotation[2])<.2);assert.ok(rear.position[2]<-.5);
 assert.ok(weaponActionPose(knife,{attackProgress:.12}).position[2]>0,'windup draws the knife back');
 assert.ok(Math.abs(weaponActionPose(knife,{attackProgress:.95}).rotation[2])<.1,'recovery eases toward rest');
 const gun=weaponActionPose(weapons[0],{shotProgress:.12});assert.deepEqual(gun.position,[0,0,0]);assert.deepEqual(gun.rotation,[0,0,0]);assert.ok(gun.bolt>0);
});

test('locomotion lowers and banks the weapon while ADS protects the sight alignment',()=>{
 const weapon=weapons[0],hip=weaponActionPose(weapon,{sliding:1,crouched:1,hit:1,airborne:1,moveSpeed:13}),ads=weaponActionPose(weapon,{sliding:1,crouched:1,hit:1,airborne:1,moveSpeed:13,ads:1});
 assert.ok(hip.position[1]<-.1);assert.ok(hip.rotation[2]<0);
 assert.ok(Math.hypot(...ads.position)<Math.hypot(...hip.position)*.15);
 const still=weaponActionPose(weapon,{sliding:1,crouched:1,airborne:1,ads:1});still.position.forEach(n=>close(n));still.rotation.forEach(n=>close(n));
});

test('agent motion has distinct walking, crouching, sliding, firing, hit, and melee poses',()=>{
 const rest=agentActionPose(),walk=agentActionPose({phase:Math.PI/2,moveSpeed:6}),crouch=agentActionPose({crouched:1}),slide=agentActionPose({sliding:1});
 assert.ok(walk.legs[0].rotation[0]>0&&walk.legs[1].rotation[0]<0);
 assert.ok(crouch.legs[0].knee>.6);assert.ok(crouch.torsoRotation[0]>0);
 assert.ok(slide.legs.every(leg=>leg.rotation[0]<-.9));assert.ok(slide.torsoRotation[0]<0);
 const shot=agentActionPose({shootTime:.16}),hit=agentActionPose({hitTime:.20}),strike=agentActionPose({attackProgress:.4});
 assert.ok(shot.gunPosition[2]<0);assert.ok(shot.arms[0].rotation[0]<0);
 assert.ok(hit.torsoRotation[0]<0);assert.ok(hit.headPosition[1]<0);assert.ok(strike.arms[1].rotation[0]>.4);
 for(const n of numericLeaves(rest))close(n);
});

test('agent hit/fire clips ease into impact then recover independently of frame rate without changing physics',()=>{
 let lastShoot=Infinity,lastHit=Infinity;
 for(let i=0;i<=100;i++){
  const state={phase:i/10,moveSpeed:8,shootTime:.18*(1-i/100),hitTime:.22*(1-i/100),crouched:.3,sliding:.2,airborne:.1,pitch:.4};
  const copy=structuredClone(state),a=agentActionPose(state),b=agentActionPose(state);
  assert.deepEqual(a,b);assert.deepEqual(state,copy);assert.ok(numericLeaves(a).every(Number.isFinite));
  if(i>=20){assert.ok(a.shoot<=lastShoot+1e-10);assert.ok(a.hit<=lastHit+1e-10);}lastShoot=a.shoot;lastHit=a.hit;
 }
 const malformed=agentActionPose({phase:Infinity,moveSpeed:NaN,hitTime:Infinity,shootTime:NaN,pitch:Infinity,sliding:NaN});
 assert.ok(numericLeaves(malformed).every(Number.isFinite));
 assert.ok(agentActionPose({pitch:100}).gunRotation.every(n=>Math.abs(n)<=1.6));
 close(agentActionPose({shootTime:0,hitTime:0}).shoot);close(agentActionPose({shootTime:0,hitTime:0}).hit);
});
