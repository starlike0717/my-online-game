import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from '../dist/vendor/three.module.js';
import {weapons} from '../dist/catalog.js';
import {addWeaponDetails,makeCrossbow} from '../dist/weapon-models.js';

function parts(rig){const result=[];rig.traverse(o=>{if(o.geometry)result.push(o)});return result}
function named(rig,name){return rig.getObjectByName(name)}
function assertFiniteModel(rig,label){
 rig.updateMatrixWorld(true);
 const bounds=new THREE.Box3().setFromObject(rig);
 assert.ok([...bounds.min.toArray(),...bounds.max.toArray()].every(Number.isFinite),`${label} bounds`);
 let vertices=0;
 for(const part of parts(rig)){
  const positions=part.geometry.getAttribute('position');vertices+=positions.count;
  assert.ok([...positions.array].every(Number.isFinite),`${label}: ${part.name}`);
 }
 assert.ok(vertices>50,`${label} has actual geometry`);
 assert.ok(vertices<45000,`${label} geometry budget`);
}
test('all firearm furniture is finite, provides open sight references and stays inside weapon bounds',()=>{
 for(const w of weapons.filter(w=>!w.mechanic)){
  const rig=new THREE.Group();rig.scale.setScalar(.7);const detail=addWeaponDetails(THREE,rig,w);
  assertFiniteModel(rig,w.name);assert.ok(named(rig,'trigger-guard-bottom'),w.name);assert.ok(named(rig,'ejection-port'),w.name);
  assert.deepEqual(detail.sights,rig.userData.sights,w.name);
  const {rear,front}=detail.sights;assert.ok(rear[2]>front[2],w.name);assert.equal(rear[0],front[0]);assert.equal(rear[1],front[1]);
  assert.equal(rear[1],w.cat==='hg'?.215:w.cat==='sr'?.29:.265,w.name);
  assert.ok(new THREE.Box3().setFromObject(rig).getSize(new THREE.Vector3()).length()<3,w.name);
  if(w.cat==='sr'){
   assert.equal(detail.sights.kind,'scope');assert.equal(named(rig,'scope-tube').geometry.parameters.openEnded,true);
   assert.ok(named(rig,'scope-rear-rim'));assert.ok(named(rig,'scope-front-rim'));
  }else{assert.ok(named(rig,'open-rear-sight'));assert.ok(named(rig,'front-post-sight'))}
 }
});

test('weapon families retain recognizable parts instead of a single shared rifle silhouette',()=>{
 const check=(fragment,part)=>{const w=weapons.find(w=>w.name.includes(fragment));assert.ok(w,fragment);const rig=new THREE.Group();addWeaponDetails(THREE,rig,w);assert.ok(named(rig,part),`${w.name}: ${part}`)};
 check('권총','pistol-suppressor');check('산탄총','pump-forend-rib');check('경기관총','linked-cartridge');check('저격소총','single-shot-chamber');
 for(const id of [6,7]){const rig=new THREE.Group();addWeaponDetails(THREE,rig,weapons[id]);assertFiniteModel(rig,weapons[id].name)}
});

test('single-shot and repeating crossbows have wide limbs, taut strings, a visible bolt and finite details',()=>{
 const base={id:73,cat:'crossbow',mechanic:'bolt',name:'XB TEST',color:0x89a49a};
 let compoundWidth,repeatingWidth;
 for(const magSize of [1,4]){
  const rig=new THREE.Group(),w={...base,mag:magSize},model=makeCrossbow(THREE,rig,w);assertFiniteModel(rig,w.name);
  assert.equal(model.string.isLine,true);assert.equal(model.arrow.isGroup,true);assert.equal(model.bolt.isGroup,true);assert.equal(model.mag.isGroup,true);
  assert.ok(named(rig,'crossbow-limb-root'));assert.ok(named(rig,'crossbow-limb-tip'));assert.ok(named(rig,'limb-cam'));
  assert.ok(named(rig,'bolt-track'));assert.ok(named(rig,'broadhead'));assert.ok(named(rig,'bolt-fletching'));
  const string=model.string.geometry.getAttribute('position');assert.equal(string.count,3);assert.ok(string.getX(0)<-.5&&string.getX(2)>.5);assert.ok(string.getZ(1)>string.getZ(0));
  assert.ok(model.muzzleZ<-1);assert.ok(rig.userData.sights.front[2]<-.6);assert.equal(rig.userData.sights.kind,'iron');
  const width=new THREE.Box3().setFromObject(rig).getSize(new THREE.Vector3()).x;
  if(magSize===1){compoundWidth=width;assert.equal(named(rig,'bolt-magazine-body'),undefined)}else{repeatingWidth=width;assert.ok(named(rig,'bolt-magazine-body'))}
 }
 assert.ok(compoundWidth>1.6);assert.ok(repeatingWidth<compoundWidth);
});

test('each rig owns geometry while cached opaque materials survive the existing weapon disposal traversal',()=>{
 const a=new THREE.Group(),b=new THREE.Group();
 makeCrossbow(THREE,a,{id:73,mag:1});makeCrossbow(THREE,b,{id:73,mag:1});
 const aParts=parts(a),bParts=parts(b),bGeometries=new Set(bParts.map(p=>p.geometry));
 assert.ok(aParts.every(p=>!bGeometries.has(p.geometry)));
 const opaque=aParts.find(p=>p.isMesh).material;assert.equal(opaque.userData.sharedWeaponDetail,true);assert.ok(bParts.some(p=>p.material===opaque));
 let geometryDisposed=0,linesDisposed=0,opaqueDisposed=0;
 aParts.forEach(p=>p.geometry.addEventListener('dispose',()=>geometryDisposed++));
 const lines=aParts.filter(p=>p.isLine);lines.forEach(p=>p.material.addEventListener('dispose',()=>linesDisposed++));opaque.addEventListener('dispose',()=>opaqueDisposed++);
 a.traverse(o=>{o.geometry?.dispose();if(o.material?.transparent||o.isLine)o.material?.dispose()});
 assert.equal(geometryDisposed,aParts.length);assert.equal(linesDisposed,lines.length);assert.equal(opaqueDisposed,0);
});
