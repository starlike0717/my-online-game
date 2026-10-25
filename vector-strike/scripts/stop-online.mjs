import { readFile,rm } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root=path.dirname(path.dirname(fileURLToPath(import.meta.url))),file=path.join(root,'.runtime/online.json');
let config;try{config=JSON.parse(await readFile(file,'utf8'))}catch{console.log('No managed online server is running.');process.exit(0)}
for(const[pid,match]of [[config.serverPid,path.join(root,'server.mjs')],[config.tunnelPid,'cloudflared tunnel --url http://127.0.0.1:4317']]){try{const command=execFileSync('ps',['-p',String(pid),'-o','args='],{encoding:'utf8'}).trim();if(command.includes(match))process.kill(pid,'SIGTERM')}catch{}}
await rm(file,{force:true});console.log('VECTOR online server stopped.');
