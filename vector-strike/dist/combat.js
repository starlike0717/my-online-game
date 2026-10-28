export const MAX_HEALTH=200;
export const BOT_MAX_HEALTH=100;
// Pure shared ballistics: browser practice and authoritative Node.js matches use these rules.
const clamp=(n,a,b)=>Math.max(a,Math.min(b,n));
export function damageForHit(weapon,head=false,distance=0){
 const t=clamp((Math.max(0,distance)-weapon.rangeStart)/(weapon.rangeEnd-weapon.rangeStart),0,1);
 return Math.round(weapon.damage*(head&&weapon.mechanic!=='melee'?weapon.headMultiplier:1)*(1-t*(1-weapon.minDamage))*10)/10;
}
export function spreadForShot(w,{aim=false,grounded=true,speed=0,crouched=false}={}){
 return w.spread*(aim?(w.cat==='sg'?.75:.16):1)*(grounded?1:1.9)*(1+clamp(speed/10,0,1)*.6)*(crouched&&grounded?.8:1);
}
export function shotDirections(direction,w,stance={},random=Math.random){
 const len=Math.hypot(...direction),forward=direction.map(n=>n/len),horizontal=Math.hypot(forward[0],forward[2]);
 const right=horizontal>.001?[-forward[2]/horizontal,0,forward[0]/horizontal]:[1,0,0];
 const up=[right[1]*forward[2]-right[2]*forward[1],right[2]*forward[0]-right[0]*forward[2],right[0]*forward[1]-right[1]*forward[0]];
 const spread=spreadForShot(w,stance),rays=[];
 for(let i=0;i<w.pellets;i++){
  const a=random()*Math.PI*2,r=Math.sqrt(random())*spread;
  const d=forward.map((v,n)=>v+right[n]*Math.cos(a)*r+up[n]*Math.sin(a)*r),length=Math.hypot(...d);
  rays.push(d.map(v=>v/length));
 }
 return rays;
}
export function rayBox(origin,dir,box){
 let lo=0,hi=150;
 for(let n=0;n<3;n++){
  if(Math.abs(dir[n])<1e-8){if(origin[n]<box.min[n]||origin[n]>box.max[n])return Infinity;}
  else{let a=(box.min[n]-origin[n])/dir[n],b=(box.max[n]-origin[n])/dir[n];if(a>b)[a,b]=[b,a];lo=Math.max(lo,a);hi=Math.min(hi,b);if(lo>hi)return Infinity;}
 }
 return lo;
}
export function rayActor(origin,dir,actor){
 const scale=(actor.height??1.7)/1.7,yaw=actor.yaw||0,c=Math.cos(yaw),s=Math.sin(yaw);
 const dx=origin[0]-actor.x,dz=origin[2]-actor.z;
 const o=[c*dx-s*dz,(origin[1]-actor.y)/scale,s*dx+c*dz];
 const d=[c*dir[0]-s*dir[2],dir[1]/scale,s*dir[0]+c*dir[2]];
 if(actor.targetKind==='bullseye'){const round=actor.targetShape==='round',distance=rayBox(o,d,{min:[round?-.68:-.7,round?.77:.7,-.09],max:[round?.68:.7,round?2.13:2.2,.09]});const x=o[0]+d[0]*distance,y=o[1]+d[1]*distance,radius=Math.hypot(x,y-1.45);if(round&&!(radius<=.68))return{distance:Infinity,head:false};return{distance,head:Number.isFinite(distance)&&radius<.17}}
 const hd=rayBox(o,d,{min:[-.29,1.75,-.27],max:[.29,2.22,.28]});
 // Torso, hips/legs, and shoulders. The carried weapon is not part of the body.
 const bd=Math.min(...[
  {min:[-.14,1.65,-.14],max:[.14,1.84,.14]},
  {min:[-.39,1.02,-.24],max:[.39,1.74,.36]},
  {min:[-.32,.1,-.27],max:[.32,1.03,.38]},
  {min:[-.62,1.05,-.2],max:[.62,1.7,.35]}
 ].map(b=>rayBox(o,d,b)));
 return {distance:Math.min(hd,bd),head:hd<=bd};
}
