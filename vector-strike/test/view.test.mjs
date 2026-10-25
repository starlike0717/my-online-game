import test from 'node:test';
import assert from 'node:assert/strict';
import {cameraPosition,showViewWeapon} from '../dist/view.js';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';
import {weapons} from '../dist/catalog.js';
const source=await readFile(new URL('../dist/game.js',import.meta.url),'utf8');
function body(name){const a=source.indexOf('function '+name+'('),b=source.indexOf('\nfunction ',a+1);return source.slice(a,b)}
test('third-person camera stays on the player side of walls and ADS clears the center in both modes',()=>{const eye=[0,1.7,0],back=cameraPosition(eye,0,0);assert.ok(back[2]>3);const blocked=cameraPosition(eye,0,0,[{min:[-3,0,1.8],max:[3,4,2]}]);assert.ok(blocked[2]<1.8&&blocked[2]>1);for(const third of [true,false])assert.equal(showViewWeapon(third,.99),false);assert.equal(showViewWeapon(false,0),true);assert.equal(showViewWeapon(true,0),false)});
test('equipment normalizes saved four-slot loadouts down to three owned categories',()=>{const c=vm.createContext({weapons,quickSlots:[51,43,52,0],selectedWeapon:72,services:{canUseWeapon:id=>[0,42,52].includes(id)},storage:{set(){}}});new vm.Script(['slotFor','reconcileLoadout'].map(body).join('\n')).runInContext(c);c.reconcileLoadout();assert.deepEqual(Array.from(c.quickSlots),[0,42,52]);assert.equal(c.selectedWeapon,0)});
test('F performs one quick melee attack and restores the previous weapon after the swing',()=>{const hits=[],c=vm.createContext({combat:true,paused:false,onlineDead:false,totalTime:0,quickMeleeReady:0,selectedWeapon:0,inspectedWeapon:0,quickSlots:[0,42,52],quickMeleeAction:null,services:{canUseWeapon:()=>true},equipQuickSlot(index){c.selectedWeapon=c.quickSlots[index]},shoot(){hits.push(c.selectedWeapon)},createWeapon(){}});new vm.Script(['quickMelee','updateQuickMelee'].map(body).join('\n')).runInContext(c);c.quickMelee();assert.equal(c.selectedWeapon,52);c.totalTime=.3;c.updateQuickMelee();assert.deepEqual(hits,[52]);c.totalTime=.73;c.updateQuickMelee();assert.equal(c.selectedWeapon,0);assert.equal(c.quickMeleeAction,null)});
