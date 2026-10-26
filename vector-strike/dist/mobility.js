export function dashDirection(yaw,right=0,forward=0){
 if(![yaw,right,forward].every(Number.isFinite)||Math.abs(right)>1||Math.abs(forward)>1)return null;
 let length=Math.hypot(right,forward);if(length<.01){forward=1;right=0;length=1}
 const c=Math.cos(yaw),s=Math.sin(yaw);return [(right*c-forward*s)/length,(-right*s-forward*c)/length];
}
export function sidearmDescription(w){
 if(!w.mobility)return '';
 const parts=[w.mobility.title];if(w.extraJumps)parts.push('장착 중 공중 점프 +1 · 총 3단 점프');if(w.dash)parts.push('E + 방향키로 대시 · 방향키 없이 E는 전방 대시 · 재사용 '+w.dash.cooldown+'초');return parts.join(' · ');
}
