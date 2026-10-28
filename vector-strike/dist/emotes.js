export const emotes=[
 {id:0,name:'까딱까딱',description:'고개를 까딱이며 여유롭게 리듬 타기',duration:6,icon:'M10 12 5 17m17-5 5 5M11 21l-2 9m12-9 2 9'},
 {id:1,name:'어깨 으쓱',description:'양팔을 벌리고 어깨를 번갈아 으쓱',duration:6,icon:'M10 13 4 8 1 10m21 3 6-5 3 2M11 21l-3 9m13-9 3 9'},
 {id:2,name:'빙글 스텝',description:'한 바퀴 돌며 발끝으로 가볍게 스텝',duration:7,icon:'M10 13 3 14m19-1 7 1M11 21l8 8m2-8-8 8'},
 {id:3,name:'웨이브',description:'팔과 몸을 물결처럼 움직이는 춤',duration:7,icon:'M10 13 5 6 1 11m21 2 5 6 4-6M11 21l-2 9m12-9 2 9'},
 {id:4,name:'박수 스텝',description:'박수를 치며 좌우로 발걸음 옮기기',duration:6,icon:'M10 13l6-3 6 3M11 21l-4 9m14-9 4 9'}
];
export const validEmote=id=>Number.isInteger(id)&&id>=0&&id<emotes.length;
const smooth=v=>{v=Math.max(0,Math.min(1,v));return v*v*(3-2*v)};
export function applyEmotePose(pose,id,time=0){
 if(!validEmote(id)||!Number.isFinite(time)||time<0||time>=emotes[id].duration)return pose;
 const t=time,beat=t*Math.PI*3,weight=smooth(t/.22)*smooth((emotes[id].duration-t)/.3),s=Math.sin(beat),c=Math.cos(beat);
 const out={...pose,torsoPosition:[...pose.torsoPosition],torsoRotation:[...pose.torsoRotation],headRotation:[...pose.headRotation],hipsPosition:[...pose.hipsPosition],arms:pose.arms.map(a=>({...a})),legs:pose.legs.map(a=>({...a,rotation:[...a.rotation]})),emoting:true,emoteWeight:weight,handTargets:[],rootYaw:0};
 out.hipsPosition[0]=s*.065*weight;out.hipsPosition[1]=Math.abs(s)*.035*weight;out.torsoRotation=[.08*s*weight,0,.12*s*weight];out.headRotation=[.12*s*weight,.10*c*weight,-.06*s*weight];
 let hands=[[-.48,.35,.12],[.48,.35,.12]];
 if(id===0){hands=[[-.42,.12+.16*c,.12],[.42,.12-.16*c,.12]];out.headRotation[0]=.23*s*weight;}
 if(id===1){hands=[[-.7,.32+.18*c,.08],[.7,.32-.18*c,.08]];out.torsoRotation[2]=.18*s*weight;}
 if(id===2){hands=[[-.65,.28,.05],[.65,.28,.05]];out.rootYaw=Math.PI*2*smooth(Math.min(1,t/4))*weight;out.legs[0].rotation[0]=.38*s*weight;out.legs[1].rotation[0]=-.38*s*weight;}
 if(id===3){hands=[[-.58,.5+.28*s,.18],[.58,.5+.28*Math.sin(beat-1.2),.18]];out.torsoRotation[1]=.3*Math.sin(beat*.5)*weight;out.torsoRotation[2]=.17*c*weight;}
 if(id===4){const spread=.08+.46*(.5+.5*c);hands=[[-spread,.4,.38],[spread,.4,.38]];out.legs[0].rotation[2]=-.16*s*weight;out.legs[1].rotation[2]=.16*s*weight;}
 for(let i=0;i<2;i++){out.legs[i].knee+=Math.max(0,(i?-s:s))*.22*weight;out.handTargets[i]=hands[i].map((v,k)=>v*weight+([i? .24:-.24,-.04,.35][k])*(1-weight));}
 return out;
}
