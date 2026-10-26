import test from 'node:test';
import assert from 'node:assert/strict';
import {BOT_SHOT_LIMIT,planBotShot,createBotShot,stepBotShot} from '../dist/bot-combat.js';

const actor=(changes={})=>({x:0,y:0,z:-12,height:1.7,yaw:0,health:200,...changes});
const aimed=(changes={})=>planBotShot({origin:[0,1.55,0],target:[0,1.55,-12],...changes},()=>0);
function simulate(shot,player,{fps=60,blocks=[]}={}){
 for(let n=0;n<fps*4;n++){const result=stepBotShot(shot,1/fps,blocks,player);if(result.done)return result}
 throw new Error('A practice bullet must expire within its short lifetime');
}

test('bot fire is telegraphed and slower/wider/less damaging on easier difficulties',()=>{
 const plans=['easy','normal','hard'].map(difficulty=>planBotShot({origin:[0,1.55,0],target:[0,1.55,-12],difficulty,wave:1},()=>.75));
 assert.ok(plans[0].readyDelay>plans[1].readyDelay&&plans[1].readyDelay>plans[2].readyDelay);
 assert.ok(plans.every(p=>p.readyDelay>=.3&&p.readyDelay<=.5));
 assert.deepEqual(plans.map(p=>p.speed),[22,26,30]);
 assert.ok(plans[0].damage<plans[1].damage&&plans[1].damage<plans[2].damage);
 const deviation=p=>Math.acos(-p.direction[2]);
 assert.ok(deviation(plans[0])>deviation(plans[1])&&deviation(plans[1])>deviation(plans[2]));
 for(const difficulty of ['easy','normal','hard'])for(const wave of [0,1,10,500,Infinity]){
  const p=aimed({difficulty,wave});assert.ok(p.damage>=1&&p.damage<=10);assert.ok(p.life<=3);
 }
 assert.equal(BOT_SHOT_LIMIT,96);
});

test('aim is recorded once: plans copy inputs and bullets never home toward later player movement',()=>{
 const origin=[0,1.55,0],target=[0,1.55,-12],plan=aimed({origin,target});origin[0]=99;target[0]=99;
 assert.equal(plan.origin[0],0);assert.equal(plan.direction[0],0);
 const p=createBotShot(plan,'shot','bot'),velocity=p.velocity.slice(),player=actor();
 const early=stepBotShot(p,.12,[],player);assert.equal(early.done,false);assert.equal(player.health,200);
 player.x=2;assert.equal(simulate(p,player).hit,false);assert.deepEqual(p.velocity,velocity);
 const still=createBotShot(aimed(),'static','bot'),impact=simulate(still,actor());assert.equal(impact.hit,true);assert.equal(impact.damage,6);
 assert.equal(plan.origin[2],0,'flight must not mutate the windup plan');
});

test('crouching, sliding, and sidestepping can evade a shot already aimed at the standing torso',()=>{
 for(const changes of [{height:1.05},{height:.78},{x:1.5},{y:2.1}]){
  const p=createBotShot(aimed(),'dodge','bot'),player=actor();
  assert.equal(stepBotShot(p,.15,[],player).done,false);Object.assign(player,changes);
  assert.equal(simulate(p,player).hit,false,JSON.stringify(changes));assert.equal(player.health,200);
 }
 const lowAim=aimed({origin:[0,.8,0],target:[0,.8,-12]}),low=createBotShot(lowAim,'low','bot');
 assert.equal(simulate(low,actor({height:1.05})).hit,true,'crouching changes the hitbox rather than granting invulnerability');
});

test('swept projectiles hit a standing target consistently at 30, 60, 120 FPS and over a long frame',()=>{
 const travels=[];
 for(const fps of [30,60,120]){
  const p=createBotShot(aimed(),'fps','bot'),player=actor(),hit=simulate(p,player,{fps});
  assert.equal(hit.hit,true);assert.equal(hit.wall,false);assert.equal(hit.head,false);assert.equal(player.health,200);
  travels.push(p.travel);assert.equal(stepBotShot(p,.1,[],player).hit,false,'an already consumed shot cannot deal damage twice');
 }
 assert.ok(Math.max(...travels)-Math.min(...travels)<1e-8);
 const fast=createBotShot(aimed(),'frame','bot');assert.equal(stepBotShot(fast,.8,[],actor()).hit,true);
});

test('world walls and floor stop bullets before the player, including thin walls and Vector3-like bounds',()=>{
 const walls=[{min:[-2,0,-6.02],max:[2,4,-6]},{min:{x:-2,y:0,z:-6.02},max:{x:2,y:4,z:-6}}];
 for(const block of walls){
  const p=createBotShot(aimed(),'wall','bot'),hit=stepBotShot(p,1,[block],actor());
  assert.equal(hit.wall,true);assert.equal(hit.hit,false);assert.equal(hit.damage,0);assert.ok(p.position[2]>-6.03);
 }
 const floorPlan=aimed({origin:[0,1,0],target:[0,-4,-2]}),floor=createBotShot(floorPlan,'floor','bot');
 const hit=stepBotShot(floor,1,[],null);assert.equal(hit.wall,true);assert.ok(Math.abs(floor.position[1])<1e-8);
});

test('current head/stance geometry is respected, with no hits on dead actors or the carried weapon',()=>{
 const headPlan=aimed({origin:[0,2,0],target:[0,2,-12]}),head=createBotShot(headPlan,'head','bot');
 assert.equal(simulate(head,actor()).head,true);
 const dead=createBotShot(aimed(),'dead','bot');assert.equal(simulate(dead,actor({health:0})).hit,false);
 const weaponPlan=aimed({origin:[2,1.22,-10.7],target:[-2,1.22,-10.7]}),weapon=createBotShot(weaponPlan,'weapon','bot');
 assert.equal(simulate(weapon,actor()).hit,false,'a carried gun is not an enlarged body hitbox');
});

test('plans remain finite for vertical/overlapping targets and movement increases spread without predicting position',()=>{
 for(const target of [[0,1.55,0],[0,20,0],[0,-20,0]])for(const random of [()=>0,()=>1,()=>NaN]){
  const p=planBotShot({origin:[0,1.55,0],target},random);
  assert.ok(p.direction.every(Number.isFinite));assert.ok(Math.abs(Math.hypot(...p.direction)-1)<1e-12);
 }
 const request={origin:[0,1.55,0],target:[0,1.55,-12]};
 const stationary=planBotShot(request,()=>.5),moving=planBotShot({...request,velocity:[9,0,0]},()=>.5);
 assert.ok(Math.abs(moving.direction[0])>Math.abs(stationary.direction[0]));
 const centered=planBotShot({...request,velocity:[9,0,0]},()=>0);assert.equal(centered.direction[0],0,'the shot does not lead or track a moving target');
 const p=createBotShot(aimed(),'expiry','bot');assert.equal(stepBotShot(p,NaN,[],null).done,false);assert.equal(p.life,3);
 assert.equal(stepBotShot(p,4,[],null).expired,true);assert.ok(p.travel<=26*3+1e-8);
});
