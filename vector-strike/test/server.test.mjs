import test from 'node:test';
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { mkdtemp,rm,readFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { once } from 'node:events';
import { WebSocket } from 'ws';
let child,origin,dir;
async function boot(){child=spawn(process.execPath,['server.mjs'],{cwd:new URL('..',import.meta.url),env:{...process.env,PORT:'0',HOST:'127.0.0.1',DATA_DIR:dir},stdio:['ignore','pipe','pipe']});origin=await new Promise((resolve,reject)=>{let output='';const t=setTimeout(()=>reject(new Error('Server startup timeout')),5000);child.stdout.on('data',chunk=>{output+=chunk;const m=output.match(/ready: (http:\/\/127\.0\.0\.1:\d+)/);if(m){clearTimeout(t);resolve(m[1])}});child.once('exit',code=>{clearTimeout(t);reject(new Error('Server exited '+code))})})}
async function stop(){if(child?.exitCode===null){child.kill('SIGTERM');await once(child,'exit')}}
async function api(route,method='GET',data,token=''){const res=await fetch(origin+route,{method,headers:{...(data?{'Content-Type':'application/json'}:{}),...(token?{Authorization:'Bearer '+token}:{})},body:data?JSON.stringify(data):undefined});return {status:res.status,body:await res.json()}}
async function connect(join){const guest=await api('/api/guest','POST',{});return new Promise((resolve,reject)=>{const ws=new WebSocket(origin.replace('http','ws')+'/ws');const timer=setTimeout(()=>{ws.terminate();reject(new Error('WebSocket timeout'))},4000);ws.once('error',reject);ws.on('open',()=>ws.send(JSON.stringify({type:'join',protocol:3,catalogVersion:2,teamSize:1,guestToken:guest.body.guestToken,...join})));ws.on('message',data=>{const m=JSON.parse(data);if(m.type==='welcome'){clearTimeout(timer);resolve({ws,welcome:m})}if(m.type==='error'){clearTimeout(timer);ws.close();reject(new Error(m.error))}})})}
test('guest play, optional accounts, persistence, rooms, and safe static serving',async t=>{
 dir=await mkdtemp(path.join(tmpdir(),'vector-test-'));await boot();t.after(async()=>{await stop();await rm(dir,{recursive:true,force:true})});
 assert.equal((await api('/api/health')).body.online,true);assert.equal((await fetch(origin+'/')).status,200);assert.equal((await fetch(origin+'/runtime-config.js')).status,200);assert.equal((await api('/api/me')).status,401);assert.equal((await api('/api/health')).body.matchmaking,true);
 const username='test_pilot',password='test-only-password-2984';const registered=await api('/api/register','POST',{username,password});assert.equal(registered.status,200);assert.ok(registered.body.token);const token=registered.body.token;assert.equal((await api('/api/login','POST',{username,password:'incorrect-password'})).status,401);assert.equal((await api('/api/me','GET',undefined,token)).body.user.username,username);assert.equal((await api('/api/me','GET',undefined,token)).body.user.progress.level,1);assert.equal((await api('/api/records','POST',{id:'test-record',mode:'bots',map:0,kills:3,score:300,wave:1,time:20},token)).status,200);
 assert.equal((await api('/api/records','POST',{id:'untrusted-online-record',mode:'online',map:0,kills:9999,score:999900,wave:1,time:100},token)).status,200);assert.equal((await api('/api/me','GET',undefined,token)).body.user.progress.xp,0);
 const stored=await readFile(path.join(dir,'accounts.json'),'utf8');assert.ok(!stored.includes(password));assert.ok(!stored.includes(token));
 const a=await connect({name:'Guest One',map:2,weapon:0}),b=await connect({name:'Guest Two',room:a.welcome.room,map:0});assert.equal(b.welcome.map,2);assert.equal(b.welcome.snapshot.players.length,2);assert.equal(b.welcome.snapshot.players[0].name,'Guest One');a.ws.close();b.ws.close();
 await stop();await boot();assert.equal((await api('/api/me','GET',undefined,token)).body.user.records[0].kills,3);const logged=await api('/api/login','POST',{username,password});assert.equal(logged.status,200);assert.equal((await api('/api/logout','POST',{},token)).status,200);assert.equal((await api('/api/me','GET',undefined,token)).status,401);
 const denied=await fetch(origin+'/%2e%2e%2fpackage.json');assert.equal(denied.status,403);assert.equal((await fetch(origin+'/.data/accounts.json')).status,403);
});
