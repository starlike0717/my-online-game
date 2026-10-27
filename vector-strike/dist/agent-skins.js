// Shared cosmetic identities. Physics and hitboxes are identical for every outfit.
export const agentSkins=[
 {id:0,name:'정찰병',outfit:0x627759,pants:0x28362b,face:0xd2ad82,hair:0x3a3026,accent:0xbdeb86,look:'scout',eyes:'brows',gear:'vest'},
 {id:1,name:'설원병',outfit:0xd5e1e4,pants:0x405968,face:0xefcab0,hair:0x6a5142,accent:0x6adcf2,look:'snow',eyes:'goggles',gear:'parka'},
 {id:2,name:'소방대원',outfit:0xc5593f,pants:0x342d29,face:0xb88159,hair:0x292520,accent:0xffd65c,look:'fire',eyes:'mask',gear:'rescue'},
 {id:3,name:'의무병',outfit:0xe8e5cf,pants:0x377e75,face:0x986a4d,hair:0x2b2220,accent:0xe36369,look:'medic',eyes:'glasses',gear:'medic'},
 {id:4,name:'기술자',outfit:0xd1a138,pants:0x314458,face:0xd49d6c,hair:0x4b3028,accent:0x6fe7dd,look:'engineer',eyes:'monocle',gear:'tools'},
 {id:5,name:'그림자',outfit:0x514473,pants:0x232331,face:0xc1937e,hair:0x1e2029,accent:0xc0a0ff,look:'shadow',eyes:'wrap',gear:'cloak'},
 {id:6,name:'조종사',outfit:0x3a6b91,pants:0x293642,face:0xd8b78c,hair:0x6a492d,accent:0xffb275,look:'pilot',eyes:'visor',gear:'harness'},
 {id:7,name:'도시 수색대',outfit:0x3caaa6,pants:0x263b42,face:0x81543d,hair:0x22212a,accent:0xf5c35d,look:'urban',eyes:'freckles',gear:'jacket'},
 {id:8,name:'사막 순찰대',outfit:0xbe9568,pants:0x614936,face:0xb37a55,hair:0x372d25,accent:0x96d1a4,look:'desert',eyes:'bandana',gear:'scarf'},
 {id:9,name:'네온 기사',outfit:0x4d5266,pants:0x262a39,face:0x718fa3,hair:0x283443,accent:0xf17dca,look:'neon',eyes:'robot',gear:'armor'}
];
export function normalizeSkinId(value){return Number.isInteger(value)&&value>=0&&value<agentSkins.length?value:0}
export function randomSkinId(random=Math.random,used=[]){const choices=agentSkins.map(s=>s.id).filter(id=>!used.includes(id)),pool=choices.length?choices:agentSkins.map(s=>s.id),roll=Number(random());return pool[Math.min(pool.length-1,Math.max(0,Math.floor((Number.isFinite(roll)?roll:0)*pool.length)))]}
export function dressAgent(THREE,group,skin,{box}){
 const b=(x,y,z,w,h,d,c,name)=>{const o=box(group,x,y,z,w,h,d,c);o.name='skin-'+(name||skin.look);return o};
 // A real face, independent eye shapes and headgear, rather than a recolored visor.
 b(0,1.97,.235,.40,.36,.045,skin.face,'face');
 if(['goggles','glasses','visor'].includes(skin.eyes)){
  b(0,2.025,.275,.42,.13,.055,skin.hair,'eyewear-frame');
  for(const x of [-.105,.105])b(x,2.03,.31,.155,.08,.025,skin.eyes==='visor'?skin.accent:0x86c7ca,'lens');
 }else if(skin.eyes==='robot'){
  for(const x of [-.105,.105]){b(x,2.04,.275,.09,.07,.035,skin.accent,'robot-eye');b(x,1.91,.27,.12,.025,.025,skin.hair,'cheek-vent')}
 }else{
  for(const x of [-.105,.105]){b(x,2.04,.275,.056,.056,.025,0x17252a,'eye');if(skin.eyes==='brows'||skin.eyes==='wrap')b(x,2.09,.28,.09,.022,.025,skin.hair,'brow')}
 }
 if(['mask','wrap','bandana'].includes(skin.eyes)){b(0,1.90,.29,.40,.145,.075,skin.eyes==='mask'?0x34414a:skin.outfit,'face-cover');if(skin.eyes==='mask')for(const x of [-.18,.18])b(x,1.91,.325,.10,.10,.09,0x7d8890,'filter')}
 else {b(0,1.92,.282,.065,.045,.04,skin.face,'nose');b(0,1.855,.275,.12,.019,.025,skin.hair,'mouth')}
 if(skin.eyes==='monocle')b(.11,2.04,.3,.115,.115,.04,skin.accent,'scanner');
 if(skin.eyes==='freckles')for(const x of [-.16,-.12,.12,.16])b(x,1.96,.272,.014,.014,.012,skin.hair,'freckle');
 if(['snow','shadow','desert'].includes(skin.look)){
  b(0,2.18,-.015,.57,.17,.53,skin.outfit,'hood-top');for(const x of [-.265,.265])b(x,2.015,-.04,.08,.35,.50,skin.outfit,'hood-side');
 }else if(['fire','engineer','pilot','neon'].includes(skin.look)){
  b(0,2.19,-.015,.56,.17,.51,skin.look==='engineer'?skin.accent:skin.outfit,'helmet');
  b(0,2.13,.10,.61,.045,.47,skin.look==='fire'?skin.accent:skin.pants,'helmet-brim');
  if(skin.look==='pilot')for(const x of [-.27,.27])b(x,2.015,0,.10,.22,.26,skin.accent,'ear-radio');
 }else {b(0,2.18,-.03,.48,.12,.43,skin.hair,'hair');if(skin.look==='scout'||skin.look==='urban')b(0,2.12,.15,.48,.065,.32,skin.outfit,'cap');}
 // Distinct clothing silhouettes and trim. These pieces follow the torso joints.
 if(skin.gear==='cloak'||skin.gear==='parka'){b(0,1.29,-.29,.84,.78,.12,skin.outfit,'coat-back');for(const x of [-.29,.29])b(x,.91,0,.22,.34,.5,skin.outfit,'coat-tail')}
 if(['vest','armor','rescue'].includes(skin.gear))for(const x of [-.23,.23]){b(x,1.33,.30,.18,.29,.11,skin.gear==='armor'?skin.accent:skin.outfit,'chest-plate');b(x,1.06,.30,.17,.15,.10,skin.pants,'pouch')}
 if(skin.gear==='rescue'||skin.gear==='jacket'){for(const y of [1.22,1.5])b(0,y,.32,.68,.04,.03,skin.accent,'reflective-stripe')}
 if(skin.gear==='medic'){b(0,1.38,.33,.10,.30,.05,skin.accent,'medical-cross');b(0,1.38,.335,.29,.10,.05,skin.accent,'medical-cross');b(.31,1.03,.28,.23,.24,.18,skin.outfit,'medical-bag')}
 if(skin.gear==='harness'||skin.gear==='tools'){for(const x of [-.23,.23])b(x,1.40,.32,.07,.51,.04,skin.accent,'harness');if(skin.gear==='tools')for(let i=0;i<3;i++)b(-.19+i*.19,1.05,.35,.08,.21,.08,skin.hair,'tool')}
 if(skin.gear==='scarf'){b(0,1.72,0,.62,.16,.5,skin.accent,'scarf');b(.19,1.44,.32,.20,.46,.08,skin.accent,'scarf-tail')}
 if(skin.gear==='cloak')b(0,1.73,0,.75,.16,.54,skin.accent,'cloak-collar');
 if(skin.gear==='armor')for(const x of [-.41,.41])b(x,1.62,0,.22,.18,.47,skin.outfit,'pauldron');
 group.userData.skinId=skin.id;
}
