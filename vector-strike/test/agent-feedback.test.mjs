import {addViewArms,updateViewArms,articulateAgent,poseAgentRig} from '../dist/rigging.js';
import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {readFile} from 'node:fs/promises';
import {agentActionPose} from '../dist/animation.js';
import * as THREE from '../dist/vendor/three.module.js';
const source=await readFile(new URL('../dist/game.js',import.meta.url),'utf8');
function body(name){const a=source.indexOf('function '+name+'('),b=source.indexOf('\nfunction ',a+1);return source.slice(a,b)}
function fixture(){const c=vm.createContext({THREE,addViewArms,updateViewArms,articulateAgent,poseAgentRig,agentActionPose,matCache:new Map(),dyingAgents:[],worldGroup:new THREE.Group()});new vm.Script(['restTransform','applyModelPose','mat','box','cylinder','makeAgent','flashAgent','fireAgent','animateAgent','retireAgent','updateDyingAgents'].map(body).join('\n')).runInContext(c);return c}
test('a hit tints only that agent red, then restores its original materials',()=>{
 const c=fixture(),a=c.makeAgent(),b=c.makeAgent(),mat=a.userData.torso.material,other=b.userData.torso.material,original=mat.color.getHex();assert.notEqual(mat,other);c.flashAgent(a);assert.notEqual(mat.color.getHex(),original);assert.ok(mat.color.r>mat.color.g*2);assert.equal(other.color.getHex(),original);c.animateAgent(a,.3);assert.equal(mat.color.getHex(),original);assert.equal(mat.emissiveIntensity,a.userData.hitMaterials.find(m=>m.material===mat).intensity);
});
test('bot firing animates muzzle, gun recoil, and arms independently then returns to rest',()=>{
 const c=fixture(),a=c.makeAgent(),b=c.makeAgent();c.fireAgent(a);assert.equal(a.userData.flash.visible,true);c.animateAgent(a,.02);assert.ok(a.userData.gun.position.z<.79);assert.ok(a.userData.arms[0].rotation.x<0);assert.equal(b.userData.flash.visible,false);c.animateAgent(a,.08);assert.equal(a.userData.flash.visible,false);assert.ok(a.userData.shootTime>0);c.animateAgent(a,.2);assert.equal(a.userData.gun.position.z,.79);assert.equal(a.userData.arms[0].rotation.x,0);
});
test('lethal hits keep a brief red silhouette and release its owned geometry and materials',()=>{
 const c=fixture(),a=c.makeAgent();c.worldGroup.add(a);let disposed=0;a.userData.torso.material.addEventListener('dispose',()=>disposed++);c.retireAgent(a);assert.equal(c.dyingAgents.length,1);assert.ok(a.userData.torso.material.color.r>a.userData.torso.material.color.g);c.updateDyingAgents(.05);assert.equal(a.parent,c.worldGroup);assert.ok(a.userData.torso.material.opacity<1);c.updateDyingAgents(.2);assert.equal(a.parent,null);assert.equal(c.dyingAgents.length,0);assert.ok(disposed>0);
});
