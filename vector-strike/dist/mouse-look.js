// Native relative input has no screen edge and no artificial camera easing.
export function mouseLookDelta(state,event,locked=false){
 if(locked)return [Number.isFinite(event.movementX)?event.movementX:0,Number.isFinite(event.movementY)?event.movementY:0];
 const next=[event.clientX,event.clientY];
 if(!next.every(Number.isFinite))return [0,0];
 const previous=state.position;state.position=next;
 if(state.reenter){state.reenter=false;return [0,0]}
 if(!previous)return [0,0];
 return [next[0]-previous[0],next[1]-previous[1]];
}
export function resetMouseLook(state){state.position=null;state.edgeVelocity=[0,0];state.reenter=false}
// Retain an edge anchor on exit; otherwise leaving the canvas cancels the turn.
export function leaveMouseLook(state,event,width,height){
 if(!state.position)return;
 const x=event.clientX,y=event.clientY;
 if(x<=1||x>=width-1||y<=1||y>=height-1){state.position=[Math.max(0,Math.min(width,x)),Math.max(0,Math.min(height,y))];state.reenter=true}
 else resetMouseLook(state);
}
export function edgeLookDelta(state,width,height,dt){
 if(!state.position||width<=0||height<=0||!Number.isFinite(dt)||dt<=0){state.edgeVelocity=[0,0];return [0,0]}
 const edge=(value,size)=>{const n=value/size*2-1,t=Math.max(0,Math.min(1,(Math.abs(n)-.76)/.24));return Math.sign(n)*t*t*(3-2*t)};
 const target=[edge(state.position[0],width)*1800,edge(state.position[1],height)*800],velocity=state.edgeVelocity||[0,0],tau=.08,decay=Math.exp(-dt/tau);
 // Integrate the easing exactly so turn speed is the same at every frame rate.
 const delta=target.map((v,i)=>v*dt+(velocity[i]-v)*tau*(1-decay));
 state.edgeVelocity=target.map((v,i)=>v+(velocity[i]-v)*decay);
 return delta;
}
// Support both event-only browsers and browsers returning a Promise. Request
// synchronously in the click handler, before map construction or network work.
export async function requestMouseLock(canvas,doc){
 if(typeof canvas.requestPointerLock!=='function')return false;
 if(doc.pointerLockElement===canvas)return true;
 const attempt=raw=>new Promise((resolve,reject)=>{
  let promiseBased=false,settled=false;
  const finish=(ok,error)=>{if(settled)return;settled=true;clearTimeout(timer);doc.removeEventListener('pointerlockchange',changed);doc.removeEventListener('pointerlockerror',failed);if(ok)resolve(true);else reject(error)};
  const changed=()=>{if(doc.pointerLockElement===canvas)finish(true)};
  const failed=()=>queueMicrotask(()=>{if(!promiseBased)finish(false,Object.assign(new Error('Pointer lock rejected'),{name:'PointerLockError'}))});
  const timer=setTimeout(()=>finish(false,Object.assign(new Error('Pointer lock timed out'),{name:'TimeoutError'})),1800);
  doc.addEventListener('pointerlockchange',changed);doc.addEventListener('pointerlockerror',failed);
  try{
   const result=raw?canvas.requestPointerLock({unadjustedMovement:true}):canvas.requestPointerLock();
   promiseBased=typeof result?.then==='function';
   if(promiseBased)result.then(changed,error=>finish(false,error));
   changed();
  }catch(error){finish(false,error)}
 });
 try{return await attempt(true)}catch(error){
  // Raw input is optional: ordinary pointer lock still gives unlimited turning.
  if(!['NotSupportedError','TypeError','PointerLockError'].includes(error?.name))return false;
  try{return await attempt(false)}catch{return false}
 }
}
