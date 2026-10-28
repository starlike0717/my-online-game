export const hubAreaInfo={
 atrium:{title:'VECTOR ATRIUM',ko:'3D 로비',hint:'왼쪽 훈련장 문 · 오른쪽 듀얼 패드'},
 practice:{title:'TRAINING HANGAR',ko:'통합 연습장',hint:'봇과 공중 표적 · 트램펄린으로 2층 이동 · 표적은 한 번 적중 시 파괴 · 3초 후 부활'}
};
export const hubGates=[{id:'practice',destination:'practice',x:-15,z:-21,width:8,color:0x6be6a3,title:'통합 연습장'}];
const colors=[0xe84948,0xf0c541,0x3e9fea,0xac62e5,0x68d682];
export const hubStations=[
 ...[20,-10,-45,-68].flatMap((z,row)=>[-54,-27,0,27,54].map((x,col)=>({id:`bot-${row}-${col}`,area:'practice',x,y:0,z,color:colors[(col+row)%5],distance:65-z}))),
 ...[-55,-25,12].flatMap((z,row)=>[-48,48].map((x,col)=>({id:`upper-bot-${row}-${col}`,area:'practice',x,y:8.4,z,color:colors[(col+row)%5],distance:65-z}))),
 ...[[-12,40,.2],[12,40,.2],[-18,4,2],[18,4,3],[0,-25,4],[-15,-60,1],[15,-60,6],[-60,-10,10],[60,-10,11],[-40,-62,9],[40,-62,9],[-48,25,8.6],[48,25,8.6]].map(([x,z,y],i)=>({id:`target-${i}`,area:'practice',x,y,z,target:true,suspended:true,distance:65-z}))
];
export const stationsForArea=area=>hubStations.filter(s=>s.area===area);
export const duelPads=[1,2,3].flatMap((size,i)=>[0,1].map(side=>({id:`duel-${size}-${side}`,size,x:10+side*9,z:9-i*11,radius:2.15})));
export function hubSpawn(area='atrium',from=null){if(area==='atrium'&&hubGates.some(g=>g.id===from)){const g=hubGates.find(g=>g.id===from);return{x:g.x,y:0,z:-16,yaw:Math.PI}}return{x:0,y:0,z:area==='practice'?65:18,yaw:0}}
export function hubZone(position,area='atrium'){
 if(position.y>1.4||position.y<-.5)return null;
 if(area!=='atrium')return Math.abs(position.x)<2.8&&position.z>79&&position.z<86?{type:'travel',id:'return-atrium',destination:'atrium'}:null;
 if(Math.abs(position.x)<2.5&&position.z>23)return{type:'exit',id:'exit'};
 const gate=hubGates.find(g=>Math.abs(position.x-g.x)<g.width/2-.3&&Math.abs(position.z-g.z)<1.35);if(gate)return{type:'travel',...gate};
 const pad=duelPads.find(p=>Math.hypot(position.x-p.x,position.z-p.z)<p.radius);return pad?{type:'duel',...pad}:null;
}
export function hubPadStep(state,zone,dt){const id=zone?.type==='duel'?zone.id:null;if(state.id!==id){const cancel=!!state.started;state.id=id;state.time=0;state.started=false;return{cancel,start:null}}if(!id)return{cancel:false,start:null};state.time+=Math.max(0,Math.min(.1,dt));if(state.time>=.65&&!state.started){state.started=true;return{cancel:false,start:zone.size}}return{cancel:false,start:null}}
export function buildHub(THREE,group,{box,cylinder,wallText,mat},area='atrium'){
 const solid=(x,y,z,w,h,d,c)=>box(group,x,y,z,w,h,d,c,{collision:true}),paint=(x,z,w,d,c)=>box(group,x,.025,z,w,.025,d,c,{shadow:false});
 function arch(x,z,title,color,width=6){for(const side of [-1,1])solid(x+side*(width/2+.15),2,z,.3,4,.5,0x4d6565);box(group,x,4,z,width+.6,.3,.5,color,{emissive:color});paint(x,z,width,2,color);for(const[side,rot]of [[1,0],[-1,Math.PI]])wallText(title,x,3.28,z+side*.3,width,.72,'#f1fff0',rot)}
 // Each doorway leaves the full middle clear for walking; only the posts collide.
 if(area==='atrium'){
  for(const gate of hubGates){arch(gate.x,gate.z,gate.title,gate.color);wallText(gate.id==='bots'?'BOT RANGE':'TARGET RANGE',gate.x,2.58,gate.z+.32,4,.48,'#d9e9df');for(let z=-17;z<12;z+=3)paint(gate.x,z,.25,1.3,gate.color)}
  solid(-26,2.5,-21,.5,5,12,0x607a71);solid(-23.5,2.5,-21,2,5,.4,0x607a71);solid(-12.5,2.5,-21,4,5,.4,0x607a71);solid(-1.5,2.5,-21,4,5,.4,0x607a71);
  for(const pad of duelPads){const color=pad.id.endsWith('0')?0x67c9ee:0xffa575;const disk=cylinder(group,pad.x,.045,pad.z,pad.radius,pad.radius,.08,color,40);disk.name=pad.id;const ring=new THREE.Mesh(new THREE.TorusGeometry(pad.radius,.075,6,48),mat(color,.2,.3,color));ring.rotation.x=Math.PI/2;ring.position.set(pad.x,.13,pad.z);group.add(ring);wallText(pad.size+' VS '+pad.size,pad.x,1.1,pad.z-2.8,3.5,.85,'#eafee1')}
  arch(0,24,'메인 로비',0xb5ce9b);wallText('VECTOR // ATRIUM',0,5.5,-25.9,13,1.2,'#def4c2');wallText('DUEL PADS',14.5,3,-20,8,.7,'#b7e3f1');
 }else{
  // A spacious hangar: the center is open to both floors and every target floats freely.
  solid(0,-.25,0,144,.5,176,0x90a6a5);
  for(const x of [-72,72])solid(x,9,0,.5,18,176,0x72969e);
  for(const z of [-88,88])solid(0,9,z,144,18,.5,0xadc9c6);
  for(const x of [-42,42]){
   solid(x,8.15,-15,36,.5,120,0xd6cda9);
   for(const z of [-65,-25,15,43])for(const edge of [-16,16])solid(x+edge,4,z,.5,8,.5,0x4c6368);
   for(const z of [-73,43])solid(x,9,z,36,1.1,.15,0x85adb0);
  }
  solid(0,8.15,-70,50,.5,10,0xd6cda9);
  for(let z=-80;z<70;z+=10)paint(0,z,142,.06,0xc0d2c3);
  for(let x=-65;x<=65;x+=10)paint(x,0,.06,170,0xc0d2c3);
  for(const [z,c] of [[20,0xe8bc48],[-10,0x64ad83],[-45,0x598fb9],[-68,0xb08cbe]]){paint(0,z,140,4,c);wallText((65-z)+' m',-70,2,z,4,1,'#eaf4ec',Math.PI/2)}
  for(const x of [-42,42]){const pad=cylinder(group,x,.12,50,2.8,2.8,.24,0x345a66,36);pad.name='practice-trampoline';const ring=new THREE.Mesh(new THREE.TorusGeometry(2.5,.12,8,48),mat(0x96ffe1,.2,.2,0x58d5bb));ring.rotation.x=Math.PI/2;ring.position.set(x,.28,50);group.add(ring);wallText('↑ 2F',x,2.2,53,4,1,'#c3ffdf')}
  arch(0,83,'로비로 돌아가기',0x6bdbc0,8);
  wallText('TRAINING HANGAR',0,14,-87.6,38,2,'#294a57');
  wallText('BOTS + FLOATING TARGETS / 2 FLOORS',0,11,-87.6,32,1,'#365b64');
 }

 return{area,stations:stationsForArea(area)};
}
export function makeRangeTarget(THREE,{suspended=false}={}){
 const g=new THREE.Group(),materials=[];const material=color=>{const m=new THREE.MeshStandardMaterial({color,roughness:.75,side:THREE.DoubleSide});m.userData.agentOwned=true;materials.push(m);return m};
 if(suspended){const backing=new THREE.Mesh(new THREE.CylinderGeometry(.68,.68,.12,48),material(0x9e383e));backing.rotation.x=Math.PI/2;backing.position.y=1.45;g.add(backing)}else{const backing=new THREE.Mesh(new THREE.BoxGeometry(1.4,1.5,.10),material(0xdfe2c8));backing.position.y=1.45;g.add(backing)}
 const rings=suspended?[[.63,0xf3efdc],[.49,0xd9414b],[.35,0xf3efdc],[.20,0xd9414b],[.065,0x7b2331]]:[[.62,0x344b43],[.47,0xe3e6d0],[.32,0x344b43],[.17,0xf4a378],[.06,0x182e24]];
 rings.forEach(([r,color],i)=>{for(const side of [1,-1]){const disk=new THREE.Mesh(new THREE.CircleGeometry(r,40),material(color));disk.position.set(0,1.45,side*(.066+i*.005));if(side<0)disk.rotation.y=Math.PI;g.add(disk)}});
 if(!suspended){const stand=new THREE.Mesh(new THREE.BoxGeometry(.12,.75,.14),material(0x4b6258));stand.position.y=.38;g.add(stand);const base=new THREE.Mesh(new THREE.BoxGeometry(.9,.12,.5),material(0x4b6258));base.position.y=.06;g.add(base)}
 g.userData={hitTime:0,shootTime:0,targetShape:suspended?'round':'board',hitMaterials:materials.map(m=>({material:m,color:m.color.clone(),emissive:m.emissive.clone(),intensity:m.emissiveIntensity})),hitColor:new THREE.Color(0xff173d),hitEmissive:new THREE.Color(0xa50915)};g.traverse(o=>{if(o.isMesh)o.castShadow=true});return g;
}
