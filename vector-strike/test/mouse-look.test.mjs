import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';
import {mouseLookDelta,edgeLookDelta} from '../dist/mouse-look.js';
const source=await readFile(new URL('../dist/game.js',import.meta.url),'utf8');
function body(name){const a=source.indexOf('function '+name+'('),b=source.indexOf('\nfunction ',a+1);return source.slice(a,b)}
test('actual fallback camera follows passive mouse movement without a pressed button',()=>{
 const canvas={},document={pointerLockElement:null},c=vm.createContext({combat:true,paused:false,isTouch:false,pointerFallback:true,document,mouse:{down:false,dx:0,dy:0,position:null},player:{yaw:0,pitch:0},settings:{sensitivity:1},aim:false,$:()=>canvas,clamp:(n,a,b)=>Math.max(a,Math.min(b,n)),mouseLookDelta});new vm.Script(['handleMouseLook','applyMouseLook'].map(body).join('\n')).runInContext(c);
 const move=(x,y)=>c.handleMouseLook({clientX:x,clientY:y,target:canvas});move(200,200);assert.equal(c.player.yaw,0);move(300,250);assert.equal(c.mouse.down,false);assert.equal(c.player.yaw,-.2);assert.equal(c.player.pitch,-.1);
 c.handleMouseLook({clientX:700,clientY:700,target:{}});move(200,200);assert.equal(c.player.yaw,-.2);c.paused=true;move(400,400);assert.equal(c.player.yaw,-.2);
});
test('pointer lock uses relative deltas even without viewport coordinates',()=>{
 assert.deepEqual(mouseLookDelta({}, {movementX:17,movementY:-8},true),[17,-8]);assert.deepEqual(mouseLookDelta({}, {},true),[0,0]);
});
test('edge turning allows full rotation at 30, 60, and 120 FPS without moving outside the window',()=>{
 for(const fps of [30,60,120]){let dx=0;for(let n=0;n<fps;n++)dx+=edgeLookDelta({position:[999,400]},1000,800,1/fps)[0];assert.ok(dx>1390&&dx<1400)}
 assert.deepEqual(edgeLookDelta({position:[500,400]},1000,800,.1),[0,0]);assert.deepEqual(edgeLookDelta({},1000,800,.1),[0,0]);
});
function cursorFixture(request){
 const classes=new Set(),elements=new Map(),document={pointerLockElement:null,body:{classList:{toggle(name,enabled){if(enabled)classes.add(name);else classes.delete(name)}}},exitPointerLock(){this.pointerLockElement=null}};const canvas={requestPointerLock(){return request?.(document,canvas)}};
 const c=vm.createContext({document,combat:true,paused:false,state:'playing',isTouch:false,pointerFallback:false,pointerLockPending:false,pointerHintShown:false,mouse:{down:false,position:null},keys:new Set(),aim:false,shotCooldown:0,cancelDraw(){},toast(){},$:(id)=>{if(id==='world')return canvas;if(!elements.has(id))elements.set(id,{hidden:false});return elements.get(id)}});
 new vm.Script(['syncMouseMode','enablePointerFallback','handlePointerLockChange','lockPointer','pause','resume'].map(body).join('\n')).runInContext(c);return{c,classes,document,canvas};
}
test('gameplay hides the cursor while Escape pause restores menus and pointer-lock exit keeps combat active',async()=>{
 const{c,classes,document,canvas}=cursorFixture((doc,target)=>{doc.pointerLockElement=target;return Promise.resolve()});c.lockPointer();await Promise.resolve();c.handlePointerLockChange();assert.equal(document.pointerLockElement,canvas);assert.equal(classes.has('mouse-look'),true);c.pause();assert.equal(c.paused,true);assert.equal(document.pointerLockElement,null);assert.equal(classes.has('mouse-look'),false);c.resume();await Promise.resolve();c.handlePointerLockChange();assert.equal(classes.has('mouse-look'),true);document.pointerLockElement=null;c.handlePointerLockChange();assert.equal(c.paused,false);assert.equal(c.pointerFallback,true);assert.equal(classes.has('mouse-look'),true);c.pause();document.pointerLockElement=canvas;c.handlePointerLockChange();assert.equal(document.pointerLockElement,null);
});
test('pointer lock can recover after a denied request without showing the cursor during fallback',async()=>{
 let calls=0;const{c,classes}=cursorFixture((doc,target)=>{calls++;if(calls===1)return Promise.reject(Error('User gesture needed'));doc.pointerLockElement=target;return Promise.resolve()});c.lockPointer();await Promise.resolve();assert.equal(c.pointerFallback,true);assert.equal(c.pointerLockPending,false);assert.equal(classes.has('mouse-look'),true);c.lockPointer();await Promise.resolve();c.handlePointerLockChange();assert.equal(calls,2);assert.equal(c.pointerFallback,false);assert.equal(classes.has('mouse-look'),true);c.state='arsenal';c.syncMouseMode();assert.equal(classes.has('mouse-look'),false);c.state='result';c.syncMouseMode();assert.equal(classes.has('mouse-look'),false);c.state='playing';c.isTouch=true;c.syncMouseMode();assert.equal(classes.has('mouse-look'),false);
});
