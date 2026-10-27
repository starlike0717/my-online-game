// Articulated visual rigs; movement and hit detection remain authoritative.
export function solveLimb(THREE,root,target,pole,upperLength,lowerLength){
 const axis=target.clone().sub(root),distance=Math.max(.0001,axis.length());axis.divideScalar(distance);
 const reach=Math.min(upperLength+lowerLength-.0001,Math.max(Math.abs(upperLength-lowerLength)+.0001,distance));
 const along=(upperLength*upperLength-lowerLength*lowerLength+reach*reach)/(2*reach),height=Math.sqrt(Math.max(0,upperLength*upperLength-along*along));
 const bend=pole.clone().sub(root);bend.addScaledVector(axis,-bend.dot(axis));if(bend.lengthSq()<1e-8){bend.set(0,1,0);bend.addScaledVector(axis,-bend.dot(axis));if(bend.lengthSq()<1e-8)bend.set(1,0,0)}bend.normalize();
 return {elbow:root.clone().addScaledVector(axis,along).addScaledVector(bend,height),end:root.clone().addScaledVector(axis,reach)};
}
function segment(THREE,parent,material,width){const mesh=new THREE.Mesh(new THREE.BoxGeometry(width,1,width*.95),material);mesh.castShadow=true;parent.add(mesh);return mesh}
function placeSegment(THREE,mesh,a,b){const delta=b.clone().sub(a);mesh.position.copy(a).add(b).multiplyScalar(.5);mesh.scale.y=delta.length();mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),delta.normalize())}
export function addViewArms(THREE,rig,parts,material){
 const arms=[];for(const[key,side]of [['supportHand',-1],['triggerHand',1]]){
  const hand=parts[key];if(!hand)continue;
  const upper=segment(THREE,rig,material,.17),lower=segment(THREE,rig,material,.16);upper.name=key+'-upper-arm';lower.name=key+'-forearm';arms.push({hand,side,upper,lower});
 }rig.userData.viewArms=arms;updateViewArms(THREE,rig);
}
export function updateViewArms(THREE,rig){for(const arm of rig.userData.viewArms||[]){
 const root=new THREE.Vector3(arm.side*.43,-.58,.85),target=arm.hand.position.clone(),pole=new THREE.Vector3(arm.side*.80,-.72,.28);
 const {elbow,end}=solveLimb(THREE,root,target,pole,.62,.70);placeSegment(THREE,arm.upper,root,elbow);placeSegment(THREE,arm.lower,elbow,end);
}}
export function articulateAgent(THREE,g,{hips,torso,head,legs,arms,gun}){
 const pelvis=new THREE.Group(),spine=new THREE.Group(),neck=new THREE.Group();pelvis.name='pelvis-joint';spine.name='spine-joint';neck.name='neck-joint';
 pelvis.position.set(0,.9,0);spine.position.set(0,.26,0);neck.position.set(0,.64,0);
 const children=g.children.slice();g.add(pelvis);pelvis.add(spine);spine.add(neck);g.updateMatrixWorld(true);
 for(const o of children){if(legs.includes(o))pelvis.attach(o);else if(o===head||o.isMesh&&o.position.y>1.75)neck.attach(o);else if(o===hips)pelvis.attach(o);else spine.attach(o)}
 const armLinks=arms.map((a,i)=>{
  const material=a.children[0].material;for(const child of [...a.children]){a.remove(child);child.geometry?.dispose()}
  const upper=segment(THREE,spine,material,.21),lower=segment(THREE,spine,material,.18),hand=new THREE.Mesh(new THREE.BoxGeometry(.17,.16,.19),material);spine.add(hand);
  return{shoulder:a,side:i===0?-1:1,upper,lower,hand};
 });return {pelvis,spine,neck,armLinks};
}
export function poseAgentRig(THREE,g,pose){
 const d=g.userData,r=d.skeleton;if(!r)return;
 r.pelvis.position.set(pose.hipsPosition[0],.9+pose.hipsPosition[1],pose.hipsPosition[2]);
 r.spine.rotation.set(...pose.torsoRotation);r.neck.rotation.set(pose.headRotation[0]-pose.torsoRotation[0]*.85,pose.headRotation[1],pose.headRotation[2]);d.gun.rotation.x-=pose.torsoRotation[0];
 r.spine.position.y=.26+pose.torsoPosition[1];r.neck.position.set(pose.headPosition[0],.64+pose.headPosition[1]-Math.max(0,-pose.hipsPosition[1]-.4)*.30,pose.headPosition[2]);
 g.updateMatrixWorld(true);
 const footBounds=new THREE.Box3(),rootY=g.getWorldPosition(new THREE.Vector3()).y,scaleY=g.getWorldScale(new THREE.Vector3()).y;let lowest=Infinity;for(const leg of d.legs){if(leg.userData.foot)lowest=Math.min(lowest,footBounds.setFromObject(leg.userData.foot).min.y)}if(lowest<rootY){r.pelvis.position.y+=(rootY-lowest)/scaleY;g.updateMatrixWorld(true)}
 for(const a of r.armLinks){
  const grip=a.side<0?new THREE.Vector3(-.11,-.09,0):new THREE.Vector3(.04,-.16,-.29);
  if(a.side<0){grip.x-=pose.reload*.08;grip.y-=pose.reload*.20;grip.z-=pose.reload*.15}
  d.gun.localToWorld(grip);r.spine.worldToLocal(grip);
  const root=a.shoulder.position.clone(),pole=root.clone().add(new THREE.Vector3(a.side*.55,-.5,-.08));
  const {elbow,end}=solveLimb(THREE,root,grip,pole,.44,.62);placeSegment(THREE,a.upper,root,elbow);placeSegment(THREE,a.lower,elbow,end);a.hand.position.copy(end);a.hand.quaternion.copy(d.gun.quaternion);
 }
}
