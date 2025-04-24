import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{r as y}from"./index-U0ga5oGA.js";import{d as S,G as L,C as ee,a as X}from"./index-CUPdwlVt.js";function E(n,e,t,i){return new(t||(t=Promise))(function(s,r){function o(c){try{h(i.next(c))}catch(d){r(d)}}function a(c){try{h(i.throw(c))}catch(d){r(d)}}function h(c){var d;c.done?s(c.value):(d=c.value,d instanceof t?d:new t(function(m){m(d)})).then(o,a)}h((i=i.apply(n,e||[])).next())})}class _{constructor(){this.listeners={}}on(e,t,i){if(this.listeners[e]||(this.listeners[e]=new Set),this.listeners[e].add(t),i==null?void 0:i.once){const s=()=>{this.un(e,s),this.un(e,t)};return this.on(e,s),s}return()=>this.un(e,t)}un(e,t){var i;(i=this.listeners[e])===null||i===void 0||i.delete(t)}once(e,t){return this.on(e,t,{once:!0})}unAll(){this.listeners={}}emit(e,...t){this.listeners[e]&&this.listeners[e].forEach(i=>i(...t))}}const W={decode:function(n,e){return E(this,void 0,void 0,function*(){const t=new AudioContext({sampleRate:e});return t.decodeAudioData(n).finally(()=>t.close())})},createBuffer:function(n,e){return typeof n[0]=="number"&&(n=[n]),function(t){const i=t[0];if(i.some(s=>s>1||s<-1)){const s=i.length;let r=0;for(let o=0;o<s;o++){const a=Math.abs(i[o]);a>r&&(r=a)}for(const o of t)for(let a=0;a<s;a++)o[a]/=r}}(n),{duration:e,length:n[0].length,sampleRate:n[0].length/e,numberOfChannels:n.length,getChannelData:t=>n==null?void 0:n[t],copyFromChannel:AudioBuffer.prototype.copyFromChannel,copyToChannel:AudioBuffer.prototype.copyToChannel}}};function U(n,e){const t=e.xmlns?document.createElementNS(e.xmlns,n):document.createElement(n);for(const[i,s]of Object.entries(e))if(i==="children")for(const[r,o]of Object.entries(e))typeof o=="string"?t.appendChild(document.createTextNode(o)):t.appendChild(U(r,o));else i==="style"?Object.assign(t.style,s):i==="textContent"?t.textContent=s:t.setAttribute(i,s.toString());return t}function H(n,e,t){const i=U(n,e||{});return t==null||t.appendChild(i),i}var te=Object.freeze({__proto__:null,createElement:H,default:H});const ie={fetchBlob:function(n,e,t){return E(this,void 0,void 0,function*(){const i=yield fetch(n,t);if(i.status>=400)throw new Error(`Failed to fetch ${n}: ${i.status} (${i.statusText})`);return function(s,r){E(this,void 0,void 0,function*(){if(!s.body||!s.headers)return;const o=s.body.getReader(),a=Number(s.headers.get("Content-Length"))||0;let h=0;const c=m=>E(this,void 0,void 0,function*(){h+=(m==null?void 0:m.length)||0;const p=Math.round(h/a*100);r(p)}),d=()=>E(this,void 0,void 0,function*(){let m;try{m=yield o.read()}catch{return}m.done||(c(m.value),yield d())});d()})}(i.clone(),e),i.blob()})}};class se extends _{constructor(e){super(),this.isExternalMedia=!1,e.media?(this.media=e.media,this.isExternalMedia=!0):this.media=document.createElement("audio"),e.mediaControls&&(this.media.controls=!0),e.autoplay&&(this.media.autoplay=!0),e.playbackRate!=null&&this.onMediaEvent("canplay",()=>{e.playbackRate!=null&&(this.media.playbackRate=e.playbackRate)},{once:!0})}onMediaEvent(e,t,i){return this.media.addEventListener(e,t,i),()=>this.media.removeEventListener(e,t,i)}getSrc(){return this.media.currentSrc||this.media.src||""}revokeSrc(){const e=this.getSrc();e.startsWith("blob:")&&URL.revokeObjectURL(e)}canPlayType(e){return this.media.canPlayType(e)!==""}setSrc(e,t){const i=this.getSrc();if(e&&i===e)return;this.revokeSrc();const s=t instanceof Blob&&(this.canPlayType(t.type)||!e)?URL.createObjectURL(t):e;i&&(this.media.src="");try{this.media.src=s}catch{this.media.src=e}}destroy(){this.isExternalMedia||(this.media.pause(),this.media.remove(),this.revokeSrc(),this.media.src="",this.media.load())}setMediaElement(e){this.media=e}play(){return E(this,void 0,void 0,function*(){return this.media.play()})}pause(){this.media.pause()}isPlaying(){return!this.media.paused&&!this.media.ended}setTime(e){this.media.currentTime=Math.max(0,Math.min(e,this.getDuration()))}getDuration(){return this.media.duration}getCurrentTime(){return this.media.currentTime}getVolume(){return this.media.volume}setVolume(e){this.media.volume=e}getMuted(){return this.media.muted}setMuted(e){this.media.muted=e}getPlaybackRate(){return this.media.playbackRate}isSeeking(){return this.media.seeking}setPlaybackRate(e,t){t!=null&&(this.media.preservesPitch=t),this.media.playbackRate=e}getMediaElement(){return this.media}setSinkId(e){return this.media.setSinkId(e)}}class D extends _{constructor(e,t){super(),this.timeouts=[],this.isScrollable=!1,this.audioData=null,this.resizeObserver=null,this.lastContainerWidth=0,this.isDragging=!1,this.subscriptions=[],this.unsubscribeOnScroll=[],this.subscriptions=[],this.options=e;const i=this.parentFromOptionsContainer(e.container);this.parent=i;const[s,r]=this.initHtml();i.appendChild(s),this.container=s,this.scrollContainer=r.querySelector(".scroll"),this.wrapper=r.querySelector(".wrapper"),this.canvasWrapper=r.querySelector(".canvases"),this.progressWrapper=r.querySelector(".progress"),this.cursor=r.querySelector(".cursor"),t&&r.appendChild(t),this.initEvents()}parentFromOptionsContainer(e){let t;if(typeof e=="string"?t=document.querySelector(e):e instanceof HTMLElement&&(t=e),!t)throw new Error("Container not found");return t}initEvents(){const e=t=>{const i=this.wrapper.getBoundingClientRect(),s=t.clientX-i.left,r=t.clientY-i.top;return[s/i.width,r/i.height]};if(this.wrapper.addEventListener("click",t=>{const[i,s]=e(t);this.emit("click",i,s)}),this.wrapper.addEventListener("dblclick",t=>{const[i,s]=e(t);this.emit("dblclick",i,s)}),this.options.dragToSeek!==!0&&typeof this.options.dragToSeek!="object"||this.initDrag(),this.scrollContainer.addEventListener("scroll",()=>{const{scrollLeft:t,scrollWidth:i,clientWidth:s}=this.scrollContainer,r=t/i,o=(t+s)/i;this.emit("scroll",r,o,t,t+s)}),typeof ResizeObserver=="function"){const t=this.createDelay(100);this.resizeObserver=new ResizeObserver(()=>{t().then(()=>this.onContainerResize()).catch(()=>{})}),this.resizeObserver.observe(this.scrollContainer)}}onContainerResize(){const e=this.parent.clientWidth;e===this.lastContainerWidth&&this.options.height!=="auto"||(this.lastContainerWidth=e,this.reRender())}initDrag(){this.subscriptions.push(function(e,t,i,s,r=3,o=0,a=100){if(!e)return()=>{};const h=matchMedia("(pointer: coarse)").matches;let c=()=>{};const d=m=>{if(m.button!==o)return;m.preventDefault(),m.stopPropagation();let p=m.clientX,f=m.clientY,b=!1;const P=Date.now(),x=u=>{if(u.preventDefault(),u.stopPropagation(),h&&Date.now()-P<a)return;const g=u.clientX,k=u.clientY,j=g-p,R=k-f;if(b||Math.abs(j)>r||Math.abs(R)>r){const T=e.getBoundingClientRect(),{left:z,top:B}=T;b||(i==null||i(p-z,f-B),b=!0),t(j,R,g-z,k-B),p=g,f=k}},w=u=>{if(b){const g=u.clientX,k=u.clientY,j=e.getBoundingClientRect(),{left:R,top:T}=j;s==null||s(g-R,k-T)}c()},C=u=>{u.relatedTarget&&u.relatedTarget!==document.documentElement||w(u)},M=u=>{b&&(u.stopPropagation(),u.preventDefault())},v=u=>{b&&u.preventDefault()};document.addEventListener("pointermove",x),document.addEventListener("pointerup",w),document.addEventListener("pointerout",C),document.addEventListener("pointercancel",C),document.addEventListener("touchmove",v,{passive:!1}),document.addEventListener("click",M,{capture:!0}),c=()=>{document.removeEventListener("pointermove",x),document.removeEventListener("pointerup",w),document.removeEventListener("pointerout",C),document.removeEventListener("pointercancel",C),document.removeEventListener("touchmove",v),setTimeout(()=>{document.removeEventListener("click",M,{capture:!0})},10)}};return e.addEventListener("pointerdown",d),()=>{c(),e.removeEventListener("pointerdown",d)}}(this.wrapper,(e,t,i)=>{this.emit("drag",Math.max(0,Math.min(1,i/this.wrapper.getBoundingClientRect().width)))},e=>{this.isDragging=!0,this.emit("dragstart",Math.max(0,Math.min(1,e/this.wrapper.getBoundingClientRect().width)))},e=>{this.isDragging=!1,this.emit("dragend",Math.max(0,Math.min(1,e/this.wrapper.getBoundingClientRect().width)))}))}getHeight(e,t){var i;const s=((i=this.audioData)===null||i===void 0?void 0:i.numberOfChannels)||1;if(e==null)return 128;if(!isNaN(Number(e)))return Number(e);if(e==="auto"){const r=this.parent.clientHeight||128;return t!=null&&t.every(o=>!o.overlay)?r/s:r}return 128}initHtml(){const e=document.createElement("div"),t=e.attachShadow({mode:"open"}),i=this.options.cspNonce&&typeof this.options.cspNonce=="string"?this.options.cspNonce.replace(/"/g,""):"";return t.innerHTML=`
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
    `,[e,t]}setOptions(e){if(this.options.container!==e.container){const t=this.parentFromOptionsContainer(e.container);t.appendChild(this.container),this.parent=t}e.dragToSeek!==!0&&typeof this.options.dragToSeek!="object"||this.initDrag(),this.options=e,this.reRender()}getWrapper(){return this.wrapper}getWidth(){return this.scrollContainer.clientWidth}getScroll(){return this.scrollContainer.scrollLeft}setScroll(e){this.scrollContainer.scrollLeft=e}setScrollPercentage(e){const{scrollWidth:t}=this.scrollContainer,i=t*e;this.setScroll(i)}destroy(){var e,t;this.subscriptions.forEach(i=>i()),this.container.remove(),(e=this.resizeObserver)===null||e===void 0||e.disconnect(),(t=this.unsubscribeOnScroll)===null||t===void 0||t.forEach(i=>i()),this.unsubscribeOnScroll=[]}createDelay(e=10){let t,i;const s=()=>{t&&clearTimeout(t),i&&i()};return this.timeouts.push(s),()=>new Promise((r,o)=>{s(),i=o,t=setTimeout(()=>{t=void 0,i=void 0,r()},e)})}convertColorValues(e){if(!Array.isArray(e))return e||"";if(e.length<2)return e[0]||"";const t=document.createElement("canvas"),i=t.getContext("2d"),s=t.height*(window.devicePixelRatio||1),r=i.createLinearGradient(0,0,0,s),o=1/(e.length-1);return e.forEach((a,h)=>{const c=h*o;r.addColorStop(c,a)}),r}getPixelRatio(){return Math.max(1,window.devicePixelRatio||1)}renderBarWaveform(e,t,i,s){const r=e[0],o=e[1]||e[0],a=r.length,{width:h,height:c}=i.canvas,d=c/2,m=this.getPixelRatio(),p=t.barWidth?t.barWidth*m:1,f=t.barGap?t.barGap*m:t.barWidth?p/2:0,b=t.barRadius||0,P=h/(p+f)/a,x=b&&"roundRect"in i?"roundRect":"rect";i.beginPath();let w=0,C=0,M=0;for(let v=0;v<=a;v++){const u=Math.round(v*P);if(u>w){const j=Math.round(C*d*s),R=j+Math.round(M*d*s)||1;let T=d-j;t.barAlign==="top"?T=0:t.barAlign==="bottom"&&(T=c-R),i[x](w*(p+f),T,p,R,b),w=u,C=0,M=0}const g=Math.abs(r[v]||0),k=Math.abs(o[v]||0);g>C&&(C=g),k>M&&(M=k)}i.fill(),i.closePath()}renderLineWaveform(e,t,i,s){const r=o=>{const a=e[o]||e[0],h=a.length,{height:c}=i.canvas,d=c/2,m=i.canvas.width/h;i.moveTo(0,d);let p=0,f=0;for(let b=0;b<=h;b++){const P=Math.round(b*m);if(P>p){const w=d+(Math.round(f*d*s)||1)*(o===0?-1:1);i.lineTo(p,w),p=P,f=0}const x=Math.abs(a[b]||0);x>f&&(f=x)}i.lineTo(p,d)};i.beginPath(),r(0),r(1),i.fill(),i.closePath()}renderWaveform(e,t,i){if(i.fillStyle=this.convertColorValues(t.waveColor),t.renderFunction)return void t.renderFunction(e,i);let s=t.barHeight||1;if(t.normalize){const r=Array.from(e[0]).reduce((o,a)=>Math.max(o,Math.abs(a)),0);s=r?1/r:1}t.barWidth||t.barGap||t.barAlign?this.renderBarWaveform(e,t,i,s):this.renderLineWaveform(e,t,i,s)}renderSingleCanvas(e,t,i,s,r,o,a){const h=this.getPixelRatio(),c=document.createElement("canvas");c.width=Math.round(i*h),c.height=Math.round(s*h),c.style.width=`${i}px`,c.style.height=`${s}px`,c.style.left=`${Math.round(r)}px`,o.appendChild(c);const d=c.getContext("2d");if(this.renderWaveform(e,t,d),c.width>0&&c.height>0){const m=c.cloneNode(),p=m.getContext("2d");p.drawImage(c,0,0),p.globalCompositeOperation="source-in",p.fillStyle=this.convertColorValues(t.progressColor),p.fillRect(0,0,c.width,c.height),a.appendChild(m)}}renderMultiCanvas(e,t,i,s,r,o){const a=this.getPixelRatio(),{clientWidth:h}=this.scrollContainer,c=i/a;let d=Math.min(D.MAX_CANVAS_WIDTH,h,c),m={};if(d===0)return;if(t.barWidth||t.barGap){const x=t.barWidth||.5,w=x+(t.barGap||x/2);d%w!=0&&(d=Math.floor(d/w)*w)}const p=x=>{if(x<0||x>=f||m[x])return;m[x]=!0;const w=x*d,C=Math.min(c-w,d);if(C<=0)return;const M=e.map(v=>{const u=Math.floor(w/c*v.length),g=Math.floor((w+C)/c*v.length);return v.slice(u,g)});this.renderSingleCanvas(M,t,C,s,w,r,o)},f=Math.ceil(c/d);if(!this.isScrollable){for(let x=0;x<f;x++)p(x);return}const b=this.scrollContainer.scrollLeft/c,P=Math.floor(b*f);if(p(P-1),p(P),p(P+1),f>1){const x=this.on("scroll",()=>{const{scrollLeft:w}=this.scrollContainer,C=Math.floor(w/c*f);Object.keys(m).length>D.MAX_NODES&&(r.innerHTML="",o.innerHTML="",m={}),p(C-1),p(C),p(C+1)});this.unsubscribeOnScroll.push(x)}}renderChannel(e,t,i,s){var{overlay:r}=t,o=function(d,m){var p={};for(var f in d)Object.prototype.hasOwnProperty.call(d,f)&&m.indexOf(f)<0&&(p[f]=d[f]);if(d!=null&&typeof Object.getOwnPropertySymbols=="function"){var b=0;for(f=Object.getOwnPropertySymbols(d);b<f.length;b++)m.indexOf(f[b])<0&&Object.prototype.propertyIsEnumerable.call(d,f[b])&&(p[f[b]]=d[f[b]])}return p}(t,["overlay"]);const a=document.createElement("div"),h=this.getHeight(o.height,o.splitChannels);a.style.height=`${h}px`,r&&s>0&&(a.style.marginTop=`-${h}px`),this.canvasWrapper.style.minHeight=`${h}px`,this.canvasWrapper.appendChild(a);const c=a.cloneNode();this.progressWrapper.appendChild(c),this.renderMultiCanvas(e,o,i,h,a,c)}render(e){return E(this,void 0,void 0,function*(){var t;this.timeouts.forEach(h=>h()),this.timeouts=[],this.canvasWrapper.innerHTML="",this.progressWrapper.innerHTML="",this.options.width!=null&&(this.scrollContainer.style.width=typeof this.options.width=="number"?`${this.options.width}px`:this.options.width);const i=this.getPixelRatio(),s=this.scrollContainer.clientWidth,r=Math.ceil(e.duration*(this.options.minPxPerSec||0));this.isScrollable=r>s;const o=this.options.fillParent&&!this.isScrollable,a=(o?s:r)*i;if(this.wrapper.style.width=o?"100%":`${r}px`,this.scrollContainer.style.overflowX=this.isScrollable?"auto":"hidden",this.scrollContainer.classList.toggle("noScrollbar",!!this.options.hideScrollbar),this.cursor.style.backgroundColor=`${this.options.cursorColor||this.options.progressColor}`,this.cursor.style.width=`${this.options.cursorWidth}px`,this.audioData=e,this.emit("render"),this.options.splitChannels)for(let h=0;h<e.numberOfChannels;h++){const c=Object.assign(Object.assign({},this.options),(t=this.options.splitChannels)===null||t===void 0?void 0:t[h]);this.renderChannel([e.getChannelData(h)],c,a,h)}else{const h=[e.getChannelData(0)];e.numberOfChannels>1&&h.push(e.getChannelData(1)),this.renderChannel(h,this.options,a,0)}Promise.resolve().then(()=>this.emit("rendered"))})}reRender(){if(this.unsubscribeOnScroll.forEach(i=>i()),this.unsubscribeOnScroll=[],!this.audioData)return;const{scrollWidth:e}=this.scrollContainer,{right:t}=this.progressWrapper.getBoundingClientRect();if(this.render(this.audioData),this.isScrollable&&e!==this.scrollContainer.scrollWidth){const{right:i}=this.progressWrapper.getBoundingClientRect();let s=i-t;s*=2,s=s<0?Math.floor(s):Math.ceil(s),s/=2,this.scrollContainer.scrollLeft+=s}}zoom(e){this.options.minPxPerSec=e,this.reRender()}scrollIntoView(e,t=!1){const{scrollLeft:i,scrollWidth:s,clientWidth:r}=this.scrollContainer,o=e*s,a=i,h=i+r,c=r/2;if(this.isDragging)o+30>h?this.scrollContainer.scrollLeft+=30:o-30<a&&(this.scrollContainer.scrollLeft-=30);else{(o<a||o>h)&&(this.scrollContainer.scrollLeft=o-(this.options.autoCenter?c:0));const d=o-i-c;t&&this.options.autoCenter&&d>0&&(this.scrollContainer.scrollLeft+=Math.min(d,10))}{const d=this.scrollContainer.scrollLeft,m=d/s,p=(d+r)/s;this.emit("scroll",m,p,d,d+r)}}renderProgress(e,t){if(isNaN(e))return;const i=100*e;this.canvasWrapper.style.clipPath=`polygon(${i}% 0, 100% 0, 100% 100%, ${i}% 100%)`,this.progressWrapper.style.width=`${i}%`,this.cursor.style.left=`${i}%`,this.cursor.style.transform=`translateX(-${Math.round(i)===100?this.options.cursorWidth:0}px)`,this.isScrollable&&this.options.autoScroll&&this.scrollIntoView(e,t)}exportImage(e,t,i){return E(this,void 0,void 0,function*(){const s=this.canvasWrapper.querySelectorAll("canvas");if(!s.length)throw new Error("No waveform data");if(i==="dataURL"){const r=Array.from(s).map(o=>o.toDataURL(e,t));return Promise.resolve(r)}return Promise.all(Array.from(s).map(r=>new Promise((o,a)=>{r.toBlob(h=>{h?o(h):a(new Error("Could not export image"))},e,t)})))})}}D.MAX_CANVAS_WIDTH=8e3,D.MAX_NODES=10;class re extends _{constructor(){super(...arguments),this.unsubscribe=()=>{}}start(){this.unsubscribe=this.on("tick",()=>{requestAnimationFrame(()=>{this.emit("tick")})}),this.emit("tick")}stop(){this.unsubscribe()}destroy(){this.unsubscribe()}}class O extends _{constructor(e=new AudioContext){super(),this.bufferNode=null,this.playStartTime=0,this.playedDuration=0,this._muted=!1,this._playbackRate=1,this._duration=void 0,this.buffer=null,this.currentSrc="",this.paused=!0,this.crossOrigin=null,this.seeking=!1,this.autoplay=!1,this.addEventListener=this.on,this.removeEventListener=this.un,this.audioContext=e,this.gainNode=this.audioContext.createGain(),this.gainNode.connect(this.audioContext.destination)}load(){return E(this,void 0,void 0,function*(){})}get src(){return this.currentSrc}set src(e){if(this.currentSrc=e,this._duration=void 0,!e)return this.buffer=null,void this.emit("emptied");fetch(e).then(t=>{if(t.status>=400)throw new Error(`Failed to fetch ${e}: ${t.status} (${t.statusText})`);return t.arrayBuffer()}).then(t=>this.currentSrc!==e?null:this.audioContext.decodeAudioData(t)).then(t=>{this.currentSrc===e&&(this.buffer=t,this.emit("loadedmetadata"),this.emit("canplay"),this.autoplay&&this.play())})}_play(){var e;if(!this.paused)return;this.paused=!1,(e=this.bufferNode)===null||e===void 0||e.disconnect(),this.bufferNode=this.audioContext.createBufferSource(),this.buffer&&(this.bufferNode.buffer=this.buffer),this.bufferNode.playbackRate.value=this._playbackRate,this.bufferNode.connect(this.gainNode);let t=this.playedDuration*this._playbackRate;(t>=this.duration||t<0)&&(t=0,this.playedDuration=0),this.bufferNode.start(this.audioContext.currentTime,t),this.playStartTime=this.audioContext.currentTime,this.bufferNode.onended=()=>{this.currentTime>=this.duration&&(this.pause(),this.emit("ended"))}}_pause(){var e;this.paused=!0,(e=this.bufferNode)===null||e===void 0||e.stop(),this.playedDuration+=this.audioContext.currentTime-this.playStartTime}play(){return E(this,void 0,void 0,function*(){this.paused&&(this._play(),this.emit("play"))})}pause(){this.paused||(this._pause(),this.emit("pause"))}stopAt(e){const t=e-this.currentTime,i=this.bufferNode;i==null||i.stop(this.audioContext.currentTime+t),i==null||i.addEventListener("ended",()=>{i===this.bufferNode&&(this.bufferNode=null,this.pause())},{once:!0})}setSinkId(e){return E(this,void 0,void 0,function*(){return this.audioContext.setSinkId(e)})}get playbackRate(){return this._playbackRate}set playbackRate(e){this._playbackRate=e,this.bufferNode&&(this.bufferNode.playbackRate.value=e)}get currentTime(){return(this.paused?this.playedDuration:this.playedDuration+(this.audioContext.currentTime-this.playStartTime))*this._playbackRate}set currentTime(e){const t=!this.paused;t&&this._pause(),this.playedDuration=e/this._playbackRate,t&&this._play(),this.emit("seeking"),this.emit("timeupdate")}get duration(){var e,t;return(e=this._duration)!==null&&e!==void 0?e:((t=this.buffer)===null||t===void 0?void 0:t.duration)||0}set duration(e){this._duration=e}get volume(){return this.gainNode.gain.value}set volume(e){this.gainNode.gain.value=e,this.emit("volumechange")}get muted(){return this._muted}set muted(e){this._muted!==e&&(this._muted=e,this._muted?this.gainNode.disconnect():this.gainNode.connect(this.audioContext.destination))}canPlayType(e){return/^(audio|video)\//.test(e)}getGainNode(){return this.gainNode}getChannelData(){const e=[];if(!this.buffer)return e;const t=this.buffer.numberOfChannels;for(let i=0;i<t;i++)e.push(this.buffer.getChannelData(i));return e}}const ne={waveColor:"#999",progressColor:"#555",cursorWidth:1,minPxPerSec:0,fillParent:!0,interact:!0,dragToSeek:!1,autoScroll:!0,autoCenter:!0,sampleRate:8e3};class N extends se{static create(e){return new N(e)}constructor(e){const t=e.media||(e.backend==="WebAudio"?new O:void 0);super({media:t,mediaControls:e.mediaControls,autoplay:e.autoplay,playbackRate:e.audioRate}),this.plugins=[],this.decodedData=null,this.stopAtPosition=null,this.subscriptions=[],this.mediaSubscriptions=[],this.abortController=null,this.options=Object.assign({},ne,e),this.timer=new re;const i=t?void 0:this.getMediaElement();this.renderer=new D(this.options,i),this.initPlayerEvents(),this.initRendererEvents(),this.initTimerEvents(),this.initPlugins();const s=this.options.url||this.getSrc()||"";Promise.resolve().then(()=>{this.emit("init");const{peaks:r,duration:o}=this.options;(s||r&&o)&&this.load(s,r,o).catch(()=>null)})}updateProgress(e=this.getCurrentTime()){return this.renderer.renderProgress(e/this.getDuration(),this.isPlaying()),e}initTimerEvents(){this.subscriptions.push(this.timer.on("tick",()=>{if(!this.isSeeking()){const e=this.updateProgress();this.emit("timeupdate",e),this.emit("audioprocess",e),this.stopAtPosition!=null&&this.isPlaying()&&e>=this.stopAtPosition&&this.pause()}}))}initPlayerEvents(){this.isPlaying()&&(this.emit("play"),this.timer.start()),this.mediaSubscriptions.push(this.onMediaEvent("timeupdate",()=>{const e=this.updateProgress();this.emit("timeupdate",e)}),this.onMediaEvent("play",()=>{this.emit("play"),this.timer.start()}),this.onMediaEvent("pause",()=>{this.emit("pause"),this.timer.stop(),this.stopAtPosition=null}),this.onMediaEvent("emptied",()=>{this.timer.stop(),this.stopAtPosition=null}),this.onMediaEvent("ended",()=>{this.emit("timeupdate",this.getDuration()),this.emit("finish"),this.stopAtPosition=null}),this.onMediaEvent("seeking",()=>{this.emit("seeking",this.getCurrentTime())}),this.onMediaEvent("error",()=>{var e;this.emit("error",(e=this.getMediaElement().error)!==null&&e!==void 0?e:new Error("Media error")),this.stopAtPosition=null}))}initRendererEvents(){this.subscriptions.push(this.renderer.on("click",(e,t)=>{this.options.interact&&(this.seekTo(e),this.emit("interaction",e*this.getDuration()),this.emit("click",e,t))}),this.renderer.on("dblclick",(e,t)=>{this.emit("dblclick",e,t)}),this.renderer.on("scroll",(e,t,i,s)=>{const r=this.getDuration();this.emit("scroll",e*r,t*r,i,s)}),this.renderer.on("render",()=>{this.emit("redraw")}),this.renderer.on("rendered",()=>{this.emit("redrawcomplete")}),this.renderer.on("dragstart",e=>{this.emit("dragstart",e)}),this.renderer.on("dragend",e=>{this.emit("dragend",e)}));{let e;this.subscriptions.push(this.renderer.on("drag",t=>{if(!this.options.interact)return;let i;this.renderer.renderProgress(t),clearTimeout(e),this.isPlaying()?i=0:this.options.dragToSeek===!0?i=200:typeof this.options.dragToSeek=="object"&&this.options.dragToSeek!==void 0&&(i=this.options.dragToSeek.debounceTime),e=setTimeout(()=>{this.seekTo(t)},i),this.emit("interaction",t*this.getDuration()),this.emit("drag",t)}))}}initPlugins(){var e;!((e=this.options.plugins)===null||e===void 0)&&e.length&&this.options.plugins.forEach(t=>{this.registerPlugin(t)})}unsubscribePlayerEvents(){this.mediaSubscriptions.forEach(e=>e()),this.mediaSubscriptions=[]}setOptions(e){this.options=Object.assign({},this.options,e),e.duration&&!e.peaks&&(this.decodedData=W.createBuffer(this.exportPeaks(),e.duration)),e.peaks&&e.duration&&(this.decodedData=W.createBuffer(e.peaks,e.duration)),this.renderer.setOptions(this.options),e.audioRate&&this.setPlaybackRate(e.audioRate),e.mediaControls!=null&&(this.getMediaElement().controls=e.mediaControls)}registerPlugin(e){return e._init(this),this.plugins.push(e),this.subscriptions.push(e.once("destroy",()=>{this.plugins=this.plugins.filter(t=>t!==e)})),e}getWrapper(){return this.renderer.getWrapper()}getWidth(){return this.renderer.getWidth()}getScroll(){return this.renderer.getScroll()}setScroll(e){return this.renderer.setScroll(e)}setScrollTime(e){const t=e/this.getDuration();this.renderer.setScrollPercentage(t)}getActivePlugins(){return this.plugins}loadAudio(e,t,i,s){return E(this,void 0,void 0,function*(){var r;if(this.emit("load",e),!this.options.media&&this.isPlaying()&&this.pause(),this.decodedData=null,this.stopAtPosition=null,!t&&!i){const a=this.options.fetchParams||{};window.AbortController&&!a.signal&&(this.abortController=new AbortController,a.signal=(r=this.abortController)===null||r===void 0?void 0:r.signal);const h=d=>this.emit("loading",d);t=yield ie.fetchBlob(e,h,a);const c=this.options.blobMimeType;c&&(t=new Blob([t],{type:c}))}this.setSrc(e,t);const o=yield new Promise(a=>{const h=s||this.getDuration();h?a(h):this.mediaSubscriptions.push(this.onMediaEvent("loadedmetadata",()=>a(this.getDuration()),{once:!0}))});if(!e&&!t){const a=this.getMediaElement();a instanceof O&&(a.duration=o)}if(i)this.decodedData=W.createBuffer(i,o||0);else if(t){const a=yield t.arrayBuffer();this.decodedData=yield W.decode(a,this.options.sampleRate)}this.decodedData&&(this.emit("decode",this.getDuration()),this.renderer.render(this.decodedData)),this.emit("ready",this.getDuration())})}load(e,t,i){return E(this,void 0,void 0,function*(){try{return yield this.loadAudio(e,void 0,t,i)}catch(s){throw this.emit("error",s),s}})}loadBlob(e,t,i){return E(this,void 0,void 0,function*(){try{return yield this.loadAudio("",e,t,i)}catch(s){throw this.emit("error",s),s}})}zoom(e){if(!this.decodedData)throw new Error("No audio loaded");this.renderer.zoom(e),this.emit("zoom",e)}getDecodedData(){return this.decodedData}exportPeaks({channels:e=2,maxLength:t=8e3,precision:i=1e4}={}){if(!this.decodedData)throw new Error("The audio has not been decoded yet");const s=Math.min(e,this.decodedData.numberOfChannels),r=[];for(let o=0;o<s;o++){const a=this.decodedData.getChannelData(o),h=[],c=a.length/t;for(let d=0;d<t;d++){const m=a.slice(Math.floor(d*c),Math.ceil((d+1)*c));let p=0;for(let f=0;f<m.length;f++){const b=m[f];Math.abs(b)>Math.abs(p)&&(p=b)}h.push(Math.round(p*i)/i)}r.push(h)}return r}getDuration(){let e=super.getDuration()||0;return e!==0&&e!==1/0||!this.decodedData||(e=this.decodedData.duration),e}toggleInteraction(e){this.options.interact=e}setTime(e){this.stopAtPosition=null,super.setTime(e),this.updateProgress(e),this.emit("timeupdate",e)}seekTo(e){const t=this.getDuration()*e;this.setTime(t)}play(e,t){const i=Object.create(null,{play:{get:()=>super.play}});return E(this,void 0,void 0,function*(){e!=null&&this.setTime(e);const s=yield i.play.call(this);return t!=null&&(this.media instanceof O?this.media.stopAt(t):this.stopAtPosition=t),s})}playPause(){return E(this,void 0,void 0,function*(){return this.isPlaying()?this.pause():this.play()})}stop(){this.pause(),this.setTime(0)}skip(e){this.setTime(this.getCurrentTime()+e)}empty(){this.load("",[[0]],.001)}setMediaElement(e){this.unsubscribePlayerEvents(),super.setMediaElement(e),this.initPlayerEvents()}exportImage(){return E(this,arguments,void 0,function*(e="image/png",t=1,i="dataURL"){return this.renderer.exportImage(e,t,i)})}destroy(){var e;this.emit("destroy"),(e=this.abortController)===null||e===void 0||e.abort(),this.plugins.forEach(t=>t.destroy()),this.subscriptions.forEach(t=>t()),this.unsubscribePlayerEvents(),this.timer.destroy(),this.renderer.destroy(),super.destroy()}}N.BasePlugin=class extends _{constructor(n){super(),this.subscriptions=[],this.options=n}onInit(){}_init(n){this.wavesurfer=n,this.onInit()}destroy(){this.emit("destroy"),this.subscriptions.forEach(n=>n())}},N.dom=te;const oe=(n,e)=>{const[t,i]=y.useState(null);return y.useEffect(()=>{if(!n.current)return;const s=N.create({...e,container:n.current});return i(s),()=>{s.destroy()}},[e,n]),t},ae=S.div`
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
`,Y=y.memo(n=>{const e=y.useRef(null),[t,i]=y.useState(!1),[s,r]=y.useState(.5),[o,a]=y.useState(0),[h,c]=y.useState(w(0)),[d,m]=y.useState(!1),p=oe(e,n),f=y.useRef(null),{onPlay:b,onReady:P}=n,x=y.useCallback(()=>{p.playPause()},[p]);y.useEffect(()=>{if(!p)return;p.setVolume(s);const v=()=>({media:p.getMediaElement(),peaks:p.exportPeaks()}),u=[p.on("ready",()=>{P&&P(v()),a(w(Math.round(p.getDuration()*1e3))),i(p.isPlaying())}),p.on("play",()=>{b&&b(g=>{const k=v();return!g||g.media!==k.media?(g&&(g.media.pause(),g.media.currentTime=0),k):g}),i(!0)}),p.on("audioprocess",()=>{c(w(Math.round(p.getCurrentTime()*1e3)))}),p.on("pause",()=>i(!1))];return()=>{u.forEach(g=>g())}},[p,b,P,s]),y.useEffect(()=>{const v=f.current;v.style.setProperty("--value",v.value),v.style.setProperty("--min",v.min===""?"0":v.min),v.style.setProperty("--max",v.max===""?"100":v.max),v.style.setProperty("--value",v.value)},[]);function w(v){var u=Math.floor(v/6e4),g=(v%6e4/1e3).toFixed(0);return u+":"+(g<10?"0":"")+g}function C(v){r(v.target.value);const u=v.target;u.style.setProperty("--value",u.value),u.style.setProperty("--min",u.min===""?"0":u.min),u.style.setProperty("--max",u.max===""?"100":u.max),u.style.setProperty("--value",u.value)}function M(){m(!d)}return l.jsxs(ae,{children:[t?l.jsx("img",{className:"play-icon",src:"https://extras.thetimes.co.uk/web/2025/times-knife-crime-audio/assets/pause.png",onClick:x}):l.jsx("img",{className:"play-icon",src:"https://extras.thetimes.co.uk/web/2025/times-knife-crime-audio/assets/play.png",onClick:x}),l.jsx("div",{ref:e,style:{width:"100%"}}),l.jsxs("p",{className:"waveform-time",children:[l.jsx("span",{children:h})," / ",l.jsx("span",{children:o})]}),l.jsxs("div",{className:"volume-container",children:[l.jsx("img",{className:"volume-icon",src:"https://extras.thetimes.co.uk/web/2025/times-knife-crime-audio/assets/volume.png",onClick:M}),l.jsx("input",{ref:f,className:"styled-slider slider-progress",type:"range",id:"volume-slider",min:0,max:1,step:.1,value:s,onChange:C,style:{opacity:d?1:0,pointerEvents:d?"all":"none"}})]})]})});Y.__docgenInfo={description:"",methods:[],displayName:"Equalizer"};function le({data:n}){return l.jsxs(l.Fragment,{children:[l.jsx(L,{}),l.jsxs(ee,{children:[l.jsxs("div",{className:"card-image--container",children:[l.jsx("img",{src:`https://extras.thetimes.co.uk/web/2025/times-knife-crime-audio/assets/${n.imgSrc}.jpg`,className:"card-image"}),l.jsx("p",{className:"card-name",children:n.name})]}),l.jsx("p",{className:"card-quote",children:n.quote}),l.jsx(Y,{height:100,waveColor:"#ff0000",progressColor:"#940000",url:`https://extras.thetimes.co.uk/web/2025/times-knife-crime-audio/assets/${n.audioSrc}.m4a`,normalize:!0,barWidth:2,barGap:2,barRadius:2,cursorWidth:2},n.id)]})]})}le.__docgenInfo={description:"",methods:[],displayName:"AudioPlayer"};var A={},I={},q;function de(){return q||(q=1,function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e;function t(s,r,o){return r in s?Object.defineProperty(s,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):s[r]=o,s}var i={digital:(e={blue:{r:37,g:66,b:81},yellow:{r:224,g:171,b:38},lightBlue:{r:224,g:171,b:38}},t(e,"yellow",{r:128,g:177,b:226}),t(e,"orange",{r:243,g:127,b:47}),t(e,"teal",{r:50,g:146,b:166}),t(e,"purple",{r:108,g:60,b:94}),t(e,"sand",{r:218,g:207,b:193}),e),ukPoliticalParties:{con:{r:64,g:147,b:178},lab:{r:236,g:81,b:86},libdem:{r:246,g:197,b:94},ukip:{r:151,g:103,b:174},snp:{r:255,g:246,b:133},green:{r:97,g:169,b:97},pc:{r:144,g:205,b:124},dup:{r:161,g:82,b:82},sf:{r:68,g:150,b:107},sdlp:{r:125,g:161,b:125},uup:{r:63,g:97,b:124},others:{r:160,g:147,b:143}}};n.default=i}(I)),I}var $={},F;function ce(){return F||(F=1,function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={micro:"400px",small:"520px",mobile:"768px",tablet:"1024px",desktop:"1200px","desktop-wide":"1320px"};n.default=e}($)),$}var V;function he(){return V||(V=1,function(n){Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"colors",{enumerable:!0,get:function(){return e.default}}),Object.defineProperty(n,"breakpoints",{enumerable:!0,get:function(){return t.default}});var e=i(de()),t=i(ce());function i(s){return s&&s.__esModule?s:{default:s}}}(A)),A}he();const ue=S.div`
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

`;function Z({headline:n,standfirst:e}){return l.jsxs(ue,{children:[n&&l.jsx("h1",{className:"headline",children:n}),e&&l.jsx("p",{className:"standfirst",children:e})]})}Z.__docgenInfo={description:"",methods:[],displayName:"Header"};const pe=S.div`
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
`,me=S.img`
    width: 100%;
    height: 80px;

    object-fit: cover;
    cursor: pointer;

    // * CONDITIONAL STYLES
    opacity: ${n=>n.isHovered?"1":"0.5"};

    -webkit-filter: ${n=>n.grayscale?"grayscale(100%)":"none"};
    filter: ${n=>n.grayscale?"grayscale(100%)":"none"};

    transition: opacity 250ms ease-in;
`;function J({data:n,clickedImage:e,setClickedImage:t,setShowTooltip:i,setTooltipPos:s}){function r(a,h){t(h),i(!0),s([a.clientX,a.target.offsetTop+a.target.offsetHeight-20])}const o=n.map(a=>l.jsx(me,{src:`https://nuk-tnl-editorial-prod-staticassets.s3.amazonaws.com/2024/times-image-grid/assets/${a.imgSrc}.jpg`,alt:a.name,grayscale:!1,lazy:!0,onClick:h=>r(h,a),isHovered:e===a},a.id));return l.jsx(pe,{children:o})}J.__docgenInfo={description:"",methods:[],displayName:"Grid"};const fe=S.div`
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

    @media (prefers-color-scheme: dark) {
        background-color: #1b1b1b;
    }

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
`;function K({clickedImage:n,setClickedImage:e,tooltipPos:t,showTooltip:i,setShowTooltip:s,isImageInLastRow:r}){if(!n)return;function o(){s(!1),e(null)}return l.jsxs(fe,{showTooltip:i,tooltipPos:t,isImageInLastRow:r,children:[l.jsx("img",{className:"tooltip-image",src:`https://nuk-tnl-editorial-prod-staticassets.s3.amazonaws.com/2024/times-image-grid/assets/${n.imgSrc}.jpg`,alt:n.name}),l.jsxs("div",{className:"tooltip-content",children:[l.jsx("h3",{children:n.name}),l.jsx("p",{children:n.copy})]}),l.jsx("button",{className:"tooltip-close",onClick:o,children:l.jsx("img",{src:"https://nuk-tnl-editorial-prod-staticassets.s3.amazonaws.com/2023/st-grid-jeremy-clarkson/assets/x.svg"})})]})}K.__docgenInfo={description:"",methods:[],displayName:"Tooltip"};function ge({data:n}){const[e,t]=y.useState(null),[i,s]=y.useState(!1),[r,o]=y.useState([0,0]);let h=n.length-n.indexOf(e)<=7;return l.jsxs(l.Fragment,{children:[l.jsx(L,{}),l.jsxs(X,{children:[l.jsx(Z,{headline:"Lorem ipsum dolor sit amet",standfirst:"Nulla vel augue ut erat efficitur scelerisque id vel tellus. Ut iaculis nulla sit amet lorem rutrum, ac luctus sem imperdiet"}),l.jsx(J,{data:n,clickedImage:e,setClickedImage:t,setShowTooltip:s,setTooltipPos:o}),l.jsx(K,{clickedImage:e,setClickedImage:t,showTooltip:i,setShowTooltip:s,tooltipPos:r,isImageInLastRow:h})]})]})}ge.__docgenInfo={description:"",methods:[],displayName:"ImageGrid"};S.div`
    position: relative;
    width: 100%;
`;const be=S.div`
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
`,ve=S.div`
    position: relative;
    width: 100%;
    height: 100%;
`,ye=S.div`
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
`,xe=S.section`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`,we=S.p`
    line-height: 1.4;
    font-size: ${({size:n})=>n==="lg"?"20px":"16px"} !important;
    padding: 1rem;
    font-weight: 400;
    max-width: 600px;
    background: white;
    @media (prefers-color-scheme: dark) {
        background-color: #1b1b1b;
    }
    z-index: 1;
    font-size: 18px;
    line-height: 30px;
`;function ke({data:n}){const{slides:e=[],imgFit:t="cover",containerWidth:i="edge-to-edge",borderRadius:s="0",fixedImgHeight:r,fontSize:o="md",videoLoop:a=!0,videoAutoplay:h=!0,videoControls:c=!1,videoMute:d=!0}=n,[m,p]=y.useState(0),[f,b]=y.useState([]),P=y.useRef([]),x=y.useRef([]);y.useEffect(()=>{const u=new IntersectionObserver(g=>{g.forEach(k=>{if(k.isIntersecting){const j=parseInt(k.target.dataset.index,10);p(j)}})},{threshold:.6});return P.current.forEach(g=>g&&u.observe(g)),()=>u.disconnect()},[e.length]),y.useEffect(()=>{const u=e.map((g,k)=>k===m);b(u)},[m,e]);const w=u=>f[u]?2:1,C=u=>{var g;if(u.includes("youtube.com")){const k=(g=u.split("v=")[1])==null?void 0:g.split("&")[0];return`https://www.youtube.com/embed/${k}?autoplay=${h?1:0}&loop=${a?1:0}&controls=${c?1:0}&mute=${d?1:0}&playlist=${k}`}else if(u.includes("vimeo.com"))return`https://player.vimeo.com/video/${u.split("/").pop()}?autoplay=${h?1:0}&loop=${a?1:0}&controls=${c?1:0}&muted=${d?1:0}`;return u},M=u=>u.includes("youtube.com")||u.includes("youtu.be"),v=u=>u.endsWith(".mp4");return l.jsxs(l.Fragment,{children:[l.jsx(L,{}),l.jsxs(X,{children:[l.jsx(be,{style:{height:r||"500px"},className:i==="edge-to-edge"?"edge-to-edge":i==="bleed"?"bleed":"",children:l.jsx(ve,{children:e.map((u,g)=>l.jsx(ye,{ref:k=>x.current[g]=k,className:f[g]?"overlap":"",style:{zIndex:w(g)},children:M(u.media)?l.jsx("iframe",{title:"YouTube video",src:C(u.media),frameBorder:"0",allow:"autoplay; encrypted-media",allowFullScreen:!0,style:{objectFit:t,width:"100%",height:r||(i==="edge-to-edge"?"100vh":"100%"),borderRadius:s}}):v(u.media)?l.jsx("video",{autoPlay:h,loop:a,controls:c,muted:d,style:{objectFit:t,width:"100%",height:r||"100%",borderRadius:s},children:l.jsx("source",{src:u.media,type:"video/mp4"})}):l.jsx("img",{src:u.media,alt:u.altText||"Slide image",style:{objectFit:t,width:"100%",height:r||"100%",borderRadius:s}})},g))})}),l.jsx("div",{className:"scroller-sections",children:e.map((u,g)=>l.jsx(xe,{className:"trigger","data-index":g,ref:k=>P.current[g]=k,children:u.text&&l.jsx(we,{size:o,dangerouslySetInnerHTML:{__html:u.text}})},g))})]})]})}ke.__docgenInfo={description:"",methods:[],displayName:"ScrollStory"};const Ce=S.div`
    width: 100%;
    position: relative;
    margin: 20px auto;
`,Se=S.iframe`
    width: 100%;
    border: 0;
    display: block;
`;function Pe({chartId:n,version:e="1",title:t=""}){const i=`datawrapper-chart-${n}`,s=`https://datawrapper.dwcdn.net/${n}/${e}/`,r=400,o=y.useRef(null),[a,h]=y.useState(r);return y.useEffect(()=>{function c(d){var p;if(!o.current||!((p=d.data)!=null&&p["datawrapper-height"]))return;const m=d.data["datawrapper-height"][o.current.id];m&&h(m)}return window.addEventListener("message",c),()=>window.removeEventListener("message",c)},[]),l.jsxs(l.Fragment,{children:[l.jsx(L,{}),l.jsx(Ce,{children:l.jsx(Se,{ref:o,id:i,title:t,src:s,height:a,allowFullScreen:!0})})]})}Pe.__docgenInfo={description:"",methods:[],displayName:"DataWrapperEmbed",props:{version:{defaultValue:{value:"'1'",computed:!1},required:!1},title:{defaultValue:{value:"''",computed:!1},required:!1}}};const Ee=S.div`
    position: relative;
    width: 100%;
    overflow: hidden;
    aspect-ratio: 16 / 9;
    user-select: none;
    margin: 20px 0 0;
`,Q=S.img`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
`,Me=S(Q)`
    clip-path: ${({position:n})=>`inset(0 ${100-n}% 0 0)`};
    z-index: 2;
`,je=S(Q)`
    z-index: 1;
`,Re=S.div`
    position: absolute;
    top: 0;
    left: ${({position:n})=>`${n}%`};
    height: 100%;
    width: 3px;
    background: white;
    cursor: ew-resize;
    z-index: 3;

    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 10px;
        height: 80px;
        background: white;
    }

    & > span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 40px;
    }

    & > span::before,
    & > span::after {
        content: '';
        width: 0;
        height: 0;
        border-top: 8px solid transparent;
        border-bottom: 8px solid transparent;
    }

    & > span::before {
        border-right: 8px solid white;
    }

    & > span::after {
        border-left: 8px solid white;
    }
`,G=S.span`
    position: absolute;
    top: 10px;
    background: rgba(0, 0, 0, 0.6);
    color: #fff;
    padding: 4px 8px;
    font-size: 12px;
    z-index: 4;
    font-family: 'RobotoRegular', sans-serif;
`,Te=S.p`
    margin-top: 8px;
    font-size: 12px;
    color: #666;
    text-align: left;
    margin-bottom: 20px;
    font-family: 'RobotoRegular', sans-serif;
`,De=({beforeImage:n,afterImage:e,beforeLabel:t="Before",afterLabel:i="After",photoCredits:s={}})=>{const r=y.useRef(null),[o,a]=y.useState(50),[h,c]=y.useState(!1),d=f=>{if(!h||!r.current)return;const b=r.current.getBoundingClientRect(),P=(f.clientX-b.left)/b.width*100;a(Math.max(0,Math.min(100,P)))},m=()=>c(!0),p=()=>c(!1);return y.useEffect(()=>(window.addEventListener("mousemove",d),window.addEventListener("mouseup",p),()=>{window.removeEventListener("mousemove",d),window.removeEventListener("mouseup",p)}),[h]),l.jsxs(l.Fragment,{children:[l.jsx(L,{}),l.jsxs(Ee,{ref:r,children:[l.jsx(je,{src:e,alt:"After"}),l.jsx(Me,{src:n,alt:"Before",position:o}),l.jsx(Re,{position:o,onMouseDown:m,role:"separator","aria-valuenow":o,"aria-valuemin":0,"aria-valuemax":100,tabIndex:0,children:l.jsx("span",{})}),l.jsx(G,{style:{left:"10px"},children:t}),l.jsx(G,{style:{right:"10px"},children:i})]}),s!=null&&s.before||s!=null&&s.after?l.jsxs(Te,{children:[s.before&&l.jsxs(l.Fragment,{children:["Before: ",s.before," "]}),s.after&&l.jsxs(l.Fragment,{children:["After: ",s.after]})]}):null]})};De.__docgenInfo={description:"",methods:[],displayName:"ImageSlider",props:{beforeLabel:{defaultValue:{value:"'Before'",computed:!1},required:!1},afterLabel:{defaultValue:{value:"'After'",computed:!1},required:!1},photoCredits:{defaultValue:{value:"{}",computed:!1},required:!1}}};export{le as A,Pe as D,ge as I,ke as S,De as a};
