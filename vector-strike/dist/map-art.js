// Static visual identities share each arena's existing collision layout.
export function addMapArt(THREE,parent,index,{mat},colliders=[]){
 const root=new THREE.Group();root.name='map-identity-'+index;parent.add(root);const batches=new Map(),dummy=new THREE.Object3D(),landmarks=[];
 const material=(c,glow=0)=>mat(c,.15,.75,glow);
 function instance(kind,c,position,scale=[1,1,1],rotation=[0,0,0],name='detail'){
  const key=kind+'-'+c;let b=batches.get(key);if(!b){const geometry=kind==='sphere'?new THREE.SphereGeometry(1,10,7):kind==='cone'?new THREE.ConeGeometry(1,1,7):kind==='cylinder'?new THREE.CylinderGeometry(1,1,1,10):kind==='ring'?new THREE.TorusGeometry(1,.075,6,28):new THREE.BoxGeometry(1,1,1);b={geometry,color:c,items:[],name};batches.set(key,b)}b.items.push({position,scale,rotation});
 }
 function mesh(geometry,c,position,rotation=[0,0,0],name='landmark',glow=0){const m=new THREE.Mesh(geometry,material(c,glow));m.position.set(...position);m.rotation.set(...rotation);m.name=name;root.add(m);landmarks.push(name);return m}
 function tube(points,r,c,name){const curve=new THREE.CatmullRomCurve3(points.map(p=>new THREE.Vector3(...p)));return mesh(new THREE.TubeGeometry(curve,Math.max(6,points.length*5),r,6,false),c,[0,0,0],[0,0,0],name)}
 function tree(x,z,color=0x4c8c53,scale=1){instance('cylinder',0x71513b,[x,2*scale,z],[.35*scale,4*scale,.35*scale]);for(const [dx,dy,dz,r]of [[0,0,0,2.1],[-1,.5,0,1.6],[1,.6,0,1.7]])instance('sphere',color,[x+dx*scale,(4.1+dy)*scale,z+dz*scale],[r*scale,r*scale,r*scale]);}
 if(index===0){
  landmarks.push('triangular-crane','safety-markings','city-skyline');
  for(let x=-22;x<6;x+=3){tube([[x,14,11.5],[x+1.5,16,12],[x+3,14,12.5]],.09,0xe8ac2d,'crane-truss')}
  tube([[-22,15,12],[-8,17,12],[8,14,12]],.045,0x39434b,'crane-cable');tube([[4,14,12],[4,7,12],[4.6,6.6,12]],.07,0x343d43,'hanging-hook');
  for(const b of colliders.filter(m=>m.name==='material-stack'))for(let n=0;n<6;n++)instance('box',n%2?0xf7c64a:0x26333b,[b.position.x-1.7+n*.65,.035,b.position.z+1.5],[.38,.025,1.1],[0,.5,0]);
  for(let n=0;n<15;n++){const h=13+(n*7%17);instance('box',0x8299aa,[-42+n*6,h/2,-43],[4,h,5]);}
 }else if(index===1){
  landmarks.push('tracked-tank','scorched-craters','barbed-frontline');
  for(const side of [-1,1]){for(let n=0;n<5;n++)instance('cylinder',0x29322c,[10+side*2.08,.65,-.5+n*1.2],[.5,.18,.5],[0,0,Math.PI/2]);instance('box',0x252e2a,[10+side*1.8,.55,2],[.4,.8,6.8]);}
  mesh(new THREE.SphereGeometry(1,12,8),0x526248,[10,1.9,1]).scale.set(1.25,.65,1.2);
  for(const[x,z,r]of [[-8,5,3.2],[18,16,2.6],[-22,-4,2.4],[1,-16,3]]){instance('cylinder',0x35382f,[x,.015,z],[r,.025,r]);instance('ring',0x595641,[x,.06,z],[r,.7,r],[Math.PI/2,0,0]);}
  for(let x=-32;x<33;x+=4){instance('box',0x403e35,[x,1,-33],[.18,2,.18],[0,0,.3]);tube([[x,.8,-33],[x+1,1.7,-33],[x+2,.8,-33],[x+3,1.7,-33],[x+4,.8,-33]],.025,0x4e5146,'wire-fence')}
  for(const b of colliders.filter(m=>m.name==='sandbags'))for(let n=0;n<4;n++)instance('sphere',0x938663,[b.position.x-1.1+n*.72,.78,b.position.z],[.4,.2,.48]);
 }else if(index===2){
  landmarks.push('suspension-cables','bridge-hangers','canyon');
  for(const x of [-8,8]){tube([[x,12,-25],[x,6,-13],[x,4,0],[x,6,13],[x,12,25]],.085,0xc0cbd3,'suspension-cable');for(let z=-24;z<=24;z+=3){const top=4+8*Math.pow(Math.abs(z)/25,2);instance('cylinder',0x748fa2,[x,top/2,z],[.035,top,.035]);}tube([[x,1.2,-26],[x,1.2,26]],.065,0x6b8795,'bridge-side-rail');}
  for(let z=-24;z<26;z+=5)instance('box',0xe1c87f,[0,.017,z],[.2,.025,2]);
  for(let n=0;n<12;n++)instance('cone',0x5d6984,[-75+n*13,-18,-64],[9+n%3,23+n%5,12],[0,n,0]);
 }else if(index===3){
  landmarks.push('open-stadium','wall-targets','clean-range-grid');
  for(let n=-25;n<=25;n+=5){instance('box',0x8bb7c7,[n,.012,0],[.035,.015,53]);instance('box',0x8bb7c7,[0,.012,n],[53,.015,.035]);}
  for(const x of [-18,-6,6,18]){instance('cylinder',0x287789,[x,3,-27.35],[1.3,.035,1.3],[Math.PI/2,0,0]);instance('ring',0xe1fbf5,[x,3,-27.3],[1,.9,1]);}
  for(const z of [-29,29]){instance('box',0x3b5361,[0,9,z],[61,.45,.45]);for(const x of [-30,30])instance('cylinder',0x4b6875,[x,4.5,z],[.35,9,.35]);}
 }else if(index===4){
  landmarks.push('timber-piers','cargo-ship','harbor-cranes','ocean-buoys');
  for(const b of colliders.filter(m=>m.name==='floor')){const g=b.geometry.parameters;for(let z=b.position.z-g.depth/2+.3;z<b.position.z+g.depth/2;z+=.85)instance('box',0x7c5b3c,[b.position.x,.015,z],[g.width,.02,.035]);}
  for(const b of colliders.filter(m=>m.name==='container'))for(let z=-2.7;z<=2.7;z+=.5)for(const side of [-1,1])instance('box',0xcf8651,[b.position.x+side*2.02,1.4,b.position.z+z],[.035,2.6,.08]);
  const outline=new THREE.Shape();outline.moveTo(-2.5,-6);outline.lineTo(2.5,-6);outline.lineTo(2.5,4.8);outline.lineTo(0,7.7);outline.lineTo(-2.5,4.8);outline.closePath();mesh(new THREE.ExtrudeGeometry(outline,{depth:1.55,bevelEnabled:false}),0x2b5069,[47,0,-8],[-Math.PI/2,0,0],'pointed-ship-hull');
  for(const x of [-29,29]){instance('box',0xe2aa4c,[x,6,-27],[.65,12,.65]);instance('box',0xe2aa4c,[x-4,12,-27],[9,.5,.5]);tube([[x-8,12,-27],[x-8,4,-27]],.05,0x314759,'cargo-hook');}
  for(let n=0;n<12;n++){instance('sphere',n%2?0xf2c968:0xd95b4c,[-35+n*7,-.1,36],[.55,.55,.55]);instance('box',0x6ca6b7,[-40+n*7,-.72,-40],[4,.025,1]);}
 }else if(index===5){
  landmarks.push('rainbow-arch','rubber-circles','curved-slide','playground-trees');
  for(const[r,c]of [[8,0xef7167],[7.4,0xf0bd4d],[6.8,0x74b56d],[6.2,0x67b5d9]])mesh(new THREE.TorusGeometry(r,.25,7,32,Math.PI),c,[0,5,-29],[0,0,0],'rainbow-arch');
  for(const[x,z,c]of [[-13,12,0xeabe53],[12,-14,0x53b5c3],[13,3,0xdb807b],[-13,-10,0x8c78c8]])instance('cylinder',c,[x,.022,z],[4,.025,4]);
  for(const side of [-1,1])tube([[-8,3.25,-10+side*1.45],[-4,1.6,-10+side*1.45],[-1,.4,-10+side*1.45]],.12,0xe6ce5b,'slide-side-rail');
  for(const[x,z]of [[-32,-20],[32,-20],[-32,18],[32,18]])tree(x,z,0x5b9f62,1.2);
 }else if(index===6){
  landmarks.push('ancient-arch','stone-columns','broken-obelisks');
  mesh(new THREE.TorusGeometry(8,1,6,18,Math.PI),0xb7a47b,[0,1,-35],[0,0,0],'ancient-arch');
  for(const b of colliders.filter(m=>m.name==='arch-pillar')){for(const y of [.2,1,2,3,4])instance('cylinder',0xc2b087,[b.position.x,y,b.position.z],[.65,.15,.65]);}
  for(let n=0;n<8;n++){const h=5+n%4;instance('cylinder',0x9f947b,[-31+n*9,h/2,-36],[1,h,1],[0,0,n%2?.1:-.08]);}
  for(const b of colliders.filter(m=>m.name==='ruin-wall')){const g=b.geometry.parameters;for(let n=0;n<g.height;n++)instance('box',0x827962,[b.position.x,n+.4,b.position.z+g.depth/2+.015],[g.width,.045,.035]);}
 }else if(index===7){
  landmarks.push('glass-tunnel','shark-tanks','ocean-caustics');
  const glass=material(0x72ddec).clone();glass.transparent=true;glass.opacity=.10;glass.depthWrite=false;glass.side=THREE.DoubleSide;glass.userData.mapArtOwned=true;
  const canopy=new THREE.Mesh(new THREE.CylinderGeometry(3.85,3.85,39,28,1,true),glass);canopy.rotation.x=Math.PI/2;canopy.position.set(0,0,-3);canopy.name='glass-tunnel';root.add(canopy);
  for(const x of [-18,18]){const shark=mesh(new THREE.SphereGeometry(1,14,8),0x37596d,[x,2.7,-9],[0,.2,0],'shark-body');shark.scale.set(1.1,.7,4);mesh(new THREE.ConeGeometry(1,2,3),0x2b4d61,[x,3.4,-9],[0,0,.3],'shark-fin').scale.set(.3,1,1);mesh(new THREE.ConeGeometry(1.1,1.7,3),0x37596d,[x,2.7,-5],[Math.PI/2,0,0],'shark-tail').scale.x=.3;}
  for(let z=-24;z<24;z+=4)for(let x=-10;x<=10;x+=5)instance('ring',0x7dc1c7,[x,.025,z],[1.2,.25,.6],[Math.PI/2,0,(x+z)*.3]);
 }else if(index===8){
  landmarks.push('tapered-floating-rocks','crystal-islands','arcane-rings');
  for(const b of colliders.filter(m=>m.name==='floating-rock')){const g=b.geometry.parameters;mesh(new THREE.ConeGeometry(g.width*.58,g.height*1.3,7),0x68649a,[b.position.x,-7,b.position.z],[Math.PI,0,0],'tapered-rock').scale.z=g.depth/g.width;for(let n=0;n<4;n++)instance('cone',n%2?0x91d6f5:0xb49cf4,[b.position.x+Math.sin(n*2)*4,-4.5,b.position.z+Math.cos(n*2)*3],[.7,3+n,.7],[Math.PI,.1*n,.2]);}
  mesh(new THREE.TorusGeometry(4,.15,7,48),0xc0a1ff,[0,7.5,-20],[0,0,0],'arcane-ring',0x67468a);
 }else if(index===9){
  landmarks.push('orchard','garden-paths','fountain-streams','gazebo');
  for(let n=0;n<10;n++){tree(-35+n*8,-36,0x53834d,1.1+(n%3)*.15);tree(n%2?35:-35,-26+n*6,0x789749,1.15);}
  for(const[x,z,w,d]of [[0,0,3,57],[0,8,55,3],[-15,-12,3,27]])instance('box',0xc8b997,[x,.017,z],[w,.02,d]);
  for(let n=0;n<8;n++){const angle=n*Math.PI/4;const x=12+Math.cos(angle)*1.7,z=Math.sin(angle)*1.7;tube([[x,.65,z],[12+Math.cos(angle)*.8,3.5,Math.sin(angle)*.8],[12,1.1,0]],.045,0xa9e7eb,'fountain-jet');}
  const roof=mesh(new THREE.ConeGeometry(6,3,8),0x62764c,[0,8,36],[0,Math.PI/8,0],'garden-gazebo');for(const x of [-4,4])instance('cylinder',0xe0d1ac,[x,3.5,36],[.28,7,.28]);
 }
 for(const batch of batches.values()){const instanced=new THREE.InstancedMesh(batch.geometry,material(batch.color),batch.items.length);instanced.name='art-batch-'+batch.name;batch.items.forEach((v,i)=>{dummy.position.set(...v.position);dummy.scale.set(...v.scale);dummy.rotation.set(...v.rotation);dummy.updateMatrix();instanced.setMatrixAt(i,dummy.matrix)});instanced.instanceMatrix.needsUpdate=true;instanced.receiveShadow=true;root.add(instanced)}
 root.userData.landmarks=[...new Set(landmarks)];return root;
}
