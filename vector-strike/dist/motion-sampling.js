import {motionClips} from './motion-clips.js';
export function sampleMotion(clip,channel,progress=0){const values=motionClips[clip]?.[channel];if(!values)return 0;const p=Math.max(0,Math.min(1,Number.isFinite(progress)?progress:0))*(values.length-1),i=Math.floor(p),j=Math.min(i+1,values.length-1);return values[i]+(values[j]-values[i])*(p-i)}
