import {rayBox} from './combat.js';
export function cameraPosition(eye,yaw,pitch,blocks=[],distance=3.8){
 const forward=[-Math.sin(yaw)*Math.cos(pitch),Math.sin(pitch),-Math.cos(yaw)*Math.cos(pitch)],right=[Math.cos(yaw),0,-Math.sin(yaw)];
 const offset=forward.map((n,i)=>-n*distance+right[i]*.65+(i===1?.35:0)),length=Math.hypot(...offset),dir=offset.map(n=>n/length);
 let safe=length;for(const b of blocks)safe=Math.min(safe,Math.max(.12,rayBox(eye,dir,b)-.18));
 return eye.map((n,i)=>n+dir[i]*safe);
}
const clamp01=value=>Math.min(1,Math.max(0,Number.isFinite(value)?value:0));
const mix=(a,b,t)=>a+(b-a)*t;
export const VIEW_WEAPON_SCALE=.7;

// The separate view camera keeps the hands at a consistent size on narrow screens.
// Zoom changes the field of view rather than pushing the receiver into the camera.
export function weaponViewPose(weapon={},ads=0,aspect=16/9,sights){
 const t=clamp01(ads),scale=VIEW_WEAPON_SCALE;
 const rear=Array.isArray(sights?.rear)&&sights.rear.length===3&&sights.rear.every(Number.isFinite)?sights.rear:null;
 const bow=weapon.mechanic==='arrow'&&!rear;
 const melee=weapon.mechanic==='melee';
 const height=weapon.cat==='hg'?.215:weapon.cat==='sr'?.29:.265;
 const aimX=rear?-rear[0]*scale:bow?.16:melee?.2:0;
 const aimY=rear?-rear[1]*scale:bow?-.1:melee?-.25:-height*scale;
 return {x:mix(.32,aimX,t),y:mix(-.30,aimY,t),z:-.95,scale,
  fov:mix(70,55,t),aspect:Math.max(1.4,Number.isFinite(aspect)&&aspect>0?aspect:16/9)};
}

// ADS from third person moves all the way to the eye before showing iron sights.
// Blending the full position removes both the rear and shoulder camera offsets.
export function adsEyeBlend(ads){const t=clamp01(clamp01(ads)/.9);return t*t*(3-2*t)}
export function aimCameraPosition(eye,thirdPosition,ads){const t=adsEyeBlend(ads);return eye.map((n,i)=>mix(thirdPosition[i],n,t))}
export function showViewWeapon(thirdPerson,ads,dead=false){return !dead&&(!thirdPerson||adsEyeBlend(ads)>=.985)}

export function zoomFov(baseFov,magnification=1.5){const fov=Math.max(30,Math.min(120,Number.isFinite(baseFov)?baseFov:85)),zoom=Math.max(1,Math.min(8,Number.isFinite(magnification)?magnification:1.5));return 2*Math.atan(Math.tan(fov*Math.PI/360)/zoom)*180/Math.PI}
