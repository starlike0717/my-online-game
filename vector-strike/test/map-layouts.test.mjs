import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from '../dist/vendor/three.module.js';
import {maps,mapBounds,buildMapObjects} from '../dist/map-layouts.js';

const spawns=[[0,21],[-14,21],[13,21],[-23,14],[0,-23],[-23,-3],[23,-4],[12,-22],[11,12],[-11,13],[0,19]];
function overlaps(x,z,r,b,height=2){return x+r>b.min[0]&&x-r<b.max[0]&&z+r>b.min[2]&&z-r<b.max[2]&&b.max[1]>.15&&b.min[1]<height-.12}
function fixture(index){
 const group=new THREE.Group(),colliders=[],material=new THREE.MeshStandardMaterial();
 const box=(parent,x,y,z,w,h,d,color,options={})=>{const mesh=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),material);mesh.position.set(x,y,z);parent.add(mesh);if(options.collision)colliders.push({min:[x-w/2,y-h/2,z-d/2],max:[x+w/2,y+h/2,z+d/2]});return mesh};
 const cylinder=(parent,x,y,z,r1,r2,h,color,segments=12)=>{const mesh=new THREE.Mesh(new THREE.CylinderGeometry(r1,r2,h,segments),material);mesh.position.set(x,y,z);parent.add(mesh);return mesh};
 const result=buildMapObjects(THREE,group,index,{box,cylinder,mat:()=>material,wallText(){}});return{group,colliders,result};
}

test('four maps have distinct themes and collision counts, with a truly empty fourth arena',()=>{
 assert.equal(maps.length,10);assert.equal(new Set(maps.map(m=>m.id)).size,10);
 assert.deepEqual(maps.map(m=>m.id),['construction','battlefield','bridge','open']);
 for(const m of maps)for(const key of ['id','name','ko','desc','tag','coords','sky','fog','ground','wall','accent','light','sun'])assert.ok(m[key]!==undefined,`${m.id}.${key}`);
 const counts=maps.map((_,i)=>mapBounds(i).length);assert.equal(new Set(counts).size,4);assert.ok(counts[0]>counts[1]&&counts[1]>counts[2]);assert.equal(counts[3],4);
 for(const b of mapBounds(3))assert.ok(b.min[0]<=-27||b.max[0]>=27||b.min[2]<=-27||b.max[2]>=27);
});

test('visible collision boxes exactly match the shared authoritative bounds for every map',()=>{
 for(let index=0;index<4;index++){
  const {group,colliders,result}=fixture(index);assert.deepEqual(colliders,mapBounds(index),maps[index].name);assert.equal(result.colliderCount,colliders.length);assert.equal(result.internalCount,index===3?0:colliders.length-4);
  group.updateMatrixWorld(true);group.traverse(o=>{if(o.geometry){const a=o.geometry.getAttribute('position');assert.ok([...a.array].every(Number.isFinite),`${maps[index].name}: finite geometry`)}});
 }
});

test('all existing team, regular and offline spawns have a clear radius of one metre',()=>{
 for(let index=0;index<4;index++)for(const [x,z]of spawns)assert.equal(mapBounds(index).some(b=>overlaps(x,z,1,b)),false,`${maps[index].name} spawn ${x},${z}`);
});

test('spawn points share a connected route around ground obstacles and bridge has a clear centre lane',()=>{
 for(let index=0;index<4;index++){
  const blocks=mapBounds(index),valid=(x,z)=>Math.abs(x)<=26&&Math.abs(z)<=26&&!blocks.some(b=>overlaps(x,z,.4,b));
  const pending=[[0,19]],seen=new Set(['0,19']);
  for(let n=0;n<pending.length;n++){const [x,z]=pending[n];for(const [dx,dz]of [[1,0],[-1,0],[0,1],[0,-1]]){const a=x+dx,b=z+dz,key=`${a},${b}`;if(!seen.has(key)&&valid(a,b)){seen.add(key);pending.push([a,b])}}}
  for(const [x,z]of spawns)assert.ok(seen.has(`${x},${z}`),`${maps[index].name}: reachable ${x},${z}`);
 }
 for(let z=-25;z<=25;z++)assert.equal(mapBounds(2).some(b=>overlaps(0,z,.7,b)),false,`bridge centre lane at ${z}`);
});

test('bounds are finite, stay within the arena and cannot be mutated across callers',()=>{
 for(let index=0;index<4;index++){
  const a=mapBounds(index),b=mapBounds(index);assert.deepEqual(a,b);a[0].min[0]=999;assert.notDeepEqual(a,mapBounds(index));
  for(const box of b){assert.ok([...box.min,...box.max].every(Number.isFinite));for(let axis=0;axis<3;axis++)assert.ok(box.min[axis]<box.max[axis]);for(const axis of [0,2])assert.ok(box.min[axis]>=-28&&box.max[axis]<=28)}
 }
});
