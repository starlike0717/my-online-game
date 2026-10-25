// Unlocked browsers still support mouse look without holding a fire button.
export function mouseLookDelta(state,event,locked=false){
 if(locked)return [Number.isFinite(event.movementX)?event.movementX:0,Number.isFinite(event.movementY)?event.movementY:0];
 const previous=state.position;state.position=[event.clientX,event.clientY];
 if(!previous)return [0,0];
 return [event.clientX-previous[0],event.clientY-previous[1]];
}
export function edgeLookDelta(state,width,height,dt){
 if(!state.position)return [0,0];
 const edge=(value,size)=>{const n=value/size*2-1;return Math.abs(n)>.65?Math.sign(n)*Math.min(1,(Math.abs(n)-.65)/.35):0};
 return [edge(state.position[0],width)*1400*dt,edge(state.position[1],height)*700*dt];
}
