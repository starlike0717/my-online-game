// Lightweight, code-native weapon furniture. Mesh geometry belongs to each rig;
// the small, fixed palette is shared like game.js's material cache.
const palettes=new WeakMap();
function material(THREE,color,metalness=.65,roughness=.4){
 let cache=palettes.get(THREE);if(!cache){cache=new Map();palettes.set(THREE,cache)}
 const key=`${color}:${metalness}:${roughness}`;
 if(!cache.has(key)){const m=new THREE.MeshStandardMaterial({color,metalness,roughness});m.userData.sharedWeaponDetail=true;cache.set(key,m)}
 return cache.get(key);
}
function mesh(THREE,parent,geometry,color,name,metalness=.65,roughness=.4){
 const m=new THREE.Mesh(geometry,material(THREE,color,metalness,roughness));m.name=name;m.userData.weaponPart=name;m.castShadow=true;m.receiveShadow=true;parent.add(m);return m;
}
function box(THREE,parent,name,color,x,y,z,w,h,d){const m=mesh(THREE,parent,new THREE.BoxGeometry(w,h,d),color,name);m.position.set(x,y,z);return m}
function tube(THREE,parent,name,color,x,y,z,radius,length,axis='z',segments=12,open=false){
 const m=mesh(THREE,parent,new THREE.CylinderGeometry(radius,radius,length,segments,1,open),color,name);m.position.set(x,y,z);if(axis==='z')m.rotation.x=Math.PI/2;else if(axis==='x')m.rotation.z=Math.PI/2;return m;
}
function rod(THREE,parent,name,color,from,to,radius=.012){
 const a=new THREE.Vector3(...from),b=new THREE.Vector3(...to),delta=b.clone().sub(a);
 const m=mesh(THREE,parent,new THREE.CylinderGeometry(radius,radius,delta.length(),7),color,name);m.position.copy(a).add(b).multiplyScalar(.5);m.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),delta.normalize());return m;
}
function ring(THREE,parent,name,color,x,y,z,radius,thickness=.009){const m=mesh(THREE,parent,new THREE.TorusGeometry(radius,thickness,5,16),color,name);m.position.set(x,y,z);return m}
const metal=0x26332f,steel=0x687871,dark=0x17221f,rubber=0x263129,accent=0xd3ef9a;
function installSights(THREE,rig,parent,{height,rear,front,kind='iron',opening=.065}){
 let rearSight,frontSight;
 if(kind==='scope'){
  // Open-ended geometry leaves an actual aperture through the optical axis.
  rearSight=tube(THREE,parent,'scope-tube',metal,0,height,(rear+front)/2,.076,rear-front,'z',20,true);
  rearSight.material=material(THREE,metal,.65,.39);rearSight.material.side=THREE.DoubleSide;
  ring(THREE,parent,'scope-rear-rim',steel,0,height,rear,.077,.012);
  frontSight=ring(THREE,parent,'scope-front-rim',dark,0,height,front,.078,.013);
  for(const z of [rear-.06,front+.06]){box(THREE,parent,'scope-mount',metal,0,.191,z,.11,.045,.07);ring(THREE,parent,'scope-clamp',steel,0,height,z,.081,.006)}
  tube(THREE,parent,'scope-elevation-dial',steel,0,height+.093,-.015,.031,.036,'y');
  tube(THREE,parent,'scope-windage-dial',steel,.092,height,-.015,.025,.031,'x');
  opening=.12;
 }else{
  const side=.018,notch=opening/2+side/2;
  rearSight=new THREE.Group();rearSight.name='open-rear-sight';rearSight.position.z=rear;parent.add(rearSight);
  box(THREE,rearSight,'rear-sight-base',metal,0,height-.049,0,opening+side*2,.018,.046);
  for(const x of [-notch,notch]){
   box(THREE,rearSight,'rear-notch-ear',metal,x,height-.016,0,side,.07,.04);
   box(THREE,rearSight,'rear-reference-dot',accent,x,height+.005,.023,.006,.008,.004);
  }
  frontSight=new THREE.Group();frontSight.name='front-post-sight';frontSight.position.z=front;parent.add(frontSight);
  box(THREE,frontSight,'front-sight-base',metal,0,height-.055,0,.092,.025,.065);
  box(THREE,frontSight,'front-post',steel,0,height-.0275,0,.012,.045,.019);
  box(THREE,frontSight,'front-post-tip',accent,0,height-.006,.011,.009,.006,.006);
  for(const x of [-.039,.039])box(THREE,frontSight,'front-sight-guard',metal,x,height-.025,0,.012,.058,.027);
 }
 const sights={rear:[0,height,rear],front:[0,height,front],opening,kind};rig.userData.sights=sights;
 return{frontSight,rearSight,sightHeight:height,sightRearZ:rear,sightFrontZ:front,sights};
}
function triggerGuard(THREE,parent,z=.21,width=.11){
 box(THREE,parent,'trigger-guard-front',metal,0,-.157,z-.058,width,.09,.025);
 box(THREE,parent,'trigger-guard-bottom',metal,0,-.199,z,width,.016,.13);
 box(THREE,parent,'trigger',steel,0,-.15,z,.017,.07,.018).rotation.x=-.2;
}
function addGripAndFasteners(THREE,parent,w,length){
 const pistol=w.cat==='hg';
 triggerGuard(THREE,parent,pistol?length*.12:length*.22);
 for(let n=0;n<5;n++)for(const side of [-1,1])box(THREE,parent,'grip-checkering',rubber,side*.069,-.12-n*.035,length*.27,.008,.014,.12);
 for(const side of [-1,1])for(const z of [-length*.19,length*.24])tube(THREE,parent,'receiver-pin',steel,side*(pistol?.075:.101),.025,z,.011,.008,'x',6);
 box(THREE,parent,'ejection-port',dark,.101,.065,-length*.035,.006,.05,length*.19);
 box(THREE,parent,'ejection-port-lip',steel,.108,.095,-length*.035,.014,.012,length*.2);
 box(THREE,parent,'selector-lever',steel,-.11,.015,length*.26,.025,.015,.075).rotation.x=-.2;
 const mag=rigMagazine(parent.parent,w,length);
 if(mag){for(let n=0;n<4;n++)for(const side of [-1,1])box(THREE,mag,'magazine-stamping',steel,side*(w.cat==='lmg'?.153:.063),-.09+n*.06,0,.007,.015,w.cat==='lmg'?.22:.14)}
}
function rigMagazine(rig,w,length){
 if(!rig)return null;const z=w.cat==='hg'?length*.2:-length*.07;
 return rig.children.find(p=>p.isMesh&&Math.abs(p.position.y+.26)<.015&&Math.abs(p.position.z-z)<.015)||null;
}

export function addWeaponDetails(THREE,rig,w){
 const details=new THREE.Group();details.name='weapon-furniture';rig.add(details);
 if(!w.mechanic&&!w.fantasy)addFirearmIdentity(THREE,rig,details,w);
 if(w.mechanic==='rocket'){
  for(const side of [-1,1])for(let n=0;n<5;n++)box(THREE,details,'launcher-cooling-vent',dark,side*.143,.025,-.4+n*.11,.008,.06,.035);
  for(const z of [-.45,.39])ring(THREE,details,'launcher-reinforcement-ring',steel,0,0,z,.145,.009);
  box(THREE,details,'launcher-shoulder-pad',rubber,0,-.16,.43,.20,.08,.30);
  for(const side of [-1,1])box(THREE,details,'launcher-safety-label',accent,side*.145,.02,.38,.006,.04,.13);
  return{detailGroup:details,...installSights(THREE,rig,details,{height:.265,rear:.43,front:-.55,opening:.08})};
 }
 if(w.mechanic==='arrow'){
  for(const side of [-1,1]){
   const cam=ring(THREE,details,'bow-limb-cam',steel,0,side*.67,-.19,.064,.012);cam.rotation.y=Math.PI/2;
   for(let n=0;n<3;n++)box(THREE,details,'bow-limb-wrap',rubber,0,side*(.31+n*.075),-.42+n*.023,.09,.022,.07);
  }
  box(THREE,details,'bow-arrow-rest',steel,-.027,-.035,-.4,.09,.025,.12);
  for(let n=0;n<5;n++)box(THREE,details,'bow-grip-wrap',rubber,0,-.09+n*.043,-.385,.09,.018,.10);
  return{detailGroup:details};
 }
 if(w.mechanic)return{detailGroup:details};
 const pistol=w.cat==='hg',sniper=w.cat==='sr',sg=w.cat==='sg',smg=w.cat==='smg',lmg=w.cat==='lmg';
 const length=(pistol?.47:sniper?1.18:sg?1.02:smg?.64:.88)*(.96+(w.id%4)*.025);
 addGripAndFasteners(THREE,details,w,length);
 const barrelEnd=-length*.92;
 if(pistol){
  for(const side of [-1,1])for(let i=0;i<7;i++)box(THREE,details,'slide-serration',steel,side*.074,.055,length*.31-i*.018,.006,.073,.008);
  box(THREE,details,'slide-top-insert',dark,0,.107,-length*.1,.084,.009,length*.57);
  box(THREE,details,'extractor',steel,.079,.057,-length*.06,.012,.018,.075);
  box(THREE,details,'magazine-floorplate',rubber,0,-.424,length*.2,.145,.025,.177);
  if(/R-6|PEACEMAKER/.test(w.name)){
   tube(THREE,details,'revolver-cylinder',steel,0,-.005,.06,.12,.17,'z',12);
   for(let i=0;i<6;i++){const a=i*Math.PI/3;const chamber=tube(THREE,details,'revolver-chamber',dark,Math.cos(a)*.077,Math.sin(a)*.077,.148,.023,.006,'z',8);chamber.material=material(THREE,dark)}
   box(THREE,details,'revolver-hammer',steel,0,.101,.205,.032,.095,.052).rotation.x=.25;
  }else if(/WHISPER/.test(w.name)||w.cat==='hg'){
   tube(THREE,details,'pistol-suppressor',metal,0,.02,barrelEnd-.095,.042,.23,'z',12);
   for(const z of [barrelEnd+.01,barrelEnd-.19])ring(THREE,details,'suppressor-collar',steel,0,.02,z,.043,.005);
  }else if(/DE-50/.test(w.name)){
   box(THREE,details,'heavy-slide-face',steel,0,.03,-length*.34,.17,.17,.17);
   for(let n=0;n<3;n++)box(THREE,details,'heavy-slide-vent',dark,0,.119,-length*.32+n*.035,.065,.006,.018);
  }else if(/G18/.test(w.name)){
   box(THREE,details,'auto-selector',accent,-.083,.068,length*.35,.014,.032,.043);
  }
 }else{
  for(const side of [-1,1])for(let n=0;n<6;n++)box(THREE,details,'handguard-vent',dark,side*.12,.037,-length*.54+n*.055,.009,.043,.027);
  for(let n=0;n<4;n++)box(THREE,details,'stock-texture',steel,0,-.02,length*.75+n*.027,.167,.12,.009);
  box(THREE,details,'stock-cheekrest',w.color||0x8c9a81,0,.127,length*.72,.15,.035,.25);
  box(THREE,details,'butt-pad',rubber,0,-.025,length*.97,.205,.29,.035);
  box(THREE,details,'charging-handle',steel,-.139,.083,length*.12,.082,.035,.052);
  const flash=tube(THREE,details,'ported-muzzle-brake',steel,0,.02,barrelEnd-.02,.052,.1,'z',12);
  for(const side of [-1,1])for(let n=0;n<3;n++)box(THREE,details,'muzzle-brake-port',dark,side*.052,.02,flash.position.z-.032+n*.029,.004,.035,.012);
  if(/AK-12|NOMAD|RPK|PKM/.test(w.name)){
   tube(THREE,details,'gas-piston',steel,0,.117,-length*.41,.025,length*.42,'z',10);
   box(THREE,details,'folding-stock-strut',steel,0,.028,length*.57,.07,.07,.28);
   box(THREE,details,'ak-safety-lever',steel,.119,-.013,length*.14,.012,.025,.2).rotation.x=.12;
  }
  if(/FAMAS|AUG|P90|KSG/.test(w.name)){
   box(THREE,details,'bullpup-cheek-shell',w.color||0xa2b7a1,0,.09,length*.42,.185,.12,.38);
   for(const side of [-1,1])box(THREE,details,'bullpup-guard-rail',metal,side*.07,-.2,length*.3,.022,.025,.29);
   if(/P90/.test(w.name))box(THREE,details,'top-feed-magazine',steel,0,.188,-.08,.13,.035,.47);
  }
  if(sg){
   tube(THREE,details,'shotgun-magazine-tube',steel,0,-.083,-length*.46,.033,length*.68,'z',10);
   if(/DB-2/.test(w.name)){
    for(const x of [-.044,.044])tube(THREE,details,'double-barrel',steel,x,.019,-length*.55,.032,length*.73,'z',12);
    box(THREE,details,'break-action-hinge',steel,0,-.045,.1,.2,.09,.12);
   }else for(let n=0;n<6;n++)box(THREE,details,'pump-forend-rib',rubber,0,-.105,-length*.47+n*.042,.15,.12,.018);
   for(let i=0;i<3;i++){tube(THREE,details,'shell-side-saddle',0xb89d66,-.135,.017,length*.16-i*.054,.019,.1,'y',8);tube(THREE,details,'shell-brass-cap',0xd9bd7b,-.135,-.038,length*.16-i*.054,.02,.012,'y',8)}
  }
  if(smg&&/BIZON/.test(w.name))tube(THREE,details,'helical-magazine',steel,0,-.14,-length*.29,.075,.46,'z',14);
  if(lmg){
   box(THREE,details,'lmg-feed-cover',w.color||0x9b9c84,0,.153,.02,.22,.035,.28);
   const carry=new THREE.Group();carry.position.set(.06,.175,.02);details.add(carry);for(const z of [-.12,.12])box(THREE,carry,'carry-handle-post',metal,0,.028,z,.028,.06,.025);box(THREE,carry,'offset-carry-handle',metal,.075,.06,0,.028,.025,.27);
   for(let i=0;i<5;i++){tube(THREE,details,'linked-cartridge',0xbc9a54,-.15-i*.027,-.07-i*.012,.015,.014,.095,'z',6);box(THREE,details,'belt-link',metal,-.15-i*.027,-.07-i*.012,.05,.03,.012,.02)}
   for(const side of [-1,1])rod(THREE,details,'folded-bipod',steel,[side*.1,-.05,-length*.43],[side*.13,-.12,-length*.82],.016);
  }
  if(sniper){
   for(const side of [-1,1])rod(THREE,details,'sniper-bipod',steel,[side*.08,-.055,-length*.37],[side*.14,-.12,-length*.73],.012);
   const knob=tube(THREE,details,'bolt-action-knob',steel,.183,.043,.18,.025,.056,'x',8);knob.rotation.z=.6;
   if(w.oneShot){ring(THREE,details,'oblivion-barrel-collar',accent,0,.02,-length*.6,.046,.007);box(THREE,details,'single-shot-chamber',steel,.106,.06,.075,.018,.07,.21)}
  }
 }
 const optics=installSights(THREE,rig,details,{height:pistol?.215:sniper?.29:.265,rear:sniper?.22:length*(pistol?.30:.34),front:sniper?-.245:-length*.67,kind:sniper?'scope':'iron',opening:pistol?.06:.075});
 return{detailGroup:details,...optics};
}

export function makeCrossbow(THREE,rig,w){
 const compound=w.mag<=1,span=compound?.76:.62,body=w.color||0x91aba0;
 const frame=new THREE.Group();frame.name=compound?'compound-crossbow':'repeating-crossbow';rig.add(frame);
 box(THREE,frame,'crossbow-receiver',body,0,-.015,.005,.18,.19,.65);
 box(THREE,frame,'bolt-track',steel,0,.105,-.35,.055,.018,1.02);
 for(const side of [-1,1])box(THREE,frame,'bolt-guide-rail',metal,side*.055,.075,-.32,.024,.05,1.05);
 box(THREE,frame,'crossbow-riser',metal,0,-.015,-.64,.35,.14,.13);
 for(const side of [-1,1]){
  const points=[[side*.12,-.025,-.65],[side*.38,-.015,-.72],[side*span,.015,-.55]];
  rod(THREE,frame,'crossbow-limb-root',body,points[0],points[1],.038);
  rod(THREE,frame,'crossbow-limb-tip',body,points[1],points[2],.027);
  rod(THREE,frame,'split-limb',metal,[side*.16,-.081,-.65],[side*(span-.045),-.06,-.55],.016);
  tube(THREE,frame,'limb-cam',steel,side*span,.015,-.55,.083,.035,'y',14);
  tube(THREE,frame,'cam-hub',dark,side*span,.039,-.55,.024,.018,'y',8);
  for(let n=0;n<3;n++)box(THREE,frame,'limb-armor-band',metal,side*(.23+n*.125),.01,-.682+n*.025,.018,.056,.061);
 }
 const string=new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(-span,.035,-.55),new THREE.Vector3(0,.035,.125),new THREE.Vector3(span,.035,-.55)]),new THREE.LineBasicMaterial({color:0xe5ebc8}));string.name='crossbow-string';frame.add(string);
 const cable=new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(-span,-.045,-.55),new THREE.Vector3(0,-.063,-.68),new THREE.Vector3(span,-.045,-.55)]),new THREE.LineBasicMaterial({color:0x687b6b}));cable.name='crossbow-return-cable';frame.add(cable);
 box(THREE,frame,'crossbow-stock',metal,0,-.035,.50,.14,.14,.43);
 box(THREE,frame,'crossbow-butt',body,0,-.105,.72,.19,.28,.08);
 box(THREE,frame,'crossbow-butt-pad',rubber,0,-.105,.765,.20,.29,.025);
 box(THREE,frame,'crossbow-cheekrest',body,0,.069,.48,.16,.055,.32);
 box(THREE,frame,'crossbow-grip',rubber,0,-.218,.20,.12,.30,.14).rotation.x=-.2;
 for(let n=0;n<5;n++)for(const side of [-1,1])box(THREE,frame,'crossbow-grip-rib',steel,side*.062,-.13-n*.035,.204,.008,.011,.12);
 triggerGuard(THREE,frame,.056,.12);
 box(THREE,frame,'crossbow-foregrip',rubber,0,-.16,-.36,.13,.19,.23);
 for(const side of [-1,1])for(let n=0;n<4;n++)box(THREE,frame,'crossbow-foregrip-rib',steel,side*.068,-.15,-.44+n*.045,.008,.085,.012);
 const mag=new THREE.Group();mag.name='crossbow-magazine';mag.position.set(0,-.26,-.13);rig.add(mag);
 if(!compound){
  box(THREE,mag,'bolt-magazine-body',body,0,0,0,.14,.25,.36);
  for(const side of [-1,1])for(let n=0;n<4;n++)box(THREE,mag,'bolt-magazine-rib',steel,side*.074,-.09+n*.053,0,.008,.013,.31);
  box(THREE,mag,'bolt-magazine-base',metal,0,-.133,0,.16,.025,.39);
 }
 const bolt=new THREE.Group();bolt.name='crossbow-cocking-lever';bolt.position.set(0,.107,.06);rig.add(bolt);
 box(THREE,bolt,'cocking-bolt',steel,.13,0,0,.11,.028,.042);box(THREE,bolt,'cocking-handle',rubber,.19,0,0,.035,.055,.068);
 const arrow=new THREE.Group();arrow.name='loaded-crossbow-bolt';rig.add(arrow);
 tube(THREE,arrow,'bolt-shaft',0xd2d4b7,0,.13,-.43,.009,1.06,'z',7);
 const tip=mesh(THREE,arrow,new THREE.ConeGeometry(.027,.11,4),steel,'broadhead');tip.rotation.x=-Math.PI/2;tip.position.set(0,.13,-1.015);
 for(const side of [-1,1])box(THREE,arrow,'bolt-fletching',accent,side*.021,.13,.045,.034,.008,.11).rotation.z=side*.25;
 box(THREE,arrow,'bolt-top-fletching',accent,0,.151,.045,.008,.04,.11);
 const hand=box(THREE,frame,'crossbow-support-hand',rubber,-.065,-.23,-.35,.18,.18,.24);hand.rotation.z=-.13;
 box(THREE,frame,'crossbow-support-sleeve',0x647b5c,-.22,-.35,-.075,.20,.20,.55).rotation.y=-.45;
 box(THREE,frame,'crossbow-trigger-hand',rubber,.055,-.29,.245,.17,.20,.22);
 box(THREE,frame,'crossbow-trigger-sleeve',0x647b5c,.17,-.40,.50,.21,.22,.47).rotation.x=-.2;
 const optics=installSights(THREE,rig,frame,{height:.265,rear:.27,front:-.68,opening:.075});
 rig.userData.crossbow={compound,span:span*2,muzzleZ:-1.08};
 return{mag,bolt,string,arrow,muzzleZ:-1.08,drawHand:new THREE.Object3D(),detailGroup:frame,...optics};
}

// Shapes, rather than palette swaps, identify each weapon at gameplay distance.
function bladePlate(T,p,name,color,points,thickness=.035){
 const shape=new T.Shape();points.forEach(([x,z],i)=>i?shape.lineTo(x,-z):shape.moveTo(x,-z));shape.closePath();
 const g=new T.ExtrudeGeometry(shape,{depth:thickness,bevelEnabled:false});g.rotateX(-Math.PI/2);g.translate(0,-thickness/2,0);
 return mesh(T,p,g,color,name,.8,.27);
}
function addFirearmIdentity(T,rig,p,w){
 const length=(w.cat==='hg'?.47:w.cat==='sr'?1.18:w.cat==='sg'?1.02:w.cat==='smg'?.64:.88)*(.96+(w.id%4)*.025);
 rig.userData.identity=w.cat==='burst'?'bullpup':w.cat;
 if(w.cat==='burst'){
  // Rear-fed bullpup: the magazine sits behind the trigger instead of under the forend.
  const mag=rigMagazine(rig,w,length);if(mag)mag.position.z=.47;
  box(T,p,'bullpup-rear-shell',0xb7a67b,0,-.035,.43,.24,.27,.60);
  for(const side of [-1,1])rod(T,p,'bullpup-thumbhole',dark,[side*.075,-.13,.13],[side*.075,-.27,.45],.024);
  box(T,p,'bullpup-front-grip',dark,0,-.24,-.33,.11,.27,.13).rotation.x=.18;
 }else if(w.cat==='ar'){
  for(const side of [-1,1])rod(T,p,'skeleton-stock-strut',steel,[side*.095,.03,.4],[side*.095,-.06,.83],.022);
  box(T,p,'rifle-vertical-grip',rubber,0,-.22,-.37,.10,.24,.12);
 }else if(w.cat==='smg'){
  // Compact top-feed silhouette and open wire stock.
  const mag=rigMagazine(rig,w,length);if(mag)mag.scale.set(.8,.55,1.5);
  box(T,p,'smg-horizontal-feed',0x8799a4,0,.125,-.04,.22,.06,.50);
  for(const side of [-1,1])rod(T,p,'wire-folding-stock',steel,[side*.13,-.01,.25],[side*.13,-.10,.77],.018);
 }else if(w.cat==='sg'){
  const mag=rigMagazine(rig,w,length);if(mag)mag.visible=false;
  box(T,p,'walnut-shotgun-stock',0x97603c,0,-.035,.72,.18,.24,.48);
  tube(T,p,'wood-pump',0x9f673d,0,-.08,-.43,.09,.29,'z');
 }else if(w.cat==='lmg'){
  const mag=rigMagazine(rig,w,length);if(mag){mag.scale.set(1.35,1.6,1.35);mag.position.x=-.08;}
  tube(T,p,'lmg-perforated-jacket',metal,0,.02,-.62,.085,.55,'z',10,true);
  for(const side of [-1,1])rod(T,p,'deployed-bipod',steel,[side*.08,-.06,-.64],[side*.29,-.42,-.79],.02);
 }else if(w.cat==='sr'){
  const mag=rigMagazine(rig,w,length);if(mag)mag.scale.y=.45;
  tube(T,p,'precision-barrel',steel,0,.02,-1.03,.025,.65,'z',16);
  tube(T,p,'precision-muzzle',dark,0,.02,-1.36,.04,.09,'z');
  box(T,p,'sniper-adjustable-cheek',0x907c65,0,.09,.75,.17,.13,.38);
  box(T,p,'sniper-stock-hook',dark,0,-.18,.93,.17,.12,.12);
 }else if(w.cat==='hg'){
  box(T,p,'pistol-slide',0xa8b2ad,0,.057,-.02,.145,.095,.4);
  for(const side of [-1,1])box(T,p,'pistol-wood-grip-panel',0x8b6347,side*.071,-.24,.13,.01,.21,.115);
 }
}

export function makeMeleeIdentity(T,rig,w){
 const p=new T.Group();p.name='melee-'+w.shape;rig.add(p);rig.userData.identity=w.name;
 const l=w.length||.62,c=w.color||0xc3d3c4,grip=0x493c32;
 const shaft=(length,r=.025,color=grip)=>tube(T,p,'shaft',color,0,0,-length/2,r,length,'z');
 const plate=(name,points,color=c,t=.035)=>bladePlate(T,p,name,color,points,t);
 box(T,p,'wrapped-handle',grip,0,0,.17,.095,.11,.31);
 for(let n=0;n<6;n++)ring(T,p,'handle-wrap',dark,0,0,.04+n*.05,.06,.009);
 if(w.shape==='knife'){
  if(w.id===12)plate('needle-dagger',[[-.034,0],[-.025,-l*.8],[0,-l],[.025,-l*.8],[.034,0]]);
  else {plate('serrated-combat-blade',[[-.085,0],[-.085,-l*.7],[0,-l],[.1,-l*.76],[.095,-l*.5],[.07,-l*.45],[.095,-l*.4],[.07,-l*.35],[.095,-l*.3],[.08,0]]);box(T,p,'blade-fuller',dark,-.025,.022,-l*.37,.022,.006,l*.45);}
  box(T,p,'dagger-guard',steel,0,0,0,w.id===12?.23:.28,.05,.055);
 }else if(w.shape==='curved'){
  if(w.id===13){plate('karambit-hook',[[0,0],[-.12,-.13],[-.13,-.3],[-.03,-l],[.16,-l*.96],[.07,-l*.75],[.025,-.21],[.07,-.05]]);ring(T,p,'karambit-finger-ring',steel,0,0,.39,.085,.019).rotation.x=Math.PI/2;}
  else {plate(w.id===15?'saber-curved-edge':'kukri-belly',[[-.07,0],[-.04,-l*.5],[.06,-l*.88],[.21,-l],[.16,-l*.66],[.08,-l*.35],[.07,0]]);if(w.id===15)rod(T,p,'saber-knuckle-bow',0xb6a55e,[-.12,0,0],[-.12,0,.34],.025);}
 }else if(w.shape==='sword'){
  if(w.id===16){plate('greatsword-broad-blade',[[-.15,0],[-.145,-l*.82],[0,-l],[.145,-l*.82],[.15,0]],c,.05);box(T,p,'greatsword-crossguard',steel,0,0,.015,.62,.06,.09);}
  else {plate('katana-single-edge',[[-.06,0],[-.045,-l*.6],[.02,-l],[.12,-l*.92],[.055,-l*.55],[.045,0]]);tube(T,p,'katana-tsuba',0xb2a066,0,0,.015,.13,.035,'z',14);}
 }else if(w.shape==='rapier'){
  plate('rapier-needle',[[-.022,0],[-.015,-l*.88],[0,-l],[.015,-l*.88],[.022,0]]);
  for(const a of [-.65,.65]){const guard=ring(T,p,'rapier-basket',steel,0,0,.09,.17,.013);guard.rotation.y=a;}
 }else if(w.shape==='axe'||w.shape==='halberd'){
  shaft(l,.032);plate('crescent-axe-head',[[0,-l*.65],[.22,-l*.65],[.45,-l*.85],[.41,-l*1.06],[.18,-l*.94],[0,-l*.92]],c,.07);
  if(w.id===19)plate('double-axe-head',[[0,-l*.65],[-.22,-l*.65],[-.45,-l*.85],[-.41,-l*1.06],[-.18,-l*.94],[0,-l*.92]],c,.07);
  if(w.shape==='halberd'){plate('halberd-spear',[[-.055,-l*.9],[0,-l-.4],[.055,-l*.9]]);plate('halberd-back-hook',[[0,-l*.72],[-.27,-l*.76],[-.31,-l*.98],[-.12,-l*.88],[0,-l*.89]]);}
 }else if(w.shape==='hammer'){
  shaft(l,.04);if(w.id===22){tube(T,p,'heavy-mallet',steel,0,0,-l*.9,.20,.65,'x',10);for(const x of [-.34,.34])tube(T,p,'mallet-striking-face',dark,x,0,-l*.9,.22,.07,'x',10);}
  else {box(T,p,'hammer-face',steel,.18,0,-l*.9,.25,.17,.18);for(const y of [-.045,.045])rod(T,p,'split-hammer-claw',steel,[0,y,-l*.9],[-.22,y,-l*.74],.025);}
 }else if(w.shape==='bat'){
  shaft(l,w.id===24?.045:.055,w.id===24?dark:0xaa8257);
  if(w.id===24)tube(T,p,'baton-side-handle',dark,.13,0,-.13,.036,.28,'x');
  else {const barrel=mesh(T,p,new T.CylinderGeometry(.10,.038,l*.82,14),0xba925f,'baseball-taper',.08,.65);barrel.rotation.x=Math.PI/2;barrel.position.z=-l*.43;}
 }else if(w.shape==='spear'||w.shape==='trident'){
  shaft(l,.028);plate('leaf-spearhead',[[-.015,-l+.1],[-.11,-l-.12],[0,-l-.43],[.11,-l-.12],[.015,-l+.1]]);
  if(w.shape==='trident')for(const side of [-1,1]){rod(T,p,'trident-curved-arm',c,[0,0,-l+.12],[side*.25,0,-l-.12],.025);plate('trident-prong',[[side*.25-.025,-l-.1],[side*.25,-l-.4],[side*.25+.025,-l-.1]]);}
 }else if(w.shape==='scythe'){
  shaft(l,.032);plate('scythe-crescent',[[0,-l+.05],[.2,-l-.12],[.55,-l-.1],[.92,-l+.09],[.63,-l+.04],[.28,-l+.08],[0,-l+.2]]);
 }else if(w.shape==='crowbar'){
  shaft(l,.035,0x984e3e);rod(T,p,'crowbar-bent-neck',steel,[0,0,-l],[-.19,0,-l-.07],.033);for(const y of [-.027,.027])box(T,p,'crowbar-fork',steel,-.2,y,-l+.005,.075,.024,.15);
 }else {shaft(l,.045);for(const z of [-l,.04])tube(T,p,'staff-metal-cap',steel,0,0,z,.065,.15,'z',12);}
 return p;
}

export function makeFantasyIdentity(T,rig,w){
 const p=new T.Group();p.name='fantasy-'+w.id;rig.add(p);rig.userData.identity=w.name;
 const c=w.color,metal=0x283b34;
 if(w.id===30){
  box(T,p,'laser-receiver',metal,0,0,.1,.21,.19,.6);
  for(const side of [-1,1]){rod(T,p,'split-laser-rail',steel,[side*.13,-.02,-.1],[side*.13,-.02,-1.05],.026);box(T,p,'laser-energy-strip',c,side*.13,.015,-.62,.025,.025,.68);}
  box(T,p,'laser-aperture',dark,0,0,-1.02,.22,.15,.09);
 }else if(w.id===31){
  const orb=mesh(T,p,new T.SphereGeometry(.24,18,12),c,'plasma-chamber');orb.position.set(0,-.06,-.3);
  for(const side of [-1,1])rod(T,p,'plasma-cage',metal,[side*.13,.03,.15],[side*.24,-.08,-.54],.045);
  tube(T,p,'plasma-bell',steel,0,-.04,-.66,.16,.26,'z',14,true);
 }else if(w.freeze){
  tube(T,p,'ice-wand-handle',steel,0,-.04,-.1,.05,.7,'z',8);
  const crystal=mesh(T,p,new T.OctahedronGeometry(.21),c,'ice-wand-crystal');crystal.position.set(0,-.1,-.66);crystal.scale.set(.7,1.1,1.7);
  for(const side of [-1,1]){const shard=mesh(T,p,new T.ConeGeometry(.065,.27,5),0xd0f7ff,'ice-satellite');shard.position.set(side*.16,-.08,-.54);shard.rotation.x=-Math.PI/2;}
 }else if(w.id===33){
  box(T,p,'gravity-generator',metal,0,-.06,.15,.29,.25,.36);
  for(const z of [-.25,-.5,-.75])ring(T,p,'gravity-orbit',c,0,-.1,z,z===-.5?.32:.25,.035);
  const orb=mesh(T,p,new T.IcosahedronGeometry(.14),c,'gravity-core');orb.position.set(0,-.1,-.5);
  for(const side of [-1,1])rod(T,p,'gravity-spine',steel,[side*.23,-.1,.1],[side*.23,-.1,-.8],.023);
 }else if(w.id===34){
  for(const y of [-.72,.72]){
   const star=new T.Shape();for(let n=0;n<10;n++){const a=n*Math.PI/5+Math.PI/2,r=n%2?.065:.15;const x=Math.cos(a)*r,sy=Math.sin(a)*r;n?star.lineTo(x,sy):star.moveTo(x,sy)}star.closePath();
   const jewel=mesh(T,p,new T.ExtrudeGeometry(star,{depth:.025,bevelEnabled:false}),c,'star-bow-tip');jewel.position.set(0,y,-.17);
  }
  for(const side of [-1,1])rod(T,p,'star-bow-wing',c,[0,side*.32,-.42],[side*.21,side*.53,-.32],.023);
 }else if(w.id===35){
  box(T,p,'tesla-receiver',metal,0,0,.1,.26,.22,.44);
  for(const side of [-1,1]){tube(T,p,'tesla-electrode',steel,side*.14,-.01,-.49,.04,.83,'z');for(let n=0;n<5;n++)ring(T,p,'tesla-coil',c,side*.14,-.01,-.25-n*.13,.075,.012);}
 }
 return p;
}

export function visibleWeaponBounds(T,root){
 root.updateMatrixWorld(true);const bounds=new T.Box3();root.traverse(o=>{if(!o.isMesh||!o.geometry)return;for(let p=o;p;p=p.parent)if(!p.visible)return;o.geometry.computeBoundingBox();bounds.union(o.geometry.boundingBox.clone().applyMatrix4(o.matrixWorld));});return bounds;
}
