export const TEAM_SIZES=[1,2,3,4];
export function validTeamSize(value){return TEAM_SIZES.includes(value)}
const level=p=>Number.isFinite(p.level)?p.level:1;
const rating=p=>Number.isFinite(p.rating)?p.rating:1000;
const average=(a,fn)=>a.length?a.reduce((n,p)=>n+fn(p),0)/a.length:0;
// At most eight players: inspect every partition instead of a greedy approximation.
export function balanceTeams(players){
  if(!players.length)return {a:[],b:[],averages:[0,0],ratings:[1000,1000],difference:0};
  const size=Math.ceil(players.length/2);let best=null;
  for(let mask=1;mask<(1<<players.length);mask++){
    let count=0;for(let b=mask;b;b>>=1)count+=b&1;if(count!==size)continue;
    if(players.length%2===0&&!(mask&1))continue;
    const a=players.filter((_,i)=>mask&(1<<i)),b=players.filter((_,i)=>!(mask&(1<<i)));
    const averages=[average(a,level),average(b,level)],ratings=[average(a,rating),average(b,rating)];
    const difference=Math.abs(averages[0]-averages[1]),ratingDifference=Math.abs(ratings[0]-ratings[1]);
    if(!best||difference<best.difference-1e-8||Math.abs(difference-best.difference)<1e-8&&ratingDifference<best.ratingDifference)best={a,b,averages,ratings,difference,ratingDifference};
  }
  return best;
}
export function searchWindow(waitMs){const seconds=Math.max(0,waitMs/1000);return {levels:Math.min(12,2+Math.floor(seconds/20)),rating:Math.min(800,200+Math.floor(seconds/10)*50)}}
export class Matchmaker{
  constructor(now=Date.now){this.now=now;this.queues=new Map(TEAM_SIZES.map(n=>[n,[]]))}
  enqueue(entry){if(!validTeamSize(entry.teamSize))throw new Error('1대1, 2대2, 3대3, 4대4 중 선택하세요.');if(this.queues.get(entry.teamSize).length>=200)throw new Error('매칭 대기열이 가득 찼습니다.');this.cancel(entry.key);const queued={...entry,queuedAt:this.now()};this.queues.get(entry.teamSize).push(queued);return queued}
  cancel(key){for(const[size,queue]of this.queues)this.queues.set(size,queue.filter(e=>e.key!==key))}
  status(entry){const q=this.queues.get(entry.teamSize)||[],window=searchWindow(this.now()-entry.queuedAt);const compatible=q.filter(e=>Math.abs(e.level-entry.level)<=window.levels&&Math.abs(e.rating-entry.rating)<=window.rating).length;return {type:'queued',teamSize:entry.teamSize,queuedAt:entry.queuedAt,serverTime:this.now(),queueTotal:q.length,compatible,needed:entry.teamSize*2,levelRange:[Math.max(1,entry.level-window.levels),entry.level+window.levels]}}
  takeMatches(limit=Infinity){const matches=[];if(limit<=0)return matches;for(const[size,queue]of this.queues){let changed=true;while(changed&&queue.length>=size*2){changed=false;for(const anchor of queue){const window=searchWindow(this.now()-anchor.queuedAt);const candidates=queue.filter(e=>e!==anchor&&Math.abs(e.level-anchor.level)<=window.levels&&Math.abs(e.rating-anchor.rating)<=window.rating).sort((a,b)=>Math.abs(a.level-anchor.level)-Math.abs(b.level-anchor.level)||Math.abs(a.rating-anchor.rating)-Math.abs(b.rating-anchor.rating)||a.queuedAt-b.queuedAt);if(candidates.length<size*2-1)continue;const group=[anchor,...candidates.slice(0,size*2-1)];const chosen=new Set(group);queue.splice(0,queue.length,...queue.filter(e=>!chosen.has(e)));matches.push({teamSize:size,entries:group,balance:balanceTeams(group)});changed=true;if(matches.length>=limit)return matches;break}}}return matches}
  get count(){return [...this.queues.values()].reduce((n,q)=>n+q.length,0)}
}
