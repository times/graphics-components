(function(O,C){typeof exports=="object"&&typeof module<"u"?C(exports,require("react"),require("styled-components")):typeof define=="function"&&define.amd?define(["exports","react","styled-components"],C):(O=typeof globalThis<"u"?globalThis:O||self,C(O.TimesGraphicsComponents={},O.React,O.styled))})(this,function(O,C,R){"use strict";var U={exports:{}},$={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ne;function ke(){if(ne)return $;ne=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(i,r,n){var o=null;if(n!==void 0&&(o=""+n),r.key!==void 0&&(o=""+r.key),"key"in r){n={};for(var l in r)l!=="key"&&(n[l]=r[l])}else n=r;return r=n.ref,{$$typeof:s,type:i,key:o,ref:r!==void 0?r:null,props:n}}return $.Fragment=e,$.jsx=t,$.jsxs=t,$}var H={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var se;function Ce(){return se||(se=1,process.env.NODE_ENV!=="production"&&function(){function s(a){if(a==null)return null;if(typeof a=="function")return a.$$typeof===W?null:a.displayName||a.name||null;if(typeof a=="string")return a;switch(a){case P:return"Fragment";case k:return"Profiler";case w:return"StrictMode";case p:return"Suspense";case b:return"SuspenseList";case L:return"Activity"}if(typeof a=="object")switch(typeof a.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),a.$$typeof){case x:return"Portal";case N:return(a.displayName||"Context")+".Provider";case S:return(a._context.displayName||"Context")+".Consumer";case y:var v=a.render;return a=a.displayName,a||(a=v.displayName||v.name||"",a=a!==""?"ForwardRef("+a+")":"ForwardRef"),a;case E:return v=a.displayName||null,v!==null?v:s(a.type)||"Memo";case A:v=a._payload,a=a._init;try{return s(a(v))}catch{}}return null}function e(a){return""+a}function t(a){try{e(a);var v=!1}catch{v=!0}if(v){v=console;var T=v.error,M=typeof Symbol=="function"&&Symbol.toStringTag&&a[Symbol.toStringTag]||a.constructor.name||"Object";return T.call(v,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",M),e(a)}}function i(a){if(a===P)return"<>";if(typeof a=="object"&&a!==null&&a.$$typeof===A)return"<...>";try{var v=s(a);return v?"<"+v+">":"<...>"}catch{return"<...>"}}function r(){var a=B.A;return a===null?null:a.getOwner()}function n(){return Error("react-stack-top-frame")}function o(a){if(V.call(a,"key")){var v=Object.getOwnPropertyDescriptor(a,"key").get;if(v&&v.isReactWarning)return!1}return a.key!==void 0}function l(a,v){function T(){be||(be=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",v))}T.isReactWarning=!0,Object.defineProperty(a,"key",{get:T,configurable:!0})}function u(){var a=s(this.type);return ve[a]||(ve[a]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),a=this.props.ref,a!==void 0?a:null}function h(a,v,T,M,z,D,te,ie){return T=D.ref,a={$$typeof:g,type:a,key:v,props:D,_owner:z},(T!==void 0?T:null)!==null?Object.defineProperty(a,"ref",{enumerable:!1,get:u}):Object.defineProperty(a,"ref",{enumerable:!1,value:null}),a._store={},Object.defineProperty(a._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(a,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(a,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:te}),Object.defineProperty(a,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:ie}),Object.freeze&&(Object.freeze(a.props),Object.freeze(a)),a}function c(a,v,T,M,z,D,te,ie){var _=v.children;if(_!==void 0)if(M)if(it(_)){for(M=0;M<_.length;M++)f(_[M]);Object.freeze&&Object.freeze(_)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else f(_);if(V.call(v,"key")){_=s(a);var F=Object.keys(v).filter(function(rt){return rt!=="key"});M=0<F.length?"{key: someKey, "+F.join(": ..., ")+": ...}":"{key: someKey}",we[_+M]||(F=0<F.length?"{"+F.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,M,_,F,_),we[_+M]=!0)}if(_=null,T!==void 0&&(t(T),_=""+T),o(v)&&(t(v.key),_=""+v.key),"key"in v){T={};for(var re in v)re!=="key"&&(T[re]=v[re])}else T=v;return _&&l(T,typeof a=="function"?a.displayName||a.name||"Unknown":a),h(a,_,D,z,r(),T,te,ie)}function f(a){typeof a=="object"&&a!==null&&a.$$typeof===g&&a._store&&(a._store.validated=1)}var m=C,g=Symbol.for("react.transitional.element"),x=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),S=Symbol.for("react.consumer"),N=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),b=Symbol.for("react.suspense_list"),E=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),W=Symbol.for("react.client.reference"),B=m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=Object.prototype.hasOwnProperty,it=Array.isArray,ee=console.createTask?console.createTask:function(){return null};m={"react-stack-bottom-frame":function(a){return a()}};var be,ve={},ye=m["react-stack-bottom-frame"].bind(m,n)(),xe=ee(i(n)),we={};H.Fragment=P,H.jsx=function(a,v,T,M,z){var D=1e4>B.recentlyCreatedOwnerStacks++;return c(a,v,T,!1,M,z,D?Error("react-stack-top-frame"):ye,D?ee(i(a)):xe)},H.jsxs=function(a,v,T,M,z){var D=1e4>B.recentlyCreatedOwnerStacks++;return c(a,v,T,!0,M,z,D?Error("react-stack-top-frame"):ye,D?ee(i(a)):xe)}}()),H}var oe;function Ee(){return oe||(oe=1,process.env.NODE_ENV==="production"?U.exports=ke():U.exports=Ce()),U.exports}var d=Ee();function j(s,e,t,i){return new(t||(t=Promise))(function(r,n){function o(h){try{u(i.next(h))}catch(c){n(c)}}function l(h){try{u(i.throw(h))}catch(c){n(c)}}function u(h){var c;h.done?r(h.value):(c=h.value,c instanceof t?c:new t(function(f){f(c)})).then(o,l)}u((i=i.apply(s,e||[])).next())})}typeof SuppressedError=="function"&&SuppressedError;class Y{constructor(){this.listeners={}}on(e,t,i){if(this.listeners[e]||(this.listeners[e]=new Set),this.listeners[e].add(t),i==null?void 0:i.once){const r=()=>{this.un(e,r),this.un(e,t)};return this.on(e,r),r}return()=>this.un(e,t)}un(e,t){var i;(i=this.listeners[e])===null||i===void 0||i.delete(t)}once(e,t){return this.on(e,t,{once:!0})}unAll(){this.listeners={}}emit(e,...t){this.listeners[e]&&this.listeners[e].forEach(i=>i(...t))}}const X={decode:function(s,e){return j(this,void 0,void 0,function*(){const t=new AudioContext({sampleRate:e});return t.decodeAudioData(s).finally(()=>t.close())})},createBuffer:function(s,e){return typeof s[0]=="number"&&(s=[s]),function(t){const i=t[0];if(i.some(r=>r>1||r<-1)){const r=i.length;let n=0;for(let o=0;o<r;o++){const l=Math.abs(i[o]);l>n&&(n=l)}for(const o of t)for(let l=0;l<r;l++)o[l]/=n}}(s),{duration:e,length:s[0].length,sampleRate:s[0].length/e,numberOfChannels:s.length,getChannelData:t=>s==null?void 0:s[t],copyFromChannel:AudioBuffer.prototype.copyFromChannel,copyToChannel:AudioBuffer.prototype.copyToChannel}}};function ae(s,e){const t=e.xmlns?document.createElementNS(e.xmlns,s):document.createElement(s);for(const[i,r]of Object.entries(e))if(i==="children")for(const[n,o]of Object.entries(e))typeof o=="string"?t.appendChild(document.createTextNode(o)):t.appendChild(ae(n,o));else i==="style"?Object.assign(t.style,r):i==="textContent"?t.textContent=r:t.setAttribute(i,r.toString());return t}function le(s,e,t){const i=ae(s,e||{});return t==null||t.appendChild(i),i}var Se=Object.freeze({__proto__:null,createElement:le,default:le});const Te={fetchBlob:function(s,e,t){return j(this,void 0,void 0,function*(){const i=yield fetch(s,t);if(i.status>=400)throw new Error(`Failed to fetch ${s}: ${i.status} (${i.statusText})`);return function(r,n){j(this,void 0,void 0,function*(){if(!r.body||!r.headers)return;const o=r.body.getReader(),l=Number(r.headers.get("Content-Length"))||0;let u=0;const h=f=>j(this,void 0,void 0,function*(){u+=(f==null?void 0:f.length)||0;const m=Math.round(u/l*100);n(m)}),c=()=>j(this,void 0,void 0,function*(){let f;try{f=yield o.read()}catch{return}f.done||(h(f.value),yield c())});c()})}(i.clone(),e),i.blob()})}};class Re extends Y{constructor(e){super(),this.isExternalMedia=!1,e.media?(this.media=e.media,this.isExternalMedia=!0):this.media=document.createElement("audio"),e.mediaControls&&(this.media.controls=!0),e.autoplay&&(this.media.autoplay=!0),e.playbackRate!=null&&this.onMediaEvent("canplay",()=>{e.playbackRate!=null&&(this.media.playbackRate=e.playbackRate)},{once:!0})}onMediaEvent(e,t,i){return this.media.addEventListener(e,t,i),()=>this.media.removeEventListener(e,t,i)}getSrc(){return this.media.currentSrc||this.media.src||""}revokeSrc(){const e=this.getSrc();e.startsWith("blob:")&&URL.revokeObjectURL(e)}canPlayType(e){return this.media.canPlayType(e)!==""}setSrc(e,t){const i=this.getSrc();if(e&&i===e)return;this.revokeSrc();const r=t instanceof Blob&&(this.canPlayType(t.type)||!e)?URL.createObjectURL(t):e;i&&(this.media.src="");try{this.media.src=r}catch{this.media.src=e}}destroy(){this.isExternalMedia||(this.media.pause(),this.media.remove(),this.revokeSrc(),this.media.src="",this.media.load())}setMediaElement(e){this.media=e}play(){return j(this,void 0,void 0,function*(){return this.media.play()})}pause(){this.media.pause()}isPlaying(){return!this.media.paused&&!this.media.ended}setTime(e){this.media.currentTime=Math.max(0,Math.min(e,this.getDuration()))}getDuration(){return this.media.duration}getCurrentTime(){return this.media.currentTime}getVolume(){return this.media.volume}setVolume(e){this.media.volume=e}getMuted(){return this.media.muted}setMuted(e){this.media.muted=e}getPlaybackRate(){return this.media.playbackRate}isSeeking(){return this.media.seeking}setPlaybackRate(e,t){t!=null&&(this.media.preservesPitch=t),this.media.playbackRate=e}getMediaElement(){return this.media}setSinkId(e){return this.media.setSinkId(e)}}class I extends Y{constructor(e,t){super(),this.timeouts=[],this.isScrollable=!1,this.audioData=null,this.resizeObserver=null,this.lastContainerWidth=0,this.isDragging=!1,this.subscriptions=[],this.unsubscribeOnScroll=[],this.subscriptions=[],this.options=e;const i=this.parentFromOptionsContainer(e.container);this.parent=i;const[r,n]=this.initHtml();i.appendChild(r),this.container=r,this.scrollContainer=n.querySelector(".scroll"),this.wrapper=n.querySelector(".wrapper"),this.canvasWrapper=n.querySelector(".canvases"),this.progressWrapper=n.querySelector(".progress"),this.cursor=n.querySelector(".cursor"),t&&n.appendChild(t),this.initEvents()}parentFromOptionsContainer(e){let t;if(typeof e=="string"?t=document.querySelector(e):e instanceof HTMLElement&&(t=e),!t)throw new Error("Container not found");return t}initEvents(){const e=t=>{const i=this.wrapper.getBoundingClientRect(),r=t.clientX-i.left,n=t.clientY-i.top;return[r/i.width,n/i.height]};if(this.wrapper.addEventListener("click",t=>{const[i,r]=e(t);this.emit("click",i,r)}),this.wrapper.addEventListener("dblclick",t=>{const[i,r]=e(t);this.emit("dblclick",i,r)}),this.options.dragToSeek!==!0&&typeof this.options.dragToSeek!="object"||this.initDrag(),this.scrollContainer.addEventListener("scroll",()=>{const{scrollLeft:t,scrollWidth:i,clientWidth:r}=this.scrollContainer,n=t/i,o=(t+r)/i;this.emit("scroll",n,o,t,t+r)}),typeof ResizeObserver=="function"){const t=this.createDelay(100);this.resizeObserver=new ResizeObserver(()=>{t().then(()=>this.onContainerResize()).catch(()=>{})}),this.resizeObserver.observe(this.scrollContainer)}}onContainerResize(){const e=this.parent.clientWidth;e===this.lastContainerWidth&&this.options.height!=="auto"||(this.lastContainerWidth=e,this.reRender())}initDrag(){this.subscriptions.push(function(e,t,i,r,n=3,o=0,l=100){if(!e)return()=>{};const u=matchMedia("(pointer: coarse)").matches;let h=()=>{};const c=f=>{if(f.button!==o)return;f.preventDefault(),f.stopPropagation();let m=f.clientX,g=f.clientY,x=!1;const P=Date.now(),w=p=>{if(p.preventDefault(),p.stopPropagation(),u&&Date.now()-P<l)return;const b=p.clientX,E=p.clientY,A=b-m,L=E-g;if(x||Math.abs(A)>n||Math.abs(L)>n){const W=e.getBoundingClientRect(),{left:B,top:V}=W;x||(i==null||i(m-B,g-V),x=!0),t(A,L,b-B,E-V),m=b,g=E}},k=p=>{if(x){const b=p.clientX,E=p.clientY,A=e.getBoundingClientRect(),{left:L,top:W}=A;r==null||r(b-L,E-W)}h()},S=p=>{p.relatedTarget&&p.relatedTarget!==document.documentElement||k(p)},N=p=>{x&&(p.stopPropagation(),p.preventDefault())},y=p=>{x&&p.preventDefault()};document.addEventListener("pointermove",w),document.addEventListener("pointerup",k),document.addEventListener("pointerout",S),document.addEventListener("pointercancel",S),document.addEventListener("touchmove",y,{passive:!1}),document.addEventListener("click",N,{capture:!0}),h=()=>{document.removeEventListener("pointermove",w),document.removeEventListener("pointerup",k),document.removeEventListener("pointerout",S),document.removeEventListener("pointercancel",S),document.removeEventListener("touchmove",y),setTimeout(()=>{document.removeEventListener("click",N,{capture:!0})},10)}};return e.addEventListener("pointerdown",c),()=>{h(),e.removeEventListener("pointerdown",c)}}(this.wrapper,(e,t,i)=>{this.emit("drag",Math.max(0,Math.min(1,i/this.wrapper.getBoundingClientRect().width)))},e=>{this.isDragging=!0,this.emit("dragstart",Math.max(0,Math.min(1,e/this.wrapper.getBoundingClientRect().width)))},e=>{this.isDragging=!1,this.emit("dragend",Math.max(0,Math.min(1,e/this.wrapper.getBoundingClientRect().width)))}))}getHeight(e,t){var i;const r=((i=this.audioData)===null||i===void 0?void 0:i.numberOfChannels)||1;if(e==null)return 128;if(!isNaN(Number(e)))return Number(e);if(e==="auto"){const n=this.parent.clientHeight||128;return t!=null&&t.every(o=>!o.overlay)?n/r:n}return 128}initHtml(){const e=document.createElement("div"),t=e.attachShadow({mode:"open"}),i=this.options.cspNonce&&typeof this.options.cspNonce=="string"?this.options.cspNonce.replace(/"/g,""):"";return t.innerHTML=`
      <style${i?` nonce="${i}"`:""}>
        :host {
          user-select: none;
          min-width: 1px;
        }
        :host audio {
          display: block;
          width: 100%;
        }
        :host .scroll {
          overflow-x: auto;
          overflow-y: hidden;
          width: 100%;
          position: relative;
        }
        :host .noScrollbar {
          scrollbar-color: transparent;
          scrollbar-width: none;
        }
        :host .noScrollbar::-webkit-scrollbar {
          display: none;
          -webkit-appearance: none;
        }
        :host .wrapper {
          position: relative;
          overflow: visible;
          z-index: 2;
        }
        :host .canvases {
          min-height: ${this.getHeight(this.options.height,this.options.splitChannels)}px;
        }
        :host .canvases > div {
          position: relative;
        }
        :host canvas {
          display: block;
          position: absolute;
          top: 0;
          image-rendering: pixelated;
        }
        :host .progress {
          pointer-events: none;
          position: absolute;
          z-index: 2;
          top: 0;
          left: 0;
          width: 0;
          height: 100%;
          overflow: hidden;
        }
        :host .progress > div {
          position: relative;
        }
        :host .cursor {
          pointer-events: none;
          position: absolute;
          z-index: 5;
          top: 0;
          left: 0;
          height: 100%;
          border-radius: 2px;
        }
      </style>

      <div class="scroll" part="scroll">
        <div class="wrapper" part="wrapper">
          <div class="canvases" part="canvases"></div>
          <div class="progress" part="progress"></div>
          <div class="cursor" part="cursor"></div>
        </div>
      </div>
    `,[e,t]}setOptions(e){if(this.options.container!==e.container){const t=this.parentFromOptionsContainer(e.container);t.appendChild(this.container),this.parent=t}e.dragToSeek!==!0&&typeof this.options.dragToSeek!="object"||this.initDrag(),this.options=e,this.reRender()}getWrapper(){return this.wrapper}getWidth(){return this.scrollContainer.clientWidth}getScroll(){return this.scrollContainer.scrollLeft}setScroll(e){this.scrollContainer.scrollLeft=e}setScrollPercentage(e){const{scrollWidth:t}=this.scrollContainer,i=t*e;this.setScroll(i)}destroy(){var e,t;this.subscriptions.forEach(i=>i()),this.container.remove(),(e=this.resizeObserver)===null||e===void 0||e.disconnect(),(t=this.unsubscribeOnScroll)===null||t===void 0||t.forEach(i=>i()),this.unsubscribeOnScroll=[]}createDelay(e=10){let t,i;const r=()=>{t&&clearTimeout(t),i&&i()};return this.timeouts.push(r),()=>new Promise((n,o)=>{r(),i=o,t=setTimeout(()=>{t=void 0,i=void 0,n()},e)})}convertColorValues(e){if(!Array.isArray(e))return e||"";if(e.length<2)return e[0]||"";const t=document.createElement("canvas"),i=t.getContext("2d"),r=t.height*(window.devicePixelRatio||1),n=i.createLinearGradient(0,0,0,r),o=1/(e.length-1);return e.forEach((l,u)=>{const h=u*o;n.addColorStop(h,l)}),n}getPixelRatio(){return Math.max(1,window.devicePixelRatio||1)}renderBarWaveform(e,t,i,r){const n=e[0],o=e[1]||e[0],l=n.length,{width:u,height:h}=i.canvas,c=h/2,f=this.getPixelRatio(),m=t.barWidth?t.barWidth*f:1,g=t.barGap?t.barGap*f:t.barWidth?m/2:0,x=t.barRadius||0,P=u/(m+g)/l,w=x&&"roundRect"in i?"roundRect":"rect";i.beginPath();let k=0,S=0,N=0;for(let y=0;y<=l;y++){const p=Math.round(y*P);if(p>k){const A=Math.round(S*c*r),L=A+Math.round(N*c*r)||1;let W=c-A;t.barAlign==="top"?W=0:t.barAlign==="bottom"&&(W=h-L),i[w](k*(m+g),W,m,L,x),k=p,S=0,N=0}const b=Math.abs(n[y]||0),E=Math.abs(o[y]||0);b>S&&(S=b),E>N&&(N=E)}i.fill(),i.closePath()}renderLineWaveform(e,t,i,r){const n=o=>{const l=e[o]||e[0],u=l.length,{height:h}=i.canvas,c=h/2,f=i.canvas.width/u;i.moveTo(0,c);let m=0,g=0;for(let x=0;x<=u;x++){const P=Math.round(x*f);if(P>m){const k=c+(Math.round(g*c*r)||1)*(o===0?-1:1);i.lineTo(m,k),m=P,g=0}const w=Math.abs(l[x]||0);w>g&&(g=w)}i.lineTo(m,c)};i.beginPath(),n(0),n(1),i.fill(),i.closePath()}renderWaveform(e,t,i){if(i.fillStyle=this.convertColorValues(t.waveColor),t.renderFunction)return void t.renderFunction(e,i);let r=t.barHeight||1;if(t.normalize){const n=Array.from(e[0]).reduce((o,l)=>Math.max(o,Math.abs(l)),0);r=n?1/n:1}t.barWidth||t.barGap||t.barAlign?this.renderBarWaveform(e,t,i,r):this.renderLineWaveform(e,t,i,r)}renderSingleCanvas(e,t,i,r,n,o,l){const u=this.getPixelRatio(),h=document.createElement("canvas");h.width=Math.round(i*u),h.height=Math.round(r*u),h.style.width=`${i}px`,h.style.height=`${r}px`,h.style.left=`${Math.round(n)}px`,o.appendChild(h);const c=h.getContext("2d");if(this.renderWaveform(e,t,c),h.width>0&&h.height>0){const f=h.cloneNode(),m=f.getContext("2d");m.drawImage(h,0,0),m.globalCompositeOperation="source-in",m.fillStyle=this.convertColorValues(t.progressColor),m.fillRect(0,0,h.width,h.height),l.appendChild(f)}}renderMultiCanvas(e,t,i,r,n,o){const l=this.getPixelRatio(),{clientWidth:u}=this.scrollContainer,h=i/l;let c=Math.min(I.MAX_CANVAS_WIDTH,u,h),f={};if(c===0)return;if(t.barWidth||t.barGap){const w=t.barWidth||.5,k=w+(t.barGap||w/2);c%k!=0&&(c=Math.floor(c/k)*k)}const m=w=>{if(w<0||w>=g||f[w])return;f[w]=!0;const k=w*c,S=Math.min(h-k,c);if(S<=0)return;const N=e.map(y=>{const p=Math.floor(k/h*y.length),b=Math.floor((k+S)/h*y.length);return y.slice(p,b)});this.renderSingleCanvas(N,t,S,r,k,n,o)},g=Math.ceil(h/c);if(!this.isScrollable){for(let w=0;w<g;w++)m(w);return}const x=this.scrollContainer.scrollLeft/h,P=Math.floor(x*g);if(m(P-1),m(P),m(P+1),g>1){const w=this.on("scroll",()=>{const{scrollLeft:k}=this.scrollContainer,S=Math.floor(k/h*g);Object.keys(f).length>I.MAX_NODES&&(n.innerHTML="",o.innerHTML="",f={}),m(S-1),m(S),m(S+1)});this.unsubscribeOnScroll.push(w)}}renderChannel(e,t,i,r){var{overlay:n}=t,o=function(c,f){var m={};for(var g in c)Object.prototype.hasOwnProperty.call(c,g)&&f.indexOf(g)<0&&(m[g]=c[g]);if(c!=null&&typeof Object.getOwnPropertySymbols=="function"){var x=0;for(g=Object.getOwnPropertySymbols(c);x<g.length;x++)f.indexOf(g[x])<0&&Object.prototype.propertyIsEnumerable.call(c,g[x])&&(m[g[x]]=c[g[x]])}return m}(t,["overlay"]);const l=document.createElement("div"),u=this.getHeight(o.height,o.splitChannels);l.style.height=`${u}px`,n&&r>0&&(l.style.marginTop=`-${u}px`),this.canvasWrapper.style.minHeight=`${u}px`,this.canvasWrapper.appendChild(l);const h=l.cloneNode();this.progressWrapper.appendChild(h),this.renderMultiCanvas(e,o,i,u,l,h)}render(e){return j(this,void 0,void 0,function*(){var t;this.timeouts.forEach(u=>u()),this.timeouts=[],this.canvasWrapper.innerHTML="",this.progressWrapper.innerHTML="",this.options.width!=null&&(this.scrollContainer.style.width=typeof this.options.width=="number"?`${this.options.width}px`:this.options.width);const i=this.getPixelRatio(),r=this.scrollContainer.clientWidth,n=Math.ceil(e.duration*(this.options.minPxPerSec||0));this.isScrollable=n>r;const o=this.options.fillParent&&!this.isScrollable,l=(o?r:n)*i;if(this.wrapper.style.width=o?"100%":`${n}px`,this.scrollContainer.style.overflowX=this.isScrollable?"auto":"hidden",this.scrollContainer.classList.toggle("noScrollbar",!!this.options.hideScrollbar),this.cursor.style.backgroundColor=`${this.options.cursorColor||this.options.progressColor}`,this.cursor.style.width=`${this.options.cursorWidth}px`,this.audioData=e,this.emit("render"),this.options.splitChannels)for(let u=0;u<e.numberOfChannels;u++){const h=Object.assign(Object.assign({},this.options),(t=this.options.splitChannels)===null||t===void 0?void 0:t[u]);this.renderChannel([e.getChannelData(u)],h,l,u)}else{const u=[e.getChannelData(0)];e.numberOfChannels>1&&u.push(e.getChannelData(1)),this.renderChannel(u,this.options,l,0)}Promise.resolve().then(()=>this.emit("rendered"))})}reRender(){if(this.unsubscribeOnScroll.forEach(i=>i()),this.unsubscribeOnScroll=[],!this.audioData)return;const{scrollWidth:e}=this.scrollContainer,{right:t}=this.progressWrapper.getBoundingClientRect();if(this.render(this.audioData),this.isScrollable&&e!==this.scrollContainer.scrollWidth){const{right:i}=this.progressWrapper.getBoundingClientRect();let r=i-t;r*=2,r=r<0?Math.floor(r):Math.ceil(r),r/=2,this.scrollContainer.scrollLeft+=r}}zoom(e){this.options.minPxPerSec=e,this.reRender()}scrollIntoView(e,t=!1){const{scrollLeft:i,scrollWidth:r,clientWidth:n}=this.scrollContainer,o=e*r,l=i,u=i+n,h=n/2;if(this.isDragging)o+30>u?this.scrollContainer.scrollLeft+=30:o-30<l&&(this.scrollContainer.scrollLeft-=30);else{(o<l||o>u)&&(this.scrollContainer.scrollLeft=o-(this.options.autoCenter?h:0));const c=o-i-h;t&&this.options.autoCenter&&c>0&&(this.scrollContainer.scrollLeft+=Math.min(c,10))}{const c=this.scrollContainer.scrollLeft,f=c/r,m=(c+n)/r;this.emit("scroll",f,m,c,c+n)}}renderProgress(e,t){if(isNaN(e))return;const i=100*e;this.canvasWrapper.style.clipPath=`polygon(${i}% 0, 100% 0, 100% 100%, ${i}% 100%)`,this.progressWrapper.style.width=`${i}%`,this.cursor.style.left=`${i}%`,this.cursor.style.transform=`translateX(-${Math.round(i)===100?this.options.cursorWidth:0}px)`,this.isScrollable&&this.options.autoScroll&&this.scrollIntoView(e,t)}exportImage(e,t,i){return j(this,void 0,void 0,function*(){const r=this.canvasWrapper.querySelectorAll("canvas");if(!r.length)throw new Error("No waveform data");if(i==="dataURL"){const n=Array.from(r).map(o=>o.toDataURL(e,t));return Promise.resolve(n)}return Promise.all(Array.from(r).map(n=>new Promise((o,l)=>{n.toBlob(u=>{u?o(u):l(new Error("Could not export image"))},e,t)})))})}}I.MAX_CANVAS_WIDTH=8e3,I.MAX_NODES=10;class Pe extends Y{constructor(){super(...arguments),this.unsubscribe=()=>{}}start(){this.unsubscribe=this.on("tick",()=>{requestAnimationFrame(()=>{this.emit("tick")})}),this.emit("tick")}stop(){this.unsubscribe()}destroy(){this.unsubscribe()}}class q extends Y{constructor(e=new AudioContext){super(),this.bufferNode=null,this.playStartTime=0,this.playedDuration=0,this._muted=!1,this._playbackRate=1,this._duration=void 0,this.buffer=null,this.currentSrc="",this.paused=!0,this.crossOrigin=null,this.seeking=!1,this.autoplay=!1,this.addEventListener=this.on,this.removeEventListener=this.un,this.audioContext=e,this.gainNode=this.audioContext.createGain(),this.gainNode.connect(this.audioContext.destination)}load(){return j(this,void 0,void 0,function*(){})}get src(){return this.currentSrc}set src(e){if(this.currentSrc=e,this._duration=void 0,!e)return this.buffer=null,void this.emit("emptied");fetch(e).then(t=>{if(t.status>=400)throw new Error(`Failed to fetch ${e}: ${t.status} (${t.statusText})`);return t.arrayBuffer()}).then(t=>this.currentSrc!==e?null:this.audioContext.decodeAudioData(t)).then(t=>{this.currentSrc===e&&(this.buffer=t,this.emit("loadedmetadata"),this.emit("canplay"),this.autoplay&&this.play())})}_play(){var e;if(!this.paused)return;this.paused=!1,(e=this.bufferNode)===null||e===void 0||e.disconnect(),this.bufferNode=this.audioContext.createBufferSource(),this.buffer&&(this.bufferNode.buffer=this.buffer),this.bufferNode.playbackRate.value=this._playbackRate,this.bufferNode.connect(this.gainNode);let t=this.playedDuration*this._playbackRate;(t>=this.duration||t<0)&&(t=0,this.playedDuration=0),this.bufferNode.start(this.audioContext.currentTime,t),this.playStartTime=this.audioContext.currentTime,this.bufferNode.onended=()=>{this.currentTime>=this.duration&&(this.pause(),this.emit("ended"))}}_pause(){var e;this.paused=!0,(e=this.bufferNode)===null||e===void 0||e.stop(),this.playedDuration+=this.audioContext.currentTime-this.playStartTime}play(){return j(this,void 0,void 0,function*(){this.paused&&(this._play(),this.emit("play"))})}pause(){this.paused||(this._pause(),this.emit("pause"))}stopAt(e){const t=e-this.currentTime,i=this.bufferNode;i==null||i.stop(this.audioContext.currentTime+t),i==null||i.addEventListener("ended",()=>{i===this.bufferNode&&(this.bufferNode=null,this.pause())},{once:!0})}setSinkId(e){return j(this,void 0,void 0,function*(){return this.audioContext.setSinkId(e)})}get playbackRate(){return this._playbackRate}set playbackRate(e){this._playbackRate=e,this.bufferNode&&(this.bufferNode.playbackRate.value=e)}get currentTime(){return(this.paused?this.playedDuration:this.playedDuration+(this.audioContext.currentTime-this.playStartTime))*this._playbackRate}set currentTime(e){const t=!this.paused;t&&this._pause(),this.playedDuration=e/this._playbackRate,t&&this._play(),this.emit("seeking"),this.emit("timeupdate")}get duration(){var e,t;return(e=this._duration)!==null&&e!==void 0?e:((t=this.buffer)===null||t===void 0?void 0:t.duration)||0}set duration(e){this._duration=e}get volume(){return this.gainNode.gain.value}set volume(e){this.gainNode.gain.value=e,this.emit("volumechange")}get muted(){return this._muted}set muted(e){this._muted!==e&&(this._muted=e,this._muted?this.gainNode.disconnect():this.gainNode.connect(this.audioContext.destination))}canPlayType(e){return/^(audio|video)\//.test(e)}getGainNode(){return this.gainNode}getChannelData(){const e=[];if(!this.buffer)return e;const t=this.buffer.numberOfChannels;for(let i=0;i<t;i++)e.push(this.buffer.getChannelData(i));return e}}const je={waveColor:"#999",progressColor:"#555",cursorWidth:1,minPxPerSec:0,fillParent:!0,interact:!0,dragToSeek:!1,autoScroll:!0,autoCenter:!0,sampleRate:8e3};class G extends Re{static create(e){return new G(e)}constructor(e){const t=e.media||(e.backend==="WebAudio"?new q:void 0);super({media:t,mediaControls:e.mediaControls,autoplay:e.autoplay,playbackRate:e.audioRate}),this.plugins=[],this.decodedData=null,this.stopAtPosition=null,this.subscriptions=[],this.mediaSubscriptions=[],this.abortController=null,this.options=Object.assign({},je,e),this.timer=new Pe;const i=t?void 0:this.getMediaElement();this.renderer=new I(this.options,i),this.initPlayerEvents(),this.initRendererEvents(),this.initTimerEvents(),this.initPlugins();const r=this.options.url||this.getSrc()||"";Promise.resolve().then(()=>{this.emit("init");const{peaks:n,duration:o}=this.options;(r||n&&o)&&this.load(r,n,o).catch(()=>null)})}updateProgress(e=this.getCurrentTime()){return this.renderer.renderProgress(e/this.getDuration(),this.isPlaying()),e}initTimerEvents(){this.subscriptions.push(this.timer.on("tick",()=>{if(!this.isSeeking()){const e=this.updateProgress();this.emit("timeupdate",e),this.emit("audioprocess",e),this.stopAtPosition!=null&&this.isPlaying()&&e>=this.stopAtPosition&&this.pause()}}))}initPlayerEvents(){this.isPlaying()&&(this.emit("play"),this.timer.start()),this.mediaSubscriptions.push(this.onMediaEvent("timeupdate",()=>{const e=this.updateProgress();this.emit("timeupdate",e)}),this.onMediaEvent("play",()=>{this.emit("play"),this.timer.start()}),this.onMediaEvent("pause",()=>{this.emit("pause"),this.timer.stop(),this.stopAtPosition=null}),this.onMediaEvent("emptied",()=>{this.timer.stop(),this.stopAtPosition=null}),this.onMediaEvent("ended",()=>{this.emit("timeupdate",this.getDuration()),this.emit("finish"),this.stopAtPosition=null}),this.onMediaEvent("seeking",()=>{this.emit("seeking",this.getCurrentTime())}),this.onMediaEvent("error",()=>{var e;this.emit("error",(e=this.getMediaElement().error)!==null&&e!==void 0?e:new Error("Media error")),this.stopAtPosition=null}))}initRendererEvents(){this.subscriptions.push(this.renderer.on("click",(e,t)=>{this.options.interact&&(this.seekTo(e),this.emit("interaction",e*this.getDuration()),this.emit("click",e,t))}),this.renderer.on("dblclick",(e,t)=>{this.emit("dblclick",e,t)}),this.renderer.on("scroll",(e,t,i,r)=>{const n=this.getDuration();this.emit("scroll",e*n,t*n,i,r)}),this.renderer.on("render",()=>{this.emit("redraw")}),this.renderer.on("rendered",()=>{this.emit("redrawcomplete")}),this.renderer.on("dragstart",e=>{this.emit("dragstart",e)}),this.renderer.on("dragend",e=>{this.emit("dragend",e)}));{let e;this.subscriptions.push(this.renderer.on("drag",t=>{if(!this.options.interact)return;let i;this.renderer.renderProgress(t),clearTimeout(e),this.isPlaying()?i=0:this.options.dragToSeek===!0?i=200:typeof this.options.dragToSeek=="object"&&this.options.dragToSeek!==void 0&&(i=this.options.dragToSeek.debounceTime),e=setTimeout(()=>{this.seekTo(t)},i),this.emit("interaction",t*this.getDuration()),this.emit("drag",t)}))}}initPlugins(){var e;!((e=this.options.plugins)===null||e===void 0)&&e.length&&this.options.plugins.forEach(t=>{this.registerPlugin(t)})}unsubscribePlayerEvents(){this.mediaSubscriptions.forEach(e=>e()),this.mediaSubscriptions=[]}setOptions(e){this.options=Object.assign({},this.options,e),e.duration&&!e.peaks&&(this.decodedData=X.createBuffer(this.exportPeaks(),e.duration)),e.peaks&&e.duration&&(this.decodedData=X.createBuffer(e.peaks,e.duration)),this.renderer.setOptions(this.options),e.audioRate&&this.setPlaybackRate(e.audioRate),e.mediaControls!=null&&(this.getMediaElement().controls=e.mediaControls)}registerPlugin(e){return e._init(this),this.plugins.push(e),this.subscriptions.push(e.once("destroy",()=>{this.plugins=this.plugins.filter(t=>t!==e)})),e}getWrapper(){return this.renderer.getWrapper()}getWidth(){return this.renderer.getWidth()}getScroll(){return this.renderer.getScroll()}setScroll(e){return this.renderer.setScroll(e)}setScrollTime(e){const t=e/this.getDuration();this.renderer.setScrollPercentage(t)}getActivePlugins(){return this.plugins}loadAudio(e,t,i,r){return j(this,void 0,void 0,function*(){var n;if(this.emit("load",e),!this.options.media&&this.isPlaying()&&this.pause(),this.decodedData=null,this.stopAtPosition=null,!t&&!i){const l=this.options.fetchParams||{};window.AbortController&&!l.signal&&(this.abortController=new AbortController,l.signal=(n=this.abortController)===null||n===void 0?void 0:n.signal);const u=c=>this.emit("loading",c);t=yield Te.fetchBlob(e,u,l);const h=this.options.blobMimeType;h&&(t=new Blob([t],{type:h}))}this.setSrc(e,t);const o=yield new Promise(l=>{const u=r||this.getDuration();u?l(u):this.mediaSubscriptions.push(this.onMediaEvent("loadedmetadata",()=>l(this.getDuration()),{once:!0}))});if(!e&&!t){const l=this.getMediaElement();l instanceof q&&(l.duration=o)}if(i)this.decodedData=X.createBuffer(i,o||0);else if(t){const l=yield t.arrayBuffer();this.decodedData=yield X.decode(l,this.options.sampleRate)}this.decodedData&&(this.emit("decode",this.getDuration()),this.renderer.render(this.decodedData)),this.emit("ready",this.getDuration())})}load(e,t,i){return j(this,void 0,void 0,function*(){try{return yield this.loadAudio(e,void 0,t,i)}catch(r){throw this.emit("error",r),r}})}loadBlob(e,t,i){return j(this,void 0,void 0,function*(){try{return yield this.loadAudio("",e,t,i)}catch(r){throw this.emit("error",r),r}})}zoom(e){if(!this.decodedData)throw new Error("No audio loaded");this.renderer.zoom(e),this.emit("zoom",e)}getDecodedData(){return this.decodedData}exportPeaks({channels:e=2,maxLength:t=8e3,precision:i=1e4}={}){if(!this.decodedData)throw new Error("The audio has not been decoded yet");const r=Math.min(e,this.decodedData.numberOfChannels),n=[];for(let o=0;o<r;o++){const l=this.decodedData.getChannelData(o),u=[],h=l.length/t;for(let c=0;c<t;c++){const f=l.slice(Math.floor(c*h),Math.ceil((c+1)*h));let m=0;for(let g=0;g<f.length;g++){const x=f[g];Math.abs(x)>Math.abs(m)&&(m=x)}u.push(Math.round(m*i)/i)}n.push(u)}return n}getDuration(){let e=super.getDuration()||0;return e!==0&&e!==1/0||!this.decodedData||(e=this.decodedData.duration),e}toggleInteraction(e){this.options.interact=e}setTime(e){this.stopAtPosition=null,super.setTime(e),this.updateProgress(e),this.emit("timeupdate",e)}seekTo(e){const t=this.getDuration()*e;this.setTime(t)}play(e,t){const i=Object.create(null,{play:{get:()=>super.play}});return j(this,void 0,void 0,function*(){e!=null&&this.setTime(e);const r=yield i.play.call(this);return t!=null&&(this.media instanceof q?this.media.stopAt(t):this.stopAtPosition=t),r})}playPause(){return j(this,void 0,void 0,function*(){return this.isPlaying()?this.pause():this.play()})}stop(){this.pause(),this.setTime(0)}skip(e){this.setTime(this.getCurrentTime()+e)}empty(){this.load("",[[0]],.001)}setMediaElement(e){this.unsubscribePlayerEvents(),super.setMediaElement(e),this.initPlayerEvents()}exportImage(){return j(this,arguments,void 0,function*(e="image/png",t=1,i="dataURL"){return this.renderer.exportImage(e,t,i)})}destroy(){var e;this.emit("destroy"),(e=this.abortController)===null||e===void 0||e.abort(),this.plugins.forEach(t=>t.destroy()),this.subscriptions.forEach(t=>t()),this.unsubscribePlayerEvents(),this.timer.destroy(),this.renderer.destroy(),super.destroy()}}G.BasePlugin=class extends Y{constructor(s){super(),this.subscriptions=[],this.options=s}onInit(){}_init(s){this.wavesurfer=s,this.onInit()}destroy(){this.emit("destroy"),this.subscriptions.forEach(s=>s())}},G.dom=Se;const Me=(s,e)=>{const[t,i]=C.useState(null);return C.useEffect(()=>{if(!s.current)return;const r=G.create({...e,container:s.current});return i(r),()=>{r.destroy()}},[e,s]),t},_e=R.div`
    display: grid;
    grid-template-columns: max-content 1fr;
    gap: 0.5em;
    width: 100%;

    justify-content: center;
    align-items: center;

    .waveform-time {
        margin-top: 0 !important;
        margin-block-start: 0;
        margin-block-end: 0;
    }

    .play-icon {
        cursor: pointer;
        width: 48px;
        aspect-ratio: 1 / 1;
    }

    .volume-container {
        display: none;

        @media (min-width: 1024px) {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 0.5em;
            margin-inline-start: 0.5em;
        }
    }

    .volume-icon {
        cursor: pointer;
        width: 20px;
        aspect-ratio: 1 / 1;
    }

    input[type='range'].styled-slider {
        height: 2.2em;
        -webkit-appearance: none;
        background: transparent;
        cursor: pointer;
    }

    /*progress support*/
    input[type='range'].styled-slider.slider-progress {
        --range: calc(var(--max) - var(--min));
        --ratio: calc((var(--value) - var(--min)) / var(--range));
        --sx: calc(0.5 * 2em + var(--ratio) * (100% - 2em));
    }

    input[type='range'].styled-slider:focus {
        outline: none;
    }

    /*webkit*/
    input[type='range'].styled-slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 2em;
        height: 2em;
        border-radius: 1em;
        background: #ffffff;
        border: none;
        box-shadow: 0 0 2px black;
        margin-top: calc(max((1em - 1px - 1px) * 0.5, 0px) - 2em * 0.5);
    }

    input[type='range'].styled-slider::-webkit-slider-runnable-track {
        height: 1em;
        border: 1px solid #b2b2b2;
        border-radius: 0.5em;
        background: #333333;
        box-shadow: none;
    }

    input[type='range'].styled-slider.slider-progress::-webkit-slider-runnable-track {
        background:
            linear-gradient(#940000, #940000) 0 / var(--sx) 100% no-repeat,
            #333333;
    }

    /*mozilla*/
    input[type='range'].styled-slider::-moz-range-thumb {
        width: 2em;
        height: 2em;
        border-radius: 1em;
        background: #ffffff;
        border: none;
        box-shadow: 0 0 2px black;
    }

    input[type='range'].styled-slider::-moz-range-track {
        height: max(calc(1em - 1px - 1px), 0px);
        border: 1px solid #b2b2b2;
        border-radius: 0.5em;
        background: #333333;
        box-shadow: none;
    }

    input[type='range'].styled-slider.slider-progress::-moz-range-track {
        background:
            linear-gradient(#940000, #940000) 0 / var(--sx) 100% no-repeat,
            #333333;
    }

    /*ms*/
    input[type='range'].styled-slider::-ms-fill-upper {
        background: transparent;
        border-color: transparent;
    }

    input[type='range'].styled-slider::-ms-fill-lower {
        background: transparent;
        border-color: transparent;
    }

    input[type='range'].styled-slider::-ms-thumb {
        width: 2em;
        height: 2em;
        border-radius: 1em;
        background: #ffffff;
        border: none;
        box-shadow: 0 0 2px black;
        margin-top: 0;
        box-sizing: border-box;
    }

    input[type='range'].styled-slider::-ms-track {
        height: 1em;
        border-radius: 0.5em;
        background: #333333;
        border: 1px solid #b2b2b2;
        box-shadow: none;
        box-sizing: border-box;
    }

    input[type='range'].styled-slider.slider-progress::-ms-fill-lower {
        height: max(calc(1em - 1px - 1px), 0px);
        border-radius: 0.5em 0 0 0.5em;
        margin: -1px 0 -1px -1px;
        background: #940000;
        border: 1px solid #b2b2b2;
        border-right-width: 0;
    }
`,ce=C.memo(s=>{const e=C.useRef(null),[t,i]=C.useState(!1),[r,n]=C.useState(.5),[o,l]=C.useState(0),[u,h]=C.useState(k(0)),[c,f]=C.useState(!1),m=Me(e,s),g=C.useRef(null),{onPlay:x,onReady:P}=s,w=C.useCallback(()=>{m.playPause()},[m]);C.useEffect(()=>{if(!m)return;m.setVolume(r);const y=()=>({media:m.getMediaElement(),peaks:m.exportPeaks()}),p=[m.on("ready",()=>{P&&P(y()),l(k(Math.round(m.getDuration()*1e3))),i(m.isPlaying())}),m.on("play",()=>{x&&x(b=>{const E=y();return!b||b.media!==E.media?(b&&(b.media.pause(),b.media.currentTime=0),E):b}),i(!0)}),m.on("audioprocess",()=>{h(k(Math.round(m.getCurrentTime()*1e3)))}),m.on("pause",()=>i(!1))];return()=>{p.forEach(b=>b())}},[m,x,P,r]),C.useEffect(()=>{const y=g.current;y.style.setProperty("--value",y.value),y.style.setProperty("--min",y.min===""?"0":y.min),y.style.setProperty("--max",y.max===""?"100":y.max),y.style.setProperty("--value",y.value)},[]);function k(y){var p=Math.floor(y/6e4),b=(y%6e4/1e3).toFixed(0);return p+":"+(b<10?"0":"")+b}function S(y){n(y.target.value);const p=y.target;p.style.setProperty("--value",p.value),p.style.setProperty("--min",p.min===""?"0":p.min),p.style.setProperty("--max",p.max===""?"100":p.max),p.style.setProperty("--value",p.value)}function N(){f(!c)}return d.jsxs(_e,{children:[t?d.jsx("img",{className:"play-icon",src:"https://extras.thetimes.co.uk/web/2025/times-knife-crime-audio/assets/pause.png",onClick:w}):d.jsx("img",{className:"play-icon",src:"https://extras.thetimes.co.uk/web/2025/times-knife-crime-audio/assets/play.png",onClick:w}),d.jsx("div",{ref:e,style:{width:"100%"}}),d.jsxs("p",{className:"waveform-time",children:[d.jsx("span",{children:u})," / ",d.jsx("span",{children:o})]}),d.jsxs("div",{className:"volume-container",children:[d.jsx("img",{className:"volume-icon",src:"https://extras.thetimes.co.uk/web/2025/times-knife-crime-audio/assets/volume.png",onClick:N}),d.jsx("input",{ref:g,className:"styled-slider slider-progress",type:"range",id:"volume-slider",min:0,max:1,step:.1,value:r,onChange:S,style:{opacity:c?1:0,pointerEvents:c?"all":"none"}})]})]})}),J=R.createGlobalStyle`
  

`,de=R.div`
    margin-block-start: 1em;
    margin-block-end: 100px;
`,Oe=R.div`

    background-color: black;
    color: white;
    margin: 40px 0;
    padding-block-start: 16px;
    padding-block-end: 8px;
    padding-inline: 12px;

    .card-image {
        width: 172px;
        aspect-ratio: 1 / 1;
    }

    .card-name {
        margin-block-start: 8px;
        margin-block-end: 0;
    }

    .card-quote {
        font-size: 24px;
        line-height: 30px;
        font-weight: 700;
        text-align: left;

        color: #d9d9d9;
        margin-block-start: 12px;
    }

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 1em;

        .waveform-container {
            grid-column: 2 / 3;
            margin-block: 0.5em;
        }

        .card-image--container {
            grid-row: 1 / 3;
        }

        .card-quote {
            margin-block: 0;
        }

        .card-image {
            width: 100%;
        }

        .card-name {
            font-size: 1rem;
        }
    }
`;function Ne({data:s}){return d.jsxs(d.Fragment,{children:[d.jsx(J,{}),d.jsxs(Oe,{children:[d.jsxs("div",{className:"card-image--container",children:[d.jsx("img",{src:`https://extras.thetimes.co.uk/web/2025/times-knife-crime-audio/assets/${s.imgSrc}.jpg`,className:"card-image"}),d.jsx("p",{className:"card-name",children:s.name})]}),d.jsx("p",{className:"card-quote",children:s.quote}),d.jsx(ce,{height:100,waveColor:"#ff0000",progressColor:"#940000",url:`https://extras.thetimes.co.uk/web/2025/times-knife-crime-audio/assets/${s.audioSrc}.m4a`,normalize:!0,barWidth:2,barGap:2,barRadius:2,cursorWidth:2},s.id)]})]})}var Z={},Q={},ue;function Ae(){return ue||(ue=1,function(s){Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var e;function t(r,n,o){return n in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o,r}var i={digital:(e={blue:{r:37,g:66,b:81},yellow:{r:224,g:171,b:38},lightBlue:{r:224,g:171,b:38}},t(e,"yellow",{r:128,g:177,b:226}),t(e,"orange",{r:243,g:127,b:47}),t(e,"teal",{r:50,g:146,b:166}),t(e,"purple",{r:108,g:60,b:94}),t(e,"sand",{r:218,g:207,b:193}),e),ukPoliticalParties:{con:{r:64,g:147,b:178},lab:{r:236,g:81,b:86},libdem:{r:246,g:197,b:94},ukip:{r:151,g:103,b:174},snp:{r:255,g:246,b:133},green:{r:97,g:169,b:97},pc:{r:144,g:205,b:124},dup:{r:161,g:82,b:82},sf:{r:68,g:150,b:107},sdlp:{r:125,g:161,b:125},uup:{r:63,g:97,b:124},others:{r:160,g:147,b:143}}};s.default=i}(Q)),Q}var K={},he;function De(){return he||(he=1,function(s){Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var e={micro:"400px",small:"520px",mobile:"768px",tablet:"1024px",desktop:"1200px","desktop-wide":"1320px"};s.default=e}(K)),K}var pe;function Le(){return pe||(pe=1,function(s){Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"colors",{enumerable:!0,get:function(){return e.default}}),Object.defineProperty(s,"breakpoints",{enumerable:!0,get:function(){return t.default}});var e=i(Ae()),t=i(De());function i(r){return r&&r.__esModule?r:{default:r}}}(Z)),Z}Le();const We=R.div`
    .headline {
        font-family: 'RobotoRegular', sans-serif;
        font-size: 20px;
        font-weight: 700;
        color: #232323;
        text-align: left;
        line-height: normal;
    }

    .standfirst {
        font-family: 'RobotoRegular', sans-serif;
        font-size: 18px;
        color: #232323;
        text-align: left;
    }

    padding-inline-start: 10px;

`;function me({headline:s,standfirst:e}){return d.jsxs(We,{children:[s&&d.jsx("h1",{className:"headline",children:s}),e&&d.jsx("p",{className:"standfirst",children:e})]})}const ze=R.div`
    margin-block: 1em;
    margin-inline: 10px;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5em;

    @media (min-width: 768px) {
        grid-template-columns: repeat(5, 1fr);
        gap: 1em;
    }

    @media (min-width: 1440px) {
        grid-template-columns: repeat(7, 1fr);
        gap: 1em;
    }
`,Ie=R.img`
    width: 100%;
    height: 80px;

    object-fit: cover;
    cursor: pointer;

    // * CONDITIONAL STYLES
    opacity: ${s=>s.isHovered?"1":"0.5"};

    -webkit-filter: ${s=>s.grayscale?"grayscale(100%)":"none"};
    filter: ${s=>s.grayscale?"grayscale(100%)":"none"};

    transition: opacity 250ms ease-in;
`;function fe({data:s,clickedImage:e,setClickedImage:t,setShowTooltip:i,setTooltipPos:r}){function n(l,u){t(u),i(!0),r([l.clientX,l.target.offsetTop+l.target.offsetHeight-20])}const o=s.map(l=>d.jsx(Ie,{src:`https://nuk-tnl-editorial-prod-staticassets.s3.amazonaws.com/2024/times-image-grid/assets/${l.imgSrc}.jpg`,alt:l.name,grayscale:!1,lazy:!0,onClick:u=>n(u,l),isHovered:e===l},l.id));return d.jsx(ze,{children:o})}const Be=R.div`
    position: absolute;
    left: 0px;
    top: ${s=>s.isImageInLastRow?s.tooltipPos[1]-380:s.tooltipPos[1]}px;

    margin-inline: 15%;
    padding: 0.5em;
    border: 1px solid #000;
    z-index: 1;

    display: flex;
    flex-direction: column;
    gap: 1em;
    justify-content: center;
    align-items: flex-start;

    background-color: #ffffff;

    font-family: 'RobotoRegular', sans-serif;
    font-size: 1.6rem;

    opacity: ${s=>s.showTooltip?"1":"0"};
    transition: opacity 250ms ease-in;

    .tooltip-image {
        object-fit: cover;
        width: 150px;
        height: 130px;

        @media (min-width: 768px) {
            height: 180px;
            margin-inline: auto;
            margin-block-start: 0;
            margin-block-end: 15px;
        }
    }

    .tooltip-content {
        h3 {
            font-size: 20px;
            margin-block-end: 10px;
            text-align: left;
        }
        p {
            text-align: left;
            font-size: 16px;
        }
    }

    .tooltip-close {
        font-family: 'RobotoRegular', sans-serif !important;
        font-size: 20px;
        font-weight: bold;

        position: absolute;
        top: 1rem;
        right: 1rem;

        cursor: pointer;

        background-color: inherit;
        border: none;

        opacity: 0.8;
        transition: opacity 250ms ease-in;

        &:hover {
            opacity: 1;
        }
    }

    @media (min-width: 1024px) {
        flex-direction: row;

        .tooltip-content > h3 {
            margin-block-start: 10px;
        }
    }
`;function ge({clickedImage:s,setClickedImage:e,tooltipPos:t,showTooltip:i,setShowTooltip:r,isImageInLastRow:n}){if(!s)return;function o(){r(!1),e(null)}return d.jsxs(Be,{showTooltip:i,tooltipPos:t,isImageInLastRow:n,children:[d.jsx("img",{className:"tooltip-image",src:`https://nuk-tnl-editorial-prod-staticassets.s3.amazonaws.com/2024/times-image-grid/assets/${s.imgSrc}.jpg`,alt:s.name}),d.jsxs("div",{className:"tooltip-content",children:[d.jsx("h3",{children:s.name}),d.jsx("p",{children:s.copy})]}),d.jsx("button",{className:"tooltip-close",onClick:o,children:d.jsx("img",{src:"https://nuk-tnl-editorial-prod-staticassets.s3.amazonaws.com/2023/st-grid-jeremy-clarkson/assets/x.svg"})})]})}function Fe({data:s}){const[e,t]=C.useState(null),[i,r]=C.useState(!1),[n,o]=C.useState([0,0]);let u=s.length-s.indexOf(e)<=7;return d.jsxs(d.Fragment,{children:[d.jsx(J,{}),d.jsxs(de,{children:[d.jsx(me,{headline:"Lorem ipsum dolor sit amet",standfirst:"Nulla vel augue ut erat efficitur scelerisque id vel tellus. Ut iaculis nulla sit amet lorem rutrum, ac luctus sem imperdiet"}),d.jsx(fe,{data:s,clickedImage:e,setClickedImage:t,setShowTooltip:r,setTooltipPos:o}),d.jsx(ge,{clickedImage:e,setClickedImage:t,showTooltip:i,setShowTooltip:r,tooltipPos:n,isImageInLastRow:u})]})]})}R.div`
    position: relative;
    width: 100%;
`;const $e=R.div`
    position: sticky;
    top: 30vh;
    width: 100%;
    overflow: hidden;

    &.edge-to-edge {
        top: 0;
        width: 100vw;
        margin-left: calc(50% - 50vw);
        height: 100vh !important;
    }

    &.bleed {
        top: 30vh;
        width: 40vw;
        margin-left: calc(50% - 20vw);
        height: 500px !important;
    }

    &.edge-to-edge iframe {
        height: 100vh;
    }
`,He=R.div`
    position: relative;
    width: 100%;
    height: 100%;
`,Ye=R.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    opacity: 0;
    transition: opacity 0.4s ease;

    &.overlap {
        opacity: 1;
        pointer-events: auto;
    }
`,Ge=R.section`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`,Ve=R.p`
    line-height: 1.4;
    font-size: ${({size:s})=>s==="lg"?"20px":"16px"} !important;
    padding: 1rem;
    max-width: 600px;
    background: white;
    z-index: 1;
    font-size: 18px;
    line-height: 30px;
`;function Ue({data:s}){const{slides:e=[],imgFit:t="cover",containerWidth:i="edge-to-edge",borderRadius:r="0",fixedImgHeight:n,fontSize:o="md",videoLoop:l=!0,videoAutoplay:u=!0,videoControls:h=!1,videoMute:c=!0}=s,[f,m]=C.useState(0),[g,x]=C.useState([]),P=C.useRef([]),w=C.useRef([]);C.useEffect(()=>{const p=new IntersectionObserver(b=>{b.forEach(E=>{if(E.isIntersecting){const A=parseInt(E.target.dataset.index,10);m(A)}})},{threshold:.6});return P.current.forEach(b=>b&&p.observe(b)),()=>p.disconnect()},[e.length]),C.useEffect(()=>{const p=e.map((b,E)=>E===f);x(p)},[f,e]);const k=p=>g[p]?2:1,S=p=>{var b;if(p.includes("youtube.com")){const E=(b=p.split("v=")[1])==null?void 0:b.split("&")[0];return`https://www.youtube.com/embed/${E}?autoplay=${u?1:0}&loop=${l?1:0}&controls=${h?1:0}&mute=${c?1:0}&playlist=${E}`}else if(p.includes("vimeo.com"))return`https://player.vimeo.com/video/${p.split("/").pop()}?autoplay=${u?1:0}&loop=${l?1:0}&controls=${h?1:0}&muted=${c?1:0}`;return p},N=p=>p.includes("youtube.com")||p.includes("youtu.be"),y=p=>p.endsWith(".mp4");return d.jsxs(de,{children:[d.jsx($e,{style:{height:n||"500px"},className:i==="edge-to-edge"?"edge-to-edge":i==="bleed"?"bleed":"",children:d.jsx(He,{children:e.map((p,b)=>d.jsx(Ye,{ref:E=>w.current[b]=E,className:g[b]?"overlap":"",style:{zIndex:k(b)},children:N(p.media)?d.jsx("iframe",{title:"YouTube video",src:S(p.media),frameBorder:"0",allow:"autoplay; encrypted-media",allowFullScreen:!0,style:{objectFit:t,width:"100%",height:n||(i==="edge-to-edge"?"100vh":"100%"),borderRadius:r}}):y(p.media)?d.jsx("video",{autoPlay:u,loop:l,controls:h,muted:c,style:{objectFit:t,width:"100%",height:n||"100%",borderRadius:r},children:d.jsx("source",{src:p.media,type:"video/mp4"})}):d.jsx("img",{src:p.media,alt:p.altText||"Slide image",style:{objectFit:t,width:"100%",height:n||"100%",borderRadius:r}})},b))})}),d.jsx("div",{className:"scroller-sections",children:e.map((p,b)=>d.jsx(Ge,{className:"trigger","data-index":b,ref:E=>P.current[b]=E,children:p.text&&d.jsx(Ve,{size:o,dangerouslySetInnerHTML:{__html:p.text}})},b))})]})}const Xe=R.div`
    h3 {
        line-height: 20px;
        color: #000;
        font-size: 22px;
        font-weight: 700;
        margin: 0 auto;
        padding: 0 0 4px;
        text-align: left;
    }

    h4 {
        line-height: 20px;
        color: #000;
        font-size: 16px;
        font-weight: 400;
        margin: 0 auto 15px;
        padding: 0 0 4px;
        text-align: left;
    }

    .chart-title {
        line-height: 20px;
        color: #000;
        font-size: 16px;
        font-weight: 400;
        margin: 0 auto 15px;
        padding: 0 0 4px;
        text-align: left;
    }

    .note {
        color: rgb(51, 51, 51);
        font-family: Roboto-Regular, Roboto-Regular-fallback, sans-serif;
        font-size: 9px;
        line-height: 17px;
        margin-bottom: 0px;
        font-weight: 400;
        letter-spacing: 0.5px;
        text-align: left;
    }
`,qe=({data:s={},children:e})=>{const{hed:t="",dek:i="",chartTitle:r="",note:n="",source:o=""}=s;return d.jsxs(Xe,{children:[t&&d.jsx("h3",{children:t}),i&&d.jsx("h4",{children:i}),r&&d.jsx("p",{className:"chart-title",children:r}),e,(n||o)&&d.jsxs("div",{className:"note-container",children:[n&&d.jsx("p",{className:"note",children:n}),o&&d.jsx("p",{className:"note",children:o})]})]})},Je=R.div`
    display: block;
    margin: 20px auto;
    position: relative;

    &.bleed {
        width: 80vw;
        margin-left: calc(-50vw + 50%);
        padding: 0 10vw;
    }

    &.edge-to-edge {
        width: 96vw;
        margin-left: calc(-48vw + 50%);
    }

    @media (max-width: 767px) {
        padding: 0 14px !important;
        &.bleed {
            padding: 0;
        }
    }
`,Ze=R.div`
    margin-top: 10px;
    text-align: left;
    p {
        font-size: 14px;
        color: rgb(105, 105, 105);
        line-height: 19px;
        margin-bottom: 4px;
        text-align: left;
    }
`,Qe=R.div`
    position: absolute;
    top: 0;
    background-color: black;
    color: #fff;
    padding: 10px;
    border-radius: ${({$imgBorderRadius:s})=>`${s} 0 0 0`};

    p {
        color: #fff;
        font-size: 12px;
        margin: 0;
    }
`,Ke=R.div`
    position: relative;

    iframe,
    video,
    img {
        width: 100%;
        height: auto;
        border: none;
        ${({$containerWidth:s,$fixedImgHeight:e,$imgBorderRadius:t})=>s==="edge-to-edge"?R.css`
                    height: 100vh;
                    object-fit: cover;
                    border-radius: ${t};
                `:s==="bleed"||s==="inline"&&e?R.css`
                    height: ${e};
                    object-fit: cover;
                    border-radius: ${t};
                `:R.css`
                border-radius: ${t};
            `}
    }
`,et=(s,e,t,i,r)=>{var n;if(s.includes("youtube.com")){const o=(n=s.split("v=")[1])==null?void 0:n.split("&")[0];return`https://www.youtube.com/embed/${o}?autoplay=${e?1:0}&loop=${t?1:0}&controls=${i?1:0}&mute=${r?1:0}&playlist=${o}`}else if(s.includes("vimeo.com"))return`https://player.vimeo.com/video/${s.split("/").pop()}?autoplay=${e?1:0}&loop=${t?1:0}&controls=${i?1:0}&muted=${r?1:0}`;return s},tt=({data:s})=>{if(!s)return null;const{fixedImgHeight:e=null,containerWidth:t="inline",imgBorderRadius:i=null,media:r="",videoLoop:n="true",videoAutoplay:o="true",videoControls:l="false",videoMute:u="true",text:h,caption:c,altText:f}=s,w=et(r,o===!0,n===!0,l===!0,u===!0),k=d.jsxs(Ke,{$containerWidth:t,$fixedImgHeight:e,$imgBorderRadius:i,children:[r.includes("youtube.com")||r.includes("vimeo.com")?d.jsx("iframe",{src:w,title:"Embedded media",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}):r.endsWith(".mp4")?d.jsxs("video",{autoPlay:o,loop:n,controls:l,muted:u,children:[d.jsx("source",{src:r,type:"video/mp4"}),d.jsx("track",{kind:"captions",src:r.replace(".mp4",".vtt"),label:"English"}),"Your browser does not support the video tag."]}):d.jsx("img",{src:r,alt:f}),h&&d.jsx(Ze,{$imgBorderRadius:i,dangerouslySetInnerHTML:{__html:h}}),c&&d.jsx(Qe,{$imgBorderRadius:i,dangerouslySetInnerHTML:{__html:c}})]});return d.jsxs(d.Fragment,{children:[d.jsx(J,{}),d.jsx(Je,{className:t,children:d.jsx(qe,{data:s,children:k})})]})};O.AudioPlayer=Ne,O.Equalizer=ce,O.Grid=fe,O.Header=me,O.ImageGrid=Fe,O.MediaBlock=tt,O.ScrollStory=Ue,O.Tooltip=ge,Object.defineProperty(O,Symbol.toStringTag,{value:"Module"})});
