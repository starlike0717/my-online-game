import {MAX_HEALTH,damageForHit} from './combat.js';
// Target yaw follows the camera convention: yaw 0 faces negative Z.
export function isRearAttack(origin,target){
 const dx=origin[0]-target.x,dz=origin[2]-target.z,length=Math.hypot(dx,dz);
 return length>.001&&(-Math.sin(target.yaw||0)*dx-Math.cos(target.yaw||0)*dz)/length<=-.5;
}
export function meleeHit(w,head,distance,origin,target,actor=null){
 const rear=isRearAttack(origin,target),execution=rear&&(w.backstab===true||(actor?.backstabReadyUntil||0)>Date.now());
 return {rear,execution,damage:execution?MAX_HEALTH:Math.round(damageForHit(w,head,distance)*(rear?w.backMultiplier:1)*10)/10};
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
 const p=w.perk;if(!p)return '';
 const action=p.extraJumps?'장착 중 공중 점프 +1 · 총 3단 점프':p.backstab?'후면 명중 시 200 피해 · 한방 처치':p.heal?'적중 시 체력 최대 '+p.heal+' 회복':p.stun?'적중 시 상대 이동·공격 '+p.stun+'초 정지':'적중 시 보유 총기 탄창 완충 · 예비탄 '+Math.round(p.ammoFraction*100)+'% 회복';
 return p.title+' · '+action+'<br>우클릭 / E: '+w.ability.title+' ('+w.ability.cooldown+'초 재사용)'+(p.cooldown?' · 적중 효과 '+p.cooldown+'초':'');
}
