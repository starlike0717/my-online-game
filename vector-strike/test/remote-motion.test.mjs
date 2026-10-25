import {MAX_HEALTH} from '../dist/combat.js';
import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';
import * as THREE from '../dist/vendor/three.module.js';
const source=await readFile(new URL('../dist/game.js',import.meta.url),'utf8');
function extract(name){const start=source.indexOf('function '+name+'('),end=source.indexOf('\nfunction ',start+1);return source.slice(start,end)}
const body=['syncRemoteSpawn','updateRemoteAgents'].map(extract).join('\n');
function fixture(){
 const mesh=new THREE.Group();mesh.userData.legs=[new THREE.Group(),new THREE.Group()];const actor={mesh,phase:1,team:1,wasAlive:true},p={id:'other',x:0,y:0,z:0,yaw:0,height:1.7,health:MAX_HEALTH},agents=new Map([['other',actor]]),players=new Map([['other',p]]);
 const c=vm.createContext({MAX_HEALTH,THREE,animateAgent(){},remoteAgents:agents,net:{players},onlineDead:false,paused:false,exp:(v,goal,speed,dt)=>v+(goal-v)*(1-Math.exp(-speed*dt)),removeRemote:id=>agents.delete(id)});new vm.Script(body).runInContext(c);return{mesh,actor,p,players,agents,spawn(m){c.syncRemoteSpawn({id:'other',y:0,yaw:0,...m})},step(dt=1/60){c.updateRemoteAgents(dt)}};
}
test('a remote respawn appears at its new position immediately instead of flying from the death location',()=>{
 const f=fixture();f.mesh.scale.y=.65;f.mesh.userData.legs[0].rotation.x=.8;f.p.health=0;f.step();assert.equal(f.mesh.visible,false);Object.assign(f.p,{health:MAX_HEALTH,x:20,z:-20,yaw:.7});f.step();assert.equal(f.mesh.visible,true);assert.deepEqual(f.mesh.position.toArray(),[20,0,-20]);assert.equal(f.mesh.rotation.y,.7+Math.PI);assert.equal(f.mesh.scale.y,1);assert.equal(f.mesh.userData.legs[0].rotation.x,0);
});
test('a large authoritative correction is applied without a visible route across the arena',()=>{
 const f=fixture();Object.assign(f.p,{x:12,y:3,z:-8,yaw:1});f.step();assert.deepEqual(f.mesh.position.toArray(),[12,3,-8]);assert.equal(f.mesh.rotation.y,1+Math.PI);
});
test('ordinary movement and crouching keep their smooth interpolation and walking animation',()=>{
 const f=fixture();Object.assign(f.p,{x:.6,height:1.1});f.step();assert.ok(f.mesh.position.x>0&&f.mesh.position.x<.6);assert.ok(f.mesh.scale.y<1&&f.mesh.scale.y>1.1/1.7);assert.notEqual(f.mesh.userData.legs[0].rotation.x,0);for(let n=0;n<30;n++)f.step();assert.ok(Math.abs(f.mesh.position.x-.6)<.001);assert.ok(Math.abs(f.mesh.scale.y-1.1/1.7)<.001);
});
test('normal facing changes use the short turn across pi and disconnected models are removed',()=>{
 const f=fixture(),before=Math.PI-.04;f.mesh.rotation.y=before;f.p.yaw=-Math.PI+.04-Math.PI;f.step();assert.ok(f.mesh.rotation.y>before&&f.mesh.rotation.y-before<.04);f.players.delete('other');f.step();assert.equal(f.agents.size,0);
});

test('the spawn event resets even a nearby respawn when no dead frame was rendered',()=>{
 const f=fixture();assert.equal(f.actor.wasAlive,true);f.spawn({x:2,z:-1,yaw:.5});f.step();assert.deepEqual(f.mesh.position.toArray(),[2,0,-1]);assert.equal(f.mesh.rotation.y,.5+Math.PI);assert.equal(f.mesh.scale.y,1);
});
