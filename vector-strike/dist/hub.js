export const hubStations=[{id:'bot-a',x:-21,z:-8},{id:'bot-b',x:-15,z:-8},{id:'bot-c',x:-9,z:-8},{id:'target-a',x:-21,z:-19,target:true},{id:'target-b',x:-15,z:-19,target:true},{id:'target-c',x:-9,z:-19,target:true}];
export const duelPads=[1,2,3].flatMap((size,i)=>[0,1].map(side=>({id:`duel-${size}-${side}`,size,x:10+side*9,z:9-i*11,radius:2.15})));
export function hubZone(position){if(position.y>.8)return null;if(Math.abs(position.x)<2.5&&position.z>23)return{type:'exit',id:'exit'};const pad=duelPads.find(p=>Math.hypot(position.x-p.x,position.z-p.z)<p.radius);return pad?{type:'duel',...pad}:null}
export function hubPadStep(state,zone,dt){const id=zone?.type==='duel'?zone.id:null;if(state.id!==id){const cancel=!!state.started;state.id=id;state.time=0;state.started=false;return{cancel,start:null}}if(!id)return{cancel:false,start:null};state.time+=Math.max(0,Math.min(.1,dt));if(state.time>=.65&&!state.started){state.started=true;return{cancel:false,start:zone.size}}return{cancel:false,start:null}}
export function buildHub(THREE,group,{box,cylinder,wallText,mat}){
 const solid=(x,y,z,w,h,d,c)=>box(group,x,y,z,w,h,d,c,{collision:true});
 solid(-15,1.4,-23,22,2.8,.45,0x50635a);for(const[a,b]of [[-26,-18],[-12,-4]])solid((a+b)/2,1.4,6,b-a,2.8,.45,0x50635a);for(const x of [-26,-4]){solid(x,1.4,-15,.4,2.8,16,0x50635a);if(x===-26)solid(x,1.4,0,.4,2.8,14,0x50635a)}
 for(const x of [-23.5,-17.5,-11.5,-6.5])box(group,x,.02,-10,.06,.025,27,0xb3cab6,{shadow:false});
 for(const pad of duelPads){const color=pad.id.endsWith('0')?0x67c9ee:0xffa575;const disk=cylinder(group,pad.x,.045,pad.z,pad.radius,pad.radius,.08,color,40);disk.name=pad.id;const ring=new THREE.Mesh(new THREE.TorusGeometry(pad.radius,.075,6,48),mat(color,.2,.3,color));ring.rotation.x=Math.PI/2;ring.position.set(pad.x,.13,pad.z);group.add(ring);wallText(pad.size+' VS '+pad.size,pad.x,1.1,pad.z-2.8,3.5,.85,'#eafee1');for(const dx of [-2.45,2.45])solid(pad.x+dx,.5,pad.z-2.8,.18,1,.18,0x658c82)}
 // Walk-through entrance and exit arches, with floor paint leading between zones.
 for(const[x,z,title,color]of [[0,24,'EXIT · LOBBY','#c5f587'],[-15,5.5,'PRACTICE · 3s RESPAWN','#a0e1c5'],[14.5,-19,'DUEL ATRIUM','#b5dff6']]){
  for(const side of [-1,1])solid(x+side*3.1,2,z,.25,4,.4,0x738d80);box(group,x,4,z,6.45,.25,.4,0xb5ce9b);wallText(title,x,3.35,z+.26,5.8,.75,color)
 }
 for(let z=-20;z<24;z+=3)box(group,1,.01,z,.12,.02,1.25,0xb9e68e,{shadow:false});
 wallText('VECTOR // ATRIUM',0,3,-23,9,1.3,'#def4c2');wallText('STEP ON A PAD TO MATCH',14.5,2.25,-19,8,.6,'#d0e8ea');
}
export function makeRangeTarget(THREE){
 const g=new THREE.Group(),materials=[];const material=color=>{const m=new THREE.MeshStandardMaterial({color,roughness:.75});m.userData.agentOwned=true;materials.push(m);return m};
 const backing=new THREE.Mesh(new THREE.BoxGeometry(1.4,1.5,.10),material(0xdfe2c8));backing.position.y=1.45;g.add(backing);
 for(const[r,color,z]of [[.62,0x344b43,.062],[.47,0xe3e6d0,.066],[.32,0x344b43,.07],[.17,0xf4a378,.074],[.06,0x182e24,.078]]){const disk=new THREE.Mesh(new THREE.CircleGeometry(r,40),material(color));disk.position.set(0,1.45,z);g.add(disk)}
 const stand=new THREE.Mesh(new THREE.BoxGeometry(.12,.75,.14),material(0x4b6258));stand.position.y=.38;g.add(stand);const base=new THREE.Mesh(new THREE.BoxGeometry(.9,.12,.5),material(0x4b6258));base.position.y=.06;g.add(base);
 g.userData={hitTime:0,shootTime:0,hitMaterials:materials.map(m=>({material:m,color:m.color.clone(),emissive:m.emissive.clone(),intensity:m.emissiveIntensity})),hitColor:new THREE.Color(0xff173d),hitEmissive:new THREE.Color(0xa50915)};g.traverse(o=>{if(o.isMesh)o.castShadow=true});return g;
}
