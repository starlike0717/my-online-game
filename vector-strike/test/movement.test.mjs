import test from 'node:test';
import assert from 'node:assert/strict';
import {Vector3,Box3} from '../dist/vendor/three.module.js';
import {advanceMovement,startSlide} from '../dist/movement.js';
import {weapons} from '../dist/catalog.js';
export function player(){return{pos:new Vector3(),vel:new Vector3(),yaw:0,height:1.7,grounded:true,jumps:0,coyote:.1,jumpBuffer:0,slide:0,slideCooldown:0,slideDir:new Vector3(),stepOffset:0}}
function run(p,seconds,control={},w=weapons[0],cover=[],fps=120){for(let i=0;i<Math.round(seconds*fps);i++)advanceMovement(p,control,w,cover,1/fps);return p}
const speed=p=>Math.hypot(p.vel.x,p.vel.z);
test('ground input responds quickly, stops smoothly, and diagonal movement has no speed advantage',()=>{
 const p=player();run(p,.2,{forward:1});assert.ok(speed(p)>5.4&&speed(p)<5.8);run(p,.35,{});assert.ok(speed(p)<.1);
 const forward=run(player(),1,{forward:1}),diagonal=run(player(),1,{forward:1,right:1});assert.ok(Math.abs(speed(forward)-speed(diagonal))<.001);
 assert.ok(speed(run(player(),1,{forward:1,sprint:true},weapons[10]))>speed(run(player(),1,{forward:1,sprint:true},weapons[7])));
});
test('slide jump keeps momentum, can steer, and cannot spam the slide cooldown',()=>{
 const p=run(player(),.4,{forward:1,sprint:true});assert.equal(startSlide(p),true);assert.equal(startSlide(p),false);run(p,.15,{forward:1,right:.5});assert.ok(p.vel.x>0);const initial=speed(p);p.jumpBuffer=.14;advanceMovement(p,{forward:1,sprint:true},weapons[0],[],1/120);assert.equal(p.grounded,false);assert.equal(p.slide,0);run(p,.15,{});assert.ok(speed(p)>initial*.9);assert.ok(p.pos.y>1);
});
test('coyote time and pre-landing input buffer prevent dropped jump presses',()=>{
 const coyote=player();Object.assign(coyote,{grounded:false,coyote:.07,jumpBuffer:.14});coyote.pos.y=1;const events=advanceMovement(coyote,{},weapons[0],[],1/120);assert.ok(events.some(e=>e.type==='jump'&&!e.double));
 const buffered=player();Object.assign(buffered,{grounded:false,jumps:2,coyote:0,jumpBuffer:.14});buffered.pos.y=.06;buffered.vel.y=-2;run(buffered,.1);assert.equal(buffered.grounded,false);assert.equal(buffered.jumps,1);assert.ok(buffered.vel.y>7);
});
test('walls block motion, low steps can be walked up, and low ceilings prevent standing',()=>{
 const wall=new Box3(new Vector3(-2,0,-2),new Vector3(2,3,-1)),p=run(player(),1,{forward:1},weapons[0],[wall]);assert.ok(p.pos.z>=-.66-.0001);
 const step=new Box3(new Vector3(-2,0,-3),new Vector3(2,.3,-1)),up=run(player(),.4,{forward:1},weapons[0],[step]);assert.equal(up.pos.y,.3);
 const roof=new Box3(new Vector3(-2,1.35,-2),new Vector3(2,2,2)),low=player();low.height=1.1;run(low,.4,{},weapons[0],[roof]);assert.ok(low.height<=1.11);
});
test('30/60/120 FPS produce matching routes and jump arcs in the actual game integrator',()=>{
 const routes=[];
 for(const fps of [30,60,120]){const p=player();let peak=0;for(let i=0;i<fps*2;i++){if(i===fps/5||i===fps/2)p.jumpBuffer=.14;advanceMovement(p,{forward:1,sprint:true,right:i>=fps?.4:0},weapons[0],[],1/fps);peak=Math.max(peak,p.pos.y)}routes.push({position:p.pos.toArray(),peak})}
 for(const r of routes){assert.ok(r.peak>2.8&&r.peak<3.4);for(let n=0;n<3;n++)assert.ok(Math.abs(r.position[n]-routes[0].position[n])<.02);assert.ok(Math.abs(r.peak-routes[0].peak)<.02)}
});
