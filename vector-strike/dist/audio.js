// Original, locally synthesized sound: subdued tactical ambience and layered weapon Foley.
// One reusable noise buffer and bounded voices keep automatic fire inexpensive.
const clamp=(value,min,max)=>Math.max(min,Math.min(max,Number.isFinite(+value)?+value:min));
const SHOTS={
 hg:{body:125,tail:.13,gain:.22,crack:4700,metal:1760},
 ar:{body:94,tail:.2,gain:.26,crack:5900,metal:2250},
 smg:{body:155,tail:.105,gain:.17,crack:3800,metal:2600},
 sg:{body:58,tail:.34,gain:.34,crack:3200,metal:1120},
 sr:{body:46,tail:.48,gain:.36,crack:7000,metal:1520},
 lmg:{body:73,tail:.27,gain:.29,crack:4500,metal:1920}
};
export class GameAudio{
 constructor(){
  this.context=null;this.musicBus=null;this.effectBus=null;this.timer=null;
  this.volume=.6;this.music=.25;this.scene={active:false,paused:false,map:0};
  this.voices=new Set();this.noiseBuffer=null;this.beat=0;this.nextBeat=0;this.stepSide=0;
 }
 unlock(){
  if(!this.context){
   const C=globalThis.AudioContext||globalThis.webkitAudioContext;if(!C)return;
   this.context=new C();const c=this.context;
   this.effectBus=c.createGain();this.musicBus=c.createGain();
   this.limiter=c.createDynamicsCompressor();
   this.limiter.threshold.value=-8;this.limiter.knee.value=12;this.limiter.ratio.value=6;
   this.limiter.attack.value=.003;this.limiter.release.value=.14;
   this.effectBus.connect(this.limiter);this.musicBus.connect(this.limiter);this.limiter.connect(c.destination);
   this.noiseBuffer=c.createBuffer(1,Math.ceil(c.sampleRate*2),c.sampleRate);
   const data=this.noiseBuffer.getChannelData(0);for(let i=0;i<data.length;i++)data[i]=Math.random()*2-1;
   this.nextBeat=c.currentTime+.025;this.setLevels(this.volume*100,this.music*100);
   this.timer=setInterval(()=>this.tick(),100);
  }
  const c=this.context;
  if(c.state==='suspended')c.resume().then(()=>{this.nextBeat=c.currentTime+.025;this.tick()}).catch(()=>{});
  else this.tick();
 }
 setLevels(effects,music){
  this.volume=clamp(effects,0,100)/100;this.music=clamp(music,0,100)/100;this.updateLevels();
 }
 setScene({active=this.scene.active,paused=this.scene.paused,map=this.scene.map}={}){
  const wasPaused=this.scene.paused;
  this.scene={active:!!active,paused:!!paused,map};this.updateLevels();
  if(!wasPaused&&this.scene.paused){for(const voice of [...this.voices])if(voice.bus===this.effectBus)voice.stop()}
 }
 updateLevels(){
  const c=this.context;if(!c)return;
  this.effectBus.gain.setTargetAtTime(this.scene.paused?0:this.volume,c.currentTime,.035);
  // Ambience stays behind footsteps; menus and the pause screen use a slower, quieter bed.
  const mix=this.scene.paused?.11:this.scene.active?.34:.19;
  this.musicBus.gain.setTargetAtTime(this.music*mix,c.currentTime,.35);
 }
 voice(source,nodes,bus,at,duration){
  if(this.voices.size>=80){source.disconnect();for(const n of nodes)n.disconnect();return false}
  const voice={bus,stop:()=>{try{source.stop()}catch{}source.onended?.()}};
  let ended=false;source.onended=()=>{if(ended)return;ended=true;source.disconnect();for(const n of nodes)n.disconnect();this.voices.delete(voice)};
  this.voices.add(voice);source.start(at);source.stop(at+duration+.025);return true;
 }
 tone(frequency,duration,gain,bus,type='sine',delay=0,options={}){
  const c=this.context;if(!c||this.voices.size>=80)return;
  const at=c.currentTime+Math.max(0,delay),o=c.createOscillator(),g=c.createGain();
  o.type=type;o.frequency.setValueAtTime(Math.max(20,frequency),at);
  if(options.endFrequency)o.frequency.exponentialRampToValueAtTime(Math.max(20,options.endFrequency),at+duration);
  g.gain.setValueAtTime(.0001,at);
  const attack=Math.min(duration*.4,options.attack??.003);
  g.gain.exponentialRampToValueAtTime(Math.max(.0002,gain),at+Math.max(.001,attack));
  if(options.sustain)g.gain.setValueAtTime(Math.max(.0002,gain*.8),at+duration*.65);
  g.gain.exponentialRampToValueAtTime(.0001,at+duration);
  const nodes=[g];o.connect(g);
  if(options.cutoff){const filter=c.createBiquadFilter();filter.type='lowpass';filter.frequency.value=options.cutoff;g.connect(filter);filter.connect(bus);nodes.push(filter)}else g.connect(bus);
  this.voice(o,nodes,bus,at,duration);
 }
 noise(duration,gain,cutoff,options={}){
  const c=this.context;if(!c||!this.noiseBuffer||this.voices.size>=80)return;
  const at=c.currentTime+Math.max(0,options.delay||0),s=c.createBufferSource(),g=c.createGain(),filter=c.createBiquadFilter();
  s.buffer=this.noiseBuffer;filter.type=options.type||'lowpass';filter.frequency.setValueAtTime(cutoff,at);
  filter.Q.value=options.q??.6;if(options.endCutoff)filter.frequency.exponentialRampToValueAtTime(options.endCutoff,at+duration);
  g.gain.setValueAtTime(.0001,at);g.gain.exponentialRampToValueAtTime(Math.max(.0002,gain),at+Math.min(duration*.3,options.attack??.003));g.gain.exponentialRampToValueAtTime(.0001,at+duration);
  s.connect(filter);filter.connect(g);const bus=options.bus||this.effectBus;g.connect(bus);
  this.voice(s,[filter,g],bus,at,duration);
 }
 play(kind,w={}){
  if(!this.context||this.context.state!=='running'||this.scene.paused||this.volume<=0)return;
  const b=this.effectBus,variation=((w.id||0)%5-2)*.025;
  if(kind==='step'||kind==='run'){
   const run=kind==='run',side=(this.stepSide++%2?1:-1);
   this.tone((run?78:91)+side*5,.095,run?.15:.085,b,'sine',0,{endFrequency:44});
   this.noise(run?.13:.095,run?.105:.065,run?1650:1250,{endCutoff:420});
   this.noise(.04,run?.045:.025,2700,{delay:.045,type:'bandpass'});return;
  }
  if(kind==='slide'){
   this.noise(.58,.19,2400,{attack:.025,endCutoff:520});
   this.tone(105,.2,.085,b,'sine',0,{endFrequency:38});this.noise(.06,.08,900);return;
  }
  if(kind==='land'){
   this.tone(88,.18,.21,b,'sine',0,{endFrequency:33});this.noise(.23,.2,1650,{endCutoff:350});
   this.noise(.065,.05,2300,{delay:.1,type:'bandpass'});return;
  }
  if(kind==='jump'){
   this.noise(.15,.09,1600,{endCutoff:700});this.tone(90,.1,.045,b,'sine',0,{endFrequency:140});return;
  }
  if(kind==='dash'){
   this.noise(.3,.2,2200,{type:'bandpass',attack:.05,endCutoff:520});
   this.tone(160,.21,.1,b,'triangle',0,{endFrequency:48});this.noise(.065,.08,3300);return;
  }
  if(kind==='shot'){
   if(w.mechanic==='melee'){
    const heavy=['axe','hammer','halberd','scythe'].includes(w.shape);
    this.noise(heavy?.25:.14,heavy?.2:.12,heavy?1600:3200,{type:'bandpass',attack:.025,endCutoff:600});
    this.tone(heavy?105:210,.09,.025,b,'triangle',.025,{endFrequency:60});return;
   }
   if(w.mechanic==='arrow'||w.mechanic==='bolt'||w.crossbow||w.cat==='crossbow'){
    const bolt=w.mechanic==='bolt'||w.crossbow||w.cat==='crossbow';
    this.tone(bolt?205:155,bolt?.15:.22,bolt?.13:.095,b,'triangle',0,{endFrequency:bolt?82:58,cutoff:1700});
    this.noise(.09,bolt?.12:.065,bolt?2900:1600,{type:'bandpass',endCutoff:700});
    this.tone(bolt?1450:880,.04,.025,b,'sine',.018);return;
   }
   if(w.mechanic==='rocket'){
    this.tone(65,.42,.31,b,'sine',0,{endFrequency:25});this.noise(.65,.25,900,{attack:.035,endCutoff:220});
    this.noise(.075,.18,3300);return;
   }
   const p=SHOTS[w.cat]||SHOTS.ar,tune=1+variation;
   // A sharp filtered report, falling low body, then a brief action/receiver click.
   this.noise(.035,p.gain*.72,p.crack*tune,{type:'highpass'});
   this.noise(p.tail,p.gain*.58,1400*tune,{endCutoff:240});
   this.tone(p.body*tune,p.tail,p.gain*.72,b,'triangle',0,{endFrequency:Math.max(25,p.body*.38),cutoff:850});
   this.tone(p.metal*tune,.025,.023,b,'sine',.035);
   this.noise(.045,.035,2400,{delay:Math.min(.12,p.tail*.5),type:'bandpass'});return;
  }
  if(kind==='reload'){
   const bolt=w.mechanic==='bolt'||w.crossbow;
   this.noise(.055,.085,1300,{type:'bandpass'});
   this.tone(bolt?245:320,.028,.045,b,'triangle');
   this.noise(.065,.09,2300,{delay:.095,type:'bandpass'});
   this.tone(bolt?540:780,.035,.038,b,'sine',.125);return;
  }
  if(kind==='hit'||kind==='kill'){
   // Restrained confirmation: a dry hit tick and low two-tone elimination cue.
   this.noise(.035,.065,2000,{type:'bandpass'});this.tone(950,.035,.035,b,'sine');
   if(kind==='kill'){this.tone(330,.11,.055,b,'triangle',.025);this.tone(440,.16,.045,b,'sine',.08)}return;
  }
  if(kind==='hurt'){
   this.noise(.15,.15,700,{endCutoff:240});this.tone(65,.18,.16,b,'sine',0,{endFrequency:29});return;
  }
  if(kind==='select'){this.noise(.027,.035,2400,{type:'bandpass'});this.tone(660,.035,.02,b,'sine')}
 }
 tick(){
  const c=this.context;if(!c)return;
  if(c.state!=='running'){this.nextBeat=c.currentTime+.025;return}
  // Never catch up suspended/background audio with a burst of stale notes.
  if(this.nextBeat<c.currentTime-.2)this.nextBeat=c.currentTime+.025;
  const step=60/84/2,combat=this.scene.active&&!this.scene.paused;
  let scheduled=0;
  while(this.nextBeat<c.currentTime+.14&&scheduled++<2){
   const n=this.beat++,delay=Math.max(0,this.nextBeat-c.currentTime),bar=Math.floor(n/16);
   if(this.music>0){
    const map=Number.isFinite(+this.scene.map)?Math.abs(+this.scene.map)%4:0;
    const root=[73.416,65.406,82.407,61.735][map],chord=bar%4===3?[1,1.4983,2.2449]:[1,1.1892,1.4983];
    if(n%16===0)for(const ratio of chord){
     this.tone(root*ratio,6.1,.043,this.musicBus,'triangle',delay,{attack:1.1,sustain:true,cutoff:500});
     this.tone(root*ratio*2,5.7,.015,this.musicBus,'sine',delay,{attack:1.3,sustain:true});
    }
    if(combat){
     if([0,6,8,14].includes(n%16))this.tone(root/2,.28,n%8===0?.18:.11,this.musicBus,'sine',delay,{endFrequency:root/2*.93});
     if(n%4===0)this.tone(68,.14,.12,this.musicBus,'sine',delay,{endFrequency:31});
     if(n%4===2)this.noise(.045,.022,4100,{bus:this.musicBus,delay,type:'highpass'});
     if(n%8===4)this.noise(.09,.028,1400,{bus:this.musicBus,delay,type:'bandpass'});
    }
   }
   this.nextBeat+=step;
  }
 }
 dispose(){
  if(this.timer!==null)clearInterval(this.timer);this.timer=null;
  for(const voice of [...this.voices])voice.stop();
  this.effectBus?.disconnect();this.musicBus?.disconnect();this.limiter?.disconnect();
  this.context?.close().catch(()=>{});this.context=null;this.noiseBuffer=null;
 }
}
