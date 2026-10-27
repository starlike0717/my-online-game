// One obstacle source feeds visible meshes, local movement and server hit tests.
// Numeric map indices remain stable for saved preferences and online rooms.
export const maps=[
 {id:'construction',name:'HIGHRISE',ko:'건설 현장',desc:'빽빽한 골조와 자재 사이 근접 교전',tag:'DENSE CONSTRUCTION',coords:'SECTOR 01 / UNFINISHED HIGHRISE',sky:0xb8c3c7,fog:0xc4c5b8,ground:0x8b8b7c,wall:0xaaa99b,accent:0xf1b647,light:0xffe6bc,sun:2.5},
 {id:'battlefield',name:'NO MAN’S LAND',ko:'전장',desc:'참호와 무너진 폐허를 오가는 전투',tag:'TRENCH WARFARE',coords:'SECTOR 02 / ABANDONED FRONT',sky:0x626d71,fog:0x7b817c,ground:0x656052,wall:0x77776c,accent:0xb4c49a,light:0xe2dbbd,sun:1.9},
 {id:'bridge',name:'SKYBRIDGE',ko:'협곡 대교',desc:'협곡 위 교량의 길고 열린 사격선',tag:'LONG SIGHTLINES',coords:'SECTOR 03 / CANYON CROSSING',sky:0x8cbed7,fog:0xb1c9d5,ground:0x656f75,wall:0x526977,accent:0xeda966,light:0xe8f6ff,sun:2.4},
 {id:'open',name:'OPEN RANGE',ko:'빈 훈련장',desc:'장애물이 전혀 없는 평평한 훈련장',tag:'ZERO INTERNAL OBSTACLES',coords:'SECTOR 04 / CLEAR PRACTICE FLOOR',sky:0xc0d5df,fog:0xd3e0e3,ground:0xb8c3c1,wall:0x738e91,accent:0x5fe1d4,light:0xf4fcff,sun:2.0},
 {id:'citadel',name:'HIGH CITADEL',ko:'고지 요새',desc:'층층이 오르는 성벽과 저격용 전망대',tag:'VERTICAL FORTRESS',coords:'SECTOR 05 / CITADEL RIDGE',sky:0xbac4b9,fog:0xc0c5b3,ground:0x777b68,wall:0x9b9a7e,accent:0xd7b467,light:0xf8dfb4,sun:2.2},
 {id:'skyline',name:'SKYLINE',ko:'스카이라인 옥상',desc:'고층 건물 사이 옥상 다리와 점프 루트',tag:'ROOFTOP RUN',coords:'SECTOR 06 / SKYLINE DISTRICT',sky:0x99b5c5,fog:0xb2c0bd,ground:0x58616b,wall:0x77818a,accent:0x67d8d2,light:0xf0e5ca,sun:2.3},
 {id:'mesa',name:'RED MESA',ko:'붉은 협곡',desc:'절벽 위 테라스와 굽은 협곡길',tag:'CANYON HIGH GROUND',coords:'SECTOR 07 / RED MESA',sky:0xd2a879,fog:0xb99375,ground:0x88745b,wall:0xa97853,accent:0xf0b562,light:0xffd8a0,sun:2.5},
 {id:'foundry',name:'IRON FOUNDRY',ko:'철강 제련소',desc:'용광로 위 캣워크와 컨베이어 고지',tag:'INDUSTRIAL CATWALKS',coords:'SECTOR 08 / IRON FOUNDRY',sky:0x696d6b,fog:0x76786e,ground:0x454a48,wall:0x68716c,accent:0xe98c48,light:0xf1c497,sun:2.0},
 {id:'canopy',name:'GREEN CANOPY',ko:'수목 상층부',desc:'나무 꼭대기를 잇는 좁은 다리와 전망대',tag:'CANOPY CROSSING',coords:'SECTOR 09 / GREEN CANOPY',sky:0x9ec0ae,fog:0xaec1a7,ground:0x526a54,wall:0x61755a,accent:0xd1e886,light:0xffe4b7,sun:2.4},
 {id:'spring',name:'SPRING YARD',ko:'스프링 시험장',desc:'점프 패드로 고지대에 오르는 운동장',tag:'TRAMPOLINE COMBAT',coords:'SECTOR 10 / SPRING TEST YARD',sky:0xa9cbd1,fog:0xb7cbca,ground:0x667c79,wall:0x657b75,accent:0x72f0dc,light:0xe7ffed,sun:2.2}
];

const layouts=maps.map(()=>[]);
function solid(map,x,z,w,d,h,color,y=h/2,name='cover'){
 layouts[map].push({x,y,z,w,h,d,color,name});
}
for(let index=0;index<maps.length;index++){
 const height=index===2?1.15:index===3?1.2:3.8;
 for(const z of [-27.7,27.7])solid(index,0,z,56,.6,height,maps[index].wall,height/2,'boundary');
 for(const x of [-27.7,27.7])solid(index,x,0,.6,54.8,height,maps[index].wall,height/2,'boundary');
}

// Two skeletal buildings and a third work deck create many short routes and
// readable gaps instead of repeating the old four solid warehouse footprints.
function scaffold(map,x,z,width,depth,height){
 const concrete=0xa9a99d,steel=0x6b756d;
 for(const sideX of [-1,1])for(const sideZ of [-1,1])solid(map,x+sideX*width/2,z+sideZ*depth/2,.65,.65,height,concrete,height/2,'concrete-column');
 for(const y of [height*.5,height-.22]){
  for(const side of [-1,1])solid(map,x,z+side*depth/2,width+.6,.42,.42,steel,y,'scaffold-crossbeam');
  for(const side of [-1,1])solid(map,x+side*width/2,z,.42,depth,.42,steel,y,'scaffold-crossbeam');
 }
}
scaffold(0,-15,-13,7,7,8.4);scaffold(0,15,-13,7,7,10);scaffold(0,6,-6,6,4.5,5.6);
solid(0,-15,-16.5,6,.42,2.1,0xb0afa1,1.05,'unfinished-wall');
solid(0,18.5,-13,.42,6,2.8,0xa4a698,1.4,'unfinished-wall');
solid(0,8,4,5,3,2.6,0xc4914a,1.3,'cargo-container');
for(const [x,z,w,d,h]of [[-10,1,3,2,1.8],[-2,-8,3,3,1.45],[4,-17,3,3,1.9],[19,11,4,3,1.6],[-18,17,3,3,1.4],[-7,-20,2.5,3.5,1.1],[22,5,2.8,4,2.8],[17,-22,2.5,2,1.3]])solid(0,x,z,w,d,h,0x8b8063,h/2,'stacked-materials');
solid(0,-7,5,4,3,1.2,0xa9a89a,.6,'work-platform');
for(let n=0;n<3;n++)solid(0,-7,8.55-n*.65,4,.65,.3*(n+1),0x9a9e8d,.15*(n+1),'platform-step');
for(const [x,z]of [[-22,-7],[-20,4],[12,14],[4,11],[-4,-2]])solid(0,x,z,2.7,.7,1,0xb7aaa0,.5,'safety-barrier');

// High-ground arenas combine raised platforms with shallow, traversable stairs.
function raised(map,x,z,w,d,top,color){solid(map,x,z,w,d,.6,color,top-.3,'raised-platform');for(const sx of [-1,1])for(const sz of [-1,1])solid(map,x+sx*(w/2-.3),z+sz*(d/2-.3),.45,.45,top,color,top/2,'platform-pillar');for(let i=0;i<Math.round(top/.28);i++){const h=Math.min(.28,top-i*.28),y=i*.28+h/2;solid(map,x-w/2-1.1,z+d/2+.8+i*.55,2.2,.55,h,color,y,'climb-stair')}}
raised(4,-15,-13,11,9,3.1,0x8c9179);raised(4,13,-9,10,10,4.5,0x777d6c);raised(4,0,13,9,8,2.5,0x8d896f);
for(const [x,z]of [[-21,-2],[-8,-4],[7,3],[20,10]])solid(4,x,z,2.6,2.5,1.8,0x7b806e,.9,'citadel-barricade');
raised(5,-16,-12,10,9,3.2,0x596974);raised(5,0,3,9,8,4.2,0x56616c);raised(5,16,-12,10,9,3.2,0x596974);raised(5,0,19,8,7,2.6,0x535f68);
for(const[x,z]of [[-22,3],[-8,-21],[8,15],[22,2]])solid(5,x,z,3,2,2.2,0x46515b,1.1,'roof-vent');
raised(6,-17,-14,12,11,4.4,0x9e684b);raised(6,14,-12,13,12,3.4,0x996448);raised(6,-2,10,10,9,2.8,0xa27250);
for(const[x,z]of [[-21,5],[-10,0],[8,-1],[21,8]])solid(6,x,z,3,1.2,2.4,0x80644e,1.2,'mesa-wall');
raised(7,-15,-11,11,9,3.8,0x59635e);raised(7,13,-12,11,10,4.8,0x515b57);raised(7,0,13,13,8,3.1,0x5a625c);
for(const[x,z]of [[-21,3],[0,-2],[21,2]])solid(7,x,z,1.1,1.1,5.2,0x7b5e4b,2.6,'foundry-stack');
raised(8,-16,-11,11,9,3.7,0x657951);raised(8,14,-12,12,10,4.5,0x5c734e);raised(8,0,13,10,8,2.8,0x6c7b55);
for(const[x,z]of [[-22,5],[-8,-4],[9,2],[22,4]])solid(8,x,z,1.1,1.1,7,0x574e3d,3.5,'tree-trunk');
raised(9,-16,-13,10,9,3.8,0x4e6a69);raised(9,14,-12,10,10,4.8,0x4f6966);raised(9,0,13,10,8,3.1,0x526d69);
// Spring pads use shallow colliders: landing on their top launches a player upward.
for(const[x,z]of [[-20,11],[-7,-7],[8,12],[21,-6],[-17,-20],[17,-20]]){solid(9,x,z,2.2,2.2,.28,0x356e6b,.14,'trampoline-pad')}

// Earth banks frame connected trenches. Broken high walls and one wreck create
// very different cover heights from the construction site's tall open frames.
for(const [x,z,w]of [[-16,-7,12],[12,-7,16],[-16,-3,12],[12,-3,16],[-16,6,10],[14,7,12]])solid(1,x,z,w,1.1,1.05,0x77705a,.525,'earth-bank');
for(const [x,z,d]of [[-9,11,6],[7,-14,5],[-5,-14,5]])solid(1,x,z,1.1,d,1.0,0x77705a,.5,'trench-return');
for(const [x,z,w,d,h]of [[-18,-18,9,.8,3.3],[-22,-14,.8,7,2.8],[-14,-15,.8,5,1.6],[16,-18,10,.8,4.1],[21,-14,.8,7,3.2],[12,-14,.8,5,2.2],[-18,11,5,.8,2.2],[-20,9,.8,4,1.7],[19,16,4,2,1.0]])solid(1,x,z,w,d,h,0x838579,h/2,'broken-wall');
solid(1,9,8,3.6,5.8,1.25,0x3f4943,.625,'wreck-hull');
solid(1,9,7.5,2.3,2.3,.65,0x47534a,1.575,'wreck-turret');
for(const [x,z]of [[-3,1],[3,12],[-13,18],[17,-23]])solid(1,x,z,2.2,1.2,.8,0x8f8b71,.4,'sandbag-barricade');
for(const [x,z,w,d]of [[-2,-19,2.6,1.6],[20,1,2,2.8],[-20,-9,2,1.7]])solid(1,x,z,w,d,.6,0x777a70,.3,'rubble-mound');

// The entire walkable floor is one bridge deck. The canyon is outside the
// playable perimeter, so no actor can spawn or walk over an invisible floor.
for(const x of [-11,11])for(const z of [-9,9])solid(2,x,z,1.2,1.2,14,0x647d8c,7,'bridge-pylon');
for(const z of [-9,9])solid(2,0,z,23.2,1.2,.8,0x647d8c,13.4,'bridge-overhead-beam');
for(const [x,z,w,d,h]of [[-17,0,2,7,1.0],[17,2,2,7,1.0],[-6,-16,1.8,2,1.2],[6,15,1.8,2,1.2]])solid(2,x,z,w,d,h,0x7c8990,h/2,'bridge-maintenance-cover');

function indexOf(index){return Number.isInteger(index)&&index>=0&&index<4?index:0}
function bounds(b){return{min:[b.x-b.w/2,b.y-b.h/2,b.z-b.d/2],max:[b.x+b.w/2,b.y+b.h/2,b.z+b.d/2]}}
export function mapBounds(index){return layouts[indexOf(index)].map(bounds)}

export function buildMapObjects(THREE,group,index,{box,cylinder,mat,wallText}){
 index=indexOf(index);const m=maps[index],objects=[],specials=[];
 const add=(x,y,z,w,h,d,color,options={})=>box(group,x,y,z,w,h,d,color,options);
 for(const b of layouts[index]){
  const object=add(b.x,b.y,b.z,b.w,b.h,b.d,b.color,{collision:true});
  object.name=b.name;object.userData.mapCollider=b.name;objects.push(object);
 }
 const text=(label,x,y,z,w,h,color,rotation=0)=>wallText?.(label,x,y,z,w,h,color,rotation);
 const line=(start,end,radius,color)=>{
  const a=new THREE.Vector3(...start),b=new THREE.Vector3(...end),dir=b.clone().sub(a);
  const mesh=cylinder(group,...a.clone().add(b).multiplyScalar(.5).toArray(),radius,radius,dir.length(),color,7);
  mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),dir.normalize());return mesh;
 };
 // Thin paint and small trims add texture without creating hidden obstacles.
 if(index===0){
  for(const b of layouts[0]){
   if(b.name==='scaffold-crossbeam')add(b.x,b.y+.22,b.z,b.w,.025,b.d,0xe0b349);
   if(b.name==='cargo-container'){
    for(let n=0;n<11;n++)for(const side of [-1,1])add(b.x-b.w/2+.22+n*.45,b.y,b.z+side*(b.d/2+.014),.065,b.h-.12,.025,0x8b642e);
    text('SITE 07',b.x,1.5,b.z+b.d/2+.035,2.8,.65,'#ffe9b1');
   }
   if(b.name==='stacked-materials'){
    for(const side of [-1,1])add(b.x+side*b.w*.34,b.y,b.z+b.d/2+.013,.1,b.h,.025,0xbeb693);
    add(b.x,b.h+.018,b.z,b.w,.035,b.d,0xaca080);
   }
   if(b.name==='safety-barrier')for(let n=0;n<5;n++)add(b.x-1.12+n*.55,.7,b.z+.358,.25,.3,.015,n%2?0x353c36:0xf4c254);
  }
  // A crane and unfinished skyline sit beyond the arena wall.
  for(const z of [-17,-13])add(-33,11,z,.6,22,.6,0xc8a444);
  for(let n=0;n<10;n++){add(-33,1+n*2,-15,.45,.18,4,0x8c793e);line([-33,n*2,-17],[-33,n*2+2,-13],.08,0xb69643)}
  add(-17,21.8,-15,35,.8,.9,0xd9af43);line([-32,22,-15],[-3,22,-15],.045,0x6f715f);
  line([-4,21.5,-15],[-4,12,-15],.045,0x4c594d);add(-4,11.7,-15,.25,.6,.25,0x525d4e);
  for(let n=0;n<6;n++)add(-50+n*19,8+(n%3)*3,-56,9+(n%2)*3,16+(n%3)*6,8,0x8e9994,{shadow:false});
  for(const x of [-4,4])for(let n=0;n<9;n++)add(x,.014,-22+n*5,.12,.018,2,0xdbc48c,{shadow:false});
  text('HIGHRISE',0,2.5,-27.38,12,1.4,'#f9d591');
 }else if(index===1){
  add(-16,.016,-5,12,.018,2.8,0x4b4a3c,{shadow:false});add(12,.016,-5,16,.018,2.8,0x4b4a3c,{shadow:false});
  for(const b of layouts[1]){
   if(b.name==='earth-bank'||b.name==='sandbag-barricade'){
    for(let n=0;n<Math.floor(b.w/.7);n++)add(b.x-b.w/2+.35+n*.7,b.h-.12,b.z,.61,.22,Math.min(.64,b.d),0x9b9579);
   }
   if(b.name==='broken-wall'){
    add(b.x,b.h-.08,b.z,b.w,.16,b.d,0x999a8b);
    if(b.w>2)for(let n=0;n<Math.floor(b.w/1.1);n++)add(b.x-b.w/2+.55+n*1.1,b.h+.15*(n%2),b.z,.6,.18,b.d*.8,0x72766b);
   }
  }
  for(const side of [-1,1])line([9+side*.9,1.75,6.6],[9+side*.9,1.75,4.4],.055,0x2c3731);
  for(const x of [7.5,10.5])for(const z of [6.1,9.9]){const wheel=cylinder(group,x,.52,z,.38,.38,.2,0x27312c,10);wheel.rotation.z=Math.PI/2}
  for(let n=0;n<11;n++){
   const x=-48+n*9;add(x,2.5+(n%3),-43,4,5+(n%3)*2,4,0x525d57,{shadow:false});
   line([x,0,-44],[x+(n%2?1:-1),8+n%4,-44],.16,0x465349);
  }
  text('NO MAN’S LAND',0,2.3,-27.38,15,1.1,'#d5d4b6');
 }else if(index===2){
  // deck fascia and supports make its elevation legible from the approach view
  add(0,-.6,0,56,.7,56,0x52616b);for(const x of [-26.8,26.8])add(x,-2,0,1.1,3.5,56,0x495e6c);
  for(const side of [-1,1]){
   for(let n=0;n<14;n++){const z=-26+n*4;add(side*27.55,1.35,z,.14,1.1,.14,0x9aaeb6);add(side*27.52,1.85,z,.18,.12,3.8,0xa8bac0)}
   for(const z of [-9,9])for(const anchor of [-26,0,26])line([side*11,13,z],[side*11,3.3,anchor],.075,0xc3cdd0);
   add(0,-15,side*48,150,30,27,0x9b8c77,{shadow:false});
   for(let n=0;n<8;n++)add(-65+n*20,-10-n%4*2,side*(36+n%3*5),12,20+(n%3)*5,8,0xaea08a,{shadow:false});
  }
  add(0,-25,0,170,.2,27,0x588b9e,{shadow:false,metal:.25,rough:.3});
  for(const x of [-8.3,8.3])add(x,.018,0,.16,.02,53,0xdbc69a,{shadow:false});
  for(let n=0;n<11;n++)add(0,.019,-25+n*5,.13,.02,2.6,0xe5d7b7,{shadow:false});
  for(const z of [-22,22])for(let n=0;n<14;n++)add(-9+n*1.4,.02,z,.62,.02,.26,0xd5dedc,{shadow:false});
  text('SKYBRIDGE',0,13.35,-8.38,12,.72,'#d5e9ed');
 }else if(index===3){
  // The fourth map deliberately contains only paint inside its four walls.
  for(const x of [-20,-10,0,10,20])add(x,.016,0,.045,.016,53,0x8dabae,{shadow:false});
  for(const z of [-20,-10,0,10,20])add(0,.017,z,53,.016,.045,0x8dabae,{shadow:false});
  for(const z of [-25,25])add(0,.019,z,51,.018,.13,0x5fc5bb,{shadow:false});
  for(const x of [-25,25])add(x,.019,0,.13,.018,51,0x5fc5bb,{shadow:false});
  text('OPEN RANGE',0,.73,-27.38,11,.65,'#d2fff2');
 }else{
  const colors=[0xd7b467,0x67d8d2,0xf0b562,0xe98c48,0xd1e886,0x72f0dc],color=colors[index-4];
  for(const b of layouts[index])if(b.name==='raised-platform'){add(b.x,b.y+b.h/2+.06,b.z,b.w,.12,b.d,color);}
  if(index===4)text('HIGH CITADEL',0,2.2,-27.38,13,.85,'#f2dcaa');
  if(index===5)text('SKYLINE ROOFTOPS',0,4.8,-27.38,15,.9,'#a6f3ea');
  if(index===6)text('RED MESA',0,2.3,-27.38,12,.8,'#ffe1b4');
  if(index===7)text('IRON FOUNDRY',0,2.5,-27.38,14,.8,'#ffc293');
  if(index===8)text('GREEN CANOPY',0,2.2,-27.38,14,.8,'#e5f4b9');
  if(index===9){text('SPRING YARD',0,2.2,-27.38,14,.8,'#c8fff1');for(const b of layouts[index].filter(o=>o.name==='trampoline-pad')){const mesh=cylinder(group,b.x,b.y+b.h/2,b.z,1.08,1.08,.08,0x51c8bd,24);mesh.material=mat(0x51c8bd,.25,.3,.25);const ring=new THREE.Mesh(new THREE.TorusGeometry(1.08,.09,8,32),mat(0xa1fff0,.15,.25,.7));ring.rotation.x=Math.PI/2;ring.position.set(b.x,b.y+b.h/2+.06,b.z);group.add(ring);specials.push({kind:'trampoline',x:b.x,z:b.z,y:b.y+b.h/2,radius:1.15})}}
 }
 return{objects,colliderCount:objects.length,internalCount:objects.length-4,map:m,specials};
}
