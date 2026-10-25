import test from 'node:test';
import assert from 'node:assert/strict';
import {spawn} from 'node:child_process';
import {mkdtemp,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import path from 'node:path';
import {once} from 'node:events';
import {io} from 'socket.io-client';
import {WebSocket} from 'ws';
const delay=ms=>new Promise(r=>setTimeout(r,ms));
function packets(socket,isIo){const messages=[],waiters=[];const add=m=>{messages.push(m);for(const f of [...waiters])f()};if(isIo)socket.on('packet',add);else socket.on('message',raw=>add(JSON.parse(raw)));return{all:messages,wait(type,predicate=()=>true){return new Promise((resolve,reject)=>{const check=()=>{const i=messages.findIndex(m=>m.type===type&&predicate(m));if(i<0)return;const[m]=messages.splice(i,1);clearTimeout(timer);waiters.splice(waiters.indexOf(check),1);resolve(m)};const timer=setTimeout(()=>{waiters.splice(waiters.indexOf(check),1);reject(Error('No '+type))},6000);waiters.push(check);check()})}}}
test('Socket.IO guests can queue/cancel, join a code room with a legacy peer, and fire authoritative arrows',async t=>{
 const dir=await mkdtemp(path.join(tmpdir(),'vector-io-')),child=spawn(process.execPath,['server.mjs'],{cwd:new URL('..',import.meta.url),env:{...process.env,PORT:'0',HOST:'127.0.0.1',DATA_DIR:dir},stdio:['ignore','pipe','pipe']});const sockets=[];t.after(async()=>{for(const s of sockets){if(s.disconnect)s.disconnect();else s.close()}child.kill('SIGTERM');if(child.exitCode===null)await once(child,'exit');await rm(dir,{recursive:true,force:true})});
 const origin=await new Promise((resolve,reject)=>{let text='';const timer=setTimeout(()=>reject(Error('Server startup')),5000);child.stdout.on('data',chunk=>{text+=chunk;const m=text.match(/ready: (http:\/\/127\.0\.0\.1:\d+)/);if(m){clearTimeout(timer);resolve(m[1])}})});
 const health=await(await fetch(origin+'/api/health')).json();assert.equal(health.socketIo,true);assert.equal(health.maxHealth,200);
 async function guest(){return(await(await fetch(origin+'/api/guest',{method:'POST',headers:{'Content-Type':'application/json'},body:'{}'})).json()).guestToken}
 const a=io(origin,{autoConnect:false,transports:['websocket'],reconnection:false}),events=packets(a,true);sockets.push(a);a.connect();await once(a,'connect');const token=await guest();a.emit('packet',{type:'queue',protocol:3,name:'IO',teamSize:2,weapon:50,guestToken:token});assert.equal((await events.wait('queued')).teamSize,2);a.emit('packet',{type:'queueCancel'});await events.wait('queueCancelled');
 a.emit('packet',{type:'join',protocol:3,name:'Archer',map:0,teamSize:1,weapon:50,guestToken:token});const welcome=await events.wait('welcome');assert.equal(welcome.self.health,200);
 const b=new WebSocket(origin.replace('http','ws')+'/ws'),other=packets(b,false);sockets.push(b);await once(b,'open');b.send(JSON.stringify({type:'join',protocol:3,name:'Legacy',teamSize:1,weapon:0,guestToken:await guest(),room:welcome.room}));const bw=await other.wait('welcome');assert.equal(bw.room,welcome.room);await events.wait('matchStart');
 a.emit('packet',{type:'draw',active:true});await delay(150);a.emit('packet',{type:'shoot',seq:1,dir:[0,.2,-Math.sqrt(.96)]});assert.equal((await events.wait('shotAck')).accepted,true);const arrow=await other.wait('projectile');assert.equal(arrow.projectile.kind,'arrow');assert.equal(arrow.projectile.owner,welcome.id);assert.ok(arrow.projectile.power>.5&&arrow.projectile.power<1);
 a.emit('packet',{type:'reload',seq:2});const reloadAck=await events.wait('reloadAck');assert.equal(reloadAck.accepted,true);assert.equal(reloadAck.seq,2);assert.equal(reloadAck.weapon,50);assert.equal(reloadAck.ammo,0);assert.equal(reloadAck.reserve,24);assert.ok(reloadAck.reloadAt>reloadAck.serverTime);
 await delay(650);const loaded=await events.wait('snapshot',m=>m.players.some(p=>p.id===welcome.id&&p.ammo===1&&p.reserve===23&&p.reloadAt===0));assert.equal(loaded.players.find(p=>p.id===welcome.id).reserve,23);
 a.emit('packet',{type:'equip',seq:3,weapon:42});const equipAck=await events.wait('equipAck');assert.equal(equipAck.accepted,true);assert.equal(equipAck.seq,3);assert.equal(equipAck.weapon,42);assert.equal(equipAck.ammo,15);assert.equal(equipAck.reserve,90);
 a.emit('packet',{type:'equip',seq:4,weapon:999});const rejected=await events.wait('equipAck');assert.equal(rejected.accepted,false);assert.equal(rejected.weapon,42);assert.equal(rejected.ammo,15);
 a.emit('packet',{type:'ping',time:123});assert.equal((await events.wait('pong')).time,123);a.disconnect();const end=await other.wait('matchEnd');assert.equal(end.match.reason,'forfeit');
});
