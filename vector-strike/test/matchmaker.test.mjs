import test from 'node:test';
import assert from 'node:assert/strict';
import { Matchmaker,balanceTeams,searchWindow } from '../server/matchmaker.mjs';
const player=(key,level=1,rating=1000,teamSize=1)=>({key,level,rating,teamSize});
test('team assignment finds the smallest average-level gap and then rating gap',()=>{
 for(const levels of [[1,4,2,3],[1,2,3,4,5,6],[1,1,2,2,3,3,4,4]]){const players=levels.map((lv,i)=>player(String(i),lv,1000+i*10));const b=balanceTeams(players);assert.equal(b.a.length,levels.length/2);assert.equal(b.b.length,levels.length/2);let minimum=Infinity;for(let mask=0;mask<(1<<levels.length);mask++){const a=levels.filter((_,i)=>mask&(1<<i)),other=levels.filter((_,i)=>!(mask&(1<<i)));if(a.length===levels.length/2)minimum=Math.min(minimum,Math.abs(a.reduce((x,y)=>x+y,0)/a.length-other.reduce((x,y)=>x+y,0)/other.length))}assert.ok(Math.abs(b.difference-minimum)<1e-8)}
 const b=balanceTeams([player('a',1,800),player('b',1,1400),player('c',1,900),player('d',1,1300)]);assert.equal(b.ratingDifference,0);
});
test('1v1, 2v2, 3v3, and 4v4 queues remain separate and do not start short-handed',()=>{
 const q=new Matchmaker();for(const size of [1,2,3,4]){for(let i=0;i<size*2-1;i++)q.enqueue(player(`${size}-${i}`,1,1000,size));assert.equal(q.takeMatches().length,0);q.enqueue(player(`${size}-last`,1,1000,size));const matches=q.takeMatches();assert.equal(matches.length,1);assert.equal(matches[0].entries.length,size*2);assert.equal(matches[0].teamSize,size)}assert.equal(q.count,0);
});
test('search windows expand with wait time; cancellation and room limits preserve queues',()=>{
 let now=0;const q=new Matchmaker(()=>now);q.enqueue(player('low',1,1000));q.enqueue(player('high',10,1600));assert.equal(q.takeMatches().length,0);now=180000;assert.equal(q.takeMatches().length,1);assert.ok(searchWindow(now).levels>=9);
 q.enqueue(player('a'));q.enqueue(player('b'));q.enqueue(player('c'));q.enqueue(player('d'));assert.equal(q.takeMatches(0).length,0);assert.equal(q.count,4);assert.equal(q.takeMatches(1).length,1);assert.equal(q.count,2);q.cancel('c');q.cancel('d');assert.equal(q.count,0);assert.throws(()=>q.enqueue(player('invalid',1,1000,8)));
});
