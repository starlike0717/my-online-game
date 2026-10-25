const finite=(v,d=0)=>Number.isFinite(v)?v:d;
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
export function normalizeProgress(value={}){
  if(!value||typeof value!=='object')value={};
  const result={xp:0,rating:1000,games:0,wins:0,losses:0,draws:0,kills:0,deaths:0,assists:0,headshots:0,damage:0,completed:[]};
  for(const key of Object.keys(result))if(key!=='completed')result[key]=Math.max(0,Math.floor(finite(value[key],result[key])));
  result.rating=clamp(result.rating,100,3000);result.completed=Array.isArray(value.completed)?value.completed.filter(v=>typeof v==='string').slice(-100):[];
  return result;
}
export function levelFromXp(xp){return Math.floor((1+Math.sqrt(1+8*Math.max(0,finite(xp))/100))/2)}
export function publicProgress(value){const p=normalizeProgress(value),level=levelFromXp(p.xp),floor=100*(level-1)*level/2,next=100*level*(level+1)/2;const{completed,...visible}=p;return {...visible,level,xpInLevel:p.xp-floor,xpToNext:next-floor,nextLevelXp:next}}
export function rewardFor(player,{winner,reason,duration,teamRatings}){
  const eligible=duration>=15000||reason==='score';
  const actual=winner===null?.5:winner===player.team?1:0;
  const expected=1/(1+10**((teamRatings[1-player.team]-teamRatings[player.team])/400));
  const forfeited=player.forfeited===true;
  const xp=eligible&&!forfeited?Math.min(1000,Math.round((actual===1?100:actual===.5?60:35)+player.kills*20+(player.assists||0)*10+(player.headshots||0)*8+Math.min(80,(player.damage||0)/40)+Math.max(0,player.kills-player.deaths)*5)):0;
  const ratingDelta=forfeited?-24:eligible?Math.round(32*(actual-expected)):0;
  return {xp,ratingDelta,outcome:forfeited?'loss':actual===1?'win':actual===.5?'draw':'loss'};
}
export function applyResult(holder,player,match){
  const before=normalizeProgress(holder.progress),previous=publicProgress(before);
  if(before.completed.includes(match.id))return {applied:false,profile:previous,xp:0,ratingDelta:0,levelBefore:previous.level,levelAfter:previous.level};
  const reward=rewardFor(player,match),after={...before};
  after.xp+=reward.xp;after.rating=Math.max(100,Math.min(3000,after.rating+reward.ratingDelta));after.games++;after[reward.outcome==='win'?'wins':reward.outcome==='loss'?'losses':'draws']++;
  for(const key of ['kills','deaths','assists','headshots','damage'])after[key]+=Math.max(0,Math.round(player[key]||0));
  after.completed=after.completed.concat(match.id).slice(-100);holder.progress=after;
  const profile=publicProgress(after);return {applied:true,...reward,profile,levelBefore:previous.level,levelAfter:profile.level};
}
