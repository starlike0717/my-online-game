import {rayActor,rayBox} from './combat.js';

// Practice bots announce a fixed shot, then send a visible, dodgeable projectile.
// This intentionally does not alter the authoritative online player weapon rules.
export const BOT_SHOT_LIMIT=96;
const clamp=(value,min,max)=>Math.max(min,Math.min(max,value));
const vector=(value,fallback=[0,0,0])=>[0,1,2].map((axis)=>{
 const n=Array.isArray(value)?value[axis]:value?.[['x','y','z'][axis]];
 return Number.isFinite(n)?n:fallback[axis];
});
const unit=(v)=>{const length=Math.hypot(...v);return length>1e-8?v.map(n=>n/length):[0,0,-1]};
const SETTINGS={easy:{delay:.5,speed:22,spread:.095,damage:4},normal:{delay:.4,speed:26,spread:.058,damage:6},hard:{delay:.32,speed:30,spread:.026,damage:8}};

export function planBotShot({origin=[0,1.3,0],target=[0,1.3,-1],velocity=[0,0,0],difficulty='normal',wave=1}={},random=Math.random){
 const start=vector(origin,[0,1.3,0]),end=vector(target,[start[0],start[1],start[2]-1]);
 const settings=SETTINGS[difficulty]||SETTINGS.normal,forward=unit(end.map((n,i)=>n-start[i]));
 const horizontal=Math.hypot(forward[0],forward[2]);
 const right=horizontal>1e-8?[-forward[2]/horizontal,0,forward[0]/horizontal]:[1,0,0];
 const up=[right[1]*forward[2]-right[2]*forward[1],right[2]*forward[0]-right[0]*forward[2],right[0]*forward[1]-right[1]*forward[0]];
 const sample=()=>{const n=random();return Number.isFinite(n)?clamp(n,0,1):.5};
 const movement=vector(velocity),movementSpread=1+Math.min(10,Math.hypot(movement[0],movement[2]))*.045;
 const angle=sample()*Math.PI*2,radius=Math.sqrt(sample())*settings.spread*movementSpread;
 const direction=unit(forward.map((n,i)=>n+right[i]*Math.cos(angle)*radius+up[i]*Math.sin(angle)*radius));
 const waveBonus=clamp(Number.isFinite(wave)?wave-1:0,0,20)*.1;
 return {origin:start,direction,readyDelay:settings.delay,speed:settings.speed,damage:Math.round((settings.damage+waveBonus)*10)/10,life:3};
}

export function createBotShot(plan,id,owner){
 const direction=unit(vector(plan.direction,[0,0,-1]));
 const speed=clamp(Number.isFinite(plan.speed)?plan.speed:26,1,30);
 return {id,owner,kind:'bot',position:vector(plan.origin),velocity:direction.map(n=>n*speed),damage:clamp(Number.isFinite(plan.damage)?plan.damage:6,1,10),travel:0,life:clamp(Number.isFinite(plan.life)?plan.life:3,.05,3)};
}

// Sweep the whole travelled segment. A fast frame cannot skip a thin wall or body.
// The current player stance/position is read here, rather than captured at planning time.
export function stepBotShot(projectile,dt,blocks=[],player=null){
 if(projectile.life<=0)return {done:true,hit:false,wall:false,expired:true};
 if(!Number.isFinite(dt)||dt<=0)return {done:false,hit:false,wall:false};
 const step=Math.min(dt,projectile.life),delta=projectile.velocity.map(n=>n*step),distance=Math.hypot(...delta);
 if(!Number.isFinite(distance)||distance<1e-8){projectile.life-=step;return {done:projectile.life<=0,hit:false,wall:false,expired:projectile.life<=0}}
 const direction=delta.map(n=>n/distance),origin=projectile.position;
 let nearest=distance+.00001,wall=false,hit=false,head=false;
 if(direction[1]<0){const ground=-origin[1]/direction[1];if(ground>=0&&ground<=distance){nearest=ground;wall=true}}
 for(const block of blocks){
  const at=rayBox(origin,direction,{min:vector(block.min),max:vector(block.max)});
  if(at<=distance&&at<=nearest){nearest=at;wall=true}
 }
 if(player&&(player.health??1)>0){
  const result=rayActor(origin,direction,player);
  if(result.distance<=distance&&result.distance<nearest){nearest=result.distance;hit=true;head=result.head;wall=false}
 }
 const travel=Math.min(distance,nearest);projectile.position=origin.map((n,i)=>n+direction[i]*travel);
 projectile.travel+=travel;projectile.life-=step;
 if(hit||wall){projectile.life=0;return {done:true,hit,wall,head,damage:hit?projectile.damage:0}}
 const expired=projectile.life<=0||projectile.position[1]<-.1||Math.abs(projectile.position[0])>42||Math.abs(projectile.position[2])>42;
 return {done:expired,hit:false,wall:false,expired};
}
