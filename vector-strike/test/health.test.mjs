import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';
import * as THREE from '../dist/vendor/three.module.js';
import {MAX_HEALTH} from '../dist/combat.js';
const source=await readFile(new URL('../dist/game.js',import.meta.url),'utf8');
function body(name){const a=source.indexOf('function '+name+'('),b=source.indexOf('\n',a);return source.slice(a,b)}
function fixture(){const elements=new Map(),ctx={clearRect(){},fillRect(){},fillText(){}};const c=vm.createContext({THREE,MAX_HEALTH,crypto,mode:'bots',wave:1,practice:{difficulty:'normal',invincible:false},player:{pos:new THREE.Vector3(0,0,19),health:MAX_HEALTH},rand:(a,b)=>a,validPosition:()=>true,makeAgent:()=>new THREE.Group(),worldGroup:new THREE.Group(),enemies:[],kills:0,score:0,totalTime:0,respawns:[],net:{players:new Map()},retireAgent(){},notice(){},setTimeout(){},formatTime:()=>'',clamp:(n,a,b)=>Math.max(a,Math.min(b,n)),document:{createElement(tag){return tag==='canvas'?{getContext:()=>ctx}:{innerHTML:''}}},$:(id)=>{if(!elements.has(id))elements.set(id,{style:{},prepend(){},textContent:''});return elements.get(id)}});new vm.Script(['spawnEnemy','updateTargetTag','updateHud','killEnemy'].map(body).join('\n')).runInContext(c);return{c,elements}}
test('AI bots, fixed targets, and late-wave enemies all spawn at 200 HP',()=>{
 assert.equal(MAX_HEALTH,200);const{c}=fixture();for(const mode of ['bots','training','waves','timed'])for(const wave of [1,20]){c.mode=mode;c.wave=wave;c.enemies=[];c.spawnEnemy(mode==='training');assert.equal(c.enemies[0].hp,200);assert.equal(c.enemies[0].maxHp,200)}
});
test('HUD scales the health bar against 200 rather than allowing overflow',()=>{
 const{c,elements}=fixture();for(const[health,width]of [[200,'100%'],[100,'50%'],[0,'0%']]){c.player.health=health;c.updateHud();assert.equal(elements.get('healthBar').style.width,width);assert.equal(elements.get('healthValue').textContent,health)}
});
test('elimination healing works above 100 and caps at 200',()=>{
 const{c}=fixture();for(const[before,after]of [[140,145],[199,200],[200,200]]){c.player.health=before;const enemy={mesh:new THREE.Group()};c.enemies=[enemy];c.killEnemy(enemy,false);assert.equal(c.player.health,after)}
});
