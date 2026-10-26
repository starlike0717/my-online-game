export const categories=[{id:'all',name:'전체'},{id:'ar',name:'돌격소총',en:'ASSAULT RIFLE'},{id:'smg',name:'기관단총',en:'SUBMACHINE GUN'},{id:'sg',name:'산탄총',en:'SHOTGUN'},{id:'sr',name:'저격소총',en:'SNIPER RIFLE'},{id:'lmg',name:'경기관총',en:'LIGHT MACHINE GUN'},{id:'hg',name:'권총',en:'SIDEARM'}];
const groups={
 ar:{names:['VX-01 PHANTOM','AR-7 VANGUARD','MK-18 SENTINEL','R-301 TALON','AK-12 NOMAD','SCAR ECLIPSE','FAMAS RECON','AUG SPECTRE','M4A1 STRIKER','G36 OVERWATCH'],damage:27,rate:10,mag:30,spread:.009,reload:1.8,recoil:.022,pellets:1,speed:1,color:0xc9c6ac},
 smg:{names:['MP-9 VIPER','VECTOR KINETIC','P90 PULSE','UMP-45 SHADOW','MP5 GHOST','BIZON SWARM','MAC-11 FRENZY','CX-9 FALCON','KRISS OVERDRIVE','MP7 SWITCH'],damage:18,rate:15,mag:35,spread:.019,reload:1.4,recoil:.014,pellets:1,speed:1.12,color:0x90aaa2},
 sg:{names:['SG-8 BREACHER','M870 JUDGEMENT','AA-12 TEMPEST','SPAS-12 WARDEN','KSG RAMPART','M1014 HAVOC','SAIGA THUNDER','DB-2 OUTLAW'],damage:13,rate:1.3,mag:8,spread:.065,reload:2.2,recoil:.065,pellets:8,speed:.97,color:0x9c927f},
 sr:{names:['AWP HORIZON','M82 TITAN','SVD LONGSHOT','L96 SILENCE','SCOUT PATHFINDER','M200 INTERVENTION','DMR-14 ORACLE','RS-50 ZENITH'],damage:97,rate:.9,mag:5,spread:.0015,reload:2.6,recoil:.075,pellets:1,speed:.88,color:0xa2ac8b},
 lmg:{names:['M249 IRONCLAD','PKM DEVASTATOR','RPK FORTRESS','MG-42 REAPER','M60 JUGGERNAUT','LSAT MONOLITH'],damage:30,rate:11,mag:80,spread:.022,reload:3.6,recoil:.028,pellets:1,speed:.8,color:0x9c9e8f},
 hg:{names:['USP-9 WHISPER','DE-50 REGENT','G18 STINGER','P226 RANGER','M1911 CLASSIC','R-6 PEACEMAKER','FN-57 NEEDLE','P320 ACE'],damage:34,rate:4.5,mag:14,spread:.013,reload:1.1,recoil:.038,pellets:1,speed:1.15,color:0xaaa599}
};
// Hand-tuned profiles: damage per bullet/pellet, head multiplier, shots/sec, magazine.
const profiles={
 ar:[[26,1.8,9.5,30],[29,1.75,8.7,28],[24,1.9,11,32],[22,1.8,12,30],[34,1.65,7.2,25],[32,1.75,7.8,24],[27,1.85,10.5,27],[28,1.8,9,30],[25,1.9,10,30],[30,1.7,8.4,30]],
 smg:[[18,1.6,14,32],[16,1.65,18,28],[17,1.6,15,50],[25,1.6,8.5,25],[20,1.7,12,30],[19,1.55,13,60],[14,1.5,20,32],[21,1.65,11,30],[15,1.7,19,26],[22,1.6,10.8,30]],
 sg:[[12,1.4,1.4,8],[14,1.5,1.05,6],[10,1.35,3.2,20],[13,1.45,1.6,8],[9,1.4,1.2,14],[11,1.4,2.1,8],[10,1.35,3.6,12],[16,1.5,.85,2]],
 sr:[[95,2, .85,5],[110,1.6,.65,5],[58,1.85,2.3,10],[100,1.9,.8,5],[70,2.1,1.3,8],[105,1.85,.72,5],[64,1.8,2.1,12],[92,2.2,.95,6]],
 lmg:[[29,1.6,10,100],[37,1.55,7.5,75],[33,1.65,8.5,60],[23,1.5,16,100],[39,1.6,6.8,60],[28,1.7,11,80]],
 hg:[[30,1.9,5.5,15],[60,1.8,2.2,7],[21,1.6,13,20],[33,1.85,5,15],[42,1.8,3.8,8],[64,1.75,1.9,6],[28,2,6.5,20],[35,1.8,4.8,17]]
};
const ranges={ar:[22,75,.62],smg:[12,45,.42],sg:[7,32,.18],sr:[65,130,.85],lmg:[25,85,.65],hg:[16,55,.55]};
const handling={ar:[.2,13,.055],smg:[.14,17,.038],sg:[.23,10,.105],sr:[.32,8,.13],lmg:[.3,11,.075],hg:[.12,15,.065]};
const reserves={ar:[150,140,160,180,125,120,162,150,180,150],smg:[192,168,200,150,180,240,224,180,156,180],sg:[40,36,60,48,56,48,60,30],sr:[25,20,50,30,40,25,48,30],lmg:[200,225,240,300,180,240],hg:[90,42,120,75,56,36,100,85]};
export const weapons=[];
for(const [cat,g]of Object.entries(groups))g.names.forEach((name,i)=>{
 const [damage,headMultiplier,rate,mag]=profiles[cat][i],range=ranges[cat],feel=handling[cat];
 const auto=['ar','smg','lmg'].includes(cat)||(cat==='sg'&&(i===2||i===6))||(cat==='hg'&&i===2);
 weapons.push({...g,id:weapons.length,name,cat,damage,headMultiplier,rate,mag,auto,reserve:reserves[cat][i],
  pellets:cat==='sg'?[8,9,8,8,12,8,8,10][i]:1,
  spread:g.spread*(.8+(i%3)*.2),reload:g.reload+(i%3)*.13,
  recoil:g.recoil*(.82+(i%4)*.13),rangeStart:range[0]+(i%3)*2,rangeEnd:range[1]+(i%4)*3,minDamage:range[2],
  adsTime:feel[0]+(i%3)*.015,recovery:feel[1],kick:feel[2]*(.9+(i%3)*.1),sideRecoil:g.recoil*(.18+(i%3)*.08),color:g.color
 });
});
// Keep the existing special IDs stable for saved loadouts.
categories.push({id:'bow',name:'활',en:'CHARGE BOW'},{id:'launcher',name:'발사기',en:'ROCKET LAUNCHER'},{id:'melee',name:'근접 무기',en:'MELEE'});
const specialDefaults={pellets:1,auto:false,spread:0,rangeStart:50,rangeEnd:130,minDamage:.75,adsTime:.2,recovery:12,sideRecoil:0,color:0xb8c893};
weapons.push(
 {...specialDefaults,id:50,name:'CB-1 WINDRUNNER',cat:'bow',mechanic:'arrow',damage:80,headMultiplier:1.8,rate:1.2,mag:1,reserve:24,reload:.55,recoil:.012,kick:.045,speed:1.1,chargeTime:.85,projectileSpeed:62,gravity:3},
 {...specialDefaults,id:51,name:'RL-1 COMET',cat:'launcher',mechanic:'rocket',damage:105,headMultiplier:1,rate:.7,mag:1,reserve:6,reload:2.6,recoil:.075,kick:.14,speed:.85,projectileSpeed:30,gravity:0,blastRadius:5,splashDamage:80},
 {...specialDefaults,id:52,name:'KN-1 SWIFT',ko:'전술 단검',shape:'knife',cat:'melee',mechanic:'melee',damage:45,headMultiplier:1.5,rate:2,mag:1,reserve:0,reload:0,recoil:.035,kick:.07,speed:1.25,rangeStart:2.5,rangeEnd:2.6,minDamage:1,reach:2.5,auto:true}
);
// name, Korean name, silhouette, body damage, head multiplier, swings/sec, reach, movement, length
const meleeProfiles=[
 ['KN-2 FANG','커브 나이프','curved',38,1.6,2.5,2.1,1.3,.58],
 ['KN-3 STILETTO','스틸레토','knife',42,1.7,2.2,2.3,1.28,.72],
 ['KN-4 KARAMBIT','카람빗','curved',35,1.8,2.8,1.9,1.32,.46],
 ['SW-1 RONIN','카타나','sword',62,1.4,1.35,3.1,1.12,1.1],
 ['SW-2 SABRE','세이버','curved',54,1.5,1.6,2.9,1.16,.95],
 ['SW-3 CLAYMORE','대검','sword',85,1.3,.85,3.4,.95,1.35],
 ['SW-4 RAPIER','레이피어','rapier',50,1.8,1.7,3.3,1.18,1.2],
 ['AX-1 HATCHET','손도끼','axe',58,1.45,1.55,2.4,1.17,.72],
 ['AX-2 VIKING','전투 도끼','axe',75,1.35,1.05,2.9,1.02,1],
 ['AX-3 HALBERD','할버드','halberd',80,1.3,.9,3.8,.92,1.45],
 ['HM-1 IMPACT','전술 망치','hammer',65,1.3,1.3,2.4,1.08,.72],
 ['HM-2 TITAN','대형 해머','hammer',95,1.2,.7,2.9,.88,1.1],
 ['BT-1 SLUGGER','야구 배트','bat',48,1.5,1.8,2.8,1.2,1.05],
 ['BT-2 RIOT','경찰봉','bat',32,1.6,3,2.2,1.27,.68],
 ['SP-1 LANCER','전투 창','spear',57,1.7,1.25,4.1,1.05,1.5],
 ['SP-2 TRIDENT','삼지창','trident',68,1.4,1,3.9,1,1.4],
 ['ST-1 MONK','봉','staff',40,1.5,2.1,3.5,1.22,1.45],
 ['SC-1 REAPER','낫','scythe',72,1.4,1.1,3.6,1.03,1.3],
 ['CB-1 BREACH','쇠지렛대','crowbar',46,1.55,1.9,2.6,1.23,.86]
];
for(const [name,ko,shape,damage,headMultiplier,rate,reach,speed,length]of meleeProfiles)weapons.push({...weapons[52],id:weapons.length,name,ko,shape,damage,headMultiplier,rate,reach,speed,length,rangeStart:reach,rangeEnd:reach+.1,swingTime:Math.min(.48,.7/rate),color:0x9eabb5});

weapons.push({...weapons[28],id:weapons.length,name:'OS-1 OBLIVION',damage:240,headMultiplier:1.3,rate:.45,mag:1,reserve:5,reload:3.8,speed:.78,rangeStart:80,rangeEnd:160,minDamage:.9,oneShot:true});

// Shared, readable abilities for all twenty melee weapons. IDs stay stable.
const meleeTraits=[
 {kind:'jump',title:'에어 스텝',extraJumps:1,backMultiplier:1.5},
 {kind:'heal',title:'흡혈',heal:18,cooldown:3,backMultiplier:1.7},
 {kind:'backstab',title:'암살',backstab:true,backMultiplier:2},
 {kind:'backstab',title:'그림자 처형',backstab:true,backMultiplier:2},
 {kind:'jump',title:'공중 베기',extraJumps:1,backMultiplier:1.6},
 {kind:'heal',title:'생명 베기',heal:25,cooldown:4,backMultiplier:1.8},
 {kind:'stun',title:'충격 베기',stun:.65,cooldown:5,backMultiplier:1.5},
 {kind:'backstab',title:'급소 찌르기',backstab:true,backMultiplier:2},
 {kind:'ammo',title:'탄약 회수',ammoFraction:.2,cooldown:8,backMultiplier:1.7},
 {kind:'heal',title:'전사의 회복',heal:35,cooldown:5,backMultiplier:1.8},
 {kind:'stun',title:'발목 묶기',stun:.75,cooldown:6,backMultiplier:1.6},
 {kind:'stun',title:'충격파',stun:.8,cooldown:6,backMultiplier:1.6},
 {kind:'stun',title:'타이탄의 강타',stun:1,cooldown:7,backMultiplier:1.5},
 {kind:'ammo',title:'보급 타격',ammoFraction:.25,cooldown:8,backMultiplier:1.7},
 {kind:'stun',title:'전기 충격',stun:.5,cooldown:4,backMultiplier:1.6},
 {kind:'ammo',title:'보급 찌르기',ammoFraction:.2,cooldown:8,backMultiplier:1.8},
 {kind:'stun',title:'속박',stun:.8,cooldown:6,backMultiplier:1.7},
 {kind:'jump',title:'구름 걷기',extraJumps:1,backMultiplier:1.6},
 {kind:'heal',title:'영혼 수확',heal:30,cooldown:4.5,backMultiplier:1.8},
 {kind:'ammo',title:'보급품 해체',ammoFraction:.3,cooldown:9,backMultiplier:1.7}
];
weapons.filter(w=>w.mechanic==='melee').forEach((w,i)=>{w.perk=meleeTraits[i];w.backMultiplier=w.perk.backMultiplier;w.backstab=w.perk.backstab===true;w.extraJumps=w.perk.extraJumps||0});

// Sidearm mobility stays tied to the equipped weapon; existing IDs and prices stay stable.
const sidearmMobility=[
 {title:'전술 대시',dash:{speed:20,duration:.18,cooldown:4.5}},
 {title:'리젠트 에어 스텝',extraJumps:1},
 {title:'스팅어 대시',dash:{speed:22,duration:.18,cooldown:5}},
 {title:'레인저 에어 스텝',extraJumps:1},
 {title:'클래식 돌진',dash:{speed:21,duration:.2,cooldown:5}},
 {title:'피스메이커 에어 스텝',extraJumps:1},
 {title:'니들 기동술',extraJumps:1,dash:{speed:22,duration:.2,cooldown:5.5}},
 {title:'에이스 기동술',extraJumps:1,dash:{speed:20,duration:.2,cooldown:5}}
];
weapons.filter(w=>w.cat==='hg').forEach((w,i)=>{w.mobility=sidearmMobility[i];w.extraJumps=w.mobility.extraJumps||0;w.dash=w.mobility.dash});

categories.push({id:'crossbow',name:'석궁',en:'CROSSBOW'});
weapons.push(
 {...weapons[50],id:73,name:'XB-1 ARBALEST',ko:'컴파운드 석궁',cat:'crossbow',mechanic:'bolt',crossbow:true,damage:82,headMultiplier:1.9,rate:1.05,mag:1,reserve:18,reload:1.45,speed:1.05,projectileSpeed:88,gravity:2.2,rangeStart:35,rangeEnd:100,minDamage:.75,color:0x91a89c},
 {...weapons[50],id:74,name:'XB-4 REPEATER',ko:'연발 석궁',cat:'crossbow',mechanic:'bolt',crossbow:true,damage:48,headMultiplier:1.7,rate:2.2,mag:4,reserve:28,reload:2.1,speed:1,projectileSpeed:74,gravity:2.8,rangeStart:25,rangeEnd:85,minDamage:.7,color:0x9a967d}
);
