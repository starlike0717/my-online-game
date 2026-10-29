import {addMapArt} from './map-art.js';
import {groundHeight} from './world-rules.js';
const theme=(id,name,ko,desc,sky,ground,accent)=>({id,name,ko,desc,tag:ko,coords:desc,sky,fog:sky,ground,wall:0x75858a,accent,light:0xffeed5,sun:2.2});
export const maps=[
 theme('construction','HIGHRISE','건설 현장','철골 건물·크레인·자재 더미 / 외곽 벽',0xb3c4cc,0x99988d,0xf0ba4e),
 theme('battlefield','FRONT LINE','전장','참호·전차 잔해·벙커 / 전장 밖 이탈 시 사망',0x7a8586,0x6b6756,0xb6c284),
 theme('bridge','VOID BRIDGE','공허 대교','좁은 다리를 건너 외곽 전초기지로 / 추락 주의',0x97bdd5,0x71828c,0x82d8f2),
 theme('open','OPEN RANGE','평지','장애물 없는 평지 / 외곽 벽',0xc0d5df,0xb8c3c1,0x5fe1d4),
 theme('dock','HARBOR','부두','물 위 손가락 부두·화물선·외딴 섬 / 물에 빠지면 사망',0xa4c8d7,0x9d8c6d,0xf0c46a),
 theme('playground','PLAYGROUND','놀이터','미끄럼틀·그네·오르기 구조물·점프 패드 / 외곽 벽',0xa7d8e2,0x83ac76,0xf3b069),
 theme('ruins','LOST CITY','폐허','무너진 석조 신전·아치·미로 / 폐허 밖 이탈 시 사망',0xb5a68a,0x94856d,0xdbbd7a),
 theme('aquarium','BLUE TUNNEL','수족관','거대한 수조와 물고기·해저 터널 / 외곽 벽',0x608d9c,0x9ebfc4,0x58e6e3),
 theme('islands','SKY ISLANDS','하늘섬','공중 섬·외곽 섬·가는 연결로 / 공허에 빠지면 사망',0xabb4dc,0x8797a1,0xbc9df4),
 theme('spring','SPRING GARDEN','점프 정원','트램펄린·정자·높은 전망대 / 정원 밖 이탈 시 사망',0xb0cfb4,0x758d67,0xa3efd0)
];
const lighting=[
 {sky:0xb3d3e4,ground:0x989d9c,wall:0x87949d,hemiSky:0xe6f3ff,hemiGround:0x766c57,ambient:2.1,light:0xffecd1,sun:2.5,density:.007},
 {sky:0x48545a,ground:0x625f4d,wall:0x6b6e5f,hemiSky:0xc0d0d4,hemiGround:0x3a382d,ambient:1.6,light:0xe2d7bb,sun:1.5,density:.014},
 {sky:0x8090b2,ground:0x718598,wall:0x718697,hemiSky:0xc3d4fa,hemiGround:0x4a5874,ambient:2,light:0xffd4b0,sun:1.8,density:.006},
 {sky:0xd7edf2,ground:0xc5d9df,wall:0x91b2c0,hemiSky:0xf4ffff,hemiGround:0x7b969f,ambient:2.7,light:0xffffff,sun:2.4,density:.003},
 {sky:0x7db4cc,ground:0x98754f,wall:0x637c8b,hemiSky:0xd7efff,hemiGround:0x355868,ambient:2.2,light:0xffedcf,sun:2.3,density:.006},
 {sky:0x90d7f2,ground:0x76b786,wall:0xb9d9ce,hemiSky:0xe9fff4,hemiGround:0x64844d,ambient:2.5,light:0xfff4d3,sun:2.7,density:.004},
 {sky:0xc8a574,ground:0xad9369,wall:0x9e8b69,hemiSky:0xffe6bd,hemiGround:0x68513d,ambient:1.8,light:0xffcc91,sun:2.3,density:.010},
 {sky:0x10394f,ground:0x759fa7,wall:0x315e75,hemiSky:0x7ae5f0,hemiGround:0x113e64,ambient:2,light:0xb2efff,sun:1.6,density:.014},
 {sky:0x3d366d,ground:0x9587ba,wall:0x796697,hemiSky:0xc5baff,hemiGround:0x39305d,ambient:2.1,light:0xcfdcff,sun:2,density:.005},
 {sky:0xb0ceac,ground:0x6f996c,wall:0x84966d,hemiSky:0xe7f4c8,hemiGround:0x557143,ambient:2.1,light:0xffe2ac,sun:2.6,density:.005}
];
maps.forEach((m,i)=>{Object.assign(m,lighting[i]);m.fog=m.sky});
const idx=n=>Number.isInteger(n)&&n>=0&&n<maps.length?n:0;
const rect=(x,z,w,d,y=0)=>({x,z,w,d,y});
export const mapWorlds=maps.map((_,i)=>({limit:[0,3,5,7].includes(i)?26.8:76,boundary:[0,3,5,7].includes(i)?'wall':[1,6,9].includes(i)?'kill':'fall',edge:i===1?33:31,deathY:-8,floors:[rect(0,0,80,80)]}));
mapWorlds[2].floors=[rect(0,0,18,54),rect(-42,-6,16,20),rect(42,6,16,20),rect(-23,-10,34,3),rect(23,10,34,3)];
mapWorlds[4].floors=[rect(0,15,24,28),rect(0,0,44,8),rect(-18,-8,8,44),rect(18,-8,8,44),rect(45,-8,18,22),rect(31,-8,28,3)];mapWorlds[4].hazard='water';
mapWorlds[8].floors=[rect(0,16,28,24),rect(0,-20,24,18),rect(-42,-7,16,20),rect(42,-7,16,20),rect(0,-3,4,24),rect(-23,-12,32,3),rect(23,-12,32,3)];
for(const i of [0,3,5,7])mapWorlds[i].floors=[rect(0,0,56,56)];
export const worldForMap=n=>mapWorlds[idx(n)];
export const mapSpawns=n=>[[0,24],[0,20],[-18,0],[18,0],[0,-24],[0,-20],[-22,20],[22,-20],[-5,22],[5,-22]].filter(([x,z])=>Number.isFinite(groundHeight(worldForMap(n),x,z))&&!mapBounds(n).some(b=>x+.6>b.min[0]&&x-.6<b.max[0]&&z+.6>b.min[2]&&z-.6<b.max[2]&&b.min[1]<1.7&&b.max[1]>.15));
const layouts=maps.map(()=>[]),pads=maps.map(()=>[]);
function solid(i,x,z,w,d,h,c=0x7e8d83,y=h/2,name='cover'){layouts[i].push({x,y,z,w,h,d,color:c,name})}
function platform(i,x,z,w,d,y,c){solid(i,x,z,w,d,.5,c,y-.25,'platform');for(const a of [-1,1])for(const b of [-1,1])solid(i,x+a*(w/2-.4),z+b*(d/2-.4),.4,.4,y,c,y/2,'pillar')}
function steps(i,x,z,height,c){const n=Math.ceil(height/.28);for(let a=0;a<n;a++){const h=(a+1)*height/n;solid(i,x,z-a*.55,2.5,.55,h,c,h/2,'stair')}}
function pad(i,x,z){pads[i].push({kind:'trampoline',x,z,y:.12,radius:1.5,power:23})}
for(let i=0;i<maps.length;i++){
 for(const r of mapWorlds[i].floors)solid(i,r.x,r.z,r.w,r.d,.5,maps[i].ground,(r.y||0)-.25,'floor');
 if(mapWorlds[i].boundary==='wall'){for(const z of [-27.7,27.7])solid(i,0,z,56,.5,7,maps[i].wall,3.5,'boundary');for(const x of [-27.7,27.7])solid(i,x,0,.5,56,7,maps[i].wall,3.5,'boundary')}
}
// Construction: open steel skeletons, crane mast, materials and climbable decks.
for(const[x,z,h]of [[-14,-10,8],[14,-13,11]]){platform(0,x,z,10,10,4,0x989e99);for(const a of [-5,5])for(const b of [-5,5])solid(0,x+a,z+b,.6,.6,h,0x7b8a84,h/2,'steel-frame');steps(0,x,z+13,4,0xb5a68b)}
solid(0,-22,12,1.3,1.3,15,0xe6b248,7.5,'crane-mast');solid(0,-8,12,29,.8,.8,0xe6b248,14,'crane-jib');
for(const[x,z]of [[-5,1],[9,8],[19,-3],[-16,17]])solid(0,x,z,4,2.5,1.7,0xa48256,.85,'material-stack');
// Battlefield: zigzag trenches, ruined bunkers and a tank wreck.
for(let n=0;n<7;n++){solid(1,-12+n*4,-6+(n%2)*7,5,1.2,1,0x74684d,.5,'trench-bank');solid(1,-15+n*5,12,2.8,1.1,.8,0x8c8567,.4,'sandbags')}
for(const x of [-19,18]){solid(1,x,-18,8,.7,3,0x858674,1.5,'bunker-wall');solid(1,x-4,-15,.7,6,3,0x858674,1.5,'bunker-wall')}
solid(1,10,2,4,7,1.4,0x485648,.7,'tank-hull');solid(1,10,1,2.5,2.5,1,0x56664c,1.8,'tank-turret');solid(1,10,-2, .3,5,.3,0x485648,2,'tank-cannon');
// Bridge: side outposts are genuinely reachable over narrow connecting decks.
for(const z of [-12,12]){for(const x of [-8,8])solid(2,x,z,1,1,12,0x5b7482,6,'pylon');solid(2,0,z,17,1,.7,0x5b7482,12,'overhead-beam')}
for(const x of [-42,42]){solid(2,x,-6*Math.sign(-x),5,5,2.5,0x7793a5,1.25,'outpost');solid(2,x,0,3,2,1,0x667d87,.5,'supplies')}
// Harbor: cargo stacks, mooring posts and a ship-shaped warehouse on the outer island.
for(const[x,z]of [[-18,-20],[18,-23],[0,17],[45,-8]]){solid(4,x,z,4,6,2.8,0xa66c4e,1.4,'container');for(const dx of [-2.5,2.5])solid(4,x+dx,z, .3,.3,1.4,0x4b5355,.7,'bollard')}
solid(4,47,-8,5,13,1.7,0x415667,.85,'ship-hull');solid(4,47,-12,3,4,4,0xd2d4c2,2,'ship-bridge');
// Playground: slides, a swing gantry, climbing grids and spring pads.
platform(5,-13,-10,6,6,3.1,0xe7a74d);steps(5,-13,0,3.1,0xdda44d);
for(let n=0;n<12;n++)solid(5,-8+n*.6,-10, .65,3,.12,0xeb6b58,3.1-n*.25,'slide');
for(const x of [8,20])solid(5,x,3,.35,.35,5.5,0x5d8fbb,2.75,'swing-post');solid(5,14,3,13,.4,.4,0x5d8fbb,5.5,'swing-beam');
for(const x of [11,17]){solid(5,x,3,2,.8,.15,0xe4c34f,1.4,'swing-seat');for(const dx of [-.8,.8])solid(5,x+dx,3,.025,.025,4,0x5d6670,3.5,'swing-chain')}
for(let a=0;a<5;a++){solid(5,-15+a*1.5,17,.09,.15,4,0xa757a7,2,'climbing-frame');solid(5,-12,17,6,.15,.08,0xa757a7,.8+a*.75,'climbing-rung')}pad(5,13,-14);
// Ruins: separate broken rooms and free-standing arches, not copies of high platforms.
for(const[x,z,w,d,h]of [[-16,-15,12,.8,5],[-22,-10,.8,10,3],[10,-18,15,.8,4],[17,-11,.8,12,5],[-9,10,.9,13,3.5],[8,13,10,.9,2]])solid(6,x,z,w,d,h,0x9b947e,h/2,'ruin-wall');
for(const z of [-3,14]){for(const x of [-3,3])solid(6,x,z,1.1,1.1,4.2,0xaea48a,2.1,'arch-pillar');solid(6,0,z,7,1.1,.9,0xaea48a,4.2,'arch-lintel')}
// Aquarium: transparent tanks enclose fish while a long glass tunnel runs through the middle.
for(const x of [-18,18])solid(7,x,-3,10,35,4.5,0x3b9baa,2.25,'aquarium-tank');for(const z of [-14,-4,6]){for(const x of [-4,4])solid(7,x,z,.25,.3,4.8,0x70b8ca,2.4,'tunnel-post');solid(7,0,z,8.3,.3,.25,0x70b8ca,4.8,'tunnel-roof')}
// Sky islands: tall rocky undersides, jump launchers, and lookout perches.
for(const r of mapWorlds[8].floors.filter(r=>r.w>10&&r.d>10))solid(8,r.x,r.z,r.w*.7,r.d*.7,13,0x65758b,-6.75,'floating-rock');platform(8,0,-20,7,7,3.5,0x9e9fc9);pad(8,-7,12);pad(8,7,12);
// Garden: circular fountains, pergolas, a high deck and spring routes.
platform(9,-15,-12,12,11,6,0x78947b);for(const x of [-20,-10])solid(9,x,7,.4,.4,5,0x7c7859,2.5,'pergola');solid(9,-15,7,12,5,.3,0x7c7859,5,'pergola-roof');
for(const[x,z]of [[-18,13],[8,-14],[18,12],[-8,-20]])pad(9,x,z);
function bounds(b){return{min:[b.x-b.w/2,b.y-b.h/2,b.z-b.d/2],max:[b.x+b.w/2,b.y+b.h/2,b.z+b.d/2]}}
export function mapBounds(n){return layouts[idx(n)].map(bounds)}
export function buildMapObjects(THREE,group,n,{box,cylinder,mat,wallText}){
 const i=idx(n),m=maps[i],objects=[];for(const b of layouts[i]){const mesh=box(group,b.x,b.y,b.z,b.w,b.h,b.d,b.color,{collision:true});mesh.name=b.name;mesh.userData.mapCollider=b.name;if(b.name==='aquarium-tank'){mesh.material=mat(b.color).clone();mesh.material.transparent=true;mesh.material.opacity=.3;mesh.material.depthWrite=false;mesh.material.userData.mapArtOwned=true}objects.push(mesh)}
 if(i===4)box(group,0,-.8,0,170,.1,170,0x4c9eb8,{shadow:false});
 if(i===7){for(const x of [-18,18])for(let k=0;k<12;k++){const fish=new THREE.Mesh(new THREE.ConeGeometry(.3,.9,5),mat([0xffb653,0xed7caf,0x95e2bd][k%3]));fish.rotation.z=Math.PI/2;fish.position.set(x+Math.sin(k*2)*3,1+Math.sin(k)*.8+1,-17+k*2.5);group.add(fish)}for(const z of [-18,-10,-2,6,14]){const hoop=new THREE.Mesh(new THREE.TorusGeometry(3.8,.09,6,32,Math.PI),mat(0x67a5ba));hoop.position.set(0,0,z);group.add(hoop)}for(const x of [-3.8,3.8]){const pane=box(group,x,1.7,-2,.035,3.4,40,0x8fe6ef,{shadow:false});pane.material=mat(0x8fe6ef).clone();pane.material.transparent=true;pane.material.opacity=.12;pane.material.depthWrite=false;pane.material.userData.mapArtOwned=true}}
 if(i===9){const basin=cylinder(group,12,.3,0,3.5,3.5,.6,0x9daea1,32);const water=cylinder(group,12,.63,0,3.2,3.2,.02,0x80d1de,32);water.name='fountain-water'}
 for(const p of pads[i]){const disk=cylinder(group,p.x,.07,p.z,1.5,1.5,.12,0x4baeb0,32);const ring=new THREE.Mesh(new THREE.TorusGeometry(1.5,.1,6,40),mat(0x8dffde,.1,.2,0x224f44));ring.rotation.x=Math.PI/2;ring.position.set(p.x,.16,p.z);group.add(ring)}
 const art=addMapArt(THREE,group,i,{mat},objects);wallText?.(m.ko,0,5,-26,15,1,'#ecf4df');return{objects,landmarks:art.userData.landmarks,specials:pads[i].map(p=>({...p})),rules:mapWorlds[i],map:m,colliderCount:objects.length,internalCount:objects.filter(o=>!['floor','boundary'].includes(o.name)).length};
}
