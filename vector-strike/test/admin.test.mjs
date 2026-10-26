import test from 'node:test';
import assert from 'node:assert/strict';
import {scryptSync} from 'node:crypto';
import {spawn} from 'node:child_process';
import {once} from 'node:events';
import {mkdtemp,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import path from 'node:path';
import {readAdminConfig,bootstrapAdmin} from '../server/admin.mjs';
const salt='0123456789abcdef0123456789abcdef',password='Test-Admin-2026',credential=salt+':'+scryptSync(password,salt,64).toString('hex');
test('administrator bootstrap uses private environment config and retains stored progress',()=>{
 assert.equal(readAdminConfig({}),null);assert.throws(()=>readAdminConfig({VECTOR_ADMIN_USER:'operator'}));const config=readAdminConfig({VECTOR_ADMIN_USER:'운영자',VECTOR_ADMIN_CREDENTIAL:credential}),users=new Map([['운영자',{username:'운영자',economy:{coins:1200},records:[{id:'keep'}]}]]);assert.equal(bootstrapAdmin(users,config,{}),true);assert.equal(users.get('운영자').role,'admin');assert.equal(users.get('운영자').economy.coins,1200);assert.equal(users.get('운영자').records[0].id,'keep');assert.equal(bootstrapAdmin(users,config,{}),false);
});
test('configured Korean administrator can log in, ordinary users cannot assign their own role',async t=>{
 const dir=await mkdtemp(path.join(tmpdir(),'vector-admin-test-')),child=spawn(process.execPath,['server.mjs'],{cwd:new URL('..',import.meta.url),env:{...process.env,PORT:'0',HOST:'127.0.0.1',DATA_DIR:dir,VECTOR_ADMIN_USER:'운영자',VECTOR_ADMIN_CREDENTIAL:credential},stdio:['ignore','pipe','pipe']});t.after(async()=>{child.kill('SIGTERM');if(child.exitCode===null)await once(child,'exit');await rm(dir,{recursive:true,force:true})});
 const origin=await new Promise((resolve,reject)=>{let out='';const timer=setTimeout(()=>reject(Error('Server startup')),5000);child.stdout.on('data',data=>{out+=data;const m=out.match(/ready: (http:\/\/127\.0\.0\.1:\d+)/);if(m){clearTimeout(timer);resolve(m[1])}})});
 const call=async(route,data,token)=>{const r=await fetch(origin+route,{method:data?'POST':'GET',headers:{...(data?{'Content-Type':'application/json'}:{}),...(token?{Authorization:'Bearer '+token}:{})},body:data?JSON.stringify(data):undefined});return{status:r.status,data:await r.json()}};
 assert.equal((await call('/api/login',{username:'운영자',password:'incorrect-password'})).status,401);const login=await call('/api/login',{username:'운영자',password});assert.equal(login.status,200);assert.equal(login.data.user.role,'admin');assert.ok(!('salt' in login.data.user)&&!('passwordHash' in login.data.user));assert.equal((await call('/api/admin/status')).status,403);assert.equal((await call('/api/admin/status',null,login.data.token)).status,200);
 const user=await call('/api/register',{username:'일반유저',password:'Regular-test-2026',role:'admin'});assert.equal(user.status,200);assert.equal(user.data.user.role,'player');assert.equal((await call('/api/admin/status',null,user.data.token)).status,403);
});
