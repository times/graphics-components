import{j as C}from"./jsx-runtime-D_zvdyIk.js";import{r as _,e as G}from"./index-Ban83id2.js";function N(e,t,r,i){return new(r||(r=Promise))(function(n,s){function o(l){try{c(i.next(l))}catch(u){s(u)}}function a(l){try{c(i.throw(l))}catch(u){s(u)}}function c(l){var u;l.done?n(l.value):(u=l.value,u instanceof r?u:new r(function(h){h(u)})).then(o,a)}c((i=i.apply(e,t||[])).next())})}class ft{constructor(){this.listeners={}}on(t,r,i){if(this.listeners[t]||(this.listeners[t]=new Set),this.listeners[t].add(r),i==null?void 0:i.once){const n=()=>{this.un(t,n),this.un(t,r)};return this.on(t,n),n}return()=>this.un(t,r)}un(t,r){var i;(i=this.listeners[t])===null||i===void 0||i.delete(r)}once(t,r){return this.on(t,r,{once:!0})}unAll(){this.listeners={}}emit(t,...r){this.listeners[t]&&this.listeners[t].forEach(i=>i(...r))}}const St={decode:function(e,t){return N(this,void 0,void 0,function*(){const r=new AudioContext({sampleRate:t});return r.decodeAudioData(e).finally(()=>r.close())})},createBuffer:function(e,t){return typeof e[0]=="number"&&(e=[e]),function(r){const i=r[0];if(i.some(n=>n>1||n<-1)){const n=i.length;let s=0;for(let o=0;o<n;o++){const a=Math.abs(i[o]);a>s&&(s=a)}for(const o of r)for(let a=0;a<n;a++)o[a]/=s}}(e),{duration:t,length:e[0].length,sampleRate:e[0].length/t,numberOfChannels:e.length,getChannelData:r=>e==null?void 0:e[r],copyFromChannel:AudioBuffer.prototype.copyFromChannel,copyToChannel:AudioBuffer.prototype.copyToChannel}}};function Me(e,t){const r=t.xmlns?document.createElementNS(t.xmlns,e):document.createElement(e);for(const[i,n]of Object.entries(t))if(i==="children")for(const[s,o]of Object.entries(t))typeof o=="string"?r.appendChild(document.createTextNode(o)):r.appendChild(Me(s,o));else i==="style"?Object.assign(r.style,n):i==="textContent"?r.textContent=n:r.setAttribute(i,n.toString());return r}function me(e,t,r){const i=Me(e,t||{});return r==null||r.appendChild(i),i}var fr=Object.freeze({__proto__:null,createElement:me,default:me});const mr={fetchBlob:function(e,t,r){return N(this,void 0,void 0,function*(){const i=yield fetch(e,r);if(i.status>=400)throw new Error(`Failed to fetch ${e}: ${i.status} (${i.statusText})`);return function(n,s){N(this,void 0,void 0,function*(){if(!n.body||!n.headers)return;const o=n.body.getReader(),a=Number(n.headers.get("Content-Length"))||0;let c=0;const l=h=>N(this,void 0,void 0,function*(){c+=(h==null?void 0:h.length)||0;const d=Math.round(c/a*100);s(d)}),u=()=>N(this,void 0,void 0,function*(){let h;try{h=yield o.read()}catch{return}h.done||(l(h.value),yield u())});u()})}(i.clone(),t),i.blob()})}};class gr extends ft{constructor(t){super(),this.isExternalMedia=!1,t.media?(this.media=t.media,this.isExternalMedia=!0):this.media=document.createElement("audio"),t.mediaControls&&(this.media.controls=!0),t.autoplay&&(this.media.autoplay=!0),t.playbackRate!=null&&this.onMediaEvent("canplay",()=>{t.playbackRate!=null&&(this.media.playbackRate=t.playbackRate)},{once:!0})}onMediaEvent(t,r,i){return this.media.addEventListener(t,r,i),()=>this.media.removeEventListener(t,r,i)}getSrc(){return this.media.currentSrc||this.media.src||""}revokeSrc(){const t=this.getSrc();t.startsWith("blob:")&&URL.revokeObjectURL(t)}canPlayType(t){return this.media.canPlayType(t)!==""}setSrc(t,r){const i=this.getSrc();if(t&&i===t)return;this.revokeSrc();const n=r instanceof Blob&&(this.canPlayType(r.type)||!t)?URL.createObjectURL(r):t;i&&(this.media.src="");try{this.media.src=n}catch{this.media.src=t}}destroy(){this.isExternalMedia||(this.media.pause(),this.media.remove(),this.revokeSrc(),this.media.src="",this.media.load())}setMediaElement(t){this.media=t}play(){return N(this,void 0,void 0,function*(){return this.media.play()})}pause(){this.media.pause()}isPlaying(){return!this.media.paused&&!this.media.ended}setTime(t){this.media.currentTime=Math.max(0,Math.min(t,this.getDuration()))}getDuration(){return this.media.duration}getCurrentTime(){return this.media.currentTime}getVolume(){return this.media.volume}setVolume(t){this.media.volume=t}getMuted(){return this.media.muted}setMuted(t){this.media.muted=t}getPlaybackRate(){return this.media.playbackRate}isSeeking(){return this.media.seeking}setPlaybackRate(t,r){r!=null&&(this.media.preservesPitch=r),this.media.playbackRate=t}getMediaElement(){return this.media}setSinkId(t){return this.media.setSinkId(t)}}class Q extends ft{constructor(t,r){super(),this.timeouts=[],this.isScrollable=!1,this.audioData=null,this.resizeObserver=null,this.lastContainerWidth=0,this.isDragging=!1,this.subscriptions=[],this.unsubscribeOnScroll=[],this.subscriptions=[],this.options=t;const i=this.parentFromOptionsContainer(t.container);this.parent=i;const[n,s]=this.initHtml();i.appendChild(n),this.container=n,this.scrollContainer=s.querySelector(".scroll"),this.wrapper=s.querySelector(".wrapper"),this.canvasWrapper=s.querySelector(".canvases"),this.progressWrapper=s.querySelector(".progress"),this.cursor=s.querySelector(".cursor"),r&&s.appendChild(r),this.initEvents()}parentFromOptionsContainer(t){let r;if(typeof t=="string"?r=document.querySelector(t):t instanceof HTMLElement&&(r=t),!r)throw new Error("Container not found");return r}initEvents(){const t=r=>{const i=this.wrapper.getBoundingClientRect(),n=r.clientX-i.left,s=r.clientY-i.top;return[n/i.width,s/i.height]};if(this.wrapper.addEventListener("click",r=>{const[i,n]=t(r);this.emit("click",i,n)}),this.wrapper.addEventListener("dblclick",r=>{const[i,n]=t(r);this.emit("dblclick",i,n)}),this.options.dragToSeek!==!0&&typeof this.options.dragToSeek!="object"||this.initDrag(),this.scrollContainer.addEventListener("scroll",()=>{const{scrollLeft:r,scrollWidth:i,clientWidth:n}=this.scrollContainer,s=r/i,o=(r+n)/i;this.emit("scroll",s,o,r,r+n)}),typeof ResizeObserver=="function"){const r=this.createDelay(100);this.resizeObserver=new ResizeObserver(()=>{r().then(()=>this.onContainerResize()).catch(()=>{})}),this.resizeObserver.observe(this.scrollContainer)}}onContainerResize(){const t=this.parent.clientWidth;t===this.lastContainerWidth&&this.options.height!=="auto"||(this.lastContainerWidth=t,this.reRender())}initDrag(){this.subscriptions.push(function(t,r,i,n,s=3,o=0,a=100){if(!t)return()=>{};const c=matchMedia("(pointer: coarse)").matches;let l=()=>{};const u=h=>{if(h.button!==o)return;h.preventDefault(),h.stopPropagation();let d=h.clientX,p=h.clientY,g=!1;const k=Date.now(),S=f=>{if(f.preventDefault(),f.stopPropagation(),c&&Date.now()-k<a)return;const y=f.clientX,b=f.clientY,D=y-d,I=b-p;if(g||Math.abs(D)>s||Math.abs(I)>s){const W=t.getBoundingClientRect(),{left:gt,top:yt}=W;g||(i==null||i(d-gt,p-yt),g=!0),r(D,I,y-gt,b-yt),d=y,p=b}},v=f=>{if(g){const y=f.clientX,b=f.clientY,D=t.getBoundingClientRect(),{left:I,top:W}=D;n==null||n(y-I,b-W)}l()},x=f=>{f.relatedTarget&&f.relatedTarget!==document.documentElement||v(f)},P=f=>{g&&(f.stopPropagation(),f.preventDefault())},m=f=>{g&&f.preventDefault()};document.addEventListener("pointermove",S),document.addEventListener("pointerup",v),document.addEventListener("pointerout",x),document.addEventListener("pointercancel",x),document.addEventListener("touchmove",m,{passive:!1}),document.addEventListener("click",P,{capture:!0}),l=()=>{document.removeEventListener("pointermove",S),document.removeEventListener("pointerup",v),document.removeEventListener("pointerout",x),document.removeEventListener("pointercancel",x),document.removeEventListener("touchmove",m),setTimeout(()=>{document.removeEventListener("click",P,{capture:!0})},10)}};return t.addEventListener("pointerdown",u),()=>{l(),t.removeEventListener("pointerdown",u)}}(this.wrapper,(t,r,i)=>{this.emit("drag",Math.max(0,Math.min(1,i/this.wrapper.getBoundingClientRect().width)))},t=>{this.isDragging=!0,this.emit("dragstart",Math.max(0,Math.min(1,t/this.wrapper.getBoundingClientRect().width)))},t=>{this.isDragging=!1,this.emit("dragend",Math.max(0,Math.min(1,t/this.wrapper.getBoundingClientRect().width)))}))}getHeight(t,r){var i;const n=((i=this.audioData)===null||i===void 0?void 0:i.numberOfChannels)||1;if(t==null)return 128;if(!isNaN(Number(t)))return Number(t);if(t==="auto"){const s=this.parent.clientHeight||128;return r!=null&&r.every(o=>!o.overlay)?s/n:s}return 128}initHtml(){const t=document.createElement("div"),r=t.attachShadow({mode:"open"}),i=this.options.cspNonce&&typeof this.options.cspNonce=="string"?this.options.cspNonce.replace(/"/g,""):"";return r.innerHTML=`
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
    `,[t,r]}setOptions(t){if(this.options.container!==t.container){const r=this.parentFromOptionsContainer(t.container);r.appendChild(this.container),this.parent=r}t.dragToSeek!==!0&&typeof this.options.dragToSeek!="object"||this.initDrag(),this.options=t,this.reRender()}getWrapper(){return this.wrapper}getWidth(){return this.scrollContainer.clientWidth}getScroll(){return this.scrollContainer.scrollLeft}setScroll(t){this.scrollContainer.scrollLeft=t}setScrollPercentage(t){const{scrollWidth:r}=this.scrollContainer,i=r*t;this.setScroll(i)}destroy(){var t,r;this.subscriptions.forEach(i=>i()),this.container.remove(),(t=this.resizeObserver)===null||t===void 0||t.disconnect(),(r=this.unsubscribeOnScroll)===null||r===void 0||r.forEach(i=>i()),this.unsubscribeOnScroll=[]}createDelay(t=10){let r,i;const n=()=>{r&&clearTimeout(r),i&&i()};return this.timeouts.push(n),()=>new Promise((s,o)=>{n(),i=o,r=setTimeout(()=>{r=void 0,i=void 0,s()},t)})}convertColorValues(t){if(!Array.isArray(t))return t||"";if(t.length<2)return t[0]||"";const r=document.createElement("canvas"),i=r.getContext("2d"),n=r.height*(window.devicePixelRatio||1),s=i.createLinearGradient(0,0,0,n),o=1/(t.length-1);return t.forEach((a,c)=>{const l=c*o;s.addColorStop(l,a)}),s}getPixelRatio(){return Math.max(1,window.devicePixelRatio||1)}renderBarWaveform(t,r,i,n){const s=t[0],o=t[1]||t[0],a=s.length,{width:c,height:l}=i.canvas,u=l/2,h=this.getPixelRatio(),d=r.barWidth?r.barWidth*h:1,p=r.barGap?r.barGap*h:r.barWidth?d/2:0,g=r.barRadius||0,k=c/(d+p)/a,S=g&&"roundRect"in i?"roundRect":"rect";i.beginPath();let v=0,x=0,P=0;for(let m=0;m<=a;m++){const f=Math.round(m*k);if(f>v){const D=Math.round(x*u*n),I=D+Math.round(P*u*n)||1;let W=u-D;r.barAlign==="top"?W=0:r.barAlign==="bottom"&&(W=l-I),i[S](v*(d+p),W,d,I,g),v=f,x=0,P=0}const y=Math.abs(s[m]||0),b=Math.abs(o[m]||0);y>x&&(x=y),b>P&&(P=b)}i.fill(),i.closePath()}renderLineWaveform(t,r,i,n){const s=o=>{const a=t[o]||t[0],c=a.length,{height:l}=i.canvas,u=l/2,h=i.canvas.width/c;i.moveTo(0,u);let d=0,p=0;for(let g=0;g<=c;g++){const k=Math.round(g*h);if(k>d){const v=u+(Math.round(p*u*n)||1)*(o===0?-1:1);i.lineTo(d,v),d=k,p=0}const S=Math.abs(a[g]||0);S>p&&(p=S)}i.lineTo(d,u)};i.beginPath(),s(0),s(1),i.fill(),i.closePath()}renderWaveform(t,r,i){if(i.fillStyle=this.convertColorValues(r.waveColor),r.renderFunction)return void r.renderFunction(t,i);let n=r.barHeight||1;if(r.normalize){const s=Array.from(t[0]).reduce((o,a)=>Math.max(o,Math.abs(a)),0);n=s?1/s:1}r.barWidth||r.barGap||r.barAlign?this.renderBarWaveform(t,r,i,n):this.renderLineWaveform(t,r,i,n)}renderSingleCanvas(t,r,i,n,s,o,a){const c=this.getPixelRatio(),l=document.createElement("canvas");l.width=Math.round(i*c),l.height=Math.round(n*c),l.style.width=`${i}px`,l.style.height=`${n}px`,l.style.left=`${Math.round(s)}px`,o.appendChild(l);const u=l.getContext("2d");if(this.renderWaveform(t,r,u),l.width>0&&l.height>0){const h=l.cloneNode(),d=h.getContext("2d");d.drawImage(l,0,0),d.globalCompositeOperation="source-in",d.fillStyle=this.convertColorValues(r.progressColor),d.fillRect(0,0,l.width,l.height),a.appendChild(h)}}renderMultiCanvas(t,r,i,n,s,o){const a=this.getPixelRatio(),{clientWidth:c}=this.scrollContainer,l=i/a;let u=Math.min(Q.MAX_CANVAS_WIDTH,c,l),h={};if(u===0)return;if(r.barWidth||r.barGap){const S=r.barWidth||.5,v=S+(r.barGap||S/2);u%v!=0&&(u=Math.floor(u/v)*v)}const d=S=>{if(S<0||S>=p||h[S])return;h[S]=!0;const v=S*u,x=Math.min(l-v,u);if(x<=0)return;const P=t.map(m=>{const f=Math.floor(v/l*m.length),y=Math.floor((v+x)/l*m.length);return m.slice(f,y)});this.renderSingleCanvas(P,r,x,n,v,s,o)},p=Math.ceil(l/u);if(!this.isScrollable){for(let S=0;S<p;S++)d(S);return}const g=this.scrollContainer.scrollLeft/l,k=Math.floor(g*p);if(d(k-1),d(k),d(k+1),p>1){const S=this.on("scroll",()=>{const{scrollLeft:v}=this.scrollContainer,x=Math.floor(v/l*p);Object.keys(h).length>Q.MAX_NODES&&(s.innerHTML="",o.innerHTML="",h={}),d(x-1),d(x),d(x+1)});this.unsubscribeOnScroll.push(S)}}renderChannel(t,r,i,n){var{overlay:s}=r,o=function(u,h){var d={};for(var p in u)Object.prototype.hasOwnProperty.call(u,p)&&h.indexOf(p)<0&&(d[p]=u[p]);if(u!=null&&typeof Object.getOwnPropertySymbols=="function"){var g=0;for(p=Object.getOwnPropertySymbols(u);g<p.length;g++)h.indexOf(p[g])<0&&Object.prototype.propertyIsEnumerable.call(u,p[g])&&(d[p[g]]=u[p[g]])}return d}(r,["overlay"]);const a=document.createElement("div"),c=this.getHeight(o.height,o.splitChannels);a.style.height=`${c}px`,s&&n>0&&(a.style.marginTop=`-${c}px`),this.canvasWrapper.style.minHeight=`${c}px`,this.canvasWrapper.appendChild(a);const l=a.cloneNode();this.progressWrapper.appendChild(l),this.renderMultiCanvas(t,o,i,c,a,l)}render(t){return N(this,void 0,void 0,function*(){var r;this.timeouts.forEach(c=>c()),this.timeouts=[],this.canvasWrapper.innerHTML="",this.progressWrapper.innerHTML="",this.options.width!=null&&(this.scrollContainer.style.width=typeof this.options.width=="number"?`${this.options.width}px`:this.options.width);const i=this.getPixelRatio(),n=this.scrollContainer.clientWidth,s=Math.ceil(t.duration*(this.options.minPxPerSec||0));this.isScrollable=s>n;const o=this.options.fillParent&&!this.isScrollable,a=(o?n:s)*i;if(this.wrapper.style.width=o?"100%":`${s}px`,this.scrollContainer.style.overflowX=this.isScrollable?"auto":"hidden",this.scrollContainer.classList.toggle("noScrollbar",!!this.options.hideScrollbar),this.cursor.style.backgroundColor=`${this.options.cursorColor||this.options.progressColor}`,this.cursor.style.width=`${this.options.cursorWidth}px`,this.audioData=t,this.emit("render"),this.options.splitChannels)for(let c=0;c<t.numberOfChannels;c++){const l=Object.assign(Object.assign({},this.options),(r=this.options.splitChannels)===null||r===void 0?void 0:r[c]);this.renderChannel([t.getChannelData(c)],l,a,c)}else{const c=[t.getChannelData(0)];t.numberOfChannels>1&&c.push(t.getChannelData(1)),this.renderChannel(c,this.options,a,0)}Promise.resolve().then(()=>this.emit("rendered"))})}reRender(){if(this.unsubscribeOnScroll.forEach(i=>i()),this.unsubscribeOnScroll=[],!this.audioData)return;const{scrollWidth:t}=this.scrollContainer,{right:r}=this.progressWrapper.getBoundingClientRect();if(this.render(this.audioData),this.isScrollable&&t!==this.scrollContainer.scrollWidth){const{right:i}=this.progressWrapper.getBoundingClientRect();let n=i-r;n*=2,n=n<0?Math.floor(n):Math.ceil(n),n/=2,this.scrollContainer.scrollLeft+=n}}zoom(t){this.options.minPxPerSec=t,this.reRender()}scrollIntoView(t,r=!1){const{scrollLeft:i,scrollWidth:n,clientWidth:s}=this.scrollContainer,o=t*n,a=i,c=i+s,l=s/2;if(this.isDragging)o+30>c?this.scrollContainer.scrollLeft+=30:o-30<a&&(this.scrollContainer.scrollLeft-=30);else{(o<a||o>c)&&(this.scrollContainer.scrollLeft=o-(this.options.autoCenter?l:0));const u=o-i-l;r&&this.options.autoCenter&&u>0&&(this.scrollContainer.scrollLeft+=Math.min(u,10))}{const u=this.scrollContainer.scrollLeft,h=u/n,d=(u+s)/n;this.emit("scroll",h,d,u,u+s)}}renderProgress(t,r){if(isNaN(t))return;const i=100*t;this.canvasWrapper.style.clipPath=`polygon(${i}% 0, 100% 0, 100% 100%, ${i}% 100%)`,this.progressWrapper.style.width=`${i}%`,this.cursor.style.left=`${i}%`,this.cursor.style.transform=`translateX(-${Math.round(i)===100?this.options.cursorWidth:0}px)`,this.isScrollable&&this.options.autoScroll&&this.scrollIntoView(t,r)}exportImage(t,r,i){return N(this,void 0,void 0,function*(){const n=this.canvasWrapper.querySelectorAll("canvas");if(!n.length)throw new Error("No waveform data");if(i==="dataURL"){const s=Array.from(n).map(o=>o.toDataURL(t,r));return Promise.resolve(s)}return Promise.all(Array.from(n).map(s=>new Promise((o,a)=>{s.toBlob(c=>{c?o(c):a(new Error("Could not export image"))},t,r)})))})}}Q.MAX_CANVAS_WIDTH=8e3,Q.MAX_NODES=10;class yr extends ft{constructor(){super(...arguments),this.unsubscribe=()=>{}}start(){this.unsubscribe=this.on("tick",()=>{requestAnimationFrame(()=>{this.emit("tick")})}),this.emit("tick")}stop(){this.unsubscribe()}destroy(){this.unsubscribe()}}class Ft extends ft{constructor(t=new AudioContext){super(),this.bufferNode=null,this.playStartTime=0,this.playedDuration=0,this._muted=!1,this._playbackRate=1,this._duration=void 0,this.buffer=null,this.currentSrc="",this.paused=!0,this.crossOrigin=null,this.seeking=!1,this.autoplay=!1,this.addEventListener=this.on,this.removeEventListener=this.un,this.audioContext=t,this.gainNode=this.audioContext.createGain(),this.gainNode.connect(this.audioContext.destination)}load(){return N(this,void 0,void 0,function*(){})}get src(){return this.currentSrc}set src(t){if(this.currentSrc=t,this._duration=void 0,!t)return this.buffer=null,void this.emit("emptied");fetch(t).then(r=>{if(r.status>=400)throw new Error(`Failed to fetch ${t}: ${r.status} (${r.statusText})`);return r.arrayBuffer()}).then(r=>this.currentSrc!==t?null:this.audioContext.decodeAudioData(r)).then(r=>{this.currentSrc===t&&(this.buffer=r,this.emit("loadedmetadata"),this.emit("canplay"),this.autoplay&&this.play())})}_play(){var t;if(!this.paused)return;this.paused=!1,(t=this.bufferNode)===null||t===void 0||t.disconnect(),this.bufferNode=this.audioContext.createBufferSource(),this.buffer&&(this.bufferNode.buffer=this.buffer),this.bufferNode.playbackRate.value=this._playbackRate,this.bufferNode.connect(this.gainNode);let r=this.playedDuration*this._playbackRate;(r>=this.duration||r<0)&&(r=0,this.playedDuration=0),this.bufferNode.start(this.audioContext.currentTime,r),this.playStartTime=this.audioContext.currentTime,this.bufferNode.onended=()=>{this.currentTime>=this.duration&&(this.pause(),this.emit("ended"))}}_pause(){var t;this.paused=!0,(t=this.bufferNode)===null||t===void 0||t.stop(),this.playedDuration+=this.audioContext.currentTime-this.playStartTime}play(){return N(this,void 0,void 0,function*(){this.paused&&(this._play(),this.emit("play"))})}pause(){this.paused||(this._pause(),this.emit("pause"))}stopAt(t){var r,i;const n=t-this.currentTime;(r=this.bufferNode)===null||r===void 0||r.stop(this.audioContext.currentTime+n),(i=this.bufferNode)===null||i===void 0||i.addEventListener("ended",()=>{this.bufferNode=null,this.pause()},{once:!0})}setSinkId(t){return N(this,void 0,void 0,function*(){return this.audioContext.setSinkId(t)})}get playbackRate(){return this._playbackRate}set playbackRate(t){this._playbackRate=t,this.bufferNode&&(this.bufferNode.playbackRate.value=t)}get currentTime(){return(this.paused?this.playedDuration:this.playedDuration+(this.audioContext.currentTime-this.playStartTime))*this._playbackRate}set currentTime(t){const r=!this.paused;r&&this._pause(),this.playedDuration=t/this._playbackRate,r&&this._play(),this.emit("seeking"),this.emit("timeupdate")}get duration(){var t,r;return(t=this._duration)!==null&&t!==void 0?t:((r=this.buffer)===null||r===void 0?void 0:r.duration)||0}set duration(t){this._duration=t}get volume(){return this.gainNode.gain.value}set volume(t){this.gainNode.gain.value=t,this.emit("volumechange")}get muted(){return this._muted}set muted(t){this._muted!==t&&(this._muted=t,this._muted?this.gainNode.disconnect():this.gainNode.connect(this.audioContext.destination))}canPlayType(t){return/^(audio|video)\//.test(t)}getGainNode(){return this.gainNode}getChannelData(){const t=[];if(!this.buffer)return t;const r=this.buffer.numberOfChannels;for(let i=0;i<r;i++)t.push(this.buffer.getChannelData(i));return t}}const br={waveColor:"#999",progressColor:"#555",cursorWidth:1,minPxPerSec:0,fillParent:!0,interact:!0,dragToSeek:!1,autoScroll:!0,autoCenter:!0,sampleRate:8e3};class dt extends gr{static create(t){return new dt(t)}constructor(t){const r=t.media||(t.backend==="WebAudio"?new Ft:void 0);super({media:r,mediaControls:t.mediaControls,autoplay:t.autoplay,playbackRate:t.audioRate}),this.plugins=[],this.decodedData=null,this.stopAtPosition=null,this.subscriptions=[],this.mediaSubscriptions=[],this.abortController=null,this.options=Object.assign({},br,t),this.timer=new yr;const i=r?void 0:this.getMediaElement();this.renderer=new Q(this.options,i),this.initPlayerEvents(),this.initRendererEvents(),this.initTimerEvents(),this.initPlugins();const n=this.options.url||this.getSrc()||"";Promise.resolve().then(()=>{this.emit("init");const{peaks:s,duration:o}=this.options;(n||s&&o)&&this.load(n,s,o).catch(()=>null)})}updateProgress(t=this.getCurrentTime()){return this.renderer.renderProgress(t/this.getDuration(),this.isPlaying()),t}initTimerEvents(){this.subscriptions.push(this.timer.on("tick",()=>{if(!this.isSeeking()){const t=this.updateProgress();this.emit("timeupdate",t),this.emit("audioprocess",t),this.stopAtPosition!=null&&this.isPlaying()&&t>=this.stopAtPosition&&this.pause()}}))}initPlayerEvents(){this.isPlaying()&&(this.emit("play"),this.timer.start()),this.mediaSubscriptions.push(this.onMediaEvent("timeupdate",()=>{const t=this.updateProgress();this.emit("timeupdate",t)}),this.onMediaEvent("play",()=>{this.emit("play"),this.timer.start()}),this.onMediaEvent("pause",()=>{this.emit("pause"),this.timer.stop(),this.stopAtPosition=null}),this.onMediaEvent("emptied",()=>{this.timer.stop(),this.stopAtPosition=null}),this.onMediaEvent("ended",()=>{this.emit("timeupdate",this.getDuration()),this.emit("finish"),this.stopAtPosition=null}),this.onMediaEvent("seeking",()=>{this.emit("seeking",this.getCurrentTime())}),this.onMediaEvent("error",()=>{var t;this.emit("error",(t=this.getMediaElement().error)!==null&&t!==void 0?t:new Error("Media error")),this.stopAtPosition=null}))}initRendererEvents(){this.subscriptions.push(this.renderer.on("click",(t,r)=>{this.options.interact&&(this.seekTo(t),this.emit("interaction",t*this.getDuration()),this.emit("click",t,r))}),this.renderer.on("dblclick",(t,r)=>{this.emit("dblclick",t,r)}),this.renderer.on("scroll",(t,r,i,n)=>{const s=this.getDuration();this.emit("scroll",t*s,r*s,i,n)}),this.renderer.on("render",()=>{this.emit("redraw")}),this.renderer.on("rendered",()=>{this.emit("redrawcomplete")}),this.renderer.on("dragstart",t=>{this.emit("dragstart",t)}),this.renderer.on("dragend",t=>{this.emit("dragend",t)}));{let t;this.subscriptions.push(this.renderer.on("drag",r=>{if(!this.options.interact)return;let i;this.renderer.renderProgress(r),clearTimeout(t),this.isPlaying()?i=0:this.options.dragToSeek===!0?i=200:typeof this.options.dragToSeek=="object"&&this.options.dragToSeek!==void 0&&(i=this.options.dragToSeek.debounceTime),t=setTimeout(()=>{this.seekTo(r)},i),this.emit("interaction",r*this.getDuration()),this.emit("drag",r)}))}}initPlugins(){var t;!((t=this.options.plugins)===null||t===void 0)&&t.length&&this.options.plugins.forEach(r=>{this.registerPlugin(r)})}unsubscribePlayerEvents(){this.mediaSubscriptions.forEach(t=>t()),this.mediaSubscriptions=[]}setOptions(t){this.options=Object.assign({},this.options,t),t.duration&&!t.peaks&&(this.decodedData=St.createBuffer(this.exportPeaks(),t.duration)),t.peaks&&t.duration&&(this.decodedData=St.createBuffer(t.peaks,t.duration)),this.renderer.setOptions(this.options),t.audioRate&&this.setPlaybackRate(t.audioRate),t.mediaControls!=null&&(this.getMediaElement().controls=t.mediaControls)}registerPlugin(t){return t._init(this),this.plugins.push(t),this.subscriptions.push(t.once("destroy",()=>{this.plugins=this.plugins.filter(r=>r!==t)})),t}getWrapper(){return this.renderer.getWrapper()}getWidth(){return this.renderer.getWidth()}getScroll(){return this.renderer.getScroll()}setScroll(t){return this.renderer.setScroll(t)}setScrollTime(t){const r=t/this.getDuration();this.renderer.setScrollPercentage(r)}getActivePlugins(){return this.plugins}loadAudio(t,r,i,n){return N(this,void 0,void 0,function*(){var s;if(this.emit("load",t),!this.options.media&&this.isPlaying()&&this.pause(),this.decodedData=null,this.stopAtPosition=null,!r&&!i){const a=this.options.fetchParams||{};window.AbortController&&!a.signal&&(this.abortController=new AbortController,a.signal=(s=this.abortController)===null||s===void 0?void 0:s.signal);const c=u=>this.emit("loading",u);r=yield mr.fetchBlob(t,c,a);const l=this.options.blobMimeType;l&&(r=new Blob([r],{type:l}))}this.setSrc(t,r);const o=yield new Promise(a=>{const c=n||this.getDuration();c?a(c):this.mediaSubscriptions.push(this.onMediaEvent("loadedmetadata",()=>a(this.getDuration()),{once:!0}))});if(!t&&!r){const a=this.getMediaElement();a instanceof Ft&&(a.duration=o)}if(i)this.decodedData=St.createBuffer(i,o||0);else if(r){const a=yield r.arrayBuffer();this.decodedData=yield St.decode(a,this.options.sampleRate)}this.decodedData&&(this.emit("decode",this.getDuration()),this.renderer.render(this.decodedData)),this.emit("ready",this.getDuration())})}load(t,r,i){return N(this,void 0,void 0,function*(){try{return yield this.loadAudio(t,void 0,r,i)}catch(n){throw this.emit("error",n),n}})}loadBlob(t,r,i){return N(this,void 0,void 0,function*(){try{return yield this.loadAudio("",t,r,i)}catch(n){throw this.emit("error",n),n}})}zoom(t){if(!this.decodedData)throw new Error("No audio loaded");this.renderer.zoom(t),this.emit("zoom",t)}getDecodedData(){return this.decodedData}exportPeaks({channels:t=2,maxLength:r=8e3,precision:i=1e4}={}){if(!this.decodedData)throw new Error("The audio has not been decoded yet");const n=Math.min(t,this.decodedData.numberOfChannels),s=[];for(let o=0;o<n;o++){const a=this.decodedData.getChannelData(o),c=[],l=a.length/r;for(let u=0;u<r;u++){const h=a.slice(Math.floor(u*l),Math.ceil((u+1)*l));let d=0;for(let p=0;p<h.length;p++){const g=h[p];Math.abs(g)>Math.abs(d)&&(d=g)}c.push(Math.round(d*i)/i)}s.push(c)}return s}getDuration(){let t=super.getDuration()||0;return t!==0&&t!==1/0||!this.decodedData||(t=this.decodedData.duration),t}toggleInteraction(t){this.options.interact=t}setTime(t){this.stopAtPosition=null,super.setTime(t),this.updateProgress(t),this.emit("timeupdate",t)}seekTo(t){const r=this.getDuration()*t;this.setTime(r)}play(t,r){const i=Object.create(null,{play:{get:()=>super.play}});return N(this,void 0,void 0,function*(){return t!=null&&this.setTime(t),r!=null&&(this.media instanceof Ft?this.media.stopAt(r):this.stopAtPosition=r),i.play.call(this)})}playPause(){return N(this,void 0,void 0,function*(){return this.isPlaying()?this.pause():this.play()})}stop(){this.pause(),this.setTime(0)}skip(t){this.setTime(this.getCurrentTime()+t)}empty(){this.load("",[[0]],.001)}setMediaElement(t){this.unsubscribePlayerEvents(),super.setMediaElement(t),this.initPlayerEvents()}exportImage(){return N(this,arguments,void 0,function*(t="image/png",r=1,i="dataURL"){return this.renderer.exportImage(t,r,i)})}destroy(){var t;this.emit("destroy"),(t=this.abortController)===null||t===void 0||t.abort(),this.plugins.forEach(r=>r.destroy()),this.subscriptions.forEach(r=>r()),this.unsubscribePlayerEvents(),this.timer.destroy(),this.renderer.destroy(),super.destroy()}}dt.BasePlugin=class extends ft{constructor(e){super(),this.subscriptions=[],this.options=e}onInit(){}_init(e){this.wavesurfer=e,this.onInit()}destroy(){this.emit("destroy"),this.subscriptions.forEach(e=>e())}},dt.dom=fr;const vr=(e,t)=>{const[r,i]=_.useState(null);return _.useEffect(()=>{if(!e.current)return;const n=dt.create({...t,container:e.current});return i(n),()=>{n.destroy()}},[t,e]),r};var M=function(){return M=Object.assign||function(t){for(var r,i=1,n=arguments.length;i<n;i++){r=arguments[i];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s])}return t},M.apply(this,arguments)};function ht(e,t,r){if(r||arguments.length===2)for(var i=0,n=t.length,s;i<n;i++)(s||!(i in t))&&(s||(s=Array.prototype.slice.call(t,0,i)),s[i]=t[i]);return e.concat(s||Array.prototype.slice.call(t))}var R="-ms-",ut="-moz-",E="-webkit-",De="comm",Ot="rule",ae="decl",xr="@import",Oe="@keyframes",wr="@layer",Ie=Math.abs,ce=String.fromCharCode,Jt=Object.assign;function Sr(e,t){return A(e,0)^45?(((t<<2^A(e,0))<<2^A(e,1))<<2^A(e,2))<<2^A(e,3):0}function je(e){return e.trim()}function B(e,t){return(e=t.exec(e))?e[0]:e}function w(e,t,r){return e.replace(t,r)}function Pt(e,t,r){return e.indexOf(t,r)}function A(e,t){return e.charCodeAt(t)|0}function tt(e,t,r){return e.slice(t,r)}function L(e){return e.length}function $e(e){return e.length}function lt(e,t){return t.push(e),e}function Cr(e,t){return e.map(t).join("")}function ge(e,t){return e.filter(function(r){return!B(r,t)})}var It=1,et=1,Le=0,j=0,T=0,st="";function jt(e,t,r,i,n,s,o,a){return{value:e,root:t,parent:r,type:i,props:n,children:s,line:It,column:et,length:o,return:"",siblings:a}}function H(e,t){return Jt(jt("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Z(e){for(;e.root;)e=H(e.root,{children:[e]});lt(e,e.siblings)}function kr(){return T}function Pr(){return T=j>0?A(st,--j):0,et--,T===10&&(et=1,It--),T}function $(){return T=j<Le?A(st,j++):0,et++,T===10&&(et=1,It++),T}function K(){return A(st,j)}function Et(){return j}function $t(e,t){return tt(st,e,t)}function Qt(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Er(e){return It=et=1,Le=L(st=e),j=0,[]}function Rr(e){return st="",e}function qt(e){return je($t(j-1,te(e===91?e+2:e===40?e+1:e)))}function Tr(e){for(;(T=K())&&T<33;)$();return Qt(e)>2||Qt(T)>3?"":" "}function _r(e,t){for(;--t&&$()&&!(T<48||T>102||T>57&&T<65||T>70&&T<97););return $t(e,Et()+(t<6&&K()==32&&$()==32))}function te(e){for(;$();)switch(T){case e:return j;case 34:case 39:e!==34&&e!==39&&te(T);break;case 40:e===41&&te(e);break;case 92:$();break}return j}function Ar(e,t){for(;$()&&e+T!==57;)if(e+T===84&&K()===47)break;return"/*"+$t(t,j-1)+"*"+ce(e===47?e:$())}function Nr(e){for(;!Qt(K());)$();return $t(e,j)}function Mr(e){return Rr(Rt("",null,null,null,[""],e=Er(e),0,[0],e))}function Rt(e,t,r,i,n,s,o,a,c){for(var l=0,u=0,h=o,d=0,p=0,g=0,k=1,S=1,v=1,x=0,P="",m=n,f=s,y=i,b=P;S;)switch(g=x,x=$()){case 40:if(g!=108&&A(b,h-1)==58){Pt(b+=w(qt(x),"&","&\f"),"&\f",Ie(l?a[l-1]:0))!=-1&&(v=-1);break}case 34:case 39:case 91:b+=qt(x);break;case 9:case 10:case 13:case 32:b+=Tr(g);break;case 92:b+=_r(Et()-1,7);continue;case 47:switch(K()){case 42:case 47:lt(Dr(Ar($(),Et()),t,r,c),c);break;default:b+="/"}break;case 123*k:a[l++]=L(b)*v;case 125*k:case 59:case 0:switch(x){case 0:case 125:S=0;case 59+u:v==-1&&(b=w(b,/\f/g,"")),p>0&&L(b)-h&&lt(p>32?be(b+";",i,r,h-1,c):be(w(b," ","")+";",i,r,h-2,c),c);break;case 59:b+=";";default:if(lt(y=ye(b,t,r,l,u,n,a,P,m=[],f=[],h,s),s),x===123)if(u===0)Rt(b,t,y,y,m,s,h,a,f);else switch(d===99&&A(b,3)===110?100:d){case 100:case 108:case 109:case 115:Rt(e,y,y,i&&lt(ye(e,y,y,0,0,n,a,P,n,m=[],h,f),f),n,f,h,a,i?m:f);break;default:Rt(b,y,y,y,[""],f,0,a,f)}}l=u=p=0,k=v=1,P=b="",h=o;break;case 58:h=1+L(b),p=g;default:if(k<1){if(x==123)--k;else if(x==125&&k++==0&&Pr()==125)continue}switch(b+=ce(x),x*k){case 38:v=u>0?1:(b+="\f",-1);break;case 44:a[l++]=(L(b)-1)*v,v=1;break;case 64:K()===45&&(b+=qt($())),d=K(),u=h=L(P=b+=Nr(Et())),x++;break;case 45:g===45&&L(b)==2&&(k=0)}}return s}function ye(e,t,r,i,n,s,o,a,c,l,u,h){for(var d=n-1,p=n===0?s:[""],g=$e(p),k=0,S=0,v=0;k<i;++k)for(var x=0,P=tt(e,d+1,d=Ie(S=o[k])),m=e;x<g;++x)(m=je(S>0?p[x]+" "+P:w(P,/&\f/g,p[x])))&&(c[v++]=m);return jt(e,t,r,n===0?Ot:a,c,l,u,h)}function Dr(e,t,r,i){return jt(e,t,r,De,ce(kr()),tt(e,2,-2),0,i)}function be(e,t,r,i,n){return jt(e,t,r,ae,tt(e,0,i),tt(e,i+1,-1),i,n)}function We(e,t,r){switch(Sr(e,t)){case 5103:return E+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return E+e+e;case 4789:return ut+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return E+e+ut+e+R+e+e;case 5936:switch(A(e,t+11)){case 114:return E+e+R+w(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return E+e+R+w(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return E+e+R+w(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return E+e+R+e+e;case 6165:return E+e+R+"flex-"+e+e;case 5187:return E+e+w(e,/(\w+).+(:[^]+)/,E+"box-$1$2"+R+"flex-$1$2")+e;case 5443:return E+e+R+"flex-item-"+w(e,/flex-|-self/g,"")+(B(e,/flex-|baseline/)?"":R+"grid-row-"+w(e,/flex-|-self/g,""))+e;case 4675:return E+e+R+"flex-line-pack"+w(e,/align-content|flex-|-self/g,"")+e;case 5548:return E+e+R+w(e,"shrink","negative")+e;case 5292:return E+e+R+w(e,"basis","preferred-size")+e;case 6060:return E+"box-"+w(e,"-grow","")+E+e+R+w(e,"grow","positive")+e;case 4554:return E+w(e,/([^-])(transform)/g,"$1"+E+"$2")+e;case 6187:return w(w(w(e,/(zoom-|grab)/,E+"$1"),/(image-set)/,E+"$1"),e,"")+e;case 5495:case 3959:return w(e,/(image-set\([^]*)/,E+"$1$`$1");case 4968:return w(w(e,/(.+:)(flex-)?(.*)/,E+"box-pack:$3"+R+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+E+e+e;case 4200:if(!B(e,/flex-|baseline/))return R+"grid-column-align"+tt(e,t)+e;break;case 2592:case 3360:return R+w(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(i,n){return t=n,B(i.props,/grid-\w+-end/)})?~Pt(e+(r=r[t].value),"span",0)?e:R+w(e,"-start","")+e+R+"grid-row-span:"+(~Pt(r,"span",0)?B(r,/\d+/):+B(r,/\d+/)-+B(e,/\d+/))+";":R+w(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(i){return B(i.props,/grid-\w+-start/)})?e:R+w(w(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return w(e,/(.+)-inline(.+)/,E+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(L(e)-1-t>6)switch(A(e,t+1)){case 109:if(A(e,t+4)!==45)break;case 102:return w(e,/(.+:)(.+)-([^]+)/,"$1"+E+"$2-$3$1"+ut+(A(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Pt(e,"stretch",0)?We(w(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return w(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,n,s,o,a,c,l){return R+n+":"+s+l+(o?R+n+"-span:"+(a?c:+c-+s)+l:"")+e});case 4949:if(A(e,t+6)===121)return w(e,":",":"+E)+e;break;case 6444:switch(A(e,A(e,14)===45?18:11)){case 120:return w(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+E+(A(e,14)===45?"inline-":"")+"box$3$1"+E+"$2$3$1"+R+"$2box$3")+e;case 100:return w(e,":",":"+R)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return w(e,"scroll-","scroll-snap-")+e}return e}function At(e,t){for(var r="",i=0;i<e.length;i++)r+=t(e[i],i,e,t)||"";return r}function Or(e,t,r,i){switch(e.type){case wr:if(e.children.length)break;case xr:case ae:return e.return=e.return||e.value;case De:return"";case Oe:return e.return=e.value+"{"+At(e.children,i)+"}";case Ot:if(!L(e.value=e.props.join(",")))return""}return L(r=At(e.children,i))?e.return=e.value+"{"+r+"}":""}function Ir(e){var t=$e(e);return function(r,i,n,s){for(var o="",a=0;a<t;a++)o+=e[a](r,i,n,s)||"";return o}}function jr(e){return function(t){t.root||(t=t.return)&&e(t)}}function $r(e,t,r,i){if(e.length>-1&&!e.return)switch(e.type){case ae:e.return=We(e.value,e.length,r);return;case Oe:return At([H(e,{value:w(e.value,"@","@"+E)})],i);case Ot:if(e.length)return Cr(r=e.props,function(n){switch(B(n,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Z(H(e,{props:[w(n,/:(read-\w+)/,":"+ut+"$1")]})),Z(H(e,{props:[n]})),Jt(e,{props:ge(r,i)});break;case"::placeholder":Z(H(e,{props:[w(n,/:(plac\w+)/,":"+E+"input-$1")]})),Z(H(e,{props:[w(n,/:(plac\w+)/,":"+ut+"$1")]})),Z(H(e,{props:[w(n,/:(plac\w+)/,R+"input-$1")]})),Z(H(e,{props:[n]})),Jt(e,{props:ge(r,i)});break}return""})}}var Lr={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},O={},rt=typeof process<"u"&&O!==void 0&&(O.REACT_APP_SC_ATTR||O.SC_ATTR)||"data-styled",ze="active",Be="data-styled-version",Lt="6.1.16",le=`/*!sc*/
`,Nt=typeof window<"u"&&"HTMLElement"in window,Wr=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&O!==void 0&&O.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&O.REACT_APP_SC_DISABLE_SPEEDY!==""?O.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&O.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&O!==void 0&&O.SC_DISABLE_SPEEDY!==void 0&&O.SC_DISABLE_SPEEDY!==""&&O.SC_DISABLE_SPEEDY!=="false"&&O.SC_DISABLE_SPEEDY),zr={},Wt=Object.freeze([]),it=Object.freeze({});function Ge(e,t,r){return r===void 0&&(r=it),e.theme!==r.theme&&e.theme||t||r.theme}var Fe=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Br=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Gr=/(^-|-$)/g;function ve(e){return e.replace(Br,"-").replace(Gr,"")}var Fr=/(a)(d)/gi,Ct=52,xe=function(e){return String.fromCharCode(e+(e>25?39:97))};function ee(e){var t,r="";for(t=Math.abs(e);t>Ct;t=t/Ct|0)r=xe(t%Ct)+r;return(xe(t%Ct)+r).replace(Fr,"$1-$2")}var Ht,qe=5381,J=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},He=function(e){return J(qe,e)};function Ye(e){return ee(He(e)>>>0)}function qr(e){return e.displayName||e.name||"Component"}function Yt(e){return typeof e=="string"&&!0}var Ve=typeof Symbol=="function"&&Symbol.for,Ue=Ve?Symbol.for("react.memo"):60115,Hr=Ve?Symbol.for("react.forward_ref"):60112,Yr={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Vr={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Xe={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ur=((Ht={})[Hr]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ht[Ue]=Xe,Ht);function we(e){return("type"in(t=e)&&t.type.$$typeof)===Ue?Xe:"$$typeof"in e?Ur[e.$$typeof]:Yr;var t}var Xr=Object.defineProperty,Kr=Object.getOwnPropertyNames,Se=Object.getOwnPropertySymbols,Zr=Object.getOwnPropertyDescriptor,Jr=Object.getPrototypeOf,Ce=Object.prototype;function Ke(e,t,r){if(typeof t!="string"){if(Ce){var i=Jr(t);i&&i!==Ce&&Ke(e,i,r)}var n=Kr(t);Se&&(n=n.concat(Se(t)));for(var s=we(e),o=we(t),a=0;a<n.length;++a){var c=n[a];if(!(c in Vr||r&&r[c]||o&&c in o||s&&c in s)){var l=Zr(t,c);try{Xr(e,c,l)}catch{}}}}return e}function nt(e){return typeof e=="function"}function ue(e){return typeof e=="object"&&"styledComponentId"in e}function X(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function re(e,t){if(e.length===0)return"";for(var r=e[0],i=1;i<e.length;i++)r+=e[i];return r}function pt(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ie(e,t,r){if(r===void 0&&(r=!1),!r&&!pt(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var i=0;i<t.length;i++)e[i]=ie(e[i],t[i]);else if(pt(t))for(var i in t)e[i]=ie(e[i],t[i]);return e}function de(e,t){Object.defineProperty(e,"toString",{value:t})}function mt(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Qr=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var r=0,i=0;i<t;i++)r+=this.groupSizes[i];return r},e.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var i=this.groupSizes,n=i.length,s=n;t>=s;)if((s<<=1)<0)throw mt(16,"".concat(t));this.groupSizes=new Uint32Array(s),this.groupSizes.set(i),this.length=s;for(var o=n;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(t+1),c=(o=0,r.length);o<c;o++)this.tag.insertRule(a,r[o])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],i=this.indexOfGroup(t),n=i+r;this.groupSizes[t]=0;for(var s=i;s<n;s++)this.tag.deleteRule(i)}},e.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var i=this.groupSizes[t],n=this.indexOfGroup(t),s=n+i,o=n;o<s;o++)r+="".concat(this.tag.getRule(o)).concat(le);return r},e}(),Tt=new Map,Mt=new Map,_t=1,kt=function(e){if(Tt.has(e))return Tt.get(e);for(;Mt.has(_t);)_t++;var t=_t++;return Tt.set(e,t),Mt.set(t,e),t},ti=function(e,t){_t=t+1,Tt.set(e,t),Mt.set(t,e)},ei="style[".concat(rt,"][").concat(Be,'="').concat(Lt,'"]'),ri=new RegExp("^".concat(rt,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ii=function(e,t,r){for(var i,n=r.split(","),s=0,o=n.length;s<o;s++)(i=n[s])&&e.registerName(t,i)},ni=function(e,t){for(var r,i=((r=t.textContent)!==null&&r!==void 0?r:"").split(le),n=[],s=0,o=i.length;s<o;s++){var a=i[s].trim();if(a){var c=a.match(ri);if(c){var l=0|parseInt(c[1],10),u=c[2];l!==0&&(ti(u,l),ii(e,u,c[3]),e.getTag().insertRules(l,n)),n.length=0}else n.push(a)}}},ke=function(e){for(var t=document.querySelectorAll(ei),r=0,i=t.length;r<i;r++){var n=t[r];n&&n.getAttribute(rt)!==ze&&(ni(e,n),n.parentNode&&n.parentNode.removeChild(n))}};function si(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Ze=function(e){var t=document.head,r=e||t,i=document.createElement("style"),n=function(a){var c=Array.from(a.querySelectorAll("style[".concat(rt,"]")));return c[c.length-1]}(r),s=n!==void 0?n.nextSibling:null;i.setAttribute(rt,ze),i.setAttribute(Be,Lt);var o=si();return o&&i.setAttribute("nonce",o),r.insertBefore(i,s),i},oi=function(){function e(t){this.element=Ze(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var i=document.styleSheets,n=0,s=i.length;n<s;n++){var o=i[n];if(o.ownerNode===r)return o}throw mt(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},e}(),ai=function(){function e(t){this.element=Ze(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var i=document.createTextNode(r);return this.element.insertBefore(i,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),ci=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Pe=Nt,li={isServer:!Nt,useCSSOMInjection:!Wr},Dt=function(){function e(t,r,i){t===void 0&&(t=it),r===void 0&&(r={});var n=this;this.options=M(M({},li),t),this.gs=r,this.names=new Map(i),this.server=!!t.isServer,!this.server&&Nt&&Pe&&(Pe=!1,ke(this)),de(this,function(){return function(s){for(var o=s.getTag(),a=o.length,c="",l=function(h){var d=function(v){return Mt.get(v)}(h);if(d===void 0)return"continue";var p=s.names.get(d),g=o.getGroup(h);if(p===void 0||!p.size||g.length===0)return"continue";var k="".concat(rt,".g").concat(h,'[id="').concat(d,'"]'),S="";p!==void 0&&p.forEach(function(v){v.length>0&&(S+="".concat(v,","))}),c+="".concat(g).concat(k,'{content:"').concat(S,'"}').concat(le)},u=0;u<a;u++)l(u);return c}(n)})}return e.registerId=function(t){return kt(t)},e.prototype.rehydrate=function(){!this.server&&Nt&&ke(this)},e.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(M(M({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(r){var i=r.useCSSOMInjection,n=r.target;return r.isServer?new ci(n):i?new oi(n):new ai(n)}(this.options),new Qr(t)));var t},e.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},e.prototype.registerName=function(t,r){if(kt(t),this.names.has(t))this.names.get(t).add(r);else{var i=new Set;i.add(r),this.names.set(t,i)}},e.prototype.insertRules=function(t,r,i){this.registerName(t,r),this.getTag().insertRules(kt(t),i)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(kt(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),ui=/&/g,di=/^\s*\/\/.*$/gm;function Je(e,t){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(i){return"".concat(t," ").concat(i)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=Je(r.children,t)),r})}function hi(e){var t,r,i,n=it,s=n.options,o=s===void 0?it:s,a=n.plugins,c=a===void 0?Wt:a,l=function(d,p,g){return g.startsWith(r)&&g.endsWith(r)&&g.replaceAll(r,"").length>0?".".concat(t):d},u=c.slice();u.push(function(d){d.type===Ot&&d.value.includes("&")&&(d.props[0]=d.props[0].replace(ui,r).replace(i,l))}),o.prefix&&u.push($r),u.push(Or);var h=function(d,p,g,k){p===void 0&&(p=""),g===void 0&&(g=""),k===void 0&&(k="&"),t=k,r=p,i=new RegExp("\\".concat(r,"\\b"),"g");var S=d.replace(di,""),v=Mr(g||p?"".concat(g," ").concat(p," { ").concat(S," }"):S);o.namespace&&(v=Je(v,o.namespace));var x=[];return At(v,Ir(u.concat(jr(function(P){return x.push(P)})))),x};return h.hash=c.length?c.reduce(function(d,p){return p.name||mt(15),J(d,p.name)},qe).toString():"",h}var pi=new Dt,ne=hi(),Qe=G.createContext({shouldForwardProp:void 0,styleSheet:pi,stylis:ne});Qe.Consumer;G.createContext(void 0);function se(){return _.useContext(Qe)}var fi=function(){function e(t,r){var i=this;this.inject=function(n,s){s===void 0&&(s=ne);var o=i.name+s.hash;n.hasNameForId(i.id,o)||n.insertRules(i.id,o,s(i.rules,o,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,de(this,function(){throw mt(12,String(i.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=ne),this.name+t.hash},e}(),mi=function(e){return e>="A"&&e<="Z"};function Ee(e){for(var t="",r=0;r<e.length;r++){var i=e[r];if(r===1&&i==="-"&&e[0]==="-")return e;mi(i)?t+="-"+i.toLowerCase():t+=i}return t.startsWith("ms-")?"-"+t:t}var tr=function(e){return e==null||e===!1||e===""},er=function(e){var t,r,i=[];for(var n in e){var s=e[n];e.hasOwnProperty(n)&&!tr(s)&&(Array.isArray(s)&&s.isCss||nt(s)?i.push("".concat(Ee(n),":"),s,";"):pt(s)?i.push.apply(i,ht(ht(["".concat(n," {")],er(s),!1),["}"],!1)):i.push("".concat(Ee(n),": ").concat((t=n,(r=s)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in Lr||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return i};function Y(e,t,r,i){if(tr(e))return[];if(ue(e))return[".".concat(e.styledComponentId)];if(nt(e)){if(!nt(s=e)||s.prototype&&s.prototype.isReactComponent||!t)return[e];var n=e(t);return Y(n,t,r,i)}var s;return e instanceof fi?r?(e.inject(r,i),[e.getName(i)]):[e]:pt(e)?er(e):Array.isArray(e)?Array.prototype.concat.apply(Wt,e.map(function(o){return Y(o,t,r,i)})):[e.toString()]}function rr(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(nt(r)&&!ue(r))return!1}return!0}var gi=He(Lt),yi=function(){function e(t,r,i){this.rules=t,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&rr(t),this.componentId=r,this.baseHash=J(gi,r),this.baseStyle=i,Dt.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,i){var n=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))n=X(n,this.staticRulesId);else{var s=re(Y(this.rules,t,r,i)),o=ee(J(this.baseHash,s)>>>0);if(!r.hasNameForId(this.componentId,o)){var a=i(s,".".concat(o),void 0,this.componentId);r.insertRules(this.componentId,o,a)}n=X(n,o),this.staticRulesId=o}else{for(var c=J(this.baseHash,i.hash),l="",u=0;u<this.rules.length;u++){var h=this.rules[u];if(typeof h=="string")l+=h;else if(h){var d=re(Y(h,t,r,i));c=J(c,d+u),l+=d}}if(l){var p=ee(c>>>0);r.hasNameForId(this.componentId,p)||r.insertRules(this.componentId,p,i(l,".".concat(p),void 0,this.componentId)),n=X(n,p)}}return n},e}(),he=G.createContext(void 0);he.Consumer;var Vt={};function bi(e,t,r){var i=ue(e),n=e,s=!Yt(e),o=t.attrs,a=o===void 0?Wt:o,c=t.componentId,l=c===void 0?function(m,f){var y=typeof m!="string"?"sc":ve(m);Vt[y]=(Vt[y]||0)+1;var b="".concat(y,"-").concat(Ye(Lt+y+Vt[y]));return f?"".concat(f,"-").concat(b):b}(t.displayName,t.parentComponentId):c,u=t.displayName,h=u===void 0?function(m){return Yt(m)?"styled.".concat(m):"Styled(".concat(qr(m),")")}(e):u,d=t.displayName&&t.componentId?"".concat(ve(t.displayName),"-").concat(t.componentId):t.componentId||l,p=i&&n.attrs?n.attrs.concat(a).filter(Boolean):a,g=t.shouldForwardProp;if(i&&n.shouldForwardProp){var k=n.shouldForwardProp;if(t.shouldForwardProp){var S=t.shouldForwardProp;g=function(m,f){return k(m,f)&&S(m,f)}}else g=k}var v=new yi(r,d,i?n.componentStyle:void 0);function x(m,f){return function(y,b,D){var I=y.attrs,W=y.componentStyle,gt=y.defaultProps,yt=y.foldedComponentIds,ur=y.styledComponentId,dr=y.target,hr=G.useContext(he),pr=se(),zt=y.shouldForwardProp||pr.shouldForwardProp,pe=Ge(b,hr,gt)||it,z=function(vt,at,xt){for(var ct,U=M(M({},at),{className:void 0,theme:xt}),Gt=0;Gt<vt.length;Gt+=1){var wt=nt(ct=vt[Gt])?ct(U):ct;for(var q in wt)U[q]=q==="className"?X(U[q],wt[q]):q==="style"?M(M({},U[q]),wt[q]):wt[q]}return at.className&&(U.className=X(U.className,at.className)),U}(I,b,pe),bt=z.as||dr,ot={};for(var F in z)z[F]===void 0||F[0]==="$"||F==="as"||F==="theme"&&z.theme===pe||(F==="forwardedAs"?ot.as=z.forwardedAs:zt&&!zt(F,bt)||(ot[F]=z[F]));var fe=function(vt,at){var xt=se(),ct=vt.generateAndInjectStyles(at,xt.styleSheet,xt.stylis);return ct}(W,z),Bt=X(yt,ur);return fe&&(Bt+=" "+fe),z.className&&(Bt+=" "+z.className),ot[Yt(bt)&&!Fe.has(bt)?"class":"className"]=Bt,D&&(ot.ref=D),_.createElement(bt,ot)}(P,m,f)}x.displayName=h;var P=G.forwardRef(x);return P.attrs=p,P.componentStyle=v,P.displayName=h,P.shouldForwardProp=g,P.foldedComponentIds=i?X(n.foldedComponentIds,n.styledComponentId):"",P.styledComponentId=d,P.target=i?n.target:e,Object.defineProperty(P,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(m){this._foldedDefaultProps=i?function(f){for(var y=[],b=1;b<arguments.length;b++)y[b-1]=arguments[b];for(var D=0,I=y;D<I.length;D++)ie(f,I[D],!0);return f}({},n.defaultProps,m):m}}),de(P,function(){return".".concat(P.styledComponentId)}),s&&Ke(P,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),P}function Re(e,t){for(var r=[e[0]],i=0,n=t.length;i<n;i+=1)r.push(t[i],e[i+1]);return r}var Te=function(e){return Object.assign(e,{isCss:!0})};function ir(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(nt(e)||pt(e))return Te(Y(Re(Wt,ht([e],t,!0))));var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?Y(i):Te(Y(Re(i,t)))}function oe(e,t,r){if(r===void 0&&(r=it),!t)throw mt(1,t);var i=function(n){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return e(t,r,ir.apply(void 0,ht([n],s,!1)))};return i.attrs=function(n){return oe(e,t,M(M({},r),{attrs:Array.prototype.concat(r.attrs,n).filter(Boolean)}))},i.withConfig=function(n){return oe(e,t,M(M({},r),n))},i}var nr=function(e){return oe(bi,e)},V=nr;Fe.forEach(function(e){V[e]=nr(e)});var vi=function(){function e(t,r){this.rules=t,this.componentId=r,this.isStatic=rr(t),Dt.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,r,i,n){var s=n(re(Y(this.rules,r,i,n)),""),o=this.componentId+t;i.insertRules(o,o,s)},e.prototype.removeStyles=function(t,r){r.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,r,i,n){t>2&&Dt.registerId(this.componentId+t),this.removeStyles(t,i),this.createStyles(t,r,i,n)},e}();function xi(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var i=ir.apply(void 0,ht([e],t,!1)),n="sc-global-".concat(Ye(JSON.stringify(i))),s=new vi(i,n),o=function(c){var l=se(),u=G.useContext(he),h=G.useRef(l.styleSheet.allocateGSInstance(n)).current;return l.styleSheet.server&&a(h,c,l.styleSheet,u,l.stylis),G.useLayoutEffect(function(){if(!l.styleSheet.server)return a(h,c,l.styleSheet,u,l.stylis),function(){return s.removeStyles(h,l.styleSheet)}},[h,c,l.styleSheet,u,l.stylis]),null};function a(c,l,u,h,d){if(s.isStatic)s.renderStyles(c,zr,u,d);else{var p=M(M({},l),{theme:Ge(l,h,o.defaultProps)});s.renderStyles(c,p,u,d)}}return G.memo(o)}const wi=V.div`
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
`,sr=_.memo(e=>{const t=_.useRef(null),[r,i]=_.useState(!1),[n,s]=_.useState(.5),[o,a]=_.useState(0),[c,l]=_.useState(v(0)),[u,h]=_.useState(!1),d=vr(t,e),p=_.useRef(null),{onPlay:g,onReady:k}=e,S=_.useCallback(()=>{d.playPause()},[d]);_.useEffect(()=>{if(!d)return;d.setVolume(n);const m=()=>({media:d.getMediaElement(),peaks:d.exportPeaks()}),f=[d.on("ready",()=>{k&&k(m()),a(v(Math.round(d.getDuration()*1e3))),i(d.isPlaying())}),d.on("play",()=>{g&&g(y=>{const b=m();return!y||y.media!==b.media?(y&&(y.media.pause(),y.media.currentTime=0),b):y}),i(!0)}),d.on("audioprocess",()=>{l(v(Math.round(d.getCurrentTime()*1e3)))}),d.on("pause",()=>i(!1))];return()=>{f.forEach(y=>y())}},[d,g,k,n]),_.useEffect(()=>{const m=p.current;m.style.setProperty("--value",m.value),m.style.setProperty("--min",m.min===""?"0":m.min),m.style.setProperty("--max",m.max===""?"100":m.max),m.style.setProperty("--value",m.value)},[]);function v(m){var f=Math.floor(m/6e4),y=(m%6e4/1e3).toFixed(0);return f+":"+(y<10?"0":"")+y}function x(m){s(m.target.value);const f=m.target;f.style.setProperty("--value",f.value),f.style.setProperty("--min",f.min===""?"0":f.min),f.style.setProperty("--max",f.max===""?"100":f.max),f.style.setProperty("--value",f.value)}function P(){h(!u)}return C.jsxs(wi,{children:[r?C.jsx("img",{className:"play-icon",src:"https://extras.thetimes.co.uk/web/2025/times-knife-crime-audio/assets/pause.png",onClick:S}):C.jsx("img",{className:"play-icon",src:"https://extras.thetimes.co.uk/web/2025/times-knife-crime-audio/assets/play.png",onClick:S}),C.jsx("div",{ref:t,style:{width:"100%"}}),C.jsxs("p",{className:"waveform-time",children:[C.jsx("span",{children:c})," / ",C.jsx("span",{children:o})]}),C.jsxs("div",{className:"volume-container",children:[C.jsx("img",{className:"volume-icon",src:"https://extras.thetimes.co.uk/web/2025/times-knife-crime-audio/assets/volume.png",onClick:P}),C.jsx("input",{ref:p,className:"styled-slider slider-progress",type:"range",id:"volume-slider",min:0,max:1,step:.1,value:n,onChange:x,style:{opacity:u?1:0,pointerEvents:u?"all":"none"}})]})]})});sr.__docgenInfo={description:"",methods:[],displayName:"Equalizer"};const or=xi`
  @font-face {
    font-family: "Times Modern";
    src: url("../lib/assets/fonts/TimesModernRegular.woff2") format("woff2");
    font-display: swap;
    font-style: normal;
    font-weight: 400;
  }

`,Si=V.div`
    font-family: 'RobotoRegular', sans-serif;
    font-size: 1.6rem;

    margin-block-start: 1em;
    margin-block-end: 100px;
`,Ci=V.div`
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
`;function ki({data:e}){return C.jsxs(C.Fragment,{children:[C.jsx(or,{}),C.jsxs(Ci,{children:[C.jsxs("div",{className:"card-image--container",children:[C.jsx("img",{src:`https://extras.thetimes.co.uk/web/2025/times-knife-crime-audio/assets/${e.imgSrc}.jpg`,className:"card-image"}),C.jsx("p",{className:"card-name",children:e.name})]}),C.jsx("p",{className:"card-quote",children:e.quote}),C.jsx(sr,{height:100,waveColor:"#ff0000",progressColor:"#940000",url:`https://extras.thetimes.co.uk/web/2025/times-knife-crime-audio/assets/${e.audioSrc}.m4a`,normalize:!0,barWidth:2,barGap:2,barRadius:2,cursorWidth:2},e.id)]})]})}ki.__docgenInfo={description:"",methods:[],displayName:"AudioPlayer"};var Ut={},Xt={},_e;function Pi(){return _e||(_e=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t;function r(n,s,o){return s in n?Object.defineProperty(n,s,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[s]=o,n}var i={digital:(t={blue:{r:37,g:66,b:81},yellow:{r:224,g:171,b:38},lightBlue:{r:224,g:171,b:38}},r(t,"yellow",{r:128,g:177,b:226}),r(t,"orange",{r:243,g:127,b:47}),r(t,"teal",{r:50,g:146,b:166}),r(t,"purple",{r:108,g:60,b:94}),r(t,"sand",{r:218,g:207,b:193}),t),ukPoliticalParties:{con:{r:64,g:147,b:178},lab:{r:236,g:81,b:86},libdem:{r:246,g:197,b:94},ukip:{r:151,g:103,b:174},snp:{r:255,g:246,b:133},green:{r:97,g:169,b:97},pc:{r:144,g:205,b:124},dup:{r:161,g:82,b:82},sf:{r:68,g:150,b:107},sdlp:{r:125,g:161,b:125},uup:{r:63,g:97,b:124},others:{r:160,g:147,b:143}}};e.default=i}(Xt)),Xt}var Kt={},Ae;function Ei(){return Ae||(Ae=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={micro:"400px",small:"520px",mobile:"768px",tablet:"1024px",desktop:"1200px","desktop-wide":"1320px"};e.default=t}(Kt)),Kt}var Ne;function Ri(){return Ne||(Ne=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"colors",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"breakpoints",{enumerable:!0,get:function(){return r.default}});var t=i(Pi()),r=i(Ei());function i(n){return n&&n.__esModule?n:{default:n}}}(Ut)),Ut}var Zt=Ri();const Ti=V.div`
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

    @media (min-width: ${Zt.breakpoints.mobile}) {
        padding-inline: 72.297px;
    }

    @media (min-width: ${Zt.breakpoints.tablet}) {
        padding-inline: 220.5px;
    }

    @media (min-width: ${Zt.breakpoints.desktop}) {
        padding-inline: 258.4px;
    }
`;function ar({headline:e,standfirst:t}){return C.jsxs(Ti,{children:[e&&C.jsx("h1",{className:"headline",children:e}),t&&C.jsx("p",{className:"standfirst",children:t})]})}ar.__docgenInfo={description:"",methods:[],displayName:"Header"};const _i=V.div`
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
`,Ai=V.img`
    width: 100%;
    height: 150px;

    object-fit: cover;
    cursor: pointer;

    // * CONDITIONAL STYLES
    opacity: ${e=>e.isHovered?"1":"0.5"};

    -webkit-filter: ${e=>e.grayscale?"grayscale(100%)":"none"};
    filter: ${e=>e.grayscale?"grayscale(100%)":"none"};

    transition: opacity 250ms ease-in;
`;function cr({data:e,clickedImage:t,setClickedImage:r,setShowTooltip:i,setTooltipPos:n}){function s(a,c){r(c),i(!0),n([a.clientX,a.target.offsetTop+a.target.offsetHeight-20])}const o=e.map(a=>C.jsx(Ai,{src:`https://nuk-tnl-editorial-prod-staticassets.s3.amazonaws.com/2024/times-image-grid/assets/${a.imgSrc}.jpg`,alt:a.name,grayscale:!1,lazy:!0,onClick:c=>s(c,a),isHovered:t===a},a.id));return C.jsx(_i,{children:o})}cr.__docgenInfo={description:"",methods:[],displayName:"Grid"};const Ni=V.div`
    position: absolute;
    left: 0px;
    top: ${e=>e.isImageInLastRow?e.tooltipPos[1]-380:e.tooltipPos[1]}px;

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

    opacity: ${e=>e.showTooltip?"1":"0"};
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
`;function lr({clickedImage:e,setClickedImage:t,tooltipPos:r,showTooltip:i,setShowTooltip:n,isImageInLastRow:s}){if(!e)return;function o(){n(!1),t(null)}return C.jsxs(Ni,{showTooltip:i,tooltipPos:r,isImageInLastRow:s,children:[C.jsx("img",{className:"tooltip-image",src:`https://nuk-tnl-editorial-prod-staticassets.s3.amazonaws.com/2024/times-image-grid/assets/${e.imgSrc}.jpg`,alt:e.name}),C.jsxs("div",{className:"tooltip-content",children:[C.jsx("h3",{children:e.name}),C.jsx("p",{children:e.copy})]}),C.jsx("button",{className:"tooltip-close",onClick:o,children:C.jsx("img",{src:"https://nuk-tnl-editorial-prod-staticassets.s3.amazonaws.com/2023/st-grid-jeremy-clarkson/assets/x.svg"})})]})}lr.__docgenInfo={description:"",methods:[],displayName:"Tooltip"};function Mi({data:e}){const[t,r]=_.useState(null),[i,n]=_.useState(!1),[s,o]=_.useState([0,0]);let c=e.length-e.indexOf(t)<=7;return C.jsxs(C.Fragment,{children:[C.jsx(or,{}),C.jsxs(Si,{children:[C.jsx(ar,{headline:"Lorem ipsum dolor sit amet",standfirst:"Nulla vel augue ut erat efficitur scelerisque id vel tellus. Ut iaculis nulla sit amet lorem rutrum, ac luctus sem imperdiet"}),C.jsx(cr,{data:e,clickedImage:t,setClickedImage:r,setShowTooltip:n,setTooltipPos:o}),C.jsx(lr,{clickedImage:t,setClickedImage:r,showTooltip:i,setShowTooltip:n,tooltipPos:s,isImageInLastRow:c})]})]})}Mi.__docgenInfo={description:"",methods:[],displayName:"ImageGrid"};export{ki as A,Mi as I,V as d};
