import {rayActor,rayBox} from './combat.js';
const clamp=(n,a,b)=>Math.max(a,Math.min(b,n));
export const chargePower=(elapsed,w)=>.5+.5*clamp(elapsed/w.chargeTime,0,1);
export function makeProjectile(id,owner,w,origin,direction,power=1){
 const speed=w.projectileSpeed*(w.mechanic==='arrow'?.6+.4*power:1),length=Math.hypot(...direction);
 return {id,owner,weapon:w.id,kind:w.mechanic,position:origin.slice(),velocity:direction.map(n=>n/length*speed),gravity:w.gravity,power,travel:0,life:5};
}
// Swept collision, rather than endpoint overlap, keeps fast arrows from tunnelling through heads/walls.
export function stepProjectile(p,dt,blocks,actors){
 if(dt<=0)return {done:false};
 const delta=p.velocity.map((n,i)=>n*dt-(i===1?p.gravity*dt*dt/2:0)),length=Math.hypot(...delta),dir=delta.map(n=>n/length);
 let nearest=length+.00001,target=null,head=false,wall=false;
 if(dir[1]<0){const ground=-p.position[1]/dir[1];if(ground>=0&&ground<=nearest){nearest=ground;wall=true}}
 for(const b of blocks){const d=rayBox(p.position,dir,b);if(d<=nearest){nearest=d;wall=true;target=null}}
 for(const actor of actors){if(actor.id===p.owner||actor.health<=0)continue;const hit=rayActor(p.position,dir,actor);if(hit.distance<nearest){nearest=hit.distance;target=actor;head=hit.head;wall=false}}
 p.velocity[1]-=p.gravity*dt;p.life-=dt;
 const travel=Math.min(length,nearest);p.position=p.position.map((v,i)=>v+dir[i]*travel);p.travel+=travel;
 if(target||wall){if(wall)p.position=p.position.map((v,i)=>v-dir[i]*.04);return {done:true,target,head,wall}}
 if(p.life<=0||p.position[1]<-.1||Math.abs(p.position[0])>36||Math.abs(p.position[2])>36)return {done:true,target:null,head:false,wall:false,expired:true};
 return {done:false};
}
export function blastHits(p,w,actors,blocks,directId=null){
 const hits=[];
 for(const a of actors){
  if(a.health<=0)continue;
  const center=[a.x,a.y+(a.height??1.7)*.65,a.z],delta=center.map((v,i)=>v-p.position[i]),distance=Math.hypot(...delta);
  if(a.id!==directId&&distance>w.blastRadius)continue;
  const dir=delta.map(v=>v/(distance||1));
  if(a.id!==directId&&blocks.some(b=>rayBox(p.position,dir,b)<distance-.08))continue;
  let amount=a.id===directId?w.damage:w.splashDamage*(1-.8*clamp(distance/w.blastRadius,0,1));
  if(a.id===p.owner)amount*=.45;
  const strength=clamp(1-distance/w.blastRadius,0,1),impulse=a.id===p.owner?[dir[0]*11*strength,Math.max(0,dir[1])*8*strength+5*strength,dir[2]*11*strength]:null;
  hits.push({target:a,damage:Math.round(amount*10)/10,head:false,distance,impulse});
 }
 return hits;
}
