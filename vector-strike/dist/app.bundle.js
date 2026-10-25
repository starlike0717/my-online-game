(()=>{var Vm=Object.defineProperty;var Gm=(n,e)=>{for(var t in e)Vm(n,t,{get:e[t],enumerable:!0})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Wm=0,Sd=1,Xm=2;var Of=1,fu=2,xi=3,ji=0,pn=1,Cn=2,Zi=0,xr=1,bd=2,Ed=3,wd=4,qm=5,Rs=100,Ym=101,$m=102,Zm=103,Jm=104,Km=200,jm=201,Qm=202,eg=203,zl=204,Hl=205,tg=206,ng=207,ig=208,sg=209,rg=210,og=211,ag=212,cg=213,lg=214,Vl=0,Gl=1,Wl=2,Sr=3,Xl=4,ql=5,Yl=6,$l=7,Ff=0,hg=1,ug=2,Ji=0,dg=1,fg=2,pg=3,pu=4,mg=5,gg=6,_g=7;var Bf=300,br=301,Er=302,Zl=303,Jl=304,wc=306,Kl=1e3,Is=1001,jl=1002,qn=1003,xg=1004;var ya=1005;var ii=1006,il=1007;var Ps=1008;var bi=1009,kf=1010,zf=1011,Eo=1012,mu=1013,Ls=1014,vi=1015,No=1016,gu=1017,_u=1018,wr=1020,Hf=35902,Vf=1021,Gf=1022,Xn=1023,Wf=1024,Xf=1025,yr=1026,Tr=1027,qf=1028,xu=1029,Yf=1030,yu=1031;var vu=1033,Za=33776,Ja=33777,Ka=33778,ja=33779,Ql=35840,eh=35841,th=35842,nh=35843,ih=36196,sh=37492,rh=37496,oh=37808,ah=37809,ch=37810,lh=37811,hh=37812,uh=37813,dh=37814,fh=37815,ph=37816,mh=37817,gh=37818,_h=37819,xh=37820,yh=37821,Qa=36492,vh=36494,Mh=36495,$f=36283,Sh=36284,bh=36285,Eh=36286;var ec=2300,wh=2301,sl=2302,Td=2400,Ad=2401,Rd=2402;var yg=3200,vg=3201;var Zf=0,Mg=1,Yi="",jt="srgb",Ur="srgb-linear",Tc="linear",lt="srgb";var Qs=7680;var Cd=519,Sg=512,bg=513,Eg=514,Jf=515,wg=516,Tg=517,Ag=518,Rg=519,Th=35044;var Id="300 es",Mi=2e3,tc=2001,Qi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var rl=Math.PI/180,Ah=180/Math.PI;function Ki(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Jt[n&255]+Jt[n>>8&255]+Jt[n>>16&255]+Jt[n>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[t&63|128]+Jt[t>>8&255]+"-"+Jt[t>>16&255]+Jt[t>>24&255]+Jt[i&255]+Jt[i>>8&255]+Jt[i>>16&255]+Jt[i>>24&255]).toLowerCase()}function Qt(n,e,t){return Math.max(e,Math.min(t,n))}function Cg(n,e){return(n%e+e)%e}function ol(n,e,t){return(1-t)*n+t*e}function ni(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ht(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Me=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ve=class n{constructor(e,t,i,s,r,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],f=i[7],d=i[2],u=i[5],g=i[8],_=s[0],m=s[3],p=s[6],T=s[1],b=s[4],M=s[7],U=s[2],A=s[5],C=s[8];return r[0]=o*_+a*T+c*U,r[3]=o*m+a*b+c*A,r[6]=o*p+a*M+c*C,r[1]=l*_+h*T+f*U,r[4]=l*m+h*b+f*A,r[7]=l*p+h*M+f*C,r[2]=d*_+u*T+g*U,r[5]=d*m+u*b+g*A,r[8]=d*p+u*M+g*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-i*r*h+i*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],f=h*o-a*l,d=a*c-h*r,u=l*r-o*c,g=t*f+i*d+s*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=f*_,e[1]=(s*l-h*i)*_,e[2]=(a*i-s*o)*_,e[3]=d*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=u*_,e[7]=(i*c-l*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(al.makeScale(e,t)),this}rotate(e){return this.premultiply(al.makeRotation(-e)),this}translate(e,t){return this.premultiply(al.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},al=new Ve;function Kf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function nc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ig(){let n=nc("canvas");return n.style.display="block",n}var Pd={};function yo(n){n in Pd||(Pd[n]=!0,console.warn(n))}function Pg(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function Lg(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Dg(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var it={enabled:!0,workingColorSpace:Ur,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===lt&&(n.r=Si(n.r),n.g=Si(n.g),n.b=Si(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===lt&&(n.r=vr(n.r),n.g=vr(n.g),n.b=vr(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Yi?Tc:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Si(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function vr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ld=[.64,.33,.3,.6,.15,.06],Dd=[.2126,.7152,.0722],Nd=[.3127,.329],Ud=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Od=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);it.define({[Ur]:{primaries:Ld,whitePoint:Nd,transfer:Tc,toXYZ:Ud,fromXYZ:Od,luminanceCoefficients:Dd,workingColorSpaceConfig:{unpackColorSpace:jt},outputColorSpaceConfig:{drawingBufferColorSpace:jt}},[jt]:{primaries:Ld,whitePoint:Nd,transfer:lt,toXYZ:Ud,fromXYZ:Od,luminanceCoefficients:Dd,outputColorSpaceConfig:{drawingBufferColorSpace:jt}}});var er,Rh=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{er===void 0&&(er=nc("canvas")),er.width=e.width,er.height=e.height;let i=er.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=er}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=nc("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Si(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Si(t[i]/255)*255):t[i]=Si(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Ng=0,ic=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ng++}),this.uuid=Ki(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(cl(s[o].image)):r.push(cl(s[o]))}else r=cl(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function cl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Rh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ug=0,Mn=class n extends Qi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Is,s=Is,r=ii,o=Ps,a=Xn,c=bi,l=n.DEFAULT_ANISOTROPY,h=Yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ug++}),this.uuid=Ki(),this.name="",this.source=new ic(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Kl:e.x=e.x-Math.floor(e.x);break;case Is:e.x=e.x<0?0:1;break;case jl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Kl:e.y=e.y-Math.floor(e.y);break;case Is:e.y=e.y<0?0:1;break;case jl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=Bf;Mn.DEFAULT_ANISOTROPY=1;var ut=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,c=e.elements,l=c[0],h=c[4],f=c[8],d=c[1],u=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+u+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(l+1)/2,M=(u+1)/2,U=(p+1)/2,A=(h+d)/4,C=(f+_)/4,D=(g+m)/4;return b>M&&b>U?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=A/i,r=C/i):M>U?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=A/s,r=D/s):U<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),i=C/r,s=D/r),this.set(i,s,r,t),this}let T=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(d-h)*(d-h));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(f-_)/T,this.z=(d-h)/T,this.w=Math.acos((l+u+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ch=class extends Qi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);let s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ii,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new Mn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ic(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ei=class extends Ch{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},sc=class extends Mn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=qn,this.minFilter=qn,this.wrapR=Is,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ih=class extends Mn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=qn,this.minFilter=qn,this.wrapR=Is,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var es=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],h=i[s+2],f=i[s+3],d=r[o+0],u=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=u,e[t+2]=g,e[t+3]=_;return}if(f!==_||c!==d||l!==u||h!==g){let m=1-a,p=c*d+l*u+h*g+f*_,T=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){let U=Math.sqrt(b),A=Math.atan2(U,p*T);m=Math.sin(m*A)/U,a=Math.sin(a*A)/U}let M=a*T;if(c=c*m+d*M,l=l*m+u*M,h=h*m+g*M,f=f*m+_*M,m===1-a){let U=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=U,l*=U,h*=U,f*=U}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],f=r[o],d=r[o+1],u=r[o+2],g=r[o+3];return e[t]=a*g+h*f+c*u-l*d,e[t+1]=c*g+h*d+l*f-a*u,e[t+2]=l*g+h*u+a*d-c*f,e[t+3]=h*g-a*f-c*d-l*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),f=a(r/2),d=c(i/2),u=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*f+l*u*g,this._y=l*u*f-d*h*g,this._z=l*h*g+d*u*f,this._w=l*h*f-d*u*g;break;case"YXZ":this._x=d*h*f+l*u*g,this._y=l*u*f-d*h*g,this._z=l*h*g-d*u*f,this._w=l*h*f+d*u*g;break;case"ZXY":this._x=d*h*f-l*u*g,this._y=l*u*f+d*h*g,this._z=l*h*g+d*u*f,this._w=l*h*f-d*u*g;break;case"ZYX":this._x=d*h*f-l*u*g,this._y=l*u*f+d*h*g,this._z=l*h*g-d*u*f,this._w=l*h*f+d*u*g;break;case"YZX":this._x=d*h*f+l*u*g,this._y=l*u*f+d*h*g,this._z=l*h*g-d*u*f,this._w=l*h*f-d*u*g;break;case"XZY":this._x=d*h*f-l*u*g,this._y=l*u*f-d*h*g,this._z=l*h*g+d*u*f,this._w=l*h*f+d*u*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],f=t[10],d=i+a+f;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-c)*u,this._y=(r-l)*u,this._z=(o-s)*u}else if(i>a&&i>f){let u=2*Math.sqrt(1+i-a-f);this._w=(h-c)/u,this._x=.25*u,this._y=(s+o)/u,this._z=(r+l)/u}else if(a>f){let u=2*Math.sqrt(1+a-i-f);this._w=(r-l)/u,this._x=(s+o)/u,this._y=.25*u,this._z=(c+h)/u}else{let u=2*Math.sqrt(1+f-i-a);this._w=(o-s)/u,this._x=(r+l)/u,this._y=(c+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-i*l,this._z=r*h+o*l+i*c-s*a,this._w=o*h-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let u=1-t;return this._w=u*o+t*this._w,this._x=u*i+t*this._x,this._y=u*s+t*this._y,this._z=u*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),f=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},w=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),h=2*(a*t-r*s),f=2*(r*i-o*t);return this.x=t+c*l+o*f-a*h,this.y=i+c*h+a*l-r*f,this.z=s+c*f+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ll.copy(this).projectOnVector(e),this.sub(ll)}reflect(e){return this.sub(ll.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ll=new w,Fd=new es,wi=class{constructor(e=new w(1/0,1/0,1/0),t=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Vn):Vn.fromBufferAttribute(r,o),Vn.applyMatrix4(e.matrixWorld),this.expandByPoint(Vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),va.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),va.copy(i.boundingBox)),va.applyMatrix4(e.matrixWorld),this.union(va)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(lo),Ma.subVectors(this.max,lo),tr.subVectors(e.a,lo),nr.subVectors(e.b,lo),ir.subVectors(e.c,lo),Hi.subVectors(nr,tr),Vi.subVectors(ir,nr),Ms.subVectors(tr,ir);let t=[0,-Hi.z,Hi.y,0,-Vi.z,Vi.y,0,-Ms.z,Ms.y,Hi.z,0,-Hi.x,Vi.z,0,-Vi.x,Ms.z,0,-Ms.x,-Hi.y,Hi.x,0,-Vi.y,Vi.x,0,-Ms.y,Ms.x,0];return!hl(t,tr,nr,ir,Ma)||(t=[1,0,0,0,1,0,0,0,1],!hl(t,tr,nr,ir,Ma))?!1:(Sa.crossVectors(Hi,Vi),t=[Sa.x,Sa.y,Sa.z],hl(t,tr,nr,ir,Ma))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},fi=[new w,new w,new w,new w,new w,new w,new w,new w],Vn=new w,va=new wi,tr=new w,nr=new w,ir=new w,Hi=new w,Vi=new w,Ms=new w,lo=new w,Ma=new w,Sa=new w,Ss=new w;function hl(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ss.fromArray(n,r);let a=s.x*Math.abs(Ss.x)+s.y*Math.abs(Ss.y)+s.z*Math.abs(Ss.z),c=e.dot(Ss),l=t.dot(Ss),h=i.dot(Ss);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Og=new wi,ho=new w,ul=new w,Ds=class{constructor(e=new w,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Og.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ho.subVectors(e,this.center);let t=ho.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ho,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ul.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ho.copy(e.center).add(ul)),this.expandByPoint(ho.copy(e.center).sub(ul))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},pi=new w,dl=new w,ba=new w,Gi=new w,fl=new w,Ea=new w,pl=new w,ts=class{constructor(e=new w,t=new w(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=pi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pi.copy(this.origin).addScaledVector(this.direction,t),pi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){dl.copy(e).add(t).multiplyScalar(.5),ba.copy(t).sub(e).normalize(),Gi.copy(this.origin).sub(dl);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ba),a=Gi.dot(this.direction),c=-Gi.dot(ba),l=Gi.lengthSq(),h=Math.abs(1-o*o),f,d,u,g;if(h>0)if(f=o*c-a,d=o*a-c,g=r*h,f>=0)if(d>=-g)if(d<=g){let _=1/h;f*=_,d*=_,u=f*(f+o*d+2*a)+d*(o*f+d+2*c)+l}else d=r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*c)+l;else d=-r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*c)+l;else d<=-g?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-c),r),u=-f*f+d*(d+2*c)+l):d<=g?(f=0,d=Math.min(Math.max(-r,-c),r),u=d*(d+2*c)+l):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-c),r),u=-f*f+d*(d+2*c)+l);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(dl).addScaledVector(ba,d),u}intersectSphere(e,t){pi.subVectors(e.center,this.origin);let i=pi.dot(this.direction),s=pi.dot(pi)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,pi)!==null}intersectTriangle(e,t,i,s,r){fl.subVectors(t,e),Ea.subVectors(i,e),pl.crossVectors(fl,Ea);let o=this.direction.dot(pl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Gi.subVectors(this.origin,e);let c=a*this.direction.dot(Ea.crossVectors(Gi,Ea));if(c<0)return null;let l=a*this.direction.dot(fl.cross(Gi));if(l<0||c+l>o)return null;let h=-a*Gi.dot(pl);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},gt=class n{constructor(e,t,i,s,r,o,a,c,l,h,f,d,u,g,_,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,h,f,d,u,g,_,m)}set(e,t,i,s,r,o,a,c,l,h,f,d,u,g,_,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=f,p[14]=d,p[3]=u,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/sr.setFromMatrixColumn(e,0).length(),r=1/sr.setFromMatrixColumn(e,1).length(),o=1/sr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let d=o*h,u=o*f,g=a*h,_=a*f;t[0]=c*h,t[4]=-c*f,t[8]=l,t[1]=u+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+u*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*h,u=c*f,g=l*h,_=l*f;t[0]=d+_*a,t[4]=g*a-u,t[8]=o*l,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=u*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*h,u=c*f,g=l*h,_=l*f;t[0]=d-_*a,t[4]=-o*f,t[8]=g+u*a,t[1]=u+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*h,u=o*f,g=a*h,_=a*f;t[0]=c*h,t[4]=g*l-u,t[8]=d*l+_,t[1]=c*f,t[5]=_*l+d,t[9]=u*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,u=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=_-d*f,t[8]=g*f+u,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=u*f+g,t[10]=d-_*f}else if(e.order==="XZY"){let d=o*c,u=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=-f,t[8]=l*h,t[1]=d*f+_,t[5]=o*h,t[9]=u*f-g,t[2]=g*f-u,t[6]=a*h,t[10]=_*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Fg,e,Bg)}lookAt(e,t,i){let s=this.elements;return xn.subVectors(e,t),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Wi.crossVectors(i,xn),Wi.lengthSq()===0&&(Math.abs(i.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Wi.crossVectors(i,xn)),Wi.normalize(),wa.crossVectors(xn,Wi),s[0]=Wi.x,s[4]=wa.x,s[8]=xn.x,s[1]=Wi.y,s[5]=wa.y,s[9]=xn.y,s[2]=Wi.z,s[6]=wa.z,s[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],f=i[5],d=i[9],u=i[13],g=i[2],_=i[6],m=i[10],p=i[14],T=i[3],b=i[7],M=i[11],U=i[15],A=s[0],C=s[4],D=s[8],S=s[12],v=s[1],I=s[5],V=s[9],H=s[13],X=s[2],Q=s[6],q=s[10],se=s[14],W=s[3],he=s[7],_e=s[11],Ie=s[15];return r[0]=o*A+a*v+c*X+l*W,r[4]=o*C+a*I+c*Q+l*he,r[8]=o*D+a*V+c*q+l*_e,r[12]=o*S+a*H+c*se+l*Ie,r[1]=h*A+f*v+d*X+u*W,r[5]=h*C+f*I+d*Q+u*he,r[9]=h*D+f*V+d*q+u*_e,r[13]=h*S+f*H+d*se+u*Ie,r[2]=g*A+_*v+m*X+p*W,r[6]=g*C+_*I+m*Q+p*he,r[10]=g*D+_*V+m*q+p*_e,r[14]=g*S+_*H+m*se+p*Ie,r[3]=T*A+b*v+M*X+U*W,r[7]=T*C+b*I+M*Q+U*he,r[11]=T*D+b*V+M*q+U*_e,r[15]=T*S+b*H+M*se+U*Ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],f=e[6],d=e[10],u=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*c*f-s*l*f-r*a*d+i*l*d+s*a*u-i*c*u)+_*(+t*c*u-t*l*d+r*o*d-s*o*u+s*l*h-r*c*h)+m*(+t*l*f-t*a*u-r*o*f+i*o*u+r*a*h-i*l*h)+p*(-s*a*h-t*c*f+t*a*d+s*o*f-i*o*d+i*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],f=e[9],d=e[10],u=e[11],g=e[12],_=e[13],m=e[14],p=e[15],T=f*m*l-_*d*l+_*c*u-a*m*u-f*c*p+a*d*p,b=g*d*l-h*m*l-g*c*u+o*m*u+h*c*p-o*d*p,M=h*_*l-g*f*l+g*a*u-o*_*u-h*a*p+o*f*p,U=g*f*c-h*_*c-g*a*d+o*_*d+h*a*m-o*f*m,A=t*T+i*b+s*M+r*U;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/A;return e[0]=T*C,e[1]=(_*d*r-f*m*r-_*s*u+i*m*u+f*s*p-i*d*p)*C,e[2]=(a*m*r-_*c*r+_*s*l-i*m*l-a*s*p+i*c*p)*C,e[3]=(f*c*r-a*d*r-f*s*l+i*d*l+a*s*u-i*c*u)*C,e[4]=b*C,e[5]=(h*m*r-g*d*r+g*s*u-t*m*u-h*s*p+t*d*p)*C,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*p-t*c*p)*C,e[7]=(o*d*r-h*c*r+h*s*l-t*d*l-o*s*u+t*c*u)*C,e[8]=M*C,e[9]=(g*f*r-h*_*r-g*i*u+t*_*u+h*i*p-t*f*p)*C,e[10]=(o*_*r-g*a*r+g*i*l-t*_*l-o*i*p+t*a*p)*C,e[11]=(h*a*r-o*f*r-h*i*l+t*f*l+o*i*u-t*a*u)*C,e[12]=U*C,e[13]=(h*_*s-g*f*s+g*i*d-t*_*d-h*i*m+t*f*m)*C,e[14]=(g*a*s-o*_*s-g*i*c+t*_*c+o*i*m-t*a*m)*C,e[15]=(o*f*s-h*a*s+h*i*c-t*f*c-o*i*d+t*a*d)*C,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,f=a+a,d=r*l,u=r*h,g=r*f,_=o*h,m=o*f,p=a*f,T=c*l,b=c*h,M=c*f,U=i.x,A=i.y,C=i.z;return s[0]=(1-(_+p))*U,s[1]=(u+M)*U,s[2]=(g-b)*U,s[3]=0,s[4]=(u-M)*A,s[5]=(1-(d+p))*A,s[6]=(m+T)*A,s[7]=0,s[8]=(g+b)*C,s[9]=(m-T)*C,s[10]=(1-(d+_))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=sr.set(s[0],s[1],s[2]).length(),o=sr.set(s[4],s[5],s[6]).length(),a=sr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Gn.copy(this);let l=1/r,h=1/o,f=1/a;return Gn.elements[0]*=l,Gn.elements[1]*=l,Gn.elements[2]*=l,Gn.elements[4]*=h,Gn.elements[5]*=h,Gn.elements[6]*=h,Gn.elements[8]*=f,Gn.elements[9]*=f,Gn.elements[10]*=f,t.setFromRotationMatrix(Gn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Mi){let c=this.elements,l=2*r/(t-e),h=2*r/(i-s),f=(t+e)/(t-e),d=(i+s)/(i-s),u,g;if(a===Mi)u=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===tc)u=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=u,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Mi){let c=this.elements,l=1/(t-e),h=1/(i-s),f=1/(o-r),d=(t+e)*l,u=(i+s)*h,g,_;if(a===Mi)g=(o+r)*f,_=-2*f;else if(a===tc)g=r*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-u,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},sr=new w,Gn=new gt,Fg=new w(0,0,0),Bg=new w(1,1,1),Wi=new w,wa=new w,xn=new w,Bd=new gt,kd=new es,In=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],f=s[2],d=s[6],u=s[10];switch(t){case"XYZ":this._y=Math.asin(Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Qt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Qt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Bd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return kd.setFromEuler(this),this.setFromQuaternion(kd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};In.DEFAULT_ORDER="XYZ";var wo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},kg=0,zd=new w,rr=new es,mi=new gt,Ta=new w,uo=new w,zg=new w,Hg=new es,Hd=new w(1,0,0),Vd=new w(0,1,0),Gd=new w(0,0,1),Wd={type:"added"},Vg={type:"removed"},or={type:"childadded",child:null},ml={type:"childremoved",child:null},Ot=class n extends Qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kg++}),this.uuid=Ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new w,t=new In,i=new es,s=new w(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new gt},normalMatrix:{value:new Ve}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return rr.setFromAxisAngle(e,t),this.quaternion.multiply(rr),this}rotateOnWorldAxis(e,t){return rr.setFromAxisAngle(e,t),this.quaternion.premultiply(rr),this}rotateX(e){return this.rotateOnAxis(Hd,e)}rotateY(e){return this.rotateOnAxis(Vd,e)}rotateZ(e){return this.rotateOnAxis(Gd,e)}translateOnAxis(e,t){return zd.copy(e).applyQuaternion(this.quaternion),this.position.add(zd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hd,e)}translateY(e){return this.translateOnAxis(Vd,e)}translateZ(e){return this.translateOnAxis(Gd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ta.copy(e):Ta.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),uo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(uo,Ta,this.up):mi.lookAt(Ta,uo,this.up),this.quaternion.setFromRotationMatrix(mi),s&&(mi.extractRotation(s.matrixWorld),rr.setFromRotationMatrix(mi),this.quaternion.premultiply(rr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wd),or.child=e,this.dispatchEvent(or),or.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Vg),ml.child=e,this.dispatchEvent(ml),ml.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wd),or.child=e,this.dispatchEvent(or),or.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(uo,e,zg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(uo,Hg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let f=c[l];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),f=o(e.shapes),d=o(e.skeletons),u=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),u.length>0&&(i.animations=u),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Ot.DEFAULT_UP=new w(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Wn=new w,gi=new w,gl=new w,_i=new w,ar=new w,cr=new w,Xd=new w,_l=new w,xl=new w,yl=new w,vl=new ut,Ml=new ut,Sl=new ut,$i=class n{constructor(e=new w,t=new w,i=new w){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Wn.subVectors(e,t),s.cross(Wn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Wn.subVectors(s,t),gi.subVectors(i,t),gl.subVectors(e,t);let o=Wn.dot(Wn),a=Wn.dot(gi),c=Wn.dot(gl),l=gi.dot(gi),h=gi.dot(gl),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;let d=1/f,u=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-u-g,g,u)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,_i)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,_i.x),c.addScaledVector(o,_i.y),c.addScaledVector(a,_i.z),c)}static getInterpolatedAttribute(e,t,i,s,r,o){return vl.setScalar(0),Ml.setScalar(0),Sl.setScalar(0),vl.fromBufferAttribute(e,t),Ml.fromBufferAttribute(e,i),Sl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(vl,r.x),o.addScaledVector(Ml,r.y),o.addScaledVector(Sl,r.z),o}static isFrontFacing(e,t,i,s){return Wn.subVectors(i,t),gi.subVectors(e,t),Wn.cross(gi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),Wn.cross(gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;ar.subVectors(s,i),cr.subVectors(r,i),_l.subVectors(e,i);let c=ar.dot(_l),l=cr.dot(_l);if(c<=0&&l<=0)return t.copy(i);xl.subVectors(e,s);let h=ar.dot(xl),f=cr.dot(xl);if(h>=0&&f<=h)return t.copy(s);let d=c*f-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(i).addScaledVector(ar,o);yl.subVectors(e,r);let u=ar.dot(yl),g=cr.dot(yl);if(g>=0&&u<=g)return t.copy(r);let _=u*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(cr,a);let m=h*g-u*f;if(m<=0&&f-h>=0&&u-g>=0)return Xd.subVectors(r,s),a=(f-h)/(f-h+(u-g)),t.copy(s).addScaledVector(Xd,a);let p=1/(m+_+d);return o=_*p,a=d*p,t.copy(i).addScaledVector(ar,o).addScaledVector(cr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},jf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},Aa={h:0,s:0,l:0};function bl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Be=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=it.workingColorSpace){return this.r=e,this.g=t,this.b=i,it.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=it.workingColorSpace){if(e=Cg(e,1),t=Qt(t,0,1),i=Qt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=bl(o,r,e+1/3),this.g=bl(o,r,e),this.b=bl(o,r,e-1/3)}return it.toWorkingColorSpace(this,s),this}setStyle(e,t=jt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jt){let i=jf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Si(e.r),this.g=Si(e.g),this.b=Si(e.b),this}copyLinearToSRGB(e){return this.r=vr(e.r),this.g=vr(e.g),this.b=vr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jt){return it.fromWorkingColorSpace(Kt.copy(this),e),Math.round(Qt(Kt.r*255,0,255))*65536+Math.round(Qt(Kt.g*255,0,255))*256+Math.round(Qt(Kt.b*255,0,255))}getHexString(e=jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.fromWorkingColorSpace(Kt.copy(this),t);let i=Kt.r,s=Kt.g,r=Kt.b,o=Math.max(i,s,r),a=Math.min(i,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let f=o-a;switch(l=h<=.5?f/(o+a):f/(2-o-a),o){case i:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-i)/f+2;break;case r:c=(i-s)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=it.workingColorSpace){return it.fromWorkingColorSpace(Kt.copy(this),t),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=jt){it.fromWorkingColorSpace(Kt.copy(this),e);let t=Kt.r,i=Kt.g,s=Kt.b;return e!==jt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Xi),this.setHSL(Xi.h+e,Xi.s+t,Xi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Xi),e.getHSL(Aa);let i=ol(Xi.h,Aa.h,t),s=ol(Xi.s,Aa.s,t),r=ol(Xi.l,Aa.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Kt=new Be;Be.NAMES=jf;var Gg=0,si=class extends Qi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gg++}),this.uuid=Ki(),this.name="",this.blending=xr,this.side=ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zl,this.blendDst=Hl,this.blendEquation=Rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=Sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qs,this.stencilZFail=Qs,this.stencilZPass=Qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==xr&&(i.blending=this.blending),this.side!==ji&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==zl&&(i.blendSrc=this.blendSrc),this.blendDst!==Hl&&(i.blendDst=this.blendDst),this.blendEquation!==Rs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Sr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Qs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Qs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Pn=class extends si{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.combine=Ff,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ut=new w,Ra=new Me,vn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Th,this.updateRanges=[],this.gpuType=vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ra.fromBufferAttribute(this,t),Ra.applyMatrix3(e),this.setXY(t,Ra.x,Ra.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ni(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ht(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ni(t,this.array)),t}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ni(t,this.array)),t}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ni(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ni(t,this.array)),t}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array),s=ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array),s=ht(s,this.array),r=ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Th&&(e.usage=this.usage),e}};var rc=class extends vn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var oc=class extends vn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var dt=class extends vn{constructor(e,t,i){super(new Float32Array(e),t,i)}},Wg=0,Rn=new gt,El=new Ot,lr=new w,yn=new wi,fo=new wi,Wt=new w,Ft=class n extends Qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wg++}),this.uuid=Ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Kf(e)?oc:rc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ve().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,t,i){return Rn.makeTranslation(e,t,i),this.applyMatrix4(Rn),this}scale(e,t,i){return Rn.makeScale(e,t,i),this.applyMatrix4(Rn),this}lookAt(e){return El.lookAt(e),El.updateMatrix(),this.applyMatrix4(El.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(lr).negate(),this.translate(lr.x,lr.y,lr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new dt(i,3))}else{for(let i=0,s=t.count;i<s;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];yn.setFromBufferAttribute(r),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ds);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(e){let i=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];fo.setFromBufferAttribute(a),this.morphTargetsRelative?(Wt.addVectors(yn.min,fo.min),yn.expandByPoint(Wt),Wt.addVectors(yn.max,fo.max),yn.expandByPoint(Wt)):(yn.expandByPoint(fo.min),yn.expandByPoint(fo.max))}yn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Wt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Wt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Wt.fromBufferAttribute(a,l),c&&(lr.fromBufferAttribute(e,l),Wt.add(lr)),s=Math.max(s,i.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vn(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let D=0;D<i.count;D++)a[D]=new w,c[D]=new w;let l=new w,h=new w,f=new w,d=new Me,u=new Me,g=new Me,_=new w,m=new w;function p(D,S,v){l.fromBufferAttribute(i,D),h.fromBufferAttribute(i,S),f.fromBufferAttribute(i,v),d.fromBufferAttribute(r,D),u.fromBufferAttribute(r,S),g.fromBufferAttribute(r,v),h.sub(l),f.sub(l),u.sub(d),g.sub(d);let I=1/(u.x*g.y-g.x*u.y);isFinite(I)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(f,-u.y).multiplyScalar(I),m.copy(f).multiplyScalar(u.x).addScaledVector(h,-g.x).multiplyScalar(I),a[D].add(_),a[S].add(_),a[v].add(_),c[D].add(m),c[S].add(m),c[v].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let D=0,S=T.length;D<S;++D){let v=T[D],I=v.start,V=v.count;for(let H=I,X=I+V;H<X;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}let b=new w,M=new w,U=new w,A=new w;function C(D){U.fromBufferAttribute(s,D),A.copy(U);let S=a[D];b.copy(S),b.sub(U.multiplyScalar(U.dot(S))).normalize(),M.crossVectors(A,S);let I=M.dot(c[D])<0?-1:1;o.setXYZW(D,b.x,b.y,b.z,I)}for(let D=0,S=T.length;D<S;++D){let v=T[D],I=v.start,V=v.count;for(let H=I,X=I+V;H<X;H+=3)C(e.getX(H+0)),C(e.getX(H+1)),C(e.getX(H+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new vn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,u=i.count;d<u;d++)i.setXYZ(d,0,0,0);let s=new w,r=new w,o=new w,a=new w,c=new w,l=new w,h=new w,f=new w;if(e)for(let d=0,u=e.count;d<u;d+=3){let g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),a.add(h),c.add(h),l.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,u=t.count;d<u;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,f=a.normalized,d=new l.constructor(c.length*h),u=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?u=c[_]*a.data.stride+a.offset:u=c[_]*h;for(let p=0;p<h;p++)d[g++]=l[u++]}return new vn(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,i);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,f=l.length;h<f;h++){let d=l[h],u=e(d,i);c.push(u)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let f=0,d=l.length;f<d;f++){let u=l[f];h.push(u.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],f=r[l];for(let d=0,u=f.length;d<u;d++)h.push(f[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},qd=new gt,bs=new ts,Ca=new Ds,Yd=new w,Ia=new w,Pa=new w,La=new w,wl=new w,Da=new w,$d=new w,Na=new w,Ze=class extends Ot{constructor(e=new Ft,t=new Pn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Da.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],f=r[c];h!==0&&(wl.fromBufferAttribute(f,e),o?Da.addScaledVector(wl,h):Da.addScaledVector(wl.sub(t),h))}t.add(Da)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ca.copy(i.boundingSphere),Ca.applyMatrix4(r),bs.copy(e.ray).recast(e.near),!(Ca.containsPoint(bs.origin)===!1&&(bs.intersectSphere(Ca,Yd)===null||bs.origin.distanceToSquared(Yd)>(e.far-e.near)**2))&&(qd.copy(r).invert(),bs.copy(e.ray).applyMatrix4(qd),!(i.boundingBox!==null&&bs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,bs)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=o[m.materialIndex],T=Math.max(m.start,u.start),b=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let M=T,U=b;M<U;M+=3){let A=a.getX(M),C=a.getX(M+1),D=a.getX(M+2);s=Ua(this,p,e,i,l,h,f,A,C,D),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,u.start),_=Math.min(a.count,u.start+u.count);for(let m=g,p=_;m<p;m+=3){let T=a.getX(m),b=a.getX(m+1),M=a.getX(m+2);s=Ua(this,o,e,i,l,h,f,T,b,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=o[m.materialIndex],T=Math.max(m.start,u.start),b=Math.min(c.count,Math.min(m.start+m.count,u.start+u.count));for(let M=T,U=b;M<U;M+=3){let A=M,C=M+1,D=M+2;s=Ua(this,p,e,i,l,h,f,A,C,D),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,u.start),_=Math.min(c.count,u.start+u.count);for(let m=g,p=_;m<p;m+=3){let T=m,b=m+1,M=m+2;s=Ua(this,o,e,i,l,h,f,T,b,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Xg(n,e,t,i,s,r,o,a){let c;if(e.side===pn?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===ji,a),c===null)return null;Na.copy(a),Na.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Na);return l<t.near||l>t.far?null:{distance:l,point:Na.clone(),object:n}}function Ua(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,Ia),n.getVertexPosition(c,Pa),n.getVertexPosition(l,La);let h=Xg(n,e,t,i,Ia,Pa,La,$d);if(h){let f=new w;$i.getBarycoord($d,Ia,Pa,La,f),s&&(h.uv=$i.getInterpolatedAttribute(s,a,c,l,f,new Me)),r&&(h.uv1=$i.getInterpolatedAttribute(r,a,c,l,f,new Me)),o&&(h.normal=$i.getInterpolatedAttribute(o,a,c,l,f,new w),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new w,materialIndex:0};$i.getNormal(Ia,Pa,La,d.normal),h.face=d,h.barycoord=f}return h}var Ns=class n extends Ft{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],f=[],d=0,u=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new dt(l,3)),this.setAttribute("normal",new dt(h,3)),this.setAttribute("uv",new dt(f,2));function g(_,m,p,T,b,M,U,A,C,D,S){let v=M/C,I=U/D,V=M/2,H=U/2,X=A/2,Q=C+1,q=D+1,se=0,W=0,he=new w;for(let _e=0;_e<q;_e++){let Ie=_e*I-H;for(let Ye=0;Ye<Q;Ye++){let mt=Ye*v-V;he[_]=mt*T,he[m]=Ie*b,he[p]=X,l.push(he.x,he.y,he.z),he[_]=0,he[m]=0,he[p]=A>0?1:-1,h.push(he.x,he.y,he.z),f.push(Ye/C),f.push(1-_e/D),se+=1}}for(let _e=0;_e<D;_e++)for(let Ie=0;Ie<C;Ie++){let Ye=d+Ie+Q*_e,mt=d+Ie+Q*(_e+1),$=d+(Ie+1)+Q*(_e+1),re=d+(Ie+1)+Q*_e;c.push(Ye,mt,re),c.push(mt,$,re),W+=6}a.addGroup(u,W,S),u+=W,d+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ar(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function an(n){let e={};for(let t=0;t<n.length;t++){let i=Ar(n[t]);for(let s in i)e[s]=i[s]}return e}function qg(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Qf(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}var Yg={clone:Ar,merge:an},$g=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ri=class extends si{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$g,this.fragmentShader=Zg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ar(e.uniforms),this.uniformsGroups=qg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},ac=class extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=Mi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},qi=new w,Zd=new Me,Jd=new Me,Xt=class extends ac{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ah*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(rl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ah*2*Math.atan(Math.tan(rl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qi.x,qi.y).multiplyScalar(-e/qi.z),qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(qi.x,qi.y).multiplyScalar(-e/qi.z)}getViewSize(e,t){return this.getViewBounds(e,Zd,Jd),t.subVectors(Jd,Zd)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(rl*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},hr=-90,ur=1,Ph=class extends Ot{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Xt(hr,ur,e,t);s.layers=this.layers,this.add(s);let r=new Xt(hr,ur,e,t);r.layers=this.layers,this.add(r);let o=new Xt(hr,ur,e,t);o.layers=this.layers,this.add(o);let a=new Xt(hr,ur,e,t);a.layers=this.layers,this.add(a);let c=new Xt(hr,ur,e,t);c.layers=this.layers,this.add(c);let l=new Xt(hr,ur,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===Mi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===tc)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,c),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(f,d,u),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},cc=class extends Mn{constructor(e,t,i,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:br,super(e,t,i,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Lh=class extends Ei{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new cc(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ii}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ns(5,5,5),r=new ri({name:"CubemapFromEquirect",uniforms:Ar(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:Zi});r.uniforms.tEquirect.value=t;let o=new Ze(s,r),a=t.minFilter;return t.minFilter===Ps&&(t.minFilter=ii),new Ph(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},Tl=new w,Jg=new w,Kg=new Ve,yi=class{constructor(e=new w(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Tl.subVectors(i,t).cross(Jg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Tl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Kg.getNormalMatrix(e),s=this.coplanarPoint(Tl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Es=new Ds,Oa=new w,To=class{constructor(e=new yi,t=new yi,i=new yi,s=new yi,r=new yi,o=new yi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Mi){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],f=s[6],d=s[7],u=s[8],g=s[9],_=s[10],m=s[11],p=s[12],T=s[13],b=s[14],M=s[15];if(i[0].setComponents(c-r,d-l,m-u,M-p).normalize(),i[1].setComponents(c+r,d+l,m+u,M+p).normalize(),i[2].setComponents(c+o,d+h,m+g,M+T).normalize(),i[3].setComponents(c-o,d-h,m-g,M-T).normalize(),i[4].setComponents(c-a,d-f,m-_,M-b).normalize(),t===Mi)i[5].setComponents(c+a,d+f,m+_,M+b).normalize();else if(t===tc)i[5].setComponents(a,f,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Es.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Es)}intersectsSprite(e){return Es.center.set(0,0,0),Es.radius=.7071067811865476,Es.applyMatrix4(e.matrixWorld),this.intersectsSphere(Es)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Oa.x=s.normal.x>0?e.max.x:e.min.x,Oa.y=s.normal.y>0?e.max.y:e.min.y,Oa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Oa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function ep(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function jg(n){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,f=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,h),a.onUploadCallback();let u;if(l instanceof Float32Array)u=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?u=n.HALF_FLOAT:u=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)u=n.SHORT;else if(l instanceof Uint32Array)u=n.UNSIGNED_INT;else if(l instanceof Int32Array)u=n.INT;else if(l instanceof Int8Array)u=n.BYTE;else if(l instanceof Uint8Array)u=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)u=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:u,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,c,l){let h=c.array,f=c.updateRanges;if(n.bindBuffer(l,a),f.length===0)n.bufferSubData(l,0,h);else{f.sort((u,g)=>u.start-g.start);let d=0;for(let u=1;u<f.length;u++){let g=f[d],_=f[u];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,f[d]=_)}f.length=d+1;for(let u=0,g=f.length;u<g;u++){let _=f[u];n.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Us=class n extends Ft{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,f=e/a,d=t/c,u=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let T=p*d-o;for(let b=0;b<l;b++){let M=b*f-r;g.push(M,-T,0),_.push(0,0,1),m.push(b/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let T=0;T<a;T++){let b=T+l*p,M=T+l*(p+1),U=T+1+l*(p+1),A=T+1+l*p;u.push(b,M,A),u.push(M,U,A)}this.setIndex(u),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(_,3)),this.setAttribute("uv",new dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Qg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,e0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,t0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,n0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,i0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,s0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,r0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,o0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,a0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,c0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,l0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,h0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,u0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,d0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,f0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,p0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,m0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,g0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,x0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,y0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,v0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,M0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,S0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,b0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,E0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,w0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,T0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,A0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,R0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,C0="gl_FragColor = linearToOutputTexel( gl_FragColor );",I0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,P0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,L0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,D0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,N0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,U0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,O0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,F0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,B0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,k0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,z0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,H0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,V0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,G0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,W0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,X0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,q0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Y0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Z0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,J0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,K0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,j0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Q0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,e_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,t_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,n_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,i_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,s_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,r_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,o_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,a_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,c_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,l_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,h_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,u_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,d_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,f_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,p_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,m_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,g_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,__=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,x_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,y_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,v_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,M_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,S_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,b_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,E_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,w_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,T_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,A_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,R_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,C_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,I_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,P_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,L_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,D_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,N_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,U_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,O_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,F_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,B_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,k_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,z_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,H_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,V_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,G_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,W_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,X_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,q_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Y_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,$_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Z_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,J_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,K_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,j_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Q_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ex=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ix=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,rx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ox=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ax=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,cx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ux=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,fx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,px=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_x=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,yx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,bx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ex=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ax=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ix=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Px=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xe={alphahash_fragment:Qg,alphahash_pars_fragment:e0,alphamap_fragment:t0,alphamap_pars_fragment:n0,alphatest_fragment:i0,alphatest_pars_fragment:s0,aomap_fragment:r0,aomap_pars_fragment:o0,batching_pars_vertex:a0,batching_vertex:c0,begin_vertex:l0,beginnormal_vertex:h0,bsdfs:u0,iridescence_fragment:d0,bumpmap_pars_fragment:f0,clipping_planes_fragment:p0,clipping_planes_pars_fragment:m0,clipping_planes_pars_vertex:g0,clipping_planes_vertex:_0,color_fragment:x0,color_pars_fragment:y0,color_pars_vertex:v0,color_vertex:M0,common:S0,cube_uv_reflection_fragment:b0,defaultnormal_vertex:E0,displacementmap_pars_vertex:w0,displacementmap_vertex:T0,emissivemap_fragment:A0,emissivemap_pars_fragment:R0,colorspace_fragment:C0,colorspace_pars_fragment:I0,envmap_fragment:P0,envmap_common_pars_fragment:L0,envmap_pars_fragment:D0,envmap_pars_vertex:N0,envmap_physical_pars_fragment:X0,envmap_vertex:U0,fog_vertex:O0,fog_pars_vertex:F0,fog_fragment:B0,fog_pars_fragment:k0,gradientmap_pars_fragment:z0,lightmap_pars_fragment:H0,lights_lambert_fragment:V0,lights_lambert_pars_fragment:G0,lights_pars_begin:W0,lights_toon_fragment:q0,lights_toon_pars_fragment:Y0,lights_phong_fragment:$0,lights_phong_pars_fragment:Z0,lights_physical_fragment:J0,lights_physical_pars_fragment:K0,lights_fragment_begin:j0,lights_fragment_maps:Q0,lights_fragment_end:e_,logdepthbuf_fragment:t_,logdepthbuf_pars_fragment:n_,logdepthbuf_pars_vertex:i_,logdepthbuf_vertex:s_,map_fragment:r_,map_pars_fragment:o_,map_particle_fragment:a_,map_particle_pars_fragment:c_,metalnessmap_fragment:l_,metalnessmap_pars_fragment:h_,morphinstance_vertex:u_,morphcolor_vertex:d_,morphnormal_vertex:f_,morphtarget_pars_vertex:p_,morphtarget_vertex:m_,normal_fragment_begin:g_,normal_fragment_maps:__,normal_pars_fragment:x_,normal_pars_vertex:y_,normal_vertex:v_,normalmap_pars_fragment:M_,clearcoat_normal_fragment_begin:S_,clearcoat_normal_fragment_maps:b_,clearcoat_pars_fragment:E_,iridescence_pars_fragment:w_,opaque_fragment:T_,packing:A_,premultiplied_alpha_fragment:R_,project_vertex:C_,dithering_fragment:I_,dithering_pars_fragment:P_,roughnessmap_fragment:L_,roughnessmap_pars_fragment:D_,shadowmap_pars_fragment:N_,shadowmap_pars_vertex:U_,shadowmap_vertex:O_,shadowmask_pars_fragment:F_,skinbase_vertex:B_,skinning_pars_vertex:k_,skinning_vertex:z_,skinnormal_vertex:H_,specularmap_fragment:V_,specularmap_pars_fragment:G_,tonemapping_fragment:W_,tonemapping_pars_fragment:X_,transmission_fragment:q_,transmission_pars_fragment:Y_,uv_pars_fragment:$_,uv_pars_vertex:Z_,uv_vertex:J_,worldpos_vertex:K_,background_vert:j_,background_frag:Q_,backgroundCube_vert:ex,backgroundCube_frag:tx,cube_vert:nx,cube_frag:ix,depth_vert:sx,depth_frag:rx,distanceRGBA_vert:ox,distanceRGBA_frag:ax,equirect_vert:cx,equirect_frag:lx,linedashed_vert:hx,linedashed_frag:ux,meshbasic_vert:dx,meshbasic_frag:fx,meshlambert_vert:px,meshlambert_frag:mx,meshmatcap_vert:gx,meshmatcap_frag:_x,meshnormal_vert:xx,meshnormal_frag:yx,meshphong_vert:vx,meshphong_frag:Mx,meshphysical_vert:Sx,meshphysical_frag:bx,meshtoon_vert:Ex,meshtoon_frag:wx,points_vert:Tx,points_frag:Ax,shadow_vert:Rx,shadow_frag:Cx,sprite_vert:Ix,sprite_frag:Px},oe={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},ti={basic:{uniforms:an([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:an([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Be(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:an([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:an([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:an([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Be(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:an([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:an([oe.points,oe.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:an([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:an([oe.common,oe.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:an([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:an([oe.sprite,oe.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:an([oe.common,oe.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:an([oe.lights,oe.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};ti.physical={uniforms:an([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};var Fa={r:0,b:0,g:0},ws=new In,Lx=new gt;function Dx(n,e,t,i,s,r,o){let a=new Be(0),c=r===!0?0:1,l,h,f=null,d=0,u=null;function g(T){let b=T.isScene===!0?T.background:null;return b&&b.isTexture&&(b=(T.backgroundBlurriness>0?t:e).get(b)),b}function _(T){let b=!1,M=g(T);M===null?p(a,c):M&&M.isColor&&(p(M,1),b=!0);let U=n.xr.getEnvironmentBlendMode();U==="additive"?i.buffers.color.setClear(0,0,0,1,o):U==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(T,b){let M=g(b);M&&(M.isCubeTexture||M.mapping===wc)?(h===void 0&&(h=new Ze(new Ns(1,1,1),new ri({name:"BackgroundCubeMaterial",uniforms:Ar(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ws.copy(b.backgroundRotation),ws.x*=-1,ws.y*=-1,ws.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ws.y*=-1,ws.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Lx.makeRotationFromEuler(ws)),h.material.toneMapped=it.getTransfer(M.colorSpace)!==lt,(f!==M||d!==M.version||u!==n.toneMapping)&&(h.material.needsUpdate=!0,f=M,d=M.version,u=n.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Ze(new Us(2,2),new ri({name:"BackgroundMaterial",uniforms:Ar(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:ji,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=it.getTransfer(M.colorSpace)!==lt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||d!==M.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,f=M,d=M.version,u=n.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function p(T,b){T.getRGB(Fa,Qf(n)),i.buffers.color.setClear(Fa.r,Fa.g,Fa.b,b,o)}return{getClearColor:function(){return a},setClearColor:function(T,b=1){a.set(T),c=b,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,p(a,c)},render:_,addToRenderList:m}}function Nx(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function a(v,I,V,H,X){let Q=!1,q=f(H,V,I);r!==q&&(r=q,l(r.object)),Q=u(v,H,V,X),Q&&g(v,H,V,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,M(v,I,V,H),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function c(){return n.createVertexArray()}function l(v){return n.bindVertexArray(v)}function h(v){return n.deleteVertexArray(v)}function f(v,I,V){let H=V.wireframe===!0,X=i[v.id];X===void 0&&(X={},i[v.id]=X);let Q=X[I.id];Q===void 0&&(Q={},X[I.id]=Q);let q=Q[H];return q===void 0&&(q=d(c()),Q[H]=q),q}function d(v){let I=[],V=[],H=[];for(let X=0;X<t;X++)I[X]=0,V[X]=0,H[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:V,attributeDivisors:H,object:v,attributes:{},index:null}}function u(v,I,V,H){let X=r.attributes,Q=I.attributes,q=0,se=V.getAttributes();for(let W in se)if(se[W].location>=0){let _e=X[W],Ie=Q[W];if(Ie===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(Ie=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(Ie=v.instanceColor)),_e===void 0||_e.attribute!==Ie||Ie&&_e.data!==Ie.data)return!0;q++}return r.attributesNum!==q||r.index!==H}function g(v,I,V,H){let X={},Q=I.attributes,q=0,se=V.getAttributes();for(let W in se)if(se[W].location>=0){let _e=Q[W];_e===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(_e=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(_e=v.instanceColor));let Ie={};Ie.attribute=_e,_e&&_e.data&&(Ie.data=_e.data),X[W]=Ie,q++}r.attributes=X,r.attributesNum=q,r.index=H}function _(){let v=r.newAttributes;for(let I=0,V=v.length;I<V;I++)v[I]=0}function m(v){p(v,0)}function p(v,I){let V=r.newAttributes,H=r.enabledAttributes,X=r.attributeDivisors;V[v]=1,H[v]===0&&(n.enableVertexAttribArray(v),H[v]=1),X[v]!==I&&(n.vertexAttribDivisor(v,I),X[v]=I)}function T(){let v=r.newAttributes,I=r.enabledAttributes;for(let V=0,H=I.length;V<H;V++)I[V]!==v[V]&&(n.disableVertexAttribArray(V),I[V]=0)}function b(v,I,V,H,X,Q,q){q===!0?n.vertexAttribIPointer(v,I,V,X,Q):n.vertexAttribPointer(v,I,V,H,X,Q)}function M(v,I,V,H){_();let X=H.attributes,Q=V.getAttributes(),q=I.defaultAttributeValues;for(let se in Q){let W=Q[se];if(W.location>=0){let he=X[se];if(he===void 0&&(se==="instanceMatrix"&&v.instanceMatrix&&(he=v.instanceMatrix),se==="instanceColor"&&v.instanceColor&&(he=v.instanceColor)),he!==void 0){let _e=he.normalized,Ie=he.itemSize,Ye=e.get(he);if(Ye===void 0)continue;let mt=Ye.buffer,$=Ye.type,re=Ye.bytesPerElement,we=$===n.INT||$===n.UNSIGNED_INT||he.gpuType===mu;if(he.isInterleavedBufferAttribute){let ue=he.data,Ne=ue.stride,ke=he.offset;if(ue.isInstancedInterleavedBuffer){for(let $e=0;$e<W.locationSize;$e++)p(W.location+$e,ue.meshPerAttribute);v.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let $e=0;$e<W.locationSize;$e++)m(W.location+$e);n.bindBuffer(n.ARRAY_BUFFER,mt);for(let $e=0;$e<W.locationSize;$e++)b(W.location+$e,Ie/W.locationSize,$,_e,Ne*re,(ke+Ie/W.locationSize*$e)*re,we)}else{if(he.isInstancedBufferAttribute){for(let ue=0;ue<W.locationSize;ue++)p(W.location+ue,he.meshPerAttribute);v.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ue=0;ue<W.locationSize;ue++)m(W.location+ue);n.bindBuffer(n.ARRAY_BUFFER,mt);for(let ue=0;ue<W.locationSize;ue++)b(W.location+ue,Ie/W.locationSize,$,_e,Ie*re,Ie/W.locationSize*ue*re,we)}}else if(q!==void 0){let _e=q[se];if(_e!==void 0)switch(_e.length){case 2:n.vertexAttrib2fv(W.location,_e);break;case 3:n.vertexAttrib3fv(W.location,_e);break;case 4:n.vertexAttrib4fv(W.location,_e);break;default:n.vertexAttrib1fv(W.location,_e)}}}}T()}function U(){D();for(let v in i){let I=i[v];for(let V in I){let H=I[V];for(let X in H)h(H[X].object),delete H[X];delete I[V]}delete i[v]}}function A(v){if(i[v.id]===void 0)return;let I=i[v.id];for(let V in I){let H=I[V];for(let X in H)h(H[X].object),delete H[X];delete I[V]}delete i[v.id]}function C(v){for(let I in i){let V=i[I];if(V[v.id]===void 0)continue;let H=V[v.id];for(let X in H)h(H[X].object),delete H[X];delete V[v.id]}}function D(){S(),o=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:S,dispose:U,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:T}}function Ux(n,e,t){let i;function s(l){i=l}function r(l,h){n.drawArrays(i,l,h),t.update(h,i,1)}function o(l,h,f){f!==0&&(n.drawArraysInstanced(i,l,h,f),t.update(h,i,f))}function a(l,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,f);let u=0;for(let g=0;g<f;g++)u+=h[g];t.update(u,i,1)}function c(l,h,f,d){if(f===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{u.multiDrawArraysInstancedWEBGL(i,l,0,h,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=h[_]*d[_];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Ox(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==Xn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let D=C===No&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==bi&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==vi&&!D)}function c(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let f=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),U=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:u,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:b,maxFragmentUniforms:M,vertexTextures:U,maxSamples:A}}function Fx(n){let e=this,t=null,i=0,s=!1,r=!1,o=new yi,a=new Ve,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let u=f.length!==0||d||i!==0||s;return s=d,i=f.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,u){let g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let T=r?0:i,b=T*4,M=p.clippingState||null;c.value=M,M=h(g,d,b,u);for(let U=0;U!==b;++U)M[U]=t[U];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,d,u,g){let _=f!==null?f.length:0,m=null;if(_!==0){if(m=c.value,g!==!0||m===null){let p=u+_*4,T=d.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,M=u;b!==_;++b,M+=4)o.copy(f[b]).applyMatrix4(T,a),o.normal.toArray(m,M),m[M+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Bx(n){let e=new WeakMap;function t(o,a){return a===Zl?o.mapping=br:a===Jl&&(o.mapping=Er),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Zl||a===Jl)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Lh(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var lc=class extends ac{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},_r=4,Kd=[.125,.215,.35,.446,.526,.582],Cs=20,Al=new lc,jd=new Be,Rl=null,Cl=0,Il=0,Pl=!1,As=(1+Math.sqrt(5))/2,dr=1/As,Qd=[new w(-As,dr,0),new w(As,dr,0),new w(-dr,0,As),new w(dr,0,As),new w(0,As,-dr),new w(0,As,dr),new w(-1,1,-1),new w(1,1,-1),new w(-1,1,1),new w(1,1,1)],hc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Rl=this._renderer.getRenderTarget(),Cl=this._renderer.getActiveCubeFace(),Il=this._renderer.getActiveMipmapLevel(),Pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Rl,Cl,Il),this._renderer.xr.enabled=Pl,e.scissorTest=!1,Ba(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===br||e.mapping===Er?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Rl=this._renderer.getRenderTarget(),Cl=this._renderer.getActiveCubeFace(),Il=this._renderer.getActiveMipmapLevel(),Pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ii,minFilter:ii,generateMipmaps:!1,type:No,format:Xn,colorSpace:Ur,depthBuffer:!1},s=ef(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ef(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kx(r)),this._blurMaterial=zx(r,e,t)}return s}_compileMaterial(e){let t=new Ze(this._lodPlanes[0],e);this._renderer.compile(t,Al)}_sceneToCubeUV(e,t,i,s){let a=new Xt(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(jd),h.toneMapping=Ji,h.autoClear=!1;let u=new Pn({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),g=new Ze(new Ns,u),_=!1,m=e.background;m?m.isColor&&(u.color.copy(m),e.background=null,_=!0):(u.color.copy(jd),_=!0);for(let p=0;p<6;p++){let T=p%3;T===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):T===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let b=this._cubeSize;Ba(s,T*b,p>2?b:0,b,b),h.setRenderTarget(s),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===br||e.mapping===Er;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=nf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ze(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;Ba(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Al)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Qd[(s-r-1)%Qd.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new Ze(this._lodPlanes[s],l),d=l.uniforms,u=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*Cs-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Cs;m>Cs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Cs}`);let p=[],T=0;for(let C=0;C<Cs;++C){let D=C/_,S=Math.exp(-D*D/2);p.push(S),C===0?T+=S:C<m&&(T+=2*S)}for(let C=0;C<p.length;C++)p[C]=p[C]/T;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-i;let M=this._sizeLods[s],U=3*M*(s>b-_r?s-b+_r:0),A=4*(this._cubeSize-M);Ba(t,U,A,3*M,2*M),c.setRenderTarget(t),c.render(f,Al)}};function kx(n){let e=[],t=[],i=[],s=n,r=n-_r+1+Kd.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>n-_r?c=Kd[o-n+_r-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),h=-l,f=1+l,d=[h,h,f,h,f,f,h,h,f,f,h,f],u=6,g=6,_=3,m=2,p=1,T=new Float32Array(_*g*u),b=new Float32Array(m*g*u),M=new Float32Array(p*g*u);for(let A=0;A<u;A++){let C=A%3*2/3-1,D=A>2?0:-1,S=[C,D,0,C+2/3,D,0,C+2/3,D+1,0,C,D,0,C+2/3,D+1,0,C,D+1,0];T.set(S,_*g*A),b.set(d,m*g*A);let v=[A,A,A,A,A,A];M.set(v,p*g*A)}let U=new Ft;U.setAttribute("position",new vn(T,_)),U.setAttribute("uv",new vn(b,m)),U.setAttribute("faceIndex",new vn(M,p)),e.push(U),s>_r&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function ef(n,e,t){let i=new Ei(n,e,t);return i.texture.mapping=wc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ba(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function zx(n,e,t){let i=new Float32Array(Cs),s=new w(0,1,0);return new ri({name:"SphericalGaussianBlur",defines:{n:Cs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function tf(){return new ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function nf(){return new ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Mu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Hx(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===Zl||c===Jl,h=c===br||c===Er;if(l||h){let f=e.get(a),d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new hc(n)),f=l?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{let u=a.image;return l&&u&&u.height>0||h&&u&&s(u)?(t===null&&(t=new hc(n)),f=l?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Vx(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&yo("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Gx(n,e,t,i){let s={},r=new WeakMap;function o(f){let d=f.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}d.removeEventListener("dispose",o),delete s[d.id];let u=r.get(d);u&&(e.remove(u),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(f){let d=f.attributes;for(let g in d)e.update(d[g],n.ARRAY_BUFFER);let u=f.morphAttributes;for(let g in u){let _=u[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],n.ARRAY_BUFFER)}}function l(f){let d=[],u=f.index,g=f.attributes.position,_=0;if(u!==null){let T=u.array;_=u.version;for(let b=0,M=T.length;b<M;b+=3){let U=T[b+0],A=T[b+1],C=T[b+2];d.push(U,A,A,C,C,U)}}else if(g!==void 0){let T=g.array;_=g.version;for(let b=0,M=T.length/3-1;b<M;b+=3){let U=b+0,A=b+1,C=b+2;d.push(U,A,A,C,C,U)}}else return;let m=new(Kf(d)?oc:rc)(d,1);m.version=_;let p=r.get(f);p&&e.remove(p),r.set(f,m)}function h(f){let d=r.get(f);if(d){let u=f.index;u!==null&&d.version<u.version&&l(f)}else l(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:h}}function Wx(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,u){n.drawElements(i,u,r,d*o),t.update(u,i,1)}function l(d,u,g){g!==0&&(n.drawElementsInstanced(i,u,r,d*o,g),t.update(u,i,g))}function h(d,u,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=u[p];t.update(m,i,1)}function f(d,u,g,_){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,u[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,u,0,r,d,0,_,0,g);let p=0;for(let T=0;T<g;T++)p+=u[T]*_[T];t.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function Xx(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function qx(n,e,t){let i=new WeakMap,s=new ut;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,d=i.get(a);if(d===void 0||d.count!==f){let S=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let u=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],T=a.morphAttributes.color||[],b=0;u===!0&&(b=1),g===!0&&(b=2),_===!0&&(b=3);let M=a.attributes.position.count*b,U=1;M>e.maxTextureSize&&(U=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let A=new Float32Array(M*U*4*f),C=new sc(A,M,U,f);C.type=vi,C.needsUpdate=!0;let D=b*4;for(let v=0;v<f;v++){let I=m[v],V=p[v],H=T[v],X=M*U*4*v;for(let Q=0;Q<I.count;Q++){let q=Q*D;u===!0&&(s.fromBufferAttribute(I,Q),A[X+q+0]=s.x,A[X+q+1]=s.y,A[X+q+2]=s.z,A[X+q+3]=0),g===!0&&(s.fromBufferAttribute(V,Q),A[X+q+4]=s.x,A[X+q+5]=s.y,A[X+q+6]=s.z,A[X+q+7]=0),_===!0&&(s.fromBufferAttribute(H,Q),A[X+q+8]=s.x,A[X+q+9]=s.y,A[X+q+10]=s.z,A[X+q+11]=H.itemSize===4?s.w:1)}}d={count:f,texture:C,size:new Me(M,U)},i.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let u=0;for(let _=0;_<l.length;_++)u+=l[_];let g=a.morphTargetsRelative?1:1-u;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function Yx(n,e,t,i){let s=new WeakMap;function r(c){let l=i.render.frame,h=c.geometry,f=e.get(c,h);if(s.get(f)!==l&&(e.update(f),s.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return f}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var uc=class extends Mn{constructor(e,t,i,s,r,o,a,c,l,h=yr){if(h!==yr&&h!==Tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===yr&&(i=Ls),i===void 0&&h===Tr&&(i=wr),super(null,s,r,o,a,c,h,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:qn,this.minFilter=c!==void 0?c:qn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},tp=new Mn,sf=new uc(1,1),np=new sc,ip=new Ih,sp=new cc,rf=[],of=[],af=new Float32Array(16),cf=new Float32Array(9),lf=new Float32Array(4);function Or(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=rf[s];if(r===void 0&&(r=new Float32Array(s),rf[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function zt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ht(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ac(n,e){let t=of[e];t===void 0&&(t=new Int32Array(e),of[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function $x(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Zx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2fv(this.addr,e),Ht(t,e)}}function Jx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;n.uniform3fv(this.addr,e),Ht(t,e)}}function Kx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4fv(this.addr,e),Ht(t,e)}}function jx(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(zt(t,i))return;lf.set(i),n.uniformMatrix2fv(this.addr,!1,lf),Ht(t,i)}}function Qx(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(zt(t,i))return;cf.set(i),n.uniformMatrix3fv(this.addr,!1,cf),Ht(t,i)}}function ey(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(zt(t,i))return;af.set(i),n.uniformMatrix4fv(this.addr,!1,af),Ht(t,i)}}function ty(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function ny(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2iv(this.addr,e),Ht(t,e)}}function iy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;n.uniform3iv(this.addr,e),Ht(t,e)}}function sy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4iv(this.addr,e),Ht(t,e)}}function ry(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function oy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2uiv(this.addr,e),Ht(t,e)}}function ay(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;n.uniform3uiv(this.addr,e),Ht(t,e)}}function cy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4uiv(this.addr,e),Ht(t,e)}}function ly(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(sf.compareFunction=Jf,r=sf):r=tp,t.setTexture2D(e||r,s)}function hy(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||ip,s)}function uy(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||sp,s)}function dy(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||np,s)}function fy(n){switch(n){case 5126:return $x;case 35664:return Zx;case 35665:return Jx;case 35666:return Kx;case 35674:return jx;case 35675:return Qx;case 35676:return ey;case 5124:case 35670:return ty;case 35667:case 35671:return ny;case 35668:case 35672:return iy;case 35669:case 35673:return sy;case 5125:return ry;case 36294:return oy;case 36295:return ay;case 36296:return cy;case 35678:case 36198:case 36298:case 36306:case 35682:return ly;case 35679:case 36299:case 36307:return hy;case 35680:case 36300:case 36308:case 36293:return uy;case 36289:case 36303:case 36311:case 36292:return dy}}function py(n,e){n.uniform1fv(this.addr,e)}function my(n,e){let t=Or(e,this.size,2);n.uniform2fv(this.addr,t)}function gy(n,e){let t=Or(e,this.size,3);n.uniform3fv(this.addr,t)}function _y(n,e){let t=Or(e,this.size,4);n.uniform4fv(this.addr,t)}function xy(n,e){let t=Or(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function yy(n,e){let t=Or(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function vy(n,e){let t=Or(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function My(n,e){n.uniform1iv(this.addr,e)}function Sy(n,e){n.uniform2iv(this.addr,e)}function by(n,e){n.uniform3iv(this.addr,e)}function Ey(n,e){n.uniform4iv(this.addr,e)}function wy(n,e){n.uniform1uiv(this.addr,e)}function Ty(n,e){n.uniform2uiv(this.addr,e)}function Ay(n,e){n.uniform3uiv(this.addr,e)}function Ry(n,e){n.uniform4uiv(this.addr,e)}function Cy(n,e,t){let i=this.cache,s=e.length,r=Ac(t,s);zt(i,r)||(n.uniform1iv(this.addr,r),Ht(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||tp,r[o])}function Iy(n,e,t){let i=this.cache,s=e.length,r=Ac(t,s);zt(i,r)||(n.uniform1iv(this.addr,r),Ht(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||ip,r[o])}function Py(n,e,t){let i=this.cache,s=e.length,r=Ac(t,s);zt(i,r)||(n.uniform1iv(this.addr,r),Ht(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||sp,r[o])}function Ly(n,e,t){let i=this.cache,s=e.length,r=Ac(t,s);zt(i,r)||(n.uniform1iv(this.addr,r),Ht(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||np,r[o])}function Dy(n){switch(n){case 5126:return py;case 35664:return my;case 35665:return gy;case 35666:return _y;case 35674:return xy;case 35675:return yy;case 35676:return vy;case 5124:case 35670:return My;case 35667:case 35671:return Sy;case 35668:case 35672:return by;case 35669:case 35673:return Ey;case 5125:return wy;case 36294:return Ty;case 36295:return Ay;case 36296:return Ry;case 35678:case 36198:case 36298:case 36306:case 35682:return Cy;case 35679:case 36299:case 36307:return Iy;case 35680:case 36300:case 36308:case 36293:return Py;case 36289:case 36303:case 36311:case 36292:return Ly}}var Dh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=fy(t.type)}},Nh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Dy(t.type)}},Uh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Ll=/(\w+)(\])?(\[|\.)?/g;function hf(n,e){n.seq.push(e),n.map[e.id]=e}function Ny(n,e,t){let i=n.name,s=i.length;for(Ll.lastIndex=0;;){let r=Ll.exec(i),o=Ll.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){hf(t,l===void 0?new Dh(a,n,e):new Nh(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new Uh(a),hf(t,f)),t=f}}}var Mr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Ny(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function uf(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Uy=37297,Oy=0;function Fy(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var df=new Ve;function By(n){it._getMatrix(df,it.workingColorSpace,n);let e=`mat3( ${df.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(n)){case Tc:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function ff(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Fy(n.getShaderSource(e),o)}else return s}function ky(n,e){let t=By(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function zy(n,e){let t;switch(e){case dg:t="Linear";break;case fg:t="Reinhard";break;case pg:t="Cineon";break;case pu:t="ACESFilmic";break;case gg:t="AgX";break;case _g:t="Neutral";break;case mg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ka=new w;function Hy(){it.getLuminanceCoefficients(ka);let n=ka.x.toFixed(4),e=ka.y.toFixed(4),t=ka.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vy(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vo).join(`
`)}function Gy(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Wy(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function vo(n){return n!==""}function pf(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Xy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oh(n){return n.replace(Xy,Yy)}var qy=new Map;function Yy(n,e){let t=Xe[e];if(t===void 0){let i=qy.get(e);if(i!==void 0)t=Xe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Oh(t)}var $y=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gf(n){return n.replace($y,Zy)}function Zy(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function _f(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Jy(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Of?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===fu?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===xi&&(e="SHADOWMAP_TYPE_VSM"),e}function Ky(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case br:case Er:e="ENVMAP_TYPE_CUBE";break;case wc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function jy(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Er:e="ENVMAP_MODE_REFRACTION";break}return e}function Qy(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ff:e="ENVMAP_BLENDING_MULTIPLY";break;case hg:e="ENVMAP_BLENDING_MIX";break;case ug:e="ENVMAP_BLENDING_ADD";break}return e}function ev(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function tv(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=Jy(t),l=Ky(t),h=jy(t),f=Qy(t),d=ev(t),u=Vy(t),g=Gy(r),_=s.createProgram(),m,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(vo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(vo).join(`
`),p.length>0&&(p+=`
`)):(m=[_f(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vo).join(`
`),p=[_f(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ji?"#define TONE_MAPPING":"",t.toneMapping!==Ji?Xe.tonemapping_pars_fragment:"",t.toneMapping!==Ji?zy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,ky("linearToOutputTexel",t.outputColorSpace),Hy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(vo).join(`
`)),o=Oh(o),o=pf(o,t),o=mf(o,t),a=Oh(a),a=pf(a,t),a=mf(a,t),o=gf(o),a=gf(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Id?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Id?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let b=T+m+o,M=T+p+a,U=uf(s,s.VERTEX_SHADER,b),A=uf(s,s.FRAGMENT_SHADER,M);s.attachShader(_,U),s.attachShader(_,A),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(I){if(n.debug.checkShaderErrors){let V=s.getProgramInfoLog(_).trim(),H=s.getShaderInfoLog(U).trim(),X=s.getShaderInfoLog(A).trim(),Q=!0,q=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,U,A);else{let se=ff(s,U,"vertex"),W=ff(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+V+`
`+se+`
`+W)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(H===""||X==="")&&(q=!1);q&&(I.diagnostics={runnable:Q,programLog:V,vertexShader:{log:H,prefix:m},fragmentShader:{log:X,prefix:p}})}s.deleteShader(U),s.deleteShader(A),D=new Mr(s,_),S=Wy(s,_)}let D;this.getUniforms=function(){return D===void 0&&C(this),D};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(_,Uy)),v},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Oy++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=U,this.fragmentShader=A,this}var nv=0,Fh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Bh(e),t.set(e,i)),i}},Bh=class{constructor(e){this.id=nv++,this.code=e,this.usedTimes=0}};function iv(n,e,t,i,s,r,o){let a=new wo,c=new Fh,l=new Set,h=[],f=s.logarithmicDepthBuffer,d=s.vertexTextures,u=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,v,I,V,H){let X=V.fog,Q=H.geometry,q=S.isMeshStandardMaterial?V.environment:null,se=(S.isMeshStandardMaterial?t:e).get(S.envMap||q),W=se&&se.mapping===wc?se.image.height:null,he=g[S.type];S.precision!==null&&(u=s.getMaxPrecision(S.precision),u!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",u,"instead."));let _e=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Ie=_e!==void 0?_e.length:0,Ye=0;Q.morphAttributes.position!==void 0&&(Ye=1),Q.morphAttributes.normal!==void 0&&(Ye=2),Q.morphAttributes.color!==void 0&&(Ye=3);let mt,$,re,we;if(he){let ct=ti[he];mt=ct.vertexShader,$=ct.fragmentShader}else mt=S.vertexShader,$=S.fragmentShader,c.update(S),re=c.getVertexShaderID(S),we=c.getFragmentShaderID(S);let ue=n.getRenderTarget(),Ne=n.state.buffers.depth.getReversed(),ke=H.isInstancedMesh===!0,$e=H.isBatchedMesh===!0,It=!!S.map,tt=!!S.matcap,Dt=!!se,O=!!S.aoMap,Tn=!!S.lightMap,Ke=!!S.bumpMap,je=!!S.normalMap,Le=!!S.displacementMap,bt=!!S.emissiveMap,Pe=!!S.metalnessMap,E=!!S.roughnessMap,x=S.anisotropy>0,F=S.clearcoat>0,Z=S.dispersion>0,ee=S.iridescence>0,Y=S.sheen>0,Te=S.transmission>0,de=x&&!!S.anisotropyMap,xe=F&&!!S.clearcoatMap,nt=F&&!!S.clearcoatNormalMap,ne=F&&!!S.clearcoatRoughnessMap,ye=ee&&!!S.iridescenceMap,De=ee&&!!S.iridescenceThicknessMap,Oe=Y&&!!S.sheenColorMap,ve=Y&&!!S.sheenRoughnessMap,Qe=!!S.specularMap,We=!!S.specularColorMap,vt=!!S.specularIntensityMap,P=Te&&!!S.transmissionMap,le=Te&&!!S.thicknessMap,G=!!S.gradientMap,J=!!S.alphaMap,me=S.alphaTest>0,fe=!!S.alphaHash,ze=!!S.extensions,Lt=Ji;S.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(Lt=n.toneMapping);let Zt={shaderID:he,shaderType:S.type,shaderName:S.name,vertexShader:mt,fragmentShader:$,defines:S.defines,customVertexShaderID:re,customFragmentShaderID:we,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:u,batching:$e,batchingColor:$e&&H._colorsTexture!==null,instancing:ke,instancingColor:ke&&H.instanceColor!==null,instancingMorph:ke&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ue===null?n.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Ur,alphaToCoverage:!!S.alphaToCoverage,map:It,matcap:tt,envMap:Dt,envMapMode:Dt&&se.mapping,envMapCubeUVHeight:W,aoMap:O,lightMap:Tn,bumpMap:Ke,normalMap:je,displacementMap:d&&Le,emissiveMap:bt,normalMapObjectSpace:je&&S.normalMapType===Mg,normalMapTangentSpace:je&&S.normalMapType===Zf,metalnessMap:Pe,roughnessMap:E,anisotropy:x,anisotropyMap:de,clearcoat:F,clearcoatMap:xe,clearcoatNormalMap:nt,clearcoatRoughnessMap:ne,dispersion:Z,iridescence:ee,iridescenceMap:ye,iridescenceThicknessMap:De,sheen:Y,sheenColorMap:Oe,sheenRoughnessMap:ve,specularMap:Qe,specularColorMap:We,specularIntensityMap:vt,transmission:Te,transmissionMap:P,thicknessMap:le,gradientMap:G,opaque:S.transparent===!1&&S.blending===xr&&S.alphaToCoverage===!1,alphaMap:J,alphaTest:me,alphaHash:fe,combine:S.combine,mapUv:It&&_(S.map.channel),aoMapUv:O&&_(S.aoMap.channel),lightMapUv:Tn&&_(S.lightMap.channel),bumpMapUv:Ke&&_(S.bumpMap.channel),normalMapUv:je&&_(S.normalMap.channel),displacementMapUv:Le&&_(S.displacementMap.channel),emissiveMapUv:bt&&_(S.emissiveMap.channel),metalnessMapUv:Pe&&_(S.metalnessMap.channel),roughnessMapUv:E&&_(S.roughnessMap.channel),anisotropyMapUv:de&&_(S.anisotropyMap.channel),clearcoatMapUv:xe&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:nt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:De&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:ve&&_(S.sheenRoughnessMap.channel),specularMapUv:Qe&&_(S.specularMap.channel),specularColorMapUv:We&&_(S.specularColorMap.channel),specularIntensityMapUv:vt&&_(S.specularIntensityMap.channel),transmissionMapUv:P&&_(S.transmissionMap.channel),thicknessMapUv:le&&_(S.thicknessMap.channel),alphaMapUv:J&&_(S.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(je||x),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!Q.attributes.uv&&(It||J),fog:!!X,useFog:S.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Ne,skinning:H.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:Ie,morphTextureStride:Ye,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:Lt,decodeVideoTexture:It&&S.map.isVideoTexture===!0&&it.getTransfer(S.map.colorSpace)===lt,decodeVideoTextureEmissive:bt&&S.emissiveMap.isVideoTexture===!0&&it.getTransfer(S.emissiveMap.colorSpace)===lt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Cn,flipSided:S.side===pn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ze&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&S.extensions.multiDraw===!0||$e)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Zt.vertexUv1s=l.has(1),Zt.vertexUv2s=l.has(2),Zt.vertexUv3s=l.has(3),l.clear(),Zt}function p(S){let v=[];if(S.shaderID?v.push(S.shaderID):(v.push(S.customVertexShaderID),v.push(S.customFragmentShaderID)),S.defines!==void 0)for(let I in S.defines)v.push(I),v.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(T(v,S),b(v,S),v.push(n.outputColorSpace)),v.push(S.customProgramCacheKey),v.join()}function T(S,v){S.push(v.precision),S.push(v.outputColorSpace),S.push(v.envMapMode),S.push(v.envMapCubeUVHeight),S.push(v.mapUv),S.push(v.alphaMapUv),S.push(v.lightMapUv),S.push(v.aoMapUv),S.push(v.bumpMapUv),S.push(v.normalMapUv),S.push(v.displacementMapUv),S.push(v.emissiveMapUv),S.push(v.metalnessMapUv),S.push(v.roughnessMapUv),S.push(v.anisotropyMapUv),S.push(v.clearcoatMapUv),S.push(v.clearcoatNormalMapUv),S.push(v.clearcoatRoughnessMapUv),S.push(v.iridescenceMapUv),S.push(v.iridescenceThicknessMapUv),S.push(v.sheenColorMapUv),S.push(v.sheenRoughnessMapUv),S.push(v.specularMapUv),S.push(v.specularColorMapUv),S.push(v.specularIntensityMapUv),S.push(v.transmissionMapUv),S.push(v.thicknessMapUv),S.push(v.combine),S.push(v.fogExp2),S.push(v.sizeAttenuation),S.push(v.morphTargetsCount),S.push(v.morphAttributeCount),S.push(v.numDirLights),S.push(v.numPointLights),S.push(v.numSpotLights),S.push(v.numSpotLightMaps),S.push(v.numHemiLights),S.push(v.numRectAreaLights),S.push(v.numDirLightShadows),S.push(v.numPointLightShadows),S.push(v.numSpotLightShadows),S.push(v.numSpotLightShadowsWithMaps),S.push(v.numLightProbes),S.push(v.shadowMapType),S.push(v.toneMapping),S.push(v.numClippingPlanes),S.push(v.numClipIntersection),S.push(v.depthPacking)}function b(S,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),S.push(a.mask)}function M(S){let v=g[S.type],I;if(v){let V=ti[v];I=Yg.clone(V.uniforms)}else I=S.uniforms;return I}function U(S,v){let I;for(let V=0,H=h.length;V<H;V++){let X=h[V];if(X.cacheKey===v){I=X,++I.usedTimes;break}}return I===void 0&&(I=new tv(n,v,S,r),h.push(I)),I}function A(S){if(--S.usedTimes===0){let v=h.indexOf(S);h[v]=h[h.length-1],h.pop(),S.destroy()}}function C(S){c.remove(S)}function D(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:U,releaseProgram:A,releaseShaderCache:C,programs:h,dispose:D}}function sv(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function rv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function xf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function yf(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(f,d,u,g,_,m){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:d,material:u,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},n[e]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=u,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),e++,p}function a(f,d,u,g,_,m){let p=o(f,d,u,g,_,m);u.transmission>0?i.push(p):u.transparent===!0?s.push(p):t.push(p)}function c(f,d,u,g,_,m){let p=o(f,d,u,g,_,m);u.transmission>0?i.unshift(p):u.transparent===!0?s.unshift(p):t.unshift(p)}function l(f,d){t.length>1&&t.sort(f||rv),i.length>1&&i.sort(d||xf),s.length>1&&s.sort(d||xf)}function h(){for(let f=e,d=n.length;f<d;f++){let u=n[f];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function ov(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new yf,n.set(i,[o])):s>=r.length?(o=new yf,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function av(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new w,color:new Be};break;case"SpotLight":t={position:new w,direction:new w,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new w,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new w,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new w,halfWidth:new w,halfHeight:new w};break}return n[e.id]=t,t}}}function cv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var lv=0;function hv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function uv(n){let e=new av,t=cv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new w);let s=new w,r=new gt,o=new gt;function a(l){let h=0,f=0,d=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let u=0,g=0,_=0,m=0,p=0,T=0,b=0,M=0,U=0,A=0,C=0;l.sort(hv);for(let S=0,v=l.length;S<v;S++){let I=l[S],V=I.color,H=I.intensity,X=I.distance,Q=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=V.r*H,f+=V.g*H,d+=V.b*H;else if(I.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(I.sh.coefficients[q],H);C++}else if(I.isDirectionalLight){let q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let se=I.shadow,W=t.get(I);W.shadowIntensity=se.intensity,W.shadowBias=se.bias,W.shadowNormalBias=se.normalBias,W.shadowRadius=se.radius,W.shadowMapSize=se.mapSize,i.directionalShadow[u]=W,i.directionalShadowMap[u]=Q,i.directionalShadowMatrix[u]=I.shadow.matrix,T++}i.directional[u]=q,u++}else if(I.isSpotLight){let q=e.get(I);q.position.setFromMatrixPosition(I.matrixWorld),q.color.copy(V).multiplyScalar(H),q.distance=X,q.coneCos=Math.cos(I.angle),q.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),q.decay=I.decay,i.spot[_]=q;let se=I.shadow;if(I.map&&(i.spotLightMap[U]=I.map,U++,se.updateMatrices(I),I.castShadow&&A++),i.spotLightMatrix[_]=se.matrix,I.castShadow){let W=t.get(I);W.shadowIntensity=se.intensity,W.shadowBias=se.bias,W.shadowNormalBias=se.normalBias,W.shadowRadius=se.radius,W.shadowMapSize=se.mapSize,i.spotShadow[_]=W,i.spotShadowMap[_]=Q,M++}_++}else if(I.isRectAreaLight){let q=e.get(I);q.color.copy(V).multiplyScalar(H),q.halfWidth.set(I.width*.5,0,0),q.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=q,m++}else if(I.isPointLight){let q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),q.distance=I.distance,q.decay=I.decay,I.castShadow){let se=I.shadow,W=t.get(I);W.shadowIntensity=se.intensity,W.shadowBias=se.bias,W.shadowNormalBias=se.normalBias,W.shadowRadius=se.radius,W.shadowMapSize=se.mapSize,W.shadowCameraNear=se.camera.near,W.shadowCameraFar=se.camera.far,i.pointShadow[g]=W,i.pointShadowMap[g]=Q,i.pointShadowMatrix[g]=I.shadow.matrix,b++}i.point[g]=q,g++}else if(I.isHemisphereLight){let q=e.get(I);q.skyColor.copy(I.color).multiplyScalar(H),q.groundColor.copy(I.groundColor).multiplyScalar(H),i.hemi[p]=q,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=d;let D=i.hash;(D.directionalLength!==u||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==T||D.numPointShadows!==b||D.numSpotShadows!==M||D.numSpotMaps!==U||D.numLightProbes!==C)&&(i.directional.length=u,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=M+U-A,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=C,D.directionalLength=u,D.pointLength=g,D.spotLength=_,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=T,D.numPointShadows=b,D.numSpotShadows=M,D.numSpotMaps=U,D.numLightProbes=C,i.version=lv++)}function c(l,h){let f=0,d=0,u=0,g=0,_=0,m=h.matrixWorldInverse;for(let p=0,T=l.length;p<T;p++){let b=l[p];if(b.isDirectionalLight){let M=i.directional[f];M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),f++}else if(b.isSpotLight){let M=i.spot[u];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),u++}else if(b.isRectAreaLight){let M=i.rectArea[g];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){let M=i.point[d];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){let M=i.hemi[_];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:i}}function vf(n){let e=new uv(n),t=[],i=[];function s(h){l.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function dv(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new vf(n),e.set(s,[a])):r>=o.length?(a=new vf(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var kh=class extends si{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=yg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},zh=class extends si{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},fv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function mv(n,e,t){let i=new To,s=new Me,r=new Me,o=new ut,a=new kh({depthPacking:vg}),c=new zh,l={},h=t.maxTextureSize,f={[ji]:pn,[pn]:ji,[Cn]:Cn},d=new ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:fv,fragmentShader:pv}),u=d.clone();u.defines.HORIZONTAL_PASS=1;let g=new Ft;g.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ze(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Of;let p=this.type;this.render=function(A,C,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let S=n.getRenderTarget(),v=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),V=n.state;V.setBlending(Zi),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let H=p!==xi&&this.type===xi,X=p===xi&&this.type!==xi;for(let Q=0,q=A.length;Q<q;Q++){let se=A[Q],W=se.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let he=W.getFrameExtents();if(s.multiply(he),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/he.x),s.x=r.x*he.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/he.y),s.y=r.y*he.y,W.mapSize.y=r.y)),W.map===null||H===!0||X===!0){let Ie=this.type!==xi?{minFilter:qn,magFilter:qn}:{};W.map!==null&&W.map.dispose(),W.map=new Ei(s.x,s.y,Ie),W.map.texture.name=se.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();let _e=W.getViewportCount();for(let Ie=0;Ie<_e;Ie++){let Ye=W.getViewport(Ie);o.set(r.x*Ye.x,r.y*Ye.y,r.x*Ye.z,r.y*Ye.w),V.viewport(o),W.updateMatrices(se,Ie),i=W.getFrustum(),M(C,D,W.camera,se,this.type)}W.isPointLightShadow!==!0&&this.type===xi&&T(W,D),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(S,v,I)};function T(A,C){let D=e.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,u.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ei(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(C,null,D,d,_,null),u.uniforms.shadow_pass.value=A.mapPass.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(C,null,D,u,_,null)}function b(A,C,D,S){let v=null,I=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)v=I;else if(v=D.isPointLight===!0?c:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let V=v.uuid,H=C.uuid,X=l[V];X===void 0&&(X={},l[V]=X);let Q=X[H];Q===void 0&&(Q=v.clone(),X[H]=Q,C.addEventListener("dispose",U)),v=Q}if(v.visible=C.visible,v.wireframe=C.wireframe,S===xi?v.side=C.shadowSide!==null?C.shadowSide:C.side:v.side=C.shadowSide!==null?C.shadowSide:f[C.side],v.alphaMap=C.alphaMap,v.alphaTest=C.alphaTest,v.map=C.map,v.clipShadows=C.clipShadows,v.clippingPlanes=C.clippingPlanes,v.clipIntersection=C.clipIntersection,v.displacementMap=C.displacementMap,v.displacementScale=C.displacementScale,v.displacementBias=C.displacementBias,v.wireframeLinewidth=C.wireframeLinewidth,v.linewidth=C.linewidth,D.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let V=n.properties.get(v);V.light=D}return v}function M(A,C,D,S,v){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===xi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);let H=e.update(A),X=A.material;if(Array.isArray(X)){let Q=H.groups;for(let q=0,se=Q.length;q<se;q++){let W=Q[q],he=X[W.materialIndex];if(he&&he.visible){let _e=b(A,he,S,v);A.onBeforeShadow(n,A,C,D,H,_e,W),n.renderBufferDirect(D,null,H,_e,A,W),A.onAfterShadow(n,A,C,D,H,_e,W)}}}else if(X.visible){let Q=b(A,X,S,v);A.onBeforeShadow(n,A,C,D,H,Q,null),n.renderBufferDirect(D,null,H,Q,A,null),A.onAfterShadow(n,A,C,D,H,Q,null)}}let V=A.children;for(let H=0,X=V.length;H<X;H++)M(V[H],C,D,S,v)}function U(A){A.target.removeEventListener("dispose",U);for(let D in l){let S=l[D],v=A.target.uuid;v in S&&(S[v].dispose(),delete S[v])}}}var gv={[Vl]:Gl,[Wl]:Yl,[Xl]:$l,[Sr]:ql,[Gl]:Vl,[Yl]:Wl,[$l]:Xl,[ql]:Sr};function _v(n,e){function t(){let P=!1,le=new ut,G=null,J=new ut(0,0,0,0);return{setMask:function(me){G!==me&&!P&&(n.colorMask(me,me,me,me),G=me)},setLocked:function(me){P=me},setClear:function(me,fe,ze,Lt,Zt){Zt===!0&&(me*=Lt,fe*=Lt,ze*=Lt),le.set(me,fe,ze,Lt),J.equals(le)===!1&&(n.clearColor(me,fe,ze,Lt),J.copy(le))},reset:function(){P=!1,G=null,J.set(-1,0,0,0)}}}function i(){let P=!1,le=!1,G=null,J=null,me=null;return{setReversed:function(fe){if(le!==fe){let ze=e.get("EXT_clip_control");le?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT);let Lt=me;me=null,this.setClear(Lt)}le=fe},getReversed:function(){return le},setTest:function(fe){fe?ue(n.DEPTH_TEST):Ne(n.DEPTH_TEST)},setMask:function(fe){G!==fe&&!P&&(n.depthMask(fe),G=fe)},setFunc:function(fe){if(le&&(fe=gv[fe]),J!==fe){switch(fe){case Vl:n.depthFunc(n.NEVER);break;case Gl:n.depthFunc(n.ALWAYS);break;case Wl:n.depthFunc(n.LESS);break;case Sr:n.depthFunc(n.LEQUAL);break;case Xl:n.depthFunc(n.EQUAL);break;case ql:n.depthFunc(n.GEQUAL);break;case Yl:n.depthFunc(n.GREATER);break;case $l:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}J=fe}},setLocked:function(fe){P=fe},setClear:function(fe){me!==fe&&(le&&(fe=1-fe),n.clearDepth(fe),me=fe)},reset:function(){P=!1,G=null,J=null,me=null,le=!1}}}function s(){let P=!1,le=null,G=null,J=null,me=null,fe=null,ze=null,Lt=null,Zt=null;return{setTest:function(ct){P||(ct?ue(n.STENCIL_TEST):Ne(n.STENCIL_TEST))},setMask:function(ct){le!==ct&&!P&&(n.stencilMask(ct),le=ct)},setFunc:function(ct,zn,ui){(G!==ct||J!==zn||me!==ui)&&(n.stencilFunc(ct,zn,ui),G=ct,J=zn,me=ui)},setOp:function(ct,zn,ui){(fe!==ct||ze!==zn||Lt!==ui)&&(n.stencilOp(ct,zn,ui),fe=ct,ze=zn,Lt=ui)},setLocked:function(ct){P=ct},setClear:function(ct){Zt!==ct&&(n.clearStencil(ct),Zt=ct)},reset:function(){P=!1,le=null,G=null,J=null,me=null,fe=null,ze=null,Lt=null,Zt=null}}}let r=new t,o=new i,a=new s,c=new WeakMap,l=new WeakMap,h={},f={},d=new WeakMap,u=[],g=null,_=!1,m=null,p=null,T=null,b=null,M=null,U=null,A=null,C=new Be(0,0,0),D=0,S=!1,v=null,I=null,V=null,H=null,X=null,Q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,se=0,W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(W)[1]),q=se>=1):W.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),q=se>=2);let he=null,_e={},Ie=n.getParameter(n.SCISSOR_BOX),Ye=n.getParameter(n.VIEWPORT),mt=new ut().fromArray(Ie),$=new ut().fromArray(Ye);function re(P,le,G,J){let me=new Uint8Array(4),fe=n.createTexture();n.bindTexture(P,fe),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ze=0;ze<G;ze++)P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY?n.texImage3D(le,0,n.RGBA,1,1,J,0,n.RGBA,n.UNSIGNED_BYTE,me):n.texImage2D(le+ze,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,me);return fe}let we={};we[n.TEXTURE_2D]=re(n.TEXTURE_2D,n.TEXTURE_2D,1),we[n.TEXTURE_CUBE_MAP]=re(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),we[n.TEXTURE_2D_ARRAY]=re(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),we[n.TEXTURE_3D]=re(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ue(n.DEPTH_TEST),o.setFunc(Sr),Ke(!1),je(Sd),ue(n.CULL_FACE),O(Zi);function ue(P){h[P]!==!0&&(n.enable(P),h[P]=!0)}function Ne(P){h[P]!==!1&&(n.disable(P),h[P]=!1)}function ke(P,le){return f[P]!==le?(n.bindFramebuffer(P,le),f[P]=le,P===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=le),P===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=le),!0):!1}function $e(P,le){let G=u,J=!1;if(P){G=d.get(le),G===void 0&&(G=[],d.set(le,G));let me=P.textures;if(G.length!==me.length||G[0]!==n.COLOR_ATTACHMENT0){for(let fe=0,ze=me.length;fe<ze;fe++)G[fe]=n.COLOR_ATTACHMENT0+fe;G.length=me.length,J=!0}}else G[0]!==n.BACK&&(G[0]=n.BACK,J=!0);J&&n.drawBuffers(G)}function It(P){return g!==P?(n.useProgram(P),g=P,!0):!1}let tt={[Rs]:n.FUNC_ADD,[Ym]:n.FUNC_SUBTRACT,[$m]:n.FUNC_REVERSE_SUBTRACT};tt[Zm]=n.MIN,tt[Jm]=n.MAX;let Dt={[Km]:n.ZERO,[jm]:n.ONE,[Qm]:n.SRC_COLOR,[zl]:n.SRC_ALPHA,[rg]:n.SRC_ALPHA_SATURATE,[ig]:n.DST_COLOR,[tg]:n.DST_ALPHA,[eg]:n.ONE_MINUS_SRC_COLOR,[Hl]:n.ONE_MINUS_SRC_ALPHA,[sg]:n.ONE_MINUS_DST_COLOR,[ng]:n.ONE_MINUS_DST_ALPHA,[og]:n.CONSTANT_COLOR,[ag]:n.ONE_MINUS_CONSTANT_COLOR,[cg]:n.CONSTANT_ALPHA,[lg]:n.ONE_MINUS_CONSTANT_ALPHA};function O(P,le,G,J,me,fe,ze,Lt,Zt,ct){if(P===Zi){_===!0&&(Ne(n.BLEND),_=!1);return}if(_===!1&&(ue(n.BLEND),_=!0),P!==qm){if(P!==m||ct!==S){if((p!==Rs||M!==Rs)&&(n.blendEquation(n.FUNC_ADD),p=Rs,M=Rs),ct)switch(P){case xr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case bd:n.blendFunc(n.ONE,n.ONE);break;case Ed:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case wd:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case xr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case bd:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ed:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case wd:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}T=null,b=null,U=null,A=null,C.set(0,0,0),D=0,m=P,S=ct}return}me=me||le,fe=fe||G,ze=ze||J,(le!==p||me!==M)&&(n.blendEquationSeparate(tt[le],tt[me]),p=le,M=me),(G!==T||J!==b||fe!==U||ze!==A)&&(n.blendFuncSeparate(Dt[G],Dt[J],Dt[fe],Dt[ze]),T=G,b=J,U=fe,A=ze),(Lt.equals(C)===!1||Zt!==D)&&(n.blendColor(Lt.r,Lt.g,Lt.b,Zt),C.copy(Lt),D=Zt),m=P,S=!1}function Tn(P,le){P.side===Cn?Ne(n.CULL_FACE):ue(n.CULL_FACE);let G=P.side===pn;le&&(G=!G),Ke(G),P.blending===xr&&P.transparent===!1?O(Zi):O(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),o.setFunc(P.depthFunc),o.setTest(P.depthTest),o.setMask(P.depthWrite),r.setMask(P.colorWrite);let J=P.stencilWrite;a.setTest(J),J&&(a.setMask(P.stencilWriteMask),a.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),a.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),bt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ue(n.SAMPLE_ALPHA_TO_COVERAGE):Ne(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(P){v!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),v=P)}function je(P){P!==Wm?(ue(n.CULL_FACE),P!==I&&(P===Sd?n.cullFace(n.BACK):P===Xm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ne(n.CULL_FACE),I=P}function Le(P){P!==V&&(q&&n.lineWidth(P),V=P)}function bt(P,le,G){P?(ue(n.POLYGON_OFFSET_FILL),(H!==le||X!==G)&&(n.polygonOffset(le,G),H=le,X=G)):Ne(n.POLYGON_OFFSET_FILL)}function Pe(P){P?ue(n.SCISSOR_TEST):Ne(n.SCISSOR_TEST)}function E(P){P===void 0&&(P=n.TEXTURE0+Q-1),he!==P&&(n.activeTexture(P),he=P)}function x(P,le,G){G===void 0&&(he===null?G=n.TEXTURE0+Q-1:G=he);let J=_e[G];J===void 0&&(J={type:void 0,texture:void 0},_e[G]=J),(J.type!==P||J.texture!==le)&&(he!==G&&(n.activeTexture(G),he=G),n.bindTexture(P,le||we[P]),J.type=P,J.texture=le)}function F(){let P=_e[he];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Z(){try{n.compressedTexImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ee(){try{n.compressedTexImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Y(){try{n.texSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Te(){try{n.texSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function de(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function xe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function nt(){try{n.texStorage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ne(){try{n.texStorage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ye(){try{n.texImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function De(){try{n.texImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Oe(P){mt.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),mt.copy(P))}function ve(P){$.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),$.copy(P))}function Qe(P,le){let G=l.get(le);G===void 0&&(G=new WeakMap,l.set(le,G));let J=G.get(P);J===void 0&&(J=n.getUniformBlockIndex(le,P.name),G.set(P,J))}function We(P,le){let J=l.get(le).get(P);c.get(le)!==J&&(n.uniformBlockBinding(le,J,P.__bindingPointIndex),c.set(le,J))}function vt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},he=null,_e={},f={},d=new WeakMap,u=[],g=null,_=!1,m=null,p=null,T=null,b=null,M=null,U=null,A=null,C=new Be(0,0,0),D=0,S=!1,v=null,I=null,V=null,H=null,X=null,mt.set(0,0,n.canvas.width,n.canvas.height),$.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ue,disable:Ne,bindFramebuffer:ke,drawBuffers:$e,useProgram:It,setBlending:O,setMaterial:Tn,setFlipSided:Ke,setCullFace:je,setLineWidth:Le,setPolygonOffset:bt,setScissorTest:Pe,activeTexture:E,bindTexture:x,unbindTexture:F,compressedTexImage2D:Z,compressedTexImage3D:ee,texImage2D:ye,texImage3D:De,updateUBOMapping:Qe,uniformBlockBinding:We,texStorage2D:nt,texStorage3D:ne,texSubImage2D:Y,texSubImage3D:Te,compressedTexSubImage2D:de,compressedTexSubImage3D:xe,scissor:Oe,viewport:ve,reset:vt}}function Mf(n,e,t,i){let s=xv(i);switch(t){case Vf:return n*e;case Wf:return n*e;case Xf:return n*e*2;case qf:return n*e/s.components*s.byteLength;case xu:return n*e/s.components*s.byteLength;case Yf:return n*e*2/s.components*s.byteLength;case yu:return n*e*2/s.components*s.byteLength;case Gf:return n*e*3/s.components*s.byteLength;case Xn:return n*e*4/s.components*s.byteLength;case vu:return n*e*4/s.components*s.byteLength;case Za:case Ja:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ka:case ja:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case eh:case nh:return Math.max(n,16)*Math.max(e,8)/4;case Ql:case th:return Math.max(n,8)*Math.max(e,8)/2;case ih:case sh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case rh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case oh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ah:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ch:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case lh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case hh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case uh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case dh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case fh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ph:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case mh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case gh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case _h:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case xh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case yh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Qa:case vh:case Mh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case $f:case Sh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case bh:case Eh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function xv(n){switch(n){case bi:case kf:return{byteLength:1,components:1};case Eo:case zf:case No:return{byteLength:2,components:1};case gu:case _u:return{byteLength:2,components:4};case Ls:case mu:case vi:return{byteLength:4,components:1};case Hf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function yv(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Me,h=new WeakMap,f,d=new WeakMap,u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,x){return u?new OffscreenCanvas(E,x):nc("canvas")}function _(E,x,F){let Z=1,ee=Pe(E);if((ee.width>F||ee.height>F)&&(Z=F/Math.max(ee.width,ee.height)),Z<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let Y=Math.floor(Z*ee.width),Te=Math.floor(Z*ee.height);f===void 0&&(f=g(Y,Te));let de=x?g(Y,Te):f;return de.width=Y,de.height=Te,de.getContext("2d").drawImage(E,0,0,Y,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+Y+"x"+Te+")."),de}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),E;return E}function m(E){return E.generateMipmaps}function p(E){n.generateMipmap(E)}function T(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(E,x,F,Z,ee=!1){if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Y=x;if(x===n.RED&&(F===n.FLOAT&&(Y=n.R32F),F===n.HALF_FLOAT&&(Y=n.R16F),F===n.UNSIGNED_BYTE&&(Y=n.R8)),x===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.R8UI),F===n.UNSIGNED_SHORT&&(Y=n.R16UI),F===n.UNSIGNED_INT&&(Y=n.R32UI),F===n.BYTE&&(Y=n.R8I),F===n.SHORT&&(Y=n.R16I),F===n.INT&&(Y=n.R32I)),x===n.RG&&(F===n.FLOAT&&(Y=n.RG32F),F===n.HALF_FLOAT&&(Y=n.RG16F),F===n.UNSIGNED_BYTE&&(Y=n.RG8)),x===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.RG8UI),F===n.UNSIGNED_SHORT&&(Y=n.RG16UI),F===n.UNSIGNED_INT&&(Y=n.RG32UI),F===n.BYTE&&(Y=n.RG8I),F===n.SHORT&&(Y=n.RG16I),F===n.INT&&(Y=n.RG32I)),x===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),F===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),F===n.UNSIGNED_INT&&(Y=n.RGB32UI),F===n.BYTE&&(Y=n.RGB8I),F===n.SHORT&&(Y=n.RGB16I),F===n.INT&&(Y=n.RGB32I)),x===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),F===n.UNSIGNED_INT&&(Y=n.RGBA32UI),F===n.BYTE&&(Y=n.RGBA8I),F===n.SHORT&&(Y=n.RGBA16I),F===n.INT&&(Y=n.RGBA32I)),x===n.RGB&&F===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),x===n.RGBA){let Te=ee?Tc:it.getTransfer(Z);F===n.FLOAT&&(Y=n.RGBA32F),F===n.HALF_FLOAT&&(Y=n.RGBA16F),F===n.UNSIGNED_BYTE&&(Y=Te===lt?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function M(E,x){let F;return E?x===null||x===Ls||x===wr?F=n.DEPTH24_STENCIL8:x===vi?F=n.DEPTH32F_STENCIL8:x===Eo&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Ls||x===wr?F=n.DEPTH_COMPONENT24:x===vi?F=n.DEPTH_COMPONENT32F:x===Eo&&(F=n.DEPTH_COMPONENT16),F}function U(E,x){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==qn&&E.minFilter!==ii?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function A(E){let x=E.target;x.removeEventListener("dispose",A),D(x),x.isVideoTexture&&h.delete(x)}function C(E){let x=E.target;x.removeEventListener("dispose",C),v(x)}function D(E){let x=i.get(E);if(x.__webglInit===void 0)return;let F=E.source,Z=d.get(F);if(Z){let ee=Z[x.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&S(E),Object.keys(Z).length===0&&d.delete(F)}i.remove(E)}function S(E){let x=i.get(E);n.deleteTexture(x.__webglTexture);let F=E.source,Z=d.get(F);delete Z[x.__cacheKey],o.memory.textures--}function v(E){let x=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(x.__webglFramebuffer[Z]))for(let ee=0;ee<x.__webglFramebuffer[Z].length;ee++)n.deleteFramebuffer(x.__webglFramebuffer[Z][ee]);else n.deleteFramebuffer(x.__webglFramebuffer[Z]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[Z])}else{if(Array.isArray(x.__webglFramebuffer))for(let Z=0;Z<x.__webglFramebuffer.length;Z++)n.deleteFramebuffer(x.__webglFramebuffer[Z]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Z=0;Z<x.__webglColorRenderbuffer.length;Z++)x.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[Z]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let F=E.textures;for(let Z=0,ee=F.length;Z<ee;Z++){let Y=i.get(F[Z]);Y.__webglTexture&&(n.deleteTexture(Y.__webglTexture),o.memory.textures--),i.remove(F[Z])}i.remove(E)}let I=0;function V(){I=0}function H(){let E=I;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),I+=1,E}function X(E){let x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function Q(E,x){let F=i.get(E);if(E.isVideoTexture&&Le(E),E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){let Z=E.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(F,E,x);return}}t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+x)}function q(E,x){let F=i.get(E);if(E.version>0&&F.__version!==E.version){$(F,E,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+x)}function se(E,x){let F=i.get(E);if(E.version>0&&F.__version!==E.version){$(F,E,x);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+x)}function W(E,x){let F=i.get(E);if(E.version>0&&F.__version!==E.version){re(F,E,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+x)}let he={[Kl]:n.REPEAT,[Is]:n.CLAMP_TO_EDGE,[jl]:n.MIRRORED_REPEAT},_e={[qn]:n.NEAREST,[xg]:n.NEAREST_MIPMAP_NEAREST,[ya]:n.NEAREST_MIPMAP_LINEAR,[ii]:n.LINEAR,[il]:n.LINEAR_MIPMAP_NEAREST,[Ps]:n.LINEAR_MIPMAP_LINEAR},Ie={[Sg]:n.NEVER,[Rg]:n.ALWAYS,[bg]:n.LESS,[Jf]:n.LEQUAL,[Eg]:n.EQUAL,[Ag]:n.GEQUAL,[wg]:n.GREATER,[Tg]:n.NOTEQUAL};function Ye(E,x){if(x.type===vi&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===ii||x.magFilter===il||x.magFilter===ya||x.magFilter===Ps||x.minFilter===ii||x.minFilter===il||x.minFilter===ya||x.minFilter===Ps)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,he[x.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,he[x.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,he[x.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,_e[x.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,_e[x.minFilter]),x.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,Ie[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===qn||x.minFilter!==ya&&x.minFilter!==Ps||x.type===vi&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function mt(E,x){let F=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",A));let Z=x.source,ee=d.get(Z);ee===void 0&&(ee={},d.set(Z,ee));let Y=X(x);if(Y!==E.__cacheKey){ee[Y]===void 0&&(ee[Y]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,F=!0),ee[Y].usedTimes++;let Te=ee[E.__cacheKey];Te!==void 0&&(ee[E.__cacheKey].usedTimes--,Te.usedTimes===0&&S(x)),E.__cacheKey=Y,E.__webglTexture=ee[Y].texture}return F}function $(E,x,F){let Z=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Z=n.TEXTURE_3D);let ee=mt(E,x),Y=x.source;t.bindTexture(Z,E.__webglTexture,n.TEXTURE0+F);let Te=i.get(Y);if(Y.version!==Te.__version||ee===!0){t.activeTexture(n.TEXTURE0+F);let de=it.getPrimaries(it.workingColorSpace),xe=x.colorSpace===Yi?null:it.getPrimaries(x.colorSpace),nt=x.colorSpace===Yi||de===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let ne=_(x.image,!1,s.maxTextureSize);ne=bt(x,ne);let ye=r.convert(x.format,x.colorSpace),De=r.convert(x.type),Oe=b(x.internalFormat,ye,De,x.colorSpace,x.isVideoTexture);Ye(Z,x);let ve,Qe=x.mipmaps,We=x.isVideoTexture!==!0,vt=Te.__version===void 0||ee===!0,P=Y.dataReady,le=U(x,ne);if(x.isDepthTexture)Oe=M(x.format===Tr,x.type),vt&&(We?t.texStorage2D(n.TEXTURE_2D,1,Oe,ne.width,ne.height):t.texImage2D(n.TEXTURE_2D,0,Oe,ne.width,ne.height,0,ye,De,null));else if(x.isDataTexture)if(Qe.length>0){We&&vt&&t.texStorage2D(n.TEXTURE_2D,le,Oe,Qe[0].width,Qe[0].height);for(let G=0,J=Qe.length;G<J;G++)ve=Qe[G],We?P&&t.texSubImage2D(n.TEXTURE_2D,G,0,0,ve.width,ve.height,ye,De,ve.data):t.texImage2D(n.TEXTURE_2D,G,Oe,ve.width,ve.height,0,ye,De,ve.data);x.generateMipmaps=!1}else We?(vt&&t.texStorage2D(n.TEXTURE_2D,le,Oe,ne.width,ne.height),P&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ne.width,ne.height,ye,De,ne.data)):t.texImage2D(n.TEXTURE_2D,0,Oe,ne.width,ne.height,0,ye,De,ne.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){We&&vt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,le,Oe,Qe[0].width,Qe[0].height,ne.depth);for(let G=0,J=Qe.length;G<J;G++)if(ve=Qe[G],x.format!==Xn)if(ye!==null)if(We){if(P)if(x.layerUpdates.size>0){let me=Mf(ve.width,ve.height,x.format,x.type);for(let fe of x.layerUpdates){let ze=ve.data.subarray(fe*me/ve.data.BYTES_PER_ELEMENT,(fe+1)*me/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,G,0,0,fe,ve.width,ve.height,1,ye,ze)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,G,0,0,0,ve.width,ve.height,ne.depth,ye,ve.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,G,Oe,ve.width,ve.height,ne.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?P&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,G,0,0,0,ve.width,ve.height,ne.depth,ye,De,ve.data):t.texImage3D(n.TEXTURE_2D_ARRAY,G,Oe,ve.width,ve.height,ne.depth,0,ye,De,ve.data)}else{We&&vt&&t.texStorage2D(n.TEXTURE_2D,le,Oe,Qe[0].width,Qe[0].height);for(let G=0,J=Qe.length;G<J;G++)ve=Qe[G],x.format!==Xn?ye!==null?We?P&&t.compressedTexSubImage2D(n.TEXTURE_2D,G,0,0,ve.width,ve.height,ye,ve.data):t.compressedTexImage2D(n.TEXTURE_2D,G,Oe,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?P&&t.texSubImage2D(n.TEXTURE_2D,G,0,0,ve.width,ve.height,ye,De,ve.data):t.texImage2D(n.TEXTURE_2D,G,Oe,ve.width,ve.height,0,ye,De,ve.data)}else if(x.isDataArrayTexture)if(We){if(vt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,le,Oe,ne.width,ne.height,ne.depth),P)if(x.layerUpdates.size>0){let G=Mf(ne.width,ne.height,x.format,x.type);for(let J of x.layerUpdates){let me=ne.data.subarray(J*G/ne.data.BYTES_PER_ELEMENT,(J+1)*G/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,J,ne.width,ne.height,1,ye,De,me)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,ye,De,ne.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Oe,ne.width,ne.height,ne.depth,0,ye,De,ne.data);else if(x.isData3DTexture)We?(vt&&t.texStorage3D(n.TEXTURE_3D,le,Oe,ne.width,ne.height,ne.depth),P&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,ye,De,ne.data)):t.texImage3D(n.TEXTURE_3D,0,Oe,ne.width,ne.height,ne.depth,0,ye,De,ne.data);else if(x.isFramebufferTexture){if(vt)if(We)t.texStorage2D(n.TEXTURE_2D,le,Oe,ne.width,ne.height);else{let G=ne.width,J=ne.height;for(let me=0;me<le;me++)t.texImage2D(n.TEXTURE_2D,me,Oe,G,J,0,ye,De,null),G>>=1,J>>=1}}else if(Qe.length>0){if(We&&vt){let G=Pe(Qe[0]);t.texStorage2D(n.TEXTURE_2D,le,Oe,G.width,G.height)}for(let G=0,J=Qe.length;G<J;G++)ve=Qe[G],We?P&&t.texSubImage2D(n.TEXTURE_2D,G,0,0,ye,De,ve):t.texImage2D(n.TEXTURE_2D,G,Oe,ye,De,ve);x.generateMipmaps=!1}else if(We){if(vt){let G=Pe(ne);t.texStorage2D(n.TEXTURE_2D,le,Oe,G.width,G.height)}P&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ye,De,ne)}else t.texImage2D(n.TEXTURE_2D,0,Oe,ye,De,ne);m(x)&&p(Z),Te.__version=Y.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function re(E,x,F){if(x.image.length!==6)return;let Z=mt(E,x),ee=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+F);let Y=i.get(ee);if(ee.version!==Y.__version||Z===!0){t.activeTexture(n.TEXTURE0+F);let Te=it.getPrimaries(it.workingColorSpace),de=x.colorSpace===Yi?null:it.getPrimaries(x.colorSpace),xe=x.colorSpace===Yi||Te===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let nt=x.isCompressedTexture||x.image[0].isCompressedTexture,ne=x.image[0]&&x.image[0].isDataTexture,ye=[];for(let J=0;J<6;J++)!nt&&!ne?ye[J]=_(x.image[J],!0,s.maxCubemapSize):ye[J]=ne?x.image[J].image:x.image[J],ye[J]=bt(x,ye[J]);let De=ye[0],Oe=r.convert(x.format,x.colorSpace),ve=r.convert(x.type),Qe=b(x.internalFormat,Oe,ve,x.colorSpace),We=x.isVideoTexture!==!0,vt=Y.__version===void 0||Z===!0,P=ee.dataReady,le=U(x,De);Ye(n.TEXTURE_CUBE_MAP,x);let G;if(nt){We&&vt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,le,Qe,De.width,De.height);for(let J=0;J<6;J++){G=ye[J].mipmaps;for(let me=0;me<G.length;me++){let fe=G[me];x.format!==Xn?Oe!==null?We?P&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,me,0,0,fe.width,fe.height,Oe,fe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,me,Qe,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?P&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,me,0,0,fe.width,fe.height,Oe,ve,fe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,me,Qe,fe.width,fe.height,0,Oe,ve,fe.data)}}}else{if(G=x.mipmaps,We&&vt){G.length>0&&le++;let J=Pe(ye[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,le,Qe,J.width,J.height)}for(let J=0;J<6;J++)if(ne){We?P&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ye[J].width,ye[J].height,Oe,ve,ye[J].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Qe,ye[J].width,ye[J].height,0,Oe,ve,ye[J].data);for(let me=0;me<G.length;me++){let ze=G[me].image[J].image;We?P&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,me+1,0,0,ze.width,ze.height,Oe,ve,ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,me+1,Qe,ze.width,ze.height,0,Oe,ve,ze.data)}}else{We?P&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Oe,ve,ye[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Qe,Oe,ve,ye[J]);for(let me=0;me<G.length;me++){let fe=G[me];We?P&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,me+1,0,0,Oe,ve,fe.image[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,me+1,Qe,Oe,ve,fe.image[J])}}}m(x)&&p(n.TEXTURE_CUBE_MAP),Y.__version=ee.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function we(E,x,F,Z,ee,Y){let Te=r.convert(F.format,F.colorSpace),de=r.convert(F.type),xe=b(F.internalFormat,Te,de,F.colorSpace),nt=i.get(x),ne=i.get(F);if(ne.__renderTarget=x,!nt.__hasExternalTextures){let ye=Math.max(1,x.width>>Y),De=Math.max(1,x.height>>Y);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,Y,xe,ye,De,x.depth,0,Te,de,null):t.texImage2D(ee,Y,xe,ye,De,0,Te,de,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),je(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,ee,ne.__webglTexture,0,Ke(x)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,ee,ne.__webglTexture,Y),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ue(E,x,F){if(n.bindRenderbuffer(n.RENDERBUFFER,E),x.depthBuffer){let Z=x.depthTexture,ee=Z&&Z.isDepthTexture?Z.type:null,Y=M(x.stencilBuffer,ee),Te=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=Ke(x);je(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,de,Y,x.width,x.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,de,Y,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Y,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Te,n.RENDERBUFFER,E)}else{let Z=x.textures;for(let ee=0;ee<Z.length;ee++){let Y=Z[ee],Te=r.convert(Y.format,Y.colorSpace),de=r.convert(Y.type),xe=b(Y.internalFormat,Te,de,Y.colorSpace),nt=Ke(x);F&&je(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,nt,xe,x.width,x.height):je(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,nt,xe,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,xe,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ne(E,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Z=i.get(x.depthTexture);Z.__renderTarget=x,(!Z.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Q(x.depthTexture,0);let ee=Z.__webglTexture,Y=Ke(x);if(x.depthTexture.format===yr)je(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0);else if(x.depthTexture.format===Tr)je(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function ke(E){let x=i.get(E),F=E.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==E.depthTexture){let Z=E.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Z){let ee=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Z.removeEventListener("dispose",ee)};Z.addEventListener("dispose",ee),x.__depthDisposeCallback=ee}x.__boundDepthTexture=Z}if(E.depthTexture&&!x.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Ne(x.__webglFramebuffer,E)}else if(F){x.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[Z]),x.__webglDepthbuffer[Z]===void 0)x.__webglDepthbuffer[Z]=n.createRenderbuffer(),ue(x.__webglDepthbuffer[Z],E,!1);else{let ee=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,Y)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),ue(x.__webglDepthbuffer,E,!1);else{let Z=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,ee)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function $e(E,x,F){let Z=i.get(E);x!==void 0&&we(Z.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&ke(E)}function It(E){let x=E.texture,F=i.get(E),Z=i.get(x);E.addEventListener("dispose",C);let ee=E.textures,Y=E.isWebGLCubeRenderTarget===!0,Te=ee.length>1;if(Te||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=x.version,o.memory.textures++),Y){F.__webglFramebuffer=[];for(let de=0;de<6;de++)if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[de]=[];for(let xe=0;xe<x.mipmaps.length;xe++)F.__webglFramebuffer[de][xe]=n.createFramebuffer()}else F.__webglFramebuffer[de]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let de=0;de<x.mipmaps.length;de++)F.__webglFramebuffer[de]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(Te)for(let de=0,xe=ee.length;de<xe;de++){let nt=i.get(ee[de]);nt.__webglTexture===void 0&&(nt.__webglTexture=n.createTexture(),o.memory.textures++)}if(E.samples>0&&je(E)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let de=0;de<ee.length;de++){let xe=ee[de];F.__webglColorRenderbuffer[de]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[de]);let nt=r.convert(xe.format,xe.colorSpace),ne=r.convert(xe.type),ye=b(xe.internalFormat,nt,ne,xe.colorSpace,E.isXRRenderTarget===!0),De=Ke(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,De,ye,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,F.__webglColorRenderbuffer[de])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),ue(F.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Y){t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),Ye(n.TEXTURE_CUBE_MAP,x);for(let de=0;de<6;de++)if(x.mipmaps&&x.mipmaps.length>0)for(let xe=0;xe<x.mipmaps.length;xe++)we(F.__webglFramebuffer[de][xe],E,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,xe);else we(F.__webglFramebuffer[de],E,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(x)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let de=0,xe=ee.length;de<xe;de++){let nt=ee[de],ne=i.get(nt);t.bindTexture(n.TEXTURE_2D,ne.__webglTexture),Ye(n.TEXTURE_2D,nt),we(F.__webglFramebuffer,E,nt,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,0),m(nt)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let de=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(de=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(de,Z.__webglTexture),Ye(de,x),x.mipmaps&&x.mipmaps.length>0)for(let xe=0;xe<x.mipmaps.length;xe++)we(F.__webglFramebuffer[xe],E,x,n.COLOR_ATTACHMENT0,de,xe);else we(F.__webglFramebuffer,E,x,n.COLOR_ATTACHMENT0,de,0);m(x)&&p(de),t.unbindTexture()}E.depthBuffer&&ke(E)}function tt(E){let x=E.textures;for(let F=0,Z=x.length;F<Z;F++){let ee=x[F];if(m(ee)){let Y=T(E),Te=i.get(ee).__webglTexture;t.bindTexture(Y,Te),p(Y),t.unbindTexture()}}}let Dt=[],O=[];function Tn(E){if(E.samples>0){if(je(E)===!1){let x=E.textures,F=E.width,Z=E.height,ee=n.COLOR_BUFFER_BIT,Y=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Te=i.get(E),de=x.length>1;if(de)for(let xe=0;xe<x.length;xe++)t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let xe=0;xe<x.length;xe++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),de){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Te.__webglColorRenderbuffer[xe]);let nt=i.get(x[xe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,nt,0)}n.blitFramebuffer(0,0,F,Z,0,0,F,Z,ee,n.NEAREST),c===!0&&(Dt.length=0,O.length=0,Dt.push(n.COLOR_ATTACHMENT0+xe),E.depthBuffer&&E.resolveDepthBuffer===!1&&(Dt.push(Y),O.push(Y),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,O)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Dt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),de)for(let xe=0;xe<x.length;xe++){t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,Te.__webglColorRenderbuffer[xe]);let nt=i.get(x[xe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,nt,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){let x=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function Ke(E){return Math.min(s.maxSamples,E.samples)}function je(E){let x=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Le(E){let x=o.render.frame;h.get(E)!==x&&(h.set(E,x),E.update())}function bt(E,x){let F=E.colorSpace,Z=E.format,ee=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||F!==Ur&&F!==Yi&&(it.getTransfer(F)===lt?(Z!==Xn||ee!==bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),x}function Pe(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=V,this.setTexture2D=Q,this.setTexture2DArray=q,this.setTexture3D=se,this.setTextureCube=W,this.rebindTextures=$e,this.setupRenderTarget=It,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=Tn,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=we,this.useMultisampledRTT=je}function vv(n,e){function t(i,s=Yi){let r,o=it.getTransfer(s);if(i===bi)return n.UNSIGNED_BYTE;if(i===gu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===_u)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Hf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===kf)return n.BYTE;if(i===zf)return n.SHORT;if(i===Eo)return n.UNSIGNED_SHORT;if(i===mu)return n.INT;if(i===Ls)return n.UNSIGNED_INT;if(i===vi)return n.FLOAT;if(i===No)return n.HALF_FLOAT;if(i===Vf)return n.ALPHA;if(i===Gf)return n.RGB;if(i===Xn)return n.RGBA;if(i===Wf)return n.LUMINANCE;if(i===Xf)return n.LUMINANCE_ALPHA;if(i===yr)return n.DEPTH_COMPONENT;if(i===Tr)return n.DEPTH_STENCIL;if(i===qf)return n.RED;if(i===xu)return n.RED_INTEGER;if(i===Yf)return n.RG;if(i===yu)return n.RG_INTEGER;if(i===vu)return n.RGBA_INTEGER;if(i===Za||i===Ja||i===Ka||i===ja)if(o===lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Za)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Za)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ja)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ka)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ja)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ql||i===eh||i===th||i===nh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ql)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===eh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===th)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===nh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ih||i===sh||i===rh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ih||i===sh)return o===lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===rh)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===oh||i===ah||i===ch||i===lh||i===hh||i===uh||i===dh||i===fh||i===ph||i===mh||i===gh||i===_h||i===xh||i===yh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===oh)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ah)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ch)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===lh)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===hh)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===uh)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===dh)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===fh)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ph)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===mh)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===gh)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===_h)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===xh)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===yh)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Qa||i===vh||i===Mh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Qa)return o===lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===vh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Mh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===$f||i===Sh||i===bh||i===Eh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Qa)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Sh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===bh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Eh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===wr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Hh=class extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},fn=class extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}},Mv={type:"move"},Mo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,i),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=h.position.distanceTo(f.position),u=.02,g=.005;l.inputState.pinching&&d>u+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=u-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Mv)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new fn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Sv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Vh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let s=new Mn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new ri({vertexShader:Sv,fragmentShader:bv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ze(new Us(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Gh=class extends Qi{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,f=null,d=null,u=null,g=null,_=new Vh,m=t.getContextAttributes(),p=null,T=null,b=[],M=[],U=new Me,A=null,C=new Xt;C.viewport=new ut;let D=new Xt;D.viewport=new ut;let S=[C,D],v=new Hh,I=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let re=b[$];return re===void 0&&(re=new Mo,b[$]=re),re.getTargetRaySpace()},this.getControllerGrip=function($){let re=b[$];return re===void 0&&(re=new Mo,b[$]=re),re.getGripSpace()},this.getHand=function($){let re=b[$];return re===void 0&&(re=new Mo,b[$]=re),re.getHandSpace()};function H($){let re=M.indexOf($.inputSource);if(re===-1)return;let we=b[re];we!==void 0&&(we.update($.inputSource,$.frame,l||o),we.dispatchEvent({type:$.type,data:$.inputSource}))}function X(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",Q);for(let $=0;$<b.length;$++){let re=M[$];re!==null&&(M[$]=null,b[$].disconnect(re))}I=null,V=null,_.reset(),e.setRenderTarget(p),u=null,d=null,f=null,s=null,T=null,mt.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",X),s.addEventListener("inputsourceschange",Q),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(U),s.renderState.layers===void 0){let re={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,t,re),s.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),T=new Ei(u.framebufferWidth,u.framebufferHeight,{format:Xn,type:bi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let re=null,we=null,ue=null;m.depth&&(ue=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=m.stencil?Tr:yr,we=m.stencil?wr:Ls);let Ne={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:r};f=new XRWebGLBinding(s,t),d=f.createProjectionLayer(Ne),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),T=new Ei(d.textureWidth,d.textureHeight,{format:Xn,type:bi,depthTexture:new uc(d.textureWidth,d.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),mt.setContext(s),mt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Q($){for(let re=0;re<$.removed.length;re++){let we=$.removed[re],ue=M.indexOf(we);ue>=0&&(M[ue]=null,b[ue].disconnect(we))}for(let re=0;re<$.added.length;re++){let we=$.added[re],ue=M.indexOf(we);if(ue===-1){for(let ke=0;ke<b.length;ke++)if(ke>=M.length){M.push(we),ue=ke;break}else if(M[ke]===null){M[ke]=we,ue=ke;break}if(ue===-1)break}let Ne=b[ue];Ne&&Ne.connect(we)}}let q=new w,se=new w;function W($,re,we){q.setFromMatrixPosition(re.matrixWorld),se.setFromMatrixPosition(we.matrixWorld);let ue=q.distanceTo(se),Ne=re.projectionMatrix.elements,ke=we.projectionMatrix.elements,$e=Ne[14]/(Ne[10]-1),It=Ne[14]/(Ne[10]+1),tt=(Ne[9]+1)/Ne[5],Dt=(Ne[9]-1)/Ne[5],O=(Ne[8]-1)/Ne[0],Tn=(ke[8]+1)/ke[0],Ke=$e*O,je=$e*Tn,Le=ue/(-O+Tn),bt=Le*-O;if(re.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(bt),$.translateZ(Le),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ne[10]===-1)$.projectionMatrix.copy(re.projectionMatrix),$.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{let Pe=$e+Le,E=It+Le,x=Ke-bt,F=je+(ue-bt),Z=tt*It/E*Pe,ee=Dt*It/E*Pe;$.projectionMatrix.makePerspective(x,F,Z,ee,Pe,E),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function he($,re){re===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(re.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let re=$.near,we=$.far;_.texture!==null&&(_.depthNear>0&&(re=_.depthNear),_.depthFar>0&&(we=_.depthFar)),v.near=D.near=C.near=re,v.far=D.far=C.far=we,(I!==v.near||V!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),I=v.near,V=v.far),C.layers.mask=$.layers.mask|2,D.layers.mask=$.layers.mask|4,v.layers.mask=C.layers.mask|D.layers.mask;let ue=$.parent,Ne=v.cameras;he(v,ue);for(let ke=0;ke<Ne.length;ke++)he(Ne[ke],ue);Ne.length===2?W(v,C,D):v.projectionMatrix.copy(C.projectionMatrix),_e($,v,ue)};function _e($,re,we){we===null?$.matrix.copy(re.matrixWorld):($.matrix.copy(we.matrixWorld),$.matrix.invert(),$.matrix.multiply(re.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(re.projectionMatrix),$.projectionMatrixInverse.copy(re.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Ah*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&u===null))return c},this.setFoveation=function($){c=$,d!==null&&(d.fixedFoveation=$),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let Ie=null;function Ye($,re){if(h=re.getViewerPose(l||o),g=re,h!==null){let we=h.views;u!==null&&(e.setRenderTargetFramebuffer(T,u.framebuffer),e.setRenderTarget(T));let ue=!1;we.length!==v.cameras.length&&(v.cameras.length=0,ue=!0);for(let ke=0;ke<we.length;ke++){let $e=we[ke],It=null;if(u!==null)It=u.getViewport($e);else{let Dt=f.getViewSubImage(d,$e);It=Dt.viewport,ke===0&&(e.setRenderTargetTextures(T,Dt.colorTexture,d.ignoreDepthValues?void 0:Dt.depthStencilTexture),e.setRenderTarget(T))}let tt=S[ke];tt===void 0&&(tt=new Xt,tt.layers.enable(ke),tt.viewport=new ut,S[ke]=tt),tt.matrix.fromArray($e.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray($e.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(It.x,It.y,It.width,It.height),ke===0&&(v.matrix.copy(tt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ue===!0&&v.cameras.push(tt)}let Ne=s.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")){let ke=f.getDepthInformation(we[0]);ke&&ke.isValid&&ke.texture&&_.init(e,ke,s.renderState)}}for(let we=0;we<b.length;we++){let ue=M[we],Ne=b[we];ue!==null&&Ne!==void 0&&Ne.update(ue,re,l||o)}Ie&&Ie($,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),g=null}let mt=new ep;mt.setAnimationLoop(Ye),this.setAnimationLoop=function($){Ie=$},this.dispose=function(){}}},Ts=new In,Ev=new gt;function wv(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Qf(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,T,b,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&u(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,T,b):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===pn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===pn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let T=e.get(p),b=T.envMap,M=T.envMapRotation;b&&(m.envMap.value=b,Ts.copy(M),Ts.x*=-1,Ts.y*=-1,Ts.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ts.y*=-1,Ts.z*=-1),m.envMapRotation.value.setFromMatrix4(Ev.makeRotationFromEuler(Ts)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,T,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function u(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===pn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let T=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Tv(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,b){let M=b.program;i.uniformBlockBinding(T,M)}function l(T,b){let M=s[T.id];M===void 0&&(g(T),M=h(T),s[T.id]=M,T.addEventListener("dispose",m));let U=b.program;i.updateUBOMapping(T,U);let A=e.render.frame;r[T.id]!==A&&(d(T),r[T.id]=A)}function h(T){let b=f();T.__bindingPointIndex=b;let M=n.createBuffer(),U=T.__size,A=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,U,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,M),M}function f(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){let b=s[T.id],M=T.uniforms,U=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let A=0,C=M.length;A<C;A++){let D=Array.isArray(M[A])?M[A]:[M[A]];for(let S=0,v=D.length;S<v;S++){let I=D[S];if(u(I,A,S,U)===!0){let V=I.__offset,H=Array.isArray(I.value)?I.value:[I.value],X=0;for(let Q=0;Q<H.length;Q++){let q=H[Q],se=_(q);typeof q=="number"||typeof q=="boolean"?(I.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,V+X,I.__data)):q.isMatrix3?(I.__data[0]=q.elements[0],I.__data[1]=q.elements[1],I.__data[2]=q.elements[2],I.__data[3]=0,I.__data[4]=q.elements[3],I.__data[5]=q.elements[4],I.__data[6]=q.elements[5],I.__data[7]=0,I.__data[8]=q.elements[6],I.__data[9]=q.elements[7],I.__data[10]=q.elements[8],I.__data[11]=0):(q.toArray(I.__data,X),X+=se.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,V,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(T,b,M,U){let A=T.value,C=b+"_"+M;if(U[C]===void 0)return typeof A=="number"||typeof A=="boolean"?U[C]=A:U[C]=A.clone(),!0;{let D=U[C];if(typeof A=="number"||typeof A=="boolean"){if(D!==A)return U[C]=A,!0}else if(D.equals(A)===!1)return D.copy(A),!0}return!1}function g(T){let b=T.uniforms,M=0,U=16;for(let C=0,D=b.length;C<D;C++){let S=Array.isArray(b[C])?b[C]:[b[C]];for(let v=0,I=S.length;v<I;v++){let V=S[v],H=Array.isArray(V.value)?V.value:[V.value];for(let X=0,Q=H.length;X<Q;X++){let q=H[X],se=_(q),W=M%U,he=W%se.boundary,_e=W+he;M+=he,_e!==0&&U-_e<se.storage&&(M+=U-_e),V.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=M,M+=se.storage}}}let A=M%U;return A>0&&(M+=U-A),T.__size=M,T.__cache={},this}function _(T){let b={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(b.boundary=4,b.storage=4):T.isVector2?(b.boundary=8,b.storage=8):T.isVector3||T.isColor?(b.boundary=16,b.storage=12):T.isVector4?(b.boundary=16,b.storage=16):T.isMatrix3?(b.boundary=48,b.storage=48):T.isMatrix4?(b.boundary=64,b.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),b}function m(T){let b=T.target;b.removeEventListener("dispose",m);let M=o.indexOf(b.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function p(){for(let T in s)n.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}var dc=class{constructor(e={}){let{canvas:t=Ig(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let u;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=i.getContextAttributes().alpha}else u=o;let g=new Uint32Array(4),_=new Int32Array(4),m=null,p=null,T=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=jt,this.toneMapping=Ji,this.toneMappingExposure=1;let M=this,U=!1,A=0,C=0,D=null,S=-1,v=null,I=new ut,V=new ut,H=null,X=new Be(0),Q=0,q=t.width,se=t.height,W=1,he=null,_e=null,Ie=new ut(0,0,q,se),Ye=new ut(0,0,q,se),mt=!1,$=new To,re=!1,we=!1,ue=new gt,Ne=new gt,ke=new w,$e=new ut,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},tt=!1;function Dt(){return D===null?W:1}let O=i;function Tn(y,L){return t.getContext(y,L)}try{let y={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",me,!1),t.addEventListener("webglcontextcreationerror",fe,!1),O===null){let L="webgl2";if(O=Tn(L,y),O===null)throw Tn(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Ke,je,Le,bt,Pe,E,x,F,Z,ee,Y,Te,de,xe,nt,ne,ye,De,Oe,ve,Qe,We,vt,P;function le(){Ke=new Vx(O),Ke.init(),We=new vv(O,Ke),je=new Ox(O,Ke,e,We),Le=new _v(O,Ke),je.reverseDepthBuffer&&d&&Le.buffers.depth.setReversed(!0),bt=new Xx(O),Pe=new sv,E=new yv(O,Ke,Le,Pe,je,We,bt),x=new Bx(M),F=new Hx(M),Z=new jg(O),vt=new Nx(O,Z),ee=new Gx(O,Z,bt,vt),Y=new Yx(O,ee,Z,bt),Oe=new qx(O,je,E),ne=new Fx(Pe),Te=new iv(M,x,F,Ke,je,vt,ne),de=new wv(M,Pe),xe=new ov,nt=new dv(Ke),De=new Dx(M,x,F,Le,Y,u,c),ye=new mv(M,Y,je),P=new Tv(O,bt,je,Le),ve=new Ux(O,Ke,bt),Qe=new Wx(O,Ke,bt),bt.programs=Te.programs,M.capabilities=je,M.extensions=Ke,M.properties=Pe,M.renderLists=xe,M.shadowMap=ye,M.state=Le,M.info=bt}le();let G=new Gh(M,O);this.xr=G,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let y=Ke.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=Ke.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(y){y!==void 0&&(W=y,this.setSize(q,se,!1))},this.getSize=function(y){return y.set(q,se)},this.setSize=function(y,L,k=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=y,se=L,t.width=Math.floor(y*W),t.height=Math.floor(L*W),k===!0&&(t.style.width=y+"px",t.style.height=L+"px"),this.setViewport(0,0,y,L)},this.getDrawingBufferSize=function(y){return y.set(q*W,se*W).floor()},this.setDrawingBufferSize=function(y,L,k){q=y,se=L,W=k,t.width=Math.floor(y*k),t.height=Math.floor(L*k),this.setViewport(0,0,y,L)},this.getCurrentViewport=function(y){return y.copy(I)},this.getViewport=function(y){return y.copy(Ie)},this.setViewport=function(y,L,k,z){y.isVector4?Ie.set(y.x,y.y,y.z,y.w):Ie.set(y,L,k,z),Le.viewport(I.copy(Ie).multiplyScalar(W).round())},this.getScissor=function(y){return y.copy(Ye)},this.setScissor=function(y,L,k,z){y.isVector4?Ye.set(y.x,y.y,y.z,y.w):Ye.set(y,L,k,z),Le.scissor(V.copy(Ye).multiplyScalar(W).round())},this.getScissorTest=function(){return mt},this.setScissorTest=function(y){Le.setScissorTest(mt=y)},this.setOpaqueSort=function(y){he=y},this.setTransparentSort=function(y){_e=y},this.getClearColor=function(y){return y.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(y=!0,L=!0,k=!0){let z=0;if(y){let N=!1;if(D!==null){let ie=D.texture.format;N=ie===vu||ie===yu||ie===xu}if(N){let ie=D.texture.type,pe=ie===bi||ie===Ls||ie===Eo||ie===wr||ie===gu||ie===_u,Se=De.getClearColor(),be=De.getClearAlpha(),Fe=Se.r,He=Se.g,Ee=Se.b;pe?(g[0]=Fe,g[1]=He,g[2]=Ee,g[3]=be,O.clearBufferuiv(O.COLOR,0,g)):(_[0]=Fe,_[1]=He,_[2]=Ee,_[3]=be,O.clearBufferiv(O.COLOR,0,_))}else z|=O.COLOR_BUFFER_BIT}L&&(z|=O.DEPTH_BUFFER_BIT),k&&(z|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",me,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),xe.dispose(),nt.dispose(),Pe.dispose(),x.dispose(),F.dispose(),Y.dispose(),vt.dispose(),P.dispose(),Te.dispose(),G.dispose(),G.removeEventListener("sessionstart",pd),G.removeEventListener("sessionend",md),vs.stop()};function J(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;let y=bt.autoReset,L=ye.enabled,k=ye.autoUpdate,z=ye.needsUpdate,N=ye.type;le(),bt.autoReset=y,ye.enabled=L,ye.autoUpdate=k,ye.needsUpdate=z,ye.type=N}function fe(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function ze(y){let L=y.target;L.removeEventListener("dispose",ze),Lt(L)}function Lt(y){Zt(y),Pe.remove(y)}function Zt(y){let L=Pe.get(y).programs;L!==void 0&&(L.forEach(function(k){Te.releaseProgram(k)}),y.isShaderMaterial&&Te.releaseShaderCache(y))}this.renderBufferDirect=function(y,L,k,z,N,ie){L===null&&(L=It);let pe=N.isMesh&&N.matrixWorld.determinant()<0,Se=km(y,L,k,z,N);Le.setMaterial(z,pe);let be=k.index,Fe=1;if(z.wireframe===!0){if(be=ee.getWireframeAttribute(k),be===void 0)return;Fe=2}let He=k.drawRange,Ee=k.attributes.position,st=He.start*Fe,Mt=(He.start+He.count)*Fe;ie!==null&&(st=Math.max(st,ie.start*Fe),Mt=Math.min(Mt,(ie.start+ie.count)*Fe)),be!==null?(st=Math.max(st,0),Mt=Math.min(Mt,be.count)):Ee!=null&&(st=Math.max(st,0),Mt=Math.min(Mt,Ee.count));let Et=Mt-st;if(Et<0||Et===1/0)return;vt.setup(N,z,Se,k,be);let dn,ot=ve;if(be!==null&&(dn=Z.get(be),ot=Qe,ot.setIndex(dn)),N.isMesh)z.wireframe===!0?(Le.setLineWidth(z.wireframeLinewidth*Dt()),ot.setMode(O.LINES)):ot.setMode(O.TRIANGLES);else if(N.isLine){let Ae=z.linewidth;Ae===void 0&&(Ae=1),Le.setLineWidth(Ae*Dt()),N.isLineSegments?ot.setMode(O.LINES):N.isLineLoop?ot.setMode(O.LINE_LOOP):ot.setMode(O.LINE_STRIP)}else N.isPoints?ot.setMode(O.POINTS):N.isSprite&&ot.setMode(O.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)ot.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Ke.get("WEBGL_multi_draw"))ot.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Ae=N._multiDrawStarts,di=N._multiDrawCounts,at=N._multiDrawCount,Hn=be?Z.get(be).bytesPerElement:1,js=Pe.get(z).currentProgram.getUniforms();for(let _n=0;_n<at;_n++)js.setValue(O,"_gl_DrawID",_n),ot.render(Ae[_n]/Hn,di[_n])}else if(N.isInstancedMesh)ot.renderInstances(st,Et,N.count);else if(k.isInstancedBufferGeometry){let Ae=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,di=Math.min(k.instanceCount,Ae);ot.renderInstances(st,Et,di)}else ot.render(st,Et)};function ct(y,L,k){y.transparent===!0&&y.side===Cn&&y.forceSinglePass===!1?(y.side=pn,y.needsUpdate=!0,xa(y,L,k),y.side=ji,y.needsUpdate=!0,xa(y,L,k),y.side=Cn):xa(y,L,k)}this.compile=function(y,L,k=null){k===null&&(k=y),p=nt.get(k),p.init(L),b.push(p),k.traverseVisible(function(N){N.isLight&&N.layers.test(L.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),y!==k&&y.traverseVisible(function(N){N.isLight&&N.layers.test(L.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();let z=new Set;return y.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let ie=N.material;if(ie)if(Array.isArray(ie))for(let pe=0;pe<ie.length;pe++){let Se=ie[pe];ct(Se,k,N),z.add(Se)}else ct(ie,k,N),z.add(ie)}),b.pop(),p=null,z},this.compileAsync=function(y,L,k=null){let z=this.compile(y,L,k);return new Promise(N=>{function ie(){if(z.forEach(function(pe){Pe.get(pe).currentProgram.isReady()&&z.delete(pe)}),z.size===0){N(y);return}setTimeout(ie,10)}Ke.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let zn=null;function ui(y){zn&&zn(y)}function pd(){vs.stop()}function md(){vs.start()}let vs=new ep;vs.setAnimationLoop(ui),typeof self<"u"&&vs.setContext(self),this.setAnimationLoop=function(y){zn=y,G.setAnimationLoop(y),y===null?vs.stop():vs.start()},G.addEventListener("sessionstart",pd),G.addEventListener("sessionend",md),this.render=function(y,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(L),L=G.getCamera()),y.isScene===!0&&y.onBeforeRender(M,y,L,D),p=nt.get(y,b.length),p.init(L),b.push(p),Ne.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),$.setFromProjectionMatrix(Ne),we=this.localClippingEnabled,re=ne.init(this.clippingPlanes,we),m=xe.get(y,T.length),m.init(),T.push(m),G.enabled===!0&&G.isPresenting===!0){let ie=M.xr.getDepthSensingMesh();ie!==null&&nl(ie,L,-1/0,M.sortObjects)}nl(y,L,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(he,_e),tt=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,tt&&De.addToRenderList(m,y),this.info.render.frame++,re===!0&&ne.beginShadows();let k=p.state.shadowsArray;ye.render(k,y,L),re===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();let z=m.opaque,N=m.transmissive;if(p.setupLights(),L.isArrayCamera){let ie=L.cameras;if(N.length>0)for(let pe=0,Se=ie.length;pe<Se;pe++){let be=ie[pe];_d(z,N,y,be)}tt&&De.render(y);for(let pe=0,Se=ie.length;pe<Se;pe++){let be=ie[pe];gd(m,y,be,be.viewport)}}else N.length>0&&_d(z,N,y,L),tt&&De.render(y),gd(m,y,L);D!==null&&(E.updateMultisampleRenderTarget(D),E.updateRenderTargetMipmap(D)),y.isScene===!0&&y.onAfterRender(M,y,L),vt.resetDefaultState(),S=-1,v=null,b.pop(),b.length>0?(p=b[b.length-1],re===!0&&ne.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function nl(y,L,k,z){if(y.visible===!1)return;if(y.layers.test(L.layers)){if(y.isGroup)k=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(L);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||$.intersectsSprite(y)){z&&$e.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Ne);let pe=Y.update(y),Se=y.material;Se.visible&&m.push(y,pe,Se,k,$e.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||$.intersectsObject(y))){let pe=Y.update(y),Se=y.material;if(z&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),$e.copy(y.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),$e.copy(pe.boundingSphere.center)),$e.applyMatrix4(y.matrixWorld).applyMatrix4(Ne)),Array.isArray(Se)){let be=pe.groups;for(let Fe=0,He=be.length;Fe<He;Fe++){let Ee=be[Fe],st=Se[Ee.materialIndex];st&&st.visible&&m.push(y,pe,st,k,$e.z,Ee)}}else Se.visible&&m.push(y,pe,Se,k,$e.z,null)}}let ie=y.children;for(let pe=0,Se=ie.length;pe<Se;pe++)nl(ie[pe],L,k,z)}function gd(y,L,k,z){let N=y.opaque,ie=y.transmissive,pe=y.transparent;p.setupLightsView(k),re===!0&&ne.setGlobalState(M.clippingPlanes,k),z&&Le.viewport(I.copy(z)),N.length>0&&_a(N,L,k),ie.length>0&&_a(ie,L,k),pe.length>0&&_a(pe,L,k),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function _d(y,L,k,z){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[z.id]===void 0&&(p.state.transmissionRenderTarget[z.id]=new Ei(1,1,{generateMipmaps:!0,type:Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float")?No:bi,minFilter:Ps,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));let ie=p.state.transmissionRenderTarget[z.id],pe=z.viewport||I;ie.setSize(pe.z,pe.w);let Se=M.getRenderTarget();M.setRenderTarget(ie),M.getClearColor(X),Q=M.getClearAlpha(),Q<1&&M.setClearColor(16777215,.5),M.clear(),tt&&De.render(k);let be=M.toneMapping;M.toneMapping=Ji;let Fe=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),p.setupLightsView(z),re===!0&&ne.setGlobalState(M.clippingPlanes,z),_a(y,k,z),E.updateMultisampleRenderTarget(ie),E.updateRenderTargetMipmap(ie),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let Ee=0,st=L.length;Ee<st;Ee++){let Mt=L[Ee],Et=Mt.object,dn=Mt.geometry,ot=Mt.material,Ae=Mt.group;if(ot.side===Cn&&Et.layers.test(z.layers)){let di=ot.side;ot.side=pn,ot.needsUpdate=!0,xd(Et,k,z,dn,ot,Ae),ot.side=di,ot.needsUpdate=!0,He=!0}}He===!0&&(E.updateMultisampleRenderTarget(ie),E.updateRenderTargetMipmap(ie))}M.setRenderTarget(Se),M.setClearColor(X,Q),Fe!==void 0&&(z.viewport=Fe),M.toneMapping=be}function _a(y,L,k){let z=L.isScene===!0?L.overrideMaterial:null;for(let N=0,ie=y.length;N<ie;N++){let pe=y[N],Se=pe.object,be=pe.geometry,Fe=z===null?pe.material:z,He=pe.group;Se.layers.test(k.layers)&&xd(Se,L,k,be,Fe,He)}}function xd(y,L,k,z,N,ie){y.onBeforeRender(M,L,k,z,N,ie),y.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),N.onBeforeRender(M,L,k,z,y,ie),N.transparent===!0&&N.side===Cn&&N.forceSinglePass===!1?(N.side=pn,N.needsUpdate=!0,M.renderBufferDirect(k,L,z,N,y,ie),N.side=ji,N.needsUpdate=!0,M.renderBufferDirect(k,L,z,N,y,ie),N.side=Cn):M.renderBufferDirect(k,L,z,N,y,ie),y.onAfterRender(M,L,k,z,N,ie)}function xa(y,L,k){L.isScene!==!0&&(L=It);let z=Pe.get(y),N=p.state.lights,ie=p.state.shadowsArray,pe=N.state.version,Se=Te.getParameters(y,N.state,ie,L,k),be=Te.getProgramCacheKey(Se),Fe=z.programs;z.environment=y.isMeshStandardMaterial?L.environment:null,z.fog=L.fog,z.envMap=(y.isMeshStandardMaterial?F:x).get(y.envMap||z.environment),z.envMapRotation=z.environment!==null&&y.envMap===null?L.environmentRotation:y.envMapRotation,Fe===void 0&&(y.addEventListener("dispose",ze),Fe=new Map,z.programs=Fe);let He=Fe.get(be);if(He!==void 0){if(z.currentProgram===He&&z.lightsStateVersion===pe)return vd(y,Se),He}else Se.uniforms=Te.getUniforms(y),y.onBeforeCompile(Se,M),He=Te.acquireProgram(Se,be),Fe.set(be,He),z.uniforms=Se.uniforms;let Ee=z.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ee.clippingPlanes=ne.uniform),vd(y,Se),z.needsLights=Hm(y),z.lightsStateVersion=pe,z.needsLights&&(Ee.ambientLightColor.value=N.state.ambient,Ee.lightProbe.value=N.state.probe,Ee.directionalLights.value=N.state.directional,Ee.directionalLightShadows.value=N.state.directionalShadow,Ee.spotLights.value=N.state.spot,Ee.spotLightShadows.value=N.state.spotShadow,Ee.rectAreaLights.value=N.state.rectArea,Ee.ltc_1.value=N.state.rectAreaLTC1,Ee.ltc_2.value=N.state.rectAreaLTC2,Ee.pointLights.value=N.state.point,Ee.pointLightShadows.value=N.state.pointShadow,Ee.hemisphereLights.value=N.state.hemi,Ee.directionalShadowMap.value=N.state.directionalShadowMap,Ee.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ee.spotShadowMap.value=N.state.spotShadowMap,Ee.spotLightMatrix.value=N.state.spotLightMatrix,Ee.spotLightMap.value=N.state.spotLightMap,Ee.pointShadowMap.value=N.state.pointShadowMap,Ee.pointShadowMatrix.value=N.state.pointShadowMatrix),z.currentProgram=He,z.uniformsList=null,He}function yd(y){if(y.uniformsList===null){let L=y.currentProgram.getUniforms();y.uniformsList=Mr.seqWithValue(L.seq,y.uniforms)}return y.uniformsList}function vd(y,L){let k=Pe.get(y);k.outputColorSpace=L.outputColorSpace,k.batching=L.batching,k.batchingColor=L.batchingColor,k.instancing=L.instancing,k.instancingColor=L.instancingColor,k.instancingMorph=L.instancingMorph,k.skinning=L.skinning,k.morphTargets=L.morphTargets,k.morphNormals=L.morphNormals,k.morphColors=L.morphColors,k.morphTargetsCount=L.morphTargetsCount,k.numClippingPlanes=L.numClippingPlanes,k.numIntersection=L.numClipIntersection,k.vertexAlphas=L.vertexAlphas,k.vertexTangents=L.vertexTangents,k.toneMapping=L.toneMapping}function km(y,L,k,z,N){L.isScene!==!0&&(L=It),E.resetTextureUnits();let ie=L.fog,pe=z.isMeshStandardMaterial?L.environment:null,Se=D===null?M.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Ur,be=(z.isMeshStandardMaterial?F:x).get(z.envMap||pe),Fe=z.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,He=!!k.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ee=!!k.morphAttributes.position,st=!!k.morphAttributes.normal,Mt=!!k.morphAttributes.color,Et=Ji;z.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Et=M.toneMapping);let dn=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ot=dn!==void 0?dn.length:0,Ae=Pe.get(z),di=p.state.lights;if(re===!0&&(we===!0||y!==v)){let An=y===v&&z.id===S;ne.setState(z,y,An)}let at=!1;z.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==di.state.version||Ae.outputColorSpace!==Se||N.isBatchedMesh&&Ae.batching===!1||!N.isBatchedMesh&&Ae.batching===!0||N.isBatchedMesh&&Ae.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ae.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ae.instancing===!1||!N.isInstancedMesh&&Ae.instancing===!0||N.isSkinnedMesh&&Ae.skinning===!1||!N.isSkinnedMesh&&Ae.skinning===!0||N.isInstancedMesh&&Ae.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ae.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ae.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ae.instancingMorph===!1&&N.morphTexture!==null||Ae.envMap!==be||z.fog===!0&&Ae.fog!==ie||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==ne.numPlanes||Ae.numIntersection!==ne.numIntersection)||Ae.vertexAlphas!==Fe||Ae.vertexTangents!==He||Ae.morphTargets!==Ee||Ae.morphNormals!==st||Ae.morphColors!==Mt||Ae.toneMapping!==Et||Ae.morphTargetsCount!==ot)&&(at=!0):(at=!0,Ae.__version=z.version);let Hn=Ae.currentProgram;at===!0&&(Hn=xa(z,L,N));let js=!1,_n=!1,ao=!1,wt=Hn.getUniforms(),ei=Ae.uniforms;if(Le.useProgram(Hn.program)&&(js=!0,_n=!0,ao=!0),z.id!==S&&(S=z.id,_n=!0),js||v!==y){Le.buffers.depth.getReversed()?(ue.copy(y.projectionMatrix),Lg(ue),Dg(ue),wt.setValue(O,"projectionMatrix",ue)):wt.setValue(O,"projectionMatrix",y.projectionMatrix),wt.setValue(O,"viewMatrix",y.matrixWorldInverse);let ki=wt.map.cameraPosition;ki!==void 0&&ki.setValue(O,ke.setFromMatrixPosition(y.matrixWorld)),je.logarithmicDepthBuffer&&wt.setValue(O,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&wt.setValue(O,"isOrthographic",y.isOrthographicCamera===!0),v!==y&&(v=y,_n=!0,ao=!0)}if(N.isSkinnedMesh){wt.setOptional(O,N,"bindMatrix"),wt.setOptional(O,N,"bindMatrixInverse");let An=N.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),wt.setValue(O,"boneTexture",An.boneTexture,E))}N.isBatchedMesh&&(wt.setOptional(O,N,"batchingTexture"),wt.setValue(O,"batchingTexture",N._matricesTexture,E),wt.setOptional(O,N,"batchingIdTexture"),wt.setValue(O,"batchingIdTexture",N._indirectTexture,E),wt.setOptional(O,N,"batchingColorTexture"),N._colorsTexture!==null&&wt.setValue(O,"batchingColorTexture",N._colorsTexture,E));let co=k.morphAttributes;if((co.position!==void 0||co.normal!==void 0||co.color!==void 0)&&Oe.update(N,k,Hn),(_n||Ae.receiveShadow!==N.receiveShadow)&&(Ae.receiveShadow=N.receiveShadow,wt.setValue(O,"receiveShadow",N.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(ei.envMap.value=be,ei.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&L.environment!==null&&(ei.envMapIntensity.value=L.environmentIntensity),_n&&(wt.setValue(O,"toneMappingExposure",M.toneMappingExposure),Ae.needsLights&&zm(ei,ao),ie&&z.fog===!0&&de.refreshFogUniforms(ei,ie),de.refreshMaterialUniforms(ei,z,W,se,p.state.transmissionRenderTarget[y.id]),Mr.upload(O,yd(Ae),ei,E)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Mr.upload(O,yd(Ae),ei,E),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&wt.setValue(O,"center",N.center),wt.setValue(O,"modelViewMatrix",N.modelViewMatrix),wt.setValue(O,"normalMatrix",N.normalMatrix),wt.setValue(O,"modelMatrix",N.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){let An=z.uniformsGroups;for(let ki=0,zi=An.length;ki<zi;ki++){let Md=An[ki];P.update(Md,Hn),P.bind(Md,Hn)}}return Hn}function zm(y,L){y.ambientLightColor.needsUpdate=L,y.lightProbe.needsUpdate=L,y.directionalLights.needsUpdate=L,y.directionalLightShadows.needsUpdate=L,y.pointLights.needsUpdate=L,y.pointLightShadows.needsUpdate=L,y.spotLights.needsUpdate=L,y.spotLightShadows.needsUpdate=L,y.rectAreaLights.needsUpdate=L,y.hemisphereLights.needsUpdate=L}function Hm(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(y,L,k){Pe.get(y.texture).__webglTexture=L,Pe.get(y.depthTexture).__webglTexture=k;let z=Pe.get(y);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=k===void 0,z.__autoAllocateDepthBuffer||Ke.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,L){let k=Pe.get(y);k.__webglFramebuffer=L,k.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(y,L=0,k=0){D=y,A=L,C=k;let z=!0,N=null,ie=!1,pe=!1;if(y){let be=Pe.get(y);if(be.__useDefaultFramebuffer!==void 0)Le.bindFramebuffer(O.FRAMEBUFFER,null),z=!1;else if(be.__webglFramebuffer===void 0)E.setupRenderTarget(y);else if(be.__hasExternalTextures)E.rebindTextures(y,Pe.get(y.texture).__webglTexture,Pe.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Ee=y.depthTexture;if(be.__boundDepthTexture!==Ee){if(Ee!==null&&Pe.has(Ee)&&(y.width!==Ee.image.width||y.height!==Ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(y)}}let Fe=y.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(pe=!0);let He=Pe.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(He[L])?N=He[L][k]:N=He[L],ie=!0):y.samples>0&&E.useMultisampledRTT(y)===!1?N=Pe.get(y).__webglMultisampledFramebuffer:Array.isArray(He)?N=He[k]:N=He,I.copy(y.viewport),V.copy(y.scissor),H=y.scissorTest}else I.copy(Ie).multiplyScalar(W).floor(),V.copy(Ye).multiplyScalar(W).floor(),H=mt;if(Le.bindFramebuffer(O.FRAMEBUFFER,N)&&z&&Le.drawBuffers(y,N),Le.viewport(I),Le.scissor(V),Le.setScissorTest(H),ie){let be=Pe.get(y.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+L,be.__webglTexture,k)}else if(pe){let be=Pe.get(y.texture),Fe=L||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,be.__webglTexture,k||0,Fe)}S=-1},this.readRenderTargetPixels=function(y,L,k,z,N,ie,pe){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Pe.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&pe!==void 0&&(Se=Se[pe]),Se){Le.bindFramebuffer(O.FRAMEBUFFER,Se);try{let be=y.texture,Fe=be.format,He=be.type;if(!je.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!je.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=y.width-z&&k>=0&&k<=y.height-N&&O.readPixels(L,k,z,N,We.convert(Fe),We.convert(He),ie)}finally{let be=D!==null?Pe.get(D).__webglFramebuffer:null;Le.bindFramebuffer(O.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(y,L,k,z,N,ie,pe){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=Pe.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&pe!==void 0&&(Se=Se[pe]),Se){let be=y.texture,Fe=be.format,He=be.type;if(!je.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!je.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=y.width-z&&k>=0&&k<=y.height-N){Le.bindFramebuffer(O.FRAMEBUFFER,Se);let Ee=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Ee),O.bufferData(O.PIXEL_PACK_BUFFER,ie.byteLength,O.STREAM_READ),O.readPixels(L,k,z,N,We.convert(Fe),We.convert(He),0);let st=D!==null?Pe.get(D).__webglFramebuffer:null;Le.bindFramebuffer(O.FRAMEBUFFER,st);let Mt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Pg(O,Mt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Ee),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ie),O.deleteBuffer(Ee),O.deleteSync(Mt),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,L=null,k=0){y.isTexture!==!0&&(yo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,y=arguments[1]);let z=Math.pow(2,-k),N=Math.floor(y.image.width*z),ie=Math.floor(y.image.height*z),pe=L!==null?L.x:0,Se=L!==null?L.y:0;E.setTexture2D(y,0),O.copyTexSubImage2D(O.TEXTURE_2D,k,0,0,pe,Se,N,ie),Le.unbindTexture()},this.copyTextureToTexture=function(y,L,k=null,z=null,N=0){y.isTexture!==!0&&(yo("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,y=arguments[1],L=arguments[2],N=arguments[3]||0,k=null);let ie,pe,Se,be,Fe,He,Ee,st,Mt,Et=y.isCompressedTexture?y.mipmaps[N]:y.image;k!==null?(ie=k.max.x-k.min.x,pe=k.max.y-k.min.y,Se=k.isBox3?k.max.z-k.min.z:1,be=k.min.x,Fe=k.min.y,He=k.isBox3?k.min.z:0):(ie=Et.width,pe=Et.height,Se=Et.depth||1,be=0,Fe=0,He=0),z!==null?(Ee=z.x,st=z.y,Mt=z.z):(Ee=0,st=0,Mt=0);let dn=We.convert(L.format),ot=We.convert(L.type),Ae;L.isData3DTexture?(E.setTexture3D(L,0),Ae=O.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(E.setTexture2DArray(L,0),Ae=O.TEXTURE_2D_ARRAY):(E.setTexture2D(L,0),Ae=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,L.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,L.unpackAlignment);let di=O.getParameter(O.UNPACK_ROW_LENGTH),at=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Hn=O.getParameter(O.UNPACK_SKIP_PIXELS),js=O.getParameter(O.UNPACK_SKIP_ROWS),_n=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Et.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Et.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,be),O.pixelStorei(O.UNPACK_SKIP_ROWS,Fe),O.pixelStorei(O.UNPACK_SKIP_IMAGES,He);let ao=y.isDataArrayTexture||y.isData3DTexture,wt=L.isDataArrayTexture||L.isData3DTexture;if(y.isRenderTargetTexture||y.isDepthTexture){let ei=Pe.get(y),co=Pe.get(L),An=Pe.get(ei.__renderTarget),ki=Pe.get(co.__renderTarget);Le.bindFramebuffer(O.READ_FRAMEBUFFER,An.__webglFramebuffer),Le.bindFramebuffer(O.DRAW_FRAMEBUFFER,ki.__webglFramebuffer);for(let zi=0;zi<Se;zi++)ao&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Pe.get(y).__webglTexture,N,He+zi),y.isDepthTexture?(wt&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Pe.get(L).__webglTexture,N,Mt+zi),O.blitFramebuffer(be,Fe,ie,pe,Ee,st,ie,pe,O.DEPTH_BUFFER_BIT,O.NEAREST)):wt?O.copyTexSubImage3D(Ae,N,Ee,st,Mt+zi,be,Fe,ie,pe):O.copyTexSubImage2D(Ae,N,Ee,st,Mt+zi,be,Fe,ie,pe);Le.bindFramebuffer(O.READ_FRAMEBUFFER,null),Le.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else wt?y.isDataTexture||y.isData3DTexture?O.texSubImage3D(Ae,N,Ee,st,Mt,ie,pe,Se,dn,ot,Et.data):L.isCompressedArrayTexture?O.compressedTexSubImage3D(Ae,N,Ee,st,Mt,ie,pe,Se,dn,Et.data):O.texSubImage3D(Ae,N,Ee,st,Mt,ie,pe,Se,dn,ot,Et):y.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,N,Ee,st,ie,pe,dn,ot,Et.data):y.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,N,Ee,st,Et.width,Et.height,dn,Et.data):O.texSubImage2D(O.TEXTURE_2D,N,Ee,st,ie,pe,dn,ot,Et);O.pixelStorei(O.UNPACK_ROW_LENGTH,di),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,at),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Hn),O.pixelStorei(O.UNPACK_SKIP_ROWS,js),O.pixelStorei(O.UNPACK_SKIP_IMAGES,_n),N===0&&L.generateMipmaps&&O.generateMipmap(Ae),Le.unbindTexture()},this.copyTextureToTexture3D=function(y,L,k=null,z=null,N=0){return y.isTexture!==!0&&(yo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,z=arguments[1]||null,y=arguments[2],L=arguments[3],N=arguments[4]||0),yo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,L,k,z,N)},this.initRenderTarget=function(y){Pe.get(y).__webglFramebuffer===void 0&&E.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?E.setTextureCube(y,0):y.isData3DTexture?E.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?E.setTexture2DArray(y,0):E.setTexture2D(y,0),Le.unbindTexture()},this.resetState=function(){A=0,C=0,D=null,Le.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}},fc=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Be(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Ao=class extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new In,this.environmentIntensity=1,this.environmentRotation=new In,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Wh=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Th,this.updateRanges=[],this.version=0,this.uuid=Ki()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ki()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ki()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},on=new w,pc=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=ni(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ht(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ni(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ni(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ni(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ni(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array),s=ht(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array),s=ht(s,this.array),r=ht(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new vn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Rr=class extends si{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},fr,po=new w,pr=new w,mr=new w,gr=new Me,mo=new Me,rp=new gt,za=new w,go=new w,Ha=new w,Sf=new Me,Dl=new Me,bf=new Me,Ro=class extends Ot{constructor(e=new Rr){if(super(),this.isSprite=!0,this.type="Sprite",fr===void 0){fr=new Ft;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Wh(t,5);fr.setIndex([0,1,2,0,2,3]),fr.setAttribute("position",new pc(i,3,0,!1)),fr.setAttribute("uv",new pc(i,2,3,!1))}this.geometry=fr,this.material=e,this.center=new Me(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),pr.setFromMatrixScale(this.matrixWorld),rp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),mr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&pr.multiplyScalar(-mr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Va(za.set(-.5,-.5,0),mr,o,pr,s,r),Va(go.set(.5,-.5,0),mr,o,pr,s,r),Va(Ha.set(.5,.5,0),mr,o,pr,s,r),Sf.set(0,0),Dl.set(1,0),bf.set(1,1);let a=e.ray.intersectTriangle(za,go,Ha,!1,po);if(a===null&&(Va(go.set(-.5,.5,0),mr,o,pr,s,r),Dl.set(0,1),a=e.ray.intersectTriangle(za,Ha,go,!1,po),a===null))return;let c=e.ray.origin.distanceTo(po);c<e.near||c>e.far||t.push({distance:c,point:po.clone(),uv:$i.getInterpolation(po,za,go,Ha,Sf,Dl,bf,new Me),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Va(n,e,t,i,s,r){gr.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(mo.x=r*gr.x-s*gr.y,mo.y=s*gr.x+r*gr.y):mo.copy(gr),n.copy(e),n.x+=mo.x,n.y+=mo.y,n.applyMatrix4(rp)}var Os=class extends si{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},mc=new w,gc=new w,Ef=new gt,_o=new ts,Ga=new Ds,Nl=new w,wf=new w,Cr=class extends Ot{constructor(e=new Ft,t=new Os){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)mc.fromBufferAttribute(t,s-1),gc.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=mc.distanceTo(gc);e.setAttribute("lineDistance",new dt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ga.copy(i.boundingSphere),Ga.applyMatrix4(s),Ga.radius+=r,e.ray.intersectsSphere(Ga)===!1)return;Ef.copy(s).invert(),_o.copy(e.ray).applyMatrix4(Ef);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){let u=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=u,m=g-1;_<m;_+=l){let p=h.getX(_),T=h.getX(_+1),b=Wa(this,e,_o,c,p,T);b&&t.push(b)}if(this.isLineLoop){let _=h.getX(g-1),m=h.getX(u),p=Wa(this,e,_o,c,_,m);p&&t.push(p)}}else{let u=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=u,m=g-1;_<m;_+=l){let p=Wa(this,e,_o,c,_,_+1);p&&t.push(p)}if(this.isLineLoop){let _=Wa(this,e,_o,c,g-1,u);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Wa(n,e,t,i,s,r){let o=n.geometry.attributes.position;if(mc.fromBufferAttribute(o,s),gc.fromBufferAttribute(o,r),t.distanceSqToSegment(mc,gc,Nl,wf)>i)return;Nl.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Nl);if(!(c<e.near||c>e.far))return{distance:c,point:wf.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}var Tf=new w,Af=new w,Xh=class extends Cr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Tf.fromBufferAttribute(t,s),Af.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Tf.distanceTo(Af);e.setAttribute("lineDistance",new dt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Co=class extends si{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Rf=new gt,qh=new ts,Xa=new Ds,qa=new w,_c=class extends Ot{constructor(e=new Ft,t=new Co){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Xa.copy(i.boundingSphere),Xa.applyMatrix4(s),Xa.radius+=r,e.ray.intersectsSphere(Xa)===!1)return;Rf.copy(s).invert(),qh.copy(e.ray).applyMatrix4(Rf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,f=i.attributes.position;if(l!==null){let d=Math.max(0,o.start),u=Math.min(l.count,o.start+o.count);for(let g=d,_=u;g<_;g++){let m=l.getX(g);qa.fromBufferAttribute(f,m),Cf(qa,m,c,s,e,t,this)}}else{let d=Math.max(0,o.start),u=Math.min(f.count,o.start+o.count);for(let g=d,_=u;g<_;g++)qa.fromBufferAttribute(f,g),Cf(qa,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Cf(n,e,t,i,s,r,o){let a=qh.distanceSqToPoint(n);if(a<t){let c=new w;qh.closestPointToPoint(n,c),c.applyMatrix4(i);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Io=class extends Mn{constructor(e,t,i,s,r,o,a,c,l){super(e,t,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Yn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);let h=i[s],d=i[s+1]-h,u=(o-h)/d;return(s+u)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new Me:new w);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new w,s=[],r=[],o=[],a=new w,c=new gt;for(let u=0;u<=e;u++){let g=u/e;s[u]=this.getTangentAt(g,new w)}r[0]=new w,o[0]=new w;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),f<=l&&(l=f,i.set(0,1,0)),d<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let u=1;u<=e;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(s[u-1],s[u]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Qt(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(c.makeRotationAxis(a,g))}o[u].crossVectors(s[u],r[u])}if(t===!0){let u=Math.acos(Qt(r[0].dot(r[e]),-1,1));u/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(u=-u);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],u*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},xc=class extends Yn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new Me){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=c-this.aX,u=l-this.aY;c=d*h-u*f+this.aX,l=d*f+u*h+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Yh=class extends xc{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Su(){let n=0,e=0,t=0,i=0;function s(r,o,a,c){n=r,e=a,t=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,f){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,u=(a-o)/h-(c-o)/(h+f)+(c-a)/f;d*=h,u*=h,s(o,a,d,u)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var Ya=new w,Ul=new Su,Ol=new Su,Fl=new Su,Fs=class extends Yn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new w){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Ya.subVectors(s[0],s[1]).add(s[0]),l=Ya);let f=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Ya.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ya),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(f),u),_=Math.pow(f.distanceToSquared(d),u),m=Math.pow(d.distanceToSquared(h),u);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Ul.initNonuniformCatmullRom(l.x,f.x,d.x,h.x,g,_,m),Ol.initNonuniformCatmullRom(l.y,f.y,d.y,h.y,g,_,m),Fl.initNonuniformCatmullRom(l.z,f.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Ul.initCatmullRom(l.x,f.x,d.x,h.x,this.tension),Ol.initCatmullRom(l.y,f.y,d.y,h.y,this.tension),Fl.initCatmullRom(l.z,f.z,d.z,h.z,this.tension));return i.set(Ul.calc(c),Ol.calc(c),Fl.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new w().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function If(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,c=n*a;return(2*t-2*i+r+o)*c+(-3*t+3*i-2*r-o)*a+r*n+t}function Av(n,e){let t=1-n;return t*t*e}function Rv(n,e){return 2*(1-n)*n*e}function Cv(n,e){return n*n*e}function So(n,e,t,i){return Av(n,e)+Rv(n,t)+Cv(n,i)}function Iv(n,e){let t=1-n;return t*t*t*e}function Pv(n,e){let t=1-n;return 3*t*t*n*e}function Lv(n,e){return 3*(1-n)*n*n*e}function Dv(n,e){return n*n*n*e}function bo(n,e,t,i,s){return Iv(n,e)+Pv(n,t)+Lv(n,i)+Dv(n,s)}var $h=class extends Yn{constructor(e=new Me,t=new Me,i=new Me,s=new Me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new Me){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(bo(e,s.x,r.x,o.x,a.x),bo(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Zh=class extends Yn{constructor(e=new w,t=new w,i=new w,s=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new w){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(bo(e,s.x,r.x,o.x,a.x),bo(e,s.y,r.y,o.y,a.y),bo(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Jh=class extends Yn{constructor(e=new Me,t=new Me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Me){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Kh=class extends Yn{constructor(e=new w,t=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new w){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new w){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},jh=class extends Yn{constructor(e=new Me,t=new Me,i=new Me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Me){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(So(e,s.x,r.x,o.x),So(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},yc=class extends Yn{constructor(e=new w,t=new w,i=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new w){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(So(e,s.x,r.x,o.x),So(e,s.y,r.y,o.y),So(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qh=class extends Yn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Me){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return i.set(If(a,c.x,l.x,h.x,f.x),If(a,c.y,l.y,h.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new Me().fromArray(s))}return this}},Nv=Object.freeze({__proto__:null,ArcCurve:Yh,CatmullRomCurve3:Fs,CubicBezierCurve:$h,CubicBezierCurve3:Zh,EllipseCurve:xc,LineCurve:Jh,LineCurve3:Kh,QuadraticBezierCurve:jh,QuadraticBezierCurve3:yc,SplineCurve:Qh});var Ir=class n extends Ft{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],d=[],u=[],g=0,_=[],m=i/2,p=0;T(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new dt(f,3)),this.setAttribute("normal",new dt(d,3)),this.setAttribute("uv",new dt(u,2));function T(){let M=new w,U=new w,A=0,C=(t-e)/i;for(let D=0;D<=r;D++){let S=[],v=D/r,I=v*(t-e)+e;for(let V=0;V<=s;V++){let H=V/s,X=H*c+a,Q=Math.sin(X),q=Math.cos(X);U.x=I*Q,U.y=-v*i+m,U.z=I*q,f.push(U.x,U.y,U.z),M.set(Q,C,q).normalize(),d.push(M.x,M.y,M.z),u.push(H,1-v),S.push(g++)}_.push(S)}for(let D=0;D<s;D++)for(let S=0;S<r;S++){let v=_[S][D],I=_[S+1][D],V=_[S+1][D+1],H=_[S][D+1];(e>0||S!==0)&&(h.push(v,I,H),A+=3),(t>0||S!==r-1)&&(h.push(I,V,H),A+=3)}l.addGroup(p,A,0),p+=A}function b(M){let U=g,A=new Me,C=new w,D=0,S=M===!0?e:t,v=M===!0?1:-1;for(let V=1;V<=s;V++)f.push(0,m*v,0),d.push(0,v,0),u.push(.5,.5),g++;let I=g;for(let V=0;V<=s;V++){let X=V/s*c+a,Q=Math.cos(X),q=Math.sin(X);C.x=S*q,C.y=m*v,C.z=S*Q,f.push(C.x,C.y,C.z),d.push(0,v,0),A.x=Q*.5+.5,A.y=q*.5*v+.5,u.push(A.x,A.y),g++}for(let V=0;V<s;V++){let H=U+V,X=I+V;M===!0?h.push(X,X+1,H):h.push(X+1,X,H),D+=3}l.addGroup(p,D,M===!0?1:2),p+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},mn=class n extends Ir{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Bs=class n extends Ft{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),l=0,h=[],f=new w,d=new w,u=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){let T=[],b=p/i,M=0;p===0&&o===0?M=.5/t:p===i&&c===Math.PI&&(M=-.5/t);for(let U=0;U<=t;U++){let A=U/t;f.x=-e*Math.cos(s+A*r)*Math.sin(o+b*a),f.y=e*Math.cos(o+b*a),f.z=e*Math.sin(s+A*r)*Math.sin(o+b*a),g.push(f.x,f.y,f.z),d.copy(f).normalize(),_.push(d.x,d.y,d.z),m.push(A+M,1-b),T.push(l++)}h.push(T)}for(let p=0;p<i;p++)for(let T=0;T<t;T++){let b=h[p][T+1],M=h[p][T],U=h[p+1][T],A=h[p+1][T+1];(p!==0||o>0)&&u.push(b,M,A),(p!==i-1||c<Math.PI)&&u.push(M,U,A)}this.setIndex(u),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(_,3)),this.setAttribute("uv",new dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var vc=class n extends Ft{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new w,f=new w,d=new w;for(let u=0;u<=i;u++)for(let g=0;g<=s;g++){let _=g/s*r,m=u/i*Math.PI*2;f.x=(e+t*Math.cos(m))*Math.cos(_),f.y=(e+t*Math.cos(m))*Math.sin(_),f.z=t*Math.sin(m),a.push(f.x,f.y,f.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(f,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(u/i)}for(let u=1;u<=i;u++)for(let g=1;g<=s;g++){let _=(s+1)*u+g-1,m=(s+1)*(u-1)+g-1,p=(s+1)*(u-1)+g,T=(s+1)*u+g;o.push(_,m,T),o.push(m,p,T)}this.setIndex(o),this.setAttribute("position",new dt(a,3)),this.setAttribute("normal",new dt(c,3)),this.setAttribute("uv",new dt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Pr=class n extends Ft{constructor(e=new yc(new w(-1,-1,0),new w(-1,1,0),new w(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new w,c=new w,l=new Me,h=new w,f=[],d=[],u=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new dt(f,3)),this.setAttribute("normal",new dt(d,3)),this.setAttribute("uv",new dt(u,2));function _(){for(let b=0;b<t;b++)m(b);m(r===!1?t:0),T(),p()}function m(b){h=e.getPointAt(b/t,h);let M=o.normals[b],U=o.binormals[b];for(let A=0;A<=s;A++){let C=A/s*Math.PI*2,D=Math.sin(C),S=-Math.cos(C);c.x=S*M.x+D*U.x,c.y=S*M.y+D*U.y,c.z=S*M.z+D*U.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+i*c.x,a.y=h.y+i*c.y,a.z=h.z+i*c.z,f.push(a.x,a.y,a.z)}}function p(){for(let b=1;b<=t;b++)for(let M=1;M<=s;M++){let U=(s+1)*(b-1)+(M-1),A=(s+1)*b+(M-1),C=(s+1)*b+M,D=(s+1)*(b-1)+M;g.push(U,A,D),g.push(A,C,D)}}function T(){for(let b=0;b<=t;b++)for(let M=0;M<=s;M++)l.x=b/t,l.y=M/s,u.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new Nv[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Lr=class extends si{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zf,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function $a(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Uv(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Dr=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},eu=class extends Dr{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Td,endingEnd:Td}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ad:r=e,a=2*t-i;break;case Rd:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Ad:o=e,c=2*i-t;break;case Rd:o=1,c=i+s[1]-s[0];break;default:o=e-1,c=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,u=this._weightNext,g=(i-t)/(s-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,T=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,b=(-1-u)*m+(1.5+u)*_+.5*g,M=u*m-u*_;for(let U=0;U!==a;++U)r[U]=p*o[h+U]+T*o[l+U]+b*o[c+U]+M*o[f+U];return r}},tu=class extends Dr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(i-t)/(s-t),f=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*f+o[c+d]*h;return r}},nu=class extends Dr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},$n=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=$a(t,this.TimeBufferType),this.values=$a(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:$a(e.times,Array),values:$a(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new nu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new tu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new eu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ec:t=this.InterpolantFactoryMethodDiscrete;break;case wh:t=this.InterpolantFactoryMethodLinear;break;case sl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ec;case this.InterpolantFactoryMethodLinear:return wh;case this.InterpolantFactoryMethodSmooth:return sl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&Uv(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===sl,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let f=a*i,d=f-i,u=f+i;for(let g=0;g!==i;++g){let _=t[f+g];if(_!==t[d+g]||_!==t[u+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let f=a*i,d=o*i;for(let u=0;u!==i;++u)t[d+u]=t[f+u]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};$n.prototype.TimeBufferType=Float32Array;$n.prototype.ValueBufferType=Float32Array;$n.prototype.DefaultInterpolation=wh;var ks=class extends $n{constructor(e,t,i){super(e,t,i)}};ks.prototype.ValueTypeName="bool";ks.prototype.ValueBufferType=Array;ks.prototype.DefaultInterpolation=ec;ks.prototype.InterpolantFactoryMethodLinear=void 0;ks.prototype.InterpolantFactoryMethodSmooth=void 0;var iu=class extends $n{};iu.prototype.ValueTypeName="color";var su=class extends $n{};su.prototype.ValueTypeName="number";var ru=class extends Dr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)es.slerpFlat(r,0,o,l-a,o,l,c);return r}},Mc=class extends $n{InterpolantFactoryMethodLinear(e){return new ru(this.times,this.values,this.getValueSize(),e)}};Mc.prototype.ValueTypeName="quaternion";Mc.prototype.InterpolantFactoryMethodSmooth=void 0;var zs=class extends $n{constructor(e,t,i){super(e,t,i)}};zs.prototype.ValueTypeName="string";zs.prototype.ValueBufferType=Array;zs.prototype.DefaultInterpolation=ec;zs.prototype.InterpolantFactoryMethodLinear=void 0;zs.prototype.InterpolantFactoryMethodSmooth=void 0;var ou=class extends $n{};ou.prototype.ValueTypeName="vector";var au=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){let f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=l.length;f<d;f+=2){let u=l[f],g=l[f+1];if(u.global&&(u.lastIndex=0),u.test(h))return g}return null}}},Ov=new au,cu=class{constructor(e){this.manager=e!==void 0?e:Ov,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};cu.DEFAULT_MATERIAL_NAME="__DEFAULT";var Po=class extends Ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Lo=class extends Po{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Bl=new gt,Pf=new w,Lf=new w,Sc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new To,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Pf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Pf),Lf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Lf),t.updateMatrixWorld(),Bl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Bl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Df=new gt,xo=new w,kl=new w,lu=class extends Sc{constructor(){super(new Xt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Me(4,2),this._viewportCount=6,this._viewports=[new ut(2,1,1,1),new ut(0,1,1,1),new ut(3,1,1,1),new ut(1,1,1,1),new ut(3,0,1,1),new ut(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),xo.setFromMatrixPosition(e.matrixWorld),i.position.copy(xo),kl.copy(i.position),kl.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(kl),i.updateMatrixWorld(),s.makeTranslation(-xo.x,-xo.y,-xo.z),Df.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Df)}},Nr=class extends Po{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new lu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},hu=class extends Sc{constructor(){super(new lc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Do=class extends Po{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.shadow=new hu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var bu="\\[\\]\\.:\\/",Fv=new RegExp("["+bu+"]","g"),Eu="[^"+bu+"]",Bv="[^"+bu.replace("\\.","")+"]",kv=/((?:WC+[\/:])*)/.source.replace("WC",Eu),zv=/(WCOD+)?/.source.replace("WCOD",Bv),Hv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Eu),Vv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Eu),Gv=new RegExp("^"+kv+zv+Hv+Vv+"$"),Wv=["material","materials","bones","map"],uu=class{constructor(e,t,i){let s=i||At.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},At=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Fv,"")}static parseTrackName(e){let t=Gv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Wv.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=i(a.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};At.Composite=uu;At.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};At.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};At.prototype.GetterByBindingType=[At.prototype._getValue_direct,At.prototype._getValue_array,At.prototype._getValue_arrayElement,At.prototype._getValue_toArray];At.prototype.SetterByBindingTypeAndVersioning=[[At.prototype._setValue_direct,At.prototype._setValue_direct_setNeedsUpdate,At.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[At.prototype._setValue_array,At.prototype._setValue_array_setNeedsUpdate,At.prototype._setValue_array_setMatrixWorldNeedsUpdate],[At.prototype._setValue_arrayElement,At.prototype._setValue_arrayElement_setNeedsUpdate,At.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[At.prototype._setValue_fromArray,At.prototype._setValue_fromArray_setNeedsUpdate,At.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var f1=new Float32Array(1);var Nf=new gt,bc=class{constructor(e,t,i=0,s=1/0){this.ray=new ts(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new wo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Nf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Nf),this}intersectObject(e,t=!0,i=[]){return du(e,this,i,t),i.sort(Uf),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)du(e[s],this,i,t);return i.sort(Uf),i}};function Uf(n,e){return n.distance-e.distance}function du(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)du(r[o],e,t,!0)}}var Ec=class extends Xh{constructor(e=10,t=10,i=4473924,s=8947848){i=new Be(i),s=new Be(s);let r=t/2,o=e/t,a=e/2,c=[],l=[];for(let d=0,u=0,g=-a;d<=t;d++,g+=o){c.push(-a,0,g,a,0,g),c.push(g,0,-a,g,0,a);let _=d===r?i:s;_.toArray(l,u),u+=3,_.toArray(l,u),u+=3,_.toArray(l,u),u+=3,_.toArray(l,u),u+=3}let h=new Ft;h.setAttribute("position",new dt(c,3)),h.setAttribute("color",new dt(l,3));let f=new Os({vertexColors:!0,toneMapped:!1});super(h,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var Fr=[{id:"all",name:"\uC804\uCCB4"},{id:"ar",name:"\uB3CC\uACA9\uC18C\uCD1D",en:"ASSAULT RIFLE"},{id:"smg",name:"\uAE30\uAD00\uB2E8\uCD1D",en:"SUBMACHINE GUN"},{id:"sg",name:"\uC0B0\uD0C4\uCD1D",en:"SHOTGUN"},{id:"sr",name:"\uC800\uACA9\uC18C\uCD1D",en:"SNIPER RIFLE"},{id:"lmg",name:"\uACBD\uAE30\uAD00\uCD1D",en:"LIGHT MACHINE GUN"},{id:"hg",name:"\uAD8C\uCD1D",en:"SIDEARM"}],qv={ar:{names:["VX-01 PHANTOM","AR-7 VANGUARD","MK-18 SENTINEL","R-301 TALON","AK-12 NOMAD","SCAR ECLIPSE","FAMAS RECON","AUG SPECTRE","M4A1 STRIKER","G36 OVERWATCH"],damage:27,rate:10,mag:30,spread:.009,reload:1.8,recoil:.022,pellets:1,speed:1,color:13223596},smg:{names:["MP-9 VIPER","VECTOR KINETIC","P90 PULSE","UMP-45 SHADOW","MP5 GHOST","BIZON SWARM","MAC-11 FRENZY","CX-9 FALCON","KRISS OVERDRIVE","MP7 SWITCH"],damage:18,rate:15,mag:35,spread:.019,reload:1.4,recoil:.014,pellets:1,speed:1.12,color:9480866},sg:{names:["SG-8 BREACHER","M870 JUDGEMENT","AA-12 TEMPEST","SPAS-12 WARDEN","KSG RAMPART","M1014 HAVOC","SAIGA THUNDER","DB-2 OUTLAW"],damage:13,rate:1.3,mag:8,spread:.065,reload:2.2,recoil:.065,pellets:8,speed:.97,color:10261119},sr:{names:["AWP HORIZON","M82 TITAN","SVD LONGSHOT","L96 SILENCE","SCOUT PATHFINDER","M200 INTERVENTION","DMR-14 ORACLE","RS-50 ZENITH"],damage:97,rate:.9,mag:5,spread:.0015,reload:2.6,recoil:.075,pellets:1,speed:.88,color:10661003},lmg:{names:["M249 IRONCLAD","PKM DEVASTATOR","RPK FORTRESS","MG-42 REAPER","M60 JUGGERNAUT","LSAT MONOLITH"],damage:30,rate:11,mag:80,spread:.022,reload:3.6,recoil:.028,pellets:1,speed:.8,color:10264207},hg:{names:["USP-9 WHISPER","DE-50 REGENT","G18 STINGER","P226 RANGER","M1911 CLASSIC","R-6 PEACEMAKER","FN-57 NEEDLE","P320 ACE"],damage:34,rate:4.5,mag:14,spread:.013,reload:1.1,recoil:.038,pellets:1,speed:1.15,color:11183513}},Yv={ar:[[26,1.8,9.5,30],[29,1.75,8.7,28],[24,1.9,11,32],[22,1.8,12,30],[34,1.65,7.2,25],[32,1.75,7.8,24],[27,1.85,10.5,27],[28,1.8,9,30],[25,1.9,10,30],[30,1.7,8.4,30]],smg:[[18,1.6,14,32],[16,1.65,18,28],[17,1.6,15,50],[25,1.6,8.5,25],[20,1.7,12,30],[19,1.55,13,60],[14,1.5,20,32],[21,1.65,11,30],[15,1.7,19,26],[22,1.6,10.8,30]],sg:[[12,1.4,1.4,8],[14,1.5,1.05,6],[10,1.35,3.2,20],[13,1.45,1.6,8],[9,1.4,1.2,14],[11,1.4,2.1,8],[10,1.35,3.6,12],[16,1.5,.85,2]],sr:[[95,2,.85,5],[110,1.6,.65,5],[58,1.85,2.3,10],[100,1.9,.8,5],[70,2.1,1.3,8],[105,1.85,.72,5],[64,1.8,2.1,12],[92,2.2,.95,6]],lmg:[[29,1.6,10,100],[37,1.55,7.5,75],[33,1.65,8.5,60],[23,1.5,16,100],[39,1.6,6.8,60],[28,1.7,11,80]],hg:[[30,1.9,5.5,15],[60,1.8,2.2,7],[21,1.6,13,20],[33,1.85,5,15],[42,1.8,3.8,8],[64,1.75,1.9,6],[28,2,6.5,20],[35,1.8,4.8,17]]},$v={ar:[22,75,.62],smg:[12,45,.42],sg:[7,32,.18],sr:[65,130,.85],lmg:[25,85,.65],hg:[16,55,.55]},Zv={ar:[.2,13,.055],smg:[.14,17,.038],sg:[.23,10,.105],sr:[.32,8,.13],lmg:[.3,11,.075],hg:[.12,15,.065]},Jv={ar:[150,140,160,180,125,120,162,150,180,150],smg:[192,168,200,150,180,240,224,180,156,180],sg:[40,36,60,48,56,48,60,30],sr:[25,20,50,30,40,25,48,30],lmg:[200,225,240,300,180,240],hg:[90,42,120,75,56,36,100,85]},Ue=[];for(let[n,e]of Object.entries(qv))e.names.forEach((t,i)=>{let[s,r,o,a]=Yv[n][i],c=$v[n],l=Zv[n],h=["ar","smg","lmg"].includes(n)||n==="sg"&&(i===2||i===6)||n==="hg"&&i===2;Ue.push({...e,id:Ue.length,name:t,cat:n,damage:s,headMultiplier:r,rate:o,mag:a,auto:h,reserve:Jv[n][i],pellets:n==="sg"?[8,9,8,8,12,8,8,10][i]:1,spread:e.spread*(.8+i%3*.2),reload:e.reload+i%3*.13,recoil:e.recoil*(.82+i%4*.13),rangeStart:c[0]+i%3*2,rangeEnd:c[1]+i%4*3,minDamage:c[2],adsTime:l[0]+i%3*.015,recovery:l[1],kick:l[2]*(.9+i%3*.1),sideRecoil:e.recoil*(.18+i%3*.08),color:e.color})});Fr.push({id:"bow",name:"\uD65C",en:"CHARGE BOW"},{id:"launcher",name:"\uBC1C\uC0AC\uAE30",en:"ROCKET LAUNCHER"},{id:"melee",name:"\uADFC\uC811 \uBB34\uAE30",en:"MELEE"});var wu={pellets:1,auto:!1,spread:0,rangeStart:50,rangeEnd:130,minDamage:.75,adsTime:.2,recovery:12,sideRecoil:0,color:12109971};Ue.push({...wu,id:50,name:"CB-1 WINDRUNNER",cat:"bow",mechanic:"arrow",damage:80,headMultiplier:1.8,rate:1.2,mag:1,reserve:24,reload:.55,recoil:.012,kick:.045,speed:1.1,chargeTime:.85,projectileSpeed:62,gravity:3},{...wu,id:51,name:"RL-1 COMET",cat:"launcher",mechanic:"rocket",damage:105,headMultiplier:1,rate:.7,mag:1,reserve:6,reload:2.6,recoil:.075,kick:.14,speed:.85,projectileSpeed:30,gravity:0,blastRadius:5,splashDamage:80},{...wu,id:52,name:"KN-1 SWIFT",ko:"\uC804\uC220 \uB2E8\uAC80",shape:"knife",cat:"melee",mechanic:"melee",damage:45,headMultiplier:1.5,rate:2,mag:1,reserve:0,reload:0,recoil:.035,kick:.07,speed:1.25,rangeStart:2.5,rangeEnd:2.6,minDamage:1,reach:2.5,auto:!0});var Kv=[["KN-2 FANG","\uCEE4\uBE0C \uB098\uC774\uD504","curved",38,1.6,2.5,2.1,1.3,.58],["KN-3 STILETTO","\uC2A4\uD2F8\uB808\uD1A0","knife",42,1.7,2.2,2.3,1.28,.72],["KN-4 KARAMBIT","\uCE74\uB78C\uBE57","curved",35,1.8,2.8,1.9,1.32,.46],["SW-1 RONIN","\uCE74\uD0C0\uB098","sword",62,1.4,1.35,3.1,1.12,1.1],["SW-2 SABRE","\uC138\uC774\uBC84","curved",54,1.5,1.6,2.9,1.16,.95],["SW-3 CLAYMORE","\uB300\uAC80","sword",85,1.3,.85,3.4,.95,1.35],["SW-4 RAPIER","\uB808\uC774\uD53C\uC5B4","rapier",50,1.8,1.7,3.3,1.18,1.2],["AX-1 HATCHET","\uC190\uB3C4\uB07C","axe",58,1.45,1.55,2.4,1.17,.72],["AX-2 VIKING","\uC804\uD22C \uB3C4\uB07C","axe",75,1.35,1.05,2.9,1.02,1],["AX-3 HALBERD","\uD560\uBC84\uB4DC","halberd",80,1.3,.9,3.8,.92,1.45],["HM-1 IMPACT","\uC804\uC220 \uB9DD\uCE58","hammer",65,1.3,1.3,2.4,1.08,.72],["HM-2 TITAN","\uB300\uD615 \uD574\uBA38","hammer",95,1.2,.7,2.9,.88,1.1],["BT-1 SLUGGER","\uC57C\uAD6C \uBC30\uD2B8","bat",48,1.5,1.8,2.8,1.2,1.05],["BT-2 RIOT","\uACBD\uCC30\uBD09","bat",32,1.6,3,2.2,1.27,.68],["SP-1 LANCER","\uC804\uD22C \uCC3D","spear",57,1.7,1.25,4.1,1.05,1.5],["SP-2 TRIDENT","\uC0BC\uC9C0\uCC3D","trident",68,1.4,1,3.9,1,1.4],["ST-1 MONK","\uBD09","staff",40,1.5,2.1,3.5,1.22,1.45],["SC-1 REAPER","\uB0AB","scythe",72,1.4,1.1,3.6,1.03,1.3],["CB-1 BREACH","\uC1E0\uC9C0\uB81B\uB300","crowbar",46,1.55,1.9,2.6,1.23,.86]];for(let[n,e,t,i,s,r,o,a,c]of Kv)Ue.push({...Ue[52],id:Ue.length,name:n,ko:e,shape:t,damage:i,headMultiplier:s,rate:r,reach:o,speed:a,length:c,rangeStart:o,rangeEnd:o+.1,swingTime:Math.min(.48,.7/r),color:10398645});Ue.push({...Ue[28],id:Ue.length,name:"OS-1 OBLIVION",damage:240,headMultiplier:1.3,rate:.45,mag:1,reserve:5,reload:3.8,speed:.78,rangeStart:80,rangeEnd:160,minDamage:.9,oneShot:!0});var op=(n,e,t)=>Math.max(e,Math.min(t,n));function Br(n,e=!1,t=0){let i=op((Math.max(0,t)-n.rangeStart)/(n.rangeEnd-n.rangeStart),0,1);return Math.round(n.damage*(e?n.headMultiplier:1)*(1-i*(1-n.minDamage))*10)/10}function Tu(n,{aim:e=!1,grounded:t=!0,speed:i=0,crouched:s=!1}={}){return n.spread*(e?n.cat==="sg"?.75:.16:1)*(t?1:1.9)*(1+op(i/10,0,1)*.6)*(s&&t?.8:1)}function ap(n,e,t={},i=Math.random){let s=Math.hypot(...n),r=n.map(f=>f/s),o=Math.hypot(r[0],r[2]),a=o>.001?[-r[2]/o,0,r[0]/o]:[1,0,0],c=[a[1]*r[2]-a[2]*r[1],a[2]*r[0]-a[0]*r[2],a[0]*r[1]-a[1]*r[0]],l=Tu(e,t),h=[];for(let f=0;f<e.pellets;f++){let d=i()*Math.PI*2,u=Math.sqrt(i())*l,g=r.map((m,p)=>m+a[p]*Math.cos(d)*u+c[p]*Math.sin(d)*u),_=Math.hypot(...g);h.push(g.map(m=>m/_))}return h}function Hs(n,e,t){let i=0,s=150;for(let r=0;r<3;r++)if(Math.abs(e[r])<1e-8){if(n[r]<t.min[r]||n[r]>t.max[r])return 1/0}else{let o=(t.min[r]-n[r])/e[r],a=(t.max[r]-n[r])/e[r];if(o>a&&([o,a]=[a,o]),i=Math.max(i,o),s=Math.min(s,a),i>s)return 1/0}return i}function Uo(n,e,t){let i=(t.height??1.7)/1.7,s=t.yaw||0,r=Math.cos(s),o=Math.sin(s),a=n[0]-t.x,c=n[2]-t.z,l=[r*a-o*c,(n[1]-t.y)/i,o*a+r*c],h=[r*e[0]-o*e[2],e[1]/i,o*e[0]+r*e[2]],f=Hs(l,h,{min:[-.29,1.75,-.27],max:[.29,2.22,.28]}),d=Math.min(...[{min:[-.14,1.65,-.14],max:[.14,1.84,.14]},{min:[-.39,1.02,-.24],max:[.39,1.74,.36]},{min:[-.32,.1,-.27],max:[.32,1.03,.38]},{min:[-.62,1.05,-.2],max:[.62,1.7,.35]}].map(u=>Hs(l,h,u)));return{distance:Math.min(f,d),head:f<=d}}var Au=(n,e,t)=>Math.max(e,Math.min(t,n)),cp=(n,e,t)=>n+(e-n)*t,Vs=(n,e,t,i)=>cp(n,e,1-Math.exp(-t*i)),jv=new w,Qv=new w;function lp(n,e,t,i,s){let r=[],o=Math.max(1,Math.ceil(s/.008333333333333333));for(let a=0;a<o;a++)tM(n,e,t,i,s/o,r);return r}function hp(n){return n.slideCooldown>0||!n.grounded||Math.hypot(n.vel.x,n.vel.z)<=3?!1:(n.slide=.9,n.slideCooldown=1.25,n.slideDir.copy(n.vel).setY(0).normalize(),n.vel.x=n.slideDir.x*13,n.vel.z=n.slideDir.z*13,!0)}function eM(n,e,t,i){let s=n.pos,r=.34,o=s.y+n.height-.12,a=s.y+.16;for(let c of["x","z"]){let l=c==="x"?t:i;s[c]+=l;for(let h of e)if(s.x+r>h.min.x&&s.x-r<h.max.x&&s.z+r>h.min.z&&s.z-r<h.max.z&&o>h.min.y&&a<h.max.y){if(n.grounded&&h.max.y-s.y<=.36){n.stepOffset+=h.max.y-s.y,s.y=h.max.y;continue}l>0?s[c]=h.min[c]-r:l<0&&(s[c]=h.max[c]+r),c==="x"?n.vel.x=0:n.vel.z=0}}s.x=Au(s.x,-26.8,26.8),s.z=Au(s.z,-26.8,26.8)}function tM(n,e,t,i,s,r){let{right:o=0,forward:a=0,aim:c=!1}=e,l=e.crouch&&n.slide<=0,h=e.sprint&&a>.1&&!c&&!l,f=(l?2.5:c?3.1:h?9.2:5.8)*t.speed;if(n.slideCooldown=Math.max(0,n.slideCooldown-s),n.coyote=n.grounded?.1:Math.max(0,n.coyote-s),n.jumpBuffer>0){n.jumpBuffer-=s;let m=n.grounded||n.coyote>0;(m||n.jumps<2)&&(n.vel.y=m?9.3:8.2,n.jumps=m?1:2,n.coyote=0,n.jumpBuffer=0,n.grounded=!1,n.slide=0,r.push({type:"jump",double:n.jumps===2,impulse:-.7}))}let d=jv.set(o,0,-a);if(d.length()>1&&d.normalize(),d.applyAxisAngle(Qv.set(0,1,0),n.yaw),n.slide>0){n.slide=Math.max(0,n.slide-s),d.lengthSq()>.01&&n.slideDir.lerp(d.normalize(),s*1.8).normalize();let m=cp(5.5,13,Math.pow(Au(n.slide/.9,0,1),.75));n.vel.x=n.slideDir.x*m,n.vel.z=n.slideDir.z*m}else if(n.grounded){let m=d.lengthSq()>.01?14:12;n.vel.x=Vs(n.vel.x,d.x*f,m,s),n.vel.z=Vs(n.vel.z,d.z*f,m,s)}else if(d.lengthSq()>.01){let m=Math.max(f,Math.hypot(n.vel.x,n.vel.z)*.995);n.vel.x=Vs(n.vel.x,d.x*m,3.2,s),n.vel.z=Vs(n.vel.z,d.z*m,3.2,s)}else n.vel.x=Vs(n.vel.x,0,.3,s),n.vel.z=Vs(n.vel.z,0,.3,s);let u=n.slide>0?.85:l?1.1:1.7;u>n.height&&i.some(m=>n.pos.x+.28>m.min.x&&n.pos.x-.28<m.max.x&&n.pos.z+.28>m.min.z&&n.pos.z-.28<m.max.z&&m.min.y>n.pos.y+.2&&m.min.y<n.pos.y+u)&&(u=n.height),n.height=Vs(n.height,u,16,s);let g=n.pos.y;n.vel.y-=23*s,eM(n,i,n.vel.x*s,n.vel.z*s),n.pos.y+=n.vel.y*s;let _=0;for(let m of i)n.pos.x+.25>m.min.x&&n.pos.x-.25<m.max.x&&n.pos.z+.25>m.min.z&&n.pos.z-.25<m.max.z&&(n.vel.y<=0&&g>=m.max.y-.35&&n.pos.y<=m.max.y?_=Math.max(_,m.max.y):n.vel.y>0&&g+n.height<=m.min.y&&n.pos.y+n.height>=m.min.y&&(n.pos.y=m.min.y-n.height,n.vel.y=0));n.pos.y<=_?(!n.grounded&&n.vel.y<-3&&r.push({type:"land",impulse:Math.min(2.5,-n.vel.y*.14)}),n.pos.y=_,n.vel.y=0,n.grounded=!0,n.jumps=0):n.grounded=!1}var Ru=(n,e,t)=>Math.max(e,Math.min(t,n)),up=(n,e)=>.5+.5*Ru(n/e.chargeTime,0,1);function dp(n,e,t,i,s,r=1){let o=t.projectileSpeed*(t.mechanic==="arrow"?.6+.4*r:1),a=Math.hypot(...s);return{id:n,owner:e,weapon:t.id,kind:t.mechanic,position:i.slice(),velocity:s.map(c=>c/a*o),gravity:t.gravity,power:r,travel:0,life:5}}function fp(n,e,t,i){if(e<=0)return{done:!1};let s=n.velocity.map((d,u)=>d*e-(u===1?n.gravity*e*e/2:0)),r=Math.hypot(...s),o=s.map(d=>d/r),a=r+1e-5,c=null,l=!1,h=!1;if(o[1]<0){let d=-n.position[1]/o[1];d>=0&&d<=a&&(a=d,h=!0)}for(let d of t){let u=Hs(n.position,o,d);u<=a&&(a=u,h=!0,c=null)}for(let d of i){if(d.id===n.owner||d.health<=0)continue;let u=Uo(n.position,o,d);u.distance<a&&(a=u.distance,c=d,l=u.head,h=!1)}n.velocity[1]-=n.gravity*e,n.life-=e;let f=Math.min(r,a);return n.position=n.position.map((d,u)=>d+o[u]*f),n.travel+=f,c||h?(h&&(n.position=n.position.map((d,u)=>d-o[u]*.04)),{done:!0,target:c,head:l,wall:h}):n.life<=0||n.position[1]<-.1||Math.abs(n.position[0])>36||Math.abs(n.position[2])>36?{done:!0,target:null,head:!1,wall:!1,expired:!0}:{done:!1}}function pp(n,e,t,i,s=null){let r=[];for(let o of t){if(o.health<=0)continue;let a=[o.x,o.y+(o.height??1.7)*.65,o.z],c=a.map((g,_)=>g-n.position[_]),l=Math.hypot(...c);if(o.id!==s&&l>e.blastRadius)continue;let h=c.map(g=>g/(l||1));if(o.id!==s&&i.some(g=>Hs(n.position,h,g)<l-.08))continue;let f=o.id===s?e.damage:e.splashDamage*(1-.8*Ru(l/e.blastRadius,0,1));o.id===n.owner&&(f*=.45);let d=Ru(1-l/e.blastRadius,0,1),u=o.id===n.owner?[h[0]*11*d,Math.max(0,h[1])*8*d+5*d,h[2]*11*d]:null;r.push({target:o,damage:Math.round(f*10)/10,head:!1,distance:l,impulse:u})}return r}function mp(n,e,t){let i=Math.min(Math.max(0,n.mag-e),Math.max(0,t));return{ammo:e+i,reserve:t-i}}function gp(n,e,t=!1){if(t)return[Number.isFinite(e.movementX)?e.movementX:0,Number.isFinite(e.movementY)?e.movementY:0];let i=n.position;return n.position=[e.clientX,e.clientY],i?[e.clientX-i[0],e.clientY-i[1]]:[0,0]}function _p(n,e,t,i){if(!n.position)return[0,0];let s=(r,o)=>{let a=r/o*2-1;return Math.abs(a)>.65?Math.sign(a)*Math.min(1,(Math.abs(a)-.65)/.35):0};return[s(n.position[0],e)*1400*i,s(n.position[1],t)*700*i]}function xp(n,e,t,i=[],s=3.8){let r=[-Math.sin(e)*Math.cos(t),Math.sin(t),-Math.cos(e)*Math.cos(t)],o=[Math.cos(e),0,-Math.sin(e)],a=r.map((f,d)=>-f*s+o[d]*.65+(d===1?.35:0)),c=Math.hypot(...a),l=a.map(f=>f/c),h=c;for(let f of i)h=Math.min(h,Math.max(.12,Hs(n,l,f)-.18));return n.map((f,d)=>f+l[d]*h)}function yp(n,e,t=!1){return!n&&!t&&e<.32}var vp=[0,42,52];function Oo(n={}){let e=Number.isSafeInteger(n?.coins)?Math.max(0,n.coins):500,t=[...new Set([...vp,...Array.isArray(n?.owned)?n.owned:[]])].filter(i=>Number.isInteger(i)&&Ue[i]);return{coins:e,owned:t,rewards:Array.isArray(n?.rewards)?n.rewards.filter(i=>typeof i=="string").slice(-300):[]}}function Fo(n){let e=Ue[n];return e?vp.includes(n)?0:e.oneShot?2800:({ar:600,smg:450,sg:650,sr:1e3,lmg:850,hg:250,bow:800,launcher:1200,melee:300}[e.cat]||500)+n%7*50:1/0}function Mp(n,e){let t=Oo(n);if(!Number.isInteger(e)||!Ue[e])throw Error("\uC874\uC7AC\uD558\uC9C0 \uC54A\uB294 \uBB34\uAE30\uC785\uB2C8\uB2E4.");if(t.owned.includes(e))return t;let i=Fo(e);if(t.coins<i)throw Error(`\uCF54\uC778\uC774 ${i-t.coins} C \uBD80\uC871\uD569\uB2C8\uB2E4.`);return{...t,coins:t.coins-i,owned:t.owned.concat(e)}}function Sp(n,e,t){let i=Oo(n);if(i.rewards.includes(e))return{economy:i,amount:0};let s=Math.max(0,Math.floor(t));return{economy:{...i,coins:i.coins+s,rewards:i.rewards.concat(e).slice(-300)},amount:s}}var bp=n=>100+Math.min(100,Math.max(1,n))*25;var Rc=class{constructor(){this.context=null,this.musicBus=null,this.effectBus=null,this.timer=null,this.beat=0,this.volume=.6,this.music=.25}unlock(){if(!this.context){let e=globalThis.AudioContext||globalThis.webkitAudioContext;if(!e)return;this.context=new e,this.effectBus=this.context.createGain(),this.musicBus=this.context.createGain(),this.effectBus.connect(this.context.destination),this.musicBus.connect(this.context.destination),this.setLevels(this.volume*100,this.music*100),this.timer=setInterval(()=>this.tick(),160),this.tick()}this.context.state==="suspended"&&this.context.resume().catch(()=>{})}setLevels(e,t){this.volume=e/100,this.music=t/100,this.effectBus&&this.effectBus.gain.setTargetAtTime(this.volume,this.context.currentTime,.04),this.musicBus&&this.musicBus.gain.setTargetAtTime(this.music*.28,this.context.currentTime,.1)}tone(e,t,i,s,r="sine",o=0){let a=this.context;if(!a)return;let c=a.currentTime+o,l=a.createOscillator(),h=a.createGain();l.type=r,l.frequency.setValueAtTime(e,c),h.gain.setValueAtTime(1e-4,c),h.gain.exponentialRampToValueAtTime(Math.max(2e-4,i),c+.012),h.gain.exponentialRampToValueAtTime(1e-4,c+t),l.connect(h),h.connect(s),l.start(c),l.stop(c+t+.02),l.onended=()=>{l.disconnect(),h.disconnect()}}noise(e,t,i){let s=this.context;if(!s)return;let r=s.createBuffer(1,Math.ceil(s.sampleRate*e),s.sampleRate),o=r.getChannelData(0);for(let h=0;h<o.length;h++)o[h]=(Math.random()*2-1)*(1-h/o.length);let a=s.createBufferSource(),c=s.createGain(),l=s.createBiquadFilter();l.type="lowpass",l.frequency.value=i,a.buffer=r,c.gain.value=t,a.connect(l),l.connect(c),c.connect(this.effectBus),a.start(),a.onended=()=>{a.disconnect(),l.disconnect(),c.disconnect()}}play(e,t={}){if(!this.context||this.context.state!=="running")return;let i=this.effectBus;if(["step","run","land","slide"].includes(e)){let s=e==="run";this.noise(e==="slide"?.65:e==="land"?.19:.12,e==="slide"?.3:e==="land"?.28:s?.24:.16,e==="slide"?1800:s?1e3:750),this.tone(e==="slide"?140:s?115:95,.12,s?.14:.09,i);return}if(e==="shot"){this.noise(t.mechanic==="melee"?.16:.13,t.mechanic==="melee"?.16:.3,t.cat==="sr"?900:2500),this.tone(t.mechanic==="arrow"?520:t.mechanic==="melee"?350:t.mechanic==="rocket"?48:95,.16,.13,i,t.mechanic?"sine":"sawtooth");return}this.tone({hit:680,kill:920,jump:240,reload:380,hurt:130,select:540}[e]||440,.14,.08,i)}tick(){let e=this.context;if(!e||e.state!=="running")return;let t=this.beat++,i=[110,130.81,98,146.83],s=i[Math.floor(t/32)%4];t%4===0&&this.tone(s,.5,.2,this.musicBus,"triangle"),t%2===0&&this.tone(s*[2,3,2.5,4][Math.floor(t/2)%4],.22,.09,this.musicBus,"sine"),t%4===0&&this.tone(55,.12,.32,this.musicBus),t%8===4&&this.tone(180,.08,.06,this.musicBus,"triangle")}};var Zn=Object.create(null);Zn.open="0";Zn.close="1";Zn.ping="2";Zn.pong="3";Zn.message="4";Zn.upgrade="5";Zn.noop="6";var Bo=Object.create(null);Object.keys(Zn).forEach(n=>{Bo[Zn[n]]=n});var ko={type:"error",data:"parser error"};var Tp=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",Ap=typeof ArrayBuffer=="function",Rp=n=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(n):n&&n.buffer instanceof ArrayBuffer,zo=({type:n,data:e},t,i)=>Tp&&e instanceof Blob?t?i(e):Ep(e,i):Ap&&(e instanceof ArrayBuffer||Rp(e))?t?i(e):Ep(new Blob([e]),i):i(Zn[n]+(e||"")),Ep=(n,e)=>{let t=new FileReader;return t.onload=function(){let i=t.result.split(",")[1];e("b"+(i||""))},t.readAsDataURL(n)};function wp(n){return n instanceof Uint8Array?n:n instanceof ArrayBuffer?new Uint8Array(n):new Uint8Array(n.buffer,n.byteOffset,n.byteLength)}var Cu;function Cp(n,e){if(Tp&&n.data instanceof Blob)return n.data.arrayBuffer().then(wp).then(e);if(Ap&&(n.data instanceof ArrayBuffer||Rp(n.data)))return e(wp(n.data));zo(n,!1,t=>{Cu||(Cu=new TextEncoder),e(Cu.encode(t))})}var Ip="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Ho=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let n=0;n<Ip.length;n++)Ho[Ip.charCodeAt(n)]=n;var Pp=n=>{let e=n.length*.75,t=n.length,i,s=0,r,o,a,c;n[n.length-1]==="="&&(e--,n[n.length-2]==="="&&e--);let l=new ArrayBuffer(e),h=new Uint8Array(l);for(i=0;i<t;i+=4)r=Ho[n.charCodeAt(i)],o=Ho[n.charCodeAt(i+1)],a=Ho[n.charCodeAt(i+2)],c=Ho[n.charCodeAt(i+3)],h[s++]=r<<2|o>>4,h[s++]=(o&15)<<4|a>>2,h[s++]=(a&3)<<6|c&63;return l};var nM=typeof ArrayBuffer=="function",Vo=(n,e)=>{if(typeof n!="string")return{type:"message",data:Lp(n,e)};let t=n.charAt(0);return t==="b"?{type:"message",data:iM(n.substring(1),e)}:Bo[t]?n.length>1?{type:Bo[t],data:n.substring(1)}:{type:Bo[t]}:ko},iM=(n,e)=>{if(nM){let t=Pp(n);return Lp(t,e)}else return{base64:!0,data:n}},Lp=(n,e)=>{switch(e){case"blob":return n instanceof Blob?n:new Blob([n]);case"arraybuffer":default:return n instanceof ArrayBuffer?n:n.buffer}};var Dp="",Np=(n,e)=>{let t=n.length,i=new Array(t),s=0;n.forEach((r,o)=>{zo(r,!1,a=>{i[o]=a,++s===t&&e(i.join(Dp))})})},Up=(n,e)=>{let t=n.split(Dp),i=[];for(let s=0;s<t.length;s++){let r=Vo(t[s],e);if(i.push(r),r.type==="error")break}return i};function Op(){return new TransformStream({transform(n,e){Cp(n,t=>{let i=t.length,s;if(i<126)s=new Uint8Array(1),new DataView(s.buffer).setUint8(0,i);else if(i<65536){s=new Uint8Array(3);let r=new DataView(s.buffer);r.setUint8(0,126),r.setUint16(1,i)}else{s=new Uint8Array(9);let r=new DataView(s.buffer);r.setUint8(0,127),r.setBigUint64(1,BigInt(i))}n.data&&typeof n.data!="string"&&(s[0]|=128),e.enqueue(s),e.enqueue(t)})}})}var Iu;function Cc(n){return n.reduce((e,t)=>e+t.length,0)}function Ic(n,e){if(n[0].length===e)return n.shift();let t=new Uint8Array(e),i=0;for(let s=0;s<e;s++)t[s]=n[0][i++],i===n[0].length&&(n.shift(),i=0);return n.length&&i<n[0].length&&(n[0]=n[0].slice(i)),t}function Fp(n,e){Iu||(Iu=new TextDecoder);let t=[],i=0,s=-1,r=!1;return new TransformStream({transform(o,a){for(t.push(o);;){if(i===0){if(Cc(t)<1)break;let c=Ic(t,1);r=(c[0]&128)===128,s=c[0]&127,s<126?i=3:s===126?i=1:i=2}else if(i===1){if(Cc(t)<2)break;let c=Ic(t,2);s=new DataView(c.buffer,c.byteOffset,c.length).getUint16(0),i=3}else if(i===2){if(Cc(t)<8)break;let c=Ic(t,8),l=new DataView(c.buffer,c.byteOffset,c.length),h=l.getUint32(0);if(h>Math.pow(2,21)-1){a.enqueue(ko);break}s=h*Math.pow(2,32)+l.getUint32(4),i=3}else{if(Cc(t)<s)break;let c=Ic(t,s);a.enqueue(Vo(r?c:Iu.decode(c),e)),i=0}if(s===0||s>n){a.enqueue(ko);break}}}})}var Pu=4;function St(n){if(n)return sM(n)}function sM(n){for(var e in St.prototype)n[e]=St.prototype[e];return n}St.prototype.on=St.prototype.addEventListener=function(n,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+n]=this._callbacks["$"+n]||[]).push(e),this};St.prototype.once=function(n,e){function t(){this.off(n,t),e.apply(this,arguments)}return t.fn=e,this.on(n,t),this};St.prototype.off=St.prototype.removeListener=St.prototype.removeAllListeners=St.prototype.removeEventListener=function(n,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var t=this._callbacks["$"+n];if(!t)return this;if(arguments.length==1)return delete this._callbacks["$"+n],this;for(var i,s=0;s<t.length;s++)if(i=t[s],i===e||i.fn===e){t.splice(s,1);break}return t.length===0&&delete this._callbacks["$"+n],this};St.prototype.emit=function(n){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),t=this._callbacks["$"+n],i=1;i<arguments.length;i++)e[i-1]=arguments[i];if(t){t=t.slice(0);for(var i=0,s=t.length;i<s;++i)t[i].apply(this,e)}return this};St.prototype.emitReserved=St.prototype.emit;St.prototype.listeners=function(n){return this._callbacks=this._callbacks||{},this._callbacks["$"+n]||[]};St.prototype.hasListeners=function(n){return!!this.listeners(n).length};var Ti=typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,t)=>t(e,0),cn=typeof self<"u"?self:typeof window<"u"?window:Function("return this")(),Bp="arraybuffer";function Pc(n,...e){return e.reduce((t,i)=>(n.hasOwnProperty(i)&&(t[i]=n[i]),t),{})}var rM=cn.setTimeout,oM=cn.clearTimeout;function Ai(n,e){e.useNativeTimers?(n.setTimeoutFn=rM.bind(cn),n.clearTimeoutFn=oM.bind(cn)):(n.setTimeoutFn=cn.setTimeout.bind(cn),n.clearTimeoutFn=cn.clearTimeout.bind(cn))}var aM=1.33;function kp(n){return typeof n=="string"?cM(n):Math.ceil((n.byteLength||n.size)*aM)}function cM(n){let e=0,t=0;for(let i=0,s=n.length;i<s;i++)e=n.charCodeAt(i),e<128?t+=1:e<2048?t+=2:e<55296||e>=57344?t+=3:(i++,t+=4);return t}function Lc(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function zp(n){let e="";for(let t in n)n.hasOwnProperty(t)&&(e.length&&(e+="&"),e+=encodeURIComponent(t)+"="+encodeURIComponent(n[t]));return e}function Hp(n){let e={},t=n.split("&");for(let i=0,s=t.length;i<s;i++){let r=t[i].split("=");e[decodeURIComponent(r[0])]=decodeURIComponent(r[1])}return e}var Dc=class extends Error{constructor(e,t,i){super(e),this.description=t,this.context=i,this.type="TransportError"}},Ri=class extends St{constructor(e){super(),this.writable=!1,Ai(this,e),this.opts=e,this.query=e.query,this.socket=e.socket,this.supportsBinary=!e.forceBase64}onError(e,t,i){return super.emitReserved("error",new Dc(e,t,i)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){let t=Vo(e,this.socket.binaryType);this.onPacket(t)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,t={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(t)}_hostname(){let e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){let t=zp(e);return t.length?"?"+t:""}};var Go=class extends Ri{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(e){this.readyState="pausing";let t=()=>{this.readyState="paused",e()};if(this._polling||!this.writable){let i=0;this._polling&&(i++,this.once("pollComplete",function(){--i||t()})),this.writable||(i++,this.once("drain",function(){--i||t()}))}else t()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){let t=i=>{if(this.readyState==="opening"&&i.type==="open"&&this.onOpen(),i.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(i)};Up(e,this.socket.binaryType).forEach(t),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){let e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,Np(e,t=>{this.doWrite(t,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){let e=this.opts.secure?"https":"http",t=this.query||{};return this.opts.timestampRequests!==!1&&(t[this.opts.timestampParam]=Lc()),!this.supportsBinary&&!t.sid&&(t.b64=1),this.createUri(e,t)}};var Vp=!1;try{Vp=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}var Gp=Vp;function lM(){}var Lu=class extends Go{constructor(e){if(super(e),typeof location<"u"){let t=location.protocol==="https:",i=location.port;i||(i=t?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||i!==e.port}}doWrite(e,t){let i=this.request({method:"POST",data:e});i.on("success",t),i.on("error",(s,r)=>{this.onError("xhr post error",s,r)})}doPoll(){let e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(t,i)=>{this.onError("xhr poll error",t,i)}),this.pollXhr=e}},ns=class n extends St{constructor(e,t,i){super(),this.createRequest=e,Ai(this,i),this._opts=i,this._method=i.method||"GET",this._uri=t,this._data=i.data!==void 0?i.data:null,this._create()}_create(){var e;let t=Pc(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");t.xdomain=!!this._opts.xd;let i=this._xhr=this.createRequest(t);try{i.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){i.setDisableHeaderCheck&&i.setDisableHeaderCheck(!0);for(let s in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(s)&&i.setRequestHeader(s,this._opts.extraHeaders[s])}}catch{}if(this._method==="POST")try{i.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{i.setRequestHeader("Accept","*/*")}catch{}(e=this._opts.cookieJar)===null||e===void 0||e.addCookies(i),"withCredentials"in i&&(i.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(i.timeout=this._opts.requestTimeout),i.onreadystatechange=()=>{var s;i.readyState===3&&((s=this._opts.cookieJar)===null||s===void 0||s.parseCookies(i.getResponseHeader("set-cookie"))),i.readyState===4&&(i.status===200||i.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof i.status=="number"?i.status:0)},0))},i.send(this._data)}catch(s){this.setTimeoutFn(()=>{this._onError(s)},0);return}typeof document<"u"&&(this._index=n.requestsCount++,n.requests[this._index]=this)}_onError(e){this.emitReserved("error",e,this._xhr),this._cleanup(!0)}_cleanup(e){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=lM,e)try{this._xhr.abort()}catch{}typeof document<"u"&&delete n.requests[this._index],this._xhr=null}}_onLoad(){let e=this._xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}};ns.requestsCount=0;ns.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",Wp);else if(typeof addEventListener=="function"){let n="onpagehide"in cn?"pagehide":"unload";addEventListener(n,Wp,!1)}}function Wp(){for(let n in ns.requests)ns.requests.hasOwnProperty(n)&&ns.requests[n].abort()}var hM=(function(){let n=Xp({xdomain:!1});return n&&n.responseType!==null})(),is=class extends Lu{constructor(e){super(e);let t=e&&e.forceBase64;this.supportsBinary=hM&&!t}request(e={}){return Object.assign(e,{xd:this.xd},this.opts),new ns(Xp,this.uri(),e)}};function Xp(n){let e=n.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||Gp))return new XMLHttpRequest}catch{}if(!e)try{return new cn[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}var qp=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative",Nu=class extends Ri{get name(){return"websocket"}doOpen(){let e=this.uri(),t=this.opts.protocols,i=qp?{}:Pc(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(i.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(e,t,i)}catch(s){return this.emitReserved("error",s)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let t=0;t<e.length;t++){let i=e[t],s=t===e.length-1;zo(i,this.supportsBinary,r=>{try{this.doWrite(i,r)}catch{}s&&Ti(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){let e=this.opts.secure?"wss":"ws",t=this.query||{};return this.opts.timestampRequests&&(t[this.opts.timestampParam]=Lc()),this.supportsBinary||(t.b64=1),this.createUri(e,t)}},Du=cn.WebSocket||cn.MozWebSocket,ss=class extends Nu{createSocket(e,t,i){return qp?new Du(e,t,i):t?new Du(e,t):new Du(e)}doWrite(e,t){this.ws.send(t)}};var kr=class extends Ri{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(e){return this.emitReserved("error",e)}this._transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(e=>{let t=Fp(Number.MAX_SAFE_INTEGER,this.socket.binaryType),i=e.readable.pipeThrough(t).getReader(),s=Op();s.readable.pipeTo(e.writable),this._writer=s.writable.getWriter();let r=()=>{i.read().then(({done:a,value:c})=>{a||(this.onPacket(c),r())}).catch(a=>{})};r();let o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this._writer.write(o).then(()=>this.onOpen())})})}write(e){this.writable=!1;for(let t=0;t<e.length;t++){let i=e[t],s=t===e.length-1;this._writer.write(i).then(()=>{s&&Ti(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this._transport)===null||e===void 0||e.close()}};var Uu={websocket:ss,webtransport:kr,polling:is};var uM=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,dM=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function zr(n){if(n.length>8e3)throw"URI too long";let e=n,t=n.indexOf("["),i=n.indexOf("]");t!=-1&&i!=-1&&(n=n.substring(0,t)+n.substring(t,i).replace(/:/g,";")+n.substring(i,n.length));let s=uM.exec(n||""),r={},o=14;for(;o--;)r[dM[o]]=s[o]||"";return t!=-1&&i!=-1&&(r.source=e,r.host=r.host.substring(1,r.host.length-1).replace(/;/g,":"),r.authority=r.authority.replace("[","").replace("]","").replace(/;/g,":"),r.ipv6uri=!0),r.pathNames=fM(r,r.path),r.queryKey=pM(r,r.query),r}function fM(n,e){let t=/\/{2,9}/g,i=e.replace(t,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&i.splice(0,1),e.slice(-1)=="/"&&i.splice(i.length-1,1),i}function pM(n,e){let t={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(i,s,r){s&&(t[s]=r)}),t}var Ou=typeof addEventListener=="function"&&typeof removeEventListener=="function",Nc=[];Ou&&addEventListener("offline",()=>{Nc.forEach(n=>n())},!1);var Gs=class n extends St{constructor(e,t={}){var i,s;if(super(),this.binaryType=Bp,this.writeBuffer=[],this._prevBufferLen=0,this._upgrades=[],this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,e&&typeof e=="object"&&(t=e,e=null),e){let r=zr(e);t.hostname=r.host,t.secure=r.protocol==="https"||r.protocol==="wss",t.port=r.port,r.query&&(t.query=r.query)}else t.host&&(t.hostname=zr(t.host).host);if(Ai(this,t),this.secure=t.secure!=null?t.secure:typeof location<"u"&&location.protocol==="https:",t.hostname&&!t.port&&(t.port=this.secure?"443":"80"),this.hostname=t.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=t.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),t.transportImplementations&&t.transports)throw new Error("specifying both 'transportImplementations' and 'transports' options is not supported");t.transportImplementations||!((i=t.transports)===null||i===void 0)&&i.length&&typeof t.transports[0]=="function"?(this.transports=[],this._transportsByName=Object.create(null),((s=t.transportImplementations)!==null&&s!==void 0?s:t.transports).forEach(r=>{let o=r.prototype.name;this.transports.push(o),this._transportsByName[o]=r})):(this.transports=t.transports?[...t.transports]:["polling","websocket","webtransport"],this._transportsByName=Uu),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},t),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=Hp(this.opts.query)),Ou&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},Nc.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(e){let t=Object.assign({},this.opts.query);t.EIO=Pu,t.transport=e,this.id&&(t.sid=this.id);let i=Object.assign({},this.opts,{query:t,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new this._transportsByName[e](i)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}let e=this.opts.rememberUpgrade&&n.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";let t=this.createTransport(e);t.open(),this.setTransport(t)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",t=>this._onClose("transport close",t))}_probe(e){let t=this.createTransport(e),i=!1;n.priorWebsocketSuccess=!1;let s=()=>{i||(t.send([{type:"ping",data:"probe"}]),t.once("packet",f=>{if(!i)if(f.type==="pong"&&f.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",t),!t)return;n.priorWebsocketSuccess=t.name==="websocket",this.transport.pause(()=>{i||this.readyState!=="closed"&&(h(),this.setTransport(t),t.send([{type:"upgrade"}]),this.emitReserved("upgrade",t),t=null,this.upgrading=!1,this.flush())})}else{let d=new Error("probe error");d.transport=t.name,this.emitReserved("upgradeError",d)}}))};function r(){i||(i=!0,h(),t.close(),t=null)}let o=f=>{let d=new Error("probe error: "+f);d.transport=t.name,r(),this.emitReserved("upgradeError",d)};function a(){o("transport closed")}function c(){o("socket closed")}function l(f){t&&f.name!==t.name&&r()}let h=()=>{t.removeListener("open",s),t.removeListener("error",o),t.removeListener("close",a),this.off("close",c),this.off("upgrading",l)};t.once("open",s),t.once("error",o),t.once("close",a),this.once("close",c),this.once("upgrading",l),this._upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{i||t.open()},200):t.open()}onOpen(){if(this.readyState="open",n.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush(),this.readyState==="open"&&this.opts.upgrade)for(let e=0;e<this._upgrades.length;e++)this._probe(this._upgrades[e])}_onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":let t=new Error("server error");t.code=e.data,this._onError(t);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this._upgrades=this._filterUpgrades(e.upgrades),this._pingInterval=e.pingInterval,this._pingTimeout=e.pingTimeout,this._maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);let e=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+e,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},e),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){let e=this._getWritablePackets();this.transport.send(e),this._prevBufferLen=e.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let t=1;for(let i=0;i<this.writeBuffer.length;i++){let s=this.writeBuffer[i].data;if(s&&(t+=kp(s)),i>0&&t>this._maxPayload)return this.writeBuffer.slice(0,i);t+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;let e=Date.now()>this._pingTimeoutTime;return e&&(this._pingTimeoutTime=0,Ti(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),e}write(e,t,i){return this._sendPacket("message",e,t,i),this}send(e,t,i){return this._sendPacket("message",e,t,i),this}_sendPacket(e,t,i,s){if(typeof t=="function"&&(s=t,t=void 0),typeof i=="function"&&(s=i,i=null),this.readyState==="closing"||this.readyState==="closed")return;i=i||{},i.compress=i.compress!==!1;let r={type:e,data:t,options:i};this.emitReserved("packetCreate",r),this.writeBuffer.push(r),s&&this.once("flush",s),this.flush()}close(){let e=()=>{this._onClose("forced close"),this.transport.close()},t=()=>{this.off("upgrade",t),this.off("upgradeError",t),e()},i=()=>{this.once("upgrade",t),this.once("upgradeError",t)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?i():e()}):this.upgrading?i():e()),this}_onError(e){if(n.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",e),this._onClose("transport error",e)}_onClose(e,t){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),Ou&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){let i=Nc.indexOf(this._offlineEventListener);i!==-1&&Nc.splice(i,1)}this.readyState="closed",this.id=null,this.emitReserved("close",e,t),this.writeBuffer=[],this._prevBufferLen=0}}_filterUpgrades(e){let t=[];for(let i=0;i<e.length;i++)~this.transports.indexOf(e[i])&&t.push(e[i]);return t}};Gs.protocol=Pu;var PS=Gs.protocol;function Yp(n,e="",t){let i=n;t=t||typeof location<"u"&&location,n==null&&(n=t.protocol+"//"+t.host),typeof n=="string"&&(n.charAt(0)==="/"&&(n.charAt(1)==="/"?n=t.protocol+n:n=t.host+n),/^(https?|wss?):\/\//.test(n)||(typeof t<"u"?n=t.protocol+"//"+n:n="https://"+n),i=zr(n)),i.port||(/^(http|ws)$/.test(i.protocol)?i.port="80":/^(http|ws)s$/.test(i.protocol)&&(i.port="443")),i.path=i.path||"/";let r=i.host.indexOf(":")!==-1?"["+i.host+"]":i.host;return i.id=i.protocol+"://"+r+":"+i.port+e,i.href=i.protocol+"://"+r+(t&&t.port===i.port?"":":"+i.port),i}var Hu={};Gm(Hu,{Decoder:()=>ku,Encoder:()=>Bu,PacketType:()=>Ge,isPacketValid:()=>bM,protocol:()=>jp});var gM=typeof ArrayBuffer=="function",_M=n=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(n):n.buffer instanceof ArrayBuffer,$p=Object.prototype.toString,xM=typeof Blob=="function"||typeof Blob<"u"&&$p.call(Blob)==="[object BlobConstructor]",yM=typeof File=="function"||typeof File<"u"&&$p.call(File)==="[object FileConstructor]";function Xo(n){return gM&&(n instanceof ArrayBuffer||_M(n))||xM&&n instanceof Blob||yM&&n instanceof File}function Wo(n,e){if(!n||typeof n!="object")return!1;if(Array.isArray(n)){for(let t=0,i=n.length;t<i;t++)if(Wo(n[t]))return!0;return!1}if(Xo(n))return!0;if(n.toJSON&&typeof n.toJSON=="function"&&arguments.length===1)return Wo(n.toJSON(),!0);for(let t in n)if(Object.prototype.hasOwnProperty.call(n,t)&&Wo(n[t]))return!0;return!1}function Zp(n){let e=[],t=n.data,i=n;return i.data=Uc(t,e),i.attachments=e.length,{packet:i,buffers:e}}function Uc(n,e,t){if(!n)return n;if(Xo(n)){let i={_placeholder:!0,num:e.length};return e.push(n),i}else if(Array.isArray(n)){let i=new Array(n.length);for(let s=0;s<n.length;s++)i[s]=Uc(n[s],e);return i}else if(typeof n=="object"&&!(n instanceof Date)){if(n.toJSON&&typeof n.toJSON=="function"&&!t)return Uc(n.toJSON(),e,!0);let i={};for(let s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=Uc(n[s],e));return i}return n}function Jp(n,e){return n.data=Fu(n.data,e),delete n.attachments,n}function Fu(n,e){if(!n)return n;if(n&&n._placeholder===!0){if(typeof n.num=="number"&&n.num>=0&&n.num<e.length)return e[n.num];throw new Error("illegal attachments")}else if(Array.isArray(n))for(let t=0;t<n.length;t++)n[t]=Fu(n[t],e);else if(typeof n=="object")for(let t in n)Object.prototype.hasOwnProperty.call(n,t)&&(n[t]=Fu(n[t],e));return n}var Kp=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],jp=5,Ge;(function(n){n[n.CONNECT=0]="CONNECT",n[n.DISCONNECT=1]="DISCONNECT",n[n.EVENT=2]="EVENT",n[n.ACK=3]="ACK",n[n.CONNECT_ERROR=4]="CONNECT_ERROR",n[n.BINARY_EVENT=5]="BINARY_EVENT",n[n.BINARY_ACK=6]="BINARY_ACK"})(Ge||(Ge={}));var Bu=class{constructor(e){this.replacer=e}encode(e){return(e.type===Ge.EVENT||e.type===Ge.ACK)&&Wo(e)?this.encodeAsBinary({type:e.type===Ge.EVENT?Ge.BINARY_EVENT:Ge.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let t=""+e.type;return(e.type===Ge.BINARY_EVENT||e.type===Ge.BINARY_ACK)&&(t+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(t+=e.nsp+","),e.id!=null&&(t+=e.id),e.data!=null&&(t+=JSON.stringify(e.data,this.replacer)),t}encodeAsBinary(e){let t=Zp(e),i=this.encodeAsString(t.packet),s=t.buffers;return s.unshift(i),s}},ku=class n extends St{constructor(e){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof e=="function"?{reviver:e}:e)}add(e){let t;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");t=this.decodeString(e);let i=t.type===Ge.BINARY_EVENT;i||t.type===Ge.BINARY_ACK?(t.type=i?Ge.EVENT:Ge.ACK,this.reconstructor=new zu(t)):super.emitReserved("decoded",t)}else if(Xo(e)||e.base64)if(this.reconstructor)t=this.reconstructor.takeBinaryData(e),t&&(this.reconstructor=null,super.emitReserved("decoded",t));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let t=0,i={type:Number(e.charAt(0))};if(Ge[i.type]===void 0)throw new Error("unknown packet type "+i.type);if(i.type===Ge.BINARY_EVENT||i.type===Ge.BINARY_ACK){let r=t+1;for(;e.charAt(++t)!=="-"&&t!=e.length;);let o=e.substring(r,t);if(o!=Number(o)||e.charAt(t)!=="-")throw new Error("Illegal attachments");let a=Number(o);if(!Qp(a)||a<1)throw new Error("Illegal attachments");if(a>this.opts.maxAttachments)throw new Error("too many attachments");i.attachments=a}if(e.charAt(t+1)==="/"){let r=t+1;for(;++t&&!(e.charAt(t)===","||t===e.length););i.nsp=e.substring(r,t)}else i.nsp="/";let s=e.charAt(t+1);if(s!==""&&Number(s)==s){let r=t+1;for(;++t;){let o=e.charAt(t);if(o==null||Number(o)!=o){--t;break}if(t===e.length)break}i.id=Number(e.substring(r,t+1))}if(e.charAt(++t)){let r=this.tryParse(e.substr(t));if(n.isPayloadValid(i.type,r))i.data=r;else throw new Error("invalid payload")}return i}tryParse(e){try{return JSON.parse(e,this.opts.reviver)}catch{return!1}}static isPayloadValid(e,t){switch(e){case Ge.CONNECT:return Oc(t);case Ge.DISCONNECT:return t===void 0;case Ge.CONNECT_ERROR:return typeof t=="string"||Oc(t);case Ge.EVENT:case Ge.BINARY_EVENT:return Array.isArray(t)&&(typeof t[0]=="number"||typeof t[0]=="string"&&Kp.indexOf(t[0])===-1);case Ge.ACK:case Ge.BINARY_ACK:return Array.isArray(t)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}},zu=class{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){let t=Jp(this.reconPack,this.buffers);return this.finishedReconstruction(),t}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}};function vM(n){return typeof n=="string"}var Qp=Number.isInteger||function(n){return typeof n=="number"&&isFinite(n)&&Math.floor(n)===n};function MM(n){return n===void 0||Qp(n)}function Oc(n){return Object.prototype.toString.call(n)==="[object Object]"}function SM(n,e){switch(n){case Ge.CONNECT:return e===void 0||Oc(e);case Ge.DISCONNECT:return e===void 0;case Ge.EVENT:return Array.isArray(e)&&(typeof e[0]=="number"||typeof e[0]=="string"&&Kp.indexOf(e[0])===-1);case Ge.ACK:return Array.isArray(e);case Ge.CONNECT_ERROR:return typeof e=="string"||Oc(e);default:return!1}}function bM(n){return vM(n.nsp)&&MM(n.id)&&SM(n.type,n.data)}function Sn(n,e,t){return n.on(e,t),function(){n.off(e,t)}}var EM=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1}),Hr=class extends St{constructor(e,t,i){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=t,i&&i.auth&&(this.auth=i.auth),this._opts=Object.assign({},i),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;let e=this.io;this.subs=[Sn(e,"open",this.onopen.bind(this)),Sn(e,"packet",this.onpacket.bind(this)),Sn(e,"error",this.onerror.bind(this)),Sn(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...t){var i,s,r;if(EM.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(t.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(t),this;let o={type:Ge.EVENT,data:t};if(o.options={},o.options.compress=this.flags.compress!==!1,typeof t[t.length-1]=="function"){let h=this.ids++,f=t.pop();this._registerAckCallback(h,f),o.id=h}let a=(s=(i=this.io.engine)===null||i===void 0?void 0:i.transport)===null||s===void 0?void 0:s.writable,c=this.connected&&!(!((r=this.io.engine)===null||r===void 0)&&r._hasPingExpired());return this.flags.volatile&&!a||(c?(this.notifyOutgoingListeners(o),this.packet(o)):this.sendBuffer.push(o)),this.flags={},this}_registerAckCallback(e,t){var i;let s=(i=this.flags.timeout)!==null&&i!==void 0?i:this._opts.ackTimeout;if(s===void 0){this.acks[e]=t;return}let r=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let a=0;a<this.sendBuffer.length;a++)this.sendBuffer[a].id===e&&this.sendBuffer.splice(a,1);t.call(this,new Error("operation has timed out"))},s),o=(...a)=>{this.io.clearTimeoutFn(r),t.apply(this,a)};o.withError=!0,this.acks[e]=o}emitWithAck(e,...t){return new Promise((i,s)=>{let r=(o,a)=>o?s(o):i(a);r.withError=!0,t.push(r),this.emit(e,...t)})}_addToQueue(e){let t;typeof e[e.length-1]=="function"&&(t=e.pop());let i={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((s,...r)=>i!==this._queue[0]?void 0:(s!==null?i.tryCount>this._opts.retries&&(this._queue.shift(),t&&t(s)):(this._queue.shift(),t&&t(null,...r)),i.pending=!1,this._drainQueue())),this._queue.push(i),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;let t=this._queue[0];t.pending&&!e||(t.pending=!0,t.tryCount++,this.flags=t.flags,this.emit.apply(this,t.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:Ge.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,t){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,t),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(e=>{if(!this.sendBuffer.some(i=>String(i.id)===e)){let i=this.acks[e];delete this.acks[e],i.withError&&i.call(this,new Error("socket has been disconnected"))}})}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case Ge.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case Ge.EVENT:case Ge.BINARY_EVENT:this.onevent(e);break;case Ge.ACK:case Ge.BINARY_ACK:this.onack(e);break;case Ge.DISCONNECT:this.ondisconnect();break;case Ge.CONNECT_ERROR:this.destroy();let i=new Error(e.data.message);i.data=e.data.data,this.emitReserved("connect_error",i);break}}onevent(e){let t=e.data||[];e.id!=null&&t.push(this.ack(e.id)),this.connected?this.emitEvent(t):this.receiveBuffer.push(Object.freeze(t))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){let t=this._anyListeners.slice();for(let i of t)i.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){let t=this,i=!1;return function(...s){i||(i=!0,t.packet({type:Ge.ACK,id:e,data:s}))}}onack(e){let t=this.acks[e.id];typeof t=="function"&&(delete this.acks[e.id],t.withError&&e.data.unshift(null),t.apply(this,e.data))}onconnect(e,t){this.id=e,this.recovered=t&&this._pid===t,this._pid=t,this.connected=!0,this.emitBuffered(),this.emitReserved("connect"),this._drainQueue(!0)}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:Ge.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){let t=this._anyListeners;for(let i=0;i<t.length;i++)if(e===t[i])return t.splice(i,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){let t=this._anyOutgoingListeners;for(let i=0;i<t.length;i++)if(e===t[i])return t.splice(i,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){let t=this._anyOutgoingListeners.slice();for(let i of t)i.apply(this,e.data)}}};function Ws(n){n=n||{},this.ms=n.min||100,this.max=n.max||1e4,this.factor=n.factor||2,this.jitter=n.jitter>0&&n.jitter<=1?n.jitter:0,this.attempts=0}Ws.prototype.duration=function(){var n=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),t=Math.floor(e*this.jitter*n);n=(Math.floor(e*10)&1)==0?n-t:n+t}return Math.min(n,this.max)|0};Ws.prototype.reset=function(){this.attempts=0};Ws.prototype.setMin=function(n){this.ms=n};Ws.prototype.setMax=function(n){this.max=n};Ws.prototype.setJitter=function(n){this.jitter=n};var Vr=class extends St{constructor(e,t){var i;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(t=e,e=void 0),t=t||{},t.path=t.path||"/socket.io",this.opts=t,Ai(this,t),this.reconnection(t.reconnection!==!1),this.reconnectionAttempts(t.reconnectionAttempts||1/0),this.reconnectionDelay(t.reconnectionDelay||1e3),this.reconnectionDelayMax(t.reconnectionDelayMax||5e3),this.randomizationFactor((i=t.randomizationFactor)!==null&&i!==void 0?i:.5),this.backoff=new Ws({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(t.timeout==null?2e4:t.timeout),this._readyState="closed",this.uri=e;let s=t.parser||Hu;this.encoder=new s.Encoder,this.decoder=new s.Decoder,this._autoConnect=t.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,e||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var t;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(t=this.backoff)===null||t===void 0||t.setMin(e),this)}randomizationFactor(e){var t;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(t=this.backoff)===null||t===void 0||t.setJitter(e),this)}reconnectionDelayMax(e){var t;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(t=this.backoff)===null||t===void 0||t.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new Gs(this.uri,this.opts);let t=this.engine,i=this;this._readyState="opening",this.skipReconnect=!1;let s=Sn(t,"open",function(){i.onopen(),e&&e()}),r=a=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",a),e?e(a):this.maybeReconnectOnOpen()},o=Sn(t,"error",r);if(this._timeout!==!1){let a=this._timeout,c=this.setTimeoutFn(()=>{s(),r(new Error("timeout")),t.close()},a);this.opts.autoUnref&&c.unref(),this.subs.push(()=>{this.clearTimeoutFn(c)})}return this.subs.push(s),this.subs.push(o),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");let e=this.engine;this.subs.push(Sn(e,"ping",this.onping.bind(this)),Sn(e,"data",this.ondata.bind(this)),Sn(e,"error",this.onerror.bind(this)),Sn(e,"close",this.onclose.bind(this)),Sn(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(t){this.onclose("parse error",t)}}ondecoded(e){Ti(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,t){let i=this.nsps[e];return i?this._autoConnect&&!i.active&&i.connect():(i=new Hr(this,e,t),this.nsps[e]=i),i}_destroy(e){let t=Object.keys(this.nsps);for(let i of t)if(this.nsps[i].active)return;this._close()}_packet(e){let t=this.encoder.encode(e);for(let i=0;i<t.length;i++)this.engine.write(t[i],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(e,t){var i;this.cleanup(),(i=this.engine)===null||i===void 0||i.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,t),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;let e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{let t=this.backoff.duration();this._reconnecting=!0;let i=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(s=>{s?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",s)):e.onreconnect()}))},t);this.opts.autoUnref&&i.unref(),this.subs.push(()=>{this.clearTimeoutFn(i)})}}onreconnect(){let e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}};var qo={};function Yo(n,e){typeof n=="object"&&(e=n,n=void 0),e=e||{};let t=Yp(n,e.path||"/socket.io"),i=t.source,s=t.id,r=t.path,o=qo[s]&&r in qo[s].nsps,a=e.forceNew||e["force new connection"]||e.multiplex===!1||o,c;return a?c=new Vr(i,e):(qo[s]||(qo[s]=new Vr(i,e)),c=qo[s]),t.query&&!e.query&&(e.query=t.queryKey),c.socket(t.path,e)}Object.assign(Yo,{Manager:Vr,Socket:Hr,io:Yo,connect:Yo});var K=n=>document.getElementById(n),Zo=(n,e="")=>{try{return JSON.parse(localStorage.getItem("vector."+n))??e}catch{return e}},Yr=(n,e)=>{try{localStorage.setItem("vector."+n,JSON.stringify(e))}catch{}},wM=n=>`${String(Math.floor(n/6e4)).padStart(2,"0")}:${String(Math.floor(n/1e3)%60).padStart(2,"0")}`,Bc=window.VECTOR_CONFIG||{},tm=Zo("serverUrl"),nm=(Bc.previousServerUrls||[]).includes(tm),Pt=!nm&&tm||Bc.serverUrl||(/^https?:$/.test(location.protocol)?location.origin:"");nm&&Yr("serverUrl",Pt);var en="",Dn="",_t=null,Fc="login",Nt={},oi=!1,Wr=null,Xr=0,Xs={level:1,xp:0,rating:1e3,games:0,xpInLevel:0,xpToNext:100,nextLevelXp:100},Ci=Oo(Zo("economy",{})),Vu=null;function Ii(n){Ci=Oo(n),Yr("economy",Ci),Nt.onEconomy?.(Ci)}var Jn="public",rs=1,$o=null,kc=()=>`vector.session.${Pt}`;function im(){try{en=sessionStorage.getItem(kc())||""}catch{en=""}if(Dn=Zo("guestToken:"+Pt),Pt===Bc.serverUrl)for(let n of Bc.previousServerUrls||[]){if(!en)try{en=sessionStorage.getItem("vector.session."+n)||"",en&&sessionStorage.setItem(kc(),en)}catch{}Dn||(Dn=Zo("guestToken:"+n),Dn&&Yr("guestToken:"+Pt,Dn))}}im();function Wu(){try{en?sessionStorage.setItem(kc(),en):sessionStorage.removeItem(kc())}catch{}}function TM(n){let e;try{e=new URL(n)}catch{throw new Error("\uC62C\uBC14\uB978 \uC11C\uBC84 \uC8FC\uC18C\uB97C \uC785\uB825\uD558\uC138\uC694. \uC608: http://localhost:4317")}if(!["http:","https:"].includes(e.protocol)||e.username||e.password)throw new Error("HTTP \uB610\uB294 HTTPS \uC11C\uBC84 \uC8FC\uC18C\uB97C \uC785\uB825\uD558\uC138\uC694.");if(location.protocol==="https:"&&e.protocol==="http:"&&!["localhost","127.0.0.1","[::1]"].includes(e.hostname))throw new Error("\uC774 \uD398\uC774\uC9C0\uC5D0\uC11C\uB294 HTTPS \uC11C\uBC84 \uC8FC\uC18C\uAC00 \uD544\uC694\uD569\uB2C8\uB2E4.");return e.origin}function Gu(n){let e=TM(n);e!==Pt&&(te.leave(),Pt=e,Xr++,Wr=null,en="",Dn="",_t=null,oi=!1,im(),qs(),qr({level:1,xp:0,rating:1e3,games:0,xpInLevel:0,xpToNext:100,nextLevelXp:100}),Nt.onAccount?.(null)),Yr("serverUrl",Pt),K("serverUrlInput").value=Pt,K("authServerUrl").value=Pt}async function Pi(n,e,t){if(!Pt)throw new Error("\uBA3C\uC800 Node.js \uC11C\uBC84 \uC8FC\uC18C\uB97C \uC5F0\uACB0\uD558\uC138\uC694. HTML \uC5F0\uC2B5\uC7A5\uC740 \uC11C\uBC84 \uC5C6\uC774 \uC774\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.");let i=new AbortController,s=setTimeout(()=>i.abort(),7e3);try{let r=await fetch(Pt+e,{method:n,headers:{...t?{"Content-Type":"application/json"}:{},...en?{Authorization:"Bearer "+en}:{},...Dn?{"X-Guest-Token":Dn}:{}},body:t?JSON.stringify(t):void 0,signal:i.signal,cache:"no-store"}),o;try{o=await r.json()}catch{throw new Error("\uD604\uC7AC \uC8FC\uC18C\uC5D0\uC11C VECTOR \uC628\uB77C\uC778 API\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.")}if(!r.ok){let a=new Error(o.error||"\uC694\uCCAD\uC744 \uC644\uB8CC\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.");throw a.status=r.status,a}return o}catch(r){throw r.name==="AbortError"||r instanceof TypeError?new Error("\uC11C\uBC84\uC5D0 \uC5F0\uACB0\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uC2E4\uD589 \uC0C1\uD0DC\uC640 \uC8FC\uC18C\uB97C \uD655\uC778\uD558\uC138\uC694."):r}finally{clearTimeout(s)}}function qs(){K("accountName").textContent=_t?.username||"GUEST",K("accountOpen").innerHTML=_t?"\uB0B4 \uACC4\uC815 \u2713":"\uB85C\uADF8\uC778 <span>\uC120\uD0DD</span>",K("onlineName").value=_t?.username||Zo("nickname","GUEST-"+Math.floor(Math.random()*900+100)),K("onlineName").readOnly=!!_t,K("authTabs").hidden=!!_t,K("authForm").hidden=!!_t,K("logoutBtn").hidden=!_t,K("authTitle").textContent=_t?`${_t.username} \uB2D8, \uC811\uC18D \uC911`:"\uAC8C\uC2A4\uD2B8\uB85C\uB3C4 \uC790\uC720\uB86D\uAC8C.",K("authDescription").textContent=_t?"\uC774 \uACC4\uC815\uC758 \uB808\uBCA8\xB7\uC2E4\uB825 \uC810\uC218\xB7\uC804\uD22C \uAE30\uB85D\uC740 \uC5F0\uACB0\uB41C \uC11C\uBC84\uC5D0 \uC800\uC7A5\uB429\uB2C8\uB2E4.":"\uB85C\uADF8\uC778 \uC5C6\uC774 \uBAA8\uB4E0 \uB9F5\uACFC \uB9E4\uCE6D\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uAC8C\uC2A4\uD2B8\uC640 \uACC4\uC815\uC758 \uB808\uBCA8\uC740 \uB530\uB85C \uBCF4\uAD00\uB429\uB2C8\uB2E4."}function qr(n){Xs={...Xs,...n},_t&&(_t.progress=Xs);let e=Xs,t=Math.max(0,e.nextLevelXp-e.xp),i=Math.min(100,e.xpInLevel/Math.max(1,e.xpToNext)*100);K("profileLevel").textContent=String(e.level).padStart(2,"0"),K("matchLevel").textContent=e.level,K("matchLevelLabel").textContent="Lv. "+e.level,K("matchRating").textContent=`\uC2E4\uB825 \uC810\uC218 ${e.rating} \xB7 ${e.games}\uACBD\uAE30`,K("matchXpBar").style.width=i+"%",K("matchXpLabel").textContent=`\uB2E4\uC74C \uB808\uBCA8\uAE4C\uC9C0 ${t} XP`,K("careerLevel").textContent="Lv. "+e.level,K("careerRating").textContent="\uC2E4\uB825 \uC810\uC218 "+e.rating,K("careerXpBar").style.width=i+"%",K("careerXpLabel").textContent=`${e.xpInLevel} / ${e.xpToNext} XP`,Nt.onProfile?.(Xs)}async function Xu(){if(en)try{let e=await Pi("GET","/api/me"),t=_t?.username!==e.user.username;_t=e.user,qs(),qr(_t.progress),Ii(_t.economy),t&&Nt.onAccount?.(_t);return}catch(e){if(e.status!==401)throw e;en="",Wu(),_t=null,qs(),Nt.onAccount?.(null)}let n=await Pi("POST","/api/guest",{guestToken:Dn});Dn=n.guestToken,Yr("guestToken:"+Pt,Dn),qr(n.profile),Ii(n.economy),Nt.onGuestRecords?.(n.records||[])}function Gr(){if(Wr)return Wr;let n=Xr;return Wr=(async()=>{K("onlineServerStatus").textContent="\uC11C\uBC84 \uC5F0\uACB0 \uD655\uC778 \uC911\u2026";try{let e=await Pi("GET","/api/health");if(n!==Xr)return!1;if(!e.online||!e.matchmaking||!e.socketIo||!e.inventorySync||!e.finiteAmmo||!e.economy||e.version<3)throw new Error("\uB9E4\uCE6D\uC744 \uC9C0\uC6D0\uD558\uB294 \uCD5C\uC2E0 Node.js \uC11C\uBC84\uB85C \uC5C5\uB370\uC774\uD2B8\uD574 \uC8FC\uC138\uC694.");return await Xu(),n!==Xr?!1:(oi=!0,K("onlineServerStatus").textContent=`\uC11C\uBC84 \uC5F0\uACB0\uB428 \xB7 ${e.players}\uBA85 \uC811\uC18D \xB7 ${e.queued}\uBA85 \uB9E4\uCE6D \uB300\uAE30`,K("onlineServerStatus").classList.add("ready"),K("serverBadgeText").textContent="\uC628\uB77C\uC778 \uB9E4\uCE6D \uAC00\uB2A5",!0)}catch(e){return n!==Xr||(oi=!1,K("onlineServerStatus").textContent=Pt?e.message:"Node.js \uC11C\uBC84 \uC8FC\uC18C\uB97C \uC785\uB825\uD574 \uC8FC\uC138\uC694.",K("onlineServerStatus").classList.remove("ready"),K("serverBadgeText").textContent="\uAC8C\uC2A4\uD2B8 \uD50C\uB808\uC774"),!1}finally{n===Xr&&(Wr=null)}})(),Wr}function Ln(){let n=te.queued||te.connecting;K("matchSetup").hidden=te.queued,K("queuePanel").hidden=!te.queued,K("onlineJoinBtn").hidden=te.queued,K("roomCodeField").hidden=Jn!=="code",K("onlineRoom").disabled=Jn!=="code",K("teamModeHint").textContent=Jn==="public"?"\uB9F5\uC740 \uC790\uB3D9\uC73C\uB85C \uC120\uD0DD\uB429\uB2C8\uB2E4":K("onlineRoom").value.trim()?"\uC785\uC7A5\uD558\uB294 \uBC29\uC758 \uC778\uC6D0 \uC124\uC815\uC744 \uB530\uB985\uB2C8\uB2E4":"\uB85C\uBE44\uC5D0\uC11C \uC120\uD0DD\uD55C \uB9F5\uC73C\uB85C \uC2DC\uC791\uD569\uB2C8\uB2E4",document.querySelectorAll("[data-match-kind]").forEach(e=>{e.classList.toggle("active",e.dataset.matchKind===Jn),e.disabled=n}),document.querySelectorAll("[data-team-size]").forEach(e=>{let t=Number(e.dataset.teamSize)===rs&&!(Jn==="code"&&K("onlineRoom").value.trim());e.classList.toggle("selected",t),e.setAttribute("aria-pressed",String(t)),e.disabled=n||Jn==="code"&&!!K("onlineRoom").value.trim()}),K("onlineJoinBtn").innerHTML=(Jn==="public"?`${rs}\uB300${rs} \uB9E4\uCE6D \uC2DC\uC791`:K("onlineRoom").value.trim()?"\uCF54\uB4DC \uBC29 \uCC38\uAC00":`${rs}\uB300${rs} \uBC29 \uB9CC\uB4E4\uAE30`)+" <span>\u2192</span>"}function AM(n){K("queueTitle").textContent=`${n.teamSize}\uB300${n.teamSize} \uD50C\uB808\uC774\uC5B4\uB97C \uCC3E\uACE0 \uC788\uC2B5\uB2C8\uB2E4`,K("queueCount").textContent=`${n.compatible} / ${n.needed}\uBA85 \uC900\uBE44`,K("queueRange").textContent=`Lv. ${n.levelRange[0]} ~ ${n.levelRange[1]}`,K("queueBar").style.width=Math.min(100,n.compatible/n.needed*100)+"%",clearInterval($o);let e=()=>K("queueElapsed").textContent=wM(Math.max(0,te.serverNow-n.queuedAt));e(),$o=setInterval(e,250),Ln()}var qu=class extends EventTarget{constructor(){super(),this.socket=null,this.id="",this.room="",this.players=new Map,this.latency=0,this.connected=!1,this.queued=!1,this.connecting=!1,this.match=null,this.offset=0,this.pingTimer=null,this.abortJoin=null}get serverNow(){return Date.now()+this.offset}emit(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t}))}send(e){this.socket?.connected&&(this.socket.io.engine?.writeBuffer.length||0)<64&&this.socket.emit("packet",e)}leave(){let e=this.socket,t=this.abortJoin;this.abortJoin=null,this.socket=null,this.connected=!1,this.queued=!1,this.connecting=!1,this.id="",this.players.clear(),this.match=null,clearInterval(this.pingTimer),clearInterval($o),e?.disconnect(),t&&t(),K("onlineHud").hidden=!0,K("onlineScoreboard").hidden=!0,document.body.classList.remove("online-game"),Ln()}async join({name:e,room:t,map:i,weapon:s,kind:r,teamSize:o}){if(this.leave(),!Pt)throw new Error("\uC628\uB77C\uC778 \uC11C\uBC84 \uC8FC\uC18C\uB97C \uBA3C\uC800 \uC785\uB825\uD558\uC138\uC694.");let a=Yo(Pt,{autoConnect:!1,forceNew:!0,reconnection:!1,transports:["websocket","polling"],tryAllTransports:!0,timeout:1e4});return this.socket=a,this.connecting=!0,Ln(),new Promise((c,l)=>{let h=!1,f=setTimeout(()=>d(new Error("\uC628\uB77C\uC778 \uC5F0\uACB0 \uC2DC\uAC04\uC774 \uCD08\uACFC\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uC11C\uBC84 \uC8FC\uC18C\uB97C \uD655\uC778\uD558\uC138\uC694.")),12e3),d=u=>{h||(h=!0,clearTimeout(f),this.abortJoin=null,this.leave(),l(u))};this.abortJoin=()=>{if(h)return;h=!0,clearTimeout(f);let u=new Error("\uB9E4\uCE6D\uC744 \uCDE8\uC18C\uD588\uC2B5\uB2C8\uB2E4.");u.name="AbortError",l(u)},a.on("connect",()=>{a===this.socket&&(this.send({type:r==="public"?"queue":"join",protocol:3,name:e,room:t,map:i,weapon:s,teamSize:o,token:en,guestToken:Dn}),this.pingTimer=setInterval(()=>this.send({type:"ping",time:Date.now()}),2e3))}),a.on("packet",u=>{if(!(a!==this.socket||!u||typeof u!="object")){if(u.type==="error"){h?Nt.toast?.(u.error):d(new Error(u.error));return}u.type==="queued"&&(clearTimeout(f),this.connecting=!1,this.queued=!0,this.offset=u.serverTime-Date.now(),AM(u)),u.type==="welcome"&&(h=!0,clearTimeout(f),clearInterval($o),this.abortJoin=null,this.connected=!0,this.queued=!1,this.connecting=!1,this.id=u.id,this.room=u.room,this.map=u.map,this.match=u.snapshot.match,this.players=new Map(u.snapshot.players.map(g=>[g.id,g])),this.offset=u.snapshot.time-Date.now(),K("roomCodeHud").textContent=u.room,K("onlineHud").hidden=!1,document.body.classList.add("online-game"),Ln(),c(u)),u.type==="snapshot"&&(this.players=new Map(u.players.map(g=>[g.id,g])),this.match=u.match,this.offset=u.time-Date.now(),K("onlineCountHud").textContent=u.players.filter(g=>g.connected).length+" / "+u.match.capacity,em()),u.type==="matchEnd"&&(this.match=u.match,u.self?.economy&&Ii(u.self.economy),u.self?.profile&&qr(u.self.profile),em()),u.type==="pong"&&(this.latency=Math.max(0,Date.now()-u.time),K("pingHud").textContent=this.latency+" ms"),this.emit(u.type,u)}}),a.on("disconnect",()=>{if(a!==this.socket)return;clearTimeout(f),clearInterval(this.pingTimer),clearInterval($o);let u=this.connected;this.connected=!1,this.queued=!1,this.connecting=!1,this.socket=null,K("onlineHud").hidden=!0,Ln(),h?u&&this.emit("disconnect",{}):(h=!0,this.abortJoin=null,l(new Error("\uC11C\uBC84 \uC5F0\uACB0\uC774 \uC885\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uB2E4\uC2DC \uCC38\uAC00\uD574 \uC8FC\uC138\uC694.")))}),a.on("probe",u=>{typeof u=="function"&&u()}),a.on("connect_error",()=>d(new Error("\uC628\uB77C\uC778 \uC5F0\uACB0\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4. \uCD5C\uC2E0 Node.js \uC11C\uBC84\uC640 \uC8FC\uC18C\uB97C \uD655\uC778\uD558\uC138\uC694."))),a.connect()})}},te=new qu;function em(){let n=K("scoreboardRows");n.replaceChildren();for(let e of[0,1]){let t=document.createElement("div");t.className="score-team team-"+e;let i=te.match?.averages||[1,1];t.textContent=`${e===0?"BLUE":"ORANGE"} TEAM \xB7 \uD3C9\uADE0 Lv. ${i[e].toFixed(1)} \xB7 ${te.match?.scores[e]||0}\uC810`,n.append(t);let s=[...te.players.values()].filter(r=>r.team===e).sort((r,o)=>o.kills-r.kills||r.deaths-o.deaths);for(let r of s){let o=document.createElement("div");r.id===te.id&&(o.className="self");for(let[a,c]of[[`${r.connected?"":"[\uB098\uAC10] "}${r.name} \xB7 Lv.${r.level}`,"span"],[r.kills+"K","b"],[r.deaths+"D","b"]]){let l=document.createElement(c);l.textContent=a,o.append(l)}n.append(o)}}}var xt={get wallet(){return Ci},canUseWeapon(n){return Ci.owned.includes(n)},get account(){return _t},get profile(){return Xs},get backend(){return Pt},get ready(){return oi},async buyWeapon(n){if(oi){let e=await Pi("POST","/api/shop/buy",{weapon:n});Ii(e.economy)}else Ii(Mp(Ci,n));return Ci},beginWaves(){return Vu=(async()=>(Pt&&!oi&&await Gr(),oi?{...await Pi("POST","/api/wave/start",{}),local:!1}:{runId:crypto.randomUUID(),local:!0}))().catch(()=>({runId:crypto.randomUUID(),local:!0})),Vu},async rewardWave(n,e){let t=await Vu;if(!t)return 0;if(t.local){let s=Sp(Ci,"wave:"+t.runId+":"+n,bp(n));return Ii(s.economy),s.amount}let i=await Pi("POST","/api/wave/reward",{runId:t.runId,wave:n,kills:e});return Ii(i.economy),i.amount},openOnline(n={}){Jn=n.kind||"code",[1,2,3,4].includes(n.teamSize)&&(rs=n.teamSize),K("onlineOverlay").hidden=!1,K("onlineError").textContent="",K("onlineRoom").value="",K("serverUrlInput").value=Pt,(!Pt||!oi)&&(K("serverDetails").open=!0),Ln(),Gr()},rematch(n,e){this.openOnline({kind:n,teamSize:e}),K("onlineForm").requestSubmit()},async saveRecord(n){if(!(!_t||n.mode==="online"))try{await Pi("POST","/api/records",n)}catch{Nt.toast?.("\uAE30\uB85D\uC740 \uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0 \uBCF4\uAD00\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uC11C\uBC84 \uC5F0\uACB0\uC744 \uD655\uC778\uD574 \uC8FC\uC138\uC694.")}},async refreshProfile(){if(oi)try{await Xu()}catch{}},init(n){Nt=n,Ii(Ci),qs(),qr(Xs),K("serverUrlInput").value=Pt,K("authServerUrl").value=Pt,K("onlineOpen").onclick=()=>this.openOnline({kind:"code"}),K("matchOpen").onclick=()=>this.openOnline({kind:"public"}),K("practiceOpen").onclick=()=>Nt.onPractice?.(),K("accountOpen").onclick=()=>{if(te.connected||te.queued){Nt.toast?.("\uB300\uAE30 \uB610\uB294 \uACBD\uAE30\uB97C \uC885\uB8CC\uD55C \uB4A4 \uACC4\uC815\uC744 \uBCC0\uACBD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.");return}K("authOverlay").hidden=!1,K("authStatus").textContent="",qs()},document.querySelectorAll("[data-match-kind]").forEach(e=>e.onclick=()=>{Jn=e.dataset.matchKind,Ln()}),document.querySelectorAll("[data-team-size]").forEach(e=>e.onclick=()=>{rs=Number(e.dataset.teamSize),Ln()}),K("onlineRoom").oninput=Ln,K("cancelQueueBtn").onclick=()=>{te.send({type:"queueCancel"}),te.leave(),K("onlineError").textContent="",Ln()},document.querySelector('[data-close="onlineOverlay"]').addEventListener("click",()=>{(te.queued||te.connecting)&&te.leave()}),K("checkServerBtn").onclick=async()=>{try{Gu(K("serverUrlInput").value.trim()),await Gr(),K("onlineError").textContent=oi?"":"\uC11C\uBC84 \uC5F0\uACB0\uC744 \uD655\uC778\uD558\uC138\uC694."}catch(e){K("onlineError").textContent=e.message}},document.querySelectorAll("[data-auth-tab]").forEach(e=>e.onclick=()=>{Fc=e.dataset.authTab,document.querySelectorAll("[data-auth-tab]").forEach(t=>t.classList.toggle("active",t===e)),K("authSubmit").innerHTML=(Fc==="login"?"\uB85C\uADF8\uC778":"\uACC4\uC815 \uB9CC\uB4E4\uAE30")+" <span>\u2192</span>",K("authPassword").autocomplete=Fc==="login"?"current-password":"new-password",K("authStatus").textContent=""}),K("authForm").onsubmit=async e=>{e.preventDefault(),K("authSubmit").disabled=!0,K("authStatus").textContent="";try{K("authServerUrl").value.trim()&&Gu(K("authServerUrl").value.trim());let t=await Pi("POST","/api/"+(Fc==="login"?"login":"register"),{username:K("authUsername").value.trim(),password:K("authPassword").value});en=t.token,Wu(),_t=t.user,K("authPassword").value="",qs(),qr(_t.progress),Ii(_t.economy),Nt.onAccount?.(_t),K("authOverlay").hidden=!0,Nt.toast?.(`${_t.username} \uB2D8\uC73C\uB85C \uB85C\uADF8\uC778\uD588\uC2B5\uB2C8\uB2E4.`),Gr()}catch(t){K("authStatus").textContent=t.message}finally{K("authSubmit").disabled=!1}},K("logoutBtn").onclick=async()=>{try{await Pi("POST","/api/logout",{})}catch{}en="",Wu(),_t=null,qs(),Nt.onAccount?.(null),K("authOverlay").hidden=!0,await Xu().catch(()=>{}),Nt.toast?.("\uAC8C\uC2A4\uD2B8 \uD50C\uB808\uC774\uB85C \uC804\uD658\uD588\uC2B5\uB2C8\uB2E4.")},K("onlineForm").onsubmit=async e=>{e.preventDefault(),K("onlineJoinBtn").disabled=!0,K("onlineError").textContent="";try{if(Gu(K("serverUrlInput").value.trim()||Pt),!await Gr())throw new Error(K("onlineServerStatus").textContent);Nt.initAudio?.();let t=K("onlineName").value.trim();Yr("nickname",t);let i=await te.join({name:t,room:Jn==="code"?K("onlineRoom").value.trim().toUpperCase():"",map:Nt.getMap(),weapon:Nt.getWeapon(),kind:Jn,teamSize:rs});K("onlineOverlay").hidden=!0,Nt.onOnline(i)}catch(t){t.name!=="AbortError"&&(K("onlineError").textContent=t.message)}finally{K("onlineJoinBtn").disabled=!1,Ln()}},K("copyRoomHud").onclick=async()=>{try{await navigator.clipboard.writeText(te.room),Nt.toast?.("\uBC29 \uCF54\uB4DC\uB97C \uBCF5\uC0AC\uD588\uC2B5\uB2C8\uB2E4: "+te.room)}catch{Nt.toast?.("\uBC29 \uCF54\uB4DC: "+te.room)}},window.addEventListener("keydown",e=>{e.code==="Escape"&&!K("onlineOverlay").hidden&&!te.connected&&(te.leave(),K("onlineOverlay").hidden=!0),te.connected&&e.code==="Tab"&&(e.preventDefault(),K("onlineScoreboard").hidden=!1)}),window.addEventListener("keyup",e=>{e.code==="Tab"&&(K("onlineScoreboard").hidden=!0)}),window.addEventListener("blur",()=>K("onlineScoreboard").hidden=!0),location.protocol==="file:"&&(K("htmlDownload").hidden=!0,document.querySelector(".server-download").hidden=!0),Ln(),Gr()}};var R=n=>document.getElementById(n),ci=(n,e,t)=>Math.max(e,Math.min(t,n)),Qo=(n,e,t)=>n+(e-n)*t,ln=(n,e,t,i)=>Qo(n,e,1-Math.exp(-t*i)),Tt=(n,e)=>n+Math.random()*(e-n),rn={get(n,e){try{return JSON.parse(localStorage.getItem("vector."+n))??e}catch{return e}},set(n,e){try{localStorage.setItem("vector."+n,JSON.stringify(e))}catch{}}},fa=[{id:"dust",name:"DUSTLINE",ko:"\uB354\uC2A4\uD2B8\uB77C\uC778",desc:"\uC0AC\uB9C9 \uC804\uCD08 \uAE30\uC9C0",tag:"DESERT OUTPOST",coords:"24\xB0 28\u2032 N / 54\xB0 22\u2032 E",sky:10397338,fog:11907738,ground:11575682,wall:12892573,accent:11057008,light:16771524,sun:2.7},{id:"neon",name:"NEON DOCK",ko:"\uB124\uC628 \uB3C4\uD06C",desc:"\uBE44 \uB0B4\uB9B0 \uB124\uC628 \uD56D\uAD6C",tag:"AFTER DARK",coords:"35\xB0 06\u2032 N / 129\xB0 02\u2032 E",sky:793387,fog:1387834,ground:2636613,wall:4281443,accent:6478292,light:8051670,sun:1.1},{id:"frost",name:"FROSTBITE",ko:"\uD504\uB85C\uC2A4\uD2B8\uBC14\uC774\uD2B8",desc:"\uC124\uC0B0 \uC5F0\uAD6C \uC2DC\uC124",tag:"ALPINE FACILITY",coords:"46\xB0 35\u2032 N / 07\xB0 57\u2032 E",sky:10598597,fog:12636889,ground:13753824,wall:8625577,accent:15896930,light:14808063,sun:2.2},{id:"orbit",name:"ORBITAL",ko:"\uC624\uBE44\uD0C8",desc:"\uC9C0\uAD6C \uC800\uADA4\uB3C4 \uC815\uAC70\uC7A5",tag:"ZERO HORIZON",coords:"LOW EARTH ORBIT / 408 KM",sky:461589,fog:66e4,ground:2634563,wall:6846345,accent:12295657,light:11912447,sun:1.7}],hi=0,Ce=ci(rn.get("weapon",0),0,Ue.length-1),ps=Ce,zc="all",ft={sensitivity:1,fov:85,volume:60,music:25,shake:!0,shadows:!0,...rn.get("settings",{})},Fn=rn.get("records",[]),Re=!1,un="lobby",ce="waves",qe=!0,Zc=!1,ta=!1,sm=!1,Yt=0,Bn=0,Ni=0,sn=1,Qr=0,pt=30,$t=150,Vt=0,wn=0,Ct=!1,cs=0,$r=0,na=0,Zs=0,Hc=0,ia=0,Vc=0,Xc=0,yt=new Set,rt={down:!1,dx:0,dy:0,position:null},B={pos:new w(0,0,17),vel:new w,yaw:0,pitch:0,height:1.7,health:200,grounded:!0,jumps:0,slide:0,slideCooldown:0,slideDir:new w,speed:0,bob:0,land:0},Rt,Bt,Je,eo,so,ge,On,ae,En,hs,Ui=[],Jc=[],gn=[],us=[],sd=[],_m=[],rm=0,om=0,qt={},to=new bc,CM=new w,Cb=new w,am=new In(0,0,0,"YXZ"),Zr=null,Nn=null,Li=rn.get("viewMode","first"),sa=null,Zu=0,Ju=null,kt=!1,Gc=0,xm=0,ms=[],rd=0,jn=0,kn=0,ra=[],bn=null,qc=!1,Jr="",Un=new Map,Ys={count:6,difficulty:"normal",invincible:!0},et={ads:0,swayX:0,swayY:0,strafe:0,recoilSide:0,kickVelocity:0,landVelocity:0},Kr=0,Ku=0,Js=[],oa=[],gs=!1,od=0,jr=0,IM=0,ds=null,_s=new Map,xs=new Map,Oi=new Map,aa=[],cm=rn.get("quickSlots",[0,42,52]),Kn=Array.isArray(cm)?cm.slice(0,3):[0,42,52];function lm(n,e,t,i,s){let r=Math.ceil(s/.008),o=s/r;for(let a=0;a<r;a++)e+=((t-n)*i*i-2*i*e)*o,n+=e*o;return[n,e]}function ym(){pa(),jr=0,Object.assign(et,{ads:0,swayX:0,swayY:0,strafe:0,recoilSide:0,kickVelocity:0,landVelocity:0}),B.coyote=.1,B.jumpBuffer=0,B.stepOffset=0,B.land=0,Kr=0,$r=0,rt.dx=0,rt.dy=0,rt.position=null,R("damageNumbers").replaceChildren(),Js.length=0,R("lastHit").hidden=!0,R("scopeOverlay").hidden=!0}function Gt(n){Zr?.play(n,Ue[Ce])}function ad(){Zr||(Zr=new Rc),Zr.setLevels(ft.volume,ft.music),Zr.unlock()}function Qn(n){R("toast").textContent=n,R("toast").classList.add("show"),clearTimeout(Qn.timer),Qn.timer=setTimeout(()=>R("toast").classList.remove("show"),2500)}var Yu=new Map;function hn(n,e=.05,t=.85,i=0){let s=`${n}_${e}_${t}_${i}`;return Yu.has(s)||Yu.set(s,new Lr({color:n,metalness:e,roughness:t,emissive:i,emissiveIntensity:i?1.5:0})),Yu.get(s)}function j(n,e,t,i,s,r,o,a,c={}){let l=new Ze(new Ns(s,r,o),hn(a,c.metal??.05,c.rough??.85,c.emissive??0));if(l.position.set(e,t,i),l.castShadow=c.shadow!==!1,l.receiveShadow=!0,n.add(l),c.collision){let h=new wi(new w(e-s/2,t-r/2,i-o/2),new w(e+s/2,t+r/2,i+o/2));Ui.push(h),Jc.push(l)}return l}function nn(n,e,t,i,s,r,o,a,c=12){let l=new Ze(new Ir(s,r,o,c),hn(a,.22,.67));return l.position.set(e,t,i),l.castShadow=!0,l.receiveShadow=!0,n.add(l),l}function vm(n,e=256,t=128,i="#e3e8d2",s="transparent",r=70){let o=document.createElement("canvas");o.width=e,o.height=t;let a=o.getContext("2d");s!=="transparent"&&(a.fillStyle=s,a.fillRect(0,0,e,t)),a.fillStyle=i,a.font=`700 ${r}px Barlow, sans-serif`,a.textAlign="center",a.textBaseline="middle",a.fillText(n,e/2,t/2);let c=new Io(o);return c.colorSpace=jt,new Pn({map:c,transparent:!0,depthWrite:!1})}function as(n,e,t,i,s,r,o,a=0){let c=new Ze(new Us(s,r),vm(n,512,256,o,"transparent",130));return c.position.set(e,t,i),c.rotation.y=a,ge.add(c),c}function ai(n,e,t,i,s,r,o=0){j(ge,n,s/2,e,t,s,i,r.wall,{collision:!0}),j(ge,n,s+.12,e,t+.3,.24,i+.3,o?4410178:6910044);for(let a=0;a<Math.floor(t/2.6);a++){let c=n-t/2+1.3+a*2.6;j(ge,c,s*.64,e+i/2+.025,1.4,1.1,.05,r.id==="neon"?2381402:2569778,{emissive:r.id==="neon"?1797748:0}),j(ge,c,s*.64-.6,e+i/2+.07,1.6,.08,.17,6647129)}j(ge,n,s*.2,e+i/2+.07,1.6,s*.4,.13,5068873);for(let a=-1;a<=1;a+=2)j(ge,n+a*(t/2-.18),s/2,e+i/2+.06,.26,s,.15,8094320);if(r.id==="dust"){j(ge,n,s+.55,e,1.5,.75,1.1,9607552);for(let a=0;a<6;a++)j(ge,n-.6+a*.24,s+.58,e+.57,.08,.5,.03,5332554)}if(o===1)for(let a=0;a<3;a++){let c=nn(ge,n-t/2-.15,s*.5,e-i*.25+a*.5,.08,.08,s*.9,6844765);c.rotation.z=.02}}function tn(n,e,t=2,i=1.8,s=2,r=fa[hi]){let o=r.id==="dust"?6910300:r.id==="neon"?3692386:r.id==="frost"?8295067:4345446;j(ge,n,i/2,e,t,i,s,o,{collision:!0}),j(ge,n,i+.025,e,t+.08,.08,s+.08,9674108);for(let a of[-1,1])j(ge,n+a*t*.37,i/2,e+s/2+.025,.09,i,.06,11383697),j(ge,n+a*t*.37,i/2,e-s/2-.025,.09,i,.06,11383697);return j(ge,n,i*.55,e+s/2+.04,t*.28,.15,.02,r.accent),o}function Jo(n,e,t,i,s){j(ge,n,1.55,e,t,3.1,i,s.id==="neon"?3234921:s.id==="dust"?7634264:s.id==="frost"?6389133:4871793,{collision:!0});for(let r=0;r<Math.floor(t/.45);r++)j(ge,n-t/2+.2+r*.45,1.55,e+i/2+.025,.09,2.9,.06,4017211);j(ge,n,3.12,e,t+.1,.1,i+.1,10462347),as("VECTOR",n,1.8,e+i/2+.07,Math.min(t-1,3),.7,"#c4cfaa")}function PM(n,e,t){if(nn(ge,n,3.5,e,.07,.12,7,5332043),j(ge,n+.6,6.9,e,1.35,.12,.25,4345148),j(ge,n+1.05,6.8,e,.35,.05,.23,15856846,{emissive:t.id==="neon"?7663083:14808240}),t.id==="neon"||t.id==="orbit"){let i=new Nr(t.accent,9,16,2);i.position.set(n+.8,6.5,e),ge.add(i)}}function LM(n,e,t=1){let i=nn(ge,n,2.2*t,e,.11*t,.23*t,4.4*t,7303761,7);i.rotation.z=.07;for(let s=0;s<7;s++){let r=s*Math.PI*2/7,o=new Ft,a=2.3*t;o.setAttribute("position",new dt([0,0,0,Math.cos(r-.3)*a*.6,-.1,Math.sin(r-.3)*a*.6,Math.cos(r)*a,-.9*t,Math.sin(r)*a,0,0,0,Math.cos(r)*a,-.9*t,Math.sin(r)*a,Math.cos(r+.3)*a*.6,-.1,Math.sin(r+.3)*a*.6],3)),o.computeVertexNormals();let c=new Ze(o,new Lr({color:6779721,side:Cn,roughness:1}));c.position.set(n,4.3*t,e),c.castShadow=!0,ge.add(c)}}function DM(n,e,t=1){nn(ge,n,1.5*t,e,.12,.22,3*t,5662303,6);for(let i=0;i<3;i++){let s=new Ze(new mn((1.4-i*.32)*t,2*t,7),hn(i%2?7967892:6651514));s.position.set(n,(2+i*.9)*t,e),s.castShadow=!0,ge.add(s);let r=new Ze(new mn((1.4-i*.32)*t,1.5*t,7),hn(13820389));r.position.set(n,(2.3+i*.9)*t,e),ge.add(r)}}function Kc(n=9477764,e=!1){let t=new fn,i=e?3160888:2765872,s=e?16557410:13891704,r=j(t,0,.92,0,.57,.3,.38,i),o=j(t,0,1.35,0,.76,.62,.42,n,{metal:.35});j(t,0,1.39,.23,.48,.38,.12,i),j(t,0,1.48,.301,.32,.04,.025,s,{emissive:s}),j(t,0,1.18,.29,.35,.11,.06,n);for(let _ of[-.17,0,.17])j(t,_,1.02,.245,.12,.18,.1,i);nn(t,0,1.76,0,.12,.14,.15,i);let a=j(t,0,1.97,0,.46,.43,.44,n,{metal:.4});j(t,0,1.99,.232,.38,.14,.025,1714469,{emissive:e?16537666:12973466}),j(t,0,2.17,-.02,.32,.08,.33,i),j(t,-.25,1.97,0,.08,.21,.3,i),j(t,.25,1.97,0,.08,.21,.3,i),j(t,0,1.85,.245,.18,.1,.05,i);let c=[];for(let _ of[-1,1]){let m=new fn;m.position.set(_*.2,.9,0),t.add(m),j(m,0,-.23,0,.25,.44,.28,i),j(m,0,-.27,.13,.25,.28,.1,n),j(m,0,-.52,.06,.27,.17,.3,n),j(m,0,-.7,0,.23,.3,.25,i),j(m,0,-.82,.13,.3,.16,.5,i),c.push(m)}let l=[];for(let _ of[-1,1]){let m=new fn;m.position.set(_*.48,1.57,0),t.add(m),j(m,0,-.07,0,.27,.25,.35,n),j(m,0,-.32,.1,.2,.35,.25,i),j(m,-_*.11,-.5,.29,.2,.22,.48,n),j(m,-_*.11,-.48,.53,.18,.18,.17,i),l.push(m)}let h=new fn;h.position.set(.07,1.22,.79),t.add(h),j(h,-.07,-.12,-.24,.18,.22,.65,i,{metal:.7}),j(h,0,0,0,.18,.15,.86,i,{metal:.6});let f=nn(h,0,0,.56,.04,.04,.4,6648156);f.rotation.x=Math.PI/2,j(h,-.01,.16,-.14,.12,.15,.21,1911075),j(t,0,1.36,-.3,.5,.48,.23,i);let d=new Map,u=[];t.traverse(_=>{if(!_.isMesh)return;let m=_.material;if(!d.has(m)){let p=m.clone();p.userData.agentOwned=!0,d.set(m,p),u.push({material:p,color:p.color.clone(),emissive:p.emissive.clone(),intensity:p.emissiveIntensity})}_.material=d.get(m)});let g=new Ze(new mn(.13,.34,5),new Pn({color:16765566,transparent:!0,opacity:.95,depthWrite:!1}));return g.material.userData.agentOwned=!0,g.rotation.x=Math.PI/2,g.position.z=.89,g.visible=!1,h.add(g),t.userData={legs:c,arms:l,head:a,torso:o,gun:h,flash:g,hitMaterials:u,hitTime:0,shootTime:0,hitColor:new Be(16717629),hitEmissive:new Be(10815765)},t}function jc(n){n?.userData.hitMaterials&&(n.userData.hitTime=.22,ro(n,0))}function Yc(n){n?.userData.gun&&(n.userData.shootTime=.18,ro(n,0))}function ro(n,e,t=0){let i=n.userData;if(!i.gun)return;i.hitTime=Math.max(0,i.hitTime-e),i.shootTime=Math.max(0,i.shootTime-e);let s=i.hitTime>0?Math.min(1,i.hitTime/.06):0;for(let o of i.hitMaterials)o.material.color.copy(o.color).lerp(i.hitColor,s*.9),o.material.emissive.copy(o.emissive).lerp(i.hitEmissive,s),o.material.emissiveIntensity=s?1:o.intensity;let r=Math.sin(Math.min(1,i.shootTime/.18)*Math.PI/2);i.gun.position.z=.79-r*.14,i.gun.rotation.x=t-r*.13,i.arms.forEach((o,a)=>{o.rotation.x=t*.7-r*(a?.16:.23),o.rotation.z=(a?-.03:.03)*r}),i.flash.visible=i.shootTime>.12,i.flash.scale.setScalar(.8+r*.4)}function NM(n){jc(n),oa.push({mesh:n,life:.18})}function UM(n){for(let e=oa.length-1;e>=0;e--){let t=oa[e];if(t.life-=n,t.life<=0)ge.remove(t.mesh),t.mesh.traverse(i=>{i.geometry?.dispose(),i.material?.map&&i.material.map.dispose(),(i.material?.map||i.material?.userData.agentOwned)&&i.material.dispose()}),oa.splice(e,1);else{ro(t.mesh,n),t.mesh.scale.y=Math.max(.75,t.life/.18);for(let i of t.mesh.userData.hitMaterials)i.material.transparent=!0,i.material.opacity=t.life/.18}}}function OM(){Nn=null,oa.length=0;for(let n of Oi.keys())$c(n);if(aa.length=0,Un.clear(),ge){let n=new Set;ge.traverse(e=>{e.geometry&&n.add(e.geometry),e.material?.map?(e.material.map.dispose(),e.material.dispose()):e.material?.userData.agentOwned&&e.material.dispose()}),n.forEach(e=>e.dispose()),Bt.remove(ge)}Ui=[],Jc=[],gn=[],us.forEach(n=>{Bt.remove(n.mesh),n.mesh.geometry?.dispose(),n.mesh.material?.dispose()}),us=[],sd=[],ge=new fn,Bt.add(ge)}function ha(n){hi=n;let e=fa[n];OM(),Bt.background=new Be(e.sky),Bt.fog=new fc(e.fog,e.id==="orbit"?.008:.012),Bt.children.filter(r=>r.isLight).forEach(r=>Bt.remove(r));let t=new Lo(e.id==="neon"?8699850:15397600,e.id==="orbit"?3158348:7433297,e.id==="neon"?1.7:2);Bt.add(t);let i=new Do(e.light,e.sun);i.position.set(-18,35,14),i.castShadow=!0,i.shadow.mapSize.set(2048,2048),Object.assign(i.shadow.camera,{left:-34,right:34,top:34,bottom:-34,near:1,far:90}),i.shadow.bias=-5e-4,i.shadow.normalBias=.025,Bt.add(i),j(ge,0,-.2,0,70,.4,70,e.ground,{shadow:!1,metal:e.id==="neon"?.4:.05,rough:e.id==="neon"?.3:.95});let s=new Ec(68,34,e.id==="dust"?10196602:e.id==="frost"?11781836:4216422,e.id==="dust"?10919296:e.id==="frost"?12899545:3162450);s.position.y=.012,s.material.transparent=!0,s.material.opacity=e.id==="dust"?.22:.3,ge.add(s);for(let r of[-28,28])j(ge,0,2,r,57,4,.8,e.wall,{collision:!0});for(let r of[-28,28])j(ge,r,2,0,.8,4,57,e.wall,{collision:!0});if(e.id==="dust"){ai(-15,-13,10,9,8,e,1),ai(15,-15,11,8,10,e),ai(-20,6,6,11,5,e),ai(21,7,5,12,6,e,1),j(ge,0,2.8,-17,2.7,5.6,2.5,e.wall,{collision:!0}),j(ge,8,2.8,-17,2.7,5.6,2.5,e.wall,{collision:!0}),j(ge,4,5.7,-17,10.7,1.5,2.7,e.wall,{collision:!0}),j(ge,4,6.5,-17,11,.13,3,7436123),as("A",4,5.65,-15.62,1.05,1.1,"#777f52"),as("07",-15,5,-8.46,3,1.9,"#5e6946"),as("SECTOR",15,7,-10.96,6,1.2,"#657052"),Jo(-10,1,7,3,e),tn(8,3,3,2,2,e),tn(10,4,1.5,3,1.8,e),tn(-3,-9,2,1.4,2,e),tn(17,15,3,1.8,3,e),tn(-18,17,2,1.7,3,e);for(let[r,o]of[[-23,-20],[24,-22],[-24,18],[22,19],[-8,-24]])LM(r,o,Tt(.9,1.35));for(let r=0;r<9;r++){let o=new Ze(new mn(Tt(15,30),Tt(10,20),5),hn(9936003));o.position.set(-85+r*22,1,-65-Tt(0,18)),o.rotation.y=r,ge.add(o)}}if(e.id==="neon"){ai(-18,-14,9,10,11,e,1),ai(18,-14,10,10,13,e),Jo(-11,0,8,3,e),Jo(12,2,7,3,e),Jo(-11,-6,8,3,e),tn(0,-12,3,1.8,3,e),tn(19,15,3,2,4,e),tn(-19,15,3,2,4,e);for(let r of[-24,24]){j(ge,r,9,-7,.7,18,.7,5925995),j(ge,r*.5,17.7,-7,25,.6,.6,6849922);for(let o=0;o<7;o++){let a=j(ge,r-r/7*o,16.5,-7,.12,2.5,.12,4879735);a.rotation.z=.65}}as("NEON",18,8,-8.96,7,2,"#8df5df"),as("PORT 09",-18,7,-8.96,7,1.7,"#f6b28a");for(let r of[-7,7])j(ge,r,.025,0,.08,.02,48,6408124,{emissive:1526857});for(let r=0;r<20;r++)j(ge,Tt(-60,60),Tt(6,12),Tt(-60,-40),Tt(3,7),Tt(15,30),Tt(4,7),1848642,{shadow:!1})}if(e.id==="frost"){ai(-17,-13,10,11,7,e),ai(18,-12,10,13,9,e,1),j(ge,0,2.1,-17,12,4.2,5,e.wall,{collision:!0});let r=new Ze(new Bs(3.6,18,12,0,Math.PI*2,0,Math.PI/2),hn(14016480,.4,.4));r.position.set(0,4.2,-17),ge.add(r),as("POLAR",0,2.7,-14.46,7,1.6,"#324e5b"),Jo(-10,4,7,3,e),tn(10,1,4,1.9,3,e),tn(14,15,2,2.5,3,e),tn(-19,15,3,1.7,3,e),tn(2,-6,2,1.4,2,e);for(let[o,a]of[[-24,18],[-25,-23],[24,-23],[24,16],[-24,-1],[23,3]])DM(o,a,Tt(.9,1.4));for(let o=0;o<10;o++){let a=new Ze(new mn(Tt(12,22),Tt(18,35),5),hn(o%2?13688032:10399671));a.position.set(-100+o*24,5,-65-Tt(0,25)),a.rotation.y=o*2,ge.add(a)}}if(e.id==="orbit"){ai(-18,-15,8,10,8,e),ai(18,-15,8,10,8,e),j(ge,0,.5,-13,13,1,9,5727353,{collision:!0});for(let l=0;l<3;l++)j(ge,0,.15+l*.15,-6.5-l*.6,6,.3+l*.3,.6,8162204,{collision:!0});j(ge,0,3,-14,1.5,4,1.5,8689823,{collision:!0});let r=new Ze(new vc(3,.18,10,48),hn(10791112,.5,.25,6310556));r.position.set(0,5,-14),ge.add(r),sd.push(r),tn(-10,1,4,2,3,e),tn(11,2,4,2,3,e),tn(19,16,3,1.8,3,e),tn(-18,17,3,1.8,3,e);for(let l of[-25,25]){for(let h of[-15,0,15])j(ge,l,4,h,.8,8,.8,6253690),j(ge,l,4,h+.43,.18,6,.04,e.accent,{emissive:5721218});j(ge,l,8,0,.8,.8,42,5662071)}let o=new Ze(new Bs(35,32,24),hn(5538986,.1,.9,1255486));o.position.set(15,20,-110),ge.add(o);let a=new Ft,c=[];for(let l=0;l<500;l++)c.push(Tt(-150,150),Tt(15,100),Tt(-150,-40));a.setAttribute("position",new dt(c,3)),ge.add(new _c(a,new Co({size:.28,color:13032191}))),as("ORBITAL",18,6,-9.96,6,1.3,"#dbcdff")}for(let[r,o]of[[-24,-8],[24,-6],[-12,24],[12,24]])PM(r,o,e);for(let r=0;r<3;r++)j(ge,-3,.15+r*.15,7-r*.7,4,.3+r*.3,.7,e.id==="dust"?10657406:7045509,{collision:!0});j(ge,-3,.5,4.3,4,1,3.3,e.wall,{collision:!0});for(let r=0;r<9;r++)j(ge,-1+r*.28,.025,18,.12,.01,1.3,12959108,{shadow:!1});On=Kc(e.id==="frost"?11255750:11120273,!1),On.position.set(16,0,12),On.scale.setScalar(3.4),On.rotation.y=.38,ge.add(On),R("sceneName").textContent=e.name,R("sceneCoords").textContent=e.coords,R("hudMap").textContent=e.name}function ys(n=!0){ds!==null&&(_s.set(ds,pt),xs.set(ds,$t)),pa(),ae&&(eo.remove(ae),ae.traverse(A=>{A.geometry?.dispose(),(A.material?.transparent||A.isLine)&&A.material?.dispose()}));let e=Ue[Ce],t=e.cat==="hg",i=e.cat==="sr",s=e.cat==="sg",r=e.cat==="smg",o=e.cat==="lmg";ae=new fn,ae.scale.setScalar(.7),eo.add(ae);let a=2700078,c=e.color,l=13891704;if(e.mechanic){HM(e),hm(e,n);return}let h=(t?.47:i?1.18:s?1.02:r?.64:.88)*(.96+e.id%4*.025);j(ae,0,0,0,t?.14:.19,t?.16:.22,h,c,{metal:.65,rough:.38}),j(ae,0,.12,-h*.1,.14,.055,h*.73,a,{metal:.7});for(let A=0;A<9;A++)j(ae,0,.16,-h*.4+A*h*.065,.16,.035,.025,a,{metal:.7});j(ae,0,-.18,h*.27,.13,.3,.16,a,{metal:.5});let f=j(ae,0,-.26,t?h*.2:-h*.07,o?.3:.12,o?.24:.31,o?.26:.2,a,{metal:.5});if(f.rotation.x=t?0:-.15,!t){j(ae,0,.005,h*.68,.16,.2,.45,a,{metal:.4}),j(ae,0,-.025,h*.92,.2,.29,.07,c),j(ae,0,0,-h*.39,.23,.2,h*.4,a);for(let A=0;A<5;A++)j(ae,-.119,.015,-h*.5+A*.07,.012,.1,.03,c),j(ae,.119,.015,-h*.5+A*.07,.012,.1,.03,c)}let d=nn(ae,0,.02,-h*.72,.035,.035,h*.4,3884864,12);d.rotation.x=Math.PI/2;let u=-h*.92,g=nn(ae,0,.02,u,.05,.05,.09,a);if(g.rotation.x=Math.PI/2,i){let A=nn(ae,0,.29,-.02,.087,.075,.43,a,16);A.rotation.x=Math.PI/2,j(ae,0,.21,0,.1,.2,.13,a);let C=nn(ae,0,.29,-.243,.067,.067,.005,6540712,16);C.rotation.x=Math.PI/2}else if(!t){j(ae,-.073,.245,.04,.018,.17,.07,a),j(ae,.073,.245,.04,.018,.17,.07,a),j(ae,0,.329,.04,.16,.018,.07,a),j(ae,0,.164,.04,.16,.018,.07,a);let A=new Ze(new Us(.125,.14),new Lr({color:8637879,transparent:!0,opacity:.14,side:Cn,depthWrite:!1,roughness:.15}));A.position.set(0,.25,.04),ae.add(A)}j(ae,.105,.015,.17,.011,.08,.12,l),j(ae,-.105,.025,.12,.011,.04,.1,8359027);let _=3161650,m=6648918,p=j(ae,.07,-.25,.29,.18,.23,.24,_);p.rotation.x=-.2;let T=j(ae,.16,-.42,.49,.22,.23,.57,m);T.rotation.x=-.25;let b=j(ae,-.13,-.16,-.3,.18,.2,.28,_);b.rotation.z=-.15;let M=j(ae,-.3,-.32,-.02,.22,.22,.65,m);M.rotation.y=-.5;let U=j(ae,.104,.045,.06,.018,.065,.16,7833719,{metal:.8});qt={mag:f,bolt:U},En=new Ze(new mn(.14,.35,7),new Pn({color:16769696,transparent:!0,opacity:.85})),En.rotation.x=-Math.PI/2,En.position.set(0,.02,u-.18),En.visible=!1,ae.add(En),hs=new Nr(16767371,0,3),hs.position.set(0,.05,u),ae.add(hs),hm(e,n)}function hm(n,e=!0){Ct=!1,ds=Ce,pt=_s.get(Ce)??n.mag,$t=xs.get(Ce)??n.reserve,Vt=0,kn=0,na=.4,wn=Math.max(wn,.25),Ks(),GM(),Re&&ce==="online"&&e?(ms=[],jn=++rd,te.send({type:"equip",weapon:Ce,seq:jn})):jn=0}function Qc(n,e){if(n.weapon!==Ce)return;let t=pt,i=$t,s=Vt>0,r=Ue[Ce];pt=r.mechanic==="melee"?1:Math.min(r.mag,Math.max(0,n.ammo-ms.length)),Number.isFinite(n.reserve)&&($t=Math.max(0,Math.min(r.reserve,n.reserve))),xs.set(Ce,$t),Vt=n.health===0?0:Math.max(0,((n.reloadAt||0)-e)/1e3),_s.set(Ce,pt),s&&Vt===0&&pt>t&&!qe&&Gt("reload"),(t!==pt||i!==$t||s!==Vt>0)&&(Ks(),R("reloadHint").innerHTML=Vt>0?"\uC7AC\uC7A5\uC804 \uC911\u2026":"R \uC7AC\uC7A5\uC804 <b>\xB7</b> 1~3 \uBB34\uAE30 \uC804\uD658 <b>\xB7</b> B \uBB34\uAE30\uACE0")}function FM(n,e){jn||kn||n.weapon!==Ce||Qc(n,e)}function BM(n){!Re||ce!=="online"||!jn||n.seq!==jn||(jn=0,Number.isInteger(n.weapon)&&Ue[n.weapon]&&n.weapon!==Ce&&(kn=0,ms=[],Ce=n.weapon,ps=n.weapon,rn.set("weapon",Ce),ys(!1)),kn||Qc(n,n.serverTime??te.serverNow))}function kM(n){!Re||ce!=="online"||!kn||n.seq!==kn||(kn=0,!jn&&n.weapon===Ce&&Qc(n,n.serverTime??te.serverNow))}function zM(n){!Re||ce!=="online"||n.weapon!==Ce||(ms=ms.filter(e=>e>n.seq),!jn&&!kn&&Qc(n,n.serverTime??te.serverNow))}function HM(n){if(qt={mag:new Ot},n.mechanic==="arrow"){let i=new Fs([new w(0,-.72,-.17),new w(0,-.43,-.4),new w(0,0,-.46),new w(0,.43,-.4),new w(0,.72,-.17)]);ae.add(new Ze(new Pr(i,24,.035,8,!1),hn(9020022,.5,.4))),j(ae,0,0,-.44,.08,.26,.1,2636596);let s=new Cr(new Ft().setFromPoints([new w(0,.72,-.17),new w(0,0,.12),new w(0,-.72,-.17)]),new Os({color:15201476}));ae.add(s),qt.string=s;let r=new fn,o=nn(r,0,0,-.3,.009,.009,1.1,11779744,6);o.rotation.x=Math.PI/2;let a=new Ze(new mn(.035,.12,4),hn(13891704,.6,.3));a.rotation.x=-Math.PI/2,a.position.z=-.91,r.add(a),ae.add(r),qt.arrow=r,j(ae,-.04,-.12,-.36,.15,.19,.2,2636596);let c=j(ae,.035,-.02,.14,.16,.16,.18,2636596);qt.drawHand=c}else if(n.mechanic==="rocket"){let i=nn(ae,0,0,0,.14,.14,1.45,8623724,14);i.rotation.x=Math.PI/2;for(let r of[-.7,.65]){let o=nn(ae,0,0,r,.17,.17,.09,2636596,14);o.rotation.x=Math.PI/2}let s=new Ze(new mn(.135,.32,10),hn(12887658,.4,.5));s.rotation.x=-Math.PI/2,s.position.z=-.88,ae.add(s),qt.warhead=s,j(ae,0,-.24,.12,.14,.33,.16,2636596),j(ae,.18,.21,-.1,.06,.22,.28,2636596),j(ae,-.1,-.18,-.4,.2,.19,.2,2636596),j(ae,.09,-.3,.23,.18,.2,.24,2636596)}else VM(n);En=new Ze(new mn(.18,.4,7),new Pn({color:16762749,transparent:!0,opacity:.8})),En.position.set(0,0,-1),En.rotation.x=-Math.PI/2,En.visible=!1,ae.add(En),hs=new Nr(16759922,0,3),hs.position.z=-.8,ae.add(hs)}function VM(n){let e=n.shape||"knife",t=n.length||.62,i=2636596,s=n.color||12833732,r=7439452;j(ae,0,0,.18,.1,.12,.32,i),j(ae,.03,-.08,.25,.18,.19,.2,i),j(ae,.12,-.16,.48,.22,.22,.4,6913624);let o=(c,l=.025)=>{let h=nn(ae,0,0,-c/2,l,l,c,r,8);return h.rotation.x=Math.PI/2,h},a=(c,l=.1,h=-c/2,f=0)=>{let d=new Ze(new mn(l,c,4),hn(s,.8,.25));return d.rotation.x=-Math.PI/2,d.scale.z=.23,d.position.set(f,0,h),ae.add(d),d};if(["knife","sword","rapier"].includes(e))j(ae,0,0,0,e==="rapier"?.4:.28,.045,.07,r),a(t,e==="rapier"?.045:e==="sword"?.12:.085),e==="sword"&&j(ae,0,.025,-t*.35,.025,.025,t*.6,15265766);else if(e==="curved"){let c=[new w(0,0,0),new w(.02,0,-t*.4),new w(.18,0,-t*.82),new w(.32,0,-t)];ae.add(new Ze(new Pr(new Fs(c),16,.045,3,!1),hn(s,.8,.25))),j(ae,0,0,0,.23,.045,.06,r)}else if(["axe","halberd"].includes(e))o(t),j(ae,.12,0,-t*.84,.45,.09,.28,s,{metal:.7}),a(.32,.15,-t-.06),e==="halberd"&&a(.4,.065,-t-.16);else if(e==="hammer"){o(t,.035),j(ae,0,0,-t*.88,.55,.22,.27,s,{metal:.65});for(let c of[-.29,.29])j(ae,c,0,-t*.88,.07,.25,.31,i)}else if(e==="bat"){let c=nn(ae,0,0,-t/2,.09,.035,t,r,10);c.rotation.x=Math.PI/2;for(let l=0;l<4;l++)j(ae,0,0,.04+l*.035,.12,.13,.012,i)}else if(e==="spear"||e==="trident"){if(o(t),a(.38,.09,-t-.1),e==="trident")for(let c of[-.17,.17])j(ae,c/2,0,-t+.1,.2,.05,.055,s),a(.28,.055,-t-.06,c)}else if(e==="staff"){o(t,.045);for(let c of[-t,-.05]){let l=nn(ae,0,0,c,.07,.07,.14,s);l.rotation.x=Math.PI/2}}else if(e==="scythe"){o(t);let c=a(.85,.16,-t+.05,.32);c.rotation.set(0,0,-Math.PI/2),c.rotation.y=Math.PI/2,j(ae,.14,0,-t,.4,.06,.12,s)}else if(e==="crowbar"){o(t,.035);let c=new Fs([new w(0,0,-t),new w(.04,0,-t-.1),new w(.15,0,-t-.1),new w(.2,0,-t+.02)]);ae.add(new Ze(new Pr(c,12,.035,6,!1),hn(s,.75,.3)))}}function Mm(n){return n.cat==="hg"?1:n.mechanic==="melee"?2:0}function Sm(){Kn=[0,42,52].map((e,t)=>{let i=Kn[t];return Ue[i]&&Mm(Ue[i])===t&&xt.canUseWeapon(i)?i:e}),xt.canUseWeapon(Ce)||(Ce=Kn[0]),rn.set("quickSlots",Kn)}function GM(){R("quickSlots")&&(R("quickSlots").innerHTML=Kn.map((n,e)=>`<button class="quick-slot ${Ce===n?"active":""}" data-slot="${e}" aria-label="${e+1}\uBC88 ${Ue[n].name}"><kbd>${e+1}</kbd><b>${Ue[n].name.split(" ").slice(1).join(" ")}</b><small>${["\uC8FC\uBB34\uAE30","\uBCF4\uC870\uBB34\uAE30","\uADFC\uC811"][e]}</small></button>`).join(""),R("quickSlots").querySelectorAll("button").forEach(n=>n.onclick=()=>el(+n.dataset.slot)))}function el(n){if(!Re||qe||kt)return;let e=Kn[n];e===Ce||!xt.canUseWeapon(e)||(Ce=e,ps=e,rn.set("weapon",e),ys(),Bi(Ue[e].name),Gt("select"))}function WM(){for(let n of["walletValue","hudCoins"])R(n)&&(R(n).textContent=xt.wallet.coins.toLocaleString()+" C");un==="arsenal"&&(ua(),tl())}function bm(){R("cameraBtn")&&(R("cameraBtn").textContent=(Li==="third"?"3\uC778\uCE6D":"1\uC778\uCE6D")+" \xB7 V")}function um(){!Re||qe||(Li=Li==="third"?"first":"third",rn.set("viewMode",Li),bm(),Gt("select"))}function XM(){if(!Re||qe||kt||Yt<Zu)return;let n=Ce;if(Zu=Yt+.9,n===Kn[2]){ga();return}el(2),sa={previous:n,weapon:Ce,attackAt:Yt+.28,returnAt:Yt+.72,attacked:!1}}function qM(){let n=sa;if(n){if(kt||Ce!==n.weapon){sa=null;return}Yt>=n.attackAt&&!n.attacked&&(n.attacked=!0,ga()),Yt>=n.returnAt&&(sa=null,xt.canUseWeapon(n.previous)&&(Ce=n.previous,ps=Ce,ys()))}}function YM(){let n=B.pos.clone().add(new w(0,B.height,0)),e=new w(0,0,-1).applyQuaternion(Je.quaternion).normalize();if(Li==="third"){to.set(Je.position,e),to.far=130;let t=to.intersectObjects(Jc,!1)[0]?.distance??130,i=ce==="online"?[...te.players.values()].filter(r=>r.id!==te.id&&r.health>0):gn.map(r=>({x:r.mesh.position.x,y:r.mesh.position.y,z:r.mesh.position.z,yaw:r.mesh.rotation.y,height:1.7}));for(let r of i)t=Math.min(t,Uo(Je.position.toArray(),e.toArray(),r).distance);let s=Je.position.clone().addScaledVector(e,t);e.copy(s.sub(n)).normalize()}return{origin:n,base:e}}function pa(){gs&&ce==="online"&&te.send({type:"draw",active:!1}),gs=!1,R("chargeMeter")&&(R("chargeMeter").hidden=!0)}function ju(){if(Ue[Ce].mechanic!=="arrow"){ga();return}if(!(!Re||qe||kt||Vt>0||wn>0||ce==="online"&&te.match?.phase!=="playing")){if(pt<=0){$s();return}gs=!0,od=performance.now(),R("chargeMeter").hidden=!1,ce==="online"&&te.send({type:"draw",active:!0})}}function Ko(n=!1){if(rt.down=!1,!gs)return;let e=(performance.now()-od)/1e3,t=Ue[Ce];if(gs=!1,R("chargeMeter").hidden=!0,n||e<.08){ce==="online"&&te.send({type:"draw",active:!1});return}ga(up(e,t))}function Em(n){B.vel.add(new w(...n));let e=Math.hypot(B.vel.x,B.vel.z);e>14.2&&(B.vel.x*=14.2/e,B.vel.z*=14.2/e),B.grounded=!1}function wm(){return gn.filter(n=>n.hp>0).map(n=>({id:n.id,x:n.mesh.position.x,y:n.mesh.position.y,z:n.mesh.position.z,height:1.7,yaw:n.mesh.rotation.y,health:n.hp,enemy:n})).concat({id:"local",x:B.pos.x,y:B.pos.y,z:B.pos.z,height:B.height,yaw:B.yaw,health:B.health})}function Qu(n){if(Oi.has(n.id))return;let e=n.kind==="rocket"?new mn(.075,.35,8):new Ir(.014,.014,.7,5);e.rotateX(Math.PI/2);let t=new Ze(e,new Pn({color:n.kind==="rocket"?16759400:13891704}));t.position.fromArray(n.position),t.lookAt(t.position.clone().add(new w(...n.velocity))),Bt.add(t),Oi.set(n.id,{mesh:t,position:n.position.slice(),velocity:n.velocity.slice(),gravity:n.gravity})}function $c(n){let e=Oi.get(n);e&&(Bt.remove(e.mesh),e.mesh.geometry.dispose(),e.mesh.material.dispose(),Oi.delete(n))}function Tm(n,e){let t=new Ze(new Bs(e,12,8),new Pn({color:16755798,transparent:!0,opacity:.28,wireframe:!0,depthWrite:!1}));t.position.fromArray(n),Bt.add(t),us.push({mesh:t,life:.28,max:.28}),ed(new w(...n),16760165)}function $M(n,e){let t=Ue[n.weapon],i=wm(),s=[];n.kind==="rocket"&&!e.expired?(s=pp(n,t,i,Ui.map(r=>({min:r.min.toArray(),max:r.max.toArray()})),e.target?.id),Tm(n.position,t.blastRadius)):e.target&&(s=[{target:e.target,damage:Br(t,e.head,n.travel)*n.power,head:e.head,distance:n.travel}]);for(let r of s){if(r.target.id==="local"){r.impulse&&Em(r.impulse),Nm(r.damage);continue}let o=r.target.enemy;!o||o.hp<=0||(o.hp-=r.damage,jc(o.mesh),ld(o),fd(r.damage,r.head,o.hp<=0,new w(...n.position),r.distance,o.hp),o.hp<=0&&Dm(o,r.head))}}function ZM(n){if(ce==="online"){for(let i of Oi.values())i.position=i.position.map((s,r)=>s+i.velocity[r]*n),i.velocity[1]-=i.gravity*n,i.mesh.position.fromArray(i.position),i.mesh.lookAt(i.mesh.position.clone().add(new w(...i.velocity)));return}let e=Ui.map(i=>({min:i.min.toArray(),max:i.max.toArray()})),t=Math.max(1,Math.ceil(n/.012));for(let i=0;i<t;i++)for(let s=aa.length-1;s>=0;s--){let r=aa[s],o=fp(r,n/t,e,wm()),a=Oi.get(r.id);a&&(a.mesh.position.fromArray(r.position),a.mesh.lookAt(a.mesh.position.clone().add(new w(...r.velocity)))),o.done&&(aa.splice(s,1),$c(r.id),$M(r,o))}}function Am(n,e=""){let t=n.cat;if(n.mechanic){let s=n.mechanic==="arrow"?"M65 8Q135 47 65 87L70 47zM68 44H180V49H68zM178 36L200 47L178 58z":n.mechanic==="rocket"?"M25 31H156L187 47L156 62H25zM71 59H88V84H71zM36 24H49V69H36z":{axe:"M40 85L30 78L115 5L125 15zM85 18Q130 -5 169 10L155 48L111 43z",halberd:"M40 85L30 78L115 5L125 15zM85 18Q130 -5 169 10L155 48L111 43z",hammer:"M45 86L34 76L110 11L121 22zM80 17L102 -2L158 53L136 72z",bat:"M35 80Q29 73 39 65L132 5Q149 -3 159 10Q166 24 150 34L47 83z",spear:"M21 88L15 81L142 20L146 26zM129 22L192 1L157 35z",trident:"M20 88L15 81L135 26L142 33zM114 18L173 1L161 17L130 29L141 44L180 21L192 22L143 59z",staff:"M20 87L14 76L183 2L190 13z",scythe:"M43 90L34 85L104 2L113 7zM106 5Q175 -3 195 58Q162 21 100 22z",crowbar:"M30 85L23 76L149 12Q181 -8 190 18L184 44L173 42L178 20Q173 9 159 21z"}[n.shape]||"M18 57L82 43L175 9L140 53L88 59L32 79z";return`<svg class="${e}" viewBox="0 0 210 95" fill="currentColor" aria-hidden="true"><path d="${s}"/></svg>`}return`<svg class="${e}" viewBox="0 0 210 95" fill="currentColor" aria-hidden="true"><path d="${t==="hg"?"M28 31h62v13H71v27H56V45H28z":t==="sr"?"M13 37h24l9-6h54v-8h19v10h30v5h50v5h-53l-10 9h-30v24H95V53H65L32 67H13z":t==="sg"?"M12 37h35l8-4h78v4h64v9h-69l-11 8H71L41 71H19l13-23H12z":t==="smg"?"M30 32h94l9 7h35v7h-37l-15 8h-14v25H87V53H63L38 66H21l16-24h-7z":t==="lmg"?"M10 34h27l11-8h81v9h64v7h-54l-13 10h-15v24H75V53H59L32 68H13l17-24H10z":"M12 35h30l7-8h73l9 9h63v6h-51l-17 11h-12l-4 24H95l-8-24H64L34 67H13l16-23H12z"}"/><path d="M65 23h35v4H65zM58 31h50v3H58z" opacity=".5"/><path d="M55 40h60v3H55zM51 46h26v3H51z" fill="#111b15" opacity=".6"/><path d="M115 36h9v5h-9z" fill="#d3f878"/></svg>`}function Ks(){let n=Ue[Ce];R("weaponNameHud").textContent=n.name,R("weaponTypeHud").textContent=Fr.find(e=>e.id===n.cat).en,R("ammoValue").innerHTML=n.mechanic==="melee"?"\uADFC\uC811":`${pt}<small>/ ${$t}</small>`,R("ammoValue").classList.toggle("empty-ammo",n.mechanic!=="melee"&&pt===0&&$t===0),R("ammoLabel").textContent=n.mechanic==="melee"?`\uC0AC\uAC70\uB9AC ${n.reach}m \xB7 \uCD08\uB2F9 ${n.rate}\uD68C`:`\uD0C4\uCC3D ${n.mag} \xB7 \uC608\uBE44 ${$t} \xB7 \uB0A8\uC740 \uCD1D ${pt+$t}\uBC1C`,R("weaponDamageHud").textContent=n.mechanic==="rocket"?`\uC9C1\uACA9 ${n.damage} \xB7 \uD3ED\uBC1C \uCD5C\uB300 ${n.splashDamage}`:`\uBAB8\uD1B5 ${n.damage}${n.pellets>1?" \xD7 "+n.pellets:""} \xB7 \uD5E4\uB4DC ${Br(n,!0)}${n.pellets>1?" \xD7 "+n.pellets:""}`}function no(n){if(n==="play"&&Re){la();return}document.querySelectorAll(".nav-link").forEach(e=>e.classList.toggle("active",e.dataset.tab===n)),R("playPage").hidden=n!=="play",R("arsenalPage").hidden=n!=="arsenal",R("recordsPage").hidden=n!=="records",n==="arsenal"&&(ua(),tl()),n==="records"&&ma(),un=n==="arsenal"?"arsenal":Re?"playing":"lobby"}function cd(){R("mapGrid").innerHTML=fa.map((n,e)=>`<button class="map-card ${e===hi?"selected":""}" data-map="${e}" aria-label="${n.ko} \uC804\uC7A5 \uC120\uD0DD" aria-pressed="${e===hi}"><img src="${_m[e]||""}" alt="${n.desc}"><span class="map-no">SECTOR 0${e+1}</span><span class="check">\u2713</span><span class="map-info"><strong>${n.name}</strong><span>${n.desc}</span></span></button>`).join(""),R("mapGrid").querySelectorAll("button").forEach(n=>n.onclick=()=>{Re||(ha(+n.dataset.map),cd(),Gt("select"))})}function ua(){R("weaponFilters").innerHTML=Fr.map(n=>`<button class="${zc===n.id?"active":""}" data-filter="${n.id}">${n.name}${n.id==="all"?" "+Ue.length:""}</button>`).join(""),R("weaponFilters").querySelectorAll("button").forEach(n=>n.onclick=()=>{zc=n.dataset.filter,ua()}),R("weaponGrid").innerHTML=Ue.filter(n=>zc==="all"||n.cat===zc).map(n=>`<button class="weapon-card ${n.id===ps?"selected":""} ${xt.canUseWeapon(n.id)?"":"locked"}" data-weapon="${n.id}" aria-label="${n.name} \uC0C1\uC138 \uC815\uBCF4"><span>${Fr.find(e=>e.id===n.cat).en}${n.oneShot?" \xB7 ONE SHOT":""}</span>${Am(n)}<strong>${n.name}</strong><small>${n.mechanic==="melee"?n.ko+" / "+n.reach+"m":n.mag+" + "+n.reserve+" \uBC1C"}</small><em class="weapon-price">${xt.canUseWeapon(n.id)?"\uBCF4\uC720 \uC911":Fo(n.id)+" C"}</em>${n.id===Ce?'<b class="equipped">\uC7A5\uCC29 \uC911</b>':""}</button>`).join(""),R("weaponGrid").querySelectorAll("button").forEach(n=>n.onclick=()=>{ps=+n.dataset.weapon,ua(),tl(),Gt("select")})}function tl(){let n=Ue[ps],e=Fr.find(i=>i.id===n.cat),t=xt.canUseWeapon(n.id);R("weaponDetail").innerHTML=`<div class="eyebrow">${e.en}${n.oneShot?" \xB7 ONE SHOT":""}</div><h2>${n.name.split(" ").slice(1).join(" ")}</h2><span class="weapon-sub">${n.name.split(" ")[0]} \xB7 ${n.ko||e.name}</span>${Am(n,"weapon-illustration")}<p>${n.oneShot?"\uBAB8\uD1B5 \uD55C \uBC1C\uB85C 200 HP\uB97C \uC81C\uC555\uD569\uB2C8\uB2E4. \uB2E8\uBC1C \uD0C4\uCC3D\uACFC \uAE34 \uC7AC\uC7A5\uC804\uC73C\uB85C \uC2E0\uC911\uD558\uAC8C \uBC1C\uC0AC\uD558\uC138\uC694.":n.mechanic==="melee"?"F\uB85C \uBE60\uB974\uAC8C \uADFC\uC811 \uACF5\uACA9 \uD6C4 \uC774\uC804 \uBB34\uAE30\uB85C \uB3CC\uC544\uAC11\uB2C8\uB2E4.":n.mechanic==="arrow"?"\uC67C\uCABD \uBC84\uD2BC\uC744 \uB2F9\uACBC\uB2E4\uAC00 \uB193\uC544 \uD654\uC0B4\uC744 \uBC1C\uC0AC\uD569\uB2C8\uB2E4.":"\uC11C\uB85C \uB2E4\uB978 \uBC18\uB3D9\xB7\uD53C\uD574\uB7C9\xB7\uC7A5\uD0C4\uC218\uB97C \uAC00\uC9C4 \uBB34\uAE30\uB97C \uAD6C\uB9E4\uD574 \uC7A5\uBE44\uD558\uC138\uC694."}</p><div class="damage-comparison"><div><span>\uBAB8\uD1B5</span><b>${n.damage}${n.pellets>1?" \xD7 "+n.pellets:""}</b></div><div><span>\uD5E4\uB4DC</span><b>${Br(n,!0)}${n.pellets>1?" \xD7 "+n.pellets:""}</b></div></div><p class="damage-note">\uD5E4\uB4DC \uBC30\uC728 \xD7${n.headMultiplier} \xB7 ${n.rangeStart}m\uBD80\uD130 \uD53C\uD574 \uAC10\uC18C<br>${n.mechanic==="melee"?"\uC0AC\uAC70\uB9AC "+n.reach+"m":n.rangeEnd+"m \uC774\uD6C4 \uAE30\uBCF8 \uD53C\uD574\uC758 "+Math.round(n.minDamage*100)+"%"}</p><div class="weapon-specs">${n.mechanic==="melee"?`<span>\uACF5\uACA9 \uAC04\uACA9<b>${(1/n.rate).toFixed(2)}\uCD08</b></span><span>\uC0AC\uAC70\uB9AC<b>${n.reach}m</b></span>`:`<span>\uD0C4\uCC3D<b>${n.mag}\uBC1C</b></span><span>\uC608\uBE44 \uD0C4\uC57D<b>${n.reserve}\uBC1C</b></span><span>\uCD08\uAE30 \uCD1D \uD0C4\uC57D<b>${n.mag+n.reserve}\uBC1C</b></span><span>\uC7AC\uC7A5\uC804<b>${n.reload.toFixed(2)}\uCD08</b></span>`}</div><div class="store-balance">\uBCF4\uC720 ${xt.wallet.coins.toLocaleString()} C \xB7 ${t?"\uAD6C\uB9E4 \uC644\uB8CC":Fo(n.id)+" C"}</div><button class="primary" id="equipBtn">${t?"\uC7A5\uCC29"+(Re?"\uD558\uACE0 \uBCF5\uADC0":""):"\uAD6C\uB9E4\uD558\uACE0 \uC7A5\uCC29 \xB7 "+Fo(n.id)+" C"}<span>\u2197</span></button>`,R("equipBtn").onclick=async()=>{try{xt.canUseWeapon(n.id)||await xt.buyWeapon(n.id),Ce=n.id,Kn[Mm(n)]=n.id,rn.set("quickSlots",Kn),rn.set("weapon",Ce),ys(),Gt("select"),Re?(R("lobby").hidden=!0,la()):(ua(),tl(),Qn(n.name+" \uC7A5\uCC29 \uC644\uB8CC"))}catch(i){Qn(i.message)}}}function ma(){let n=Fn.reduce((e,t)=>({kills:e.kills+t.kills,score:Math.max(e.score,t.score),wave:Math.max(e.wave,t.wave)}),{kills:0,score:0,wave:0});R("careerStats").innerHTML=[["\uCD1D \uCD9C\uACA9",Fn.length],["\uB204\uC801 \uCC98\uCE58",n.kills],["\uCD5C\uACE0 \uC810\uC218",n.score.toLocaleString()],["\uCD5C\uACE0 \uC6E8\uC774\uBE0C",String(n.wave).padStart(2,"0")]].map(([e,t])=>`<div><span>${e}</span><b>${t}</b></div>`).join(""),R("profileLevel").textContent=String(xt.profile.level).padStart(2,"0"),R("recordTable").innerHTML=Fn.length?`<div class="record-head"><span>\uB0A0\uC9DC</span><span>\uC804\uC7A5</span><span>\uBAA8\uB4DC</span><span>\uCC98\uCE58 / \uC810\uC218</span><span>\uC0DD\uC874 \uC2DC\uAC04</span></div>${Fn.slice().reverse().slice(0,12).map(e=>`<div class="record-row"><span>${new Date(e.date).toLocaleDateString("ko-KR",{month:"2-digit",day:"2-digit"})}</span><span>${fa[e.map].name}</span><span>${e.mode==="waves"?"\uC6E8\uC774\uBE0C "+e.wave:e.mode==="timed"?"\uD0C0\uC784 \uC5B4\uD0DD":e.mode==="online"?(/^[1-4]v[1-4]$/.test(e.matchMode||"")?e.matchMode:"\uC628\uB77C\uC778")+(e.outcome==="win"?" \uC2B9":e.outcome==="loss"?" \uD328":e.outcome==="draw"?" \uBB34":""):e.mode==="bots"?"\uBD07 \uC5F0\uC2B5":"\uACE0\uC815 \uD45C\uC801"}</span><span>${e.kills} / ${e.score.toLocaleString()}</span><span>${da(e.time)}</span></div>`).join("")}`:'<div class="empty-records">\uC544\uC9C1 \uC804\uD22C \uAE30\uB85D\uC774 \uC5C6\uC2B5\uB2C8\uB2E4. \uCCAB \uBC88\uC9F8 \uC804\uC7A5\uC5D0 \uB6F0\uC5B4\uB4E4\uC5B4 \uBCF4\uC138\uC694.</div>'}function da(n){return`${String(Math.floor(n/60)).padStart(2,"0")}:${String(Math.floor(n%60)).padStart(2,"0")}`}function Di(n,e="",t=3){R("announcement").innerHTML=n+(e?`<small>${e}</small>`:""),Hc=t,R("announcement").style.opacity=1}function io(n,e,t=.6){return Math.abs(n)>26||Math.abs(e)>26?!1:!Ui.some(i=>n>i.min.x-t&&n<i.max.x+t&&e>i.min.z-t&&e<i.max.z+t&&i.max.y>.5)}function ld(n){if(!n.tag)return;let e=n.tag.userData.canvas,t=e.getContext("2d");t.clearRect(0,0,256,64),t.fillStyle="#112018dd",t.fillRect(0,0,256,64),t.fillStyle="#e7f6d6",t.font="600 20px sans-serif",t.textAlign="center",t.fillText(`TARGET  ${Math.max(0,Math.ceil(n.hp))} / ${n.maxHp}`,128,27),t.fillStyle="#57644b",t.fillRect(20,43,216,5),t.fillStyle="#d3f878",t.fillRect(20,43,216*Math.max(0,n.hp/n.maxHp),5),n.tag.material.map.needsUpdate=!0}function hd(n=!1){let e,t;for(let a=0;a<100&&(e=Tt(-23,23),t=Tt(-23,13),!(io(e,t,.6)&&Math.hypot(e-B.pos.x,t-B.pos.z)>12));a++);if(io(e,t,.6)||(e=0,t=-22),n){let a=[[0,11],[-6,10],[6,10],[-6,-5],[4,-9],[3,-22]];for(let c=0;c<a.length;c++){let l=a[c];if(io(...l,.6)&&!gn.some(h=>h.training&&Math.hypot(h.mesh.position.x-l[0],h.mesh.position.z-l[1])<1)){[e,t]=l;break}}}let i=Kc(n?9157277:sn>3?10918523:8752769,!0);i.position.set(e,0,t);let s=ce==="bots"?{easy:.7,normal:1,hard:1.5}[Ys.difficulty]:1,r=100,o={id:crypto.randomUUID(),mesh:i,hp:r,maxHp:r,speed:n?0:(1.2+Math.min(sn*.16,1.8))*s,cooldown:Tt(1,3),phase:Tt(0,6),strafe:Math.random()>.5?1:-1,turn:0,flash:0,training:n,multiplier:s};if(i.traverse(a=>{a.isMesh&&(a.userData.enemy=o)}),n){let a=document.createElement("canvas");a.width=256,a.height=64;let c=new Io(a);c.colorSpace=jt;let l=new Ro(new Rr({map:c,transparent:!0,depthTest:!0}));l.position.set(0,2.6,0),l.scale.set(1.8,.45,1),l.userData.canvas=a,l.raycast=()=>{},i.add(l),o.tag=l,ld(o)}ge.add(i),gn.push(o)}function Rm(){let n=Math.min(3+sn*2,16);for(let e=0;e<n;e++)hd();Qr=0,R("waveLabel").textContent="WAVE "+String(sn).padStart(2,"0"),Di("WAVE "+String(sn).padStart(2,"0"),`${n}\uAE30\uC758 \uC801\uC744 \uC81C\uC555\uD558\uC138\uC694`)}function JM(){Qr=3,B.health=200,Ni+=sn*100,Di("SECTOR CLEAR",`\uC6E8\uC774\uBE0C ${sn} \uC644\uB8CC \xB7 \uCCB4\uB825 200 \uD68C\uBCF5`,2.7),xt.rewardWave(sn,Bn).then(n=>{n&&Bi("\uC6E8\uC774\uBE0C \uBCF4\uC0C1 +"+n+" C \xB7 \uCCB4\uB825 200 \uD68C\uBCF5")}).catch(n=>Qn(n.message)),oo()}function Wc(n=null){ad(),Sm(),sa=null,Zu=0;let e=typeof n=="string"?n:R("modeSelect").value;if(e!=="online"&&te.leave(),ce=e,ce==="online"&&(hi=Ju.map),_s.clear(),xs.clear(),ds=null,ha(hi),Nn=Kc(9218471),ge.add(Nn),On.visible=!1,Re=!0,qe=!1,un="playing",Yt=0,Bn=0,Ni=0,sn=1,Qr=0,ra=[],kt=!1,xm=0,ms=[],rd=0,jn=0,kn=0,Gc=0,bn=null,qc=!1,Jr="",R("resultProgress").hidden=!0,R("resultStats").classList.remove("match-result-stats"),R("retryBtn").innerHTML="\uB2E4\uC2DC \uB3C4\uC804 <span>\u2192</span>",R("restartBtn").innerHTML=ce==="online"?"\uACBD\uAE30 \uBAA8\uB4DC \uB2E4\uC2DC \uC120\uD0DD <span>\u21BB</span>":"\uC804\uD22C \uB2E4\uC2DC \uC2DC\uC791 <span>\u21BB</span>",Ys={count:Number(R("botCount").value),difficulty:R("botDifficulty").value,invincible:R("botInvincible").checked},B.pos.set(0,0,19),B.vel.set(0,0,0),B.yaw=0,B.pitch=0,B.height=1.7,B.health=200,B.jumps=0,B.grounded=!0,B.slide=0,B.slideCooldown=0,cs=0,$r=0,wn=.3,Ct=!1,Ku=0,ym(),ce==="online"){let t=Ju.self;B.pos.set(t.x,t.y,t.z),B.yaw=t.yaw,B.health=t.health,Bn=t.kills,Ni=Bn*100,bn=t.team}if(ys(),yt.clear(),rt.down=!1,R("movementState").textContent="OPERATOR ONLINE",R("killFeed").replaceChildren(),R("lobby").hidden=!0,R("hud").hidden=!1,R("pauseOverlay").hidden=!0,R("resultOverlay").hidden=!0,R("onlineScoreboard").hidden=!0,document.body.classList.add("playing"),document.body.classList.toggle("online-game",ce==="online"),R("onlineHud").hidden=ce!=="online",R("touchUi").hidden=!li,R("refillAmmo").hidden=!["bots","training"].includes(ce),R("hudMode").style.color="var(--lime)",R("hudMode").textContent={waves:"WAVE SURVIVAL",timed:"TIME ATTACK",training:"TARGET RANGE",bots:"AI BOT PRACTICE",online:"ONLINE DEATHMATCH"}[ce],R("pauseOverlay").querySelector("p").textContent=ce==="online"?"\uC628\uB77C\uC778 \uACBD\uAE30\uB294 \uACC4\uC18D\uB429\uB2C8\uB2E4. \uACBD\uAE30 \uC911 \uB098\uAC00\uBA74 \uAE30\uAD8C\uD328\uAC00 \uAE30\uB85D\uB429\uB2C8\uB2E4.":"\uB2E4\uC2DC \uB6F0\uC5B4\uB4E4 \uC900\uBE44\uAC00 \uB418\uC168\uB098\uC694?",bm(),ce==="waves")xt.beginWaves(),Rm();else if(ce==="online")R("waveLabel").textContent="WAITING",Di("TEAM LOBBY",`ROOM ${te.room} \xB7 \uC778\uC6D0\uC774 \uBAA8\uC774\uBA74 \uC790\uB3D9\uC73C\uB85C \uC2DC\uC791\uD569\uB2C8\uB2E4`);else{let t=ce==="bots"?Ys.count:6;for(let i=0;i<t;i++)hd(ce==="training");R("waveLabel").textContent=ce==="training"?"TARGET RANGE":ce==="bots"?"BOT PRACTICE":"03:00",Di(ce==="training"?"TARGET RANGE":ce==="bots"?"BOT PRACTICE":"TIME ATTACK",ce==="training"?"\uBAB8\uD1B5\xB7\uD5E4\uB4DC \uD53C\uD574\uB7C9 \uBE44\uAD50 \xB7 \uD45C\uC801 100 HP":ce==="bots"?`${t}\uAE30 AI \uBD07 \xB7 ${{easy:"\uC26C\uC6C0",normal:"\uBCF4\uD1B5",hard:"\uC5B4\uB824\uC6C0"}[Ys.difficulty]} \xB7 ${Ys.invincible?"\uBB34\uC801 ON":"\uC2E4\uC804 \uCCB4\uB825"}`:"3\uBD84 \uC548\uC5D0 \uCD5C\uB300\uD55C \uB9CE\uC740 \uC801\uC744 \uCC98\uCE58\uD558\uC138\uC694")}oo(),ud()}function Fi(){document.body.classList.toggle("mouse-look",Re&&!qe&&un==="playing"&&!li)}function ca(){ta=!1,Zc=!0,rt.position=null,Fi(),Re&&!qe&&!sm&&(sm=!0,Qn("\uB9C8\uC6B0\uC2A4 \uC774\uB3D9\uC73C\uB85C \uC870\uC900 \xB7 \uAC00\uC7A5\uC790\uB9AC\uC5D0\uC11C 360\xB0 \uC5F0\uC18D \uD68C\uC804 \xB7 ESC \uBA54\uB274"))}function KM(){if(ta=!1,rt.position=null,document.pointerLockElement===R("world")){if(!Re||qe||un!=="playing"){document.exitPointerLock(),Fi();return}Zc=!1}else Re&&!qe&&!li&&ca();Fi()}function ud(){if(Fi(),li||!Re||qe||ta||document.pointerLockElement===R("world"))return;rt.position=null;let n=R("world");if(!n.requestPointerLock){ca();return}ta=!0;try{n.requestPointerLock()?.then(()=>{ta=!1,Fi()},ca)}catch{ca()}}function jM(n){if(!Re||qe||li)return;let e=!!document.pointerLockElement;if(!e&&!Zc)return;if(!e&&n.target!==R("world")){rt.position=null;return}let[t,i]=gp(rt,n,e);Cm(t,i)}function Cm(n,e){let t=.002*ft.sensitivity*(Ct?.55:1);rt.dx+=n,rt.dy+=e,B.yaw-=n*t,B.pitch=ci(B.pitch-e*t,-1.45,1.45)}function Im(){!Re||qe||(pa(),qe=!0,un="paused",Fi(),yt.clear(),rt.down=!1,rt.position=null,Ct=!1,document.pointerLockElement&&document.exitPointerLock(),R("pauseOverlay").hidden=!1)}function la(){Re&&(qe=!1,un="playing",R("pauseOverlay").hidden=!0,R("lobby").hidden=!0,R("hud").hidden=!1,yt.clear(),rt.down=!1,wn=.2,ud())}function Pm(){if(ce==="online")return;let n={id:crypto.randomUUID?.()||String(Date.now())+Math.random().toString(36).slice(2),date:Date.now(),map:hi,mode:ce,kills:Bn,score:Ni,wave:sn,time:Math.floor(Yt)};Fn.push(n),Fn=Fn.slice(-200),rn.set(xt.account?"records:"+xt.account.username:"records",Fn),xt.saveRecord(n),ma()}function ea(n=!0){Re&&n&&Pm(),te.leave(),Re=!1,qe=!0,un="lobby",Fi(),document.pointerLockElement&&document.exitPointerLock(),yt.clear(),rt.down=!1,Ct=!1,R("pauseOverlay").hidden=!0,R("resultOverlay").hidden=!0,R("hud").hidden=!0,R("lobby").hidden=!1,document.body.classList.remove("playing"),ha(hi),no("play"),cd()}function Lm(n=!1){Re&&(qe=!0,un="result",Fi(),yt.clear(),rt.down=!1,document.pointerLockElement&&document.exitPointerLock(),Pm(),R("resultOverlay").hidden=!1,R("resultTitle").textContent=ce==="timed"?"\uC791\uC804 \uC644\uB8CC.":ce==="bots"?"\uD6C8\uB828 \uC885\uB8CC.":"\uB2E4\uC74C \uC804\uC120\uC73C\uB85C.",R("resultMessage").textContent=ce==="timed"?"3\uBD84\uC758 \uC804\uD22C, \uB2F9\uC2E0\uC758 \uAE30\uB85D\uC774 \uB0A8\uC558\uC2B5\uB2C8\uB2E4.":ce==="bots"?`${Bn}\uAE30\uC758 AI \uBD07\uC744 \uC81C\uC555\uD588\uC2B5\uB2C8\uB2E4. \uC124\uC815\uC744 \uBC14\uAFB8\uC5B4 \uB2E4\uC2DC \uC5F0\uC2B5\uD574 \uBCF4\uC138\uC694.`:`${sn}\uBC88\uC9F8 \uC6E8\uC774\uBE0C\uAE4C\uC9C0 \uBC84\uD17C\uC2B5\uB2C8\uB2E4. \uB2E4\uC2DC \uD55C \uBC88 \uD55C\uACC4\uB97C \uB118\uC5B4\uBCF4\uC138\uC694.`,R("resultStats").innerHTML=[["\uCC98\uCE58",Bn],["\uC810\uC218",Ni.toLocaleString()],["\uC0DD\uC874 \uC2DC\uAC04",da(Yt)]].map(([e,t])=>`<span>${e}<b>${t}</b></span>`).join(""))}function $s(){let n=Ue[Ce];if(!(!Re||qe||kt||Vt>0||pt===n.mag||n.mechanic==="melee")){if($t<=0){wn<=0&&(Bi(ce==="bots"||ce==="training"?"\uD0C4\uC57D \uC18C\uC9C4 \xB7 T \uD0C4\uC57D \uBCF4\uCDA9":"\uD0C4\uC57D \uC18C\uC9C4 \xB7 \uB2E4\uB978 \uBB34\uAE30\uB97C \uC120\uD0DD\uD558\uC138\uC694"),Gt("select"),wn=.4);return}pa(),Vt=n.reload,Ct=!1,ce==="online"&&(kn=++rd,te.send({type:"reload",seq:kn})),Gt("reload"),R("reloadHint").textContent="\uC7AC\uC7A5\uC804 \uC911\u2026"}}function QM(){if(ce==="online"){Vt=.001;return}let n=mp(Ue[Ce],pt,$t);pt=n.ammo,$t=n.reserve,_s.set(Ce,pt),xs.set(Ce,$t),Vt=0,Ks(),R("reloadHint").innerHTML="R \uC7AC\uC7A5\uC804 \xB7 1~3 \uBB34\uAE30 \uC804\uD658 \xB7 B \uBB34\uAE30\uACE0",Gt("reload")}function dm(){!Re||qe||!["bots","training"].includes(ce)||(_s.clear(),xs.clear(),ds=null,ys(!1),Bi("\uBAA8\uB4E0 \uD6C8\uB828 \uD0C4\uC57D \uBCF4\uCDA9 \uC644\uB8CC"),Gt("reload"))}function fm(){!Re||qe||kt||(B.jumpBuffer=.14)}function pm(){!Re||qe||kt||hp(B)&&(Bi("SLIDE"),Gt("slide"))}function Bi(n){R("pickupNotice").textContent=n,R("pickupNotice").style.opacity=1,Vc=1.1}function dd(n,e,t=16767895,i=.065){let s=new Ft().setFromPoints([n.clone(),e.clone()]),r=new Cr(s,new Os({color:t,transparent:!0,opacity:.8}));Bt.add(r),us.push({mesh:r,life:i,max:i})}function ed(n,e){for(let t=0;t<3;t++){let i=new Ze(new Bs(.035,4,4),new Pn({color:e}));i.position.copy(n),Bt.add(i),us.push({mesh:i,life:.22,max:.22,vel:new w(Tt(-2,2),Tt(1,3),Tt(-2,2))})}}function fd(n,e,t,i,s,r){ia=t?.25:.16,R("hitmarker").classList.toggle("kill",t),R("hitmarker").classList.toggle("head",e);let o=document.createElement("span");o.className="damage-number"+(e?" head":"")+(t?" lethal":""),o.textContent=(e?"\u2316 ":"")+Math.round(n*10)/10,R("damageNumbers").append(o),Js.length>=16&&Js.shift().node.remove(),Js.push({node:o,point:i.clone(),life:1,max:1}),R("lastHit").hidden=!1,R("lastHit").classList.toggle("head",e),R("lastHit").innerHTML=`<span>${e?"HEADSHOT":"BODY HIT"}${t?" \xB7 ELIMINATED":""}</span><b>${Math.round(n*10)/10}<small> DMG</small></b><em>${s.toFixed(1)}m \xB7 \uB0A8\uC740 \uCCB4\uB825 ${Math.max(0,Math.ceil(r))}</em>`,Gt(t?"kill":"hit")}function ga(n=1){if(!Re||qe||kt||ce==="online"&&te.match?.phase!=="playing"||Vt>0||wn>0)return;if(pt<=0){$s();return}let e=Ue[Ce];e.mechanic!=="melee"&&pt--,jr=e.mechanic==="melee"?e.swingTime||.28:0,wn=1/e.rate,Ku++,cs=Math.min(.24,cs+e.recoil*(Ct?.65:1)),et.recoilSide+=e.sideRecoil*(Ku%3===0?-1:1),et.kickVelocity+=e.kick*54,Kr=!e.mechanic||e.mechanic==="rocket"?.045:0,En.rotation.z=Math.random()*6,En.visible=!0,hs.intensity=5,Gt("shot"),Je.updateMatrixWorld();let{origin:t,base:i}=YM();if(Nn&&Yc(Nn),ce==="online"){Bm();let o=++xm;ms.push(o),te.send({type:"shoot",dir:i.toArray(),aim:Ct,seq:o}),Ks(),pt<=0&&setTimeout(()=>{Re&&!qe&&pt===0&&$s()},260);return}if(e.projectileSpeed){let o=dp("local-"+ ++IM,"local",e,t.toArray(),i.toArray(),n);aa.push(o),Qu(o),Ks(),pt<=0&&setTimeout(()=>{Re&&!qe&&pt===0&&$s()},180);return}let s=ap(i.toArray(),e,{aim:Ct,grounded:B.grounded,speed:B.speed,crouched:B.height<1.4}),r=new Map;for(let o=0;o<s.length;o++){let a=new w(...s[o]);to.set(t,a),to.far=130;let c=to.intersectObjects(Jc,!1)[0],l=Math.min(c?.distance??130,e.reach||130),h=null,f=!1;for(let u of gn){if(u.hp<=0)continue;let g=Uo(t.toArray(),s[o],{x:u.mesh.position.x,y:u.mesh.position.y,z:u.mesh.position.z,yaw:u.mesh.rotation.y,height:1.7});g.distance<l&&(l=g.distance,h=u,f=g.head)}let d=t.clone().addScaledVector(a,l);if(h){let u=r.get(h)||{amount:0,head:!1,point:d,distance:l};u.amount+=Br(e,f,l),u.head||=f,r.set(h,u),o<3&&ed(d,f?13891704:16763259)}else c&&c.distance<=(e.reach||130)&&o<2&&ed(d,15260592);if(o<2&&e.mechanic!=="melee"){let u=t.clone().addScaledVector(a,.9).add(new w(.12,-.14,0).applyQuaternion(Je.quaternion));dd(u,d,e.cat==="sr"?14155703:16770733)}}for(let[o,a]of r){o.hp-=a.amount,jc(o.mesh),ld(o);let c=o.hp<=0;fd(a.amount,a.head,c,a.point,a.distance,o.hp),c&&Dm(o,a.head)}Ks(),pt<=0&&setTimeout(()=>{Re&&!qe&&pt===0&&$s()},260)}function Dm(n,e){let t=gn.indexOf(n);if(t<0)return;gn.splice(t,1),NM(n.mesh),Bn++;let i=(e?150:100)+sn*10;Ni+=i,B.health=Math.min(200,B.health+5),ia=.23;let s=document.createElement("div");s.innerHTML=`<b>${e?"HEADSHOT":"ELIMINATED"}</b> SENTINEL \xB7 +${i}`,R("killFeed").prepend(s),setTimeout(()=>s.remove(),3100),Bi(e?`HEADSHOT +${i} \xB7 HP +5`:`ELIMINATION +${i} \xB7 HP +5`),ce!=="waves"&&ra.push(Yt+1),oo()}function e1(n,e){let t=e.clone().sub(n),i=t.length(),s=new ts(n,t.normalize());return!Ui.some(r=>{let o=s.intersectBox(r,new w);return o&&o.distanceTo(n)<i-.5})}function Nm(n){B.health<=0||(Zs=.8,Gt("hurt"),!(ce==="training"||ce==="bots"&&Ys.invincible)&&(B.health=Math.max(0,B.health-n),Zs=.8,B.land=.05,oo(),B.health<=0&&Lm()))}function t1(n){for(let e of gn){let t=Math.atan2(B.pos.y+B.height-(e.mesh.position.y+1.22),Math.max(1,B.pos.distanceTo(e.mesh.position)));ro(e.mesh,n,-t),e.phase+=n*(e.speed*3+1);let i=CM.copy(B.pos).sub(e.mesh.position),s=i.length(),r=Math.atan2(i.x,i.z),o=r-e.mesh.rotation.y;for(;o>Math.PI;)o-=Math.PI*2;for(;o<-Math.PI;)o+=Math.PI*2;if(e.mesh.rotation.y+=o*Math.min(1,n*5),!e.training){let a=0,c=0;s>7?(i.normalize(),a=i.x*e.speed*n,c=i.z*e.speed*n):s<4?(i.normalize(),a=-i.x*e.speed*n,c=-i.z*e.speed*n):(a=Math.cos(r)*e.strafe*e.speed*n*.5,c=-Math.sin(r)*e.strafe*e.speed*n*.5);let l=e.mesh.position,h=!1;if(io(l.x+a,l.z,.45)&&(l.x+=a,h=!0),io(l.x,l.z+c,.45)&&(l.z+=c,h=!0),!h&&s>7){e.turn-=n;let f=Math.cos(r)*e.strafe*e.speed*n,d=-Math.sin(r)*e.strafe*e.speed*n;io(l.x+f,l.z+d,.45)?(l.x+=f,l.z+=d):e.turn<=0&&(e.strafe*=-1,e.turn=1)}if(e.mesh.userData.legs.forEach((f,d)=>f.rotation.x=Math.sin(e.phase+d*Math.PI)*.37),e.mesh.position.y=Math.abs(Math.sin(e.phase))*.035,e.cooldown-=n,e.cooldown<0&&s<35){let f=l.clone().add(new w(0,1.3,0)),d=B.pos.clone().add(new w(0,B.height-.2,0));if(e1(f,d)){Yc(e.mesh),e.mesh.updateMatrixWorld(!0);let u=e.mesh.userData.gun.localToWorld(new w(0,0,.78));dd(u,d,16743253,.12);let g=(B.slide>0?.16:B.speed>6?.4:.65)*(e.multiplier||1);if(Math.random()<g&&s>2.1&&(Nm(ci(3+sn*.45,3,8)*(e.multiplier||1)),qe))break;e.cooldown=Tt(1.8,3.4)/(1+Math.min(sn*.04,.5))/(e.multiplier||1)}else e.cooldown=.4}}}}function n1(n){if(qM(),Zc&&!document.pointerLockElement&&!li){let[U,A]=_p(rt,innerWidth,innerHeight,n);Cm(U,A)}jr=Math.max(0,jr-n);let e=Ue[Ce],t={right:(yt.has("KeyD")?1:0)-(yt.has("KeyA")?1:0)+ls.x,forward:(yt.has("KeyW")?1:0)-(yt.has("KeyS")?1:0)-ls.y,aim:Ct,crouch:yt.has("KeyC")||yt.has("ControlLeft"),sprint:yt.has("ShiftLeft")||yt.has("ShiftRight")||li};for(let U of lp(B,t,e,Ui,n))et.landVelocity+=U.impulse,U.type==="jump"?(Gt("jump"),U.double&&Bi("DOUBLE JUMP")):U.type==="land"&&Gt("land");let i=(yt.has("KeyD")?1:0)-(yt.has("KeyA")?1:0)+ls.x,s=(yt.has("KeyW")?1:0)-(yt.has("KeyS")?1:0)-ls.y,r=(yt.has("KeyC")||yt.has("ControlLeft"))&&B.slide<=0,o=(yt.has("ShiftLeft")||yt.has("ShiftRight")||li)&&s>.1&&!Ct&&!r;B.speed=Math.hypot(B.vel.x,B.vel.z),B.bob+=n*B.speed*(o?1.8:1.6),B.stepOffset=ln(B.stepOffset,0,18,n),[B.land,et.landVelocity]=lm(B.land,et.landVelocity,0,20,n),[$r,et.kickVelocity]=lm($r,et.kickVelocity,0,24,n),cs=ln(cs,0,e.recovery,n),et.recoilSide=ln(et.recoilSide,0,e.recovery,n),et.ads=ln(et.ads,Ct?1:0,4/e.adsTime,n),et.strafe=ln(et.strafe,i,10,n),et.swayX=ln(et.swayX,ci(rt.dx*.001,-.035,.035),12,n),et.swayY=ln(et.swayY,ci(rt.dy*.001,-.025,.025),12,n),rt.dx=0,rt.dy=0;let a=Math.min(1,B.speed/7),c=ft.shake?1:0,l=c&&B.grounded&&B.slide<=0?Math.sin(B.bob)*.022*a*(1-et.ads*.85):0;Je.position.set(B.pos.x,B.pos.y+B.height+l-B.land*c-B.stepOffset,B.pos.z);let h=c*(-et.strafe*.014*a+Math.sin(B.bob*.5)*.004*a+(B.slide>0?-.025:0));if(am.set(B.pitch-cs,B.yaw+et.recoilSide,h,"YXZ"),Je.quaternion.setFromEuler(am),Li==="third"){let U=[B.pos.x,B.pos.y+B.height,B.pos.z],A=new w(0,0,-1).applyQuaternion(Je.quaternion),C=xp(U,B.yaw,B.pitch,Ui.map(D=>({min:D.min.toArray(),max:D.max.toArray()})),Ct?2.2:3.8);Je.position.fromArray(C),Je.lookAt(new w(...U).addScaledVector(A,40))}Nn&&(Nn.visible=Li==="third"&&!Ct&&!kt&&Je.position.distanceTo(B.pos)>1.5,Nn.position.copy(B.pos),Nn.rotation.y=B.yaw+Math.PI,Nn.scale.y=B.height/1.7,Nn.userData.legs.forEach((U,A)=>U.rotation.x=B.grounded?Math.sin(B.bob+A*Math.PI)*Math.min(.6,B.speed*.055):.35),ro(Nn,n,-B.pitch));let f=gs?ci((performance.now()-od)/1e3/e.chargeTime,0,1):0;if(gs&&(R("chargeFill").style.width=f*100+"%",R("chargeLabel").textContent="\uB2F9\uAE40 "+Math.round(f*100)+"% \xB7 \uB193\uC544\uC11C \uBC1C\uC0AC"),qt.warhead&&(qt.warhead.visible=pt>0),qt.string){let U=qt.string.geometry.attributes.position;U.setZ(1,.12+f*.35),U.needsUpdate=!0,qt.string.geometry.computeBoundingSphere(),qt.arrow.visible=pt>0,qt.arrow.position.z=f*.3,qt.drawHand.position.z=.14+f*.35}let d=ft.fov+(o?7:0)+(B.slide>0?4:0),u=e.cat==="sr"?28:ft.fov*.72;Je.fov=ln(Je.fov,Qo(d,u,et.ads),12,n),Je.updateProjectionMatrix();let g=c*a*(1-et.ads*.9),_=Vt>0?1-Vt/e.reload:0,m=Math.sin(_*Math.PI),p=o&&!Ct?1:0,T=Qo(.32,e.mechanic==="arrow"?.16:0,et.ads)-et.swayX*.6+Math.sin(B.bob*.5)*.012*g,b=Qo(-.3,e.mechanic==="arrow"?-.1:e.cat==="hg"?-.077:e.cat==="sr"?-.203:-.175,et.ads)-p*.07+Math.cos(B.bob)*.009*g-m*.18-B.land*.35;ae.position.set(ln(ae.position.x,T,18,n),ln(ae.position.y,b,18,n)-na*.25,-.95+$r),ae.rotation.set(-cs*.7-et.swayY+m*.7+(B.grounded?0:-.04),ln(ae.rotation.y,p*.22-et.swayX+et.recoilSide*2,15,n),ln(ae.rotation.z,-p*.24-et.strafe*.025-m*.48+(jr>0?-Math.sin((1-jr/(e.swingTime||.28))*Math.PI)*1.3:0)+(B.slide>0?-.12:0),12,n)),na=Math.max(0,na-n*2),qt.mag.position.y=-.26-m*.3,qt.bolt&&(qt.bolt.position.z=.06+$r*.6),so.fov=Qo(70,55,et.ads),so.updateProjectionMatrix();let M=e.cat==="sr"&&et.ads>.92;R("scopeOverlay").hidden=!M,R("crosshair").classList.toggle("scoped",M),B.speed>1&&B.grounded&&B.slide<=0&&Xc-om>(o?.28:.42)&&(Gt(o?"run":"step"),om=Xc),R("movementState").textContent=B.slide>0?"SLIDING // LOW PROFILE":B.grounded?o?"SPRINTING":r?"CROUCHING":"OPERATOR ONLINE":B.jumps===2?"DOUBLE JUMP":"AIRBORNE",R("speedBar").style.width=ci(B.speed/14*100,0,100)+"%",R("crosshair").classList.toggle("aiming",Ct),R("crosshair").style.setProperty("--turn",ci(-et.swayX*320,-11,11)+"deg"),R("crosshair").style.setProperty("--gap",Math.min(18,Tu(e,{aim:Ct,grounded:B.grounded,speed:B.speed,crouched:r})*600+cs*80)+"px")}function oo(){R("healthValue").textContent=Math.ceil(B.health),R("healthBar").style.width=ci(B.health/200*100,0,100)+"%",R("healthBar").style.background=B.health<200*.3?"#ff8d6a":"var(--lime)",R("killsValue").textContent=String(Bn).padStart(2,"0"),R("scoreValue").textContent=Ni.toLocaleString()+" PTS",R("enemyLabel").textContent=ce==="online"?`${te.players.size} / 8\uBA85 \xB7 \uCC98\uCE58 \uD6C4 3\uCD08 \uB4A4 \uBD80\uD65C`:ce==="training"?"\uBAB8\uD1B5\xB7\uD5E4\uB4DC \uD53C\uD574\uB7C9 \uBE44\uAD50 \xB7 \uD45C\uC801 100 HP":ce==="bots"?`AI \uBD07 ${gn.length}\uAE30 \xB7 ${Ys.invincible?"\uBB34\uC801 ON":"\uC2E4\uC804 \uCCB4\uB825"}`:`\uC801 ${gn.length}\uAE30 \uB0A8\uC74C`,R("timerLabel").textContent=da(Yt),ce==="timed"&&(R("waveLabel").textContent=da(Math.max(0,180-Yt))),ce==="online"&&l1()}var i1=R("minimap").getContext("2d");function Um(){let n=i1;n.clearRect(0,0,180,180),n.fillStyle="#0e1c15",n.globalAlpha=.7,n.fillRect(0,0,180,180),n.globalAlpha=1;let e=2.65,t=90,i=90;n.strokeStyle="#a2bd8222",n.lineWidth=1;for(let r=0;r<7;r++)n.beginPath(),n.moveTo(r*30,0),n.lineTo(r*30,180),n.stroke(),n.beginPath(),n.moveTo(0,r*30),n.lineTo(180,r*30),n.stroke();n.fillStyle="#a8ba8f40";for(let r of Ui)n.fillRect(t+r.min.x*e,i+r.min.z*e,(r.max.x-r.min.x)*e,(r.max.z-r.min.z)*e);n.fillStyle="#f7a474";let s=ce==="online"?[...te.players.values()].filter(r=>r.id!==te.id&&r.health>0).map(r=>({x:r.x,z:r.z,team:r.team})):gn.map(r=>r.mesh.position);for(let r of s)n.fillStyle=ce==="online"&&r.team===bn?"#d3f878":"#f7a474",n.beginPath(),n.arc(t+r.x*e,i+r.z*e,2.6,0,Math.PI*2),n.fill();n.save(),n.translate(t+B.pos.x*e,i+B.pos.z*e),n.rotate(-B.yaw),n.fillStyle="#d3f878",n.beginPath(),n.moveTo(0,-6),n.lineTo(-4,4),n.lineTo(0,2),n.lineTo(4,4),n.closePath(),n.fill(),n.restore(),n.fillStyle="#a5b996",n.font="9px Barlow",n.fillText("N",87,12)}function mm(n=1){let e=Kn.indexOf(Ce);el((e+n+3)%3)}var li=matchMedia("(pointer:coarse)").matches,ls={x:0,y:0},os=null,$u=null;function gm(){if(Re){if(!qe){Bi("ESC \uBA54\uB274\uC5D0\uC11C \uBB34\uAE30\uACE0\uB97C \uC5EC\uC138\uC694");return}Im(),R("pauseOverlay").hidden=!0,R("hud").hidden=!0,R("lobby").hidden=!1,un="arsenal",ps=Ce,no("arsenal"),Qn("\uBB34\uAE30\uB97C \uC120\uD0DD\uD558\uACE0 \uC7A5\uCC29\uD558\uBA74 \uC804\uD22C\uC5D0 \uBCF5\uADC0\uD569\uB2C8\uB2E4")}}function s1(){u1(),R("modeSelect").onchange=()=>{R("botOptions").hidden=R("modeSelect").value!=="bots"},document.querySelectorAll("[data-tab]").forEach(t=>t.onclick=()=>no(t.dataset.tab)),R("heroArsenal").onclick=()=>no("arsenal"),R("deployBtn").onclick=Wc,R("recordPlay").onclick=()=>no("play"),R("settingsOpen").onclick=()=>{R("settingsOverlay").hidden=!1};for(let t of["helpOpen","controlsOpen"])R(t).onclick=()=>{R("helpOverlay").hidden=!1};document.querySelectorAll("[data-close]").forEach(t=>t.onclick=()=>{R(t.dataset.close).hidden=!0,jo()}),document.querySelectorAll(".modal-overlay").forEach(t=>t.addEventListener("click",i=>{i.target===t&&(t.id==="settingsOverlay"||t.id==="helpOverlay")&&(t.hidden=!0,jo())})),R("refillAmmo").onclick=dm,R("pauseBtn").onclick=()=>Qn("ESC \uD0A4\uB85C \uC804\uD22C \uBA54\uB274\uB97C \uC5FD\uB2C8\uB2E4"),R("cameraBtn").onclick=um,R("resumeBtn").onclick=la,R("pauseArsenal").onclick=gm,R("restartBtn").onclick=()=>{if(ce==="online"){let t=te.match;ea(),xt.openOnline({kind:t?.kind||"public",teamSize:t?.teamSize||1})}else Wc()},R("lobbyBtn").onclick=()=>ea(),R("retryBtn").onclick=()=>{if(ce==="online"&&qc){let t=te.match;ea(!1),xt.rematch(t?.kind||"public",t?.teamSize||1)}else Wc()},R("resultLobby").onclick=()=>ea(!1),R("sensitivity").value=ft.sensitivity,R("sensOut").textContent=ft.sensitivity.toFixed(1),R("fov").value=ft.fov,R("fovOut").textContent=ft.fov+"\xB0",R("volume").value=ft.volume,R("volumeOut").textContent=ft.volume+"%",R("music").value=ft.music,R("musicOut").textContent=ft.music+"%",R("shakeToggle").checked=ft.shake,R("shadowToggle").checked=ft.shadows;for(let t of["sensitivity","fov","volume","music"])R(t).oninput=()=>{ft[t]=+R(t).value,R(t==="sensitivity"?"sensOut":t==="fov"?"fovOut":t==="music"?"musicOut":"volumeOut").textContent=t==="sensitivity"?ft[t].toFixed(1):ft[t]+(t==="fov"?"\xB0":"%"),jo()};R("shakeToggle").onchange=()=>{ft.shake=R("shakeToggle").checked,jo()},R("shadowToggle").onchange=()=>{ft.shadows=R("shadowToggle").checked,Rt.shadowMap.enabled=ft.shadows,jo()},window.addEventListener("resize",td),document.addEventListener("contextmenu",t=>{Re&&t.preventDefault()}),window.addEventListener("keydown",t=>{if(["Space","KeyW","KeyA","KeyS","KeyD","ControlLeft"].includes(t.code)&&Re&&t.preventDefault(),t.code==="Escape"){if(!R("settingsOverlay").hidden){R("settingsOverlay").hidden=!0;return}if(!R("helpOverlay").hidden){R("helpOverlay").hidden=!0;return}if(Re&&un==="arsenal"){la();return}Re&&un!=="result"&&(qe?la():Im());return}!Re||qe||kt||(yt.add(t.code),t.repeat||(/^Digit[1-3]$/.test(t.code)&&el(Number(t.code.slice(-1))-1),t.code==="Space"&&fm(),(t.code==="KeyC"||t.code==="ControlLeft")&&pm(),t.code==="KeyV"&&um(),t.code==="KeyF"&&XM(),t.code==="KeyR"&&$s(),t.code==="KeyT"&&dm(),t.code==="KeyQ"&&mm(),t.code==="KeyB"&&gm()))}),window.addEventListener("keyup",t=>yt.delete(t.code)),window.addEventListener("blur",()=>{yt.clear(),Ko(!0),Ct=!1,rt.position=null}),document.addEventListener("visibilitychange",()=>{document.hidden&&(yt.clear(),Ko(!0),Ct=!1,rt.position=null)}),document.addEventListener("pointerlockchange",KM),document.addEventListener("pointerlockerror",ca),window.addEventListener("mousemove",jM),R("world").addEventListener("mouseleave",()=>{rt.position=null,Ko(),Ct=!1}),R("world").addEventListener("mousedown",t=>{!Re||qe||(ad(),t.button===0&&(rt.down=!0,ju(),document.pointerLockElement||ud()),t.button===2&&Ue[Ce].mechanic!=="melee"&&(Ct=!0))}),window.addEventListener("mouseup",t=>{t.button===0&&Ko(),t.button===2&&(Ct=!1)}),window.addEventListener("wheel",t=>{Re&&!qe&&(t.preventDefault(),na<=0&&mm(t.deltaY>0?1:-1))},{passive:!1});let n=R("joystick");n.addEventListener("pointerdown",t=>{qe||($u=t.pointerId,n.setPointerCapture(t.pointerId),e(t))}),n.addEventListener("pointermove",t=>{t.pointerId===$u&&e(t)});function e(t){let i=n.getBoundingClientRect(),s=(t.clientX-i.left-i.width/2)/40,r=(t.clientY-i.top-i.height/2)/40,o=Math.hypot(s,r);o>1&&(s/=o,r/=o),ls.x=s,ls.y=r,R("joystickKnob").style.transform=`translate(${s*32}px,${r*32}px)`}for(let t of["pointerup","pointercancel"])n.addEventListener(t,()=>{$u=null,ls.x=0,ls.y=0,R("joystickKnob").style.transform=""});R("world").addEventListener("pointerdown",t=>{!li||qe||(os={id:t.pointerId,x:t.clientX,y:t.clientY},R("world").setPointerCapture(t.pointerId))}),R("world").addEventListener("pointermove",t=>{!os||t.pointerId!==os.id||qe||(B.yaw-=(t.clientX-os.x)*.006*ft.sensitivity,B.pitch=ci(B.pitch-(t.clientY-os.y)*.006*ft.sensitivity,-1.45,1.45),os.x=t.clientX,os.y=t.clientY)}),R("world").addEventListener("pointerup",()=>os=null),R("touchJump").onpointerdown=t=>{t.preventDefault(),fm()},R("touchSlide").onpointerdown=t=>{t.preventDefault(),pm()},R("touchReload").onpointerdown=t=>{t.preventDefault(),$s()},R("touchFire").onpointerdown=t=>{t.preventDefault(),rt.down=!0,ju(),R("touchFire").setPointerCapture(t.pointerId)};for(let t of["pointerup","pointercancel"])R("touchFire").addEventListener(t,()=>Ko(t==="pointercancel"));R("world").style.touchAction="none"}function jo(){rn.set("settings",ft),Zr?.setLevels(ft.volume,ft.music)}function td(){let n=innerWidth,e=innerHeight;Rt.setSize(n,e),Je.aspect=n/e,Je.updateProjectionMatrix(),so.aspect=Math.max(1.4,n/e),so.updateProjectionMatrix()}function Om(n=0){let e=innerWidth<800;Je.fov=e?55:48,Je.position.set(e?18:20,7.8,24.5),Je.lookAt(e?3:1.5,2.8,-3),Je.position.x+=Math.sin(n*.1)*.3,Je.updateProjectionMatrix(),On&&(On.visible=!0,On.rotation.y=.55+Math.sin(n*.25)*.04,On.position.y=Math.sin(n*.9)*.014,On.userData.arms.forEach((t,i)=>t.rotation.x=Math.sin(n*.9+i)*.015))}function r1(n){UM(n);for(let e=us.length-1;e>=0;e--){let t=us[e];t.life-=n,t.life<=0?(Bt.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose(),us.splice(e,1)):(t.mesh.material.opacity=t.life/t.max,t.vel&&(t.vel.y-=12*n,t.mesh.position.addScaledVector(t.vel,n)))}Kr=Math.max(0,Kr-n),En.visible=Kr>0,hs.intensity=Kr>0?4:0;for(let e=Js.length-1;e>=0;e--){let t=Js[e];if(t.life-=n,t.life<=0){t.node.remove(),Js.splice(e,1);continue}let i=t.point.clone();i.y+=(1-t.life)*.75,i.project(Je),t.node.style.left=(i.x*.5+.5)*innerWidth+"px",t.node.style.top=(-i.y*.5+.5)*innerHeight+"px",t.node.style.opacity=i.z<1?Math.min(1,t.life*3):0}ia=Math.max(0,ia-n),R("hitmarker").style.opacity=ia>0?1:0,Zs=ln(Zs,0,7,n),R("damageFlash").style.opacity=Zs,Hc=Math.max(0,Hc-n),Hc===0&&(R("announcement").style.opacity=0),Vc=Math.max(0,Vc-n),Vc===0&&(R("pickupNotice").style.opacity=0)}function Fm(n){requestAnimationFrame(Fm);let e=Math.min((n-rm)/1e3,.07)||.016;if(rm=n,Xc+=e,Re){if(ce==="online"&&c1(e),!qe){if(Yt+=e,wn=Math.max(0,wn-e),Vt>0&&(Vt-=e,Vt<=0&&QM()),kt||(n1(e),rt.down&&Ue[Ce].auto&&ga(),rt.down&&Ue[Ce].mechanic==="arrow"&&!gs&&wn<=0&&Vt<=0&&ju()),ce==="online")Gc+=e,Gc>=.05&&(Gc=0,Bm());else{t1(e);for(let t=ra.length-1;t>=0;t--)ra[t]<=Yt&&(ra.splice(t,1),hd(ce==="training"))}ZM(e),r1(e),ce==="waves"&&!gn.length&&(Qr?(Qr-=e,Qr<=0&&(sn++,Rm())):JM()),ce==="timed"&&Yt>=180&&Lm(!0),oo(),Um()}Rt.autoClear=!0,Rt.render(Bt,Je),Rt.autoClear=!1,Rt.clearDepth(),ae.visible=yp(Li==="third",et.ads,kt),Rt.render(eo,so),Rt.autoClear=!0}else{Om(Xc);for(let t of sd)t.rotation.z+=e*.1;Rt.render(Bt,Je)}}async function o1(){try{Rt=new dc({canvas:R("world"),antialias:!0,alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:!0}),Rt.setPixelRatio(Math.min(devicePixelRatio,li?1.5:1.75)),Rt.outputColorSpace=jt,Rt.toneMapping=pu,Rt.toneMappingExposure=1.15,Rt.shadowMap.enabled=ft.shadows,Rt.shadowMap.type=fu,Bt=new Ao,Je=new Xt(85,innerWidth/innerHeight,.08,240),eo=new Ao,so=new Xt(70,innerWidth/innerHeight,.02,10),eo.add(new Lo(15990761,5463877,3));let n=new Do(16772558,2.5);n.position.set(-3,4,4),eo.add(n),td(),R("loadingText").textContent="4\uAC1C \uC804\uC7A5\uACFC "+Ue.length+"\uC885 \uBB34\uAE30 \uC900\uBE44 \uC911";let e=Rt.getSize(new Me),t=Rt.getPixelRatio();Rt.setPixelRatio(1),Rt.setSize(400,240,!1),Je.aspect=400/240;for(let i=0;i<4;i++)ha(i),On.visible=!1,Je.fov=53,Je.position.set(22,13,24),Je.lookAt(0,1,-5),Je.updateProjectionMatrix(),Rt.render(Bt,Je),_m.push(Rt.domElement.toDataURL("image/jpeg",.84));Rt.setPixelRatio(t),ha(0),Sm(),ys(),td(),cd(),ma(),s1(),Om(),Rt.render(Bt,Je),R("loading").classList.add("fade"),setTimeout(()=>R("loading").hidden=!0,700),requestAnimationFrame(Fm),window.vectorGame={get state(){return{state:un,combat:Re,paused:qe,map:hi,weapon:Ce,weaponCount:Ue.length,viewMode:Li,slots:Kn.slice(),coins:xt.wallet.coins,mapCount:fa.length,headDamage:Br(Ue[Ce],!0),bodyDamage:Ue[Ce].damage,kills:Bn,score:Ni,ammo:pt,reserveAmmo:$t,health:B.health,wave:sn,enemies:gn.length,position:B.pos.toArray(),yaw:B.yaw,pitch:B.pitch,speed:B.speed,grounded:B.grounded,slide:B.slide,time:Yt}},weapons:Ue.map(({id:i,name:s,cat:r,damage:o,headMultiplier:a,rate:c,mag:l,reserve:h,reach:f})=>({id:i,name:s,cat:r,damage:o,headMultiplier:a,rate:c,mag:l,reserve:h,reach:f}))}}catch(n){console.error(n),R("loading").innerHTML='<div class="loading-mark">V</div><b>VECTOR</b><p>3D \uD654\uBA74\uC744 \uC2DC\uC791\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.</p><span>WebGL\uC744 \uC9C0\uC6D0\uD558\uB294 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C \uD558\uB4DC\uC6E8\uC5B4 \uAC00\uC18D\uC744 \uCF1C\uACE0 \uB2E4\uC2DC \uC5F4\uC5B4\uC8FC\uC138\uC694.</span><button class="secondary" style="width:200px;margin-top:30px" onclick="location.reload()">\uB2E4\uC2DC \uC2DC\uB3C4 \u21BB</button>'}}o1();function Bm(){ce!=="online"||!Re||!te.connected||kt||te.send({type:"move",x:B.pos.x,y:B.pos.y,z:B.pos.z,yaw:B.yaw,pitch:B.pitch,height:B.height})}function nd(n){let e=Un.get(n);e&&(ge.remove(e.mesh),e.mesh.traverse(t=>{t.geometry?.dispose(),t.material?.map?(t.material.map.dispose(),t.material.dispose()):t.material?.userData.agentOwned&&t.material.dispose()}),Un.delete(n))}function a1(n){let e=te.players.get(n.id);e&&Object.assign(e,{x:n.x,y:n.y,z:n.z,yaw:n.yaw,height:1.7,health:200,respawnAt:0});let t=Un.get(n.id);t&&(t.wasAlive=!1)}function c1(n){for(let[e,t]of Un){let i=te.players.get(e);if(!i){nd(e);continue}let s=i.health>0,r=s&&t.wasAlive===!1;if(t.wasAlive=s,t.mesh.visible=s,!s)continue;let o=new w(i.x,i.y,i.z),a=r||t.mesh.position.distanceToSquared(o)>25,c=Math.hypot(i.x-t.mesh.position.x,i.z-t.mesh.position.z)>.015;a?(t.mesh.position.copy(o),t.mesh.rotation.y=i.yaw+Math.PI,t.mesh.scale.y=i.height/1.7,t.phase=0,t.mesh.userData.legs.forEach(h=>h.rotation.x=0),c=!1):t.mesh.position.lerp(o,1-Math.exp(-15*n));let l=i.yaw+Math.PI-t.mesh.rotation.y;for(;l>Math.PI;)l-=Math.PI*2;for(;l<-Math.PI;)l+=Math.PI*2;t.mesh.rotation.y+=l*(1-Math.exp(-14*n)),t.mesh.scale.y=ln(t.mesh.scale.y,i.height/1.7,12,n),t.phase+=n*11,t.mesh.userData.legs.forEach((h,f)=>h.rotation.x=ln(h.rotation.x,c?Math.sin(t.phase+f*Math.PI)*.4:0,12,n)),ro(t.mesh,n,-(i.pitch||0))}if(kt&&!qe&&te.match?.phase==="playing"){let e=te.players.get(te.id);if(e){let t=Math.max(1,Math.ceil((e.respawnAt-te.serverNow)/1e3));Di("RESPAWNING "+t,"3\uCD08 \uB4A4 \uC804\uC7A5\uC5D0 \uB2E4\uC2DC \uD22C\uC785\uB429\uB2C8\uB2E4",.2)}}}function id(n){let e=new Map;for(let t of[...Fn,...n])e.set(t.id||[t.date,t.mode,t.score].join("_"),t);Fn=[...e.values()].sort((t,i)=>t.date-i.date).slice(-200),rn.set(xt.account?"records:"+xt.account.username:"records",Fn),ma()}function l1(){let n=te.match;if(!n)return;let e=te.players.get(te.id);e&&(bn=e.team);let t=["BLUE","ORANGE"];R("hudMode").textContent=`${n.teamSize} VS ${n.teamSize} \xB7 ${t[bn??0]} TEAM`,R("hudMode").style.color=bn===1?"#ffb581":"#b5e0ff",R("onlineTeamHud").textContent=t[bn??0]+" TEAM",R("onlineTeamHud").style.color=bn===1?"#ffb581":"#b5e0ff";let i=[...te.players.values()].filter(r=>r.connected).length,s=n.phase;if(n.phase==="waiting")R("waveLabel").textContent=`WAITING ${i} / ${n.capacity}`,R("enemyLabel").textContent="\uC778\uC6D0\uC774 \uBAA8\uC774\uBA74 \uD3C9\uADE0 \uB808\uBCA8\uC744 \uB9DE\uCDB0 \uC790\uB3D9 \uC2DC\uC791",s+="_"+i,s!==Jr&&Di("WAITING FOR PLAYERS",`${i} / ${n.capacity}\uBA85 \xB7 \uBC29 \uCF54\uB4DC ${te.room}\uB85C \uCC38\uAC00\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4`,3);else if(n.phase==="countdown"){let r=Math.max(1,Math.ceil((n.startsAt-te.serverNow)/1e3));R("waveLabel").textContent="START IN "+r,R("enemyLabel").textContent=`\uD3C9\uADE0 Lv. ${n.averages[0].toFixed(1)} vs ${n.averages[1].toFixed(1)}`,s+="_"+r,s!==Jr&&Di(String(r),`${t[bn??0]} TEAM \xB7 ${n.teamSize}\uB300${n.teamSize}`,1.1)}else R("waveLabel").innerHTML=`<span class="blue-score">${String(n.scores[0]).padStart(2,"0")}</span><small> : </small><span class="orange-score">${String(n.scores[1]).padStart(2,"0")}</span>`,R("enemyLabel").textContent=`\uBAA9\uD45C ${n.scoreLimit}\uC810 \xB7 \uD3C9\uADE0 Lv. ${n.averages[0].toFixed(1)} vs ${n.averages[1].toFixed(1)}`,R("timerLabel").textContent=da(Math.max(0,(n.endsAt-te.serverNow)/1e3)),n.phase==="playing"&&s!==Jr&&Di("TEAM DEATHMATCH",`${t[bn??0]} TEAM \xB7 \uC544\uAD70 \uD53C\uD574 \uC5C6\uC74C`,2);Jr=s}function h1(n){if(!Re||ce!=="online"||qc)return;qc=!0,qe=!0,un="result",Fi(),yt.clear(),rt.down=!1,rt.position=null,Ct=!1,document.pointerLockElement&&document.exitPointerLock(),R("pauseOverlay").hidden=!0,R("onlineScoreboard").hidden=!0,R("resultOverlay").hidden=!1;let e=n.self,t=n.match,i=e?.outcome||(t.winner===null?"draw":t.winner===bn?"win":"loss");R("resultTitle").textContent={win:"\uD300\uC758 \uC2B9\uB9AC.",loss:"\uB2E4\uC74C \uC2B9\uB9AC\uB97C \uD5A5\uD574.",draw:"\uD33D\uD33D\uD588\uB358 \uC804\uD22C."}[i],R("resultMessage").textContent=`${t.teamSize}\uB300${t.teamSize} \xB7 ${t.scores[0]} : ${t.scores[1]}${t.reason==="forfeit"?" \xB7 \uC5F0\uACB0 \uC885\uB8CC\uB85C \uACBD\uAE30 \uC885\uB8CC":""}`,R("resultStats").classList.add("match-result-stats"),R("resultStats").innerHTML=[["\uCC98\uCE58 / \uC5B4\uC2DC\uC2A4\uD2B8",`${Bn} / ${te.players.get(te.id)?.assists||0}`],["\uD68D\uB4DD XP","+"+(e?.xp||0)],["\uC804\uD22C \uB808\uBCA8",e?`${e.levelBefore} \u2192 ${e.levelAfter}`:String(xt.profile.level)]].map(([r,o])=>`<span>${r}<b>${o}</b></span>`).join(""),R("resultProgress").hidden=!1;let s=e?.ratingDelta||0;R("resultProgress").textContent=`\uCF54\uC778 +${e?.coins||0} C \xB7 \uC2E4\uB825 \uC810\uC218 ${xt.profile.rating} (${s>=0?"+":""}${s}) \xB7 \uC2B9\uB9AC\xB7\uCC98\uCE58\xB7\uD300 \uAE30\uC5EC\uB3C4 \uBC18\uC601${n.saved===!1?" \xB7 \uC11C\uBC84 \uC800\uC7A5 \uC0C1\uD0DC\uB97C \uD655\uC778\uD558\uC138\uC694.":""}`,R("retryBtn").innerHTML=(t.kind==="public"?"\uAC19\uC740 \uBAA8\uB4DC \uB2E4\uC2DC \uB9E4\uCE6D":"\uC0C8 \uCF54\uB4DC \uBC29 \uB9CC\uB4E4\uAE30")+" <span>\u2192</span>",e?.record&&id([e.record])}function u1(){xt.init({onEconomy:WM,getMap:()=>hi,getWeapon:()=>Ce,toast:Qn,initAudio:ad,onPractice:()=>{no("play"),R("modeSelect").value="bots",R("botOptions").hidden=!1,Qn("\uBD07 \uC218\uC640 \uB09C\uC774\uB3C4\uB97C \uACE0\uB978 \uB4A4 \uC804\uD22C \uC2DC\uC791\uC744 \uB204\uB974\uC138\uC694.")},onOnline:n=>{Ju=n,Wc("online")},onAccount:n=>{Fn=n?rn.get("records:"+n.username,[]):rn.get("records",[]),n?.records?id(n.records):ma()},onGuestRecords:n=>{xt.account||id(n)}}),te.addEventListener("projectile",({detail:n})=>{Re&&ce==="online"&&(Qu(n.projectile),n.projectile.kind==="rocket"&&Yc(Un.get(n.projectile.owner)?.mesh))}),te.addEventListener("projectileEnd",({detail:n})=>$c(n.id)),te.addEventListener("explosion",({detail:n})=>{Re&&ce==="online"&&Tm(n.position,n.radius)}),te.addEventListener("impulse",({detail:n})=>{Re&&ce==="online"&&n.id===te.id&&!kt&&Em(n.velocity)}),te.addEventListener("equipAck",({detail:n})=>BM(n)),te.addEventListener("reloadAck",({detail:n})=>kM(n)),te.addEventListener("snapshot",({detail:n})=>{if(!Re||ce!=="online")return;let e=new Set((n.projectiles||[]).map(i=>i.id));for(let i of Oi.keys())e.has(i)||$c(i);for(let i of n.projectiles||[]){Qu(i);let s=Oi.get(i.id);s.position=i.position.slice(),s.velocity=i.velocity.slice()}let t=n.players.find(i=>i.id===te.id);t&&(bn=t.team,t.health<B.health&&t.health>0&&(Zs=.7,Gt("hurt")),B.health=t.health,Bn=t.kills,Ni=t.kills*100+t.assists*30,kt=t.health<=0,kt&&(yt.clear(),rt.down=!1,Ct=!1,pa()),FM(t,n.time));for(let i of n.players){if(i.id===te.id)continue;let s=Un.get(i.id);if(s&&s.team!==i.team&&nd(i.id),!Un.has(i.id)){let r=i.team===bn,o=Kc(r?9218471:12624254,!r);o.position.set(i.x,i.y,i.z),o.rotation.y=i.yaw+Math.PI,o.traverse(l=>{l.isMesh&&(l.userData.remote=i.id)});let a=vm(`${i.name} \xB7 Lv.${i.level}`,512,80,r?"#ccf5df":"#ffd1a5","#122017b0",38),c=new Ro(new Rr({map:a.map,transparent:!0,depthTest:!1}));a.dispose(),c.position.set(0,2.5,0),c.scale.set(2,.3,1),c.raycast=()=>{},o.add(c),ge.add(o),Un.set(i.id,{mesh:o,phase:Math.random()*6,team:i.team,wasAlive:i.health>0})}}for(let i of Un.keys())te.players.has(i)||nd(i);oo(),Um()}),te.addEventListener("matchStart",()=>{Re&&ce==="online"&&(Yt=0,wn=.3,Jr="")}),te.addEventListener("matchEnd",({detail:n})=>h1(n)),te.addEventListener("shot",({detail:n})=>{if(!(!Re||ce!=="online")&&n.mechanic!=="melee"){Yc(Un.get(n.id)?.mesh);for(let e of n.rays)dd(new w(...n.origin),new w(...e),16754542,.1)}}),te.addEventListener("hit",({detail:n})=>{if(!Re||ce!=="online"||(jc(Un.get(n.target)?.mesh),n.target===te.id&&(Zs=.85,Gt("hurt")),n.shooter!==te.id||n.target===te.id))return;let e=te.players.get(n.target),t=e?new w(e.x,e.y+(n.head?2:1.4)*(e.height/1.7),e.z):Je.position.clone().add(new w(0,0,-5).applyQuaternion(Je.quaternion));fd(n.damage,n.head,n.killed,t,n.distance,n.health),n.killed&&Bi(n.head?"HEADSHOT +100":"ELIMINATION +100")}),te.addEventListener("elimination",({detail:n})=>{if(!Re||ce!=="online")return;let e=document.createElement("div"),t=document.createElement("b");t.textContent=n.shooterName,e.append(t,document.createTextNode(" \u2192 "+n.targetName+(n.head?" \xB7 HEADSHOT":""))),R("killFeed").prepend(e),setTimeout(()=>e.remove(),3100)}),te.addEventListener("spawn",({detail:n})=>{if(!(!Re||ce!=="online")){if(n.id!==te.id){a1(n);return}B.pos.set(n.x,n.y,n.z),B.vel.set(0,0,0),B.yaw=n.yaw,B.pitch=0,B.health=200,B.height=1.7,B.jumps=0,B.grounded=!0,B.slide=0,_s.clear(),xs.clear(),ds=null,ym(),kt=!1,jn=0,kn=0,ms=[],Number.isInteger(n.weapon)&&Ue[n.weapon]&&n.weapon!==Ce&&(Ce=n.weapon,ps=n.weapon,ys(!1)),pt=n.ammo??Ue[Ce].mag,$t=n.reserve??Ue[Ce].reserve,xs.set(Ce,$t),ds=Ce,Vt=0,_s.set(Ce,pt),Ks(),te.match?.phase==="playing"&&Di("BACK IN ACTION","2\uCD08 \uB3D9\uC548 \uBD80\uD65C \uBCF4\uD638\uB97C \uBC1B\uC2B5\uB2C8\uB2E4",2)}}),te.addEventListener("correct",({detail:n})=>{Re&&ce==="online"&&!kt&&(B.pos.set(n.x,n.y,n.z),B.vel.x=0,B.vel.z=0)}),te.addEventListener("shotAck",({detail:n})=>zM(n)),te.addEventListener("disconnect",()=>{Re&&ce==="online"&&un!=="result"&&(ea(),Qn("\uC628\uB77C\uC778 \uC11C\uBC84\uC640 \uC5F0\uACB0\uC774 \uB04A\uC5B4\uC84C\uC2B5\uB2C8\uB2E4. \uB2E4\uC2DC \uCC38\uAC00\uD574 \uC8FC\uC138\uC694."))})}})();
