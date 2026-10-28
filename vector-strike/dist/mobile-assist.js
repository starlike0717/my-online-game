import {rayActor,rayBox} from './combat.js';
const wrap=a=>Math.atan2(Math.sin(a),Math.cos(a));
export function assistAim({eye,yaw,pitch,targets=[],blocks=[],dt=0,enabled=false,aiming=false}){
 if(!enabled||!aiming)return{yaw,pitch,target:null};let best=null;
 for(const t of targets){if(t.health<=0||t.friendly)continue;const p=[t.x,t.y+(t.targetKind?1.45:1.35)*(t.height??1.7)/1.7,t.z],d=p.map((v,i)=>v-eye[i]),distance=Math.hypot(...d);if(distance<1||distance>38)continue;const dir=d.map(v=>v/distance);if(blocks.some(b=>rayBox(eye,dir,b)<distance-.1))continue;
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
 request(now,weapon){this.until=now+350;this.weapon=weapon}
 clear(){this.until=0}
 consume(now,weapon,ready){if(this.weapon!==weapon||now>this.until){this.clear();return false}if(!ready||!this.until)return false;this.clear();return true}
}
