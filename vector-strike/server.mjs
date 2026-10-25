import {normalizeEconomy,publicEconomy,purchase,credit,waveReward,winReward} from './dist/economy.js';
import http from 'node:http';
import {EventEmitter} from 'node:events';
import {Server as SocketIOServer} from 'socket.io';
import { isIP } from 'node:net';
import { readFile,writeFile,mkdir,rename,stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { randomBytes,createHash,scrypt,timingSafeEqual } from 'node:crypto';
import { promisify } from 'node:util';
import { WebSocketServer,WebSocket } from 'ws';
import {MAX_HEALTH} from './dist/combat.js';
import { Arena } from './server/arena.mjs';
import { Matchmaker,validTeamSize } from './server/matchmaker.mjs';
import { normalizeProgress,publicProgress,applyResult } from './server/progression.mjs';

const base=path.dirname(fileURLToPath(import.meta.url));
const root=path.join(base,'dist');
const dataDir=path.resolve(process.env.DATA_DIR||path.join(base,'.data'));
const dataFile=path.join(dataDir,'accounts.json');
const derive=promisify(scrypt);
const hashToken=t=>createHash('sha256').update(t).digest('hex');
const rooms=new Map(),sessions=new Map(),users=new Map(),guests=new Map(),rateLimits=new Map(),activeIdentities=new Map(),practiceRuns=new Map();
const matchmaker=new Matchmaker();let closing=false;
let writeQueue=Promise.resolve(),authInFlight=0;
await mkdir(dataDir,{recursive:true,mode:0o700});
try{const data=JSON.parse(await readFile(dataFile,'utf8'));for(const u of data.users||[]){u.progress=normalizeProgress(u.progress);users.set(u.username,u)}for(const g of data.guests||[]){g.progress=normalizeProgress(g.progress);guests.set(g.hash,g)}for(const s of data.sessions||[])if(s.expires>Date.now())sessions.set(s.hash,s)}catch(error){if(error.code!=='ENOENT')throw new Error('계정 데이터를 읽을 수 없습니다. 기존 데이터 파일을 확인하세요.',{cause:error})}
function persist(){const text=JSON.stringify({users:[...users.values()],sessions:[...sessions.values()],guests:[...guests.values()]});const next=writeQueue.catch(()=>{}).then(async()=>{await writeFile(dataFile+'.tmp',text,{mode:0o600});await rename(dataFile+'.tmp',dataFile)});writeQueue=next;return next}
function tokenFrom(req){const auth=req.headers.authorization;return typeof auth==='string'&&auth.startsWith('Bearer ')?auth.slice(7):''}
function sessionUser(token){if(typeof token!=='string'||token.length>128)return null;const session=sessions.get(hashToken(token));return session&&session.expires>Date.now()?users.get(session.username)||null:null}
function publicUser(u){return {username:u.username,createdAt:u.createdAt,records:u.records||[],progress:publicProgress(u.progress),economy:publicEconomy(u.economy)}}
function guestFor(token){return typeof token==='string'&&token.length<=128?guests.get(hashToken(token))||null:null}
function identityFor(m){const user=sessionUser(m.token||'');if(user)return {key:'u:'+user.username,holder:user,name:user.username};const guest=guestFor(m.guestToken||'');return guest?{key:'g:'+guest.hash,holder:guest,name:String(m.name||guest.name||'GUEST').replace(/[<>\x00-\x1f]/g,'').trim().slice(0,20)||'GUEST'}:null}
function holderFor(key){return key?.startsWith('u:')?users.get(key.slice(2)):key?.startsWith('g:')?guests.get(key.slice(2)):null}
function json(res,status,data){res.writeHead(status,{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store'});res.end(JSON.stringify(data))}
function limit(key,max,windowMs){const now=Date.now();let item=rateLimits.get(key);if(!item||item.until<now){item={n:0,until:now+windowMs};rateLimits.set(key,item)}item.n++;return item.n<=max}
function ipOf(req){const remote=req.socket.remoteAddress||'unknown';const forwarded=req.headers['cf-connecting-ip'];return ['127.0.0.1','::1','::ffff:127.0.0.1'].includes(remote)&&typeof forwarded==='string'&&isIP(forwarded)?forwarded:remote}
async function body(req){if(!req.headers['content-type']?.startsWith('application/json'))throw Object.assign(new Error('JSON 요청이 필요합니다.'),{status:415});let text='';for await(const chunk of req){text+=chunk;if(Buffer.byteLength(text)>16384)throw Object.assign(new Error('요청이 너무 큽니다.'),{status:413})}try{return JSON.parse(text)}catch{throw Object.assign(new Error('잘못된 요청입니다.'),{status:400})}}
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.txt':'text/plain; charset=utf-8','.png':'image/png','.jpg':'image/jpeg'};
const server=http.createServer(async(req,res)=>{
  res.setHeader('X-Content-Type-Options','nosniff');res.setHeader('Referrer-Policy','same-origin');
  const origin=req.headers.origin;if(origin&&origin.length<300){res.setHeader('Access-Control-Allow-Origin',origin);res.setHeader('Vary','Origin');res.setHeader('Access-Control-Allow-Headers','Content-Type, Authorization, X-Guest-Token');res.setHeader('Access-Control-Allow-Methods','GET, POST, OPTIONS')}
  if(req.method==='OPTIONS'){res.writeHead(204);return res.end()}
  try{
    const url=new URL(req.url,'http://localhost'),route=url.pathname,ip=ipOf(req);
    if(route.startsWith('/api/')){
      if(!limit('api:'+ip,240,60000))return json(res,429,{error:'요청이 많습니다. 잠시 후 다시 시도하세요.'});
      if(route==='/api/health'&&req.method==='GET')return json(res,200,{ok:true,version:3,accounts:true,online:true,matchmaking:true,socketIo:true,inventorySync:true,finiteAmmo:true,economy:true,threeSlots:true,maxHealth:MAX_HEALTH,teamSizes:[1,2,3,4],queued:matchmaker.count,rooms:rooms.size,players:[...rooms.values()].reduce((n,r)=>n+[...r.players.values()].filter(p=>p.connected).length,0)});
      if(route==='/api/guest'&&req.method==='POST'){
        const data=await body(req);let guest=guestFor(data.guestToken),guestToken=data.guestToken;
        if(!guest){guestToken=randomBytes(32).toString('base64url');const hash=hashToken(guestToken);guest={hash,id:randomBytes(12).toString('hex'),name:'GUEST',createdAt:Date.now(),progress:normalizeProgress(),records:[]};guests.set(hash,guest);await persist()}
        return json(res,200,{guestToken,profile:publicProgress(guest.progress),economy:publicEconomy(guest.economy),records:guest.records||[]});
      }
      if(route==='/api/profile'&&req.method==='GET'){
        const user=sessionUser(tokenFrom(req)),guest=guestFor(req.headers['x-guest-token']);const holder=user||guest;
        return holder?json(res,200,{profile:publicProgress(holder.progress),economy:publicEconomy(holder.economy)}):json(res,401,{error:'게스트 또는 계정 연결을 확인해 주세요.'});
      }
      if(['/api/shop/buy','/api/wave/start','/api/wave/reward'].includes(route)&&req.method==='POST'){
        const holder=sessionUser(tokenFrom(req))||guestFor(req.headers['x-guest-token']);if(!holder)return json(res,401,{error:'게스트 또는 계정 연결을 확인하세요.'});const data=await body(req);
        if(route==='/api/shop/buy'){try{holder.economy=purchase(holder.economy,data.weapon)}catch(error){return json(res,400,{error:error.message})}await persist();return json(res,200,{economy:publicEconomy(holder.economy)})}
        if(route==='/api/wave/start'){const runId=randomBytes(18).toString('hex');practiceRuns.set(runId,{holder,wave:0,kills:0,at:Date.now(),expires:Date.now()+7200000});return json(res,200,{runId})}
        const run=practiceRuns.get(data.runId);if(!run||run.holder!==holder||run.expires<Date.now())return json(res,400,{error:'웨이브 보상 세션이 만료되었습니다.'});
        if(Number.isInteger(data.wave)&&data.wave<=run.wave)return json(res,200,{economy:publicEconomy(holder.economy),amount:0});
        if(!Number.isInteger(data.wave)||data.wave!==run.wave+1||!Number.isInteger(data.kills)||data.kills<run.kills+Math.min(3+data.wave*2,16)||Date.now()-run.at<1500)return json(res,400,{error:'완료한 웨이브를 확인할 수 없습니다.'});
        const reward=credit(holder.economy,'wave:'+data.runId+':'+data.wave,waveReward(data.wave));holder.economy=reward.economy;run.wave=data.wave;run.kills=data.kills;run.at=Date.now();await persist();return json(res,200,{economy:publicEconomy(holder.economy),amount:reward.amount});
      }
      if((route==='/api/register'||route==='/api/login')&&req.method==='POST'){
        if(!limit('auth:'+ip,15,15*60000)||authInFlight>=8)return json(res,429,{error:'로그인 시도가 많습니다. 15분 후 다시 시도하세요.'});
        const data=await body(req),username=String(data.username||'').toLowerCase().trim(),password=data.password;
        if(!/^[a-z0-9_]{3,20}$/.test(username)||typeof password!=='string'||password.length<8||password.length>128)return json(res,400,{error:'아이디는 영문·숫자·밑줄 3~20자, 비밀번호는 8~128자로 입력하세요.'});
        authInFlight++;let u;try{
          if(route==='/api/register'){
            if(users.has(username))return json(res,409,{error:'이미 사용 중인 아이디입니다.'});
            const salt=randomBytes(16).toString('hex'),passwordHash=(await derive(password,salt,64)).toString('hex');
            if(users.has(username))return json(res,409,{error:'이미 사용 중인 아이디입니다.'});
            u={username,salt,passwordHash,createdAt:Date.now(),records:[],progress:normalizeProgress()};users.set(username,u);
          }else{
            u=users.get(username);const salt=u?.salt||'00000000000000000000000000000000';const actual=await derive(password,salt,64),expected=u?Buffer.from(u.passwordHash,'hex'):Buffer.alloc(64);if(!u||!timingSafeEqual(actual,expected))return json(res,401,{error:'아이디 또는 비밀번호를 확인하세요.'});
          }
          const token=randomBytes(32).toString('base64url'),hash=hashToken(token);sessions.set(hash,{hash,username,expires:Date.now()+7*24*60*60000});await persist();return json(res,200,{token,user:publicUser(u)});
        }finally{authInFlight--}
      }
      const u=sessionUser(tokenFrom(req));
      if(route==='/api/me'&&req.method==='GET')return u?json(res,200,{user:publicUser(u)}):json(res,401,{error:'로그인이 필요합니다.'});
      if(route==='/api/logout'&&req.method==='POST'){sessions.delete(hashToken(tokenFrom(req)));await persist();return json(res,200,{ok:true})}
      if(route==='/api/records'&&req.method==='POST'){
        if(!u)return json(res,401,{error:'로그인이 필요합니다.'});const r=await body(req);if(!['waves','timed','training','bots','online'].includes(r.mode)||!Number.isInteger(r.map)||r.map<0||r.map>3||![r.kills,r.score,r.wave,r.time].every(n=>Number.isFinite(n)&&n>=0&&n<=10000000))return json(res,400,{error:'올바르지 않은 기록입니다.'});const record={id:typeof r.id==='string'?r.id.slice(0,50):randomBytes(8).toString('hex'),date:Date.now(),map:r.map,mode:r.mode,kills:Math.floor(r.kills),score:Math.floor(r.score),wave:Math.floor(r.wave),time:Math.floor(r.time)};u.records=(u.records||[]).filter(x=>x.id!==record.id).concat(record).slice(-200);await persist();return json(res,200,{ok:true,record});
      }
      return json(res,404,{error:'요청한 API를 찾을 수 없습니다.'});
    }
    if(!['GET','HEAD'].includes(req.method))return json(res,405,{error:'허용되지 않은 메서드입니다.'});
    let pathname;try{pathname=decodeURIComponent(route)}catch{return json(res,400,{error:'잘못된 경로입니다.'})}
    if(pathname==='/runtime-config.js'){res.writeHead(200,{'Content-Type':types['.js'],'Cache-Control':'no-store'});return res.end('window.VECTOR_CONFIG={serverUrl:location.origin};')}
    const file=path.resolve(root,'.'+(pathname==='/'?'/index.html':pathname));if(!file.startsWith(root+path.sep)||pathname.split('/').some(p=>p.startsWith('.')))return json(res,403,{error:'접근할 수 없습니다.'});
    try{const info=await stat(file);if(!info.isFile())throw new Error('Not file');const bytes=await readFile(file);res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream','Content-Length':bytes.length,'Cache-Control':'no-cache'});res.end(req.method==='HEAD'?undefined:bytes)}catch{return json(res,404,{error:'파일을 찾을 수 없습니다.'})}
  }catch(error){if(!res.headersSent)json(res,error.status||500,{error:error.status?error.message:'서버 오류가 발생했습니다. 잠시 후 다시 시도하세요.'});else res.end();if(!error.status)console.error('Request failed:',error.code||error.message)}
});
const wss=new WebSocketServer({noServer:true,maxPayload:4096}),peers=new Set();
const ioServer=new SocketIOServer(server,{serveClient:false,cors:{origin:true},maxHttpBufferSize:4096,destroyUpgrade:false,allowRequest(req,done){done(null,limit('ws:'+ipOf(req),60,60000))}});
ioServer.on('connection',socket=>{
 const peer=new EventEmitter();Object.defineProperty(peer,'readyState',{get:()=>socket.connected?WebSocket.OPEN:WebSocket.CLOSED});Object.defineProperty(peer,'bufferedAmount',{get:()=>socket.conn.writeBuffer.length*512});
 peer.send=text=>{if(socket.connected)socket.emit('packet',JSON.parse(text))};peer.close=()=>socket.disconnect(true);peer.terminate=peer.close;
 peer.ping=()=>socket.timeout(10000).emit('probe',error=>{if(!error)peer.emit('pong')});
 socket.on('packet',data=>{try{const text=JSON.stringify(data);if(Buffer.byteLength(text)>4096)return peer.close();peer.emit('message',Buffer.from(text))}catch{peer.close()}});
 socket.on('disconnect',()=>peer.emit('close'));socket.on('error',error=>peer.emit('error',error));
 wss.emit('connection',peer,socket.request);
});
server.on('upgrade',(req,socket,head)=>{let route;try{route=new URL(req.url,'http://localhost').pathname}catch{socket.destroy();return}if(route.startsWith('/socket.io/'))return;if(route!=='/ws'||!limit('ws:'+ipOf(req),60,60000)){socket.write('HTTP/1.1 429 Too Many Requests\r\nConnection: close\r\n\r\n');socket.destroy();return}wss.handleUpgrade(req,socket,head,ws=>wss.emit('connection',ws,req))});
function send(ws,data){if(ws.readyState===WebSocket.OPEN&&ws.bufferedAmount<128000)ws.send(JSON.stringify(data))}
function acknowledgeLoadout(ws,type,request,accepted){const p=ws.room.players.get(ws.playerId);if(!p)return;send(ws,{type,seq:request.seq,requested:request.weapon,accepted,weapon:p.weapon,ammo:p.ammo,reserve:p.reserve,reloadAt:p.reloadAt,readyAt:p.readyAt,health:p.health,serverTime:Date.now()})}
function broadcast(room,data){for(const ws of peers)if(ws.room===room)send(ws,data)}
function createRoom(map,teamSize,kind){if(rooms.size>=100)throw new Error('서버의 경기 방이 가득 찼습니다. 잠시 후 다시 시도하세요.');let code;do{code=randomBytes(3).toString('hex').toUpperCase()}while(rooms.has(code));const room=new Arena(code,map,Date.now,{teamSize,kind});rooms.set(code,room);return room}
function identify(ws,m){if(m.protocol!==3)throw new Error('게임이 업데이트되었습니다. 페이지를 새로고침하고 다시 참가하세요.');const identity=identityFor(m);if(!identity)throw new Error('게스트 정보를 연결한 뒤 다시 시도하세요.');const other=activeIdentities.get(identity.key);if(other&&other!==ws&&other.readyState===WebSocket.OPEN)throw new Error('이 플레이어는 다른 탭에서 대기하거나 경기 중입니다. 먼저 기존 경기를 종료하세요.');ws.identity=identity;activeIdentities.set(identity.key,ws);return identity}
function attach(ws,room,weapon){const identity=ws.identity,profile=publicProgress(identity.holder.progress);if(!normalizeEconomy(identity.holder.economy).owned.includes(weapon))throw new Error('구매한 무기만 장착할 수 있습니다.');const p=room.join(identity.name,weapon,{profileKey:identity.key,level:profile.level,rating:profile.rating});ws.room=room;ws.playerId=p.id;ws.queueEntry=null;clearTimeout(ws.joinTimeout);const snapshot=room.snapshot();send(ws,{type:'welcome',id:p.id,room:room.code,map:room.map,self:snapshot.players.find(v=>v.id===p.id),snapshot});broadcast(room,{type:'joined',name:p.name,count:room.players.size});}
function cancelQueue(ws){if(ws.queueEntry){matchmaker.cancel(ws.queueEntry.key);ws.queueEntry=null}if(ws.identity&&!ws.room&&activeIdentities.get(ws.identity.key)===ws)activeIdentities.delete(ws.identity.key)}
function finalise(room){
  if(room.phase!=='finished'||room.resultApplied)return;room.resultApplied=true;
  const context={id:room.id,winner:room.winner,reason:room.reason,duration:Math.max(0,room.finishedAt-room.startedAt),teamRatings:room.teamRatings};
  const outcomes=new Map();
  for(const p of room.players.values()){
    const holder=holderFor(p.profileKey);if(!holder)continue;const reward=applyResult(holder,p,context);const cash=credit(holder.economy,'match:'+room.id,reward.outcome==='win'?winReward(room.teamSize):0);holder.economy=cash.economy;
    const record={id:room.id,date:Date.now(),map:room.map,mode:'online',matchMode:`${room.teamSize}v${room.teamSize}`,outcome:reward.outcome,kills:p.kills,deaths:p.deaths,assists:p.assists,score:p.kills*100+p.assists*30,wave:0,time:Math.floor(context.duration/1000),xp:reward.xp,level:reward.levelAfter};
    holder.records=(holder.records||[]).filter(r=>r.id!==record.id).concat(record).slice(-200);outcomes.set(p.id,{...reward,record,coins:cash.amount,economy:publicEconomy(holder.economy)});
  }
  persist().then(()=>{for(const ws of peers)if(ws.room===room)send(ws,{type:'matchEnd',match:room.matchInfo(),self:outcomes.get(ws.playerId)||null,players:room.snapshot().players});room.resultDelivered=true}).catch(error=>{console.error('Match result persistence failed:',error.code||error.message);for(const ws of peers)if(ws.room===room)send(ws,{type:'matchEnd',match:room.matchInfo(),self:outcomes.get(ws.playerId)||null,saved:false,players:room.snapshot().players})});
}
function matchQueued(){
  for(const queue of matchmaker.queues.values())for(const e of [...queue])if(e.ws.readyState!==WebSocket.OPEN)matchmaker.cancel(e.key);
  for(const group of matchmaker.takeMatches(Math.max(0,100-rooms.size))){const room=createRoom(Math.floor(Math.random()*4),group.teamSize,'public');for(const entry of group.entries){try{attach(entry.ws,room,entry.weapon)}catch(error){send(entry.ws,{type:'error',error:error.message});cancelQueue(entry.ws)}}}
  for(const queue of matchmaker.queues.values())for(const entry of queue)send(entry.ws,matchmaker.status(entry));
}
wss.on('connection',(ws,req)=>{
  peers.add(ws);
  ws.isAlive=true;ws.on('pong',()=>ws.isAlive=true);ws.joinTimeout=setTimeout(()=>{if(!ws.playerId&&!ws.queueEntry)ws.close(1008,'Join timeout')},10000);let messages=0,messageWindow=Date.now();
  ws.on('message',raw=>{
    if(Date.now()-messageWindow>1000){messages=0;messageWindow=Date.now()}if(++messages>80){ws.close(1008,'Too many messages');return}
    let m;try{m=JSON.parse(raw.toString());if(!m||typeof m!=='object')return}catch{return}
    if(m.type==='queueCancel'){cancelQueue(ws);send(ws,{type:'queueCancelled'});return}
    if((m.type==='queue'||m.type==='join')&&!ws.playerId&&!ws.queueEntry){
      try{
        const identity=identify(ws,m);if(!normalizeEconomy(identity.holder.economy).owned.includes(Number(m.weapon)||0))throw new Error('구매한 무기만 장착할 수 있습니다.');if(!validTeamSize(m.teamSize))throw new Error('1대1, 2대2, 3대3, 4대4 중 선택하세요.');
        if(m.type==='queue'){const profile=publicProgress(identity.holder.progress);ws.queueEntry=matchmaker.enqueue({key:identity.key,ws,weapon:Number(m.weapon)||0,teamSize:m.teamSize,level:profile.level,rating:profile.rating});clearTimeout(ws.joinTimeout);send(ws,matchmaker.status(ws.queueEntry));matchQueued();return}
        const code=typeof m.room==='string'?m.room.trim().toUpperCase():'';if(code&&!/^[A-Z0-9]{4,8}$/.test(code))throw new Error('방 코드는 영문·숫자 4~8자입니다.');
        const room=code?rooms.get(code):createRoom(Number(m.map)||0,m.teamSize,'code');if(!room)throw new Error('방을 찾을 수 없습니다. 코드를 확인하세요.');attach(ws,room,Number(m.weapon)||0);
      }catch(error){if(ws.identity&&!ws.room&&!ws.queueEntry&&activeIdentities.get(ws.identity.key)===ws)activeIdentities.delete(ws.identity.key);send(ws,{type:'error',error:error.message})}return;
    }
    if(m.type==='ping')return send(ws,{type:'pong',time:m.time});
    if(!ws.room||!ws.playerId)return;
    if(m.type==='move'){if(!ws.room.move(ws.playerId,m)){const p=ws.room.players.get(ws.playerId);if(p&&p.health>0&&ws.room.phase!=='finished')send(ws,{type:'correct',x:p.x,y:p.y,z:p.z})}}
    if(m.type==='shoot'){const result=ws.room.shoot(ws.playerId,m.dir,{aim:m.aim===true});acknowledgeLoadout(ws,'shotAck',m,result.accepted)}
    if(m.type==='draw')ws.room.draw(ws.playerId,m.active!==false);
    if(m.type==='reload'){const accepted=ws.room.reload(ws.playerId);acknowledgeLoadout(ws,'reloadAck',m,accepted)}
    if(m.type==='equip'){const p=ws.room.players.get(ws.playerId),accepted=normalizeEconomy(ws.identity.holder.economy).owned.includes(m.weapon)&&(ws.room.equip(ws.playerId,m.weapon)||p.health>0&&ws.room.phase!=='finished'&&p.weapon===m.weapon);acknowledgeLoadout(ws,'equipAck',m,accepted)}
  });
  ws.on('close',()=>{peers.delete(ws);clearTimeout(ws.joinTimeout);cancelQueue(ws);if(ws.identity&&activeIdentities.get(ws.identity.key)===ws)activeIdentities.delete(ws.identity.key);if(ws.room&&!closing){const room=ws.room;room.remove(ws.playerId);broadcast(room,{type:'left',count:[...room.players.values()].filter(p=>p.connected).length});finalise(room);if(![...room.players.values()].some(p=>p.connected))rooms.delete(room.code)}});ws.on('error',()=>{});
});
const tick=setInterval(()=>{for(const room of rooms.values()){room.tick();for(const event of room.events.splice(0))broadcast(room,event);finalise(room);broadcast(room,room.snapshot());if(room.phase==='finished'&&Date.now()-room.finishedAt>120000){for(const ws of peers)if(ws.room===room)ws.close(1000,'Match finished');rooms.delete(room.code)}}},50);
const queueTick=setInterval(matchQueued,500);
const heartbeat=setInterval(()=>{for(const ws of peers){if(!ws.isAlive){ws.terminate();continue}ws.isAlive=false;ws.ping()}for(const[k,v]of rateLimits)if(v.until<Date.now())rateLimits.delete(k);let changed=false;for(const[k,v]of sessions)if(v.expires<Date.now()){sessions.delete(k);changed=true}if(changed)persist().catch(()=>{})},30000);
const port=process.env.PORT===undefined?4317:Number(process.env.PORT),host=process.env.HOST||'0.0.0.0';server.listen(port,host,()=>{console.log(`VECTOR Node.js server ready: http://127.0.0.1:${server.address().port}`);console.log('Guest + accounts / balanced public matchmaking / 1v1, 2v2, 3v3, 4v4 team rooms');console.log(`Listening on ${host}:${port}.`)});
function stop(){closing=true;clearInterval(tick);clearInterval(queueTick);clearInterval(heartbeat);for(const ws of peers)ws.close(1001,'Server stopping');ioServer.disconnectSockets(true);ioServer.engine.close();server.close();writeQueue.finally(()=>process.exit(0));setTimeout(()=>process.exit(0),3000).unref()}
process.on('SIGTERM',stop);process.on('SIGINT',stop);
