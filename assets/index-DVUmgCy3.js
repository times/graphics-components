import{j as p}from"./jsx-runtime-D_zvdyIk.js";import{r as w}from"./index-U0ga5oGA.js";import{d as M,G as W,C as K,a as G}from"./index-hvh0w1v7.js";function P(n,e,t,i){return new(t||(t=Promise))(function(s,r){function o(d){try{c(i.next(d))}catch(l){r(l)}}function a(d){try{c(i.throw(d))}catch(l){r(l)}}function c(d){var l;d.done?s(d.value):(l=d.value,l instanceof t?l:new t(function(m){m(l)})).then(o,a)}c((i=i.apply(n,e||[])).next())})}class L{constructor(){this.listeners={}}on(e,t,i){if(this.listeners[e]||(this.listeners[e]=new Set),this.listeners[e].add(t),i==null?void 0:i.once){const s=()=>{this.un(e,s),this.un(e,t)};return this.on(e,s),s}return()=>this.un(e,t)}un(e,t){var i;(i=this.listeners[e])===null||i===void 0||i.delete(t)}once(e,t){return this.on(e,t,{once:!0})}unAll(){this.listeners={}}emit(e,...t){this.listeners[e]&&this.listeners[e].forEach(i=>i(...t))}}const _={decode:function(n,e){return P(this,void 0,void 0,function*(){const t=new AudioContext({sampleRate:e});return t.decodeAudioData(n).finally(()=>t.close())})},createBuffer:function(n,e){return typeof n[0]=="number"&&(n=[n]),function(t){const i=t[0];if(i.some(s=>s>1||s<-1)){const s=i.length;let r=0;for(let o=0;o<s;o++){const a=Math.abs(i[o]);a>r&&(r=a)}for(const o of t)for(let a=0;a<s;a++)o[a]/=r}}(n),{duration:e,length:n[0].length,sampleRate:n[0].length/e,numberOfChannels:n.length,getChannelData:t=>n==null?void 0:n[t],copyFromChannel:AudioBuffer.prototype.copyFromChannel,copyToChannel:AudioBuffer.prototype.copyToChannel}}};function X(n,e){const t=e.xmlns?document.createElementNS(e.xmlns,n):document.createElement(n);for(const[i,s]of Object.entries(e))if(i==="children")for(const[r,o]of Object.entries(e))typeof o=="string"?t.appendChild(document.createTextNode(o)):t.appendChild(X(r,o));else i==="style"?Object.assign(t.style,s):i==="textContent"?t.textContent=s:t.setAttribute(i,s.toString());return t}function H(n,e,t){const i=X(n,e||{});return t==null||t.appendChild(i),i}var Q=Object.freeze({__proto__:null,createElement:H,default:H});const ee={fetchBlob:function(n,e,t){return P(this,void 0,void 0,function*(){const i=yield fetch(n,t);if(i.status>=400)throw new Error(`Failed to fetch ${n}: ${i.status} (${i.statusText})`);return function(s,r){P(this,void 0,void 0,function*(){if(!s.body||!s.headers)return;const o=s.body.getReader(),a=Number(s.headers.get("Content-Length"))||0;let c=0;const d=m=>P(this,void 0,void 0,function*(){c+=(m==null?void 0:m.length)||0;const u=Math.round(c/a*100);r(u)}),l=()=>P(this,void 0,void 0,function*(){let m;try{m=yield o.read()}catch{return}m.done||(d(m.value),yield l())});l()})}(i.clone(),e),i.blob()})}};class te extends L{constructor(e){super(),this.isExternalMedia=!1,e.media?(this.media=e.media,this.isExternalMedia=!0):this.media=document.createElement("audio"),e.mediaControls&&(this.media.controls=!0),e.autoplay&&(this.media.autoplay=!0),e.playbackRate!=null&&this.onMediaEvent("canplay",()=>{e.playbackRate!=null&&(this.media.playbackRate=e.playbackRate)},{once:!0})}onMediaEvent(e,t,i){return this.media.addEventListener(e,t,i),()=>this.media.removeEventListener(e,t,i)}getSrc(){return this.media.currentSrc||this.media.src||""}revokeSrc(){const e=this.getSrc();e.startsWith("blob:")&&URL.revokeObjectURL(e)}canPlayType(e){return this.media.canPlayType(e)!==""}setSrc(e,t){const i=this.getSrc();if(e&&i===e)return;this.revokeSrc();const s=t instanceof Blob&&(this.canPlayType(t.type)||!e)?URL.createObjectURL(t):e;i&&(this.media.src="");try{this.media.src=s}catch{this.media.src=e}}destroy(){this.isExternalMedia||(this.media.pause(),this.media.remove(),this.revokeSrc(),this.media.src="",this.media.load())}setMediaElement(e){this.media=e}play(){return P(this,void 0,void 0,function*(){return this.media.play()})}pause(){this.media.pause()}isPlaying(){return!this.media.paused&&!this.media.ended}setTime(e){this.media.currentTime=Math.max(0,Math.min(e,this.getDuration()))}getDuration(){return this.media.duration}getCurrentTime(){return this.media.currentTime}getVolume(){return this.media.volume}setVolume(e){this.media.volume=e}getMuted(){return this.media.muted}setMuted(e){this.media.muted=e}getPlaybackRate(){return this.media.playbackRate}isSeeking(){return this.media.seeking}setPlaybackRate(e,t){t!=null&&(this.media.preservesPitch=t),this.media.playbackRate=e}getMediaElement(){return this.media}setSinkId(e){return this.media.setSinkId(e)}}class D extends L{constructor(e,t){super(),this.timeouts=[],this.isScrollable=!1,this.audioData=null,this.resizeObserver=null,this.lastContainerWidth=0,this.isDragging=!1,this.subscriptions=[],this.unsubscribeOnScroll=[],this.subscriptions=[],this.options=e;const i=this.parentFromOptionsContainer(e.container);this.parent=i;const[s,r]=this.initHtml();i.appendChild(s),this.container=s,this.scrollContainer=r.querySelector(".scroll"),this.wrapper=r.querySelector(".wrapper"),this.canvasWrapper=r.querySelector(".canvases"),this.progressWrapper=r.querySelector(".progress"),this.cursor=r.querySelector(".cursor"),t&&r.appendChild(t),this.initEvents()}parentFromOptionsContainer(e){let t;if(typeof e=="string"?t=document.querySelector(e):e instanceof HTMLElement&&(t=e),!t)throw new Error("Container not found");return t}initEvents(){const e=t=>{const i=this.wrapper.getBoundingClientRect(),s=t.clientX-i.left,r=t.clientY-i.top;return[s/i.width,r/i.height]};if(this.wrapper.addEventListener("click",t=>{const[i,s]=e(t);this.emit("click",i,s)}),this.wrapper.addEventListener("dblclick",t=>{const[i,s]=e(t);this.emit("dblclick",i,s)}),this.options.dragToSeek!==!0&&typeof this.options.dragToSeek!="object"||this.initDrag(),this.scrollContainer.addEventListener("scroll",()=>{const{scrollLeft:t,scrollWidth:i,clientWidth:s}=this.scrollContainer,r=t/i,o=(t+s)/i;this.emit("scroll",r,o,t,t+s)}),typeof ResizeObserver=="function"){const t=this.createDelay(100);this.resizeObserver=new ResizeObserver(()=>{t().then(()=>this.onContainerResize()).catch(()=>{})}),this.resizeObserver.observe(this.scrollContainer)}}onContainerResize(){const e=this.parent.clientWidth;e===this.lastContainerWidth&&this.options.height!=="auto"||(this.lastContainerWidth=e,this.reRender())}initDrag(){this.subscriptions.push(function(e,t,i,s,r=3,o=0,a=100){if(!e)return()=>{};const c=matchMedia("(pointer: coarse)").matches;let d=()=>{};const l=m=>{if(m.button!==o)return;m.preventDefault(),m.stopPropagation();let u=m.clientX,f=m.clientY,v=!1;const S=Date.now(),y=h=>{if(h.preventDefault(),h.stopPropagation(),c&&Date.now()-S<a)return;const g=h.clientX,C=h.clientY,T=g-u,R=C-f;if(v||Math.abs(T)>r||Math.abs(R)>r){const j=e.getBoundingClientRect(),{left:z,top:B}=j;v||(i==null||i(u-z,f-B),v=!0),t(T,R,g-z,C-B),u=g,f=C}},x=h=>{if(v){const g=h.clientX,C=h.clientY,T=e.getBoundingClientRect(),{left:R,top:j}=T;s==null||s(g-R,C-j)}d()},k=h=>{h.relatedTarget&&h.relatedTarget!==document.documentElement||x(h)},E=h=>{v&&(h.stopPropagation(),h.preventDefault())},b=h=>{v&&h.preventDefault()};document.addEventListener("pointermove",y),document.addEventListener("pointerup",x),document.addEventListener("pointerout",k),document.addEventListener("pointercancel",k),document.addEventListener("touchmove",b,{passive:!1}),document.addEventListener("click",E,{capture:!0}),d=()=>{document.removeEventListener("pointermove",y),document.removeEventListener("pointerup",x),document.removeEventListener("pointerout",k),document.removeEventListener("pointercancel",k),document.removeEventListener("touchmove",b),setTimeout(()=>{document.removeEventListener("click",E,{capture:!0})},10)}};return e.addEventListener("pointerdown",l),()=>{d(),e.removeEventListener("pointerdown",l)}}(this.wrapper,(e,t,i)=>{this.emit("drag",Math.max(0,Math.min(1,i/this.wrapper.getBoundingClientRect().width)))},e=>{this.isDragging=!0,this.emit("dragstart",Math.max(0,Math.min(1,e/this.wrapper.getBoundingClientRect().width)))},e=>{this.isDragging=!1,this.emit("dragend",Math.max(0,Math.min(1,e/this.wrapper.getBoundingClientRect().width)))}))}getHeight(e,t){var i;const s=((i=this.audioData)===null||i===void 0?void 0:i.numberOfChannels)||1;if(e==null)return 128;if(!isNaN(Number(e)))return Number(e);if(e==="auto"){const r=this.parent.clientHeight||128;return t!=null&&t.every(o=>!o.overlay)?r/s:r}return 128}initHtml(){const e=document.createElement("div"),t=e.attachShadow({mode:"open"}),i=this.options.cspNonce&&typeof this.options.cspNonce=="string"?this.options.cspNonce.replace(/"/g,""):"";return t.innerHTML=`
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
    `,[e,t]}setOptions(e){if(this.options.container!==e.container){const t=this.parentFromOptionsContainer(e.container);t.appendChild(this.container),this.parent=t}e.dragToSeek!==!0&&typeof this.options.dragToSeek!="object"||this.initDrag(),this.options=e,this.reRender()}getWrapper(){return this.wrapper}getWidth(){return this.scrollContainer.clientWidth}getScroll(){return this.scrollContainer.scrollLeft}setScroll(e){this.scrollContainer.scrollLeft=e}setScrollPercentage(e){const{scrollWidth:t}=this.scrollContainer,i=t*e;this.setScroll(i)}destroy(){var e,t;this.subscriptions.forEach(i=>i()),this.container.remove(),(e=this.resizeObserver)===null||e===void 0||e.disconnect(),(t=this.unsubscribeOnScroll)===null||t===void 0||t.forEach(i=>i()),this.unsubscribeOnScroll=[]}createDelay(e=10){let t,i;const s=()=>{t&&clearTimeout(t),i&&i()};return this.timeouts.push(s),()=>new Promise((r,o)=>{s(),i=o,t=setTimeout(()=>{t=void 0,i=void 0,r()},e)})}convertColorValues(e){if(!Array.isArray(e))return e||"";if(e.length<2)return e[0]||"";const t=document.createElement("canvas"),i=t.getContext("2d"),s=t.height*(window.devicePixelRatio||1),r=i.createLinearGradient(0,0,0,s),o=1/(e.length-1);return e.forEach((a,c)=>{const d=c*o;r.addColorStop(d,a)}),r}getPixelRatio(){return Math.max(1,window.devicePixelRatio||1)}renderBarWaveform(e,t,i,s){const r=e[0],o=e[1]||e[0],a=r.length,{width:c,height:d}=i.canvas,l=d/2,m=this.getPixelRatio(),u=t.barWidth?t.barWidth*m:1,f=t.barGap?t.barGap*m:t.barWidth?u/2:0,v=t.barRadius||0,S=c/(u+f)/a,y=v&&"roundRect"in i?"roundRect":"rect";i.beginPath();let x=0,k=0,E=0;for(let b=0;b<=a;b++){const h=Math.round(b*S);if(h>x){const T=Math.round(k*l*s),R=T+Math.round(E*l*s)||1;let j=l-T;t.barAlign==="top"?j=0:t.barAlign==="bottom"&&(j=d-R),i[y](x*(u+f),j,u,R,v),x=h,k=0,E=0}const g=Math.abs(r[b]||0),C=Math.abs(o[b]||0);g>k&&(k=g),C>E&&(E=C)}i.fill(),i.closePath()}renderLineWaveform(e,t,i,s){const r=o=>{const a=e[o]||e[0],c=a.length,{height:d}=i.canvas,l=d/2,m=i.canvas.width/c;i.moveTo(0,l);let u=0,f=0;for(let v=0;v<=c;v++){const S=Math.round(v*m);if(S>u){const x=l+(Math.round(f*l*s)||1)*(o===0?-1:1);i.lineTo(u,x),u=S,f=0}const y=Math.abs(a[v]||0);y>f&&(f=y)}i.lineTo(u,l)};i.beginPath(),r(0),r(1),i.fill(),i.closePath()}renderWaveform(e,t,i){if(i.fillStyle=this.convertColorValues(t.waveColor),t.renderFunction)return void t.renderFunction(e,i);let s=t.barHeight||1;if(t.normalize){const r=Array.from(e[0]).reduce((o,a)=>Math.max(o,Math.abs(a)),0);s=r?1/r:1}t.barWidth||t.barGap||t.barAlign?this.renderBarWaveform(e,t,i,s):this.renderLineWaveform(e,t,i,s)}renderSingleCanvas(e,t,i,s,r,o,a){const c=this.getPixelRatio(),d=document.createElement("canvas");d.width=Math.round(i*c),d.height=Math.round(s*c),d.style.width=`${i}px`,d.style.height=`${s}px`,d.style.left=`${Math.round(r)}px`,o.appendChild(d);const l=d.getContext("2d");if(this.renderWaveform(e,t,l),d.width>0&&d.height>0){const m=d.cloneNode(),u=m.getContext("2d");u.drawImage(d,0,0),u.globalCompositeOperation="source-in",u.fillStyle=this.convertColorValues(t.progressColor),u.fillRect(0,0,d.width,d.height),a.appendChild(m)}}renderMultiCanvas(e,t,i,s,r,o){const a=this.getPixelRatio(),{clientWidth:c}=this.scrollContainer,d=i/a;let l=Math.min(D.MAX_CANVAS_WIDTH,c,d),m={};if(l===0)return;if(t.barWidth||t.barGap){const y=t.barWidth||.5,x=y+(t.barGap||y/2);l%x!=0&&(l=Math.floor(l/x)*x)}const u=y=>{if(y<0||y>=f||m[y])return;m[y]=!0;const x=y*l,k=Math.min(d-x,l);if(k<=0)return;const E=e.map(b=>{const h=Math.floor(x/d*b.length),g=Math.floor((x+k)/d*b.length);return b.slice(h,g)});this.renderSingleCanvas(E,t,k,s,x,r,o)},f=Math.ceil(d/l);if(!this.isScrollable){for(let y=0;y<f;y++)u(y);return}const v=this.scrollContainer.scrollLeft/d,S=Math.floor(v*f);if(u(S-1),u(S),u(S+1),f>1){const y=this.on("scroll",()=>{const{scrollLeft:x}=this.scrollContainer,k=Math.floor(x/d*f);Object.keys(m).length>D.MAX_NODES&&(r.innerHTML="",o.innerHTML="",m={}),u(k-1),u(k),u(k+1)});this.unsubscribeOnScroll.push(y)}}renderChannel(e,t,i,s){var{overlay:r}=t,o=function(l,m){var u={};for(var f in l)Object.prototype.hasOwnProperty.call(l,f)&&m.indexOf(f)<0&&(u[f]=l[f]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function"){var v=0;for(f=Object.getOwnPropertySymbols(l);v<f.length;v++)m.indexOf(f[v])<0&&Object.prototype.propertyIsEnumerable.call(l,f[v])&&(u[f[v]]=l[f[v]])}return u}(t,["overlay"]);const a=document.createElement("div"),c=this.getHeight(o.height,o.splitChannels);a.style.height=`${c}px`,r&&s>0&&(a.style.marginTop=`-${c}px`),this.canvasWrapper.style.minHeight=`${c}px`,this.canvasWrapper.appendChild(a);const d=a.cloneNode();this.progressWrapper.appendChild(d),this.renderMultiCanvas(e,o,i,c,a,d)}render(e){return P(this,void 0,void 0,function*(){var t;this.timeouts.forEach(c=>c()),this.timeouts=[],this.canvasWrapper.innerHTML="",this.progressWrapper.innerHTML="",this.options.width!=null&&(this.scrollContainer.style.width=typeof this.options.width=="number"?`${this.options.width}px`:this.options.width);const i=this.getPixelRatio(),s=this.scrollContainer.clientWidth,r=Math.ceil(e.duration*(this.options.minPxPerSec||0));this.isScrollable=r>s;const o=this.options.fillParent&&!this.isScrollable,a=(o?s:r)*i;if(this.wrapper.style.width=o?"100%":`${r}px`,this.scrollContainer.style.overflowX=this.isScrollable?"auto":"hidden",this.scrollContainer.classList.toggle("noScrollbar",!!this.options.hideScrollbar),this.cursor.style.backgroundColor=`${this.options.cursorColor||this.options.progressColor}`,this.cursor.style.width=`${this.options.cursorWidth}px`,this.audioData=e,this.emit("render"),this.options.splitChannels)for(let c=0;c<e.numberOfChannels;c++){const d=Object.assign(Object.assign({},this.options),(t=this.options.splitChannels)===null||t===void 0?void 0:t[c]);this.renderChannel([e.getChannelData(c)],d,a,c)}else{const c=[e.getChannelData(0)];e.numberOfChannels>1&&c.push(e.getChannelData(1)),this.renderChannel(c,this.options,a,0)}Promise.resolve().then(()=>this.emit("rendered"))})}reRender(){if(this.unsubscribeOnScroll.forEach(i=>i()),this.unsubscribeOnScroll=[],!this.audioData)return;const{scrollWidth:e}=this.scrollContainer,{right:t}=this.progressWrapper.getBoundingClientRect();if(this.render(this.audioData),this.isScrollable&&e!==this.scrollContainer.scrollWidth){const{right:i}=this.progressWrapper.getBoundingClientRect();let s=i-t;s*=2,s=s<0?Math.floor(s):Math.ceil(s),s/=2,this.scrollContainer.scrollLeft+=s}}zoom(e){this.options.minPxPerSec=e,this.reRender()}scrollIntoView(e,t=!1){const{scrollLeft:i,scrollWidth:s,clientWidth:r}=this.scrollContainer,o=e*s,a=i,c=i+r,d=r/2;if(this.isDragging)o+30>c?this.scrollContainer.scrollLeft+=30:o-30<a&&(this.scrollContainer.scrollLeft-=30);else{(o<a||o>c)&&(this.scrollContainer.scrollLeft=o-(this.options.autoCenter?d:0));const l=o-i-d;t&&this.options.autoCenter&&l>0&&(this.scrollContainer.scrollLeft+=Math.min(l,10))}{const l=this.scrollContainer.scrollLeft,m=l/s,u=(l+r)/s;this.emit("scroll",m,u,l,l+r)}}renderProgress(e,t){if(isNaN(e))return;const i=100*e;this.canvasWrapper.style.clipPath=`polygon(${i}% 0, 100% 0, 100% 100%, ${i}% 100%)`,this.progressWrapper.style.width=`${i}%`,this.cursor.style.left=`${i}%`,this.cursor.style.transform=`translateX(-${Math.round(i)===100?this.options.cursorWidth:0}px)`,this.isScrollable&&this.options.autoScroll&&this.scrollIntoView(e,t)}exportImage(e,t,i){return P(this,void 0,void 0,function*(){const s=this.canvasWrapper.querySelectorAll("canvas");if(!s.length)throw new Error("No waveform data");if(i==="dataURL"){const r=Array.from(s).map(o=>o.toDataURL(e,t));return Promise.resolve(r)}return Promise.all(Array.from(s).map(r=>new Promise((o,a)=>{r.toBlob(c=>{c?o(c):a(new Error("Could not export image"))},e,t)})))})}}D.MAX_CANVAS_WIDTH=8e3,D.MAX_NODES=10;class ie extends L{constructor(){super(...arguments),this.unsubscribe=()=>{}}start(){this.unsubscribe=this.on("tick",()=>{requestAnimationFrame(()=>{this.emit("tick")})}),this.emit("tick")}stop(){this.unsubscribe()}destroy(){this.unsubscribe()}}class O extends L{constructor(e=new AudioContext){super(),this.bufferNode=null,this.playStartTime=0,this.playedDuration=0,this._muted=!1,this._playbackRate=1,this._duration=void 0,this.buffer=null,this.currentSrc="",this.paused=!0,this.crossOrigin=null,this.seeking=!1,this.autoplay=!1,this.addEventListener=this.on,this.removeEventListener=this.un,this.audioContext=e,this.gainNode=this.audioContext.createGain(),this.gainNode.connect(this.audioContext.destination)}load(){return P(this,void 0,void 0,function*(){})}get src(){return this.currentSrc}set src(e){if(this.currentSrc=e,this._duration=void 0,!e)return this.buffer=null,void this.emit("emptied");fetch(e).then(t=>{if(t.status>=400)throw new Error(`Failed to fetch ${e}: ${t.status} (${t.statusText})`);return t.arrayBuffer()}).then(t=>this.currentSrc!==e?null:this.audioContext.decodeAudioData(t)).then(t=>{this.currentSrc===e&&(this.buffer=t,this.emit("loadedmetadata"),this.emit("canplay"),this.autoplay&&this.play())})}_play(){var e;if(!this.paused)return;this.paused=!1,(e=this.bufferNode)===null||e===void 0||e.disconnect(),this.bufferNode=this.audioContext.createBufferSource(),this.buffer&&(this.bufferNode.buffer=this.buffer),this.bufferNode.playbackRate.value=this._playbackRate,this.bufferNode.connect(this.gainNode);let t=this.playedDuration*this._playbackRate;(t>=this.duration||t<0)&&(t=0,this.playedDuration=0),this.bufferNode.start(this.audioContext.currentTime,t),this.playStartTime=this.audioContext.currentTime,this.bufferNode.onended=()=>{this.currentTime>=this.duration&&(this.pause(),this.emit("ended"))}}_pause(){var e;this.paused=!0,(e=this.bufferNode)===null||e===void 0||e.stop(),this.playedDuration+=this.audioContext.currentTime-this.playStartTime}play(){return P(this,void 0,void 0,function*(){this.paused&&(this._play(),this.emit("play"))})}pause(){this.paused||(this._pause(),this.emit("pause"))}stopAt(e){const t=e-this.currentTime,i=this.bufferNode;i==null||i.stop(this.audioContext.currentTime+t),i==null||i.addEventListener("ended",()=>{i===this.bufferNode&&(this.bufferNode=null,this.pause())},{once:!0})}setSinkId(e){return P(this,void 0,void 0,function*(){return this.audioContext.setSinkId(e)})}get playbackRate(){return this._playbackRate}set playbackRate(e){this._playbackRate=e,this.bufferNode&&(this.bufferNode.playbackRate.value=e)}get currentTime(){return(this.paused?this.playedDuration:this.playedDuration+(this.audioContext.currentTime-this.playStartTime))*this._playbackRate}set currentTime(e){const t=!this.paused;t&&this._pause(),this.playedDuration=e/this._playbackRate,t&&this._play(),this.emit("seeking"),this.emit("timeupdate")}get duration(){var e,t;return(e=this._duration)!==null&&e!==void 0?e:((t=this.buffer)===null||t===void 0?void 0:t.duration)||0}set duration(e){this._duration=e}get volume(){return this.gainNode.gain.value}set volume(e){this.gainNode.gain.value=e,this.emit("volumechange")}get muted(){return this._muted}set muted(e){this._muted!==e&&(this._muted=e,this._muted?this.gainNode.disconnect():this.gainNode.connect(this.audioContext.destination))}canPlayType(e){return/^(audio|video)\//.test(e)}getGainNode(){return this.gainNode}getChannelData(){const e=[];if(!this.buffer)return e;const t=this.buffer.numberOfChannels;for(let i=0;i<t;i++)e.push(this.buffer.getChannelData(i));return e}}const se={waveColor:"#999",progressColor:"#555",cursorWidth:1,minPxPerSec:0,fillParent:!0,interact:!0,dragToSeek:!1,autoScroll:!0,autoCenter:!0,sampleRate:8e3};class N extends te{static create(e){return new N(e)}constructor(e){const t=e.media||(e.backend==="WebAudio"?new O:void 0);super({media:t,mediaControls:e.mediaControls,autoplay:e.autoplay,playbackRate:e.audioRate}),this.plugins=[],this.decodedData=null,this.stopAtPosition=null,this.subscriptions=[],this.mediaSubscriptions=[],this.abortController=null,this.options=Object.assign({},se,e),this.timer=new ie;const i=t?void 0:this.getMediaElement();this.renderer=new D(this.options,i),this.initPlayerEvents(),this.initRendererEvents(),this.initTimerEvents(),this.initPlugins();const s=this.options.url||this.getSrc()||"";Promise.resolve().then(()=>{this.emit("init");const{peaks:r,duration:o}=this.options;(s||r&&o)&&this.load(s,r,o).catch(()=>null)})}updateProgress(e=this.getCurrentTime()){return this.renderer.renderProgress(e/this.getDuration(),this.isPlaying()),e}initTimerEvents(){this.subscriptions.push(this.timer.on("tick",()=>{if(!this.isSeeking()){const e=this.updateProgress();this.emit("timeupdate",e),this.emit("audioprocess",e),this.stopAtPosition!=null&&this.isPlaying()&&e>=this.stopAtPosition&&this.pause()}}))}initPlayerEvents(){this.isPlaying()&&(this.emit("play"),this.timer.start()),this.mediaSubscriptions.push(this.onMediaEvent("timeupdate",()=>{const e=this.updateProgress();this.emit("timeupdate",e)}),this.onMediaEvent("play",()=>{this.emit("play"),this.timer.start()}),this.onMediaEvent("pause",()=>{this.emit("pause"),this.timer.stop(),this.stopAtPosition=null}),this.onMediaEvent("emptied",()=>{this.timer.stop(),this.stopAtPosition=null}),this.onMediaEvent("ended",()=>{this.emit("timeupdate",this.getDuration()),this.emit("finish"),this.stopAtPosition=null}),this.onMediaEvent("seeking",()=>{this.emit("seeking",this.getCurrentTime())}),this.onMediaEvent("error",()=>{var e;this.emit("error",(e=this.getMediaElement().error)!==null&&e!==void 0?e:new Error("Media error")),this.stopAtPosition=null}))}initRendererEvents(){this.subscriptions.push(this.renderer.on("click",(e,t)=>{this.options.interact&&(this.seekTo(e),this.emit("interaction",e*this.getDuration()),this.emit("click",e,t))}),this.renderer.on("dblclick",(e,t)=>{this.emit("dblclick",e,t)}),this.renderer.on("scroll",(e,t,i,s)=>{const r=this.getDuration();this.emit("scroll",e*r,t*r,i,s)}),this.renderer.on("render",()=>{this.emit("redraw")}),this.renderer.on("rendered",()=>{this.emit("redrawcomplete")}),this.renderer.on("dragstart",e=>{this.emit("dragstart",e)}),this.renderer.on("dragend",e=>{this.emit("dragend",e)}));{let e;this.subscriptions.push(this.renderer.on("drag",t=>{if(!this.options.interact)return;let i;this.renderer.renderProgress(t),clearTimeout(e),this.isPlaying()?i=0:this.options.dragToSeek===!0?i=200:typeof this.options.dragToSeek=="object"&&this.options.dragToSeek!==void 0&&(i=this.options.dragToSeek.debounceTime),e=setTimeout(()=>{this.seekTo(t)},i),this.emit("interaction",t*this.getDuration()),this.emit("drag",t)}))}}initPlugins(){var e;!((e=this.options.plugins)===null||e===void 0)&&e.length&&this.options.plugins.forEach(t=>{this.registerPlugin(t)})}unsubscribePlayerEvents(){this.mediaSubscriptions.forEach(e=>e()),this.mediaSubscriptions=[]}setOptions(e){this.options=Object.assign({},this.options,e),e.duration&&!e.peaks&&(this.decodedData=_.createBuffer(this.exportPeaks(),e.duration)),e.peaks&&e.duration&&(this.decodedData=_.createBuffer(e.peaks,e.duration)),this.renderer.setOptions(this.options),e.audioRate&&this.setPlaybackRate(e.audioRate),e.mediaControls!=null&&(this.getMediaElement().controls=e.mediaControls)}registerPlugin(e){return e._init(this),this.plugins.push(e),this.subscriptions.push(e.once("destroy",()=>{this.plugins=this.plugins.filter(t=>t!==e)})),e}getWrapper(){return this.renderer.getWrapper()}getWidth(){return this.renderer.getWidth()}getScroll(){return this.renderer.getScroll()}setScroll(e){return this.renderer.setScroll(e)}setScrollTime(e){const t=e/this.getDuration();this.renderer.setScrollPercentage(t)}getActivePlugins(){return this.plugins}loadAudio(e,t,i,s){return P(this,void 0,void 0,function*(){var r;if(this.emit("load",e),!this.options.media&&this.isPlaying()&&this.pause(),this.decodedData=null,this.stopAtPosition=null,!t&&!i){const a=this.options.fetchParams||{};window.AbortController&&!a.signal&&(this.abortController=new AbortController,a.signal=(r=this.abortController)===null||r===void 0?void 0:r.signal);const c=l=>this.emit("loading",l);t=yield ee.fetchBlob(e,c,a);const d=this.options.blobMimeType;d&&(t=new Blob([t],{type:d}))}this.setSrc(e,t);const o=yield new Promise(a=>{const c=s||this.getDuration();c?a(c):this.mediaSubscriptions.push(this.onMediaEvent("loadedmetadata",()=>a(this.getDuration()),{once:!0}))});if(!e&&!t){const a=this.getMediaElement();a instanceof O&&(a.duration=o)}if(i)this.decodedData=_.createBuffer(i,o||0);else if(t){const a=yield t.arrayBuffer();this.decodedData=yield _.decode(a,this.options.sampleRate)}this.decodedData&&(this.emit("decode",this.getDuration()),this.renderer.render(this.decodedData)),this.emit("ready",this.getDuration())})}load(e,t,i){return P(this,void 0,void 0,function*(){try{return yield this.loadAudio(e,void 0,t,i)}catch(s){throw this.emit("error",s),s}})}loadBlob(e,t,i){return P(this,void 0,void 0,function*(){try{return yield this.loadAudio("",e,t,i)}catch(s){throw this.emit("error",s),s}})}zoom(e){if(!this.decodedData)throw new Error("No audio loaded");this.renderer.zoom(e),this.emit("zoom",e)}getDecodedData(){return this.decodedData}exportPeaks({channels:e=2,maxLength:t=8e3,precision:i=1e4}={}){if(!this.decodedData)throw new Error("The audio has not been decoded yet");const s=Math.min(e,this.decodedData.numberOfChannels),r=[];for(let o=0;o<s;o++){const a=this.decodedData.getChannelData(o),c=[],d=a.length/t;for(let l=0;l<t;l++){const m=a.slice(Math.floor(l*d),Math.ceil((l+1)*d));let u=0;for(let f=0;f<m.length;f++){const v=m[f];Math.abs(v)>Math.abs(u)&&(u=v)}c.push(Math.round(u*i)/i)}r.push(c)}return r}getDuration(){let e=super.getDuration()||0;return e!==0&&e!==1/0||!this.decodedData||(e=this.decodedData.duration),e}toggleInteraction(e){this.options.interact=e}setTime(e){this.stopAtPosition=null,super.setTime(e),this.updateProgress(e),this.emit("timeupdate",e)}seekTo(e){const t=this.getDuration()*e;this.setTime(t)}play(e,t){const i=Object.create(null,{play:{get:()=>super.play}});return P(this,void 0,void 0,function*(){e!=null&&this.setTime(e);const s=yield i.play.call(this);return t!=null&&(this.media instanceof O?this.media.stopAt(t):this.stopAtPosition=t),s})}playPause(){return P(this,void 0,void 0,function*(){return this.isPlaying()?this.pause():this.play()})}stop(){this.pause(),this.setTime(0)}skip(e){this.setTime(this.getCurrentTime()+e)}empty(){this.load("",[[0]],.001)}setMediaElement(e){this.unsubscribePlayerEvents(),super.setMediaElement(e),this.initPlayerEvents()}exportImage(){return P(this,arguments,void 0,function*(e="image/png",t=1,i="dataURL"){return this.renderer.exportImage(e,t,i)})}destroy(){var e;this.emit("destroy"),(e=this.abortController)===null||e===void 0||e.abort(),this.plugins.forEach(t=>t.destroy()),this.subscriptions.forEach(t=>t()),this.unsubscribePlayerEvents(),this.timer.destroy(),this.renderer.destroy(),super.destroy()}}N.BasePlugin=class extends L{constructor(n){super(),this.subscriptions=[],this.options=n}onInit(){}_init(n){this.wavesurfer=n,this.onInit()}destroy(){this.emit("destroy"),this.subscriptions.forEach(n=>n())}},N.dom=Q;const re=(n,e)=>{const[t,i]=w.useState(null);return w.useEffect(()=>{if(!n.current)return;const s=N.create({...e,container:n.current});return i(s),()=>{s.destroy()}},[e,n]),t},ne=M.div`
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
`,U=w.memo(n=>{const e=w.useRef(null),[t,i]=w.useState(!1),[s,r]=w.useState(.5),[o,a]=w.useState(0),[c,d]=w.useState(x(0)),[l,m]=w.useState(!1),u=re(e,n),f=w.useRef(null),{onPlay:v,onReady:S}=n,y=w.useCallback(()=>{u.playPause()},[u]);w.useEffect(()=>{if(!u)return;u.setVolume(s);const b=()=>({media:u.getMediaElement(),peaks:u.exportPeaks()}),h=[u.on("ready",()=>{S&&S(b()),a(x(Math.round(u.getDuration()*1e3))),i(u.isPlaying())}),u.on("play",()=>{v&&v(g=>{const C=b();return!g||g.media!==C.media?(g&&(g.media.pause(),g.media.currentTime=0),C):g}),i(!0)}),u.on("audioprocess",()=>{d(x(Math.round(u.getCurrentTime()*1e3)))}),u.on("pause",()=>i(!1))];return()=>{h.forEach(g=>g())}},[u,v,S,s]),w.useEffect(()=>{const b=f.current;b.style.setProperty("--value",b.value),b.style.setProperty("--min",b.min===""?"0":b.min),b.style.setProperty("--max",b.max===""?"100":b.max),b.style.setProperty("--value",b.value)},[]);function x(b){var h=Math.floor(b/6e4),g=(b%6e4/1e3).toFixed(0);return h+":"+(g<10?"0":"")+g}function k(b){r(b.target.value);const h=b.target;h.style.setProperty("--value",h.value),h.style.setProperty("--min",h.min===""?"0":h.min),h.style.setProperty("--max",h.max===""?"100":h.max),h.style.setProperty("--value",h.value)}function E(){m(!l)}return p.jsxs(ne,{children:[t?p.jsx("img",{className:"play-icon",src:"https://extras.thetimes.co.uk/web/2025/times-knife-crime-audio/assets/pause.png",onClick:y}):p.jsx("img",{className:"play-icon",src:"https://extras.thetimes.co.uk/web/2025/times-knife-crime-audio/assets/play.png",onClick:y}),p.jsx("div",{ref:e,style:{width:"100%"}}),p.jsxs("p",{className:"waveform-time",children:[p.jsx("span",{children:c})," / ",p.jsx("span",{children:o})]}),p.jsxs("div",{className:"volume-container",children:[p.jsx("img",{className:"volume-icon",src:"https://extras.thetimes.co.uk/web/2025/times-knife-crime-audio/assets/volume.png",onClick:E}),p.jsx("input",{ref:f,className:"styled-slider slider-progress",type:"range",id:"volume-slider",min:0,max:1,step:.1,value:s,onChange:k,style:{opacity:l?1:0,pointerEvents:l?"all":"none"}})]})]})});U.__docgenInfo={description:"",methods:[],displayName:"Equalizer"};function oe({data:n}){return p.jsxs(p.Fragment,{children:[p.jsx(W,{}),p.jsxs(K,{children:[p.jsxs("div",{className:"card-image--container",children:[p.jsx("img",{src:`https://extras.thetimes.co.uk/web/2025/times-knife-crime-audio/assets/${n.imgSrc}.jpg`,className:"card-image"}),p.jsx("p",{className:"card-name",children:n.name})]}),p.jsx("p",{className:"card-quote",children:n.quote}),p.jsx(U,{height:100,waveColor:"#ff0000",progressColor:"#940000",url:`https://extras.thetimes.co.uk/web/2025/times-knife-crime-audio/assets/${n.audioSrc}.m4a`,normalize:!0,barWidth:2,barGap:2,barRadius:2,cursorWidth:2},n.id)]})]})}oe.__docgenInfo={description:"",methods:[],displayName:"AudioPlayer"};var A={},I={},q;function ae(){return q||(q=1,function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e;function t(s,r,o){return r in s?Object.defineProperty(s,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):s[r]=o,s}var i={digital:(e={blue:{r:37,g:66,b:81},yellow:{r:224,g:171,b:38},lightBlue:{r:224,g:171,b:38}},t(e,"yellow",{r:128,g:177,b:226}),t(e,"orange",{r:243,g:127,b:47}),t(e,"teal",{r:50,g:146,b:166}),t(e,"purple",{r:108,g:60,b:94}),t(e,"sand",{r:218,g:207,b:193}),e),ukPoliticalParties:{con:{r:64,g:147,b:178},lab:{r:236,g:81,b:86},libdem:{r:246,g:197,b:94},ukip:{r:151,g:103,b:174},snp:{r:255,g:246,b:133},green:{r:97,g:169,b:97},pc:{r:144,g:205,b:124},dup:{r:161,g:82,b:82},sf:{r:68,g:150,b:107},sdlp:{r:125,g:161,b:125},uup:{r:63,g:97,b:124},others:{r:160,g:147,b:143}}};n.default=i}(I)),I}var $={},F;function le(){return F||(F=1,function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={micro:"400px",small:"520px",mobile:"768px",tablet:"1024px",desktop:"1200px","desktop-wide":"1320px"};n.default=e}($)),$}var V;function de(){return V||(V=1,function(n){Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"colors",{enumerable:!0,get:function(){return e.default}}),Object.defineProperty(n,"breakpoints",{enumerable:!0,get:function(){return t.default}});var e=i(ae()),t=i(le());function i(s){return s&&s.__esModule?s:{default:s}}}(A)),A}de();const ce=M.div`
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

`;function Y({headline:n,standfirst:e}){return p.jsxs(ce,{children:[n&&p.jsx("h1",{className:"headline",children:n}),e&&p.jsx("p",{className:"standfirst",children:e})]})}Y.__docgenInfo={description:"",methods:[],displayName:"Header"};const he=M.div`
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
`,ue=M.img`
    width: 100%;
    height: 80px;

    object-fit: cover;
    cursor: pointer;

    // * CONDITIONAL STYLES
    opacity: ${n=>n.isHovered?"1":"0.5"};

    -webkit-filter: ${n=>n.grayscale?"grayscale(100%)":"none"};
    filter: ${n=>n.grayscale?"grayscale(100%)":"none"};

    transition: opacity 250ms ease-in;
`;function Z({data:n,clickedImage:e,setClickedImage:t,setShowTooltip:i,setTooltipPos:s}){function r(a,c){t(c),i(!0),s([a.clientX,a.target.offsetTop+a.target.offsetHeight-20])}const o=n.map(a=>p.jsx(ue,{src:`https://nuk-tnl-editorial-prod-staticassets.s3.amazonaws.com/2024/times-image-grid/assets/${a.imgSrc}.jpg`,alt:a.name,grayscale:!1,lazy:!0,onClick:c=>r(c,a),isHovered:e===a},a.id));return p.jsx(he,{children:o})}Z.__docgenInfo={description:"",methods:[],displayName:"Grid"};const pe=M.div`
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
`;function J({clickedImage:n,setClickedImage:e,tooltipPos:t,showTooltip:i,setShowTooltip:s,isImageInLastRow:r}){if(!n)return;function o(){s(!1),e(null)}return p.jsxs(pe,{showTooltip:i,tooltipPos:t,isImageInLastRow:r,children:[p.jsx("img",{className:"tooltip-image",src:`https://nuk-tnl-editorial-prod-staticassets.s3.amazonaws.com/2024/times-image-grid/assets/${n.imgSrc}.jpg`,alt:n.name}),p.jsxs("div",{className:"tooltip-content",children:[p.jsx("h3",{children:n.name}),p.jsx("p",{children:n.copy})]}),p.jsx("button",{className:"tooltip-close",onClick:o,children:p.jsx("img",{src:"https://nuk-tnl-editorial-prod-staticassets.s3.amazonaws.com/2023/st-grid-jeremy-clarkson/assets/x.svg"})})]})}J.__docgenInfo={description:"",methods:[],displayName:"Tooltip"};function me({data:n}){const[e,t]=w.useState(null),[i,s]=w.useState(!1),[r,o]=w.useState([0,0]);let c=n.length-n.indexOf(e)<=7;return p.jsxs(p.Fragment,{children:[p.jsx(W,{}),p.jsxs(G,{children:[p.jsx(Y,{headline:"Lorem ipsum dolor sit amet",standfirst:"Nulla vel augue ut erat efficitur scelerisque id vel tellus. Ut iaculis nulla sit amet lorem rutrum, ac luctus sem imperdiet"}),p.jsx(Z,{data:n,clickedImage:e,setClickedImage:t,setShowTooltip:s,setTooltipPos:o}),p.jsx(J,{clickedImage:e,setClickedImage:t,showTooltip:i,setShowTooltip:s,tooltipPos:r,isImageInLastRow:c})]})]})}me.__docgenInfo={description:"",methods:[],displayName:"ImageGrid"};M.div`
    position: relative;
    width: 100%;
`;const ge=M.div`
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
`,fe=M.div`
    position: relative;
    width: 100%;
    height: 100%;
`,be=M.div`
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
`,ve=M.section`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`,ye=M.p`
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
`;function xe({data:n}){const{slides:e=[],imgFit:t="cover",containerWidth:i="edge-to-edge",borderRadius:s="0",fixedImgHeight:r,fontSize:o="md",videoLoop:a=!0,videoAutoplay:c=!0,videoControls:d=!1,videoMute:l=!0}=n,[m,u]=w.useState(0),[f,v]=w.useState([]),S=w.useRef([]),y=w.useRef([]);w.useEffect(()=>{const h=new IntersectionObserver(g=>{g.forEach(C=>{if(C.isIntersecting){const T=parseInt(C.target.dataset.index,10);u(T)}})},{threshold:.6});return S.current.forEach(g=>g&&h.observe(g)),()=>h.disconnect()},[e.length]),w.useEffect(()=>{const h=e.map((g,C)=>C===m);v(h)},[m,e]);const x=h=>f[h]?2:1,k=h=>{var g;if(h.includes("youtube.com")){const C=(g=h.split("v=")[1])==null?void 0:g.split("&")[0];return`https://www.youtube.com/embed/${C}?autoplay=${c?1:0}&loop=${a?1:0}&controls=${d?1:0}&mute=${l?1:0}&playlist=${C}`}else if(h.includes("vimeo.com"))return`https://player.vimeo.com/video/${h.split("/").pop()}?autoplay=${c?1:0}&loop=${a?1:0}&controls=${d?1:0}&muted=${l?1:0}`;return h},E=h=>h.includes("youtube.com")||h.includes("youtu.be"),b=h=>h.endsWith(".mp4");return p.jsxs(p.Fragment,{children:[p.jsx(W,{}),p.jsxs(G,{children:[p.jsx(ge,{style:{height:r||"500px"},className:i==="edge-to-edge"?"edge-to-edge":i==="bleed"?"bleed":"",children:p.jsx(fe,{children:e.map((h,g)=>p.jsx(be,{ref:C=>y.current[g]=C,className:f[g]?"overlap":"",style:{zIndex:x(g)},children:E(h.media)?p.jsx("iframe",{title:"YouTube video",src:k(h.media),frameBorder:"0",allow:"autoplay; encrypted-media",allowFullScreen:!0,style:{objectFit:t,width:"100%",height:r||(i==="edge-to-edge"?"100vh":"100%"),borderRadius:s}}):b(h.media)?p.jsx("video",{autoPlay:c,loop:a,controls:d,muted:l,style:{objectFit:t,width:"100%",height:r||"100%",borderRadius:s},children:p.jsx("source",{src:h.media,type:"video/mp4"})}):p.jsx("img",{src:h.media,alt:h.altText||"Slide image",style:{objectFit:t,width:"100%",height:r||"100%",borderRadius:s}})},g))})}),p.jsx("div",{className:"scroller-sections",children:e.map((h,g)=>p.jsx(ve,{className:"trigger","data-index":g,ref:C=>S.current[g]=C,children:h.text&&p.jsx(ye,{size:o,dangerouslySetInnerHTML:{__html:h.text}})},g))})]})]})}xe.__docgenInfo={description:"",methods:[],displayName:"ScrollStory"};const we=M.div`
    width: 100%;
    position: relative;
    margin: 20px auto;
`,Ce=M.iframe`
    width: 100%;
    border: 0;
    display: block;
`;function ke({chartId:n,version:e="1",title:t=""}){const i=`datawrapper-chart-${n}`,s=`https://datawrapper.dwcdn.net/${n}/${e}/`,r=400,o=w.useRef(null),[a,c]=w.useState(r);return w.useEffect(()=>{function d(l){var u;if(!o.current||!((u=l.data)!=null&&u["datawrapper-height"]))return;const m=l.data["datawrapper-height"][o.current.id];m&&c(m)}return window.addEventListener("message",d),()=>window.removeEventListener("message",d)},[]),p.jsxs(p.Fragment,{children:[p.jsx(W,{}),p.jsx(we,{children:p.jsx(Ce,{ref:o,id:i,title:t,src:s,height:a,allowFullScreen:!0})})]})}ke.__docgenInfo={description:"",methods:[],displayName:"DataWrapperEmbed",props:{version:{defaultValue:{value:"'1'",computed:!1},required:!1},title:{defaultValue:{value:"''",computed:!1},required:!1}}};export{oe as A,ke as D,me as I,xe as S};
