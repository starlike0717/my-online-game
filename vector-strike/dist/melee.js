import {MAX_HEALTH,damageForHit} from './combat.js';
// Target yaw follows the camera convention: yaw 0 faces negative Z.
export function isRearAttack(origin,target){
 const dx=origin[0]-target.x,dz=origin[2]-target.z,length=Math.hypot(dx,dz);
 return length>.001&&(-Math.sin(target.yaw||0)*dx-Math.cos(target.yaw||0)*dz)/length<=-.5;
}
export function meleeHit(w,head,distance,origin,target,actor=null,now=Date.now()){
 const rear=isRearAttack(origin,target),execution=rear&&(w.backstab===true||(actor?.backstabReadyUntil||0)>now);
 return {rear,execution,damage:execution?MAX_HEALTH:Math.round(damageForHit(w,false,distance)*(rear?w.backMultiplier:1)*10)/10};
}
export function activateMeleeAbility(w,actor,now){
 const ability=w.ability;if(!ability||now<(actor.meleeAbilityReadyAt||0))return null;actor.meleeAbilityReadyAt=now+ability.cooldown*1000;return {...ability,readyAt:actor.meleeAbilityReadyAt};
}
export function activateMeleePerk(w,actor,now){
 const p=w.perk;if(!p||!p.cooldown||now<(actor.meleeReadyAt||0))return null;
 actor.meleeReadyAt=now+p.cooldown*1000;
 return {heal:p.heal||0,stun:p.stun||0,ammoFraction:p.ammoFraction||0,title:p.title};
}
export function restoreMeleeAmmo(w,ammo,reserve,fraction){
 return {ammo:w.mag,reserve:Math.min(w.reserve,Math.max(0,reserve)+Math.ceil(w.reserve*fraction))};
}
export function meleeDescription(w){
 const a=w.ability;if(!a)return '';
 const notes={backstab:'발동 후 9초 안에 등 뒤를 찌르면 한방 처치',tripleJump:'3초 동안 총 3단 점프',skyDash:'바라보는 방향으로 공중 대시 · 위를 보면 상승',dash:'바라보는 방향으로 빠르게 회피',dashAttack:'돌진 경로의 상대를 한 번씩 타격',slam:'공중에서 내려찍고 반경 5m에 충격파',block:'앞에 8초 동안 유지되는 엄폐 블록 설치',reflect:'방어하는 동안 받은 공격을 공격자에게 반사'};
 return a.title+' · '+notes[a.kind]+'<br>우클릭 / E · '+a.cooldown+'초 재사용 · 정면/후면 피해 판정만 적용';
}
export function abilityVelocity(yaw,pitch=0,kind='dash'){
 const speed=kind==='skyDash'?21:22,p=kind==='skyDash'?Math.max(.25,pitch):pitch;
 return [-Math.sin(yaw)*Math.cos(p)*speed,Math.sin(p)*speed,-Math.cos(yaw)*Math.cos(p)*speed];
}
export function abilityBlock(actor,now,id='block'){
 const x=actor.x-Math.sin(actor.yaw)*3,z=actor.z-Math.cos(actor.yaw)*3,y=actor.y;
 return {id,owner:actor.id,min:[x-1.4,y,z-.65],max:[x+1.4,y+2,z+.65],expiresAt:now+8000};
}
