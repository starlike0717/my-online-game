import {weapons} from './catalog.js';
export const STARTER_WEAPONS=[0,42,52];
export function normalizeEconomy(value={}){
 const coins=Number.isSafeInteger(value?.coins)?Math.max(0,value.coins):500;
 const owned=[...new Set([...STARTER_WEAPONS,...(Array.isArray(value?.owned)?value.owned:[])])].filter(id=>Number.isInteger(id)&&weapons[id]);
 return {coins,owned,rewards:Array.isArray(value?.rewards)?value.rewards.filter(v=>typeof v==='string').slice(-300):[]};
}
export function weaponPrice(id){const w=weapons[id];if(!w)return Infinity;if(STARTER_WEAPONS.includes(id))return 0;if(w.oneShot)return 2800;return ({ar:600,smg:450,sg:650,sr:1000,lmg:850,hg:250,bow:800,launcher:1200,melee:300}[w.cat]||500)+(id%7)*50}
export function purchase(value,id){const e=normalizeEconomy(value);if(!Number.isInteger(id)||!weapons[id])throw Error('존재하지 않는 무기입니다.');if(e.owned.includes(id))return e;const price=weaponPrice(id);if(e.coins<price)throw Error(`코인이 ${price-e.coins} C 부족합니다.`);return {...e,coins:e.coins-price,owned:e.owned.concat(id)}}
export function credit(value,id,amount){const e=normalizeEconomy(value);if(e.rewards.includes(id))return {economy:e,amount:0};const gain=Math.max(0,Math.floor(amount));return {economy:{...e,coins:e.coins+gain,rewards:e.rewards.concat(id).slice(-300)},amount:gain}}
export const waveReward=wave=>100+Math.min(100,Math.max(1,wave))*25;
export const winReward=size=>300+Math.max(1,Math.min(4,size))*50;
export function publicEconomy(value){const {coins,owned}=normalizeEconomy(value);return {coins,owned}}
