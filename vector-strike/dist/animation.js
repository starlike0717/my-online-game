import {sampleMotion} from './motion-sampling.js';
// Render-only action poses. Positions are metres in the existing weapon/agent
// model space; rotations are radians. Apply every delta to a saved rest transform.
// These helpers never alter physics, aim direction, ammunition, or spring recoil.
const finite=(value,fallback=0)=>Number.isFinite(value)?value:fallback;
const clamp=(value,min,max)=>Math.max(min,Math.min(max,finite(value)));
const unit=value=>value===true?1:value===false?0:clamp(value,0,1);
const smooth=value=>{const t=unit(value);return t*t*(3-2*t)};
const ramp=(value,start,end)=>smooth((finite(value)-start)/(end-start));
const pulse=(value,start,attack,hold,end)=>ramp(value,start,attack)*(1-ramp(value,hold,end));
const boundVector=(vector,limit)=>vector.map(n=>clamp(n,-limit,limit)||0);

function reloadPose(weapon,progress){
 const p=unit(progress),style=weapon.mechanic==='melee'?'none':weapon.mechanic==='rocket'?'rocket':weapon.mechanic==='arrow'||weapon.crossbow&&weapon.mag<=1?'nock':weapon.cat==='sg'&&!weapon.auto&&weapon.mag>2?'shell':'magazine';
 if(style==='none')return{style,phase:'ready',weight:0,magOut:0,boltPull:0,handReach:0,insert:0};
 const weight=sampleMotion('reload','weight',p),magOut=style==='magazine'?sampleMotion('reload','magOut',p):0;
 const insert=sampleMotion('reload','insert',p),handReach=sampleMotion('reload','reach',p);
 const boltPull=style==='nock'&&weapon.crossbow?sampleMotion('nock','pull',p):style==='rocket'||style==='shell'||weapon.mechanic==='arrow'?0:sampleMotion('reload','rack',p);
 const phase=p===0||p===1?'ready':p<.15?'prepare':p<.40?'remove':p<.73?'insert':p<.95?'rack':'return';
 return{style,phase,weight,magOut,boltPull,handReach,insert};
}

function attackPose(weapon,progress,backAttack){
 const p=unit(progress);
 if(weapon.mechanic!=='melee')return{windup:0,strike:0,follow:0,thrust:false,heavy:1};
 return{windup:pulse(p,0,.14,.18,.31),strike:pulse(p,.17,.38,.43,1),follow:pulse(p,.38,.56,.70,1),
  thrust:backAttack===true||['rapier','spear','trident'].includes(weapon.shape),heavy:['hammer','axe','halberd','scythe'].includes(weapon.shape)?1.1:1};
}

/**
 * reloadProgress / attackProgress / shotProgress: elapsed fraction 0..1, with
 * either endpoint at rest. sliding, crouched, airborne and hit: smoothed weights
 * 0..1 supplied by the renderer. Keep the existing recoil/kick springs separately.
 * All returned part positions/rotations are DELTAS, never absolute transforms.
 */
export function weaponActionPose(weapon={},state={}){
 const ads=unit(state.ads),free=1-ads,slide=unit(state.sliding)*free,crouch=unit(state.crouched)*free,air=unit(state.airborne)*free;
 const flinch=unit(state.hit)*(1-ads*.88),side=clamp(finite(state.hitSide,1),-1,1);
 const reload=reloadPose(weapon,state.reloadProgress),attack=attackPose(weapon,state.attackProgress,state.backAttack);
 const r=reload.weight,wind=attack.windup,strike=attack.strike,follow=attack.follow,heavy=attack.heavy;
 const slideLoad=.65+.35*unit(finite(state.moveSpeed)/13),shot=sampleMotion('fire','bolt',unit(state.shotProgress));
 const position=[-.075*r+.025*slide*slideLoad+side*.012*flinch,
  -.12*r-.08*slide-.025*crouch-.012*air-.018*flinch,
  .055*r+.035*slide+.025*flinch];
 const rotation=[.34*r+.055*slide+.03*crouch-.035*air+.06*flinch,
  -.11*r-side*.02*flinch,(reload.style==='none'?0:sampleMotion('reload','roll',state.reloadProgress))-.11*slide+side*.035*flinch];
 if(weapon.mechanic==='melee'){
  position[0]+=.055*wind-(attack.thrust?.025:.12)*strike*heavy;
  position[1]+=.035*wind-.075*strike*heavy-.018*follow;
  position[2]+=.065*wind-(attack.thrust?.55:.19)*strike*heavy;
  rotation[0]+=.10*wind-(attack.thrust?.16:.23)*strike*heavy;
  rotation[1]+=(attack.thrust?.035:.19)*strike;
  rotation[2]+=.17*wind-(attack.thrust?.10:1.04)*strike*heavy-(attack.thrust?.025:.12)*follow;
 }
 const magPosition=[-.08*reload.magOut,-.39*reload.magOut,.075*reload.magOut];
 const magRotation=[-.12*reload.magOut,0,-.25*reload.magOut];
 const supportHand=[-.065*reload.handReach,-.12*reload.handReach-.055*reload.magOut,.17*reload.magOut-.10*reload.boltPull];
 const triggerHand=[0,-.006*shot,.012*shot];
 if(reload.style==='rocket'){
  supportHand[0]=-.035*reload.insert;supportHand[1]=.025*reload.insert;supportHand[2]=-.36*reload.insert;
 }else if(reload.style==='nock'){
  supportHand[0]=-.025*reload.handReach;supportHand[1]=-.045*reload.handReach;supportHand[2]=-.18*reload.boltPull;
  triggerHand[0]=-.08*reload.insert;triggerHand[1]=-.11*reload.handReach;triggerHand[2]=-.22*reload.insert;
 }else if(reload.style==='shell'){
  supportHand[0]=-.05*reload.insert;supportHand[1]=-.08*reload.insert;supportHand[2]=.18*reload.insert;
 }
 return{position:boundVector(position,.85),rotation:boundVector(rotation,1.6),
  magPosition,magRotation,bolt:reload.boltPull*(weapon.crossbow?.20:.11)+shot*(weapon.crossbow?.055:.035),
  supportHand,triggerHand,supportHandRotation:[.18*reload.handReach,0,-.22*reload.handReach],
  triggerHandRotation:[-.04*shot,0,0],grip:reload.style==='magazine'?sampleMotion('reload','grip',state.reloadProgress):0,reload,attack:{windup:wind,strike,follow}};
}

/**
 * Agent body deltas use the existing +Z facing model. phase is a continuous
 * walking phase; moveSpeed is metres/second. shootTime / hitTime are remaining
 * seconds on the existing .18 / .22 second timers. The gun/arm rotation values
 * include aim pitch; apply them to rest rotations rather than adding pitch twice.
 */
export function agentActionPose(state={}){
 const phase=finite(state.phase),speed=unit(finite(state.moveSpeed)/8),slide=unit(state.sliding),crouch=unit(state.crouched),air=unit(state.airborne);
 const pitch=clamp(state.pitch,-1.2,1.2),hit=state.hit===undefined?sampleMotion('hit','impact',1-unit(finite(state.hitTime)/.22)):unit(state.hit);
 const shoot=sampleMotion('fire','shoulder',1-unit(finite(state.shootTime)/.18)),side=clamp(finite(state.hitSide,1),-1,1),stride=speed*(1-slide)*(1-crouch*.48)*(1-air);
 const step=Math.sin(phase)*.50*stride,bob=Math.sin(phase*2)*.018*stride;
 const c=key=>sampleMotion('crouch',key,crouch)*(1-slide),s=key=>sampleMotion('slide',key,slide);
 const reload=sampleMotion('reload','weight',unit(state.reloadProgress)),strike=pulse(unit(state.attackProgress),.15,.37,.44,1);
 const torsoPosition=[0,bob-.025*crouch-.025*hit,-.025*crouch-.02*hit];
 const torsoRotation=[c('spineX')+s('spineX')-.12*hit+.09*reload, .08*strike,Math.sin(phase)*.014*stride+side*.07*hit];
 const headPosition=[side*.012*hit,-.02*crouch-.025*hit,-.015*hit];
 const headRotation=[pitch*.12+.045*hit,0,-side*.04*hit];
 const arms=[0,1].map(i=>({position:[0,-.018*crouch+.012*hit,0],
  rotation:[pitch*.7-shoot*(i?.16:.23)+(i?.45:.65)*strike+(i?.10:.43)*reload+.04*crouch,
   0,(i?-1:1)*(.03*shoot+.03*stride)+(i?-.12:-.24)*reload+(i?-.12:.10)*strike]}));
 const legs=[0,1].map(i=>({rotation:[(i?-step:step)+c('thighX')+s('thighX')+.28*air,0,(i?1:-1)*.035*crouch],
  knee:c('kneeX')+s('kneeX')+.20*air,foot:c('ankleX')+s('ankleX')}));
 const gunPosition=[-.018*reload,-.04*crouch-.06*slide+.025*hit-.055*reload,-.12*shoot+.20*strike+.035*reload];
 const gunRotation=[pitch-.13*shoot+.06*hit+.25*strike+.25*reload,0,-.16*strike-.18*reload];
 return{torsoPosition:boundVector(torsoPosition,.3),torsoRotation:boundVector(torsoRotation,.6),headPosition,headRotation,
  hipsPosition:[0,c('hipsY')+s('hipsY'),c('hipsZ')+s('hipsZ')],arms,legs,gunPosition,gunRotation:boundVector(gunRotation,1.6),shoot,hit,reload};
}
