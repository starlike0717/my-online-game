import {rayBox} from './combat.js';
export function cameraPosition(eye,yaw,pitch,blocks=[],distance=3.8){
 const forward=[-Math.sin(yaw)*Math.cos(pitch),Math.sin(pitch),-Math.cos(yaw)*Math.cos(pitch)],right=[Math.cos(yaw),0,-Math.sin(yaw)];
 const offset=forward.map((n,i)=>-n*distance+right[i]*.65+(i===1?.35:0)),length=Math.hypot(...offset),dir=offset.map(n=>n/length);
 let safe=length;for(const b of blocks)safe=Math.min(safe,Math.max(.12,rayBox(eye,dir,b)-.18));
 return eye.map((n,i)=>n+dir[i]*safe);
}
export function showViewWeapon(thirdPerson,ads,dead=false){return !thirdPerson&&!dead&&ads<.32}
