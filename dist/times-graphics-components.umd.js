(function(_,R){typeof exports=="object"&&typeof module<"u"?R(exports,require("react"),require("styled-components")):typeof define=="function"&&define.amd?define(["exports","react","styled-components"],R):(_=typeof globalThis<"u"?globalThis:_||self,R(_.TimesGraphicsComponents={},_.React,_.styled))})(this,function(_,R,S){"use strict";var U={exports:{}},$={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var re;function Te(){if(re)return $;re=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(i,o,r){var s=null;if(r!==void 0&&(s=""+r),o.key!==void 0&&(s=""+o.key),"key"in o){r={};for(var l in o)l!=="key"&&(r[l]=o[l])}else r=o;return o=r.ref,{$$typeof:n,type:i,key:s,ref:o!==void 0?o:null,props:r}}return $.Fragment=e,$.jsx=t,$.jsxs=t,$}var H={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ne;function Re(){return ne||(ne=1,process.env.NODE_ENV!=="production"&&function(){function n(a){if(a==null)return null;if(typeof a=="function")return a.$$typeof===z?null:a.displayName||a.name||null;if(typeof a=="string")return a;switch(a){case E:return"Fragment";case T:return"Profiler";case x:return"StrictMode";case h:return"Suspense";case b:return"SuspenseList";case A:return"Activity"}if(typeof a=="object")switch(typeof a.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),a.$$typeof){case w:return"Portal";case N:return(a.displayName||"Context")+".Provider";case M:return(a._context.displayName||"Context")+".Consumer";case y:var v=a.render;return a=a.displayName,a||(a=v.displayName||v.name||"",a=a!==""?"ForwardRef("+a+")":"ForwardRef"),a;case k:return v=a.displayName||null,v!==null?v:n(a.type)||"Memo";case W:v=a._payload,a=a._init;try{return n(a(v))}catch{}}return null}function e(a){return""+a}function t(a){try{e(a);var v=!1}catch{v=!0}if(v){v=console;var C=v.error,j=typeof Symbol=="function"&&Symbol.toStringTag&&a[Symbol.toStringTag]||a.constructor.name||"Object";return C.call(v,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",j),e(a)}}function i(a){if(a===E)return"<>";if(typeof a=="object"&&a!==null&&a.$$typeof===W)return"<...>";try{var v=n(a);return v?"<"+v+">":"<...>"}catch{return"<...>"}}function o(){var a=B.A;return a===null?null:a.getOwner()}function r(){return Error("react-stack-top-frame")}function s(a){if(V.call(a,"key")){var v=Object.getOwnPropertyDescriptor(a,"key").get;if(v&&v.isReactWarning)return!1}return a.key!==void 0}function l(a,v){function C(){be||(be=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",v))}C.isReactWarning=!0,Object.defineProperty(a,"key",{get:C,configurable:!0})}function u(){var a=n(this.type);return ve[a]||(ve[a]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),a=this.props.ref,a!==void 0?a:null}function f(a,v,C,j,L,O,te,ie){return C=O.ref,a={$$typeof:g,type:a,key:v,props:O,_owner:L},(C!==void 0?C:null)!==null?Object.defineProperty(a,"ref",{enumerable:!1,get:u}):Object.defineProperty(a,"ref",{enumerable:!1,value:null}),a._store={},Object.defineProperty(a._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(a,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(a,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:te}),Object.defineProperty(a,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:ie}),Object.freeze&&(Object.freeze(a.props),Object.freeze(a)),a}function d(a,v,C,j,L,O,te,ie){var D=v.children;if(D!==void 0)if(j)if(it(D)){for(j=0;j<D.length;j++)p(D[j]);Object.freeze&&Object.freeze(D)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else p(D);if(V.call(v,"key")){D=n(a);var F=Object.keys(v).filter(function(ot){return ot!=="key"});j=0<F.length?"{key: someKey, "+F.join(": ..., ")+": ...}":"{key: someKey}",xe[D+j]||(F=0<F.length?"{"+F.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,j,D,F,D),xe[D+j]=!0)}if(D=null,C!==void 0&&(t(C),D=""+C),s(v)&&(t(v.key),D=""+v.key),"key"in v){C={};for(var oe in v)oe!=="key"&&(C[oe]=v[oe])}else C=v;return D&&l(C,typeof a=="function"?a.displayName||a.name||"Unknown":a),f(a,D,O,L,o(),C,te,ie)}function p(a){typeof a=="object"&&a!==null&&a.$$typeof===g&&a._store&&(a._store.validated=1)}var m=R,g=Symbol.for("react.transitional.element"),w=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),x=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),M=Symbol.for("react.consumer"),N=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),b=Symbol.for("react.suspense_list"),k=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),z=Symbol.for("react.client.reference"),B=m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=Object.prototype.hasOwnProperty,it=Array.isArray,ee=console.createTask?console.createTask:function(){return null};m={"react-stack-bottom-frame":function(a){return a()}};var be,ve={},ye=m["react-stack-bottom-frame"].bind(m,r)(),we=ee(i(r)),xe={};H.Fragment=E,H.jsx=function(a,v,C,j,L){var O=1e4>B.recentlyCreatedOwnerStacks++;return d(a,v,C,!1,j,L,O?Error("react-stack-top-frame"):ye,O?ee(i(a)):we)},H.jsxs=function(a,v,C,j,L){var O=1e4>B.recentlyCreatedOwnerStacks++;return d(a,v,C,!0,j,L,O?Error("react-stack-top-frame"):ye,O?ee(i(a)):we)}}()),H}var se;function ke(){return se||(se=1,process.env.NODE_ENV==="production"?U.exports=Te():U.exports=Re()),U.exports}var c=ke();function P(n,e,t,i){return new(t||(t=Promise))(function(o,r){function s(f){try{u(i.next(f))}catch(d){r(d)}}function l(f){try{u(i.throw(f))}catch(d){r(d)}}function u(f){var d;f.done?o(f.value):(d=f.value,d instanceof t?d:new t(function(p){p(d)})).then(s,l)}u((i=i.apply(n,e||[])).next())})}typeof SuppressedError=="function"&&SuppressedError;class Y{constructor(){this.listeners={}}on(e,t,i){if(this.listeners[e]||(this.listeners[e]=new Set),this.listeners[e].add(t),i==null?void 0:i.once){const o=()=>{this.un(e,o),this.un(e,t)};return this.on(e,o),o}return()=>this.un(e,t)}un(e,t){var i;(i=this.listeners[e])===null||i===void 0||i.delete(t)}once(e,t){return this.on(e,t,{once:!0})}unAll(){this.listeners={}}emit(e,...t){this.listeners[e]&&this.listeners[e].forEach(i=>i(...t))}}const X={decode:function(n,e){return P(this,void 0,void 0,function*(){const t=new AudioContext({sampleRate:e});return t.decodeAudioData(n).finally(()=>t.close())})},createBuffer:function(n,e){return typeof n[0]=="number"&&(n=[n]),function(t){const i=t[0];if(i.some(o=>o>1||o<-1)){const o=i.length;let r=0;for(let s=0;s<o;s++){const l=Math.abs(i[s]);l>r&&(r=l)}for(const s of t)for(let l=0;l<o;l++)s[l]/=r}}(n),{duration:e,length:n[0].length,sampleRate:n[0].length/e,numberOfChannels:n.length,getChannelData:t=>n==null?void 0:n[t],copyFromChannel:AudioBuffer.prototype.copyFromChannel,copyToChannel:AudioBuffer.prototype.copyToChannel}}};function ae(n,e){const t=e.xmlns?document.createElementNS(e.xmlns,n):document.createElement(n);for(const[i,o]of Object.entries(e))if(i==="children")for(const[r,s]of Object.entries(e))typeof s=="string"?t.appendChild(document.createTextNode(s)):t.appendChild(ae(r,s));else i==="style"?Object.assign(t.style,o):i==="textContent"?t.textContent=o:t.setAttribute(i,o.toString());return t}function le(n,e,t){const i=ae(n,e||{});return t==null||t.appendChild(i),i}var Me=Object.freeze({__proto__:null,createElement:le,default:le});const Ce={fetchBlob:function(n,e,t){return P(this,void 0,void 0,function*(){const i=yield fetch(n,t);if(i.status>=400)throw new Error(`Failed to fetch ${n}: ${i.status} (${i.statusText})`);return function(o,r){P(this,void 0,void 0,function*(){if(!o.body||!o.headers)return;const s=o.body.getReader(),l=Number(o.headers.get("Content-Length"))||0;let u=0;const f=p=>P(this,void 0,void 0,function*(){u+=(p==null?void 0:p.length)||0;const m=Math.round(u/l*100);r(m)}),d=()=>P(this,void 0,void 0,function*(){let p;try{p=yield s.read()}catch{return}p.done||(f(p.value),yield d())});d()})}(i.clone(),e),i.blob()})}};class Se extends Y{constructor(e){super(),this.isExternalMedia=!1,e.media?(this.media=e.media,this.isExternalMedia=!0):this.media=document.createElement("audio"),e.mediaControls&&(this.media.controls=!0),e.autoplay&&(this.media.autoplay=!0),e.playbackRate!=null&&this.onMediaEvent("canplay",()=>{e.playbackRate!=null&&(this.media.playbackRate=e.playbackRate)},{once:!0})}onMediaEvent(e,t,i){return this.media.addEventListener(e,t,i),()=>this.media.removeEventListener(e,t,i)}getSrc(){return this.media.currentSrc||this.media.src||""}revokeSrc(){const e=this.getSrc();e.startsWith("blob:")&&URL.revokeObjectURL(e)}canPlayType(e){return this.media.canPlayType(e)!==""}setSrc(e,t){const i=this.getSrc();if(e&&i===e)return;this.revokeSrc();const o=t instanceof Blob&&(this.canPlayType(t.type)||!e)?URL.createObjectURL(t):e;i&&(this.media.src="");try{this.media.src=o}catch{this.media.src=e}}destroy(){this.isExternalMedia||(this.media.pause(),this.media.remove(),this.revokeSrc(),this.media.src="",this.media.load())}setMediaElement(e){this.media=e}play(){return P(this,void 0,void 0,function*(){return this.media.play()})}pause(){this.media.pause()}isPlaying(){return!this.media.paused&&!this.media.ended}setTime(e){this.media.currentTime=Math.max(0,Math.min(e,this.getDuration()))}getDuration(){return this.media.duration}getCurrentTime(){return this.media.currentTime}getVolume(){return this.media.volume}setVolume(e){this.media.volume=e}getMuted(){return this.media.muted}setMuted(e){this.media.muted=e}getPlaybackRate(){return this.media.playbackRate}isSeeking(){return this.media.seeking}setPlaybackRate(e,t){t!=null&&(this.media.preservesPitch=t),this.media.playbackRate=e}getMediaElement(){return this.media}setSinkId(e){return this.media.setSinkId(e)}}class I extends Y{constructor(e,t){super(),this.timeouts=[],this.isScrollable=!1,this.audioData=null,this.resizeObserver=null,this.lastContainerWidth=0,this.isDragging=!1,this.subscriptions=[],this.unsubscribeOnScroll=[],this.subscriptions=[],this.options=e;const i=this.parentFromOptionsContainer(e.container);this.parent=i;const[o,r]=this.initHtml();i.appendChild(o),this.container=o,this.scrollContainer=r.querySelector(".scroll"),this.wrapper=r.querySelector(".wrapper"),this.canvasWrapper=r.querySelector(".canvases"),this.progressWrapper=r.querySelector(".progress"),this.cursor=r.querySelector(".cursor"),t&&r.appendChild(t),this.initEvents()}parentFromOptionsContainer(e){let t;if(typeof e=="string"?t=document.querySelector(e):e instanceof HTMLElement&&(t=e),!t)throw new Error("Container not found");return t}initEvents(){const e=t=>{const i=this.wrapper.getBoundingClientRect(),o=t.clientX-i.left,r=t.clientY-i.top;return[o/i.width,r/i.height]};if(this.wrapper.addEventListener("click",t=>{const[i,o]=e(t);this.emit("click",i,o)}),this.wrapper.addEventListener("dblclick",t=>{const[i,o]=e(t);this.emit("dblclick",i,o)}),this.options.dragToSeek!==!0&&typeof this.options.dragToSeek!="object"||this.initDrag(),this.scrollContainer.addEventListener("scroll",()=>{const{scrollLeft:t,scrollWidth:i,clientWidth:o}=this.scrollContainer,r=t/i,s=(t+o)/i;this.emit("scroll",r,s,t,t+o)}),typeof ResizeObserver=="function"){const t=this.createDelay(100);this.resizeObserver=new ResizeObserver(()=>{t().then(()=>this.onContainerResize()).catch(()=>{})}),this.resizeObserver.observe(this.scrollContainer)}}onContainerResize(){const e=this.parent.clientWidth;e===this.lastContainerWidth&&this.options.height!=="auto"||(this.lastContainerWidth=e,this.reRender())}initDrag(){this.subscriptions.push(function(e,t,i,o,r=3,s=0,l=100){if(!e)return()=>{};const u=matchMedia("(pointer: coarse)").matches;let f=()=>{};const d=p=>{if(p.button!==s)return;p.preventDefault(),p.stopPropagation();let m=p.clientX,g=p.clientY,w=!1;const E=Date.now(),x=h=>{if(h.preventDefault(),h.stopPropagation(),u&&Date.now()-E<l)return;const b=h.clientX,k=h.clientY,W=b-m,A=k-g;if(w||Math.abs(W)>r||Math.abs(A)>r){const z=e.getBoundingClientRect(),{left:B,top:V}=z;w||(i==null||i(m-B,g-V),w=!0),t(W,A,b-B,k-V),m=b,g=k}},T=h=>{if(w){const b=h.clientX,k=h.clientY,W=e.getBoundingClientRect(),{left:A,top:z}=W;o==null||o(b-A,k-z)}f()},M=h=>{h.relatedTarget&&h.relatedTarget!==document.documentElement||T(h)},N=h=>{w&&(h.stopPropagation(),h.preventDefault())},y=h=>{w&&h.preventDefault()};document.addEventListener("pointermove",x),document.addEventListener("pointerup",T),document.addEventListener("pointerout",M),document.addEventListener("pointercancel",M),document.addEventListener("touchmove",y,{passive:!1}),document.addEventListener("click",N,{capture:!0}),f=()=>{document.removeEventListener("pointermove",x),document.removeEventListener("pointerup",T),document.removeEventListener("pointerout",M),document.removeEventListener("pointercancel",M),document.removeEventListener("touchmove",y),setTimeout(()=>{document.removeEventListener("click",N,{capture:!0})},10)}};return e.addEventListener("pointerdown",d),()=>{f(),e.removeEventListener("pointerdown",d)}}(this.wrapper,(e,t,i)=>{this.emit("drag",Math.max(0,Math.min(1,i/this.wrapper.getBoundingClientRect().width)))},e=>{this.isDragging=!0,this.emit("dragstart",Math.max(0,Math.min(1,e/this.wrapper.getBoundingClientRect().width)))},e=>{this.isDragging=!1,this.emit("dragend",Math.max(0,Math.min(1,e/this.wrapper.getBoundingClientRect().width)))}))}getHeight(e,t){var i;const o=((i=this.audioData)===null||i===void 0?void 0:i.numberOfChannels)||1;if(e==null)return 128;if(!isNaN(Number(e)))return Number(e);if(e==="auto"){const r=this.parent.clientHeight||128;return t!=null&&t.every(s=>!s.overlay)?r/o:r}return 128}initHtml(){const e=document.createElement("div"),t=e.attachShadow({mode:"open"}),i=this.options.cspNonce&&typeof this.options.cspNonce=="string"?this.options.cspNonce.replace(/"/g,""):"";return t.innerHTML=`
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
    `,[e,t]}setOptions(e){if(this.options.container!==e.container){const t=this.parentFromOptionsContainer(e.container);t.appendChild(this.container),this.parent=t}e.dragToSeek!==!0&&typeof this.options.dragToSeek!="object"||this.initDrag(),this.options=e,this.reRender()}getWrapper(){return this.wrapper}getWidth(){return this.scrollContainer.clientWidth}getScroll(){return this.scrollContainer.scrollLeft}setScroll(e){this.scrollContainer.scrollLeft=e}setScrollPercentage(e){const{scrollWidth:t}=this.scrollContainer,i=t*e;this.setScroll(i)}destroy(){var e,t;this.subscriptions.forEach(i=>i()),this.container.remove(),(e=this.resizeObserver)===null||e===void 0||e.disconnect(),(t=this.unsubscribeOnScroll)===null||t===void 0||t.forEach(i=>i()),this.unsubscribeOnScroll=[]}createDelay(e=10){let t,i;const o=()=>{t&&clearTimeout(t),i&&i()};return this.timeouts.push(o),()=>new Promise((r,s)=>{o(),i=s,t=setTimeout(()=>{t=void 0,i=void 0,r()},e)})}convertColorValues(e){if(!Array.isArray(e))return e||"";if(e.length<2)return e[0]||"";const t=document.createElement("canvas"),i=t.getContext("2d"),o=t.height*(window.devicePixelRatio||1),r=i.createLinearGradient(0,0,0,o),s=1/(e.length-1);return e.forEach((l,u)=>{const f=u*s;r.addColorStop(f,l)}),r}getPixelRatio(){return Math.max(1,window.devicePixelRatio||1)}renderBarWaveform(e,t,i,o){const r=e[0],s=e[1]||e[0],l=r.length,{width:u,height:f}=i.canvas,d=f/2,p=this.getPixelRatio(),m=t.barWidth?t.barWidth*p:1,g=t.barGap?t.barGap*p:t.barWidth?m/2:0,w=t.barRadius||0,E=u/(m+g)/l,x=w&&"roundRect"in i?"roundRect":"rect";i.beginPath();let T=0,M=0,N=0;for(let y=0;y<=l;y++){const h=Math.round(y*E);if(h>T){const W=Math.round(M*d*o),A=W+Math.round(N*d*o)||1;let z=d-W;t.barAlign==="top"?z=0:t.barAlign==="bottom"&&(z=f-A),i[x](T*(m+g),z,m,A,w),T=h,M=0,N=0}const b=Math.abs(r[y]||0),k=Math.abs(s[y]||0);b>M&&(M=b),k>N&&(N=k)}i.fill(),i.closePath()}renderLineWaveform(e,t,i,o){const r=s=>{const l=e[s]||e[0],u=l.length,{height:f}=i.canvas,d=f/2,p=i.canvas.width/u;i.moveTo(0,d);let m=0,g=0;for(let w=0;w<=u;w++){const E=Math.round(w*p);if(E>m){const T=d+(Math.round(g*d*o)||1)*(s===0?-1:1);i.lineTo(m,T),m=E,g=0}const x=Math.abs(l[w]||0);x>g&&(g=x)}i.lineTo(m,d)};i.beginPath(),r(0),r(1),i.fill(),i.closePath()}renderWaveform(e,t,i){if(i.fillStyle=this.convertColorValues(t.waveColor),t.renderFunction)return void t.renderFunction(e,i);let o=t.barHeight||1;if(t.normalize){const r=Array.from(e[0]).reduce((s,l)=>Math.max(s,Math.abs(l)),0);o=r?1/r:1}t.barWidth||t.barGap||t.barAlign?this.renderBarWaveform(e,t,i,o):this.renderLineWaveform(e,t,i,o)}renderSingleCanvas(e,t,i,o,r,s,l){const u=this.getPixelRatio(),f=document.createElement("canvas");f.width=Math.round(i*u),f.height=Math.round(o*u),f.style.width=`${i}px`,f.style.height=`${o}px`,f.style.left=`${Math.round(r)}px`,s.appendChild(f);const d=f.getContext("2d");if(this.renderWaveform(e,t,d),f.width>0&&f.height>0){const p=f.cloneNode(),m=p.getContext("2d");m.drawImage(f,0,0),m.globalCompositeOperation="source-in",m.fillStyle=this.convertColorValues(t.progressColor),m.fillRect(0,0,f.width,f.height),l.appendChild(p)}}renderMultiCanvas(e,t,i,o,r,s){const l=this.getPixelRatio(),{clientWidth:u}=this.scrollContainer,f=i/l;let d=Math.min(I.MAX_CANVAS_WIDTH,u,f),p={};if(d===0)return;if(t.barWidth||t.barGap){const x=t.barWidth||.5,T=x+(t.barGap||x/2);d%T!=0&&(d=Math.floor(d/T)*T)}const m=x=>{if(x<0||x>=g||p[x])return;p[x]=!0;const T=x*d,M=Math.min(f-T,d);if(M<=0)return;const N=e.map(y=>{const h=Math.floor(T/f*y.length),b=Math.floor((T+M)/f*y.length);return y.slice(h,b)});this.renderSingleCanvas(N,t,M,o,T,r,s)},g=Math.ceil(f/d);if(!this.isScrollable){for(let x=0;x<g;x++)m(x);return}const w=this.scrollContainer.scrollLeft/f,E=Math.floor(w*g);if(m(E-1),m(E),m(E+1),g>1){const x=this.on("scroll",()=>{const{scrollLeft:T}=this.scrollContainer,M=Math.floor(T/f*g);Object.keys(p).length>I.MAX_NODES&&(r.innerHTML="",s.innerHTML="",p={}),m(M-1),m(M),m(M+1)});this.unsubscribeOnScroll.push(x)}}renderChannel(e,t,i,o){var{overlay:r}=t,s=function(d,p){var m={};for(var g in d)Object.prototype.hasOwnProperty.call(d,g)&&p.indexOf(g)<0&&(m[g]=d[g]);if(d!=null&&typeof Object.getOwnPropertySymbols=="function"){var w=0;for(g=Object.getOwnPropertySymbols(d);w<g.length;w++)p.indexOf(g[w])<0&&Object.prototype.propertyIsEnumerable.call(d,g[w])&&(m[g[w]]=d[g[w]])}return m}(t,["overlay"]);const l=document.createElement("div"),u=this.getHeight(s.height,s.splitChannels);l.style.height=`${u}px`,r&&o>0&&(l.style.marginTop=`-${u}px`),this.canvasWrapper.style.minHeight=`${u}px`,this.canvasWrapper.appendChild(l);const f=l.cloneNode();this.progressWrapper.appendChild(f),this.renderMultiCanvas(e,s,i,u,l,f)}render(e){return P(this,void 0,void 0,function*(){var t;this.timeouts.forEach(u=>u()),this.timeouts=[],this.canvasWrapper.innerHTML="",this.progressWrapper.innerHTML="",this.options.width!=null&&(this.scrollContainer.style.width=typeof this.options.width=="number"?`${this.options.width}px`:this.options.width);const i=this.getPixelRatio(),o=this.scrollContainer.clientWidth,r=Math.ceil(e.duration*(this.options.minPxPerSec||0));this.isScrollable=r>o;const s=this.options.fillParent&&!this.isScrollable,l=(s?o:r)*i;if(this.wrapper.style.width=s?"100%":`${r}px`,this.scrollContainer.style.overflowX=this.isScrollable?"auto":"hidden",this.scrollContainer.classList.toggle("noScrollbar",!!this.options.hideScrollbar),this.cursor.style.backgroundColor=`${this.options.cursorColor||this.options.progressColor}`,this.cursor.style.width=`${this.options.cursorWidth}px`,this.audioData=e,this.emit("render"),this.options.splitChannels)for(let u=0;u<e.numberOfChannels;u++){const f=Object.assign(Object.assign({},this.options),(t=this.options.splitChannels)===null||t===void 0?void 0:t[u]);this.renderChannel([e.getChannelData(u)],f,l,u)}else{const u=[e.getChannelData(0)];e.numberOfChannels>1&&u.push(e.getChannelData(1)),this.renderChannel(u,this.options,l,0)}Promise.resolve().then(()=>this.emit("rendered"))})}reRender(){if(this.unsubscribeOnScroll.forEach(i=>i()),this.unsubscribeOnScroll=[],!this.audioData)return;const{scrollWidth:e}=this.scrollContainer,{right:t}=this.progressWrapper.getBoundingClientRect();if(this.render(this.audioData),this.isScrollable&&e!==this.scrollContainer.scrollWidth){const{right:i}=this.progressWrapper.getBoundingClientRect();let o=i-t;o*=2,o=o<0?Math.floor(o):Math.ceil(o),o/=2,this.scrollContainer.scrollLeft+=o}}zoom(e){this.options.minPxPerSec=e,this.reRender()}scrollIntoView(e,t=!1){const{scrollLeft:i,scrollWidth:o,clientWidth:r}=this.scrollContainer,s=e*o,l=i,u=i+r,f=r/2;if(this.isDragging)s+30>u?this.scrollContainer.scrollLeft+=30:s-30<l&&(this.scrollContainer.scrollLeft-=30);else{(s<l||s>u)&&(this.scrollContainer.scrollLeft=s-(this.options.autoCenter?f:0));const d=s-i-f;t&&this.options.autoCenter&&d>0&&(this.scrollContainer.scrollLeft+=Math.min(d,10))}{const d=this.scrollContainer.scrollLeft,p=d/o,m=(d+r)/o;this.emit("scroll",p,m,d,d+r)}}renderProgress(e,t){if(isNaN(e))return;const i=100*e;this.canvasWrapper.style.clipPath=`polygon(${i}% 0, 100% 0, 100% 100%, ${i}% 100%)`,this.progressWrapper.style.width=`${i}%`,this.cursor.style.left=`${i}%`,this.cursor.style.transform=`translateX(-${Math.round(i)===100?this.options.cursorWidth:0}px)`,this.isScrollable&&this.options.autoScroll&&this.scrollIntoView(e,t)}exportImage(e,t,i){return P(this,void 0,void 0,function*(){const o=this.canvasWrapper.querySelectorAll("canvas");if(!o.length)throw new Error("No waveform data");if(i==="dataURL"){const r=Array.from(o).map(s=>s.toDataURL(e,t));return Promise.resolve(r)}return Promise.all(Array.from(o).map(r=>new Promise((s,l)=>{r.toBlob(u=>{u?s(u):l(new Error("Could not export image"))},e,t)})))})}}I.MAX_CANVAS_WIDTH=8e3,I.MAX_NODES=10;class Ee extends Y{constructor(){super(...arguments),this.unsubscribe=()=>{}}start(){this.unsubscribe=this.on("tick",()=>{requestAnimationFrame(()=>{this.emit("tick")})}),this.emit("tick")}stop(){this.unsubscribe()}destroy(){this.unsubscribe()}}class q extends Y{constructor(e=new AudioContext){super(),this.bufferNode=null,this.playStartTime=0,this.playedDuration=0,this._muted=!1,this._playbackRate=1,this._duration=void 0,this.buffer=null,this.currentSrc="",this.paused=!0,this.crossOrigin=null,this.seeking=!1,this.autoplay=!1,this.addEventListener=this.on,this.removeEventListener=this.un,this.audioContext=e,this.gainNode=this.audioContext.createGain(),this.gainNode.connect(this.audioContext.destination)}load(){return P(this,void 0,void 0,function*(){})}get src(){return this.currentSrc}set src(e){if(this.currentSrc=e,this._duration=void 0,!e)return this.buffer=null,void this.emit("emptied");fetch(e).then(t=>{if(t.status>=400)throw new Error(`Failed to fetch ${e}: ${t.status} (${t.statusText})`);return t.arrayBuffer()}).then(t=>this.currentSrc!==e?null:this.audioContext.decodeAudioData(t)).then(t=>{this.currentSrc===e&&(this.buffer=t,this.emit("loadedmetadata"),this.emit("canplay"),this.autoplay&&this.play())})}_play(){var e;if(!this.paused)return;this.paused=!1,(e=this.bufferNode)===null||e===void 0||e.disconnect(),this.bufferNode=this.audioContext.createBufferSource(),this.buffer&&(this.bufferNode.buffer=this.buffer),this.bufferNode.playbackRate.value=this._playbackRate,this.bufferNode.connect(this.gainNode);let t=this.playedDuration*this._playbackRate;(t>=this.duration||t<0)&&(t=0,this.playedDuration=0),this.bufferNode.start(this.audioContext.currentTime,t),this.playStartTime=this.audioContext.currentTime,this.bufferNode.onended=()=>{this.currentTime>=this.duration&&(this.pause(),this.emit("ended"))}}_pause(){var e;this.paused=!0,(e=this.bufferNode)===null||e===void 0||e.stop(),this.playedDuration+=this.audioContext.currentTime-this.playStartTime}play(){return P(this,void 0,void 0,function*(){this.paused&&(this._play(),this.emit("play"))})}pause(){this.paused||(this._pause(),this.emit("pause"))}stopAt(e){const t=e-this.currentTime,i=this.bufferNode;i==null||i.stop(this.audioContext.currentTime+t),i==null||i.addEventListener("ended",()=>{i===this.bufferNode&&(this.bufferNode=null,this.pause())},{once:!0})}setSinkId(e){return P(this,void 0,void 0,function*(){return this.audioContext.setSinkId(e)})}get playbackRate(){return this._playbackRate}set playbackRate(e){this._playbackRate=e,this.bufferNode&&(this.bufferNode.playbackRate.value=e)}get currentTime(){return(this.paused?this.playedDuration:this.playedDuration+(this.audioContext.currentTime-this.playStartTime))*this._playbackRate}set currentTime(e){const t=!this.paused;t&&this._pause(),this.playedDuration=e/this._playbackRate,t&&this._play(),this.emit("seeking"),this.emit("timeupdate")}get duration(){var e,t;return(e=this._duration)!==null&&e!==void 0?e:((t=this.buffer)===null||t===void 0?void 0:t.duration)||0}set duration(e){this._duration=e}get volume(){return this.gainNode.gain.value}set volume(e){this.gainNode.gain.value=e,this.emit("volumechange")}get muted(){return this._muted}set muted(e){this._muted!==e&&(this._muted=e,this._muted?this.gainNode.disconnect():this.gainNode.connect(this.audioContext.destination))}canPlayType(e){return/^(audio|video)\//.test(e)}getGainNode(){return this.gainNode}getChannelData(){const e=[];if(!this.buffer)return e;const t=this.buffer.numberOfChannels;for(let i=0;i<t;i++)e.push(this.buffer.getChannelData(i));return e}}const Pe={waveColor:"#999",progressColor:"#555",cursorWidth:1,minPxPerSec:0,fillParent:!0,interact:!0,dragToSeek:!1,autoScroll:!0,autoCenter:!0,sampleRate:8e3};class G extends Se{static create(e){return new G(e)}constructor(e){const t=e.media||(e.backend==="WebAudio"?new q:void 0);super({media:t,mediaControls:e.mediaControls,autoplay:e.autoplay,playbackRate:e.audioRate}),this.plugins=[],this.decodedData=null,this.stopAtPosition=null,this.subscriptions=[],this.mediaSubscriptions=[],this.abortController=null,this.options=Object.assign({},Pe,e),this.timer=new Ee;const i=t?void 0:this.getMediaElement();this.renderer=new I(this.options,i),this.initPlayerEvents(),this.initRendererEvents(),this.initTimerEvents(),this.initPlugins();const o=this.options.url||this.getSrc()||"";Promise.resolve().then(()=>{this.emit("init");const{peaks:r,duration:s}=this.options;(o||r&&s)&&this.load(o,r,s).catch(()=>null)})}updateProgress(e=this.getCurrentTime()){return this.renderer.renderProgress(e/this.getDuration(),this.isPlaying()),e}initTimerEvents(){this.subscriptions.push(this.timer.on("tick",()=>{if(!this.isSeeking()){const e=this.updateProgress();this.emit("timeupdate",e),this.emit("audioprocess",e),this.stopAtPosition!=null&&this.isPlaying()&&e>=this.stopAtPosition&&this.pause()}}))}initPlayerEvents(){this.isPlaying()&&(this.emit("play"),this.timer.start()),this.mediaSubscriptions.push(this.onMediaEvent("timeupdate",()=>{const e=this.updateProgress();this.emit("timeupdate",e)}),this.onMediaEvent("play",()=>{this.emit("play"),this.timer.start()}),this.onMediaEvent("pause",()=>{this.emit("pause"),this.timer.stop(),this.stopAtPosition=null}),this.onMediaEvent("emptied",()=>{this.timer.stop(),this.stopAtPosition=null}),this.onMediaEvent("ended",()=>{this.emit("timeupdate",this.getDuration()),this.emit("finish"),this.stopAtPosition=null}),this.onMediaEvent("seeking",()=>{this.emit("seeking",this.getCurrentTime())}),this.onMediaEvent("error",()=>{var e;this.emit("error",(e=this.getMediaElement().error)!==null&&e!==void 0?e:new Error("Media error")),this.stopAtPosition=null}))}initRendererEvents(){this.subscriptions.push(this.renderer.on("click",(e,t)=>{this.options.interact&&(this.seekTo(e),this.emit("interaction",e*this.getDuration()),this.emit("click",e,t))}),this.renderer.on("dblclick",(e,t)=>{this.emit("dblclick",e,t)}),this.renderer.on("scroll",(e,t,i,o)=>{const r=this.getDuration();this.emit("scroll",e*r,t*r,i,o)}),this.renderer.on("render",()=>{this.emit("redraw")}),this.renderer.on("rendered",()=>{this.emit("redrawcomplete")}),this.renderer.on("dragstart",e=>{this.emit("dragstart",e)}),this.renderer.on("dragend",e=>{this.emit("dragend",e)}));{let e;this.subscriptions.push(this.renderer.on("drag",t=>{if(!this.options.interact)return;let i;this.renderer.renderProgress(t),clearTimeout(e),this.isPlaying()?i=0:this.options.dragToSeek===!0?i=200:typeof this.options.dragToSeek=="object"&&this.options.dragToSeek!==void 0&&(i=this.options.dragToSeek.debounceTime),e=setTimeout(()=>{this.seekTo(t)},i),this.emit("interaction",t*this.getDuration()),this.emit("drag",t)}))}}initPlugins(){var e;!((e=this.options.plugins)===null||e===void 0)&&e.length&&this.options.plugins.forEach(t=>{this.registerPlugin(t)})}unsubscribePlayerEvents(){this.mediaSubscriptions.forEach(e=>e()),this.mediaSubscriptions=[]}setOptions(e){this.options=Object.assign({},this.options,e),e.duration&&!e.peaks&&(this.decodedData=X.createBuffer(this.exportPeaks(),e.duration)),e.peaks&&e.duration&&(this.decodedData=X.createBuffer(e.peaks,e.duration)),this.renderer.setOptions(this.options),e.audioRate&&this.setPlaybackRate(e.audioRate),e.mediaControls!=null&&(this.getMediaElement().controls=e.mediaControls)}registerPlugin(e){return e._init(this),this.plugins.push(e),this.subscriptions.push(e.once("destroy",()=>{this.plugins=this.plugins.filter(t=>t!==e)})),e}getWrapper(){return this.renderer.getWrapper()}getWidth(){return this.renderer.getWidth()}getScroll(){return this.renderer.getScroll()}setScroll(e){return this.renderer.setScroll(e)}setScrollTime(e){const t=e/this.getDuration();this.renderer.setScrollPercentage(t)}getActivePlugins(){return this.plugins}loadAudio(e,t,i,o){return P(this,void 0,void 0,function*(){var r;if(this.emit("load",e),!this.options.media&&this.isPlaying()&&this.pause(),this.decodedData=null,this.stopAtPosition=null,!t&&!i){const l=this.options.fetchParams||{};window.AbortController&&!l.signal&&(this.abortController=new AbortController,l.signal=(r=this.abortController)===null||r===void 0?void 0:r.signal);const u=d=>this.emit("loading",d);t=yield Ce.fetchBlob(e,u,l);const f=this.options.blobMimeType;f&&(t=new Blob([t],{type:f}))}this.setSrc(e,t);const s=yield new Promise(l=>{const u=o||this.getDuration();u?l(u):this.mediaSubscriptions.push(this.onMediaEvent("loadedmetadata",()=>l(this.getDuration()),{once:!0}))});if(!e&&!t){const l=this.getMediaElement();l instanceof q&&(l.duration=s)}if(i)this.decodedData=X.createBuffer(i,s||0);else if(t){const l=yield t.arrayBuffer();this.decodedData=yield X.decode(l,this.options.sampleRate)}this.decodedData&&(this.emit("decode",this.getDuration()),this.renderer.render(this.decodedData)),this.emit("ready",this.getDuration())})}load(e,t,i){return P(this,void 0,void 0,function*(){try{return yield this.loadAudio(e,void 0,t,i)}catch(o){throw this.emit("error",o),o}})}loadBlob(e,t,i){return P(this,void 0,void 0,function*(){try{return yield this.loadAudio("",e,t,i)}catch(o){throw this.emit("error",o),o}})}zoom(e){if(!this.decodedData)throw new Error("No audio loaded");this.renderer.zoom(e),this.emit("zoom",e)}getDecodedData(){return this.decodedData}exportPeaks({channels:e=2,maxLength:t=8e3,precision:i=1e4}={}){if(!this.decodedData)throw new Error("The audio has not been decoded yet");const o=Math.min(e,this.decodedData.numberOfChannels),r=[];for(let s=0;s<o;s++){const l=this.decodedData.getChannelData(s),u=[],f=l.length/t;for(let d=0;d<t;d++){const p=l.slice(Math.floor(d*f),Math.ceil((d+1)*f));let m=0;for(let g=0;g<p.length;g++){const w=p[g];Math.abs(w)>Math.abs(m)&&(m=w)}u.push(Math.round(m*i)/i)}r.push(u)}return r}getDuration(){let e=super.getDuration()||0;return e!==0&&e!==1/0||!this.decodedData||(e=this.decodedData.duration),e}toggleInteraction(e){this.options.interact=e}setTime(e){this.stopAtPosition=null,super.setTime(e),this.updateProgress(e),this.emit("timeupdate",e)}seekTo(e){const t=this.getDuration()*e;this.setTime(t)}play(e,t){const i=Object.create(null,{play:{get:()=>super.play}});return P(this,void 0,void 0,function*(){e!=null&&this.setTime(e);const o=yield i.play.call(this);return t!=null&&(this.media instanceof q?this.media.stopAt(t):this.stopAtPosition=t),o})}playPause(){return P(this,void 0,void 0,function*(){return this.isPlaying()?this.pause():this.play()})}stop(){this.pause(),this.setTime(0)}skip(e){this.setTime(this.getCurrentTime()+e)}empty(){this.load("",[[0]],.001)}setMediaElement(e){this.unsubscribePlayerEvents(),super.setMediaElement(e),this.initPlayerEvents()}exportImage(){return P(this,arguments,void 0,function*(e="image/png",t=1,i="dataURL"){return this.renderer.exportImage(e,t,i)})}destroy(){var e;this.emit("destroy"),(e=this.abortController)===null||e===void 0||e.abort(),this.plugins.forEach(t=>t.destroy()),this.subscriptions.forEach(t=>t()),this.unsubscribePlayerEvents(),this.timer.destroy(),this.renderer.destroy(),super.destroy()}}G.BasePlugin=class extends Y{constructor(n){super(),this.subscriptions=[],this.options=n}onInit(){}_init(n){this.wavesurfer=n,this.onInit()}destroy(){this.emit("destroy"),this.subscriptions.forEach(n=>n())}},G.dom=Me;const je=(n,e)=>{const[t,i]=R.useState(null);return R.useEffect(()=>{if(!n.current)return;const o=G.create({...e,container:n.current});return i(o),()=>{o.destroy()}},[e,n]),t},De=S.div`
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
`,de=R.memo(n=>{const e=R.useRef(null),[t,i]=R.useState(!1),[o,r]=R.useState(.5),[s,l]=R.useState(0),[u,f]=R.useState(T(0)),[d,p]=R.useState(!1),m=je(e,n),g=R.useRef(null),{onPlay:w,onReady:E}=n,x=R.useCallback(()=>{m.playPause()},[m]);R.useEffect(()=>{if(!m)return;m.setVolume(o);const y=()=>({media:m.getMediaElement(),peaks:m.exportPeaks()}),h=[m.on("ready",()=>{E&&E(y()),l(T(Math.round(m.getDuration()*1e3))),i(m.isPlaying())}),m.on("play",()=>{w&&w(b=>{const k=y();return!b||b.media!==k.media?(b&&(b.media.pause(),b.media.currentTime=0),k):b}),i(!0)}),m.on("audioprocess",()=>{f(T(Math.round(m.getCurrentTime()*1e3)))}),m.on("pause",()=>i(!1))];return()=>{h.forEach(b=>b())}},[m,w,E,o]),R.useEffect(()=>{const y=g.current;y.style.setProperty("--value",y.value),y.style.setProperty("--min",y.min===""?"0":y.min),y.style.setProperty("--max",y.max===""?"100":y.max),y.style.setProperty("--value",y.value)},[]);function T(y){var h=Math.floor(y/6e4),b=(y%6e4/1e3).toFixed(0);return h+":"+(b<10?"0":"")+b}function M(y){r(y.target.value);const h=y.target;h.style.setProperty("--value",h.value),h.style.setProperty("--min",h.min===""?"0":h.min),h.style.setProperty("--max",h.max===""?"100":h.max),h.style.setProperty("--value",h.value)}function N(){p(!d)}return c.jsxs(De,{children:[t?c.jsx("img",{className:"play-icon",src:"https://extras.thetimes.co.uk/web/2025/times-knife-crime-audio/assets/pause.png",onClick:x}):c.jsx("img",{className:"play-icon",src:"https://extras.thetimes.co.uk/web/2025/times-knife-crime-audio/assets/play.png",onClick:x}),c.jsx("div",{ref:e,style:{width:"100%"}}),c.jsxs("p",{className:"waveform-time",children:[c.jsx("span",{children:u})," / ",c.jsx("span",{children:s})]}),c.jsxs("div",{className:"volume-container",children:[c.jsx("img",{className:"volume-icon",src:"https://extras.thetimes.co.uk/web/2025/times-knife-crime-audio/assets/volume.png",onClick:N}),c.jsx("input",{ref:g,className:"styled-slider slider-progress",type:"range",id:"volume-slider",min:0,max:1,step:.1,value:o,onChange:M,style:{opacity:d?1:0,pointerEvents:d?"all":"none"}})]})]})}),J=S.createGlobalStyle`
  @font-face {
            font-family: Roboto-Regular;
            src: url(/d/fonts/Roboto/Roboto-Regular-1f6d3cf6d3.woff2) format("woff2"), url(/d/fonts/Roboto/Roboto-Regular.woff) format("woff"), url(/d/fonts/Roboto/Roboto-Regular.ttf) format("truetype");
            font-weight: 400;
            font-style: normal;
            font-display: swap
        }

        @font-face {
            font-family: Roboto-Regular-fallback;
            src: local("Arial");
            font-display: swap;
            font-style: normal;
            font-weight: 400;
            ascent-override: 92.49%;
            descent-override: 24.34%;
            line-gap-override: 0;
            size-adjust: 100.3%
        }

        @font-face {
            font-family: Roboto-Medium;
            src: url(/d/fonts/Roboto/Roboto-Medium-e7df3d0942.woff2) format("woff2"), url(/d/fonts/Roboto/Roboto-Medium.woff) format("woff"), url(/d/fonts/Roboto/Roboto-Medium.ttf) format("truetype");
            font-weight: 400;
            font-style: normal;
            font-display: swap
        }

        @font-face {
            font-family: Roboto-Medium-fallback;
            font-display: swap;
            font-style: normal;
            font-weight: 400;
            src: local("Arial");
            ascent-override: 91.62%;
            descent-override: 24.11%;
            line-gap-override: 0;
            size-adjust: 101.26%
        }

        @font-face {
            font-family: Roboto;
            src: url(/d/fonts/Roboto/Roboto-Regular-1f6d3cf6d3.woff2) format("woff2");
            font-weight: 400;
            font-style: normal;
            font-display: swap
        }

        @font-face {
            font-family: Roboto;
            src: url(/d/fonts/Roboto/Roboto-Medium-e7df3d0942.woff2) format("woff2");
            font-weight: 500;
            font-style: normal;
            font-display: swap
        }

        @font-face {
            font-family: Roboto;
            src: url(/d/fonts/Roboto/Roboto-Bold-e9f5aaf547.woff2) format("woff2");
            font-weight: 700;
            font-style: normal;
            font-display: swap
        }

        @font-face {
            font-family: TimesDigitalW04;
            src: url(/d/fonts/TimesDigital/TimesDigitalW04-dca82eac02.woff2) format("woff2"), url(/d/fonts/TimesDigital/TimesDigitalW04-c93f4e13dd.woff) format("woff"), url(/d/fonts/TimesDigital/TimesDigitalW04.ttf) format("truetype");
            font-weight: 400;
            font-style: normal;
            font-display: swap
        }

        @font-face {
            font-family: TimesDigitalW04-fallback;
            font-display: swap;
            font-style: normal;
            font-weight: 400;
            src: local("Times New Roman");
            ascent-override: 87.46%;
            descent-override: 28.13%;
            line-gap-override: 0;
            size-adjust: 113.42%
        }

        @font-face {
            font-family: TimesDigitalW04-Regular;
            src: url(/d/fonts/TimesDigital/TimesDigitalW04-Regular-dca82eac02.woff2) format("woff2"), url(/d/fonts/TimesDigital/TimesDigitalW04-Regular-c93f4e13dd.woff) format("woff"), url(/d/fonts/TimesDigital/TimesDigitalW04-Regular-bf4b850ffb.ttf) format("truetype");
            font-weight: 400;
            font-style: normal;
            font-display: swap
        }

        @font-face {
            font-family: TimesDigitalW04-Regular-fallback;
            font-display: swap;
            font-style: normal;
            font-weight: 400;
            src: local("Times New Roman");
            ascent-override: 87.46%;
            descent-override: 28.13%;
            line-gap-override: 0;
            size-adjust: 113.42%
        }

        @font-face {
            font-family: TimesDigitalW04-RegularSC;
            src: url(/d/fonts/TimesDigital/TimesDigitalW04-RegularSC-5fc97c82cd.woff2) format("woff2"), url(/d/fonts/TimesDigital/TimesDigitalW04-RegularSC-a06bfa24de.woff) format("woff"), url(/d/fonts/TimesDigital/TimesDigitalW04-RegularSC-b3f19b6c56.ttf) format("truetype");
            font-weight: 400;
            font-style: normal;
            font-display: swap
        }

        @font-face {
            font-family: TimesDigitalW04-RegularSC-fallback;
            font-display: swap;
            font-style: normal;
            font-weight: 400;
            src: local("Times New Roman");
            ascent-override: 87.46%;
            descent-override: 28.13%;
            line-gap-override: 0;
            size-adjust: 113.42%
        }

        @font-face {
            font-family: TimesDigitalW04-Bold;
            src: url(/d/fonts/TimesDigital/TimesDigitalW04-Bold-9a71df9f73.woff2) format("woff2"), url(/d/fonts/TimesDigital/TimesDigitalW04-Bold-956d1db6de.woff) format("woff"), url(/d/fonts/TimesDigital/TimesDigitalW04-Bold-e627de75c8.ttf) format("truetype");
            font-weight: 400;
            font-style: normal;
            font-display: swap
        }

        @font-face {
            font-family: TimesDigitalW04-Bold-fallback;
            font-display: swap;
            font-style: normal;
            font-weight: 700;
            src: local("Times New Roman Bold");
            ascent-override: 86.91%;
            descent-override: 27.95%;
            line-gap-override: 0;
            size-adjust: 114.14%
        }

        @font-face {
            font-family: TimesDigitalW04-BoldItalic;
            src: url(/d/fonts/TimesDigital/TimesDigitalW04-BoldItalic-bc6071c2c8.woff2) format("woff2"), url(/d/fonts/TimesDigital/TimesDigitalW04-BoldItalic-8c36a2d2bd.woff) format("woff"), url(/d/fonts/TimesDigital/TimesDigitalW04-BoldItalic-2a78549947.ttf) format("truetype");
            font-weight: 400;
            font-style: normal;
            font-display: swap
        }

        @font-face {
            font-family: TimesDigitalW04-BoldItalic-fallback;
            font-display: swap;
            font-style: italic;
            font-weight: 700;
            src: local("Times New Roman Bold Italic");
            ascent-override: 84.79%;
            descent-override: 27.27%;
            line-gap-override: 0;
            size-adjust: 116.99%
        }

        @font-face {
            font-family: TimesDigitalW04-Italic;
            src: url(/d/fonts/TimesDigital/TimesDigitalW04-Italic-b1475ca316.woff2) format("woff2"), url(/d/fonts/TimesDigital/TimesDigitalW04-Italic-a577e30ef1.woff) format("woff"), url(/d/fonts/TimesDigital/TimesDigitalW04-Italic-624f40f1d5.ttf) format("truetype");
            font-weight: 400;
            font-style: normal;
            font-display: swap
        }

        @font-face {
            font-family: TimesDigitalW04-Italic-fallback;
            font-display: swap;
            font-style: italic;
            font-weight: 400;
            src: local("Times New Roman Italic");
            ascent-override: 89.35%;
            descent-override: 28.73%;
            line-gap-override: 0;
            size-adjust: 111.02%
        }

        @font-face {
            font-family: TimesDigitalW04-BoldSC;
            src: url(/d/fonts/TimesDigital/TimesDigitalW04-BoldSC-cd2602db9d.woff2) format("woff2"), url(/d/fonts/TimesDigital/TimesDigitalW04-BoldSC-ddd4d0a956.woff) format("woff"), url(/d/fonts/TimesDigital/TimesDigitalW04-BoldSC-5099432df6.ttf) format("truetype");
            font-weight: 400;
            font-style: normal;
            font-display: swap
        }

        @font-face {
            font-family: TimesDigitalW04-BoldSC-fallback;
            font-display: swap;
            font-style: normal;
            font-weight: 700;
            src: local("Times New Roman Bold");
            ascent-override: 86.91%;
            descent-override: 27.95%;
            line-gap-override: 0;
            size-adjust: 114.14%
        }

        @font-face {
            font-family: "Times Digital W04 Regular";
            font-display: swap;
            font-style: normal;
            font-weight: 400;
            src: url(/d/fonts/TimesDigital/TimesDigitalW04-Regular-dca82eac02.woff2) format("woff2")
        }

        @font-face {
            font-family: TimesModern-Regular;
            src: url(/d/fonts/TimesModern/TimesModern-Regular-f3419df85d.woff2) format("woff2"), url(/d/fonts/TimesModern/TimesModern-Regular-39c619f4ef.woff) format("woff"), url(/d/fonts/TimesModern/TimesModern-Regular-e47b8c277b.ttf) format("truetype");
            font-weight: 400;
            font-style: normal;
            font-display: swap
        }

        @font-face {
            font-family: TimesModern-Regular-fallback;
            font-display: swap;
            font-style: normal;
            font-weight: 400;
            src: local("Times New Roman");
            ascent-override: 71.84%;
            descent-override: 17.78%;
            line-gap-override: 6.72%;
            size-adjust: 96.74%
        }

        @font-face {
            font-family: TimesModern-Bold;
            src: url(/d/fonts/TimesModern/TimesModern-Bold-62eb027e67.woff2) format("woff2"), url(/d/fonts/TimesModern/TimesModern-Bold-828aec4ccd.woff) format("woff"), url(/d/fonts/TimesModern/TimesModern-Bold-a2020323c6.ttf) format("truetype");
            font-weight: 400;
            font-style: normal;
            font-display: swap
        }

        @font-face {
            font-family: TimesModern-Bold-fallback;
            font-display: swap;
            font-style: normal;
            font-weight: 700;
            src: local("Times New Roman Bold");
            ascent-override: 73.8%;
            descent-override: 18.26%;
            line-gap-override: 6.9%;
            size-adjust: 94.18%
        }

        @font-face {
            font-family: TimesModern-ExtraBold-Italic;
            src: url(/d/fonts/TimesModern/TimesModern-ExtraBold-Italic-c71c30fb0b.woff2) format("woff2"), url(/d/fonts/TimesModern/TimesModern-ExtraBold-Italic-ad4b681d5b.woff) format("woff"), url(/d/fonts/TimesModern/TimesModern-ExtraBold-Italic-36c209071c.ttf) format("truetype");
            font-weight: 400;
            font-style: normal;
            font-display: swap
        }

        @font-face {
            font-family: TimesModern-ExtraBold-Italic-fallback;
            font-display: swap;
            font-style: italic;
            font-weight: 700;
            src: local("Times New Roman Bold Italic");
            ascent-override: 71.6%;
            descent-override: 17.82%;
            line-gap-override: 6.7%;
            size-adjust: 97.06%
        }

        @font-face {
            font-family: TimesModern-Italic;
            src: url(/d/fonts/TimesModern/TimesModern-Italic-cc70e7e7f9.woff2) format("woff2"), url(/d/fonts/TimesModern/TimesModern-Italic-c85a679cf5.woff) format("woff"), url(/d/fonts/TimesModern/TimesModern-Italic-2f957b4455.ttf) format("truetype");
            font-weight: 400;
            font-style: normal;
            font-display: swap
        }

        @font-face {
            font-family: TimesModern-Italic-fallback;
            font-display: swap;
            font-style: italic;
            font-weight: 400;
            src: local("Times New Roman Italic");
            ascent-override: 83.3%;
            descent-override: 21.13%;
            line-gap-override: 7.83%;
            size-adjust: 89.44%
        }

        @font-face {
            font-family: "Times Modern";
            src: url(/d/fonts/TimesModern/TimesModern-Regular-f3419df85d.woff2) format("woff2");
            font-display: swap;
            font-style: normal;
            font-weight: 400
        }

        @font-face {
            font-family: "Times Modern";
            src: url(/d/fonts/TimesModern/TimesModern-Bold-62eb027e67.woff2) format("woff2");
            font-display: swap;
            font-style: normal;
            font-weight: 700
        }

        @font-face {
            font-family: "Times Modern";
            src: url(/d/fonts/TimesModern/TimesModern-ExtraBold-afbbdbe2e3.woff2) format("woff2");
            font-display: swap;
            font-style: normal;
            font-weight: 800
        }

        @font-face {
            font-family: TimesModernMagazine;
            src: url(/d/fonts/TimesModernMagazine/TimesModernMagazine-Bd-367d1488f7.woff2) format("woff2"), url(/d/fonts/TimesModernMagazine/TimesModernMagazine-Bd-1fbe4b75f4.woff) format("woff"), url(/d/fonts/TimesModernMagazine/TimesModernMagazine-Bd-2d23205196.ttf) format("truetype");
            font-weight: 400;
            font-style: normal;
            font-display: swap
        }

        @font-face {
            font-family: TimesModernMagazine-fallback;
            src: local("Times New Roman");
            font-display: swap
        }

        @font-face {
            font-family: TimesModernMagazine-Lt;
            src: url(/d/fonts/TimesModernMagazine/TimesModernMagazine-Lt-02f06ffbdb.woff2) format("woff2"), url(/d/fonts/TimesModernMagazine/TimesModernMagazine-Lt-e73cf89261.woff) format("woff"), url(/d/fonts/TimesModernMagazine/TimesModernMagazine-Lt-a35dbc7e66.ttf) format("truetype");
            font-weight: 400;
            font-style: normal;
            font-display: swap
        }

        @font-face {
            font-family: TimesModernMagazine-Lt-fallback;
            font-display: swap;
            font-style: normal;
            font-weight: 400;
            src: local("Times New Roman");
            ascent-override: 97.73%;
            descent-override: 24.2%;
            line-gap-override: 0;
            size-adjust: 97.51%
        }

`,ce=S.div`
    margin-block-start: 1em;
    margin-block-end: 100px;
`,_e=S.div`
    font-family: 'RobotoRegular', sans-serif;

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
        font-family: 'Times Modern', serif;
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
`;function Ne({data:n}){return c.jsxs(c.Fragment,{children:[c.jsx(J,{}),c.jsxs(_e,{children:[c.jsxs("div",{className:"card-image--container",children:[c.jsx("img",{src:`https://extras.thetimes.co.uk/web/2025/times-knife-crime-audio/assets/${n.imgSrc}.jpg`,className:"card-image"}),c.jsx("p",{className:"card-name",children:n.name})]}),c.jsx("p",{className:"card-quote",children:n.quote}),c.jsx(de,{height:100,waveColor:"#ff0000",progressColor:"#940000",url:`https://extras.thetimes.co.uk/web/2025/times-knife-crime-audio/assets/${n.audioSrc}.m4a`,normalize:!0,barWidth:2,barGap:2,barRadius:2,cursorWidth:2},n.id)]})]})}var Z={},Q={},ue;function We(){return ue||(ue=1,function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e;function t(o,r,s){return r in o?Object.defineProperty(o,r,{value:s,enumerable:!0,configurable:!0,writable:!0}):o[r]=s,o}var i={digital:(e={blue:{r:37,g:66,b:81},yellow:{r:224,g:171,b:38},lightBlue:{r:224,g:171,b:38}},t(e,"yellow",{r:128,g:177,b:226}),t(e,"orange",{r:243,g:127,b:47}),t(e,"teal",{r:50,g:146,b:166}),t(e,"purple",{r:108,g:60,b:94}),t(e,"sand",{r:218,g:207,b:193}),e),ukPoliticalParties:{con:{r:64,g:147,b:178},lab:{r:236,g:81,b:86},libdem:{r:246,g:197,b:94},ukip:{r:151,g:103,b:174},snp:{r:255,g:246,b:133},green:{r:97,g:169,b:97},pc:{r:144,g:205,b:124},dup:{r:161,g:82,b:82},sf:{r:68,g:150,b:107},sdlp:{r:125,g:161,b:125},uup:{r:63,g:97,b:124},others:{r:160,g:147,b:143}}};n.default=i}(Q)),Q}var K={},fe;function Oe(){return fe||(fe=1,function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={micro:"400px",small:"520px",mobile:"768px",tablet:"1024px",desktop:"1200px","desktop-wide":"1320px"};n.default=e}(K)),K}var he;function Ae(){return he||(he=1,function(n){Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"colors",{enumerable:!0,get:function(){return e.default}}),Object.defineProperty(n,"breakpoints",{enumerable:!0,get:function(){return t.default}});var e=i(We()),t=i(Oe());function i(o){return o&&o.__esModule?o:{default:o}}}(Z)),Z}Ae();const ze=S.div`
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

`;function me({headline:n,standfirst:e}){return c.jsxs(ze,{children:[n&&c.jsx("h1",{className:"headline",children:n}),e&&c.jsx("p",{className:"standfirst",children:e})]})}const Le=S.div`
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
`,Ie=S.img`
    width: 100%;
    height: 80px;

    object-fit: cover;
    cursor: pointer;

    // * CONDITIONAL STYLES
    opacity: ${n=>n.isHovered?"1":"0.5"};

    -webkit-filter: ${n=>n.grayscale?"grayscale(100%)":"none"};
    filter: ${n=>n.grayscale?"grayscale(100%)":"none"};

    transition: opacity 250ms ease-in;
`;function pe({data:n,clickedImage:e,setClickedImage:t,setShowTooltip:i,setTooltipPos:o}){function r(l,u){t(u),i(!0),o([l.clientX,l.target.offsetTop+l.target.offsetHeight-20])}const s=n.map(l=>c.jsx(Ie,{src:`https://nuk-tnl-editorial-prod-staticassets.s3.amazonaws.com/2024/times-image-grid/assets/${l.imgSrc}.jpg`,alt:l.name,grayscale:!1,lazy:!0,onClick:u=>r(u,l),isHovered:e===l},l.id));return c.jsx(Le,{children:s})}const Be=S.div`
    position: absolute;
    left: 0px;
    top: ${n=>n.isImageInLastRow?n.tooltipPos[1]-380:n.tooltipPos[1]}px;

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

    opacity: ${n=>n.showTooltip?"1":"0"};
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
`;function ge({clickedImage:n,setClickedImage:e,tooltipPos:t,showTooltip:i,setShowTooltip:o,isImageInLastRow:r}){if(!n)return;function s(){o(!1),e(null)}return c.jsxs(Be,{showTooltip:i,tooltipPos:t,isImageInLastRow:r,children:[c.jsx("img",{className:"tooltip-image",src:`https://nuk-tnl-editorial-prod-staticassets.s3.amazonaws.com/2024/times-image-grid/assets/${n.imgSrc}.jpg`,alt:n.name}),c.jsxs("div",{className:"tooltip-content",children:[c.jsx("h3",{children:n.name}),c.jsx("p",{children:n.copy})]}),c.jsx("button",{className:"tooltip-close",onClick:s,children:c.jsx("img",{src:"https://nuk-tnl-editorial-prod-staticassets.s3.amazonaws.com/2023/st-grid-jeremy-clarkson/assets/x.svg"})})]})}function Fe({data:n}){const[e,t]=R.useState(null),[i,o]=R.useState(!1),[r,s]=R.useState([0,0]);let u=n.length-n.indexOf(e)<=7;return c.jsxs(c.Fragment,{children:[c.jsx(J,{}),c.jsxs(ce,{children:[c.jsx(me,{headline:"Lorem ipsum dolor sit amet",standfirst:"Nulla vel augue ut erat efficitur scelerisque id vel tellus. Ut iaculis nulla sit amet lorem rutrum, ac luctus sem imperdiet"}),c.jsx(pe,{data:n,clickedImage:e,setClickedImage:t,setShowTooltip:o,setTooltipPos:s}),c.jsx(ge,{clickedImage:e,setClickedImage:t,showTooltip:i,setShowTooltip:o,tooltipPos:r,isImageInLastRow:u})]})]})}S.div`
    position: relative;
    width: 100%;
`;const $e=S.div`
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
`,He=S.div`
    position: relative;
    width: 100%;
    height: 100%;
`,Ye=S.div`
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
`,Ge=S.section`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`,Ve=S.p`
    line-height: 1.4;
    font-family: 'Times Modern', serif;
    font-size: ${({size:n})=>n==="lg"?"20px":"16px"} !important;
    padding: 1rem;
    max-width: 600px;
    background: white;
    z-index: 1;
    font-size: 18px;
    line-height: 30px;
`;function Ue({data:n}){const{slides:e=[],imgFit:t="cover",containerWidth:i="edge-to-edge",borderRadius:o="0",fixedImgHeight:r,fontSize:s="md",videoLoop:l=!0,videoAutoplay:u=!0,videoControls:f=!1,videoMute:d=!0}=n,[p,m]=R.useState(0),[g,w]=R.useState([]),E=R.useRef([]),x=R.useRef([]);R.useEffect(()=>{const h=new IntersectionObserver(b=>{b.forEach(k=>{if(k.isIntersecting){const W=parseInt(k.target.dataset.index,10);m(W)}})},{threshold:.6});return E.current.forEach(b=>b&&h.observe(b)),()=>h.disconnect()},[e.length]),R.useEffect(()=>{const h=e.map((b,k)=>k===p);w(h)},[p,e]);const T=h=>g[h]?2:1,M=h=>{var b;if(h.includes("youtube.com")){const k=(b=h.split("v=")[1])==null?void 0:b.split("&")[0];return`https://www.youtube.com/embed/${k}?autoplay=${u?1:0}&loop=${l?1:0}&controls=${f?1:0}&mute=${d?1:0}&playlist=${k}`}else if(h.includes("vimeo.com"))return`https://player.vimeo.com/video/${h.split("/").pop()}?autoplay=${u?1:0}&loop=${l?1:0}&controls=${f?1:0}&muted=${d?1:0}`;return h},N=h=>h.includes("youtube.com")||h.includes("youtu.be"),y=h=>h.endsWith(".mp4");return c.jsxs(ce,{children:[c.jsx($e,{style:{height:r||"500px"},className:i==="edge-to-edge"?"edge-to-edge":i==="bleed"?"bleed":"",children:c.jsx(He,{children:e.map((h,b)=>c.jsx(Ye,{ref:k=>x.current[b]=k,className:g[b]?"overlap":"",style:{zIndex:T(b)},children:N(h.media)?c.jsx("iframe",{title:"YouTube video",src:M(h.media),frameBorder:"0",allow:"autoplay; encrypted-media",allowFullScreen:!0,style:{objectFit:t,width:"100%",height:r||(i==="edge-to-edge"?"100vh":"100%"),borderRadius:o}}):y(h.media)?c.jsx("video",{autoPlay:u,loop:l,controls:f,muted:d,style:{objectFit:t,width:"100%",height:r||"100%",borderRadius:o},children:c.jsx("source",{src:h.media,type:"video/mp4"})}):c.jsx("img",{src:h.media,alt:h.altText||"Slide image",style:{objectFit:t,width:"100%",height:r||"100%",borderRadius:o}})},b))})}),c.jsx("div",{className:"scroller-sections",children:e.map((h,b)=>c.jsx(Ge,{className:"trigger","data-index":b,ref:k=>E.current[b]=k,children:h.text&&c.jsx(Ve,{size:s,dangerouslySetInnerHTML:{__html:h.text}})},b))})]})}const Xe=S.div`
    h3 {
        line-height: 20px;
        color: #000;
        font-family: 'Times Modern', serif;
        font-size: 22px;
        font-weight: 700;
        margin: 0 auto;
        padding: 0 0 4px;
        text-align: left;
    }

    h4 {
        line-height: 20px;
        color: #000;
        font-family: 'Times Modern', serif;
        font-size: 16px;
        font-weight: 400;
        margin: 0 auto 15px;
        padding: 0 0 4px;
        text-align: left;
    }

    .chart-title {
        line-height: 20px;
        color: #000;
        font-family: 'Times Modern', serif;
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
`,qe=({data:n={},children:e})=>{const{hed:t="",dek:i="",chartTitle:o="",note:r="",source:s=""}=n;return c.jsxs(Xe,{children:[t&&c.jsx("h3",{children:t}),i&&c.jsx("h4",{children:i}),o&&c.jsx("p",{className:"chart-title",children:o}),e,(r||s)&&c.jsxs("div",{className:"note-container",children:[r&&c.jsx("p",{className:"note",children:r}),s&&c.jsx("p",{className:"note",children:s})]})]})},Je=S.div`
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
`,Ze=S.div`
    margin-top: 10px;
    text-align: left;
    font-family: 'Times Modern', serif;
    p {
        font-family: 'Times Modern', serif;
        font-size: 14px;
        color: rgb(105, 105, 105);
        line-height: 19px;
        margin-bottom: 4px;
        text-align: left;
    }
`,Qe=S.div`
    position: absolute;
    top: 0;
    background-color: black;
    color: #fff;
    padding: 10px;
    font-family: 'Times Modern', serif;
    border-radius: ${({$imgBorderRadius:n})=>`${n} 0 0 0`};

    p {
        color: #fff;
        font-size: 12px;
        margin: 0;
    }
`,Ke=S.div`
    position: relative;

    iframe,
    video,
    img {
        width: 100%;
        height: auto;
        border: none;
        ${({$containerWidth:n,$fixedImgHeight:e,$imgBorderRadius:t})=>n==="edge-to-edge"?S.css`
                    height: 100vh;
                    object-fit: cover;
                    border-radius: ${t};
                `:n==="bleed"||n==="inline"&&e?S.css`
                    height: ${e};
                    object-fit: cover;
                    border-radius: ${t};
                `:S.css`
                border-radius: ${t};
            `}
    }
`,et=(n,e,t,i,o)=>{var r;if(n.includes("youtube.com")){const s=(r=n.split("v=")[1])==null?void 0:r.split("&")[0];return`https://www.youtube.com/embed/${s}?autoplay=${e?1:0}&loop=${t?1:0}&controls=${i?1:0}&mute=${o?1:0}&playlist=${s}`}else if(n.includes("vimeo.com"))return`https://player.vimeo.com/video/${n.split("/").pop()}?autoplay=${e?1:0}&loop=${t?1:0}&controls=${i?1:0}&muted=${o?1:0}`;return n},tt=({data:n})=>{if(!n)return null;const{fixedImgHeight:e=null,containerWidth:t="inline",imgBorderRadius:i=null,media:o="",videoLoop:r="true",videoAutoplay:s="true",videoControls:l="false",videoMute:u="true",text:f,caption:d,altText:p}=n,x=et(o,s===!0,r===!0,l===!0,u===!0),T=c.jsxs(Ke,{$containerWidth:t,$fixedImgHeight:e,$imgBorderRadius:i,children:[o.includes("youtube.com")||o.includes("vimeo.com")?c.jsx("iframe",{src:x,title:"Embedded media",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}):o.endsWith(".mp4")?c.jsxs("video",{autoPlay:s,loop:r,controls:l,muted:u,children:[c.jsx("source",{src:o,type:"video/mp4"}),c.jsx("track",{kind:"captions",src:o.replace(".mp4",".vtt"),label:"English"}),"Your browser does not support the video tag."]}):c.jsx("img",{src:o,alt:p}),f&&c.jsx(Ze,{$imgBorderRadius:i,dangerouslySetInnerHTML:{__html:f}}),d&&c.jsx(Qe,{$imgBorderRadius:i,dangerouslySetInnerHTML:{__html:d}})]});return c.jsxs(c.Fragment,{children:[c.jsx(J,{}),c.jsx(Je,{className:t,children:c.jsx(qe,{data:n,children:T})})]})};_.AudioPlayer=Ne,_.Equalizer=de,_.Grid=pe,_.Header=me,_.ImageGrid=Fe,_.MediaBlock=tt,_.ScrollStory=Ue,_.Tooltip=ge,Object.defineProperty(_,Symbol.toStringTag,{value:"Module"})});
