import { spawn,execFileSync } from 'node:child_process';
import { mkdir,readFile,writeFile,open,access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root=path.dirname(path.dirname(fileURLToPath(import.meta.url))),runtime=path.join(root,'.runtime');
await mkdir(runtime,{recursive:true});
let binary=path.join(root,'.tools/cloudflared');try{await access(binary)}catch{try{binary=execFileSync('which',['cloudflared'],{encoding:'utf8'}).trim()}catch{console.error('Install cloudflared from https://developers.cloudflare.com/tunnel/downloads/ before using this optional command.');process.exit(1)}}
try{const old=JSON.parse(await readFile(path.join(runtime,'online.json'),'utf8'));process.kill(old.serverPid,0);process.kill(old.tunnelPid,0);console.log('Already running: '+old.url);process.exit(0)}catch{}
try{const res=await fetch('http://127.0.0.1:4317/api/health',{signal:AbortSignal.timeout(800)});if(res.ok){console.error('Port 4317 is already in use. Stop the existing server before running npm run online.');process.exit(1)}}catch{}
const serverLog=await open(path.join(runtime,'server.log'),'a',0o600),tunnelLog=await open(path.join(runtime,'tunnel.log'),'w',0o600);
const node=spawn(process.execPath,[path.join(root,'server.mjs')],{cwd:root,detached:true,stdio:['ignore',serverLog.fd,serverLog.fd],env:{...process.env,PORT:'4317',HOST:'0.0.0.0'}});node.unref();
let started=false;for(let i=0;i<40;i++){try{const r=await fetch('http://127.0.0.1:4317/api/health',{signal:AbortSignal.timeout(500)});if(r.ok){started=true;break}}catch{}await new Promise(r=>setTimeout(r,100))}
if(!started){try{process.kill(node.pid,'SIGTERM')}catch{}console.error('Node.js server could not start. Check .runtime/server.log.');process.exit(1)}
const tunnel=spawn(binary,['tunnel','--url','http://127.0.0.1:4317','--no-autoupdate'],{cwd:root,detached:true,stdio:['ignore',tunnelLog.fd,tunnelLog.fd]});tunnel.unref();
let url='';for(let i=0;i<160;i++){const log=await readFile(path.join(runtime,'tunnel.log'),'utf8');url=log.match(/https:\/\/[a-z0-9-]+\.trycloudflare\.com/)?.[0]||'';if(url)break;await new Promise(r=>setTimeout(r,250))}
await serverLog.close();await tunnelLog.close();
if(!url){try{process.kill(node.pid,'SIGTERM');process.kill(tunnel.pid,'SIGTERM')}catch{}console.error('Tunnel could not start. Check .runtime/tunnel.log.');process.exit(1)}
const result={url,serverPid:node.pid,tunnelPid:tunnel.pid,startedAt:new Date().toISOString()};await writeFile(path.join(runtime,'online.json'),JSON.stringify(result,null,2),{mode:0o600});console.log(JSON.stringify(result));console.log('Temporary online server. Keep this computer awake. Stop with: npm run online:stop');
