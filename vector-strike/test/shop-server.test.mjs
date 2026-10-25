import test from 'node:test';
import assert from 'node:assert/strict';
import {spawn} from 'node:child_process';
import {mkdtemp,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import path from 'node:path';
import {once} from 'node:events';
test('server shop charges once, wave claims cannot repeat, and unowned/unauthenticated requests are rejected',async t=>{
 const dir=await mkdtemp(path.join(tmpdir(),'vector-shop-')),child=spawn(process.execPath,['server.mjs'],{cwd:new URL('..',import.meta.url),env:{...process.env,HOST:'127.0.0.1',PORT:'0',DATA_DIR:dir},stdio:['ignore','pipe','pipe']});
 t.after(async()=>{child.kill('SIGTERM');if(child.exitCode===null)await once(child,'exit');await rm(dir,{recursive:true,force:true})});
 const origin=await new Promise((resolve,reject)=>{let text='';const timeout=setTimeout(()=>reject(Error('Server startup')),5000);child.stdout.on('data',raw=>{text+=raw;const m=text.match(/ready: (http:\/\/127\.0\.0\.1:\d+)/);if(m){clearTimeout(timeout);resolve(m[1])}})});
 let token='';async function api(route,data){const r=await fetch(origin+route,{method:data?'POST':'GET',headers:{'Content-Type':'application/json',...(token?{'X-Guest-Token':token}:{})},body:data?JSON.stringify(data):undefined});return{status:r.status,...await r.json()}}
 assert.equal((await api('/api/shop/buy',{weapon:43})).status,401);const guest=await api('/api/guest',{});token=guest.guestToken;assert.equal(guest.economy.coins,500);assert.equal((await api('/api/shop/buy',{weapon:72})).status,400);assert.equal((await api('/api/shop/buy',{weapon:'43'})).status,400);
 const run=await api('/api/wave/start',{});assert.equal((await api('/api/wave/reward',{runId:run.runId,wave:1,kills:0})).status,400);await new Promise(r=>setTimeout(r,1550));const reward=await api('/api/wave/reward',{runId:run.runId,wave:1,kills:5});assert.equal(reward.amount,125);assert.equal(reward.economy.coins,625);const duplicate=await api('/api/wave/reward',{runId:run.runId,wave:1,kills:5});assert.equal(duplicate.amount,0);assert.equal(duplicate.economy.coins,625);assert.equal((await api('/api/wave/reward',{runId:run.runId,wave:3,kills:30})).status,400);
 const bought=await api('/api/shop/buy',{weapon:43});assert.equal(bought.economy.coins,325);assert.ok(bought.economy.owned.includes(43));assert.equal((await api('/api/shop/buy',{weapon:43})).economy.coins,325);const profile=await api('/api/profile');assert.equal(profile.economy.coins,325);
});
