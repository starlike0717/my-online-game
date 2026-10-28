import test from 'node:test';
import assert from 'node:assert/strict';
import {spawn} from 'node:child_process';
import {mkdtemp,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import path from 'node:path';
import {once} from 'node:events';
import {io} from 'socket.io-client';
function packets(socket){const rows=[],waiting=[];socket.on('packet',m=>{rows.push(m);for(const w of [...waiting])if(m.type==='error'||w.type===m.type&&w.accept(m)){waiting.splice(waiting.indexOf(w),1);clearTimeout(w.timer);if(m.type==='error')w.reject(Error(m.error));else w.resolve(m)}});return(type,accept=()=>true)=>{const prior=rows.find(m=>m.type===type&&accept(m));if(prior)return Promise.resolve(prior);return new Promise((resolve,reject)=>{const w={type,accept,resolve,reject,timer:setTimeout(()=>reject(Error('Missing '+type)),5000)};waiting.push(w)})}}
test('Socket.IO sends the selected player skin to opponents and assigns distinct matching bot skins',async t=>{
 const dir=await mkdtemp(path.join(tmpdir(),'vector-skins-')),sockets=[];
 const child=spawn(process.execPath,['server.mjs'],{cwd:new URL('..',import.meta.url),env:{...process.env,PORT:'0',HOST:'127.0.0.1',DATA_DIR:dir},stdio:['ignore','pipe','pipe']});
 t.after(async()=>{for(const s of sockets)s.disconnect();if(child.exitCode===null){child.kill('SIGTERM');await once(child,'exit')}await rm(dir,{recursive:true,force:true})});
 const origin=await new Promise((resolve,reject)=>{let out='';const timer=setTimeout(()=>reject(Error('Server startup timeout')),5000);child.stdout.on('data',chunk=>{out+=chunk;const m=out.match(/ready: (http:\/\/127\.0\.0\.1:\d+)/);if(m){clearTimeout(timer);resolve(m[1])}});child.once('error',reject)});
 const health=await(await fetch(origin+'/api/health')).json();assert.equal(health.skinCount,10);
 async function client(join){const guest=await(await fetch(origin+'/api/guest',{method:'POST',headers:{'Content-Type':'application/json'},body:'{}'})).json(),socket=io(origin,{autoConnect:false,transports:['websocket'],reconnection:false}),wait=packets(socket);sockets.push(socket);socket.connect();await once(socket,'connect');socket.emit('packet',{type:'join',protocol:3,catalogVersion:2,name:'Player',map:0,teamSize:1,weapon:0,guestToken:guest.guestToken,...join});return{socket,wait,welcome:await wait('welcome')}}
 const a=await client({skinId:4}),b=await client({room:a.welcome.room,skinId:8});assert.equal(a.welcome.self.skinId,4);assert.equal(b.welcome.self.skinId,8);assert.equal(b.welcome.snapshot.players.find(p=>p.id===a.welcome.id).skinId,4);const synced=await a.wait('snapshot',m=>m.players.length===2);assert.equal(synced.players.find(p=>p.id===b.welcome.id).skinId,8);
 await a.wait('matchStart');a.socket.emit('packet',{type:'emote',emoteId:3});assert.equal((await a.wait('emoteAck')).accepted,true);assert.equal((await b.wait('emote',m=>m.id===a.welcome.id&&m.emoteId===3)).emoteId,3);const dancing=await b.wait('snapshot',m=>m.players.some(p=>p.id===a.welcome.id&&p.emoteId===3));assert.ok(dancing.players.find(p=>p.id===a.welcome.id).emoteUntil>dancing.time);a.socket.emit('packet',{type:'emote',emoteId:null});await b.wait('emote',m=>m.id===a.welcome.id&&m.emoteId===null);
 const bots=await client({type:'queueBots',teamSize:3,skinId:5}),snapshot=await bots.wait('snapshot',m=>m.players.length===6);assert.equal(snapshot.players.find(p=>p.id===bots.welcome.id).skinId,5);assert.equal(snapshot.players.filter(p=>p.bot).length,5);assert.equal(new Set(snapshot.players.map(p=>p.skinId)).size,6);assert.ok(snapshot.players.every(p=>Number.isInteger(p.skinId)&&p.skinId>=0&&p.skinId<10));
});
