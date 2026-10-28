import test from 'node:test';
import assert from 'node:assert/strict';
import {normalizeEconomy,purchase,credit,weaponPrice,waveReward,winReward} from '../dist/economy.js';
import {weapons} from '../dist/catalog.js';
import {damageForHit,MAX_HEALTH} from '../dist/combat.js';
test('starter inventory, purchases, insufficient funds, and duplicate buys conserve currency',()=>{const start=normalizeEconomy();assert.equal(start.coins,500);assert.deepEqual(start.owned,[0,5,10]);const item=11,bought=purchase(start,item);assert.equal(bought.coins,500-weaponPrice(item));assert.ok(bought.owned.includes(item));assert.deepEqual(purchase(bought,item),bought);assert.throws(()=>purchase(start,3),/부족/);assert.throws(()=>purchase(start,'11'),/존재/);assert.equal(start.coins,500)});
test('wave and match credits are idempotent and can pay for a one-shot weapon',()=>{let e=normalizeEconomy(),reward=credit(e,'wave:r:1',waveReward(1));assert.equal(reward.amount,125);assert.equal(credit(reward.economy,'wave:r:1',125).amount,0);e=credit(reward.economy,'match:win',winReward(3)).economy;assert.equal(e.coins,1075);e=credit(e,'test-budget',3000).economy;e=purchase(e,3);assert.ok(e.owned.includes(3));const w=weapons[3];assert.equal(w.mag,1);assert.ok(w.reload>=1.6);assert.ok(damageForHit(w,false,150)>MAX_HEALTH)});
