import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as w}from"./index-U0ga5oGA.js";import{d as T,G as N,C as Y,T as M,a as F}from"./index-BvmmDGMR.js";function E(t,e,i,s){return new(i||(i=Promise))(function(r,o){function n(d){try{c(s.next(d))}catch(h){o(h)}}function l(d){try{c(s.throw(d))}catch(h){o(h)}}function c(d){var h;d.done?r(d.value):(h=d.value,h instanceof i?h:new i(function(p){p(h)})).then(n,l)}c((s=s.apply(t,e||[])).next())})}class z{constructor(){this.listeners={}}on(e,i,s){if(this.listeners[e]||(this.listeners[e]=new Set),this.listeners[e].add(i),s==null?void 0:s.once){const r=()=>{this.un(e,r),this.un(e,i)};return this.on(e,r),r}return()=>this.un(e,i)}un(e,i){var s;(s=this.listeners[e])===null||s===void 0||s.delete(i)}once(e,i){return this.on(e,i,{once:!0})}unAll(){this.listeners={}}emit(e,...i){this.listeners[e]&&this.listeners[e].forEach(s=>s(...i))}}const W={decode:function(t,e){return E(this,void 0,void 0,function*(){const i=new AudioContext({sampleRate:e});return i.decodeAudioData(t).finally(()=>i.close())})},createBuffer:function(t,e){return typeof t[0]=="number"&&(t=[t]),function(i){const s=i[0];if(s.some(r=>r>1||r<-1)){const r=s.length;let o=0;for(let n=0;n<r;n++){const l=Math.abs(s[n]);l>o&&(o=l)}for(const n of i)for(let l=0;l<r;l++)n[l]/=o}}(t),{duration:e,length:t[0].length,sampleRate:t[0].length/e,numberOfChannels:t.length,getChannelData:i=>t==null?void 0:t[i],copyFromChannel:AudioBuffer.prototype.copyFromChannel,copyToChannel:AudioBuffer.prototype.copyToChannel}}};function H(t,e){const i=e.xmlns?document.createElementNS(e.xmlns,t):document.createElement(t);for(const[s,r]of Object.entries(e))if(s==="children")for(const[o,n]of Object.entries(e))typeof n=="string"?i.appendChild(document.createTextNode(n)):i.appendChild(H(o,n));else s==="style"?Object.assign(i.style,r):s==="textContent"?i.textContent=r:i.setAttribute(s,r.toString());return i}function _(t,e,i){const s=H(t,e||{});return i==null||i.appendChild(s),s}var K=Object.freeze({__proto__:null,createElement:_,default:_});const Z={fetchBlob:function(t,e,i){return E(this,void 0,void 0,function*(){const s=yield fetch(t,i);if(s.status>=400)throw new Error(`Failed to fetch ${t}: ${s.status} (${s.statusText})`);return function(r,o){E(this,void 0,void 0,function*(){if(!r.body||!r.headers)return;const n=r.body.getReader(),l=Number(r.headers.get("Content-Length"))||0;let c=0;const d=p=>E(this,void 0,void 0,function*(){c+=(p==null?void 0:p.length)||0;const u=Math.round(c/l*100);o(u)}),h=()=>E(this,void 0,void 0,function*(){let p;try{p=yield n.read()}catch{return}p.done||(d(p.value),yield h())});h()})}(s.clone(),e),s.blob()})}};class J extends z{constructor(e){super(),this.isExternalMedia=!1,e.media?(this.media=e.media,this.isExternalMedia=!0):this.media=document.createElement("audio"),e.mediaControls&&(this.media.controls=!0),e.autoplay&&(this.media.autoplay=!0),e.playbackRate!=null&&this.onMediaEvent("canplay",()=>{e.playbackRate!=null&&(this.media.playbackRate=e.playbackRate)},{once:!0})}onMediaEvent(e,i,s){return this.media.addEventListener(e,i,s),()=>this.media.removeEventListener(e,i,s)}getSrc(){return this.media.currentSrc||this.media.src||""}revokeSrc(){const e=this.getSrc();e.startsWith("blob:")&&URL.revokeObjectURL(e)}canPlayType(e){return this.media.canPlayType(e)!==""}setSrc(e,i){const s=this.getSrc();if(e&&s===e)return;this.revokeSrc();const r=i instanceof Blob&&(this.canPlayType(i.type)||!e)?URL.createObjectURL(i):e;s&&(this.media.src="");try{this.media.src=r}catch{this.media.src=e}}destroy(){this.isExternalMedia||(this.media.pause(),this.media.remove(),this.revokeSrc(),this.media.src="",this.media.load())}setMediaElement(e){this.media=e}play(){return E(this,void 0,void 0,function*(){return this.media.play()})}pause(){this.media.pause()}isPlaying(){return!this.media.paused&&!this.media.ended}setTime(e){this.media.currentTime=Math.max(0,Math.min(e,this.getDuration()))}getDuration(){return this.media.duration}getCurrentTime(){return this.media.currentTime}getVolume(){return this.media.volume}setVolume(e){this.media.volume=e}getMuted(){return this.media.muted}setMuted(e){this.media.muted=e}getPlaybackRate(){return this.media.playbackRate}isSeeking(){return this.media.seeking}setPlaybackRate(e,i){i!=null&&(this.media.preservesPitch=i),this.media.playbackRate=e}getMediaElement(){return this.media}setSinkId(e){return this.media.setSinkId(e)}}class D extends z{constructor(e,i){super(),this.timeouts=[],this.isScrollable=!1,this.audioData=null,this.resizeObserver=null,this.lastContainerWidth=0,this.isDragging=!1,this.subscriptions=[],this.unsubscribeOnScroll=[],this.subscriptions=[],this.options=e;const s=this.parentFromOptionsContainer(e.container);this.parent=s;const[r,o]=this.initHtml();s.appendChild(r),this.container=r,this.scrollContainer=o.querySelector(".scroll"),this.wrapper=o.querySelector(".wrapper"),this.canvasWrapper=o.querySelector(".canvases"),this.progressWrapper=o.querySelector(".progress"),this.cursor=o.querySelector(".cursor"),i&&o.appendChild(i),this.initEvents()}parentFromOptionsContainer(e){let i;if(typeof e=="string"?i=document.querySelector(e):e instanceof HTMLElement&&(i=e),!i)throw new Error("Container not found");return i}initEvents(){const e=i=>{const s=this.wrapper.getBoundingClientRect(),r=i.clientX-s.left,o=i.clientY-s.top;return[r/s.width,o/s.height]};if(this.wrapper.addEventListener("click",i=>{const[s,r]=e(i);this.emit("click",s,r)}),this.wrapper.addEventListener("dblclick",i=>{const[s,r]=e(i);this.emit("dblclick",s,r)}),this.options.dragToSeek!==!0&&typeof this.options.dragToSeek!="object"||this.initDrag(),this.scrollContainer.addEventListener("scroll",()=>{const{scrollLeft:i,scrollWidth:s,clientWidth:r}=this.scrollContainer,o=i/s,n=(i+r)/s;this.emit("scroll",o,n,i,i+r)}),typeof ResizeObserver=="function"){const i=this.createDelay(100);this.resizeObserver=new ResizeObserver(()=>{i().then(()=>this.onContainerResize()).catch(()=>{})}),this.resizeObserver.observe(this.scrollContainer)}}onContainerResize(){const e=this.parent.clientWidth;e===this.lastContainerWidth&&this.options.height!=="auto"||(this.lastContainerWidth=e,this.reRender())}initDrag(){this.subscriptions.push(function(e,i,s,r,o=3,n=0,l=100){if(!e)return()=>{};const c=matchMedia("(pointer: coarse)").matches;let d=()=>{};const h=p=>{if(p.button!==n)return;p.preventDefault(),p.stopPropagation();let u=p.clientX,m=p.clientY,b=!1;const j=Date.now(),v=f=>{if(f.preventDefault(),f.stopPropagation(),c&&Date.now()-j<l)return;const $=f.clientX,g=f.clientY,k=$-u,C=g-m;if(b||Math.abs(k)>o||Math.abs(C)>o){const R=e.getBoundingClientRect(),{left:I,top:O}=R;b||(s==null||s(u-I,m-O),b=!0),i(k,C,$-I,g-O),u=$,m=g}},x=f=>{if(b){const $=f.clientX,g=f.clientY,k=e.getBoundingClientRect(),{left:C,top:R}=k;r==null||r($-C,g-R)}d()},S=f=>{f.relatedTarget&&f.relatedTarget!==document.documentElement||x(f)},P=f=>{b&&(f.stopPropagation(),f.preventDefault())},y=f=>{b&&f.preventDefault()};document.addEventListener("pointermove",v),document.addEventListener("pointerup",x),document.addEventListener("pointerout",S),document.addEventListener("pointercancel",S),document.addEventListener("touchmove",y,{passive:!1}),document.addEventListener("click",P,{capture:!0}),d=()=>{document.removeEventListener("pointermove",v),document.removeEventListener("pointerup",x),document.removeEventListener("pointerout",S),document.removeEventListener("pointercancel",S),document.removeEventListener("touchmove",y),setTimeout(()=>{document.removeEventListener("click",P,{capture:!0})},10)}};return e.addEventListener("pointerdown",h),()=>{d(),e.removeEventListener("pointerdown",h)}}(this.wrapper,(e,i,s)=>{this.emit("drag",Math.max(0,Math.min(1,s/this.wrapper.getBoundingClientRect().width)))},e=>{this.isDragging=!0,this.emit("dragstart",Math.max(0,Math.min(1,e/this.wrapper.getBoundingClientRect().width)))},e=>{this.isDragging=!1,this.emit("dragend",Math.max(0,Math.min(1,e/this.wrapper.getBoundingClientRect().width)))}))}getHeight(e,i){var s;const r=((s=this.audioData)===null||s===void 0?void 0:s.numberOfChannels)||1;if(e==null)return 128;if(!isNaN(Number(e)))return Number(e);if(e==="auto"){const o=this.parent.clientHeight||128;return i!=null&&i.every(n=>!n.overlay)?o/r:o}return 128}initHtml(){const e=document.createElement("div"),i=e.attachShadow({mode:"open"}),s=this.options.cspNonce&&typeof this.options.cspNonce=="string"?this.options.cspNonce.replace(/"/g,""):"";return i.innerHTML=`
      <style${s?` nonce="${s}"`:""}>
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
    `,[e,i]}setOptions(e){if(this.options.container!==e.container){const i=this.parentFromOptionsContainer(e.container);i.appendChild(this.container),this.parent=i}e.dragToSeek!==!0&&typeof this.options.dragToSeek!="object"||this.initDrag(),this.options=e,this.reRender()}getWrapper(){return this.wrapper}getWidth(){return this.scrollContainer.clientWidth}getScroll(){return this.scrollContainer.scrollLeft}setScroll(e){this.scrollContainer.scrollLeft=e}setScrollPercentage(e){const{scrollWidth:i}=this.scrollContainer,s=i*e;this.setScroll(s)}destroy(){var e,i;this.subscriptions.forEach(s=>s()),this.container.remove(),(e=this.resizeObserver)===null||e===void 0||e.disconnect(),(i=this.unsubscribeOnScroll)===null||i===void 0||i.forEach(s=>s()),this.unsubscribeOnScroll=[]}createDelay(e=10){let i,s;const r=()=>{i&&clearTimeout(i),s&&s()};return this.timeouts.push(r),()=>new Promise((o,n)=>{r(),s=n,i=setTimeout(()=>{i=void 0,s=void 0,o()},e)})}convertColorValues(e){if(!Array.isArray(e))return e||"";if(e.length<2)return e[0]||"";const i=document.createElement("canvas"),s=i.getContext("2d"),r=i.height*(window.devicePixelRatio||1),o=s.createLinearGradient(0,0,0,r),n=1/(e.length-1);return e.forEach((l,c)=>{const d=c*n;o.addColorStop(d,l)}),o}getPixelRatio(){return Math.max(1,window.devicePixelRatio||1)}renderBarWaveform(e,i,s,r){const o=e[0],n=e[1]||e[0],l=o.length,{width:c,height:d}=s.canvas,h=d/2,p=this.getPixelRatio(),u=i.barWidth?i.barWidth*p:1,m=i.barGap?i.barGap*p:i.barWidth?u/2:0,b=i.barRadius||0,j=c/(u+m)/l,v=b&&"roundRect"in s?"roundRect":"rect";s.beginPath();let x=0,S=0,P=0;for(let y=0;y<=l;y++){const f=Math.round(y*j);if(f>x){const k=Math.round(S*h*r),C=k+Math.round(P*h*r)||1;let R=h-k;i.barAlign==="top"?R=0:i.barAlign==="bottom"&&(R=d-C),s[v](x*(u+m),R,u,C,b),x=f,S=0,P=0}const $=Math.abs(o[y]||0),g=Math.abs(n[y]||0);$>S&&(S=$),g>P&&(P=g)}s.fill(),s.closePath()}renderLineWaveform(e,i,s,r){const o=n=>{const l=e[n]||e[0],c=l.length,{height:d}=s.canvas,h=d/2,p=s.canvas.width/c;s.moveTo(0,h);let u=0,m=0;for(let b=0;b<=c;b++){const j=Math.round(b*p);if(j>u){const x=h+(Math.round(m*h*r)||1)*(n===0?-1:1);s.lineTo(u,x),u=j,m=0}const v=Math.abs(l[b]||0);v>m&&(m=v)}s.lineTo(u,h)};s.beginPath(),o(0),o(1),s.fill(),s.closePath()}renderWaveform(e,i,s){if(s.fillStyle=this.convertColorValues(i.waveColor),i.renderFunction)return void i.renderFunction(e,s);let r=i.barHeight||1;if(i.normalize){const o=Array.from(e[0]).reduce((n,l)=>Math.max(n,Math.abs(l)),0);r=o?1/o:1}i.barWidth||i.barGap||i.barAlign?this.renderBarWaveform(e,i,s,r):this.renderLineWaveform(e,i,s,r)}renderSingleCanvas(e,i,s,r,o,n,l){const c=this.getPixelRatio(),d=document.createElement("canvas");d.width=Math.round(s*c),d.height=Math.round(r*c),d.style.width=`${s}px`,d.style.height=`${r}px`,d.style.left=`${Math.round(o)}px`,n.appendChild(d);const h=d.getContext("2d");if(this.renderWaveform(e,i,h),d.width>0&&d.height>0){const p=d.cloneNode(),u=p.getContext("2d");u.drawImage(d,0,0),u.globalCompositeOperation="source-in",u.fillStyle=this.convertColorValues(i.progressColor),u.fillRect(0,0,d.width,d.height),l.appendChild(p)}}renderMultiCanvas(e,i,s,r,o,n){const l=this.getPixelRatio(),{clientWidth:c}=this.scrollContainer,d=s/l;let h=Math.min(D.MAX_CANVAS_WIDTH,c,d),p={};if(h===0)return;if(i.barWidth||i.barGap){const v=i.barWidth||.5,x=v+(i.barGap||v/2);h%x!=0&&(h=Math.floor(h/x)*x)}const u=v=>{if(v<0||v>=m||p[v])return;p[v]=!0;const x=v*h,S=Math.min(d-x,h);if(S<=0)return;const P=e.map(y=>{const f=Math.floor(x/d*y.length),$=Math.floor((x+S)/d*y.length);return y.slice(f,$)});this.renderSingleCanvas(P,i,S,r,x,o,n)},m=Math.ceil(d/h);if(!this.isScrollable){for(let v=0;v<m;v++)u(v);return}const b=this.scrollContainer.scrollLeft/d,j=Math.floor(b*m);if(u(j-1),u(j),u(j+1),m>1){const v=this.on("scroll",()=>{const{scrollLeft:x}=this.scrollContainer,S=Math.floor(x/d*m);Object.keys(p).length>D.MAX_NODES&&(o.innerHTML="",n.innerHTML="",p={}),u(S-1),u(S),u(S+1)});this.unsubscribeOnScroll.push(v)}}renderChannel(e,i,s,r){var{overlay:o}=i,n=function(h,p){var u={};for(var m in h)Object.prototype.hasOwnProperty.call(h,m)&&p.indexOf(m)<0&&(u[m]=h[m]);if(h!=null&&typeof Object.getOwnPropertySymbols=="function"){var b=0;for(m=Object.getOwnPropertySymbols(h);b<m.length;b++)p.indexOf(m[b])<0&&Object.prototype.propertyIsEnumerable.call(h,m[b])&&(u[m[b]]=h[m[b]])}return u}(i,["overlay"]);const l=document.createElement("div"),c=this.getHeight(n.height,n.splitChannels);l.style.height=`${c}px`,o&&r>0&&(l.style.marginTop=`-${c}px`),this.canvasWrapper.style.minHeight=`${c}px`,this.canvasWrapper.appendChild(l);const d=l.cloneNode();this.progressWrapper.appendChild(d),this.renderMultiCanvas(e,n,s,c,l,d)}render(e){return E(this,void 0,void 0,function*(){var i;this.timeouts.forEach(c=>c()),this.timeouts=[],this.canvasWrapper.innerHTML="",this.progressWrapper.innerHTML="",this.options.width!=null&&(this.scrollContainer.style.width=typeof this.options.width=="number"?`${this.options.width}px`:this.options.width);const s=this.getPixelRatio(),r=this.scrollContainer.clientWidth,o=Math.ceil(e.duration*(this.options.minPxPerSec||0));this.isScrollable=o>r;const n=this.options.fillParent&&!this.isScrollable,l=(n?r:o)*s;if(this.wrapper.style.width=n?"100%":`${o}px`,this.scrollContainer.style.overflowX=this.isScrollable?"auto":"hidden",this.scrollContainer.classList.toggle("noScrollbar",!!this.options.hideScrollbar),this.cursor.style.backgroundColor=`${this.options.cursorColor||this.options.progressColor}`,this.cursor.style.width=`${this.options.cursorWidth}px`,this.audioData=e,this.emit("render"),this.options.splitChannels)for(let c=0;c<e.numberOfChannels;c++){const d=Object.assign(Object.assign({},this.options),(i=this.options.splitChannels)===null||i===void 0?void 0:i[c]);this.renderChannel([e.getChannelData(c)],d,l,c)}else{const c=[e.getChannelData(0)];e.numberOfChannels>1&&c.push(e.getChannelData(1)),this.renderChannel(c,this.options,l,0)}Promise.resolve().then(()=>this.emit("rendered"))})}reRender(){if(this.unsubscribeOnScroll.forEach(s=>s()),this.unsubscribeOnScroll=[],!this.audioData)return;const{scrollWidth:e}=this.scrollContainer,{right:i}=this.progressWrapper.getBoundingClientRect();if(this.render(this.audioData),this.isScrollable&&e!==this.scrollContainer.scrollWidth){const{right:s}=this.progressWrapper.getBoundingClientRect();let r=s-i;r*=2,r=r<0?Math.floor(r):Math.ceil(r),r/=2,this.scrollContainer.scrollLeft+=r}}zoom(e){this.options.minPxPerSec=e,this.reRender()}scrollIntoView(e,i=!1){const{scrollLeft:s,scrollWidth:r,clientWidth:o}=this.scrollContainer,n=e*r,l=s,c=s+o,d=o/2;if(this.isDragging)n+30>c?this.scrollContainer.scrollLeft+=30:n-30<l&&(this.scrollContainer.scrollLeft-=30);else{(n<l||n>c)&&(this.scrollContainer.scrollLeft=n-(this.options.autoCenter?d:0));const h=n-s-d;i&&this.options.autoCenter&&h>0&&(this.scrollContainer.scrollLeft+=Math.min(h,10))}{const h=this.scrollContainer.scrollLeft,p=h/r,u=(h+o)/r;this.emit("scroll",p,u,h,h+o)}}renderProgress(e,i){if(isNaN(e))return;const s=100*e;this.canvasWrapper.style.clipPath=`polygon(${s}% 0, 100% 0, 100% 100%, ${s}% 100%)`,this.progressWrapper.style.width=`${s}%`,this.cursor.style.left=`${s}%`,this.cursor.style.transform=`translateX(-${Math.round(s)===100?this.options.cursorWidth:0}px)`,this.isScrollable&&this.options.autoScroll&&this.scrollIntoView(e,i)}exportImage(e,i,s){return E(this,void 0,void 0,function*(){const r=this.canvasWrapper.querySelectorAll("canvas");if(!r.length)throw new Error("No waveform data");if(s==="dataURL"){const o=Array.from(r).map(n=>n.toDataURL(e,i));return Promise.resolve(o)}return Promise.all(Array.from(r).map(o=>new Promise((n,l)=>{o.toBlob(c=>{c?n(c):l(new Error("Could not export image"))},e,i)})))})}}D.MAX_CANVAS_WIDTH=8e3,D.MAX_NODES=10;class Q extends z{constructor(){super(...arguments),this.unsubscribe=()=>{}}start(){this.unsubscribe=this.on("tick",()=>{requestAnimationFrame(()=>{this.emit("tick")})}),this.emit("tick")}stop(){this.unsubscribe()}destroy(){this.unsubscribe()}}class A extends z{constructor(e=new AudioContext){super(),this.bufferNode=null,this.playStartTime=0,this.playedDuration=0,this._muted=!1,this._playbackRate=1,this._duration=void 0,this.buffer=null,this.currentSrc="",this.paused=!0,this.crossOrigin=null,this.seeking=!1,this.autoplay=!1,this.addEventListener=this.on,this.removeEventListener=this.un,this.audioContext=e,this.gainNode=this.audioContext.createGain(),this.gainNode.connect(this.audioContext.destination)}load(){return E(this,void 0,void 0,function*(){})}get src(){return this.currentSrc}set src(e){if(this.currentSrc=e,this._duration=void 0,!e)return this.buffer=null,void this.emit("emptied");fetch(e).then(i=>{if(i.status>=400)throw new Error(`Failed to fetch ${e}: ${i.status} (${i.statusText})`);return i.arrayBuffer()}).then(i=>this.currentSrc!==e?null:this.audioContext.decodeAudioData(i)).then(i=>{this.currentSrc===e&&(this.buffer=i,this.emit("loadedmetadata"),this.emit("canplay"),this.autoplay&&this.play())})}_play(){var e;if(!this.paused)return;this.paused=!1,(e=this.bufferNode)===null||e===void 0||e.disconnect(),this.bufferNode=this.audioContext.createBufferSource(),this.buffer&&(this.bufferNode.buffer=this.buffer),this.bufferNode.playbackRate.value=this._playbackRate,this.bufferNode.connect(this.gainNode);let i=this.playedDuration*this._playbackRate;(i>=this.duration||i<0)&&(i=0,this.playedDuration=0),this.bufferNode.start(this.audioContext.currentTime,i),this.playStartTime=this.audioContext.currentTime,this.bufferNode.onended=()=>{this.currentTime>=this.duration&&(this.pause(),this.emit("ended"))}}_pause(){var e;this.paused=!0,(e=this.bufferNode)===null||e===void 0||e.stop(),this.playedDuration+=this.audioContext.currentTime-this.playStartTime}play(){return E(this,void 0,void 0,function*(){this.paused&&(this._play(),this.emit("play"))})}pause(){this.paused||(this._pause(),this.emit("pause"))}stopAt(e){const i=e-this.currentTime,s=this.bufferNode;s==null||s.stop(this.audioContext.currentTime+i),s==null||s.addEventListener("ended",()=>{s===this.bufferNode&&(this.bufferNode=null,this.pause())},{once:!0})}setSinkId(e){return E(this,void 0,void 0,function*(){return this.audioContext.setSinkId(e)})}get playbackRate(){return this._playbackRate}set playbackRate(e){this._playbackRate=e,this.bufferNode&&(this.bufferNode.playbackRate.value=e)}get currentTime(){return(this.paused?this.playedDuration:this.playedDuration+(this.audioContext.currentTime-this.playStartTime))*this._playbackRate}set currentTime(e){const i=!this.paused;i&&this._pause(),this.playedDuration=e/this._playbackRate,i&&this._play(),this.emit("seeking"),this.emit("timeupdate")}get duration(){var e,i;return(e=this._duration)!==null&&e!==void 0?e:((i=this.buffer)===null||i===void 0?void 0:i.duration)||0}set duration(e){this._duration=e}get volume(){return this.gainNode.gain.value}set volume(e){this.gainNode.gain.value=e,this.emit("volumechange")}get muted(){return this._muted}set muted(e){this._muted!==e&&(this._muted=e,this._muted?this.gainNode.disconnect():this.gainNode.connect(this.audioContext.destination))}canPlayType(e){return/^(audio|video)\//.test(e)}getGainNode(){return this.gainNode}getChannelData(){const e=[];if(!this.buffer)return e;const i=this.buffer.numberOfChannels;for(let s=0;s<i;s++)e.push(this.buffer.getChannelData(s));return e}}const ee={waveColor:"#999",progressColor:"#555",cursorWidth:1,minPxPerSec:0,fillParent:!0,interact:!0,dragToSeek:!1,autoScroll:!0,autoCenter:!0,sampleRate:8e3};class L extends J{static create(e){return new L(e)}constructor(e){const i=e.media||(e.backend==="WebAudio"?new A:void 0);super({media:i,mediaControls:e.mediaControls,autoplay:e.autoplay,playbackRate:e.audioRate}),this.plugins=[],this.decodedData=null,this.stopAtPosition=null,this.subscriptions=[],this.mediaSubscriptions=[],this.abortController=null,this.options=Object.assign({},ee,e),this.timer=new Q;const s=i?void 0:this.getMediaElement();this.renderer=new D(this.options,s),this.initPlayerEvents(),this.initRendererEvents(),this.initTimerEvents(),this.initPlugins();const r=this.options.url||this.getSrc()||"";Promise.resolve().then(()=>{this.emit("init");const{peaks:o,duration:n}=this.options;(r||o&&n)&&this.load(r,o,n).catch(()=>null)})}updateProgress(e=this.getCurrentTime()){return this.renderer.renderProgress(e/this.getDuration(),this.isPlaying()),e}initTimerEvents(){this.subscriptions.push(this.timer.on("tick",()=>{if(!this.isSeeking()){const e=this.updateProgress();this.emit("timeupdate",e),this.emit("audioprocess",e),this.stopAtPosition!=null&&this.isPlaying()&&e>=this.stopAtPosition&&this.pause()}}))}initPlayerEvents(){this.isPlaying()&&(this.emit("play"),this.timer.start()),this.mediaSubscriptions.push(this.onMediaEvent("timeupdate",()=>{const e=this.updateProgress();this.emit("timeupdate",e)}),this.onMediaEvent("play",()=>{this.emit("play"),this.timer.start()}),this.onMediaEvent("pause",()=>{this.emit("pause"),this.timer.stop(),this.stopAtPosition=null}),this.onMediaEvent("emptied",()=>{this.timer.stop(),this.stopAtPosition=null}),this.onMediaEvent("ended",()=>{this.emit("timeupdate",this.getDuration()),this.emit("finish"),this.stopAtPosition=null}),this.onMediaEvent("seeking",()=>{this.emit("seeking",this.getCurrentTime())}),this.onMediaEvent("error",()=>{var e;this.emit("error",(e=this.getMediaElement().error)!==null&&e!==void 0?e:new Error("Media error")),this.stopAtPosition=null}))}initRendererEvents(){this.subscriptions.push(this.renderer.on("click",(e,i)=>{this.options.interact&&(this.seekTo(e),this.emit("interaction",e*this.getDuration()),this.emit("click",e,i))}),this.renderer.on("dblclick",(e,i)=>{this.emit("dblclick",e,i)}),this.renderer.on("scroll",(e,i,s,r)=>{const o=this.getDuration();this.emit("scroll",e*o,i*o,s,r)}),this.renderer.on("render",()=>{this.emit("redraw")}),this.renderer.on("rendered",()=>{this.emit("redrawcomplete")}),this.renderer.on("dragstart",e=>{this.emit("dragstart",e)}),this.renderer.on("dragend",e=>{this.emit("dragend",e)}));{let e;this.subscriptions.push(this.renderer.on("drag",i=>{if(!this.options.interact)return;let s;this.renderer.renderProgress(i),clearTimeout(e),this.isPlaying()?s=0:this.options.dragToSeek===!0?s=200:typeof this.options.dragToSeek=="object"&&this.options.dragToSeek!==void 0&&(s=this.options.dragToSeek.debounceTime),e=setTimeout(()=>{this.seekTo(i)},s),this.emit("interaction",i*this.getDuration()),this.emit("drag",i)}))}}initPlugins(){var e;!((e=this.options.plugins)===null||e===void 0)&&e.length&&this.options.plugins.forEach(i=>{this.registerPlugin(i)})}unsubscribePlayerEvents(){this.mediaSubscriptions.forEach(e=>e()),this.mediaSubscriptions=[]}setOptions(e){this.options=Object.assign({},this.options,e),e.duration&&!e.peaks&&(this.decodedData=W.createBuffer(this.exportPeaks(),e.duration)),e.peaks&&e.duration&&(this.decodedData=W.createBuffer(e.peaks,e.duration)),this.renderer.setOptions(this.options),e.audioRate&&this.setPlaybackRate(e.audioRate),e.mediaControls!=null&&(this.getMediaElement().controls=e.mediaControls)}registerPlugin(e){return e._init(this),this.plugins.push(e),this.subscriptions.push(e.once("destroy",()=>{this.plugins=this.plugins.filter(i=>i!==e)})),e}getWrapper(){return this.renderer.getWrapper()}getWidth(){return this.renderer.getWidth()}getScroll(){return this.renderer.getScroll()}setScroll(e){return this.renderer.setScroll(e)}setScrollTime(e){const i=e/this.getDuration();this.renderer.setScrollPercentage(i)}getActivePlugins(){return this.plugins}loadAudio(e,i,s,r){return E(this,void 0,void 0,function*(){var o;if(this.emit("load",e),!this.options.media&&this.isPlaying()&&this.pause(),this.decodedData=null,this.stopAtPosition=null,!i&&!s){const l=this.options.fetchParams||{};window.AbortController&&!l.signal&&(this.abortController=new AbortController,l.signal=(o=this.abortController)===null||o===void 0?void 0:o.signal);const c=h=>this.emit("loading",h);i=yield Z.fetchBlob(e,c,l);const d=this.options.blobMimeType;d&&(i=new Blob([i],{type:d}))}this.setSrc(e,i);const n=yield new Promise(l=>{const c=r||this.getDuration();c?l(c):this.mediaSubscriptions.push(this.onMediaEvent("loadedmetadata",()=>l(this.getDuration()),{once:!0}))});if(!e&&!i){const l=this.getMediaElement();l instanceof A&&(l.duration=n)}if(s)this.decodedData=W.createBuffer(s,n||0);else if(i){const l=yield i.arrayBuffer();this.decodedData=yield W.decode(l,this.options.sampleRate)}this.decodedData&&(this.emit("decode",this.getDuration()),this.renderer.render(this.decodedData)),this.emit("ready",this.getDuration())})}load(e,i,s){return E(this,void 0,void 0,function*(){try{return yield this.loadAudio(e,void 0,i,s)}catch(r){throw this.emit("error",r),r}})}loadBlob(e,i,s){return E(this,void 0,void 0,function*(){try{return yield this.loadAudio("",e,i,s)}catch(r){throw this.emit("error",r),r}})}zoom(e){if(!this.decodedData)throw new Error("No audio loaded");this.renderer.zoom(e),this.emit("zoom",e)}getDecodedData(){return this.decodedData}exportPeaks({channels:e=2,maxLength:i=8e3,precision:s=1e4}={}){if(!this.decodedData)throw new Error("The audio has not been decoded yet");const r=Math.min(e,this.decodedData.numberOfChannels),o=[];for(let n=0;n<r;n++){const l=this.decodedData.getChannelData(n),c=[],d=l.length/i;for(let h=0;h<i;h++){const p=l.slice(Math.floor(h*d),Math.ceil((h+1)*d));let u=0;for(let m=0;m<p.length;m++){const b=p[m];Math.abs(b)>Math.abs(u)&&(u=b)}c.push(Math.round(u*s)/s)}o.push(c)}return o}getDuration(){let e=super.getDuration()||0;return e!==0&&e!==1/0||!this.decodedData||(e=this.decodedData.duration),e}toggleInteraction(e){this.options.interact=e}setTime(e){this.stopAtPosition=null,super.setTime(e),this.updateProgress(e),this.emit("timeupdate",e)}seekTo(e){const i=this.getDuration()*e;this.setTime(i)}play(e,i){const s=Object.create(null,{play:{get:()=>super.play}});return E(this,void 0,void 0,function*(){e!=null&&this.setTime(e);const r=yield s.play.call(this);return i!=null&&(this.media instanceof A?this.media.stopAt(i):this.stopAtPosition=i),r})}playPause(){return E(this,void 0,void 0,function*(){return this.isPlaying()?this.pause():this.play()})}stop(){this.pause(),this.setTime(0)}skip(e){this.setTime(this.getCurrentTime()+e)}empty(){this.load("",[[0]],.001)}setMediaElement(e){this.unsubscribePlayerEvents(),super.setMediaElement(e),this.initPlayerEvents()}exportImage(){return E(this,arguments,void 0,function*(e="image/png",i=1,s="dataURL"){return this.renderer.exportImage(e,i,s)})}destroy(){var e;this.emit("destroy"),(e=this.abortController)===null||e===void 0||e.abort(),this.plugins.forEach(i=>i.destroy()),this.subscriptions.forEach(i=>i()),this.unsubscribePlayerEvents(),this.timer.destroy(),this.renderer.destroy(),super.destroy()}}L.BasePlugin=class extends z{constructor(t){super(),this.subscriptions=[],this.options=t}onInit(){}_init(t){this.wavesurfer=t,this.onInit()}destroy(){this.emit("destroy"),this.subscriptions.forEach(t=>t())}},L.dom=K;const te=(t,e)=>{const[i,s]=w.useState(null);return w.useEffect(()=>{if(!t.current)return;const r=L.create({...e,container:t.current});return s(r),()=>{r.destroy()}},[e,t]),i},ie=T.div`
    display: grid;
    grid-template-columns: max-content 1fr;
    gap: ${t=>t.theme.utils.spacing("2")};
    width: 100%;

    justify-content: center;
    align-items: center;

    .waveform-time {
        margin-top: 0 !important;
        margin-block-start: 0;
        margin-block-end: 0;
        font-family: ${t=>{var e;return(e=t.theme.utils.typography("fontFamily","timesModernRegular"))==null?void 0:e.join(", ")}};
        font-size: ${t=>t.theme.utils.typography("fontSize","sm")};
        color: ${t=>t.theme.utils.color("whiteTint.white")} !important;
        font-weight: ${t=>t.theme.utils.typography("fontWeight","normal")};
    }

    .play-icon {
        cursor: pointer;
        width: 48px;
        aspect-ratio: 1 / 1;
        transition: opacity 0.2s ease;
        
        &:hover {
            opacity: 0.8;
        }
    }

    .volume-container {
        display: none;

        @media (min-width: 1024px) {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: ${t=>t.theme.utils.spacing("2")};
            margin-inline-start: ${t=>t.theme.utils.spacing("2")};
        }
    }

    .volume-icon {
        cursor: pointer;
        width: 20px;
        aspect-ratio: 1 / 1;
        transition: opacity 0.2s ease;
        
        &:hover {
            opacity: 0.8;
        }
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
        box-shadow: 0 0 0 2px ${t=>t.theme.utils.color("focus.focus010")};
    }

    /*webkit*/
    input[type='range'].styled-slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 2em;
        height: 2em;
        border-radius: 1em;
        background: ${t=>t.theme.utils.color("whiteTint.white")};
        border: none;
        box-shadow: 0 0 2px ${t=>t.theme.utils.color("blackTint.black")};
        margin-top: calc(max((1em - 1px - 1px) * 0.5, 0px) - 2em * 0.5);
    }

    input[type='range'].styled-slider::-webkit-slider-runnable-track {
        height: 1em;
        border: 1px solid ${t=>t.theme.utils.color("neutral.ne060")};
        border-radius: ${t=>t.theme.utils.borderRadius("lg")};
        background: ${t=>t.theme.utils.color("neutral.ne090")};
        box-shadow: none;
    }

    input[type='range'].styled-slider.slider-progress::-webkit-slider-runnable-track {
        background:
            linear-gradient(
                ${t=>t.theme.utils.color("red.red090")}, 
                ${t=>t.theme.utils.color("red.red090")}
            ) 0 / var(--sx) 100% no-repeat,
            ${t=>t.theme.utils.color("neutral.ne090")};
    }

    /*mozilla*/
    input[type='range'].styled-slider::-moz-range-thumb {
        width: 2em;
        height: 2em;
        border-radius: 1em;
        background: ${t=>t.theme.utils.color("whiteTint.white")};
        border: none;
        box-shadow: 0 0 2px ${t=>t.theme.utils.color("blackTint.black")};
    }

    input[type='range'].styled-slider::-moz-range-track {
        height: max(calc(1em - 1px - 1px), 0px);
        border: 1px solid ${t=>t.theme.utils.color("neutral.ne060")};
        border-radius: ${t=>t.theme.utils.borderRadius("lg")};
        background: ${t=>t.theme.utils.color("neutral.ne090")};
        box-shadow: none;
    }

    input[type='range'].styled-slider.slider-progress::-moz-range-track {
        background:
            linear-gradient(
                ${t=>t.theme.utils.color("red.red090")}, 
                ${t=>t.theme.utils.color("red.red090")}
            ) 0 / var(--sx) 100% no-repeat,
            ${t=>t.theme.utils.color("neutral.ne090")};
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
        background: ${t=>t.theme.utils.color("whiteTint.white")};
        border: none;
        box-shadow: 0 0 2px ${t=>t.theme.utils.color("blackTint.black")};
        margin-top: 0;
        box-sizing: border-box;
    }

    input[type='range'].styled-slider::-ms-track {
        height: 1em;
        border-radius: ${t=>t.theme.utils.borderRadius("lg")};
        background: ${t=>t.theme.utils.color("neutral.ne090")};
        border: 1px solid ${t=>t.theme.utils.color("neutral.ne060")};
        box-shadow: none;
        box-sizing: border-box;
    }

    input[type='range'].styled-slider.slider-progress::-ms-fill-lower {
        height: max(calc(1em - 1px - 1px), 0px);
        border-radius: ${t=>t.theme.utils.borderRadius("lg")} 0 0 ${t=>t.theme.utils.borderRadius("lg")};
        margin: -1px 0 -1px -1px;
        background: ${t=>t.theme.utils.color("red.red090")};
        border: 1px solid ${t=>t.theme.utils.color("neutral.ne060")};
        border-right-width: 0;
    }
`,V=w.memo(t=>{const e=w.useRef(null),[i,s]=w.useState(!1),[r,o]=w.useState(.5),[n,l]=w.useState(0),[c,d]=w.useState(x(0)),[h,p]=w.useState(!1),u=te(e,t),m=w.useRef(null),{onPlay:b,onReady:j}=t,v=w.useCallback(()=>{u.playPause()},[u]);w.useEffect(()=>{if(!u)return;u.setVolume(r);const y=()=>({media:u.getMediaElement(),peaks:u.exportPeaks()}),f=[u.on("ready",()=>{j&&j(y()),l(x(Math.round(u.getDuration()*1e3))),s(u.isPlaying())}),u.on("play",()=>{b&&b($=>{const g=y();return!$||$.media!==g.media?($&&($.media.pause(),$.media.currentTime=0),g):$}),s(!0)}),u.on("audioprocess",()=>{d(x(Math.round(u.getCurrentTime()*1e3)))}),u.on("pause",()=>s(!1))];return()=>{f.forEach($=>$())}},[u,b,j,r]),w.useEffect(()=>{const y=m.current;y.style.setProperty("--value",y.value),y.style.setProperty("--min",y.min===""?"0":y.min),y.style.setProperty("--max",y.max===""?"100":y.max),y.style.setProperty("--value",y.value)},[]);function x(y){var f=Math.floor(y/6e4),$=(y%6e4/1e3).toFixed(0);return f+":"+($<10?"0":"")+$}function S(y){o(y.target.value);const f=y.target;f.style.setProperty("--value",f.value),f.style.setProperty("--min",f.min===""?"0":f.min),f.style.setProperty("--max",f.max===""?"100":f.max),f.style.setProperty("--value",f.value)}function P(){p(!h)}return a.jsxs(ie,{children:[i?a.jsx("img",{className:"play-icon",src:"https://extras.thetimes.co.uk/web/2025/times-knife-crime-audio/assets/pause.png",onClick:v}):a.jsx("img",{className:"play-icon",src:"https://extras.thetimes.co.uk/web/2025/times-knife-crime-audio/assets/play.png",onClick:v}),a.jsx("div",{ref:e,style:{width:"100%"}}),a.jsxs("p",{className:"waveform-time",children:[a.jsx("span",{children:c})," / ",a.jsx("span",{children:n})]}),a.jsxs("div",{className:"volume-container",children:[a.jsx("img",{className:"volume-icon",src:"https://extras.thetimes.co.uk/web/2025/times-knife-crime-audio/assets/volume.png",onClick:P}),a.jsx("input",{ref:m,className:"styled-slider slider-progress",type:"range",id:"volume-slider",min:0,max:1,step:.1,value:r,onChange:S,style:{opacity:h?1:0,pointerEvents:h?"all":"none"}})]})]})});V.__docgenInfo={description:"",methods:[],displayName:"Equalizer"};function se({data:t,theme:e}){const i=a.jsxs(a.Fragment,{children:[a.jsx(N,{}),a.jsxs(Y,{children:[a.jsxs("div",{className:"card-image--container",children:[a.jsx("img",{src:`https://extras.thetimes.co.uk/web/2025/times-knife-crime-audio/assets/${t.imgSrc}.jpg`,className:"card-image",alt:t.name||"Audio player image"}),a.jsx("p",{className:"card-name",children:t.name})]}),a.jsx("p",{className:"card-quote",children:t.quote}),a.jsx("div",{className:"waveform-container",children:a.jsx(V,{height:100,waveColor:"#ff0000",progressColor:"#9f0000",url:`https://extras.thetimes.co.uk/web/2025/times-knife-crime-audio/assets/${t.audioSrc}.m4a`,normalize:!0,barWidth:2,barGap:2,barRadius:2,cursorWidth:2},t.id)})]})]});return e?a.jsx(M,{customTheme:e,children:i}):a.jsx(M,{children:i})}se.__docgenInfo={description:"",methods:[],displayName:"AudioPlayer"};const re=T.div`
    .headline {
        font-family: ${t=>{var e;return(e=t.theme.utils.typography("fontFamily","robotoRegular"))==null?void 0:e.join(", ")}};
        font-size: ${t=>t.theme.utils.typography("fontSize","editorialMd")};
        font-weight: ${t=>t.theme.utils.typography("fontWeight","bold")};
        color: ${t=>t.theme.utils.color("ink.inkContrast.light")};
        text-align: left;
        line-height: ${t=>t.theme.utils.typography("lineHeight","editorial")};
        letter-spacing: ${t=>t.theme.utils.typography("letterSpacing","editorial")};
        margin-bottom: ${t=>t.theme.utils.spacing("2")};
        margin-top: 0;
    }

    .standfirst {
        font-family: ${t=>{var e;return(e=t.theme.utils.typography("fontFamily","robotoRegular"))==null?void 0:e.join(", ")}};
        font-size: ${t=>t.theme.utils.typography("fontSize","editorialLg")};
        font-weight: ${t=>t.theme.utils.typography("fontWeight","normal")};
        color: ${t=>t.theme.utils.color("ink.inkBase.light")};
        text-align: left;
        line-height: ${t=>t.theme.utils.typography("lineHeight","relaxed")};
        letter-spacing: ${t=>t.theme.utils.typography("letterSpacing","editorial")};
        margin-bottom: ${t=>t.theme.utils.spacing("3")};
        margin-top: 0;
    }

    padding-inline-start: ${t=>t.theme.utils.spacing("3")};
    padding-inline-end: ${t=>t.theme.utils.spacing("3")};

    @media (min-width: 768px) {
        .headline {
            font-size: ${t=>t.theme.utils.typography("fontSize","editorialXl")};
        }

        .standfirst {
            font-size: ${t=>t.theme.utils.typography("fontSize","editorialSm")};
        }
    }
`;function q({headline:t,standfirst:e}){return a.jsxs(re,{children:[t&&a.jsx("h1",{className:"headline",children:t}),e&&a.jsx("p",{className:"standfirst",children:e})]})}q.__docgenInfo={description:"",methods:[],displayName:"Header"};const oe=T.div`
    margin-block: ${t=>t.theme.utils.spacing("4")};
    margin-inline: ${t=>t.theme.utils.spacing("3")};

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: ${t=>t.theme.utils.spacing("2")};

    @media (min-width: 768px) {
        grid-template-columns: repeat(5, 1fr);
        gap: ${t=>t.theme.utils.spacing("4")};
    }

    @media (min-width: 1440px) {
        grid-template-columns: repeat(7, 1fr);
        gap: ${t=>t.theme.utils.spacing("4")};
    }
`,ne=T.img`
    width: 100%;
    height: 80px;

    object-fit: cover;
    cursor: pointer;
    border-radius: ${t=>t.theme.utils.borderRadius("sm")};

    // * CONDITIONAL STYLES
    opacity: ${t=>t.isHovered?"1":"0.5"};

    -webkit-filter: ${t=>t.grayscale?"grayscale(100%)":"none"};
    filter: ${t=>t.grayscale?"grayscale(100%)":"none"};

    transition: opacity 250ms ease-in, filter 250ms ease-in;

    &:hover {
        opacity: ${t=>t.isHovered?"1":"0.7"};
    }

    &:focus {
        outline: 2px solid ${t=>t.theme.utils.color("focus.focus010")};
        outline-offset: 2px;
    }
`;function G({data:t,clickedImage:e,setClickedImage:i,setShowTooltip:s,setTooltipPos:r}){function o(l,c){i(c),s(!0),r([l.clientX,l.target.offsetTop+l.target.offsetHeight-20])}const n=t.map(l=>a.jsx(ne,{src:`https://nuk-tnl-editorial-prod-staticassets.s3.amazonaws.com/2024/times-image-grid/assets/${l.imgSrc}.jpg`,alt:l.name,grayscale:!1,lazy:!0,onClick:c=>o(c,l),isHovered:e===l},l.id));return a.jsx(oe,{children:n})}G.__docgenInfo={description:"",methods:[],displayName:"Grid"};const ae=T.div`
    position: absolute;
    left: 0px;
    top: ${t=>t.isImageInLastRow?t.tooltipPos[1]-380:t.tooltipPos[1]}px;

    margin-inline: 15%;
    padding: ${t=>t.theme.utils.spacing("4")};
    border: 1px solid ${t=>t.theme.utils.color("neutral.ne090")};
    border-radius: ${t=>t.theme.utils.borderRadius("md")};
    z-index: 1;

    display: flex;
    flex-direction: column;
    gap: ${t=>t.theme.utils.spacing("4")};
    justify-content: center;
    align-items: flex-start;

    background-color: ${t=>t.theme.utils.color("whiteTint.white")};
    box-shadow: ${t=>t.theme.utils.shadow("shadow030")};

    @media (prefers-color-scheme: dark) {
        background-color: ${t=>t.theme.utils.color("theme.dark.bg")};
        border-color: ${t=>t.theme.utils.color("theme.dark.border")};
    }

    font-family: ${t=>{var e;return(e=t.theme.utils.typography("fontFamily","robotoRegular"))==null?void 0:e.join(", ")}};
    font-size: ${t=>t.theme.utils.typography("fontSize","base")};

    opacity: ${t=>t.showTooltip?"1":"0"};
    transition: opacity 250ms ease-in;

    .tooltip-image {
        object-fit: cover;
        width: 150px;
        height: 130px;
        border-radius: ${t=>t.theme.utils.borderRadius("sm")};

        @media (min-width: 768px) {
            height: 180px;
            margin-inline: auto;
            margin-block-start: 0;
            margin-block-end: ${t=>t.theme.utils.spacing("4")};
        }
    }

    .tooltip-content {
        h3 {
            font-family: ${t=>{var e;return(e=t.theme.utils.typography("fontFamily","robotoRegular"))==null?void 0:e.join(", ")}};
            font-size: ${t=>t.theme.utils.typography("fontSize","editorialLg")};
            font-weight: ${t=>t.theme.utils.typography("fontWeight","bold")};
            color: ${t=>t.theme.utils.color("ink.inkContrast.light")};
            margin-block-end: ${t=>t.theme.utils.spacing("2")};
            margin-block-start: 0;
            text-align: left;
            line-height: ${t=>t.theme.utils.typography("lineHeight","editorial")};
            letter-spacing: ${t=>t.theme.utils.typography("letterSpacing","editorial")};

            @media (prefers-color-scheme: dark) {
                color: ${t=>t.theme.utils.color("theme.dark.font")};
            }
        }
        
        p {
            font-family: ${t=>{var e;return(e=t.theme.utils.typography("fontFamily","robotoRegular"))==null?void 0:e.join(", ")}};
            text-align: left;
            font-size: ${t=>t.theme.utils.typography("fontSize","base")};
            font-weight: ${t=>t.theme.utils.typography("fontWeight","normal")};
            color: ${t=>t.theme.utils.color("ink.inkBase.light")};
            line-height: ${t=>t.theme.utils.typography("lineHeight","relaxed")};
            letter-spacing: ${t=>t.theme.utils.typography("letterSpacing","editorial")};
            margin: 0;

            @media (prefers-color-scheme: dark) {
                color: ${t=>t.theme.utils.color("theme.dark.font")};
            }
        }
    }

    .tooltip-close {
        font-family: ${t=>{var e;return(e=t.theme.utils.typography("fontFamily","robotoRegular"))==null?void 0:e.join(", ")}} !important;
        font-size: ${t=>t.theme.utils.typography("fontSize","lg")};
        font-weight: ${t=>t.theme.utils.typography("fontWeight","bold")};

        position: absolute;
        top: ${t=>t.theme.utils.spacing("4")};
        right: ${t=>t.theme.utils.spacing("4")};

        cursor: pointer;

        background-color: transparent;
        border: none;
        color: ${t=>t.theme.utils.color("ink.inkBase.light")};

        opacity: 0.8;
        transition: opacity 250ms ease-in;

        &:hover {
            opacity: 1;
        }

        &:focus {
            outline: 2px solid ${t=>t.theme.utils.color("focus.focus010")};
            outline-offset: 2px;
        }

        @media (prefers-color-scheme: dark) {
            color: ${t=>t.theme.utils.color("theme.dark.font")};
        }
    }

    @media (min-width: 1024px) {
        flex-direction: row;
        gap: ${t=>t.theme.utils.spacing("6")};

        .tooltip-content > h3 {
            margin-block-start: ${t=>t.theme.utils.spacing("2")};
        }
    }
`;function X({clickedImage:t,setClickedImage:e,tooltipPos:i,showTooltip:s,setShowTooltip:r,isImageInLastRow:o}){if(!t)return;function n(){r(!1),e(null)}return a.jsxs(ae,{showTooltip:s,tooltipPos:i,isImageInLastRow:o,children:[a.jsx("img",{className:"tooltip-image",src:`https://nuk-tnl-editorial-prod-staticassets.s3.amazonaws.com/2024/times-image-grid/assets/${t.imgSrc}.jpg`,alt:t.name}),a.jsxs("div",{className:"tooltip-content",children:[a.jsx("h3",{children:t.name}),a.jsx("p",{children:t.copy})]}),a.jsx("button",{className:"tooltip-close",onClick:n,children:a.jsx("img",{src:"https://nuk-tnl-editorial-prod-staticassets.s3.amazonaws.com/2023/st-grid-jeremy-clarkson/assets/x.svg"})})]})}X.__docgenInfo={description:"",methods:[],displayName:"Tooltip"};function le({data:t,theme:e}){const[i,s]=w.useState(null),[r,o]=w.useState(!1),[n,l]=w.useState([0,0]);let d=t.length-t.indexOf(i)<=7;const h=a.jsxs(a.Fragment,{children:[a.jsx(N,{}),a.jsxs(F,{children:[a.jsx(q,{headline:"Lorem ipsum dolor sit amet",standfirst:"Nulla vel augue ut erat efficitur scelerisque id vel tellus. Ut iaculis nulla sit amet lorem rutrum, ac luctus sem imperdiet"}),a.jsx(G,{data:t,clickedImage:i,setClickedImage:s,setShowTooltip:o,setTooltipPos:l}),a.jsx(X,{clickedImage:i,setClickedImage:s,showTooltip:r,setShowTooltip:o,tooltipPos:n,isImageInLastRow:d})]})]});return e?a.jsx(M,{customTheme:e,children:h}):a.jsx(M,{children:h})}le.__docgenInfo={description:"",methods:[],displayName:"ImageGrid"};T.div`
    position: relative;
    width: 100%;
`;const he=T.div`
    position: sticky;
    top: 30vh;
    width: 100%;
    overflow: hidden;
    border-radius: ${t=>t.theme.utils.borderRadius("lg")};
    box-shadow: ${t=>t.theme.utils.shadow("shadow030")};

    &.edge-to-edge {
        top: 0;
        width: 100vw;
        margin-left: calc(50% - 50vw);
        height: 100vh !important;
        border-radius: 0;
        box-shadow: none;
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
`,de=T.div`
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    overflow: hidden;
`,ce=T.div`
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

    img, video, iframe {
        border-radius: inherit;
    }
`,ue=T.section`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${t=>`${t.theme.utils.spacing("4")} 0`};
`,pe=T.p`
    font-size: ${({size:t,theme:e})=>{const i={sm:e.utils.typography("fontSize","editorialXs"),md:e.utils.typography("fontSize","editorialSm"),lg:e.utils.typography("fontSize","editorialMd")};return i[t]||i.md}};
    font-family: ${t=>{var e,i,s;return((i=(e=t.theme)==null?void 0:e.utils)==null?void 0:i.fontFamily)&&((s=t.theme.utils.fontFamily("timesModernRegular"))==null?void 0:s.join(", "))||"TimesModern-Regular, serif"}};
    font-weight: ${t=>t.theme.utils.typography("fontWeight","normal")};
    padding: ${t=>t.theme.utils.spacing("6")};
    margin: ${t=>`${t.theme.utils.spacing("4")} auto`};
    max-width: 600px;
    background: ${t=>t.theme.utils.color("whiteTint.white")};
    color: ${t=>t.theme.utils.color("ink.inkBase.light")};
    border-radius: ${t=>t.theme.utils.borderRadius("lg")};
    z-index: 1;
    letter-spacing: ${t=>t.theme.utils.typography("letterSpacing","normal")};
    line-height: ${t=>t.theme.utils.typography("lineHeight","relaxed")};

    @media (prefers-color-scheme: dark) {
        background: ${t=>t.theme.utils.color("theme.dark.bg")};
        color: ${t=>t.theme.utils.color("theme.dark.font")};
        border: 1px solid ${t=>t.theme.utils.color("theme.dark.border")};
    }

    /* Responsive font sizes */
    @media (min-width: 768px) {
        font-size: ${({size:t,theme:e})=>{const i={sm:e.utils.typography("fontSize","editorialMd"),md:e.utils.typography("fontSize","editorialMd"),lg:e.utils.typography("fontSize","editorialLg")};return i[t]||i.md}};
        padding: ${t=>t.theme.utils.spacing("8")};
    }

    /* Typography enhancements for content */
    strong {
        font-weight: ${t=>t.theme.utils.typography("fontWeight","semibold")};
        color: ${t=>t.theme.utils.color("ink.inkContrast.light")};
        
        @media (prefers-color-scheme: dark) {
            color: ${t=>t.theme.utils.color("ink.inkContrast.dark")};
        }
    }

    em {
        font-style: italic;
        color: ${t=>t.theme.utils.color("ink.inkSubtle.light")};
        
        @media (prefers-color-scheme: dark) {
            color: ${t=>t.theme.utils.color("ink.inkSubtle.dark")};
        }
    }

    a {
        color: ${t=>t.theme.utils.color("blue.blue070")};
        text-decoration: underline;
        transition: color 0.2s ease;

        &:hover {
            color: ${t=>t.theme.utils.color("blue.blue060")};
        }

        &:focus {
            outline: 2px solid ${t=>t.theme.utils.color("focus.focus010")};
            outline-offset: 2px;
        }

        @media (prefers-color-scheme: dark) {
            color: ${t=>t.theme.utils.color("blue.blue030")};
            
            &:hover {
                color: ${t=>t.theme.utils.color("blue.blue020")};
            }
        }
    }
`;function me({data:t,theme:e}){const{slides:i=[],imgFit:s="cover",containerWidth:r="edge-to-edge",borderRadius:o="0",fixedImgHeight:n,fontSize:l="md",videoLoop:c=!0,videoAutoplay:d=!0,videoControls:h=!1,videoMute:p=!0}=t,[u,m]=w.useState(0),[b,j]=w.useState([]),v=w.useRef([]),x=w.useRef([]);w.useEffect(()=>{const g=new IntersectionObserver(k=>{k.forEach(C=>{if(C.isIntersecting){const R=parseInt(C.target.dataset.index,10);m(R)}})},{threshold:.6});return v.current.forEach(k=>k&&g.observe(k)),()=>g.disconnect()},[i.length]),w.useEffect(()=>{const g=i.map((k,C)=>C===u);j(g)},[u,i]);const S=g=>b[g]?2:1,P=g=>{var k;if(g.includes("youtube.com")){const C=(k=g.split("v=")[1])==null?void 0:k.split("&")[0];return`https://www.youtube.com/embed/${C}?autoplay=${d?1:0}&loop=${c?1:0}&controls=${h?1:0}&mute=${p?1:0}&playlist=${C}`}else if(g.includes("vimeo.com"))return`https://player.vimeo.com/video/${g.split("/").pop()}?autoplay=${d?1:0}&loop=${c?1:0}&controls=${h?1:0}&muted=${p?1:0}`;return g},y=g=>g.includes("youtube.com")||g.includes("youtu.be"),f=g=>g.endsWith(".mp4"),$=a.jsxs(a.Fragment,{children:[a.jsx(N,{}),a.jsxs(F,{children:[a.jsx(he,{style:{height:n||"500px"},className:r==="edge-to-edge"?"edge-to-edge":r==="bleed"?"bleed":"",children:a.jsx(de,{children:i.map((g,k)=>a.jsx(ce,{ref:C=>x.current[k]=C,className:b[k]?"overlap":"",style:{zIndex:S(k)},children:y(g.media)?a.jsx("iframe",{title:"YouTube video",src:P(g.media),frameBorder:"0",allow:"autoplay; encrypted-media",allowFullScreen:!0,style:{objectFit:s,width:"100%",height:n||(r==="edge-to-edge"?"100vh":"100%"),borderRadius:o}}):f(g.media)?a.jsx("video",{autoPlay:d,loop:c,controls:h,muted:p,style:{objectFit:s,width:"100%",height:n||"100%",borderRadius:o},children:a.jsx("source",{src:g.media,type:"video/mp4"})}):a.jsx("img",{src:g.media,alt:g.altText||"Slide image",style:{objectFit:s,width:"100%",height:n||"100%",borderRadius:o}})},k))})}),a.jsx("div",{className:"scroller-sections",children:i.map((g,k)=>a.jsx(ue,{className:"trigger","data-index":k,ref:C=>v.current[k]=C,children:g.text&&a.jsx(pe,{size:l,dangerouslySetInnerHTML:{__html:g.text}})},k))})]})]});return e?a.jsx(M,{customTheme:e,children:$}):a.jsx(M,{children:$})}me.__docgenInfo={description:"",methods:[],displayName:"ScrollStory"};const ge=T.div`
    width: 100%;
    position: relative;
    margin: 20px auto;
`,fe=T.iframe`
    width: 100%;
    border: 0;
    display: block;
`;function be({chartId:t,version:e="1",title:i=""}){const s=`datawrapper-chart-${t}`,r=`https://datawrapper.dwcdn.net/${t}/${e}/`,o=400,n=w.useRef(null),[l,c]=w.useState(o);return w.useEffect(()=>{function d(h){var u;if(!n.current||!((u=h.data)!=null&&u["datawrapper-height"]))return;const p=h.data["datawrapper-height"][n.current.id];p&&c(p)}return window.addEventListener("message",d),()=>window.removeEventListener("message",d)},[]),a.jsxs(a.Fragment,{children:[a.jsx(N,{}),a.jsx(ge,{children:a.jsx(fe,{ref:n,id:s,title:i,src:r,height:l,allowFullScreen:!0})})]})}be.__docgenInfo={description:"",methods:[],displayName:"DataWrapperEmbed",props:{version:{defaultValue:{value:"'1'",computed:!1},required:!1},title:{defaultValue:{value:"''",computed:!1},required:!1}}};const ye=T.div`
    position: relative;
    width: 100%;
    overflow: hidden;
    aspect-ratio: 16 / 9;
    user-select: none;
    margin: ${t=>{var e,i,s;return((s=(i=(e=t.theme)==null?void 0:e.utils)==null?void 0:i.spacing)==null?void 0:s.call(i,"5"))||"20px"}} 0 0;
    border-radius: ${t=>{var e,i,s;return((s=(i=(e=t.theme)==null?void 0:e.utils)==null?void 0:i.borderRadius)==null?void 0:s.call(i,"md"))||"0.375rem"}};
    box-shadow: ${t=>{var e,i,s;return((s=(i=(e=t.theme)==null?void 0:e.utils)==null?void 0:i.shadow)==null?void 0:s.call(i,"shadow020"))||"0 2px 4px 0 rgba(17, 17, 17, 0.08)"}};
`,U=T.img`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
`,ve=T(U)`
    clip-path: ${({position:t})=>`inset(0 ${100-t}% 0 0)`};
    z-index: 2;
`,xe=T(U)`
    z-index: 1;
`,we=T.div`
    position: absolute;
    top: 0;
    left: ${({position:t})=>`${t}%`};
    height: 100%;
    width: 3px;
    background: ${t=>{var e,i,s;return((s=(i=(e=t.theme)==null?void 0:e.utils)==null?void 0:i.color)==null?void 0:s.call(i,"whiteTint.white"))||"white"}};
    cursor: ew-resize;
    z-index: 3;
    box-shadow: 0 0 8px ${t=>{var e,i,s;return((s=(i=(e=t.theme)==null?void 0:e.utils)==null?void 0:i.color)==null?void 0:s.call(i,"blackTint.bTint050"))||"rgba(0, 0, 0, 0.3)"}};

    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 10px;
        height: 80px;
        background: ${t=>{var e,i,s;return((s=(i=(e=t.theme)==null?void 0:e.utils)==null?void 0:i.color)==null?void 0:s.call(i,"whiteTint.white"))||"white"}};
        border-radius: ${t=>{var e,i,s;return((s=(i=(e=t.theme)==null?void 0:e.utils)==null?void 0:i.borderRadius)==null?void 0:s.call(i,"sm"))||"0.125rem"}};
        box-shadow: 0 0 8px ${t=>{var e,i,s;return((s=(i=(e=t.theme)==null?void 0:e.utils)==null?void 0:i.color)==null?void 0:s.call(i,"blackTint.bTint050"))||"rgba(0, 0, 0, 0.3)"}};
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
        border-right: 8px solid ${t=>{var e,i,s;return((s=(i=(e=t.theme)==null?void 0:e.utils)==null?void 0:i.color)==null?void 0:s.call(i,"whiteTint.white"))||"white"}};
    }

    & > span::after {
        border-left: 8px solid ${t=>{var e,i,s;return((s=(i=(e=t.theme)==null?void 0:e.utils)==null?void 0:i.color)==null?void 0:s.call(i,"whiteTint.white"))||"white"}};
    }

    &:focus {
        outline: 2px solid ${t=>{var e,i,s;return((s=(i=(e=t.theme)==null?void 0:e.utils)==null?void 0:i.color)==null?void 0:s.call(i,"focus.focus010"))||"#005c8a"}};
        outline-offset: 2px;
    }
`,B=T.span`
    position: absolute;
    top: ${t=>{var e,i,s;return((s=(i=(e=t.theme)==null?void 0:e.utils)==null?void 0:i.spacing)==null?void 0:s.call(i,"3"))||"10px"}};
    background: ${t=>{var e,i,s;return((s=(i=(e=t.theme)==null?void 0:e.utils)==null?void 0:i.color)==null?void 0:s.call(i,"blackTint.bTint060"))||"rgba(0, 0, 0, 0.6)"}};
    color: ${t=>{var e,i,s;return((s=(i=(e=t.theme)==null?void 0:e.utils)==null?void 0:i.color)==null?void 0:s.call(i,"whiteTint.white"))||"#fff"}};
    padding: ${t=>{var e,i,s;return((s=(i=(e=t.theme)==null?void 0:e.utils)==null?void 0:i.spacing)==null?void 0:s.call(i,"1"))||"4px"}} ${t=>{var e,i,s;return((s=(i=(e=t.theme)==null?void 0:e.utils)==null?void 0:i.spacing)==null?void 0:s.call(i,"2"))||"8px"}};
    font-size: ${t=>{var e,i,s;return((s=(i=(e=t.theme)==null?void 0:e.utils)==null?void 0:i.fontSize)==null?void 0:s.call(i,"xs"))||"12px"}};
    font-family: ${t=>{var e,i,s;return((i=(e=t.theme)==null?void 0:e.utils)==null?void 0:i.fontFamily)&&((s=t.theme.utils.fontFamily("robotoRegular"))==null?void 0:s.join(", "))||"Roboto-Regular, sans-serif"}};
    font-weight: ${t=>{var e,i,s;return((s=(i=(e=t.theme)==null?void 0:e.utils)==null?void 0:i.fontWeight)==null?void 0:s.call(i,"medium"))||"500"}};
    z-index: 4;
    border-radius: ${t=>{var e,i,s;return((s=(i=(e=t.theme)==null?void 0:e.utils)==null?void 0:i.borderRadius)==null?void 0:s.call(i,"sm"))||"0.125rem"}};
    letter-spacing: ${t=>{var e,i,s;return((s=(i=(e=t.theme)==null?void 0:e.utils)==null?void 0:i.letterSpacing)==null?void 0:s.call(i,"wide"))||"0.025em"}};
`,$e=T.p`
    margin-top: ${t=>{var e,i,s;return((s=(i=(e=t.theme)==null?void 0:e.utils)==null?void 0:i.spacing)==null?void 0:s.call(i,"2"))||"8px"}};
    font-size: ${t=>{var e,i,s;return((s=(i=(e=t.theme)==null?void 0:e.utils)==null?void 0:i.fontSize)==null?void 0:s.call(i,"xs"))||"12px"}};
    color: ${t=>{var e,i,s;return((s=(i=(e=t.theme)==null?void 0:e.utils)==null?void 0:i.color)==null?void 0:s.call(i,"ink.inkSubtle.light"))||"#666"}};
    text-align: left;
    margin-bottom: ${t=>{var e,i,s;return((s=(i=(e=t.theme)==null?void 0:e.utils)==null?void 0:i.spacing)==null?void 0:s.call(i,"5"))||"20px"}};
    font-family: ${t=>{var e,i,s;return((i=(e=t.theme)==null?void 0:e.utils)==null?void 0:i.fontFamily)&&((s=t.theme.utils.fontFamily("robotoRegular"))==null?void 0:s.join(", "))||"Roboto-Regular, sans-serif"}};
    font-weight: ${t=>{var e,i,s;return((s=(i=(e=t.theme)==null?void 0:e.utils)==null?void 0:i.fontWeight)==null?void 0:s.call(i,"normal"))||"400"}};
    line-height: ${t=>{var e,i,s;return((s=(i=(e=t.theme)==null?void 0:e.utils)==null?void 0:i.lineHeight)==null?void 0:s.call(i,"relaxed"))||"1.75"}};

    @media (prefers-color-scheme: dark) {
        color: ${t=>{var e,i,s;return((s=(i=(e=t.theme)==null?void 0:e.utils)==null?void 0:i.color)==null?void 0:s.call(i,"theme.dark.font"))||"#b6b6b6"}};
    }
`,ke=({beforeImage:t,afterImage:e,beforeLabel:i="Before",afterLabel:s="After",photoCredits:r={},theme:o})=>{const n=w.useRef(null),[l,c]=w.useState(50),[d,h]=w.useState(!1),p=v=>{if(!d||!n.current)return;const x=n.current.getBoundingClientRect(),S=(v.clientX-x.left)/x.width*100;c(Math.max(0,Math.min(100,S)))},u=()=>h(!0),m=()=>h(!1),b=v=>{v.key==="ArrowLeft"?c(x=>Math.max(0,x-5)):v.key==="ArrowRight"&&c(x=>Math.min(100,x+5))};w.useEffect(()=>(window.addEventListener("mousemove",p),window.addEventListener("mouseup",m),()=>{window.removeEventListener("mousemove",p),window.removeEventListener("mouseup",m)}),[d]);const j=a.jsxs(a.Fragment,{children:[a.jsx(N,{}),a.jsxs(ye,{ref:n,children:[a.jsx(xe,{src:e,alt:"After"}),a.jsx(ve,{src:t,alt:"Before",position:l}),a.jsx(we,{position:l,onMouseDown:u,onKeyDown:b,role:"separator","aria-valuenow":l,"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Image comparison slider",tabIndex:0,children:a.jsx("span",{})}),a.jsx(B,{style:{left:"10px"},children:i}),a.jsx(B,{style:{right:"10px"},children:s})]}),r!=null&&r.before||r!=null&&r.after?a.jsxs($e,{children:[r.before&&a.jsxs(a.Fragment,{children:["Before: ",r.before," "]}),r.after&&a.jsxs(a.Fragment,{children:["After: ",r.after]})]}):null]});return o?a.jsx(M,{customTheme:o,children:j}):a.jsx(M,{children:j})};ke.__docgenInfo={description:"",methods:[],displayName:"ImageSlider",props:{beforeLabel:{defaultValue:{value:"'Before'",computed:!1},required:!1},afterLabel:{defaultValue:{value:"'After'",computed:!1},required:!1},photoCredits:{defaultValue:{value:"{}",computed:!1},required:!1}}};export{se as A,be as D,le as I,me as S,ke as a};
