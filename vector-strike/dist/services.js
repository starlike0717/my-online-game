import {normalizeEconomy,purchase,credit,waveReward} from './economy.js';
import {io} from 'socket.io-client';
const $=id=>document.getElementById(id);
const get=(key,fallback='')=>{try{return JSON.parse(localStorage.getItem('vector.'+key))??fallback}catch{return fallback}};
const set=(key,value)=>{try{localStorage.setItem('vector.'+key,JSON.stringify(value))}catch{}};
const timeText=ms=>`${String(Math.floor(ms/60000)).padStart(2,'0')}:${String(Math.floor(ms/1000)%60).padStart(2,'0')}`;
const managedConfig=window.VECTOR_CONFIG||{},savedBackend=get('serverUrl');
const migratingBackend=(managedConfig.previousServerUrls||[]).includes(savedBackend);
let backend=(!migratingBackend&&savedBackend)||managedConfig.serverUrl||(/^https?:$/.test(location.protocol)?location.origin:'');
if(migratingBackend)set('serverUrl',backend);
let token='',guestToken='',account=null,authTab='login',hooks={},ready=false,checking=null,generation=0;
let currentProfile={level:1,xp:0,rating:1000,games:0,xpInLevel:0,xpToNext:100,nextLevelXp:100};
let currentEconomy=normalizeEconomy(get('economy',{})),waveRunPromise=null;
function updateEconomy(value){currentEconomy=normalizeEconomy(value);set('economy',currentEconomy);hooks.onEconomy?.(currentEconomy)}
let matchKind='public',teamSize=1,queueTimer=null;
const tokenKey=()=>`vector.session.${backend}`;
function restoreTokens(){try{token=sessionStorage.getItem(tokenKey())||''}catch{token=''}guestToken=get('guestToken:'+backend);if(backend===managedConfig.serverUrl){for(const previous of managedConfig.previousServerUrls||[]){if(!token)try{token=sessionStorage.getItem('vector.session.'+previous)||'';if(token)sessionStorage.setItem(tokenKey(),token)}catch{}if(!guestToken){guestToken=get('guestToken:'+previous);if(guestToken)set('guestToken:'+backend,guestToken)}}}}
restoreTokens();
function rememberToken(){try{if(token)sessionStorage.setItem(tokenKey(),token);else sessionStorage.removeItem(tokenKey())}catch{}}
function normalizeUrl(value){let url;try{url=new URL(value)}catch{throw new Error('올바른 서버 주소를 입력하세요. 예: http://localhost:4317')}if(!['http:','https:'].includes(url.protocol)||url.username||url.password)throw new Error('HTTP 또는 HTTPS 서버 주소를 입력하세요.');if(location.protocol==='https:'&&url.protocol==='http:'&&!['localhost','127.0.0.1','[::1]'].includes(url.hostname))throw new Error('이 페이지에서는 HTTPS 서버 주소가 필요합니다.');return url.origin}
function changeServer(value){const next=normalizeUrl(value);if(next!==backend){net.leave();backend=next;generation++;checking=null;token='';guestToken='';account=null;ready=false;restoreTokens();updateAccount();updateProfile({level:1,xp:0,rating:1000,games:0,xpInLevel:0,xpToNext:100,nextLevelXp:100});hooks.onAccount?.(null)}set('serverUrl',backend);$('serverUrlInput').value=backend;$('authServerUrl').value=backend}
async function request(method,route,data){
 if(!backend)throw new Error('먼저 Node.js 서버 주소를 연결하세요. HTML 연습장은 서버 없이 이용할 수 있습니다.');
 const controller=new AbortController(),timeout=setTimeout(()=>controller.abort(),7000);
 try{const res=await fetch(backend+route,{method,headers:{...(data?{'Content-Type':'application/json'}:{}),...(token?{Authorization:'Bearer '+token}:{}),...(guestToken?{'X-Guest-Token':guestToken}:{})},body:data?JSON.stringify(data):undefined,signal:controller.signal,cache:'no-store'});let result;try{result=await res.json()}catch{throw new Error('현재 주소에서 VECTOR 온라인 API를 찾을 수 없습니다.')}if(!res.ok){const error=new Error(result.error||'요청을 완료하지 못했습니다.');error.status=res.status;throw error}return result}catch(error){if(error.name==='AbortError'||error instanceof TypeError)throw new Error('서버에 연결할 수 없습니다. 실행 상태와 주소를 확인하세요.');throw error}finally{clearTimeout(timeout)}
}
function updateAccount(){
 $('accountName').textContent=account?(account.username+(account.role==='admin'?' · ADMIN':'')):'GUEST';$('accountOpen').innerHTML=account?'내 계정 ✓':'로그인 <span>선택</span>';
 $('onlineName').value=account?.username||get('nickname','GUEST-'+Math.floor(Math.random()*900+100));$('onlineName').readOnly=!!account;
 $('authTabs').hidden=!!account;$('authForm').hidden=!!account;$('logoutBtn').hidden=!account;$('authTitle').textContent=account?`${account.username} 님, ${account.role==='admin'?'관리자':'접속 중'}`:'게스트로도 자유롭게.';
 $('authDescription').textContent=account?'이 계정의 레벨·실력 점수·전투 기록은 연결된 서버에 저장됩니다.':'로그인 없이 모든 맵과 매칭을 사용할 수 있습니다. 게스트와 계정의 레벨은 따로 보관됩니다.';
}
function updateProfile(profile){
 currentProfile={...currentProfile,...profile};if(account)account.progress=currentProfile;
 const p=currentProfile,remaining=Math.max(0,p.nextLevelXp-p.xp),percent=Math.min(100,p.xpInLevel/Math.max(1,p.xpToNext)*100);
 $('profileLevel').textContent=String(p.level).padStart(2,'0');$('matchLevel').textContent=p.level;$('matchLevelLabel').textContent='Lv. '+p.level;
 $('matchRating').textContent=`실력 점수 ${p.rating} · ${p.games}경기`;$('matchXpBar').style.width=percent+'%';$('matchXpLabel').textContent=`다음 레벨까지 ${remaining} XP`;
 $('careerLevel').textContent='Lv. '+p.level;$('careerRating').textContent='실력 점수 '+p.rating;$('careerXpBar').style.width=percent+'%';$('careerXpLabel').textContent=`${p.xpInLevel} / ${p.xpToNext} XP`;
 hooks.onProfile?.(currentProfile);
}
async function refreshIdentity(){
 if(token){try{const result=await request('GET','/api/me');const changed=account?.username!==result.user.username;account=result.user;updateAccount();updateProfile(account.progress);updateEconomy(account.economy);if(changed)hooks.onAccount?.(account);return}catch(error){if(error.status!==401)throw error;token='';rememberToken();account=null;updateAccount();hooks.onAccount?.(null)}}
 const result=await request('POST','/api/guest',{guestToken});guestToken=result.guestToken;set('guestToken:'+backend,guestToken);updateProfile(result.profile);updateEconomy(result.economy);hooks.onGuestRecords?.(result.records||[]);
}
function checkServer(){
 if(checking)return checking;const revision=generation;
 checking=(async()=>{$('onlineServerStatus').textContent='서버 연결 확인 중…';try{const result=await request('GET','/api/health');if(revision!==generation)return false;if(!result.online||!result.matchmaking||!result.socketIo||!result.inventorySync||!result.finiteAmmo||!result.economy||!result.meleeAbilities||!result.sidearmMobility||result.version<3)throw new Error('매칭을 지원하는 최신 Node.js 서버로 업데이트해 주세요.');await refreshIdentity();if(revision!==generation)return false;ready=true;$('onlineServerStatus').textContent=`서버 연결됨 · ${result.players}명 접속 · ${result.queued}명 매칭 대기`;$('onlineServerStatus').classList.add('ready');$('serverBadgeText').textContent='온라인 매칭 가능';return true}catch(error){if(revision!==generation)return false;ready=false;$('onlineServerStatus').textContent=backend?error.message:'Node.js 서버 주소를 입력해 주세요.';$('onlineServerStatus').classList.remove('ready');$('serverBadgeText').textContent='게스트 플레이';return false}finally{if(revision===generation)checking=null}})();return checking;
}
function renderMode(){
 const queued=net.queued||net.connecting;$('matchSetup').hidden=net.queued;$('queuePanel').hidden=!net.queued;$('onlineJoinBtn').hidden=net.queued;
 $('roomCodeField').hidden=matchKind!=='code';$('onlineRoom').disabled=matchKind!=='code';
 $('teamModeHint').textContent=matchKind==='public'?'맵은 자동으로 선택됩니다':$('onlineRoom').value.trim()?'입장하는 방의 인원 설정을 따릅니다':'로비에서 선택한 맵으로 시작합니다';
 document.querySelectorAll('[data-match-kind]').forEach(b=>{b.classList.toggle('active',b.dataset.matchKind===matchKind);b.disabled=queued});
 document.querySelectorAll('[data-team-size]').forEach(b=>{const selected=Number(b.dataset.teamSize)===teamSize&&!(matchKind==='code'&&$('onlineRoom').value.trim());b.classList.toggle('selected',selected);b.setAttribute('aria-pressed',String(selected));b.disabled=queued||matchKind==='code'&&!!$('onlineRoom').value.trim()});
 $('onlineJoinBtn').innerHTML=(matchKind==='public'?`${teamSize}대${teamSize} 매칭 시작`:$('onlineRoom').value.trim()?'코드 방 참가':`${teamSize}대${teamSize} 방 만들기`)+' <span>→</span>';
}
function updateQueue(message){
 $('queueTitle').textContent=`${message.teamSize}대${message.teamSize} 플레이어를 찾고 있습니다`;
 $('queueCount').textContent=`${message.compatible} / ${message.needed}명 준비`;$('queueRange').textContent=`Lv. ${message.levelRange[0]} ~ ${message.levelRange[1]}`;
 $('queueBar').style.width=Math.min(100,message.compatible/message.needed*100)+'%';
 clearInterval(queueTimer);const tick=()=>$('queueElapsed').textContent=timeText(Math.max(0,net.serverNow-message.queuedAt));tick();queueTimer=setInterval(tick,250);renderMode();
}
class Network extends EventTarget{
 constructor(){super();this.socket=null;this.id='';this.room='';this.players=new Map();this.latency=0;this.connected=false;this.queued=false;this.connecting=false;this.match=null;this.offset=0;this.pingTimer=null;this.abortJoin=null}
 get serverNow(){return Date.now()+this.offset}
 emit(type,detail){this.dispatchEvent(new CustomEvent(type,{detail}))}
 send(data){if(this.socket?.connected&&(this.socket.io.engine?.writeBuffer.length||0)<64)this.socket.emit('packet',data)}
 leave(){const old=this.socket,abort=this.abortJoin;this.abortJoin=null;this.socket=null;this.connected=false;this.queued=false;this.connecting=false;this.id='';this.players.clear();this.match=null;clearInterval(this.pingTimer);clearInterval(queueTimer);old?.disconnect();if(abort)abort();$('onlineHud').hidden=true;$('onlineScoreboard').hidden=true;document.body.classList.remove('online-game');renderMode()}
 async join({name,room,map,weapon,kind,teamSize}){
  this.leave();if(!backend)throw new Error('온라인 서버 주소를 먼저 입력하세요.');const ws=io(backend,{autoConnect:false,forceNew:true,reconnection:false,transports:['websocket','polling'],tryAllTransports:true,timeout:10000});this.socket=ws;this.connecting=true;renderMode();
  return new Promise((resolve,reject)=>{
   let settled=false;const timer=setTimeout(()=>fail(new Error('온라인 연결 시간이 초과되었습니다. 서버 주소를 확인하세요.')),12000);
   const fail=error=>{if(settled)return;settled=true;clearTimeout(timer);this.abortJoin=null;this.leave();reject(error)};
   this.abortJoin=()=>{if(settled)return;settled=true;clearTimeout(timer);const error=new Error('매칭을 취소했습니다.');error.name='AbortError';reject(error)};
   ws.on('connect',()=>{if(ws!==this.socket)return;this.send({type:kind==='public'?'queue':'join',protocol:3,name,room,map,weapon,teamSize,token,guestToken});this.pingTimer=setInterval(()=>this.send({type:'ping',time:Date.now()}),2000)});
   ws.on('packet',message=>{
    if(ws!==this.socket||!message||typeof message!=='object')return;
    if(message.type==='error'){if(!settled)fail(new Error(message.error));else hooks.toast?.(message.error);return}
    if(message.type==='queued'){clearTimeout(timer);this.connecting=false;this.queued=true;this.offset=message.serverTime-Date.now();updateQueue(message)}
    if(message.type==='welcome'){settled=true;clearTimeout(timer);clearInterval(queueTimer);this.abortJoin=null;this.connected=true;this.queued=false;this.connecting=false;this.id=message.id;this.room=message.room;this.map=message.map;this.match=message.snapshot.match;this.players=new Map(message.snapshot.players.map(p=>[p.id,p]));this.offset=message.snapshot.time-Date.now();$('roomCodeHud').textContent=message.room;$('onlineHud').hidden=false;document.body.classList.add('online-game');renderMode();resolve(message)}
    if(message.type==='snapshot'){this.players=new Map(message.players.map(p=>[p.id,p]));this.match=message.match;this.offset=message.time-Date.now();$('onlineCountHud').textContent=message.players.filter(p=>p.connected).length+' / '+message.match.capacity;renderScoreboard()}
    if(message.type==='matchEnd'){this.match=message.match;if(message.self?.economy)updateEconomy(message.self.economy);if(message.self?.profile)updateProfile(message.self.profile);renderScoreboard()}
    if(message.type==='pong'){this.latency=Math.max(0,Date.now()-message.time);$('pingHud').textContent=this.latency+' ms'}
    this.emit(message.type,message);
   });
   ws.on('disconnect',()=>{if(ws!==this.socket)return;clearTimeout(timer);clearInterval(this.pingTimer);clearInterval(queueTimer);const wasConnected=this.connected;this.connected=false;this.queued=false;this.connecting=false;this.socket=null;$('onlineHud').hidden=true;renderMode();if(!settled){settled=true;this.abortJoin=null;reject(new Error('서버 연결이 종료되었습니다. 다시 참가해 주세요.'))}else if(wasConnected)this.emit('disconnect',{})});
   ws.on('probe',ack=>{if(typeof ack==='function')ack()});ws.on('connect_error',()=>fail(new Error('온라인 연결에 실패했습니다. 최신 Node.js 서버와 주소를 확인하세요.')));ws.connect();
  });
 }
}
export const net=new Network();
function renderScoreboard(){
 const rows=$('scoreboardRows');rows.replaceChildren();
 for(const team of [0,1]){
  const heading=document.createElement('div');heading.className='score-team team-'+team;const averages=net.match?.averages||[1,1];heading.textContent=`${team===0?'BLUE':'ORANGE'} TEAM · 평균 Lv. ${averages[team].toFixed(1)} · ${net.match?.scores[team]||0}점`;rows.append(heading);
  const players=[...net.players.values()].filter(p=>p.team===team).sort((a,b)=>b.kills-a.kills||a.deaths-b.deaths);
  for(const p of players){const row=document.createElement('div');if(p.id===net.id)row.className='self';for(const[value,tag]of [[`${p.connected?'':'[나감] '}${p.name} · Lv.${p.level}`,'span'],[p.kills+'K','b'],[p.deaths+'D','b']]){const el=document.createElement(tag);el.textContent=value;row.append(el)}rows.append(row)}
 }
}
export const services={
 get wallet(){return currentEconomy},canUseWeapon(id){return currentEconomy.owned.includes(id)},get account(){return account},get profile(){return currentProfile},get backend(){return backend},get ready(){return ready},
 async buyWeapon(id){if(ready){const result=await request('POST','/api/shop/buy',{weapon:id});updateEconomy(result.economy)}else updateEconomy(purchase(currentEconomy,id));return currentEconomy},
 beginWaves(){waveRunPromise=(async()=>{if(backend&&!ready)await checkServer();if(ready)return {...await request('POST','/api/wave/start',{}),local:false};return {runId:crypto.randomUUID(),local:true}})().catch(()=>({runId:crypto.randomUUID(),local:true}));return waveRunPromise},
 async rewardWave(wave,kills){const run=await waveRunPromise;if(!run)return 0;if(run.local){const reward=credit(currentEconomy,'wave:'+run.runId+':'+wave,waveReward(wave));updateEconomy(reward.economy);return reward.amount}const result=await request('POST','/api/wave/reward',{runId:run.runId,wave,kills});updateEconomy(result.economy);return result.amount},
 openOnline(options={}){matchKind=options.kind||'code';if([1,2,3,4].includes(options.teamSize))teamSize=options.teamSize;$('onlineOverlay').hidden=false;$('onlineError').textContent='';$('onlineRoom').value='';$('serverUrlInput').value=backend;if(!backend||!ready)$('serverDetails').open=true;renderMode();checkServer()},
 rematch(kind,size){this.openOnline({kind,teamSize:size});$('onlineForm').requestSubmit()},
 async saveRecord(record){if(!account||record.mode==='online')return;try{await request('POST','/api/records',record)}catch{hooks.toast?.('기록은 이 브라우저에 보관되었습니다. 서버 연결을 확인해 주세요.')}},
 async refreshProfile(){if(ready)try{await refreshIdentity()}catch{}},
 init(callbacks){
  hooks=callbacks;updateEconomy(currentEconomy);updateAccount();updateProfile(currentProfile);$('serverUrlInput').value=backend;$('authServerUrl').value=backend;
  $('onlineOpen').onclick=()=>this.openOnline({kind:'code'});$('matchOpen').onclick=()=>this.openOnline({kind:'public'});$('practiceOpen').onclick=()=>hooks.onPractice?.();
  $('accountOpen').onclick=()=>{if(net.connected||net.queued){hooks.toast?.('대기 또는 경기를 종료한 뒤 계정을 변경할 수 있습니다.');return}$('authOverlay').hidden=false;$('authStatus').textContent='';updateAccount()};
  document.querySelectorAll('[data-match-kind]').forEach(b=>b.onclick=()=>{matchKind=b.dataset.matchKind;renderMode()});document.querySelectorAll('[data-team-size]').forEach(b=>b.onclick=()=>{teamSize=Number(b.dataset.teamSize);renderMode()});
  $('onlineRoom').oninput=renderMode;$('cancelQueueBtn').onclick=()=>{net.send({type:'queueCancel'});net.leave();$('onlineError').textContent='';renderMode()};
  document.querySelector('[data-close="onlineOverlay"]').addEventListener('click',()=>{if(net.queued||net.connecting)net.leave()});
  $('checkServerBtn').onclick=async()=>{try{changeServer($('serverUrlInput').value.trim());await checkServer();$('onlineError').textContent=ready?'':'서버 연결을 확인하세요.'}catch(error){$('onlineError').textContent=error.message}};
  document.querySelectorAll('[data-auth-tab]').forEach(b=>b.onclick=()=>{authTab=b.dataset.authTab;document.querySelectorAll('[data-auth-tab]').forEach(t=>t.classList.toggle('active',t===b));$('authSubmit').innerHTML=(authTab==='login'?'로그인':'계정 만들기')+' <span>→</span>';$('authPassword').autocomplete=authTab==='login'?'current-password':'new-password';$('authStatus').textContent=''});
  $('authForm').onsubmit=async event=>{event.preventDefault();$('authSubmit').disabled=true;$('authStatus').textContent='';try{if($('authServerUrl').value.trim())changeServer($('authServerUrl').value.trim());const result=await request('POST','/api/'+(authTab==='login'?'login':'register'),{username:$('authUsername').value.trim(),password:$('authPassword').value});token=result.token;rememberToken();account=result.user;$('authPassword').value='';updateAccount();updateProfile(account.progress);updateEconomy(account.economy);hooks.onAccount?.(account);$('authOverlay').hidden=true;hooks.toast?.(`${account.username} 님으로 로그인했습니다.`);checkServer()}catch(error){$('authStatus').textContent=error.message}finally{$('authSubmit').disabled=false}};
  $('logoutBtn').onclick=async()=>{try{await request('POST','/api/logout',{})}catch{}token='';rememberToken();account=null;updateAccount();hooks.onAccount?.(null);$('authOverlay').hidden=true;await refreshIdentity().catch(()=>{});hooks.toast?.('게스트 플레이로 전환했습니다.')};
  $('onlineForm').onsubmit=async event=>{
   event.preventDefault();$('onlineJoinBtn').disabled=true;$('onlineError').textContent='';
   try{changeServer($('serverUrlInput').value.trim()||backend);if(!await checkServer())throw new Error($('onlineServerStatus').textContent);hooks.initAudio?.();const name=$('onlineName').value.trim();set('nickname',name);const welcome=await net.join({name,room:matchKind==='code'?$('onlineRoom').value.trim().toUpperCase():'',map:hooks.getMap(),weapon:hooks.getWeapon(),kind:matchKind,teamSize});$('onlineOverlay').hidden=true;hooks.onOnline(welcome)}catch(error){if(error.name!=='AbortError')$('onlineError').textContent=error.message}finally{$('onlineJoinBtn').disabled=false;renderMode()}
  };
  $('copyRoomHud').onclick=async()=>{try{await navigator.clipboard.writeText(net.room);hooks.toast?.('방 코드를 복사했습니다: '+net.room)}catch{hooks.toast?.('방 코드: '+net.room)}};
  window.addEventListener('keydown',event=>{if(event.code==='Escape'&&!$('onlineOverlay').hidden&&!net.connected){net.leave();$('onlineOverlay').hidden=true}if(net.connected&&event.code==='Tab'){event.preventDefault();$('onlineScoreboard').hidden=false}});
  window.addEventListener('keyup',event=>{if(event.code==='Tab')$('onlineScoreboard').hidden=true});window.addEventListener('blur',()=>$('onlineScoreboard').hidden=true);
  if(location.protocol==='file:'){$('htmlDownload').hidden=true;document.querySelector('.server-download').hidden=true}renderMode();checkServer();
 }
};
