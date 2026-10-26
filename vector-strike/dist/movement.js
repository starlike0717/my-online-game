import {Vector3} from './vendor/three.module.js';
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v)),lerp=(a,b,t)=>a+(b-a)*t,exp=(v,goal,speed,dt)=>lerp(v,goal,1-Math.exp(-speed*dt));
const v3=new Vector3(),v4=new Vector3();
export function advanceMovement(player,control,w,cover,dt){
 const events=[],steps=Math.max(1,Math.ceil(dt/(1/120)));
 for(let i=0;i<steps;i++)stepMovement(player,control,w,cover,dt/steps,events);
 return events;
}
export function startSlide(player){
 if(player.slideCooldown>0||!player.grounded||Math.hypot(player.vel.x,player.vel.z)<=3)return false;
 player.slide=.9;player.slideCooldown=1.25;player.slideDir.copy(player.vel).setY(0).normalize();player.vel.x=player.slideDir.x*13;player.vel.z=player.slideDir.z*13;return true;
}
function horizontalMove(player,cover,dx,dz){const p=player.pos,r=.34,head=p.y+player.height-.12,feet=p.y+.16;for(const axis of ['x','z']){const delta=axis==='x'?dx:dz;p[axis]+=delta;for(const b of cover){if(p.x+r>b.min.x&&p.x-r<b.max.x&&p.z+r>b.min.z&&p.z-r<b.max.z&&head>b.min.y&&feet<b.max.y){if(player.grounded&&b.max.y-p.y<=.36){player.stepOffset+=(b.max.y-p.y);p.y=b.max.y;continue}if(delta>0)p[axis]=b.min[axis]-r;else if(delta<0)p[axis]=b.max[axis]+r;if(axis==='x')player.vel.x=0;else player.vel.z=0}}}p.x=clamp(p.x,-26.8,26.8);p.z=clamp(p.z,-26.8,26.8)}
function stepMovement(player,control,w,cover,dt,events){
 const {right=0,forward=0,aim=false}=control,crouch=control.crouch&&player.slide<=0,stunned=control.stunned===true;if(stunned){player.vel.x=0;player.vel.z=0;player.slide=0;player.jumpBuffer=0;return}
 const sprint=control.sprint&&forward>.1&&!aim&&!crouch;
 const targetSpeed=(crouch?2.5:aim?3.1:sprint?9.2:5.8)*w.speed;
 player.slideCooldown=Math.max(0,player.slideCooldown-dt);player.coyote=player.grounded?.1:Math.max(0,player.coyote-dt);
 if(player.jumpBuffer>0){player.jumpBuffer-=dt;const groundJump=player.grounded||player.coyote>0;if(groundJump||player.jumps<2+(w.extraJumps||0)){player.vel.y=groundJump?9.3:8.2;player.jumps=groundJump?1:Math.max(2,player.jumps+1);player.coyote=0;player.jumpBuffer=0;player.grounded=false;player.slide=0;events.push({type:'jump',double:player.jumps>=2,impulse:-.7})}}
 const input=v3.set(stunned?0:right,0,stunned?0:-forward);if(input.length()>1)input.normalize();input.applyAxisAngle(v4.set(0,1,0),player.yaw);
 if(player.slide>0){player.slide=Math.max(0,player.slide-dt);if(input.lengthSq()>.01){player.slideDir.lerp(input.normalize(),dt*1.8).normalize()}const sp=lerp(5.5,13,Math.pow(clamp(player.slide/.9,0,1),.75));player.vel.x=player.slideDir.x*sp;player.vel.z=player.slideDir.z*sp}
 else if(player.grounded){const rate=input.lengthSq()>.01?14:12;player.vel.x=exp(player.vel.x,input.x*targetSpeed,rate,dt);player.vel.z=exp(player.vel.z,input.z*targetSpeed,rate,dt)}
 else if(input.lengthSq()>.01){const speed=Math.max(targetSpeed,Math.hypot(player.vel.x,player.vel.z)*.995);player.vel.x=exp(player.vel.x,input.x*speed,3.2,dt);player.vel.z=exp(player.vel.z,input.z*speed,3.2,dt)}
 else{player.vel.x=exp(player.vel.x,0,.3,dt);player.vel.z=exp(player.vel.z,0,.3,dt)}
 let height=player.slide>0?.85:crouch?1.1:1.7;
 if(height>player.height&&cover.some(b=>player.pos.x+.28>b.min.x&&player.pos.x-.28<b.max.x&&player.pos.z+.28>b.min.z&&player.pos.z-.28<b.max.z&&b.min.y>player.pos.y+.2&&b.min.y<player.pos.y+height))height=player.height;
 player.height=exp(player.height,height,16,dt);const oldY=player.pos.y;player.vel.y-=23*dt;horizontalMove(player,cover,player.vel.x*dt,player.vel.z*dt);player.pos.y+=player.vel.y*dt;let floor=0;
 for(const b of cover){if(player.pos.x+.25>b.min.x&&player.pos.x-.25<b.max.x&&player.pos.z+.25>b.min.z&&player.pos.z-.25<b.max.z){if(player.vel.y<=0&&oldY>=b.max.y-.35&&player.pos.y<=b.max.y)floor=Math.max(floor,b.max.y);else if(player.vel.y>0&&oldY+player.height<=b.min.y&&player.pos.y+player.height>=b.min.y){player.pos.y=b.min.y-player.height;player.vel.y=0}}}
 if(player.pos.y<=floor){if(!player.grounded&&player.vel.y<-3)events.push({type:'land',impulse:Math.min(2.5,-player.vel.y*.14)});player.pos.y=floor;player.vel.y=0;player.grounded=true;player.jumps=0}else player.grounded=false;
}
