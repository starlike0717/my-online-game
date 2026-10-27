export const hubAreaInfo={
 atrium:{title:'VECTOR ATRIUM',ko:'3D 로비',hint:'초록 문: 봇 훈련장 · 빨간 문: 표적 사격장 · 오른쪽: 듀얼 패드'},
 bots:{title:'BOT TRAINING',ko:'봇 훈련장',hint:'색깔별 고정 봇 · 체력 100 · 처치 3초 후 같은 자리에서 부활'},
 targets:{title:'TARGET GALLERY',ko:'표적 사격장',hint:'높이와 거리가 다른 공중 표적 · 중앙 명중 보너스 · 3초 후 복원'}
};
export const hubGates=[{id:'bots',destination:'bots',x:-18,z:-21,width:6,color:0x6be6a3,title:'봇 훈련장'},{id:'targets',destination:'targets',x:-7,z:-21,width:6,color:0xff7568,title:'표적 사격장'}];
const colors=[0xe84948,0xf0c541,0x3e9fea,0xac62e5,0x68d682];
export const hubStations=[
 ...[7,-5,-17].flatMap((z,row)=>[-18,-9,0,9,18].map((x,col)=>({id:`bot-${row}-${col}`,area:'bots',x:x+(row===1?2:0),y:.16*(row+1),z,color:colors[(col+row)%colors.length],distance:18-z}))),
 ...[[-10,6,2],[10,6,1],[-17,-4,1],[0,-4,2.8],[17,-4,.6],[-18,-17,2.4],[-6,-17,1.2],[6,-17,3.4],[18,-17,1.8]].map(([x,z,y],i)=>({id:`target-${i}`,area:'targets',x,y,z,target:true,suspended:true,distance:18-z}))
];
export const stationsForArea=area=>hubStations.filter(s=>s.area===area);
export const duelPads=[1,2,3].flatMap((size,i)=>[0,1].map(side=>({id:`duel-${size}-${side}`,size,x:10+side*9,z:9-i*11,radius:2.15})));
export function hubSpawn(area='atrium',from=null){if(area==='atrium'&&hubGates.some(g=>g.id===from)){const g=hubGates.find(g=>g.id===from);return{x:g.x,y:0,z:-16,yaw:Math.PI}}return{x:0,y:0,z:18,yaw:0}}
export function hubZone(position,area='atrium'){
 if(position.y>1.4||position.y<-.5)return null;
 if(area!=='atrium')return Math.abs(position.x)<2.8&&position.z>22&&position.z<26.6?{type:'travel',id:'return-atrium',destination:'atrium'}:null;
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
  // Bright enclosed galleries, colored distance lanes, and a walk-through return arch.
  solid(0,4,-26,52,8,.45,0xc4d5d8);for(const x of [-26,26])solid(x,4,0,.45,8,52,0xaec5cf);box(group,0,8.1,0,52,.2,52,0xd3e1df);
  for(let x=-24;x<=24;x+=4)for(const y of [1,3,5,7])box(group,x,y,-25.74,.09,.09,.04,0x718c98,{shadow:false});
  arch(0,24,'로비로 돌아가기',0x6bdbc0);paint(0,14,49,.16,0xf3c54e);wallText(area==='bots'?'BOT TRAINING':'TARGET GALLERY',0,6.3,-25.7,20,1.3,'#294a57');
  for(const[z,c]of [[8,0xf0b437],[-4,0x69ad71],[-16,0x6095c7]]){paint(0,z,50,9,c);wallText(Math.round(18-z)+' m',-24.5,1.2,z,2.4,.7,'#f2fff4',Math.PI/2)}
  for(let x=-24;x<=24;x+=6)paint(x,-4,.045,48,0xdceadd);
  if(area==='bots'){
   [7,-5,-17].forEach((z,row)=>{solid(0,.08*(row+1),z,47,.16*(row+1),4,colors[(row+1)%colors.length]);for(const x of [-23,23])box(group,x,.3+row*.16,z,.12,.5,4,0x334c54)});
   wallText('100 HP  /  3s RESPAWN',0,4.8,-25.7,15,.8,'#365b64');
  }else{
   for(const z of [6,-4,-17]){solid(0,7.5,z,51,.13,.13,0x34454e);for(const x of [-25,25])solid(x,3.7,z,.12,7.5,.12,0x34454e)}
   for(const s of stationsForArea('targets')){const top=s.y+2.14,wire=box(group,s.x,(7.5+top)/2,s.z,.035,7.5-top,.035,0x2c414c);wire.name='target-suspension'}
   wallText('BULLSEYE  /  3s RESET',0,4.8,-25.7,15,.8,'#365b64');
  }
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
