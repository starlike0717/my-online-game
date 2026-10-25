import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';
import {mouseLookDelta,edgeLookDelta,resetMouseLook,leaveMouseLook,requestMouseLock} from '../dist/mouse-look.js';
const source=await readFile(new URL('../dist/game.js',import.meta.url),'utf8');
function body(name){const a=source.indexOf('function '+name+'('),b=source.indexOf('\nfunction ',a+1);return source.slice(a,b)}
test('actual fallback camera follows passive mouse movement without a pressed button',()=>{
 const canvas={},document={pointerLockElement:null},c=vm.createContext({combat:true,paused:false,isTouch:false,pointerFallback:true,document,mouse:{down:false,dx:0,dy:0,position:null},player:{yaw:0,pitch:0},settings:{sensitivity:1},aim:false,$:()=>canvas,clamp:(n,a,b)=>Math.max(a,Math.min(b,n)),mouseLookDelta,resetMouseLook});new vm.Script(['handleMouseLook','applyMouseLook'].map(body).join('\n')).runInContext(c);
 const move=(x,y)=>c.handleMouseLook({clientX:x,clientY:y,target:canvas});move(200,200);assert.equal(c.player.yaw,0);move(300,250);assert.equal(c.mouse.down,false);assert.equal(c.player.yaw,-.2);assert.equal(c.player.pitch,-.1);
 c.handleMouseLook({clientX:700,clientY:700,target:{}});move(200,200);assert.equal(c.player.yaw,-.2);c.paused=true;move(400,400);assert.equal(c.player.yaw,-.2);
});
test('pointer lock uses relative deltas even without viewport coordinates',()=>{
 assert.deepEqual(mouseLookDelta({}, {movementX:17,movementY:-8},true),[17,-8]);assert.deepEqual(mouseLookDelta({}, {},true),[0,0]);
});
test('fallback edge turning accelerates smoothly and is frame-rate independent',()=>{
 const totals=[];
 for(const fps of [30,60,120]){const state={position:[1000,400]};let dx=0;for(let n=0;n<fps*4;n++)dx+=edgeLookDelta(state,1000,800,1/fps)[0];totals.push(dx);assert.ok(dx*.002>Math.PI*4,'unlimited turn exceeds two complete revolutions');assert.ok(edgeLookDelta(state,1000,800,1/fps)[0]>0)}
 assert.ok(Math.max(...totals)-Math.min(...totals)<1e-8);
 const state={position:[1000,400]},first=edgeLookDelta(state,1000,800,1/60)[0],second=edgeLookDelta(state,1000,800,1/60)[0];assert.ok(first>0&&second>first&&second<1800/60);
 assert.deepEqual(edgeLookDelta({position:[500,400]},1000,800,.1),[0,0]);assert.deepEqual(edgeLookDelta({},1000,800,.1),[0,0]);
 state.position=[500,400];const tail=edgeLookDelta(state,1000,800,.1)[0];assert.ok(tail>0);for(let n=0;n<20;n++)edgeLookDelta(state,1000,800,.1);assert.ok(Math.abs(state.edgeVelocity[0])<1e-6);
});
test('reaching the viewport edge keeps rotation going and re-entry does not snap the camera',()=>{
 const state={position:[998,400]};leaveMouseLook(state,{clientX:1000,clientY:400},1000,800);assert.ok(edgeLookDelta(state,1000,800,.2)[0]>0);assert.deepEqual(mouseLookDelta(state,{clientX:700,clientY:400}),[0,0]);assert.deepEqual(mouseLookDelta(state,{clientX:680,clientY:400}),[-20,0]);resetMouseLook(state);assert.deepEqual(edgeLookDelta(state,1000,800,.1),[0,0]);
});

function cursorFixture(request){
 const classes=new Set(),elements=new Map(),events=new EventTarget(),document={pointerLockElement:null,addEventListener:events.addEventListener.bind(events),removeEventListener:events.removeEventListener.bind(events),body:{classList:{toggle(name,enabled){if(enabled)classes.add(name);else classes.delete(name)}}},exitPointerLock(){this.pointerLockElement=null}};const canvas={requestPointerLock(){return request?.(document,canvas)}};
 const c=vm.createContext({document,combat:true,paused:false,state:'playing',isTouch:false,pointerFallback:false,pointerLockPending:false,pointerHintShown:false,mouse:{down:false,position:null},keys:new Set(),aim:false,shotCooldown:0,cancelDraw(){},toast(){},requestMouseLock,resetMouseLook,$:(id)=>{if(id==='world')return canvas;if(!elements.has(id))elements.set(id,{hidden:false});return elements.get(id)}});
 new vm.Script(['syncMouseMode','enablePointerFallback','handlePointerLockChange','lockPointer','pause','resume'].map(body).join('\n')).runInContext(c);return{c,classes,document,canvas};
}
test('gameplay hides the cursor while Escape pause restores menus and pointer-lock exit keeps combat active',async()=>{
 const{c,classes,document,canvas}=cursorFixture((doc,target)=>{doc.pointerLockElement=target;return Promise.resolve()});c.lockPointer();await new Promise(resolve=>setImmediate(resolve));c.handlePointerLockChange();assert.equal(document.pointerLockElement,canvas);assert.equal(classes.has('mouse-look'),true);c.pause();assert.equal(c.paused,true);assert.equal(document.pointerLockElement,null);assert.equal(classes.has('mouse-look'),false);c.resume();await new Promise(resolve=>setImmediate(resolve));c.handlePointerLockChange();assert.equal(classes.has('mouse-look'),true);document.pointerLockElement=null;c.handlePointerLockChange();assert.equal(c.paused,false);assert.equal(c.pointerFallback,true);assert.equal(classes.has('mouse-look'),true);c.pause();document.pointerLockElement=canvas;c.handlePointerLockChange();assert.equal(document.pointerLockElement,null);
});
test('pointer lock can recover after a denied request without showing the cursor during fallback',async()=>{
 let calls=0;const{c,classes}=cursorFixture((doc,target)=>{calls++;if(calls===1)return Promise.reject(Error('User gesture needed'));doc.pointerLockElement=target;return Promise.resolve()});c.lockPointer();await new Promise(resolve=>setImmediate(resolve));assert.equal(c.pointerFallback,true);assert.equal(c.pointerLockPending,false);assert.equal(classes.has('mouse-look'),true);c.lockPointer();await new Promise(resolve=>setImmediate(resolve));c.handlePointerLockChange();assert.equal(calls,2);assert.equal(c.pointerFallback,false);assert.equal(classes.has('mouse-look'),true);c.state='arsenal';c.syncMouseMode();assert.equal(classes.has('mouse-look'),false);c.state='result';c.syncMouseMode();assert.equal(classes.has('mouse-look'),false);c.state='playing';c.isTouch=true;c.syncMouseMode();assert.equal(classes.has('mouse-look'),false);
});

function captureFixture(request){const events=new EventTarget(),doc={pointerLockElement:null,addEventListener:events.addEventListener.bind(events),removeEventListener:events.removeEventListener.bind(events)},canvas={requestPointerLock(options){return request({doc,canvas,options,events})}};return{doc,canvas,events}}
test('raw mouse capture starts in the user gesture and retries standard lock when raw input is unavailable',async()=>{
 const calls=[];const{doc,canvas}=captureFixture(({doc,canvas,options})=>{calls.push(options);if(options)return Promise.reject(Object.assign(Error('No raw input'),{name:'NotSupportedError'}));doc.pointerLockElement=canvas;return Promise.resolve()});
 const pending=requestMouseLock(canvas,doc);assert.equal(calls.length,1,'request is synchronous before the first await');assert.equal(calls[0].unadjustedMovement,true);assert.equal(await pending,true);assert.equal(calls.length,2);assert.equal(calls[1],undefined);
});
test('legacy event-only pointer lock and synchronous option rejection are both supported',async()=>{
 const{doc,canvas,events}=captureFixture(({options})=>{if(options)throw new TypeError('No options');queueMicrotask(()=>{doc.pointerLockElement=canvas;events.dispatchEvent(new Event('pointerlockchange'))})});assert.equal(await requestMouseLock(canvas,doc),true);
});
test('denied or unavailable capture returns to fallback without remaining pending',async()=>{
 const{doc,canvas}=captureFixture(()=>Promise.reject(Object.assign(Error('Denied'),{name:'NotAllowedError'})));assert.equal(await requestMouseLock(canvas,doc),false);assert.equal(await requestMouseLock({},doc),false);
 const legacy=captureFixture(({events})=>{queueMicrotask(()=>events.dispatchEvent(new Event('pointerlockerror')))});assert.equal(await requestMouseLock(legacy.canvas,legacy.doc),false);
});
test('relative mouse input crosses multiple revolutions in both view modes without a screen-edge clamp',()=>{
 for(const viewMode of ['first','third']){const canvas={},c=vm.createContext({viewMode,combat:true,paused:false,isTouch:false,pointerFallback:false,document:{pointerLockElement:canvas},mouse:{dx:0,dy:0,position:null},player:{yaw:0,pitch:0},settings:{sensitivity:1},aim:false,$:()=>canvas,clamp:(n,a,b)=>Math.max(a,Math.min(b,n)),mouseLookDelta,resetMouseLook});new vm.Script(['handleMouseLook','applyMouseLook'].map(body).join('\n')).runInContext(c);for(let n=0;n<1000;n++)c.handleMouseLook({movementX:20,movementY:0,clientX:500,clientY:400});assert.ok(c.player.yaw<-Math.PI*6);assert.ok(Math.abs(c.player.yaw+40)<1e-9);assert.equal(c.player.pitch,0);for(let n=0;n<1000;n++)c.handleMouseLook({movementX:-20,movementY:0,clientX:500,clientY:400});assert.ok(Math.abs(c.player.yaw)<1e-9)}
});
test('starting a round requests capture before constructing the map, and only Escape pauses combat',()=>{
 const start=body('startGame');assert.ok(start.indexOf('lockPointer()')<start.indexOf('buildMap('));assert.ok(!body('handlePointerLockChange').includes('pause()'));assert.ok(!body('enablePointerFallback').includes('pause()'));
});
