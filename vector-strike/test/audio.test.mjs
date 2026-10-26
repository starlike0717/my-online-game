import test from 'node:test';
import assert from 'node:assert/strict';
import {GameAudio} from '../dist/audio.js';

class Param{
 constructor(value=0){this.value=value;this.events=[]}
 event(kind,value,time,constant){assert.ok(Number.isFinite(value));assert.ok(Number.isFinite(time));this.value=value;this.events.push({kind,value,time,constant})}
 setValueAtTime(value,time){this.event('set',value,time)}
 exponentialRampToValueAtTime(value,time){assert.ok(value>0);this.event('exponential',value,time)}
 setTargetAtTime(value,time,constant){this.event('target',value,time,constant)}
}
class Node{
 constructor(context,kind){this.context=context;this.kind=kind;this.connections=[];this.disconnected=false;context.nodes.push(this)}
 connect(node){assert.ok(node);this.connections.push(node);return node}
 disconnect(){this.connections=[];this.disconnected=true}
}
class Source extends Node{
 constructor(context,kind){super(context,kind);this.frequency=new Param();context.sources.push(this)}
 start(time){assert.ok(time>=this.context.currentTime);this.startTime=time}
 stop(time){if(time!==undefined)assert.ok(Number.isFinite(time));this.stopTime=time}
 finish(){this.onended?.()}
}
class FakeContext{
 constructor(){this.state='running';this.currentTime=0;this.sampleRate=12000;this.nodes=[];this.sources=[];this.bufferCount=0;this.destination={};this.resumeCount=0}
 createGain(){const node=new Node(this,'gain');node.gain=new Param();return node}
 createDynamicsCompressor(){const node=new Node(this,'compressor');for(const key of ['threshold','knee','ratio','attack','release'])node[key]=new Param();return node}
 createOscillator(){return new Source(this,'oscillator')}
 createBufferSource(){return new Source(this,'bufferSource')}
 createBiquadFilter(){const node=new Node(this,'filter');node.frequency=new Param();node.Q=new Param();return node}
 createBuffer(channels,length,sampleRate){assert.equal(channels,1);this.bufferCount++;const samples=new Float32Array(length);return{sampleRate,length,getChannelData(){return samples}}}
 resume(){this.state='running';this.resumeCount++;return Promise.resolve()}
 close(){this.state='closed';return Promise.resolve()}
 finish(){for(const source of this.sources)source.finish()}
}
async function withAudio(callback){
 const previous=globalThis.AudioContext;let made=0;
 globalThis.AudioContext=class extends FakeContext{constructor(){super();made++}};
 const audio=new GameAudio();
 try{await callback(audio,()=>made)}finally{audio.dispose();if(previous===undefined)delete globalThis.AudioContext;else globalThis.AudioContext=previous}
}
function shotSignature(audio,weapon){
 const c=audio.context,start=c.nodes.length;audio.play('shot',weapon);
 const result=c.nodes.slice(start).filter(n=>n.kind==='oscillator'||n.kind==='filter').map(n=>[n.kind,n.type,n.frequency.events.map(e=>[e.kind,e.value])]);
 c.finish();return JSON.stringify(result);
}

test('audio waits for a gesture, reuses one context/noise buffer, and resumes suspended playback',async()=>{
 await withAudio(async(audio,made)=>{
  audio.play('shot',{cat:'ar'});audio.tick();assert.equal(made(),0);
  audio.unlock();const c=audio.context;assert.equal(made(),1);assert.equal(c.bufferCount,1);assert.ok(audio.timer);
  audio.unlock();assert.equal(made(),1);c.finish();
  for(let i=0;i<100;i++){audio.play('shot',{cat:'smg',id:i%5});audio.play('step');c.finish()}
  assert.equal(c.bufferCount,1,'automatic fire and footsteps should share the cached noise');
  c.state='suspended';audio.play('hit');const before=c.sources.length;
  audio.unlock();await Promise.resolve();assert.equal(c.resumeCount,1);assert.ok(c.sources.length>=before);
 });
});

test('effects and music volume stay independent, clamp input, and ESC pause mutes combat sound',async()=>{
 await withAudio(audio=>{
  audio.setLevels(70,20);audio.unlock();const c=audio.context;
  assert.equal(audio.effectBus.gain.value,.7);const menuMusic=audio.musicBus.gain.value;
  audio.setScene({active:true,map:2});assert.ok(audio.musicBus.gain.value>menuMusic);
  audio.setLevels(0,80);assert.equal(audio.effectBus.gain.value,0);assert.ok(audio.musicBus.gain.value>menuMusic);
  const muted=c.sources.length;audio.play('shot',{cat:'sr'});assert.equal(c.sources.length,muted);
  audio.setLevels(200,-5);assert.equal(audio.effectBus.gain.value,1);assert.equal(audio.musicBus.gain.value,0);
  audio.play('shot',{cat:'ar'});assert.ok(audio.voices.size>0);
  audio.setScene({paused:true});assert.equal(audio.effectBus.gain.value,0);assert.equal([...audio.voices].filter(v=>v.bus===audio.effectBus).length,0);
  const paused=c.sources.length;audio.play('dash');assert.equal(c.sources.length,paused);
  audio.setScene({paused:false});assert.equal(audio.effectBus.gain.value,1);
 });
});

test('firearm categories, bow, crossbow, launcher, and heavy melee have distinct layered reports',async()=>{
 await withAudio(audio=>{
  audio.setLevels(60,0);audio.unlock();
  const categories=['hg','ar','smg','sg','sr','lmg'];
  const signatures=categories.map(cat=>shotSignature(audio,{cat}));
  assert.equal(new Set(signatures).size,categories.length);
  const special=[{mechanic:'arrow'},{mechanic:'bolt',cat:'crossbow'},{mechanic:'rocket'},{mechanic:'melee',shape:'knife'},{mechanic:'melee',shape:'hammer'}].map(w=>shotSignature(audio,w));
  assert.equal(new Set(special).size,5);assert.ok(special.every(signature=>!signatures.includes(signature)));
  assert.notEqual(shotSignature(audio,{cat:'ar',id:0}),shotSignature(audio,{cat:'ar',id:3}),'variants should also differ slightly in receiver/body pitch');
 });
});

test('walk, sprint, slide, landing, jump, dash, and reload each have finite shaped sounds',async()=>{
 await withAudio(audio=>{
  audio.setLevels(60,0);audio.unlock();const c=audio.context,signatures=[];
  for(const kind of ['step','run','slide','land','jump','dash','reload','hit','kill','hurt','select']){
   const start=c.sources.length;audio.play(kind,{cat:'hg'});const sources=c.sources.slice(start);
   assert.ok(sources.length>=2,kind);assert.ok(sources.every(s=>s.stopTime>s.startTime&&s.stopTime-s.startTime<1),kind);
   signatures.push(sources.map(s=>[s.kind,s.frequency.events,s.stopTime-s.startTime]));
   c.finish();assert.equal(audio.voices.size,0);
   assert.ok(c.nodes.filter(n=>n.kind!=='compressor'&&n!==audio.musicBus&&n!==audio.effectBus).every(n=>n.disconnected));
  }
  assert.equal(new Set(signatures.map(s=>JSON.stringify(s))).size,signatures.length);
 });
});

test('the ambient scheduler adds tactical pulse only in combat and never bursts after tab suspension',async()=>{
 await withAudio(audio=>{
  audio.unlock();const c=audio.context,menuSources=c.sources.length;
  assert.equal(menuSources,6,'menu starts with three low pad voices and their quiet octave');c.finish();
  audio.setScene({active:true});audio.beat=0;audio.nextBeat=c.currentTime+.025;
  const start=c.sources.length;audio.tick();assert.ok(c.sources.length-start>menuSources,'combat adds bass and percussion under the pad');c.finish();
  c.currentTime=1000;const before=c.sources.length;audio.tick();
  assert.ok(c.sources.length-before<12,'stalled background scheduling must not catch up old beats');
  assert.ok(audio.nextBeat>c.currentTime);c.finish();
  audio.setLevels(60,0);c.currentTime+=10;const muted=c.sources.length;audio.tick();assert.equal(c.sources.length,muted);
 });
});

test('rapid events have a hard voice bound and disposed nodes disconnect',async()=>{
 await withAudio(audio=>{
  audio.setLevels(60,0);audio.unlock();const c=audio.context;
  for(let i=0;i<200;i++)audio.play('shot',{cat:'lmg'});
  assert.ok(audio.voices.size<=80);assert.ok(c.sources.length<=80);
  c.finish();assert.equal(audio.voices.size,0);
  audio.play('dash');audio.dispose();assert.equal(audio.timer,null);assert.equal(audio.context,null);assert.equal(c.state,'closed');assert.equal(audio.voices.size,0);
 });
});
