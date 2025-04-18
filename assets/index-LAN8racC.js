import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{r as T,e as G}from"./index-MPVjHJeJ.js";function N(t,e,r,i){return new(r||(r=Promise))(function(n,s){function o(l){try{c(i.next(l))}catch(u){s(u)}}function a(l){try{c(i.throw(l))}catch(u){s(u)}}function c(l){var u;l.done?n(l.value):(u=l.value,u instanceof r?u:new r(function(p){p(u)})).then(o,a)}c((i=i.apply(t,e||[])).next())})}class me{constructor(){this.listeners={}}on(e,r,i){if(this.listeners[e]||(this.listeners[e]=new Set),this.listeners[e].add(r),i==null?void 0:i.once){const n=()=>{this.un(e,n),this.un(e,r)};return this.on(e,n),n}return()=>this.un(e,r)}un(e,r){var i;(i=this.listeners[e])===null||i===void 0||i.delete(r)}once(e,r){return this.on(e,r,{once:!0})}unAll(){this.listeners={}}emit(e,...r){this.listeners[e]&&this.listeners[e].forEach(i=>i(...r))}}const Ce={decode:function(t,e){return N(this,void 0,void 0,function*(){const r=new AudioContext({sampleRate:e});return r.decodeAudioData(t).finally(()=>r.close())})},createBuffer:function(t,e){return typeof t[0]=="number"&&(t=[t]),function(r){const i=r[0];if(i.some(n=>n>1||n<-1)){const n=i.length;let s=0;for(let o=0;o<n;o++){const a=Math.abs(i[o]);a>s&&(s=a)}for(const o of r)for(let a=0;a<n;a++)o[a]/=s}}(t),{duration:e,length:t[0].length,sampleRate:t[0].length/e,numberOfChannels:t.length,getChannelData:r=>t==null?void 0:t[r],copyFromChannel:AudioBuffer.prototype.copyFromChannel,copyToChannel:AudioBuffer.prototype.copyToChannel}}};function It(t,e){const r=e.xmlns?document.createElementNS(e.xmlns,t):document.createElement(t);for(const[i,n]of Object.entries(e))if(i==="children")for(const[s,o]of Object.entries(e))typeof o=="string"?r.appendChild(document.createTextNode(o)):r.appendChild(It(s,o));else i==="style"?Object.assign(r.style,n):i==="textContent"?r.textContent=n:r.setAttribute(i,n.toString());return r}function gt(t,e,r){const i=It(t,e||{});return r==null||r.appendChild(i),i}var mr=Object.freeze({__proto__:null,createElement:gt,default:gt});const gr={fetchBlob:function(t,e,r){return N(this,void 0,void 0,function*(){const i=yield fetch(t,r);if(i.status>=400)throw new Error(`Failed to fetch ${t}: ${i.status} (${i.statusText})`);return function(n,s){N(this,void 0,void 0,function*(){if(!n.body||!n.headers)return;const o=n.body.getReader(),a=Number(n.headers.get("Content-Length"))||0;let c=0;const l=p=>N(this,void 0,void 0,function*(){c+=(p==null?void 0:p.length)||0;const d=Math.round(c/a*100);s(d)}),u=()=>N(this,void 0,void 0,function*(){let p;try{p=yield o.read()}catch{return}p.done||(l(p.value),yield u())});u()})}(i.clone(),e),i.blob()})}};class br extends me{constructor(e){super(),this.isExternalMedia=!1,e.media?(this.media=e.media,this.isExternalMedia=!0):this.media=document.createElement("audio"),e.mediaControls&&(this.media.controls=!0),e.autoplay&&(this.media.autoplay=!0),e.playbackRate!=null&&this.onMediaEvent("canplay",()=>{e.playbackRate!=null&&(this.media.playbackRate=e.playbackRate)},{once:!0})}onMediaEvent(e,r,i){return this.media.addEventListener(e,r,i),()=>this.media.removeEventListener(e,r,i)}getSrc(){return this.media.currentSrc||this.media.src||""}revokeSrc(){const e=this.getSrc();e.startsWith("blob:")&&URL.revokeObjectURL(e)}canPlayType(e){return this.media.canPlayType(e)!==""}setSrc(e,r){const i=this.getSrc();if(e&&i===e)return;this.revokeSrc();const n=r instanceof Blob&&(this.canPlayType(r.type)||!e)?URL.createObjectURL(r):e;i&&(this.media.src="");try{this.media.src=n}catch{this.media.src=e}}destroy(){this.isExternalMedia||(this.media.pause(),this.media.remove(),this.revokeSrc(),this.media.src="",this.media.load())}setMediaElement(e){this.media=e}play(){return N(this,void 0,void 0,function*(){return this.media.play()})}pause(){this.media.pause()}isPlaying(){return!this.media.paused&&!this.media.ended}setTime(e){this.media.currentTime=Math.max(0,Math.min(e,this.getDuration()))}getDuration(){return this.media.duration}getCurrentTime(){return this.media.currentTime}getVolume(){return this.media.volume}setVolume(e){this.media.volume=e}getMuted(){return this.media.muted}setMuted(e){this.media.muted=e}getPlaybackRate(){return this.media.playbackRate}isSeeking(){return this.media.seeking}setPlaybackRate(e,r){r!=null&&(this.media.preservesPitch=r),this.media.playbackRate=e}getMediaElement(){return this.media}setSinkId(e){return this.media.setSinkId(e)}}class Q extends me{constructor(e,r){super(),this.timeouts=[],this.isScrollable=!1,this.audioData=null,this.resizeObserver=null,this.lastContainerWidth=0,this.isDragging=!1,this.subscriptions=[],this.unsubscribeOnScroll=[],this.subscriptions=[],this.options=e;const i=this.parentFromOptionsContainer(e.container);this.parent=i;const[n,s]=this.initHtml();i.appendChild(n),this.container=n,this.scrollContainer=s.querySelector(".scroll"),this.wrapper=s.querySelector(".wrapper"),this.canvasWrapper=s.querySelector(".canvases"),this.progressWrapper=s.querySelector(".progress"),this.cursor=s.querySelector(".cursor"),r&&s.appendChild(r),this.initEvents()}parentFromOptionsContainer(e){let r;if(typeof e=="string"?r=document.querySelector(e):e instanceof HTMLElement&&(r=e),!r)throw new Error("Container not found");return r}initEvents(){const e=r=>{const i=this.wrapper.getBoundingClientRect(),n=r.clientX-i.left,s=r.clientY-i.top;return[n/i.width,s/i.height]};if(this.wrapper.addEventListener("click",r=>{const[i,n]=e(r);this.emit("click",i,n)}),this.wrapper.addEventListener("dblclick",r=>{const[i,n]=e(r);this.emit("dblclick",i,n)}),this.options.dragToSeek!==!0&&typeof this.options.dragToSeek!="object"||this.initDrag(),this.scrollContainer.addEventListener("scroll",()=>{const{scrollLeft:r,scrollWidth:i,clientWidth:n}=this.scrollContainer,s=r/i,o=(r+n)/i;this.emit("scroll",s,o,r,r+n)}),typeof ResizeObserver=="function"){const r=this.createDelay(100);this.resizeObserver=new ResizeObserver(()=>{r().then(()=>this.onContainerResize()).catch(()=>{})}),this.resizeObserver.observe(this.scrollContainer)}}onContainerResize(){const e=this.parent.clientWidth;e===this.lastContainerWidth&&this.options.height!=="auto"||(this.lastContainerWidth=e,this.reRender())}initDrag(){this.subscriptions.push(function(e,r,i,n,s=3,o=0,a=100){if(!e)return()=>{};const c=matchMedia("(pointer: coarse)").matches;let l=()=>{};const u=p=>{if(p.button!==o)return;p.preventDefault(),p.stopPropagation();let d=p.clientX,f=p.clientY,y=!1;const C=Date.now(),S=h=>{if(h.preventDefault(),h.stopPropagation(),c&&Date.now()-C<a)return;const g=h.clientX,b=h.clientY,I=g-d,D=b-f;if(y||Math.abs(I)>s||Math.abs(D)>s){const W=e.getBoundingClientRect(),{left:be,top:ye}=W;y||(i==null||i(d-be,f-ye),y=!0),r(I,D,g-be,b-ye),d=g,f=b}},x=h=>{if(y){const g=h.clientX,b=h.clientY,I=e.getBoundingClientRect(),{left:D,top:W}=I;n==null||n(g-D,b-W)}l()},w=h=>{h.relatedTarget&&h.relatedTarget!==document.documentElement||x(h)},P=h=>{y&&(h.stopPropagation(),h.preventDefault())},v=h=>{y&&h.preventDefault()};document.addEventListener("pointermove",S),document.addEventListener("pointerup",x),document.addEventListener("pointerout",w),document.addEventListener("pointercancel",w),document.addEventListener("touchmove",v,{passive:!1}),document.addEventListener("click",P,{capture:!0}),l=()=>{document.removeEventListener("pointermove",S),document.removeEventListener("pointerup",x),document.removeEventListener("pointerout",w),document.removeEventListener("pointercancel",w),document.removeEventListener("touchmove",v),setTimeout(()=>{document.removeEventListener("click",P,{capture:!0})},10)}};return e.addEventListener("pointerdown",u),()=>{l(),e.removeEventListener("pointerdown",u)}}(this.wrapper,(e,r,i)=>{this.emit("drag",Math.max(0,Math.min(1,i/this.wrapper.getBoundingClientRect().width)))},e=>{this.isDragging=!0,this.emit("dragstart",Math.max(0,Math.min(1,e/this.wrapper.getBoundingClientRect().width)))},e=>{this.isDragging=!1,this.emit("dragend",Math.max(0,Math.min(1,e/this.wrapper.getBoundingClientRect().width)))}))}getHeight(e,r){var i;const n=((i=this.audioData)===null||i===void 0?void 0:i.numberOfChannels)||1;if(e==null)return 128;if(!isNaN(Number(e)))return Number(e);if(e==="auto"){const s=this.parent.clientHeight||128;return r!=null&&r.every(o=>!o.overlay)?s/n:s}return 128}initHtml(){const e=document.createElement("div"),r=e.attachShadow({mode:"open"}),i=this.options.cspNonce&&typeof this.options.cspNonce=="string"?this.options.cspNonce.replace(/"/g,""):"";return r.innerHTML=`
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
    `,[e,r]}setOptions(e){if(this.options.container!==e.container){const r=this.parentFromOptionsContainer(e.container);r.appendChild(this.container),this.parent=r}e.dragToSeek!==!0&&typeof this.options.dragToSeek!="object"||this.initDrag(),this.options=e,this.reRender()}getWrapper(){return this.wrapper}getWidth(){return this.scrollContainer.clientWidth}getScroll(){return this.scrollContainer.scrollLeft}setScroll(e){this.scrollContainer.scrollLeft=e}setScrollPercentage(e){const{scrollWidth:r}=this.scrollContainer,i=r*e;this.setScroll(i)}destroy(){var e,r;this.subscriptions.forEach(i=>i()),this.container.remove(),(e=this.resizeObserver)===null||e===void 0||e.disconnect(),(r=this.unsubscribeOnScroll)===null||r===void 0||r.forEach(i=>i()),this.unsubscribeOnScroll=[]}createDelay(e=10){let r,i;const n=()=>{r&&clearTimeout(r),i&&i()};return this.timeouts.push(n),()=>new Promise((s,o)=>{n(),i=o,r=setTimeout(()=>{r=void 0,i=void 0,s()},e)})}convertColorValues(e){if(!Array.isArray(e))return e||"";if(e.length<2)return e[0]||"";const r=document.createElement("canvas"),i=r.getContext("2d"),n=r.height*(window.devicePixelRatio||1),s=i.createLinearGradient(0,0,0,n),o=1/(e.length-1);return e.forEach((a,c)=>{const l=c*o;s.addColorStop(l,a)}),s}getPixelRatio(){return Math.max(1,window.devicePixelRatio||1)}renderBarWaveform(e,r,i,n){const s=e[0],o=e[1]||e[0],a=s.length,{width:c,height:l}=i.canvas,u=l/2,p=this.getPixelRatio(),d=r.barWidth?r.barWidth*p:1,f=r.barGap?r.barGap*p:r.barWidth?d/2:0,y=r.barRadius||0,C=c/(d+f)/a,S=y&&"roundRect"in i?"roundRect":"rect";i.beginPath();let x=0,w=0,P=0;for(let v=0;v<=a;v++){const h=Math.round(v*C);if(h>x){const I=Math.round(w*u*n),D=I+Math.round(P*u*n)||1;let W=u-I;r.barAlign==="top"?W=0:r.barAlign==="bottom"&&(W=l-D),i[S](x*(d+f),W,d,D,y),x=h,w=0,P=0}const g=Math.abs(s[v]||0),b=Math.abs(o[v]||0);g>w&&(w=g),b>P&&(P=b)}i.fill(),i.closePath()}renderLineWaveform(e,r,i,n){const s=o=>{const a=e[o]||e[0],c=a.length,{height:l}=i.canvas,u=l/2,p=i.canvas.width/c;i.moveTo(0,u);let d=0,f=0;for(let y=0;y<=c;y++){const C=Math.round(y*p);if(C>d){const x=u+(Math.round(f*u*n)||1)*(o===0?-1:1);i.lineTo(d,x),d=C,f=0}const S=Math.abs(a[y]||0);S>f&&(f=S)}i.lineTo(d,u)};i.beginPath(),s(0),s(1),i.fill(),i.closePath()}renderWaveform(e,r,i){if(i.fillStyle=this.convertColorValues(r.waveColor),r.renderFunction)return void r.renderFunction(e,i);let n=r.barHeight||1;if(r.normalize){const s=Array.from(e[0]).reduce((o,a)=>Math.max(o,Math.abs(a)),0);n=s?1/s:1}r.barWidth||r.barGap||r.barAlign?this.renderBarWaveform(e,r,i,n):this.renderLineWaveform(e,r,i,n)}renderSingleCanvas(e,r,i,n,s,o,a){const c=this.getPixelRatio(),l=document.createElement("canvas");l.width=Math.round(i*c),l.height=Math.round(n*c),l.style.width=`${i}px`,l.style.height=`${n}px`,l.style.left=`${Math.round(s)}px`,o.appendChild(l);const u=l.getContext("2d");if(this.renderWaveform(e,r,u),l.width>0&&l.height>0){const p=l.cloneNode(),d=p.getContext("2d");d.drawImage(l,0,0),d.globalCompositeOperation="source-in",d.fillStyle=this.convertColorValues(r.progressColor),d.fillRect(0,0,l.width,l.height),a.appendChild(p)}}renderMultiCanvas(e,r,i,n,s,o){const a=this.getPixelRatio(),{clientWidth:c}=this.scrollContainer,l=i/a;let u=Math.min(Q.MAX_CANVAS_WIDTH,c,l),p={};if(u===0)return;if(r.barWidth||r.barGap){const S=r.barWidth||.5,x=S+(r.barGap||S/2);u%x!=0&&(u=Math.floor(u/x)*x)}const d=S=>{if(S<0||S>=f||p[S])return;p[S]=!0;const x=S*u,w=Math.min(l-x,u);if(w<=0)return;const P=e.map(v=>{const h=Math.floor(x/l*v.length),g=Math.floor((x+w)/l*v.length);return v.slice(h,g)});this.renderSingleCanvas(P,r,w,n,x,s,o)},f=Math.ceil(l/u);if(!this.isScrollable){for(let S=0;S<f;S++)d(S);return}const y=this.scrollContainer.scrollLeft/l,C=Math.floor(y*f);if(d(C-1),d(C),d(C+1),f>1){const S=this.on("scroll",()=>{const{scrollLeft:x}=this.scrollContainer,w=Math.floor(x/l*f);Object.keys(p).length>Q.MAX_NODES&&(s.innerHTML="",o.innerHTML="",p={}),d(w-1),d(w),d(w+1)});this.unsubscribeOnScroll.push(S)}}renderChannel(e,r,i,n){var{overlay:s}=r,o=function(u,p){var d={};for(var f in u)Object.prototype.hasOwnProperty.call(u,f)&&p.indexOf(f)<0&&(d[f]=u[f]);if(u!=null&&typeof Object.getOwnPropertySymbols=="function"){var y=0;for(f=Object.getOwnPropertySymbols(u);y<f.length;y++)p.indexOf(f[y])<0&&Object.prototype.propertyIsEnumerable.call(u,f[y])&&(d[f[y]]=u[f[y]])}return d}(r,["overlay"]);const a=document.createElement("div"),c=this.getHeight(o.height,o.splitChannels);a.style.height=`${c}px`,s&&n>0&&(a.style.marginTop=`-${c}px`),this.canvasWrapper.style.minHeight=`${c}px`,this.canvasWrapper.appendChild(a);const l=a.cloneNode();this.progressWrapper.appendChild(l),this.renderMultiCanvas(e,o,i,c,a,l)}render(e){return N(this,void 0,void 0,function*(){var r;this.timeouts.forEach(c=>c()),this.timeouts=[],this.canvasWrapper.innerHTML="",this.progressWrapper.innerHTML="",this.options.width!=null&&(this.scrollContainer.style.width=typeof this.options.width=="number"?`${this.options.width}px`:this.options.width);const i=this.getPixelRatio(),n=this.scrollContainer.clientWidth,s=Math.ceil(e.duration*(this.options.minPxPerSec||0));this.isScrollable=s>n;const o=this.options.fillParent&&!this.isScrollable,a=(o?n:s)*i;if(this.wrapper.style.width=o?"100%":`${s}px`,this.scrollContainer.style.overflowX=this.isScrollable?"auto":"hidden",this.scrollContainer.classList.toggle("noScrollbar",!!this.options.hideScrollbar),this.cursor.style.backgroundColor=`${this.options.cursorColor||this.options.progressColor}`,this.cursor.style.width=`${this.options.cursorWidth}px`,this.audioData=e,this.emit("render"),this.options.splitChannels)for(let c=0;c<e.numberOfChannels;c++){const l=Object.assign(Object.assign({},this.options),(r=this.options.splitChannels)===null||r===void 0?void 0:r[c]);this.renderChannel([e.getChannelData(c)],l,a,c)}else{const c=[e.getChannelData(0)];e.numberOfChannels>1&&c.push(e.getChannelData(1)),this.renderChannel(c,this.options,a,0)}Promise.resolve().then(()=>this.emit("rendered"))})}reRender(){if(this.unsubscribeOnScroll.forEach(i=>i()),this.unsubscribeOnScroll=[],!this.audioData)return;const{scrollWidth:e}=this.scrollContainer,{right:r}=this.progressWrapper.getBoundingClientRect();if(this.render(this.audioData),this.isScrollable&&e!==this.scrollContainer.scrollWidth){const{right:i}=this.progressWrapper.getBoundingClientRect();let n=i-r;n*=2,n=n<0?Math.floor(n):Math.ceil(n),n/=2,this.scrollContainer.scrollLeft+=n}}zoom(e){this.options.minPxPerSec=e,this.reRender()}scrollIntoView(e,r=!1){const{scrollLeft:i,scrollWidth:n,clientWidth:s}=this.scrollContainer,o=e*n,a=i,c=i+s,l=s/2;if(this.isDragging)o+30>c?this.scrollContainer.scrollLeft+=30:o-30<a&&(this.scrollContainer.scrollLeft-=30);else{(o<a||o>c)&&(this.scrollContainer.scrollLeft=o-(this.options.autoCenter?l:0));const u=o-i-l;r&&this.options.autoCenter&&u>0&&(this.scrollContainer.scrollLeft+=Math.min(u,10))}{const u=this.scrollContainer.scrollLeft,p=u/n,d=(u+s)/n;this.emit("scroll",p,d,u,u+s)}}renderProgress(e,r){if(isNaN(e))return;const i=100*e;this.canvasWrapper.style.clipPath=`polygon(${i}% 0, 100% 0, 100% 100%, ${i}% 100%)`,this.progressWrapper.style.width=`${i}%`,this.cursor.style.left=`${i}%`,this.cursor.style.transform=`translateX(-${Math.round(i)===100?this.options.cursorWidth:0}px)`,this.isScrollable&&this.options.autoScroll&&this.scrollIntoView(e,r)}exportImage(e,r,i){return N(this,void 0,void 0,function*(){const n=this.canvasWrapper.querySelectorAll("canvas");if(!n.length)throw new Error("No waveform data");if(i==="dataURL"){const s=Array.from(n).map(o=>o.toDataURL(e,r));return Promise.resolve(s)}return Promise.all(Array.from(n).map(s=>new Promise((o,a)=>{s.toBlob(c=>{c?o(c):a(new Error("Could not export image"))},e,r)})))})}}Q.MAX_CANVAS_WIDTH=8e3,Q.MAX_NODES=10;class yr extends me{constructor(){super(...arguments),this.unsubscribe=()=>{}}start(){this.unsubscribe=this.on("tick",()=>{requestAnimationFrame(()=>{this.emit("tick")})}),this.emit("tick")}stop(){this.unsubscribe()}destroy(){this.unsubscribe()}}class qe extends me{constructor(e=new AudioContext){super(),this.bufferNode=null,this.playStartTime=0,this.playedDuration=0,this._muted=!1,this._playbackRate=1,this._duration=void 0,this.buffer=null,this.currentSrc="",this.paused=!0,this.crossOrigin=null,this.seeking=!1,this.autoplay=!1,this.addEventListener=this.on,this.removeEventListener=this.un,this.audioContext=e,this.gainNode=this.audioContext.createGain(),this.gainNode.connect(this.audioContext.destination)}load(){return N(this,void 0,void 0,function*(){})}get src(){return this.currentSrc}set src(e){if(this.currentSrc=e,this._duration=void 0,!e)return this.buffer=null,void this.emit("emptied");fetch(e).then(r=>{if(r.status>=400)throw new Error(`Failed to fetch ${e}: ${r.status} (${r.statusText})`);return r.arrayBuffer()}).then(r=>this.currentSrc!==e?null:this.audioContext.decodeAudioData(r)).then(r=>{this.currentSrc===e&&(this.buffer=r,this.emit("loadedmetadata"),this.emit("canplay"),this.autoplay&&this.play())})}_play(){var e;if(!this.paused)return;this.paused=!1,(e=this.bufferNode)===null||e===void 0||e.disconnect(),this.bufferNode=this.audioContext.createBufferSource(),this.buffer&&(this.bufferNode.buffer=this.buffer),this.bufferNode.playbackRate.value=this._playbackRate,this.bufferNode.connect(this.gainNode);let r=this.playedDuration*this._playbackRate;(r>=this.duration||r<0)&&(r=0,this.playedDuration=0),this.bufferNode.start(this.audioContext.currentTime,r),this.playStartTime=this.audioContext.currentTime,this.bufferNode.onended=()=>{this.currentTime>=this.duration&&(this.pause(),this.emit("ended"))}}_pause(){var e;this.paused=!0,(e=this.bufferNode)===null||e===void 0||e.stop(),this.playedDuration+=this.audioContext.currentTime-this.playStartTime}play(){return N(this,void 0,void 0,function*(){this.paused&&(this._play(),this.emit("play"))})}pause(){this.paused||(this._pause(),this.emit("pause"))}stopAt(e){const r=e-this.currentTime,i=this.bufferNode;i==null||i.stop(this.audioContext.currentTime+r),i==null||i.addEventListener("ended",()=>{i===this.bufferNode&&(this.bufferNode=null,this.pause())},{once:!0})}setSinkId(e){return N(this,void 0,void 0,function*(){return this.audioContext.setSinkId(e)})}get playbackRate(){return this._playbackRate}set playbackRate(e){this._playbackRate=e,this.bufferNode&&(this.bufferNode.playbackRate.value=e)}get currentTime(){return(this.paused?this.playedDuration:this.playedDuration+(this.audioContext.currentTime-this.playStartTime))*this._playbackRate}set currentTime(e){const r=!this.paused;r&&this._pause(),this.playedDuration=e/this._playbackRate,r&&this._play(),this.emit("seeking"),this.emit("timeupdate")}get duration(){var e,r;return(e=this._duration)!==null&&e!==void 0?e:((r=this.buffer)===null||r===void 0?void 0:r.duration)||0}set duration(e){this._duration=e}get volume(){return this.gainNode.gain.value}set volume(e){this.gainNode.gain.value=e,this.emit("volumechange")}get muted(){return this._muted}set muted(e){this._muted!==e&&(this._muted=e,this._muted?this.gainNode.disconnect():this.gainNode.connect(this.audioContext.destination))}canPlayType(e){return/^(audio|video)\//.test(e)}getGainNode(){return this.gainNode}getChannelData(){const e=[];if(!this.buffer)return e;const r=this.buffer.numberOfChannels;for(let i=0;i<r;i++)e.push(this.buffer.getChannelData(i));return e}}const vr={waveColor:"#999",progressColor:"#555",cursorWidth:1,minPxPerSec:0,fillParent:!0,interact:!0,dragToSeek:!1,autoScroll:!0,autoCenter:!0,sampleRate:8e3};class he extends br{static create(e){return new he(e)}constructor(e){const r=e.media||(e.backend==="WebAudio"?new qe:void 0);super({media:r,mediaControls:e.mediaControls,autoplay:e.autoplay,playbackRate:e.audioRate}),this.plugins=[],this.decodedData=null,this.stopAtPosition=null,this.subscriptions=[],this.mediaSubscriptions=[],this.abortController=null,this.options=Object.assign({},vr,e),this.timer=new yr;const i=r?void 0:this.getMediaElement();this.renderer=new Q(this.options,i),this.initPlayerEvents(),this.initRendererEvents(),this.initTimerEvents(),this.initPlugins();const n=this.options.url||this.getSrc()||"";Promise.resolve().then(()=>{this.emit("init");const{peaks:s,duration:o}=this.options;(n||s&&o)&&this.load(n,s,o).catch(()=>null)})}updateProgress(e=this.getCurrentTime()){return this.renderer.renderProgress(e/this.getDuration(),this.isPlaying()),e}initTimerEvents(){this.subscriptions.push(this.timer.on("tick",()=>{if(!this.isSeeking()){const e=this.updateProgress();this.emit("timeupdate",e),this.emit("audioprocess",e),this.stopAtPosition!=null&&this.isPlaying()&&e>=this.stopAtPosition&&this.pause()}}))}initPlayerEvents(){this.isPlaying()&&(this.emit("play"),this.timer.start()),this.mediaSubscriptions.push(this.onMediaEvent("timeupdate",()=>{const e=this.updateProgress();this.emit("timeupdate",e)}),this.onMediaEvent("play",()=>{this.emit("play"),this.timer.start()}),this.onMediaEvent("pause",()=>{this.emit("pause"),this.timer.stop(),this.stopAtPosition=null}),this.onMediaEvent("emptied",()=>{this.timer.stop(),this.stopAtPosition=null}),this.onMediaEvent("ended",()=>{this.emit("timeupdate",this.getDuration()),this.emit("finish"),this.stopAtPosition=null}),this.onMediaEvent("seeking",()=>{this.emit("seeking",this.getCurrentTime())}),this.onMediaEvent("error",()=>{var e;this.emit("error",(e=this.getMediaElement().error)!==null&&e!==void 0?e:new Error("Media error")),this.stopAtPosition=null}))}initRendererEvents(){this.subscriptions.push(this.renderer.on("click",(e,r)=>{this.options.interact&&(this.seekTo(e),this.emit("interaction",e*this.getDuration()),this.emit("click",e,r))}),this.renderer.on("dblclick",(e,r)=>{this.emit("dblclick",e,r)}),this.renderer.on("scroll",(e,r,i,n)=>{const s=this.getDuration();this.emit("scroll",e*s,r*s,i,n)}),this.renderer.on("render",()=>{this.emit("redraw")}),this.renderer.on("rendered",()=>{this.emit("redrawcomplete")}),this.renderer.on("dragstart",e=>{this.emit("dragstart",e)}),this.renderer.on("dragend",e=>{this.emit("dragend",e)}));{let e;this.subscriptions.push(this.renderer.on("drag",r=>{if(!this.options.interact)return;let i;this.renderer.renderProgress(r),clearTimeout(e),this.isPlaying()?i=0:this.options.dragToSeek===!0?i=200:typeof this.options.dragToSeek=="object"&&this.options.dragToSeek!==void 0&&(i=this.options.dragToSeek.debounceTime),e=setTimeout(()=>{this.seekTo(r)},i),this.emit("interaction",r*this.getDuration()),this.emit("drag",r)}))}}initPlugins(){var e;!((e=this.options.plugins)===null||e===void 0)&&e.length&&this.options.plugins.forEach(r=>{this.registerPlugin(r)})}unsubscribePlayerEvents(){this.mediaSubscriptions.forEach(e=>e()),this.mediaSubscriptions=[]}setOptions(e){this.options=Object.assign({},this.options,e),e.duration&&!e.peaks&&(this.decodedData=Ce.createBuffer(this.exportPeaks(),e.duration)),e.peaks&&e.duration&&(this.decodedData=Ce.createBuffer(e.peaks,e.duration)),this.renderer.setOptions(this.options),e.audioRate&&this.setPlaybackRate(e.audioRate),e.mediaControls!=null&&(this.getMediaElement().controls=e.mediaControls)}registerPlugin(e){return e._init(this),this.plugins.push(e),this.subscriptions.push(e.once("destroy",()=>{this.plugins=this.plugins.filter(r=>r!==e)})),e}getWrapper(){return this.renderer.getWrapper()}getWidth(){return this.renderer.getWidth()}getScroll(){return this.renderer.getScroll()}setScroll(e){return this.renderer.setScroll(e)}setScrollTime(e){const r=e/this.getDuration();this.renderer.setScrollPercentage(r)}getActivePlugins(){return this.plugins}loadAudio(e,r,i,n){return N(this,void 0,void 0,function*(){var s;if(this.emit("load",e),!this.options.media&&this.isPlaying()&&this.pause(),this.decodedData=null,this.stopAtPosition=null,!r&&!i){const a=this.options.fetchParams||{};window.AbortController&&!a.signal&&(this.abortController=new AbortController,a.signal=(s=this.abortController)===null||s===void 0?void 0:s.signal);const c=u=>this.emit("loading",u);r=yield gr.fetchBlob(e,c,a);const l=this.options.blobMimeType;l&&(r=new Blob([r],{type:l}))}this.setSrc(e,r);const o=yield new Promise(a=>{const c=n||this.getDuration();c?a(c):this.mediaSubscriptions.push(this.onMediaEvent("loadedmetadata",()=>a(this.getDuration()),{once:!0}))});if(!e&&!r){const a=this.getMediaElement();a instanceof qe&&(a.duration=o)}if(i)this.decodedData=Ce.createBuffer(i,o||0);else if(r){const a=yield r.arrayBuffer();this.decodedData=yield Ce.decode(a,this.options.sampleRate)}this.decodedData&&(this.emit("decode",this.getDuration()),this.renderer.render(this.decodedData)),this.emit("ready",this.getDuration())})}load(e,r,i){return N(this,void 0,void 0,function*(){try{return yield this.loadAudio(e,void 0,r,i)}catch(n){throw this.emit("error",n),n}})}loadBlob(e,r,i){return N(this,void 0,void 0,function*(){try{return yield this.loadAudio("",e,r,i)}catch(n){throw this.emit("error",n),n}})}zoom(e){if(!this.decodedData)throw new Error("No audio loaded");this.renderer.zoom(e),this.emit("zoom",e)}getDecodedData(){return this.decodedData}exportPeaks({channels:e=2,maxLength:r=8e3,precision:i=1e4}={}){if(!this.decodedData)throw new Error("The audio has not been decoded yet");const n=Math.min(e,this.decodedData.numberOfChannels),s=[];for(let o=0;o<n;o++){const a=this.decodedData.getChannelData(o),c=[],l=a.length/r;for(let u=0;u<r;u++){const p=a.slice(Math.floor(u*l),Math.ceil((u+1)*l));let d=0;for(let f=0;f<p.length;f++){const y=p[f];Math.abs(y)>Math.abs(d)&&(d=y)}c.push(Math.round(d*i)/i)}s.push(c)}return s}getDuration(){let e=super.getDuration()||0;return e!==0&&e!==1/0||!this.decodedData||(e=this.decodedData.duration),e}toggleInteraction(e){this.options.interact=e}setTime(e){this.stopAtPosition=null,super.setTime(e),this.updateProgress(e),this.emit("timeupdate",e)}seekTo(e){const r=this.getDuration()*e;this.setTime(r)}play(e,r){const i=Object.create(null,{play:{get:()=>super.play}});return N(this,void 0,void 0,function*(){e!=null&&this.setTime(e);const n=yield i.play.call(this);return r!=null&&(this.media instanceof qe?this.media.stopAt(r):this.stopAtPosition=r),n})}playPause(){return N(this,void 0,void 0,function*(){return this.isPlaying()?this.pause():this.play()})}stop(){this.pause(),this.setTime(0)}skip(e){this.setTime(this.getCurrentTime()+e)}empty(){this.load("",[[0]],.001)}setMediaElement(e){this.unsubscribePlayerEvents(),super.setMediaElement(e),this.initPlayerEvents()}exportImage(){return N(this,arguments,void 0,function*(e="image/png",r=1,i="dataURL"){return this.renderer.exportImage(e,r,i)})}destroy(){var e;this.emit("destroy"),(e=this.abortController)===null||e===void 0||e.abort(),this.plugins.forEach(r=>r.destroy()),this.subscriptions.forEach(r=>r()),this.unsubscribePlayerEvents(),this.timer.destroy(),this.renderer.destroy(),super.destroy()}}he.BasePlugin=class extends me{constructor(t){super(),this.subscriptions=[],this.options=t}onInit(){}_init(t){this.wavesurfer=t,this.onInit()}destroy(){this.emit("destroy"),this.subscriptions.forEach(t=>t())}},he.dom=mr;const xr=(t,e)=>{const[r,i]=T.useState(null);return T.useEffect(()=>{if(!t.current)return;const n=he.create({...e,container:t.current});return i(n),()=>{n.destroy()}},[e,t]),r};var A=function(){return A=Object.assign||function(e){for(var r,i=1,n=arguments.length;i<n;i++){r=arguments[i];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},A.apply(this,arguments)};function pe(t,e,r){if(r||arguments.length===2)for(var i=0,n=e.length,s;i<n;i++)(s||!(i in e))&&(s||(s=Array.prototype.slice.call(e,0,i)),s[i]=e[i]);return t.concat(s||Array.prototype.slice.call(e))}var R="-ms-",ue="-moz-",E="-webkit-",At="comm",$e="rule",ct="decl",wr="@import",$t="@keyframes",Sr="@layer",Dt=Math.abs,lt=String.fromCharCode,Qe=Object.assign;function Cr(t,e){return _(t,0)^45?(((e<<2^_(t,0))<<2^_(t,1))<<2^_(t,2))<<2^_(t,3):0}function Ot(t){return t.trim()}function F(t,e){return(t=e.exec(t))?t[0]:t}function k(t,e,r){return t.replace(e,r)}function Ee(t,e,r){return t.indexOf(e,r)}function _(t,e){return t.charCodeAt(e)|0}function ee(t,e,r){return t.slice(e,r)}function z(t){return t.length}function Lt(t){return t.length}function le(t,e){return e.push(t),t}function kr(t,e){return t.map(e).join("")}function bt(t,e){return t.filter(function(r){return!F(r,e)})}var De=1,te=1,zt=0,O=0,j=0,se="";function Oe(t,e,r,i,n,s,o,a){return{value:t,root:e,parent:r,type:i,props:n,children:s,line:De,column:te,length:o,return:"",siblings:a}}function Y(t,e){return Qe(Oe("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function Z(t){for(;t.root;)t=Y(t.root,{children:[t]});le(t,t.siblings)}function Pr(){return j}function Er(){return j=O>0?_(se,--O):0,te--,j===10&&(te=1,De--),j}function L(){return j=O<zt?_(se,O++):0,te++,j===10&&(te=1,De++),j}function K(){return _(se,O)}function Re(){return O}function Le(t,e){return ee(se,t,e)}function et(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Rr(t){return De=te=1,zt=z(se=t),O=0,[]}function Tr(t){return se="",t}function Ye(t){return Ot(Le(O-1,tt(t===91?t+2:t===40?t+1:t)))}function jr(t){for(;(j=K())&&j<33;)L();return et(t)>2||et(j)>3?"":" "}function Mr(t,e){for(;--e&&L()&&!(j<48||j>102||j>57&&j<65||j>70&&j<97););return Le(t,Re()+(e<6&&K()==32&&L()==32))}function tt(t){for(;L();)switch(j){case t:return O;case 34:case 39:t!==34&&t!==39&&tt(j);break;case 40:t===41&&tt(t);break;case 92:L();break}return O}function _r(t,e){for(;L()&&t+j!==57;)if(t+j===84&&K()===47)break;return"/*"+Le(e,O-1)+"*"+lt(t===47?t:L())}function Nr(t){for(;!et(K());)L();return Le(t,O)}function Ir(t){return Tr(Te("",null,null,null,[""],t=Rr(t),0,[0],t))}function Te(t,e,r,i,n,s,o,a,c){for(var l=0,u=0,p=o,d=0,f=0,y=0,C=1,S=1,x=1,w=0,P="",v=n,h=s,g=i,b=P;S;)switch(y=w,w=L()){case 40:if(y!=108&&_(b,p-1)==58){Ee(b+=k(Ye(w),"&","&\f"),"&\f",Dt(l?a[l-1]:0))!=-1&&(x=-1);break}case 34:case 39:case 91:b+=Ye(w);break;case 9:case 10:case 13:case 32:b+=jr(y);break;case 92:b+=Mr(Re()-1,7);continue;case 47:switch(K()){case 42:case 47:le(Ar(_r(L(),Re()),e,r,c),c);break;default:b+="/"}break;case 123*C:a[l++]=z(b)*x;case 125*C:case 59:case 0:switch(w){case 0:case 125:S=0;case 59+u:x==-1&&(b=k(b,/\f/g,"")),f>0&&z(b)-p&&le(f>32?vt(b+";",i,r,p-1,c):vt(k(b," ","")+";",i,r,p-2,c),c);break;case 59:b+=";";default:if(le(g=yt(b,e,r,l,u,n,a,P,v=[],h=[],p,s),s),w===123)if(u===0)Te(b,e,g,g,v,s,p,a,h);else switch(d===99&&_(b,3)===110?100:d){case 100:case 108:case 109:case 115:Te(t,g,g,i&&le(yt(t,g,g,0,0,n,a,P,n,v=[],p,h),h),n,h,p,a,i?v:h);break;default:Te(b,g,g,g,[""],h,0,a,h)}}l=u=f=0,C=x=1,P=b="",p=o;break;case 58:p=1+z(b),f=y;default:if(C<1){if(w==123)--C;else if(w==125&&C++==0&&Er()==125)continue}switch(b+=lt(w),w*C){case 38:x=u>0?1:(b+="\f",-1);break;case 44:a[l++]=(z(b)-1)*x,x=1;break;case 64:K()===45&&(b+=Ye(L())),d=K(),u=p=z(P=b+=Nr(Re())),w++;break;case 45:y===45&&z(b)==2&&(C=0)}}return s}function yt(t,e,r,i,n,s,o,a,c,l,u,p){for(var d=n-1,f=n===0?s:[""],y=Lt(f),C=0,S=0,x=0;C<i;++C)for(var w=0,P=ee(t,d+1,d=Dt(S=o[C])),v=t;w<y;++w)(v=Ot(S>0?f[w]+" "+P:k(P,/&\f/g,f[w])))&&(c[x++]=v);return Oe(t,e,r,n===0?$e:a,c,l,u,p)}function Ar(t,e,r,i){return Oe(t,e,r,At,lt(Pr()),ee(t,2,-2),0,i)}function vt(t,e,r,i,n){return Oe(t,e,r,ct,ee(t,0,i),ee(t,i+1,-1),i,n)}function Wt(t,e,r){switch(Cr(t,e)){case 5103:return E+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return E+t+t;case 4789:return ue+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return E+t+ue+t+R+t+t;case 5936:switch(_(t,e+11)){case 114:return E+t+R+k(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return E+t+R+k(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return E+t+R+k(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return E+t+R+t+t;case 6165:return E+t+R+"flex-"+t+t;case 5187:return E+t+k(t,/(\w+).+(:[^]+)/,E+"box-$1$2"+R+"flex-$1$2")+t;case 5443:return E+t+R+"flex-item-"+k(t,/flex-|-self/g,"")+(F(t,/flex-|baseline/)?"":R+"grid-row-"+k(t,/flex-|-self/g,""))+t;case 4675:return E+t+R+"flex-line-pack"+k(t,/align-content|flex-|-self/g,"")+t;case 5548:return E+t+R+k(t,"shrink","negative")+t;case 5292:return E+t+R+k(t,"basis","preferred-size")+t;case 6060:return E+"box-"+k(t,"-grow","")+E+t+R+k(t,"grow","positive")+t;case 4554:return E+k(t,/([^-])(transform)/g,"$1"+E+"$2")+t;case 6187:return k(k(k(t,/(zoom-|grab)/,E+"$1"),/(image-set)/,E+"$1"),t,"")+t;case 5495:case 3959:return k(t,/(image-set\([^]*)/,E+"$1$`$1");case 4968:return k(k(t,/(.+:)(flex-)?(.*)/,E+"box-pack:$3"+R+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+E+t+t;case 4200:if(!F(t,/flex-|baseline/))return R+"grid-column-align"+ee(t,e)+t;break;case 2592:case 3360:return R+k(t,"template-","")+t;case 4384:case 3616:return r&&r.some(function(i,n){return e=n,F(i.props,/grid-\w+-end/)})?~Ee(t+(r=r[e].value),"span",0)?t:R+k(t,"-start","")+t+R+"grid-row-span:"+(~Ee(r,"span",0)?F(r,/\d+/):+F(r,/\d+/)-+F(t,/\d+/))+";":R+k(t,"-start","")+t;case 4896:case 4128:return r&&r.some(function(i){return F(i.props,/grid-\w+-start/)})?t:R+k(k(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return k(t,/(.+)-inline(.+)/,E+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(z(t)-1-e>6)switch(_(t,e+1)){case 109:if(_(t,e+4)!==45)break;case 102:return k(t,/(.+:)(.+)-([^]+)/,"$1"+E+"$2-$3$1"+ue+(_(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Ee(t,"stretch",0)?Wt(k(t,"stretch","fill-available"),e,r)+t:t}break;case 5152:case 5920:return k(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,n,s,o,a,c,l){return R+n+":"+s+l+(o?R+n+"-span:"+(a?c:+c-+s)+l:"")+t});case 4949:if(_(t,e+6)===121)return k(t,":",":"+E)+t;break;case 6444:switch(_(t,_(t,14)===45?18:11)){case 120:return k(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+E+(_(t,14)===45?"inline-":"")+"box$3$1"+E+"$2$3$1"+R+"$2box$3")+t;case 100:return k(t,":",":"+R)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return k(t,"scroll-","scroll-snap-")+t}return t}function _e(t,e){for(var r="",i=0;i<t.length;i++)r+=e(t[i],i,t,e)||"";return r}function $r(t,e,r,i){switch(t.type){case Sr:if(t.children.length)break;case wr:case ct:return t.return=t.return||t.value;case At:return"";case $t:return t.return=t.value+"{"+_e(t.children,i)+"}";case $e:if(!z(t.value=t.props.join(",")))return""}return z(r=_e(t.children,i))?t.return=t.value+"{"+r+"}":""}function Dr(t){var e=Lt(t);return function(r,i,n,s){for(var o="",a=0;a<e;a++)o+=t[a](r,i,n,s)||"";return o}}function Or(t){return function(e){e.root||(e=e.return)&&t(e)}}function Lr(t,e,r,i){if(t.length>-1&&!t.return)switch(t.type){case ct:t.return=Wt(t.value,t.length,r);return;case $t:return _e([Y(t,{value:k(t.value,"@","@"+E)})],i);case $e:if(t.length)return kr(r=t.props,function(n){switch(F(n,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Z(Y(t,{props:[k(n,/:(read-\w+)/,":"+ue+"$1")]})),Z(Y(t,{props:[n]})),Qe(t,{props:bt(r,i)});break;case"::placeholder":Z(Y(t,{props:[k(n,/:(plac\w+)/,":"+E+"input-$1")]})),Z(Y(t,{props:[k(n,/:(plac\w+)/,":"+ue+"$1")]})),Z(Y(t,{props:[k(n,/:(plac\w+)/,R+"input-$1")]})),Z(Y(t,{props:[n]})),Qe(t,{props:bt(r,i)});break}return""})}}var zr={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},$={},re=typeof process<"u"&&$!==void 0&&($.REACT_APP_SC_ATTR||$.SC_ATTR)||"data-styled",Bt="active",Ft="data-styled-version",ze="6.1.17",ut=`/*!sc*/
`,Ne=typeof window<"u"&&"HTMLElement"in window,Wr=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&$!==void 0&&$.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&$.REACT_APP_SC_DISABLE_SPEEDY!==""?$.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&$.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&$!==void 0&&$.SC_DISABLE_SPEEDY!==void 0&&$.SC_DISABLE_SPEEDY!==""&&$.SC_DISABLE_SPEEDY!=="false"&&$.SC_DISABLE_SPEEDY),Br={},We=Object.freeze([]),ie=Object.freeze({});function Gt(t,e,r){return r===void 0&&(r=ie),t.theme!==r.theme&&t.theme||e||r.theme}var Ht=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Fr=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Gr=/(^-|-$)/g;function xt(t){return t.replace(Fr,"-").replace(Gr,"")}var Hr=/(a)(d)/gi,ke=52,wt=function(t){return String.fromCharCode(t+(t>25?39:97))};function rt(t){var e,r="";for(e=Math.abs(t);e>ke;e=e/ke|0)r=wt(e%ke)+r;return(wt(e%ke)+r).replace(Hr,"$1-$2")}var Ve,qt=5381,J=function(t,e){for(var r=e.length;r;)t=33*t^e.charCodeAt(--r);return t},Yt=function(t){return J(qt,t)};function Vt(t){return rt(Yt(t)>>>0)}function qr(t){return t.displayName||t.name||"Component"}function Xe(t){return typeof t=="string"&&!0}var Xt=typeof Symbol=="function"&&Symbol.for,Ut=Xt?Symbol.for("react.memo"):60115,Yr=Xt?Symbol.for("react.forward_ref"):60112,Vr={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Xr={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Kt={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ur=((Ve={})[Yr]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ve[Ut]=Kt,Ve);function St(t){return("type"in(e=t)&&e.type.$$typeof)===Ut?Kt:"$$typeof"in t?Ur[t.$$typeof]:Vr;var e}var Kr=Object.defineProperty,Zr=Object.getOwnPropertyNames,Ct=Object.getOwnPropertySymbols,Jr=Object.getOwnPropertyDescriptor,Qr=Object.getPrototypeOf,kt=Object.prototype;function Zt(t,e,r){if(typeof e!="string"){if(kt){var i=Qr(e);i&&i!==kt&&Zt(t,i,r)}var n=Zr(e);Ct&&(n=n.concat(Ct(e)));for(var s=St(t),o=St(e),a=0;a<n.length;++a){var c=n[a];if(!(c in Xr||r&&r[c]||o&&c in o||s&&c in s)){var l=Jr(e,c);try{Kr(t,c,l)}catch{}}}}return t}function ne(t){return typeof t=="function"}function dt(t){return typeof t=="object"&&"styledComponentId"in t}function U(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function it(t,e){if(t.length===0)return"";for(var r=t[0],i=1;i<t.length;i++)r+=t[i];return r}function fe(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function nt(t,e,r){if(r===void 0&&(r=!1),!r&&!fe(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var i=0;i<e.length;i++)t[i]=nt(t[i],e[i]);else if(fe(e))for(var i in e)t[i]=nt(t[i],e[i]);return t}function ht(t,e){Object.defineProperty(t,"toString",{value:e})}function ge(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var ei=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var r=0,i=0;i<e;i++)r+=this.groupSizes[i];return r},t.prototype.insertRules=function(e,r){if(e>=this.groupSizes.length){for(var i=this.groupSizes,n=i.length,s=n;e>=s;)if((s<<=1)<0)throw ge(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(i),this.length=s;for(var o=n;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),c=(o=0,r.length);o<c;o++)this.tag.insertRule(a,r[o])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var r=this.groupSizes[e],i=this.indexOfGroup(e),n=i+r;this.groupSizes[e]=0;for(var s=i;s<n;s++)this.tag.deleteRule(i)}},t.prototype.getGroup=function(e){var r="";if(e>=this.length||this.groupSizes[e]===0)return r;for(var i=this.groupSizes[e],n=this.indexOfGroup(e),s=n+i,o=n;o<s;o++)r+="".concat(this.tag.getRule(o)).concat(ut);return r},t}(),je=new Map,Ie=new Map,Me=1,Pe=function(t){if(je.has(t))return je.get(t);for(;Ie.has(Me);)Me++;var e=Me++;return je.set(t,e),Ie.set(e,t),e},ti=function(t,e){Me=e+1,je.set(t,e),Ie.set(e,t)},ri="style[".concat(re,"][").concat(Ft,'="').concat(ze,'"]'),ii=new RegExp("^".concat(re,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ni=function(t,e,r){for(var i,n=r.split(","),s=0,o=n.length;s<o;s++)(i=n[s])&&t.registerName(e,i)},si=function(t,e){for(var r,i=((r=e.textContent)!==null&&r!==void 0?r:"").split(ut),n=[],s=0,o=i.length;s<o;s++){var a=i[s].trim();if(a){var c=a.match(ii);if(c){var l=0|parseInt(c[1],10),u=c[2];l!==0&&(ti(u,l),ni(t,u,c[3]),t.getTag().insertRules(l,n)),n.length=0}else n.push(a)}}},Pt=function(t){for(var e=document.querySelectorAll(ri),r=0,i=e.length;r<i;r++){var n=e[r];n&&n.getAttribute(re)!==Bt&&(si(t,n),n.parentNode&&n.parentNode.removeChild(n))}};function oi(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Jt=function(t){var e=document.head,r=t||e,i=document.createElement("style"),n=function(a){var c=Array.from(a.querySelectorAll("style[".concat(re,"]")));return c[c.length-1]}(r),s=n!==void 0?n.nextSibling:null;i.setAttribute(re,Bt),i.setAttribute(Ft,ze);var o=oi();return o&&i.setAttribute("nonce",o),r.insertBefore(i,s),i},ai=function(){function t(e){this.element=Jt(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var i=document.styleSheets,n=0,s=i.length;n<s;n++){var o=i[n];if(o.ownerNode===r)return o}throw ge(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,r){try{return this.sheet.insertRule(r,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var r=this.sheet.cssRules[e];return r&&r.cssText?r.cssText:""},t}(),ci=function(){function t(e){this.element=Jt(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,r){if(e<=this.length&&e>=0){var i=document.createTextNode(r);return this.element.insertBefore(i,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),li=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,r){return e<=this.length&&(this.rules.splice(e,0,r),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),Et=Ne,ui={isServer:!Ne,useCSSOMInjection:!Wr},Ae=function(){function t(e,r,i){e===void 0&&(e=ie),r===void 0&&(r={});var n=this;this.options=A(A({},ui),e),this.gs=r,this.names=new Map(i),this.server=!!e.isServer,!this.server&&Ne&&Et&&(Et=!1,Pt(this)),ht(this,function(){return function(s){for(var o=s.getTag(),a=o.length,c="",l=function(p){var d=function(x){return Ie.get(x)}(p);if(d===void 0)return"continue";var f=s.names.get(d),y=o.getGroup(p);if(f===void 0||!f.size||y.length===0)return"continue";var C="".concat(re,".g").concat(p,'[id="').concat(d,'"]'),S="";f!==void 0&&f.forEach(function(x){x.length>0&&(S+="".concat(x,","))}),c+="".concat(y).concat(C,'{content:"').concat(S,'"}').concat(ut)},u=0;u<a;u++)l(u);return c}(n)})}return t.registerId=function(e){return Pe(e)},t.prototype.rehydrate=function(){!this.server&&Ne&&Pt(this)},t.prototype.reconstructWithOptions=function(e,r){return r===void 0&&(r=!0),new t(A(A({},this.options),e),this.gs,r&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(r){var i=r.useCSSOMInjection,n=r.target;return r.isServer?new li(n):i?new ai(n):new ci(n)}(this.options),new ei(e)));var e},t.prototype.hasNameForId=function(e,r){return this.names.has(e)&&this.names.get(e).has(r)},t.prototype.registerName=function(e,r){if(Pe(e),this.names.has(e))this.names.get(e).add(r);else{var i=new Set;i.add(r),this.names.set(e,i)}},t.prototype.insertRules=function(e,r,i){this.registerName(e,r),this.getTag().insertRules(Pe(e),i)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Pe(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),di=/&/g,hi=/^\s*\/\/.*$/gm;function Qt(t,e){return t.map(function(r){return r.type==="rule"&&(r.value="".concat(e," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(e," ")),r.props=r.props.map(function(i){return"".concat(e," ").concat(i)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=Qt(r.children,e)),r})}function pi(t){var e,r,i,n=ie,s=n.options,o=s===void 0?ie:s,a=n.plugins,c=a===void 0?We:a,l=function(d,f,y){return y.startsWith(r)&&y.endsWith(r)&&y.replaceAll(r,"").length>0?".".concat(e):d},u=c.slice();u.push(function(d){d.type===$e&&d.value.includes("&")&&(d.props[0]=d.props[0].replace(di,r).replace(i,l))}),o.prefix&&u.push(Lr),u.push($r);var p=function(d,f,y,C){f===void 0&&(f=""),y===void 0&&(y=""),C===void 0&&(C="&"),e=C,r=f,i=new RegExp("\\".concat(r,"\\b"),"g");var S=d.replace(hi,""),x=Ir(y||f?"".concat(y," ").concat(f," { ").concat(S," }"):S);o.namespace&&(x=Qt(x,o.namespace));var w=[];return _e(x,Dr(u.concat(Or(function(P){return w.push(P)})))),w};return p.hash=c.length?c.reduce(function(d,f){return f.name||ge(15),J(d,f.name)},qt).toString():"",p}var fi=new Ae,st=pi(),er=G.createContext({shouldForwardProp:void 0,styleSheet:fi,stylis:st});er.Consumer;G.createContext(void 0);function ot(){return T.useContext(er)}var mi=function(){function t(e,r){var i=this;this.inject=function(n,s){s===void 0&&(s=st);var o=i.name+s.hash;n.hasNameForId(i.id,o)||n.insertRules(i.id,o,s(i.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=r,ht(this,function(){throw ge(12,String(i.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=st),this.name+e.hash},t}(),gi=function(t){return t>="A"&&t<="Z"};function Rt(t){for(var e="",r=0;r<t.length;r++){var i=t[r];if(r===1&&i==="-"&&t[0]==="-")return t;gi(i)?e+="-"+i.toLowerCase():e+=i}return e.startsWith("ms-")?"-"+e:e}var tr=function(t){return t==null||t===!1||t===""},rr=function(t){var e,r,i=[];for(var n in t){var s=t[n];t.hasOwnProperty(n)&&!tr(s)&&(Array.isArray(s)&&s.isCss||ne(s)?i.push("".concat(Rt(n),":"),s,";"):fe(s)?i.push.apply(i,pe(pe(["".concat(n," {")],rr(s),!1),["}"],!1)):i.push("".concat(Rt(n),": ").concat((e=n,(r=s)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||e in zr||e.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return i};function V(t,e,r,i){if(tr(t))return[];if(dt(t))return[".".concat(t.styledComponentId)];if(ne(t)){if(!ne(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var n=t(e);return V(n,e,r,i)}var s;return t instanceof mi?r?(t.inject(r,i),[t.getName(i)]):[t]:fe(t)?rr(t):Array.isArray(t)?Array.prototype.concat.apply(We,t.map(function(o){return V(o,e,r,i)})):[t.toString()]}function ir(t){for(var e=0;e<t.length;e+=1){var r=t[e];if(ne(r)&&!dt(r))return!1}return!0}var bi=Yt(ze),yi=function(){function t(e,r,i){this.rules=e,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&ir(e),this.componentId=r,this.baseHash=J(bi,r),this.baseStyle=i,Ae.registerId(r)}return t.prototype.generateAndInjectStyles=function(e,r,i){var n=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,r,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))n=U(n,this.staticRulesId);else{var s=it(V(this.rules,e,r,i)),o=rt(J(this.baseHash,s)>>>0);if(!r.hasNameForId(this.componentId,o)){var a=i(s,".".concat(o),void 0,this.componentId);r.insertRules(this.componentId,o,a)}n=U(n,o),this.staticRulesId=o}else{for(var c=J(this.baseHash,i.hash),l="",u=0;u<this.rules.length;u++){var p=this.rules[u];if(typeof p=="string")l+=p;else if(p){var d=it(V(p,e,r,i));c=J(c,d+u),l+=d}}if(l){var f=rt(c>>>0);r.hasNameForId(this.componentId,f)||r.insertRules(this.componentId,f,i(l,".".concat(f),void 0,this.componentId)),n=U(n,f)}}return n},t}(),pt=G.createContext(void 0);pt.Consumer;var Ue={};function vi(t,e,r){var i=dt(t),n=t,s=!Xe(t),o=e.attrs,a=o===void 0?We:o,c=e.componentId,l=c===void 0?function(v,h){var g=typeof v!="string"?"sc":xt(v);Ue[g]=(Ue[g]||0)+1;var b="".concat(g,"-").concat(Vt(ze+g+Ue[g]));return h?"".concat(h,"-").concat(b):b}(e.displayName,e.parentComponentId):c,u=e.displayName,p=u===void 0?function(v){return Xe(v)?"styled.".concat(v):"Styled(".concat(qr(v),")")}(t):u,d=e.displayName&&e.componentId?"".concat(xt(e.displayName),"-").concat(e.componentId):e.componentId||l,f=i&&n.attrs?n.attrs.concat(a).filter(Boolean):a,y=e.shouldForwardProp;if(i&&n.shouldForwardProp){var C=n.shouldForwardProp;if(e.shouldForwardProp){var S=e.shouldForwardProp;y=function(v,h){return C(v,h)&&S(v,h)}}else y=C}var x=new yi(r,d,i?n.componentStyle:void 0);function w(v,h){return function(g,b,I){var D=g.attrs,W=g.componentStyle,be=g.defaultProps,ye=g.foldedComponentIds,dr=g.styledComponentId,hr=g.target,pr=G.useContext(pt),fr=ot(),Fe=g.shouldForwardProp||fr.shouldForwardProp,ft=Gt(b,pr,be)||ie,B=function(xe,ae,we){for(var ce,X=A(A({},ae),{className:void 0,theme:we}),He=0;He<xe.length;He+=1){var Se=ne(ce=xe[He])?ce(X):ce;for(var q in Se)X[q]=q==="className"?U(X[q],Se[q]):q==="style"?A(A({},X[q]),Se[q]):Se[q]}return ae.className&&(X.className=U(X.className,ae.className)),X}(D,b,ft),ve=B.as||hr,oe={};for(var H in B)B[H]===void 0||H[0]==="$"||H==="as"||H==="theme"&&B.theme===ft||(H==="forwardedAs"?oe.as=B.forwardedAs:Fe&&!Fe(H,ve)||(oe[H]=B[H]));var mt=function(xe,ae){var we=ot(),ce=xe.generateAndInjectStyles(ae,we.styleSheet,we.stylis);return ce}(W,B),Ge=U(ye,dr);return mt&&(Ge+=" "+mt),B.className&&(Ge+=" "+B.className),oe[Xe(ve)&&!Ht.has(ve)?"class":"className"]=Ge,I&&(oe.ref=I),T.createElement(ve,oe)}(P,v,h)}w.displayName=p;var P=G.forwardRef(w);return P.attrs=f,P.componentStyle=x,P.displayName=p,P.shouldForwardProp=y,P.foldedComponentIds=i?U(n.foldedComponentIds,n.styledComponentId):"",P.styledComponentId=d,P.target=i?n.target:t,Object.defineProperty(P,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=i?function(h){for(var g=[],b=1;b<arguments.length;b++)g[b-1]=arguments[b];for(var I=0,D=g;I<D.length;I++)nt(h,D[I],!0);return h}({},n.defaultProps,v):v}}),ht(P,function(){return".".concat(P.styledComponentId)}),s&&Zt(P,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),P}function Tt(t,e){for(var r=[t[0]],i=0,n=e.length;i<n;i+=1)r.push(e[i],t[i+1]);return r}var jt=function(t){return Object.assign(t,{isCss:!0})};function de(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];if(ne(t)||fe(t))return jt(V(Tt(We,pe([t],e,!0))));var i=t;return e.length===0&&i.length===1&&typeof i[0]=="string"?V(i):jt(V(Tt(i,e)))}function at(t,e,r){if(r===void 0&&(r=ie),!e)throw ge(1,e);var i=function(n){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,r,de.apply(void 0,pe([n],s,!1)))};return i.attrs=function(n){return at(t,e,A(A({},r),{attrs:Array.prototype.concat(r.attrs,n).filter(Boolean)}))},i.withConfig=function(n){return at(t,e,A(A({},r),n))},i}var nr=function(t){return at(vi,t)},M=nr;Ht.forEach(function(t){M[t]=nr(t)});var xi=function(){function t(e,r){this.rules=e,this.componentId=r,this.isStatic=ir(e),Ae.registerId(this.componentId+1)}return t.prototype.createStyles=function(e,r,i,n){var s=n(it(V(this.rules,r,i,n)),""),o=this.componentId+e;i.insertRules(o,o,s)},t.prototype.removeStyles=function(e,r){r.clearRules(this.componentId+e)},t.prototype.renderStyles=function(e,r,i,n){e>2&&Ae.registerId(this.componentId+e),this.removeStyles(e,i),this.createStyles(e,r,i,n)},t}();function wi(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];var i=de.apply(void 0,pe([t],e,!1)),n="sc-global-".concat(Vt(JSON.stringify(i))),s=new xi(i,n),o=function(c){var l=ot(),u=G.useContext(pt),p=G.useRef(l.styleSheet.allocateGSInstance(n)).current;return l.styleSheet.server&&a(p,c,l.styleSheet,u,l.stylis),G.useLayoutEffect(function(){if(!l.styleSheet.server)return a(p,c,l.styleSheet,u,l.stylis),function(){return s.removeStyles(p,l.styleSheet)}},[p,c,l.styleSheet,u,l.stylis]),null};function a(c,l,u,p,d){if(s.isStatic)s.renderStyles(c,Br,u,d);else{var f=A(A({},l),{theme:Gt(l,p,o.defaultProps)});s.renderStyles(c,f,u,d)}}return G.memo(o)}const Si=M.div`
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
`,sr=T.memo(t=>{const e=T.useRef(null),[r,i]=T.useState(!1),[n,s]=T.useState(.5),[o,a]=T.useState(0),[c,l]=T.useState(x(0)),[u,p]=T.useState(!1),d=xr(e,t),f=T.useRef(null),{onPlay:y,onReady:C}=t,S=T.useCallback(()=>{d.playPause()},[d]);T.useEffect(()=>{if(!d)return;d.setVolume(n);const v=()=>({media:d.getMediaElement(),peaks:d.exportPeaks()}),h=[d.on("ready",()=>{C&&C(v()),a(x(Math.round(d.getDuration()*1e3))),i(d.isPlaying())}),d.on("play",()=>{y&&y(g=>{const b=v();return!g||g.media!==b.media?(g&&(g.media.pause(),g.media.currentTime=0),b):g}),i(!0)}),d.on("audioprocess",()=>{l(x(Math.round(d.getCurrentTime()*1e3)))}),d.on("pause",()=>i(!1))];return()=>{h.forEach(g=>g())}},[d,y,C,n]),T.useEffect(()=>{const v=f.current;v.style.setProperty("--value",v.value),v.style.setProperty("--min",v.min===""?"0":v.min),v.style.setProperty("--max",v.max===""?"100":v.max),v.style.setProperty("--value",v.value)},[]);function x(v){var h=Math.floor(v/6e4),g=(v%6e4/1e3).toFixed(0);return h+":"+(g<10?"0":"")+g}function w(v){s(v.target.value);const h=v.target;h.style.setProperty("--value",h.value),h.style.setProperty("--min",h.min===""?"0":h.min),h.style.setProperty("--max",h.max===""?"100":h.max),h.style.setProperty("--value",h.value)}function P(){p(!u)}return m.jsxs(Si,{children:[r?m.jsx("img",{className:"play-icon",src:"https://extras.thetimes.co.uk/web/2025/times-knife-crime-audio/assets/pause.png",onClick:S}):m.jsx("img",{className:"play-icon",src:"https://extras.thetimes.co.uk/web/2025/times-knife-crime-audio/assets/play.png",onClick:S}),m.jsx("div",{ref:e,style:{width:"100%"}}),m.jsxs("p",{className:"waveform-time",children:[m.jsx("span",{children:c})," / ",m.jsx("span",{children:o})]}),m.jsxs("div",{className:"volume-container",children:[m.jsx("img",{className:"volume-icon",src:"https://extras.thetimes.co.uk/web/2025/times-knife-crime-audio/assets/volume.png",onClick:P}),m.jsx("input",{ref:f,className:"styled-slider slider-progress",type:"range",id:"volume-slider",min:0,max:1,step:.1,value:n,onChange:w,style:{opacity:u?1:0,pointerEvents:u?"all":"none"}})]})]})});sr.__docgenInfo={description:"",methods:[],displayName:"Equalizer"};const Be=wi`
    @font-face {
        font-family: 'TimesModern';
        src: url('https://times.github.io/graphics-components/assets/fonts/TimesModernRegular.woff') format('woff');
        font-display: swap;
        font-style: normal;
        font-weight: 400;
    }
    @font-face {
        font-family: 'TimesModern';
        src: url('https://times.github.io/graphics-components/assets/fonts/TimesModern-Bold.woff') format('woff');
        font-display: swap;
        font-style: bold;
        font-weight: 700;
    }
    @font-face {
        font-family: 'TimesDigital';
        src: url('https://times.github.io/graphics-components/assets/fonts/TimesDigital-Regular.woff') format('woff');
        font-display: swap;
        font-style: normal;
        font-weight: 400;
    }

   @media (prefers-color-scheme: dark) {
        :root {
            --color-bg: #121212;
            --color-page: #1b1b1b;
            --color-font: #b6b6b6;
        }
        body {
            background-color: var(--color-bg);
            color: var(--color-font) !important;
        }
        h1, h2, h3, h4, h5, h6, p {
            color: var(--color-font) !important;
        }
        .Page {
            background-color: var(--color-page);
        } 
        .MainContainer {
            background-color: var(--color-bg);
        }
        #article-main{
            border-color: rgb(49 49 49) black !important;
        }
        @media (min-width: 520px) {
            .MainContainer {
                border-right: 1px solid rgb(0 0 0 / 50%);
                border-left: 1px solid rgb(0 0 0 / 50%);
        }    
    }
`,or=M.div`
    margin-block-start: 1em;
    margin-block-end: 100px;
`,Ci=M.div`
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
        font-family: 'TimesModern';
    }

    .card-quote {
        font-size: 24px;
        line-height: 30px;
        font-weight: 700;
        text-align: left;
        font-family: 'TimesModern';
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
`;function ki({data:t}){return m.jsxs(m.Fragment,{children:[m.jsx(Be,{}),m.jsxs(Ci,{children:[m.jsxs("div",{className:"card-image--container",children:[m.jsx("img",{src:`https://extras.thetimes.co.uk/web/2025/times-knife-crime-audio/assets/${t.imgSrc}.jpg`,className:"card-image"}),m.jsx("p",{className:"card-name",children:t.name})]}),m.jsx("p",{className:"card-quote",children:t.quote}),m.jsx(sr,{height:100,waveColor:"#ff0000",progressColor:"#940000",url:`https://extras.thetimes.co.uk/web/2025/times-knife-crime-audio/assets/${t.audioSrc}.m4a`,normalize:!0,barWidth:2,barGap:2,barRadius:2,cursorWidth:2},t.id)]})]})}ki.__docgenInfo={description:"",methods:[],displayName:"AudioPlayer"};var Ke={},Ze={},Mt;function Pi(){return Mt||(Mt=1,function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e;function r(n,s,o){return s in n?Object.defineProperty(n,s,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[s]=o,n}var i={digital:(e={blue:{r:37,g:66,b:81},yellow:{r:224,g:171,b:38},lightBlue:{r:224,g:171,b:38}},r(e,"yellow",{r:128,g:177,b:226}),r(e,"orange",{r:243,g:127,b:47}),r(e,"teal",{r:50,g:146,b:166}),r(e,"purple",{r:108,g:60,b:94}),r(e,"sand",{r:218,g:207,b:193}),e),ukPoliticalParties:{con:{r:64,g:147,b:178},lab:{r:236,g:81,b:86},libdem:{r:246,g:197,b:94},ukip:{r:151,g:103,b:174},snp:{r:255,g:246,b:133},green:{r:97,g:169,b:97},pc:{r:144,g:205,b:124},dup:{r:161,g:82,b:82},sf:{r:68,g:150,b:107},sdlp:{r:125,g:161,b:125},uup:{r:63,g:97,b:124},others:{r:160,g:147,b:143}}};t.default=i}(Ze)),Ze}var Je={},_t;function Ei(){return _t||(_t=1,function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={micro:"400px",small:"520px",mobile:"768px",tablet:"1024px",desktop:"1200px","desktop-wide":"1320px"};t.default=e}(Je)),Je}var Nt;function Ri(){return Nt||(Nt=1,function(t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"colors",{enumerable:!0,get:function(){return e.default}}),Object.defineProperty(t,"breakpoints",{enumerable:!0,get:function(){return r.default}});var e=i(Pi()),r=i(Ei());function i(n){return n&&n.__esModule?n:{default:n}}}(Ke)),Ke}Ri();const Ti=M.div`
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

`;function ar({headline:t,standfirst:e}){return m.jsxs(Ti,{children:[t&&m.jsx("h1",{className:"headline",children:t}),e&&m.jsx("p",{className:"standfirst",children:e})]})}ar.__docgenInfo={description:"",methods:[],displayName:"Header"};const ji=M.div`
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
`,Mi=M.img`
    width: 100%;
    height: 80px;

    object-fit: cover;
    cursor: pointer;

    // * CONDITIONAL STYLES
    opacity: ${t=>t.isHovered?"1":"0.5"};

    -webkit-filter: ${t=>t.grayscale?"grayscale(100%)":"none"};
    filter: ${t=>t.grayscale?"grayscale(100%)":"none"};

    transition: opacity 250ms ease-in;
`;function cr({data:t,clickedImage:e,setClickedImage:r,setShowTooltip:i,setTooltipPos:n}){function s(a,c){r(c),i(!0),n([a.clientX,a.target.offsetTop+a.target.offsetHeight-20])}const o=t.map(a=>m.jsx(Mi,{src:`https://nuk-tnl-editorial-prod-staticassets.s3.amazonaws.com/2024/times-image-grid/assets/${a.imgSrc}.jpg`,alt:a.name,grayscale:!1,lazy:!0,onClick:c=>s(c,a),isHovered:e===a},a.id));return m.jsx(ji,{children:o})}cr.__docgenInfo={description:"",methods:[],displayName:"Grid"};const _i=M.div`
    position: absolute;
    left: 0px;
    top: ${t=>t.isImageInLastRow?t.tooltipPos[1]-380:t.tooltipPos[1]}px;

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

    @media (prefers-color-scheme: dark) {
        background-color: #1b1b1b;
    }

    font-family: 'RobotoRegular', sans-serif;
    font-size: 1.6rem;

    opacity: ${t=>t.showTooltip?"1":"0"};
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
`;function lr({clickedImage:t,setClickedImage:e,tooltipPos:r,showTooltip:i,setShowTooltip:n,isImageInLastRow:s}){if(!t)return;function o(){n(!1),e(null)}return m.jsxs(_i,{showTooltip:i,tooltipPos:r,isImageInLastRow:s,children:[m.jsx("img",{className:"tooltip-image",src:`https://nuk-tnl-editorial-prod-staticassets.s3.amazonaws.com/2024/times-image-grid/assets/${t.imgSrc}.jpg`,alt:t.name}),m.jsxs("div",{className:"tooltip-content",children:[m.jsx("h3",{children:t.name}),m.jsx("p",{children:t.copy})]}),m.jsx("button",{className:"tooltip-close",onClick:o,children:m.jsx("img",{src:"https://nuk-tnl-editorial-prod-staticassets.s3.amazonaws.com/2023/st-grid-jeremy-clarkson/assets/x.svg"})})]})}lr.__docgenInfo={description:"",methods:[],displayName:"Tooltip"};function Ni({data:t}){const[e,r]=T.useState(null),[i,n]=T.useState(!1),[s,o]=T.useState([0,0]);let c=t.length-t.indexOf(e)<=7;return m.jsxs(m.Fragment,{children:[m.jsx(Be,{}),m.jsxs(or,{children:[m.jsx(ar,{headline:"Lorem ipsum dolor sit amet",standfirst:"Nulla vel augue ut erat efficitur scelerisque id vel tellus. Ut iaculis nulla sit amet lorem rutrum, ac luctus sem imperdiet"}),m.jsx(cr,{data:t,clickedImage:e,setClickedImage:r,setShowTooltip:n,setTooltipPos:o}),m.jsx(lr,{clickedImage:e,setClickedImage:r,showTooltip:i,setShowTooltip:n,tooltipPos:s,isImageInLastRow:c})]})]})}Ni.__docgenInfo={description:"",methods:[],displayName:"ImageGrid"};M.div`
    position: relative;
    width: 100%;
`;const Ii=M.div`
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
`,Ai=M.div`
    position: relative;
    width: 100%;
    height: 100%;
`,$i=M.div`
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
`,Di=M.section`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`,Oi=M.p`
    line-height: 1.4;
    font-size: ${({size:t})=>t==="lg"?"20px":"16px"} !important;
    padding: 1rem;
    max-width: 600px;
    background: white;
    @media (prefers-color-scheme: dark) {
        background-color: #1b1b1b;
    }
    z-index: 1;
    font-size: 18px;
    line-height: 30px;
`;function Li({data:t}){const{slides:e=[],imgFit:r="cover",containerWidth:i="edge-to-edge",borderRadius:n="0",fixedImgHeight:s,fontSize:o="md",videoLoop:a=!0,videoAutoplay:c=!0,videoControls:l=!1,videoMute:u=!0}=t,[p,d]=T.useState(0),[f,y]=T.useState([]),C=T.useRef([]),S=T.useRef([]);T.useEffect(()=>{const h=new IntersectionObserver(g=>{g.forEach(b=>{if(b.isIntersecting){const I=parseInt(b.target.dataset.index,10);d(I)}})},{threshold:.6});return C.current.forEach(g=>g&&h.observe(g)),()=>h.disconnect()},[e.length]),T.useEffect(()=>{const h=e.map((g,b)=>b===p);y(h)},[p,e]);const x=h=>f[h]?2:1,w=h=>{var g;if(h.includes("youtube.com")){const b=(g=h.split("v=")[1])==null?void 0:g.split("&")[0];return`https://www.youtube.com/embed/${b}?autoplay=${c?1:0}&loop=${a?1:0}&controls=${l?1:0}&mute=${u?1:0}&playlist=${b}`}else if(h.includes("vimeo.com"))return`https://player.vimeo.com/video/${h.split("/").pop()}?autoplay=${c?1:0}&loop=${a?1:0}&controls=${l?1:0}&muted=${u?1:0}`;return h},P=h=>h.includes("youtube.com")||h.includes("youtu.be"),v=h=>h.endsWith(".mp4");return m.jsxs(m.Fragment,{children:[m.jsx(Be,{}),m.jsxs(or,{children:[m.jsx(Ii,{style:{height:s||"500px"},className:i==="edge-to-edge"?"edge-to-edge":i==="bleed"?"bleed":"",children:m.jsx(Ai,{children:e.map((h,g)=>m.jsx($i,{ref:b=>S.current[g]=b,className:f[g]?"overlap":"",style:{zIndex:x(g)},children:P(h.media)?m.jsx("iframe",{title:"YouTube video",src:w(h.media),frameBorder:"0",allow:"autoplay; encrypted-media",allowFullScreen:!0,style:{objectFit:r,width:"100%",height:s||(i==="edge-to-edge"?"100vh":"100%"),borderRadius:n}}):v(h.media)?m.jsx("video",{autoPlay:c,loop:a,controls:l,muted:u,style:{objectFit:r,width:"100%",height:s||"100%",borderRadius:n},children:m.jsx("source",{src:h.media,type:"video/mp4"})}):m.jsx("img",{src:h.media,alt:h.altText||"Slide image",style:{objectFit:r,width:"100%",height:s||"100%",borderRadius:n}})},g))})}),m.jsx("div",{className:"scroller-sections",children:e.map((h,g)=>m.jsx(Di,{className:"trigger","data-index":g,ref:b=>C.current[g]=b,children:h.text&&m.jsx(Oi,{size:o,dangerouslySetInnerHTML:{__html:h.text}})},g))})]})]})}Li.__docgenInfo={description:"",methods:[],displayName:"ScrollStory"};const zi=M.div`
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
`,ur=({data:t={},children:e})=>{const{hed:r="",dek:i="",chartTitle:n="",note:s="",source:o=""}=t;return m.jsxs(zi,{children:[r&&m.jsx("h3",{children:r}),i&&m.jsx("h4",{children:i}),n&&m.jsx("p",{className:"chart-title",children:n}),e,(s||o)&&m.jsxs("div",{className:"note-container",children:[s&&m.jsx("p",{className:"note",children:s}),o&&m.jsx("p",{className:"note",children:o})]})]})};ur.__docgenInfo={description:"",methods:[],displayName:"Wrapper",props:{data:{defaultValue:{value:"{}",computed:!1},required:!1}}};const Wi=M.div`
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
`,Bi=M.div`
    margin-top: 10px;
    text-align: left;
    p {
        font-size: 14px;
        color: rgb(105, 105, 105);
        line-height: 19px;
        margin-bottom: 4px;
        text-align: left;
    }
`,Fi=M.div`
    position: absolute;
    top: 0;
    background-color: black;
    color: #fff;
    padding: 10px;
    border-radius: ${({$imgBorderRadius:t})=>`${t} 0 0 0`};

    p {
        color: #fff;
        font-size: 12px;
        margin: 0;
    }
`,Gi=M.div`
    position: relative;

    iframe,
    video,
    img {
        width: 100%;
        height: auto;
        border: none;
        ${({$containerWidth:t,$fixedImgHeight:e,$imgBorderRadius:r})=>t==="edge-to-edge"?de`
                    height: 100vh;
                    object-fit: cover;
                    border-radius: ${r};
                `:t==="bleed"||t==="inline"&&e?de`
                    height: ${e};
                    object-fit: cover;
                    border-radius: ${r};
                `:de`
                border-radius: ${r};
            `}
    }
`,Hi=(t,e,r,i,n)=>{var s;if(t.includes("youtube.com")){const o=(s=t.split("v=")[1])==null?void 0:s.split("&")[0];return`https://www.youtube.com/embed/${o}?autoplay=${e?1:0}&loop=${r?1:0}&controls=${i?1:0}&mute=${n?1:0}&playlist=${o}`}else if(t.includes("vimeo.com"))return`https://player.vimeo.com/video/${t.split("/").pop()}?autoplay=${e?1:0}&loop=${r?1:0}&controls=${i?1:0}&muted=${n?1:0}`;return t},qi=({data:t})=>{if(!t)return null;const{fixedImgHeight:e=null,containerWidth:r="inline",imgBorderRadius:i=null,media:n="",videoLoop:s="true",videoAutoplay:o="true",videoControls:a="false",videoMute:c="true",text:l,caption:u,altText:p}=t,S=Hi(n,o===!0,s===!0,a===!0,c===!0),x=m.jsxs(Gi,{$containerWidth:r,$fixedImgHeight:e,$imgBorderRadius:i,children:[n.includes("youtube.com")||n.includes("vimeo.com")?m.jsx("iframe",{src:S,title:"Embedded media",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}):n.endsWith(".mp4")?m.jsxs("video",{autoPlay:o,loop:s,controls:a,muted:c,children:[m.jsx("source",{src:n,type:"video/mp4"}),m.jsx("track",{kind:"captions",src:n.replace(".mp4",".vtt"),label:"English"}),"Your browser does not support the video tag."]}):m.jsx("img",{src:n,alt:p}),l&&m.jsx(Bi,{$imgBorderRadius:i,dangerouslySetInnerHTML:{__html:l}}),u&&m.jsx(Fi,{$imgBorderRadius:i,dangerouslySetInnerHTML:{__html:u}})]});return m.jsxs(m.Fragment,{children:[m.jsx(Be,{}),m.jsx(Wi,{className:r,children:m.jsx(ur,{data:t,children:x})})]})};qi.__docgenInfo={description:"",methods:[],displayName:"MediaBlock"};export{ki as A,Ni as I,qi as M,Li as S,M as d};
