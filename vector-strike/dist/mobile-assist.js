import {rayActor,rayBox} from './combat.js';
const wrap=a=>Math.atan2(Math.sin(a),Math.cos(a));
export function assistAim({eye,yaw,pitch,targets=[],blocks=[],dt=0,enabled=false,aiming=false}){
 yaw=Number.isFinite(yaw)?yaw:0;pitch=Number.isFinite(pitch)?pitch:0;if(!enabled||!aiming||!Array.isArray(eye)||!eye.every(Number.isFinite)||!Number.isFinite(dt))return{yaw,pitch,target:null};let best=null;
 for(const t of targets){if(!t||t.health<=0||t.friendly||![t.x,t.y,t.z].every(Number.isFinite))continue;const p=[t.x,t.y+(t.targetKind?1.45:1.35)*(t.height??1.7)/1.7,t.z],d=p.map((v,i)=>v-eye[i]),distance=Math.hypot(...d);if(distance<1||distance>38)continue;const dir=d.map(v=>v/distance);if(blocks.some(b=>rayBox(eye,dir,b)<distance-.1))continue;
  const wantedYaw=Math.atan2(-d[0],-d[2]),wantedPitch=Math.atan2(d[1],Math.hypot(d[0],d[2])),dy=wrap(wantedYaw-yaw),dp=wantedPitch-pitch,error=Math.hypot(dy*Math.cos(pitch),dp);if(error>.075||best&&best.error<=error)continue;best={id:t.id,dy,dp,error};
 }if(!best)return{yaw,pitch,target:null};const h=Math.max(0,Math.min(.07,dt)),amount=1-Math.exp(-2.8*h),limit=.38*h,clamp=n=>Math.max(-limit,Math.min(limit,n));return{yaw:yaw+clamp(best.dy*amount),pitch:Math.max(-1.45,Math.min(1.45,pitch+clamp(best.dp*amount))),target:best.id};
}
export function crosshairTarget(origin,direction,targets=[],blocks=[],range=65){let nearest=Math.min(range,...blocks.map(b=>rayBox(origin,direction,b))),found=null;for(const t of targets){if(t.health<=0||t.friendly)continue;const hit=rayActor(origin,direction,t);if(hit.distance<nearest){nearest=hit.distance;found=t.id}}return found}
export function bindJumpSlide(button,{jump,slide,canSlide,active=()=>true,setTimer=setTimeout,clearTimer=clearTimeout}){
 let timer=null,pointer=null,fired=false;
 const cancel=()=>{if(timer!==null)clearTimer(timer);timer=null;pointer=null;fired=false};
 button.onpointerdown=e=>{e.preventDefault();if(!active())return;cancel();pointer=e.pointerId;button.setPointerCapture(pointer);if(!canSlide()){jump();fired=true}else timer=setTimer(()=>{timer=null;if(!active())return;fired=true;if(!slide())jump()},260)};
 button.onpointerup=e=>{if(e.pointerId!==pointer)return;if(!fired&&active())jump();cancel()};button.onpointercancel=cancel;button.onlostpointercapture=cancel;return cancel;
}

// A tap persists until the next tap, including after pointer capture is released.
export function bindToggle(button,{active=()=>true,get,set}){
 button.onpointerdown=e=>{e.preventDefault();if(!active())return;set(!get());button.classList.toggle('active',get());button.setAttribute('aria-pressed',String(get()))};
}
export function toggleSlide(player){
 if(player.slide>0){player.slide=0;player.vel.x*=.35;player.vel.z*=.35;return 'stop'}
 if(!player.grounded||player.dash>0)return null;
 player.slideCooldown=0;player.slide=.9;player.slideCooldown=1.25;
 if(Math.hypot(player.vel.x,player.vel.z)>1)player.slideDir.copy(player.vel).setY(0).normalize();
 else player.slideDir.set(-Math.sin(player.yaw),0,-Math.cos(player.yaw));
 player.vel.x=player.slideDir.x*13;player.vel.z=player.slideDir.z*13;return 'start';
}
export class ShotBuffer{
 constructor(){this.until=0;this.weapon=null}
 request(now,weapon,waitMs=350){this.until=now+Math.max(350,Math.min(1000,waitMs+200));this.weapon=weapon}
 clear(){this.until=0}
 consume(now,weapon,ready){if(this.weapon!==weapon||now>this.until){this.clear();return false}if(!ready||!this.until)return false;this.clear();return true}
}

export function touchDevice(media=globalThis.matchMedia,nav=globalThis.navigator){
 const matches=q=>typeof media==='function'&&media(q).matches;
 return matches('(pointer:coarse)')||(Number(nav?.maxTouchPoints)>0&&matches('(any-pointer:coarse)'));
}
// One camera finger owns its gesture; lifting the joystick finger cannot cancel it.
function capturePointer(element,id){try{element.setPointerCapture?.(id)}catch{}}
function releasePointer(element,id){try{if(element.hasPointerCapture?.(id))element.releasePointerCapture?.(id)}catch{}}
const validPoint=e=>Number.isFinite(e.clientX)&&Number.isFinite(e.clientY);
export function bindTouchLook(canvas,{active,getLook,setLook,move,getViewport=()=>null}){
 const end=e=>{if(getLook()?.id===e.pointerId){setLook(null);releasePointer(canvas,e.pointerId)}};
 canvas.addEventListener('pointerdown',e=>{if(e.pointerType==='mouse'||!active()||getLook()||!validPoint(e))return;e.preventDefault();setLook({id:e.pointerId,x:e.clientX,y:e.clientY,viewport:getViewport()?.slice()});capturePointer(canvas,e.pointerId)});
 canvas.addEventListener('pointermove',e=>{const look=getLook();if(!look||e.pointerId!==look.id)return;const viewport=getViewport();if(!active()||viewport&&look.viewport&&viewport.some((v,i)=>v!==look.viewport[i])){end(e);return}if(!validPoint(e))return;move(e.clientX-look.x,e.clientY-look.y);look.x=e.clientX;look.y=e.clientY});
 for(const type of ['pointerup','pointercancel','lostpointercapture'])canvas.addEventListener(type,end);
 for(const type of ['pointerup','pointercancel'])canvas.ownerDocument?.addEventListener(type,end);
}
export function joystickValue(x,y,rect,deadZone=.12){
 if(![x,y,rect?.left,rect?.top,rect?.width,rect?.height].every(Number.isFinite)||rect.width<=0||rect.height<=0)return{x:0,y:0};
 const dx=(x-rect.left-rect.width/2)/(rect.width*.35),dy=(y-rect.top-rect.height/2)/(rect.height*.35),distance=Math.hypot(dx,dy);
 if(distance<=deadZone)return{x:0,y:0};const amount=(Math.min(1,distance)-deadZone)/(1-deadZone);return{x:dx/distance*amount,y:dy/distance*amount};
}
export function bindJoystick(element,{active,getPointer,setPointer,change}){
 const update=e=>{const v=joystickValue(e.clientX,e.clientY,element.getBoundingClientRect());change(v.x,v.y)};
 element.addEventListener('pointerdown',e=>{if(!active()||getPointer()!=null||!validPoint(e)||e.button>0)return;e.preventDefault();setPointer(e.pointerId);capturePointer(element,e.pointerId);update(e)});
 element.addEventListener('pointermove',e=>{if(e.pointerId!==getPointer())return;if(!active()){end(e);return}if(validPoint(e))update(e)});
 const end=e=>{if(e.pointerId!==getPointer())return;setPointer(null);change(0,0);releasePointer(element,e.pointerId)};
 for(const type of ['pointerup','pointercancel','lostpointercapture'])element.addEventListener(type,end);
 for(const type of ['pointerup','pointercancel'])element.ownerDocument?.addEventListener(type,end);
}
export const wantsTouchSprint=move=>move.y<-.55&&Math.hypot(move.x,move.y)>.82;
export function requestLandscape(element,orientation){try{return Promise.resolve(element.requestFullscreen?.()).then(()=>orientation?.lock?.('landscape')).catch(()=>{})}catch{return Promise.resolve()}}
export function slideButtonState(button,sliding){
 button.classList.toggle('active',sliding);button.setAttribute('aria-pressed',String(sliding));
 button.setAttribute('aria-label',sliding?'슬라이드 멈추기':'슬라이드하기');button.title=sliding?'슬라이드 멈추기':'슬라이드하기';
 const icon=button.querySelector('[data-slide-motion]'),stop=button.querySelector('[data-slide-stop]');if(icon)icon.style.display=sliding?'none':'';if(stop)stop.style.display=sliding?'':'none';
}
