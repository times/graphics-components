/*! For license information please see 795.91cbc17b.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunktimes_graphics_components=self.webpackChunktimes_graphics_components||[]).push([[795],{"./node_modules/react/cjs/react-jsx-runtime.production.js":(__unused_webpack_module,exports)=>{var REACT_ELEMENT_TYPE=Symbol.for("react.transitional.element"),REACT_FRAGMENT_TYPE=Symbol.for("react.fragment");function jsxProd(type,config,maybeKey){var key=null;if(void 0!==maybeKey&&(key=""+maybeKey),void 0!==config.key&&(key=""+config.key),"key"in config)for(var propName in maybeKey={},config)"key"!==propName&&(maybeKey[propName]=config[propName]);else maybeKey=config;return config=maybeKey.ref,{$$typeof:REACT_ELEMENT_TYPE,type,key,ref:void 0!==config?config:null,props:maybeKey}}exports.Fragment=REACT_FRAGMENT_TYPE,exports.jsx=jsxProd,exports.jsxs=jsxProd},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.js")},"./src/lib/components/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y$:()=>components_AudioPlayer,Kl:()=>ImageGrid});var react=__webpack_require__("./node_modules/react/index.js"),wavesurfer_esm=__webpack_require__("./node_modules/wavesurfer.js/dist/wavesurfer.esm.js");const hooks_useWaveSurfer=(containerRef,options)=>{const[wavesurfer,setWavesurfer]=(0,react.useState)(null);return(0,react.useEffect)((()=>{if(!containerRef.current)return;const ws=wavesurfer_esm.A.create({...options,container:containerRef.current});return setWavesurfer(ws),()=>{ws.destroy()}}),[options,containerRef]),wavesurfer};var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const EqualizerContainer=styled_components_browser_esm.Ay.div`
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
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Equalizer=(0,react.memo)((props=>{const containerRef=(0,react.useRef)(null),[isPlaying,setIsPlaying]=(0,react.useState)(!1),[volume,setVolume]=(0,react.useState)(.5),[totalTime,setTotalTime]=(0,react.useState)(0),[currentTime,setCurrentTime]=(0,react.useState)(millisToMinutesAndSeconds(0)),[showVolumeSlider,setShowVolumeSlider]=(0,react.useState)(!1),wavesurfer=hooks_useWaveSurfer(containerRef,props),inputRef=(0,react.useRef)(null),{onPlay,onReady}=props,onPlayClick=(0,react.useCallback)((()=>{wavesurfer.playPause()}),[wavesurfer]);function millisToMinutesAndSeconds(millis){var minutes=Math.floor(millis/6e4),seconds=(millis%6e4/1e3).toFixed(0);return minutes+":"+(seconds<10?"0":"")+seconds}return(0,react.useEffect)((()=>{if(!wavesurfer)return;wavesurfer.setVolume(volume);const getPlayerParams=()=>({media:wavesurfer.getMediaElement(),peaks:wavesurfer.exportPeaks()}),subscriptions=[wavesurfer.on("ready",(()=>{onReady&&onReady(getPlayerParams()),setTotalTime(millisToMinutesAndSeconds(Math.round(1e3*wavesurfer.getDuration()))),setIsPlaying(wavesurfer.isPlaying())})),wavesurfer.on("play",(()=>{onPlay&&onPlay((prev=>{const newParams=getPlayerParams();return prev&&prev.media===newParams.media?prev:(prev&&(prev.media.pause(),prev.media.currentTime=0),newParams)})),setIsPlaying(!0)})),wavesurfer.on("audioprocess",(()=>{setCurrentTime(millisToMinutesAndSeconds(Math.round(1e3*wavesurfer.getCurrentTime())))})),wavesurfer.on("pause",(()=>setIsPlaying(!1)))];return()=>{subscriptions.forEach((unsub=>unsub()))}}),[wavesurfer,onPlay,onReady,volume]),(0,react.useEffect)((()=>{const el=inputRef.current;el.style.setProperty("--value",el.value),el.style.setProperty("--min",""===el.min?"0":el.min),el.style.setProperty("--max",""===el.max?"100":el.max),el.style.setProperty("--value",el.value)}),[]),(0,jsx_runtime.jsxs)(EqualizerContainer,{children:[isPlaying?(0,jsx_runtime.jsx)("img",{className:"play-icon",src:"https://extras.thetimes.co.uk/web/2025/times-knife-crime-audio/assets/pause.png",onClick:onPlayClick}):(0,jsx_runtime.jsx)("img",{className:"play-icon",src:"https://extras.thetimes.co.uk/web/2025/times-knife-crime-audio/assets/play.png",onClick:onPlayClick}),(0,jsx_runtime.jsx)("div",{ref:containerRef,style:{width:"100%"}}),(0,jsx_runtime.jsxs)("p",{className:"waveform-time",children:[(0,jsx_runtime.jsx)("span",{children:currentTime})," / ",(0,jsx_runtime.jsx)("span",{children:totalTime})]}),(0,jsx_runtime.jsxs)("div",{className:"volume-container",children:[(0,jsx_runtime.jsx)("img",{className:"volume-icon",src:"https://extras.thetimes.co.uk/web/2025/times-knife-crime-audio/assets/volume.png",onClick:function handleVolumeSlider(){setShowVolumeSlider(!showVolumeSlider)}}),(0,jsx_runtime.jsx)("input",{ref:inputRef,className:"styled-slider slider-progress",type:"range",id:"volume-slider",min:0,max:1,step:.1,value:volume,onChange:function handleChange(e){setVolume(e.target.value);const el=e.target;el.style.setProperty("--value",el.value),el.style.setProperty("--min",""===el.min?"0":el.min),el.style.setProperty("--max",""===el.max?"100":el.max),el.style.setProperty("--value",el.value)},style:{opacity:showVolumeSlider?1:0,pointerEvents:showVolumeSlider?"all":"none"}})]})]})})),components_Equalizer=Equalizer;Equalizer.__docgenInfo={description:"",methods:[],displayName:"Equalizer"};const GlobalStyle=styled_components_browser_esm.DU`
  @font-face {
    font-family: "Times Modern";
    src: url("../lib/assets/fonts/TimesModernRegular.woff2") format("woff2");
    font-display: swap;
    font-style: normal;
    font-weight: 400;
  }

`,Container=styled_components_browser_esm.Ay.div`
    font-family: 'RobotoRegular', sans-serif;
    font-size: 1.6rem;

    margin-block-start: 1em;
    margin-block-end: 100px;
`,CardContainer=styled_components_browser_esm.Ay.div`
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
`;function AudioPlayer(_ref){let{data}=_ref;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(GlobalStyle,{}),(0,jsx_runtime.jsxs)(CardContainer,{children:[(0,jsx_runtime.jsxs)("div",{className:"card-image--container",children:[(0,jsx_runtime.jsx)("img",{src:`https://extras.thetimes.co.uk/web/2025/times-knife-crime-audio/assets/${data.imgSrc}.jpg`,className:"card-image"}),(0,jsx_runtime.jsx)("p",{className:"card-name",children:data.name})]}),(0,jsx_runtime.jsx)("p",{className:"card-quote",children:data.quote}),(0,jsx_runtime.jsx)(components_Equalizer,{height:100,waveColor:"#ff0000",progressColor:"#940000",url:`https://extras.thetimes.co.uk/web/2025/times-knife-crime-audio/assets/${data.audioSrc}.m4a`,normalize:!0,barWidth:2,barGap:2,barRadius:2,cursorWidth:2},data.id)]})]})}const components_AudioPlayer=AudioPlayer;AudioPlayer.__docgenInfo={description:"",methods:[],displayName:"AudioPlayer"};var lib=__webpack_require__("./node_modules/@times-visuals/styles/lib/index.js");const HeadingContainer=styled_components_browser_esm.Ay.div`
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

    @media (min-width: ${lib.fi.mobile}) {
        padding-inline: 72.297px;
    }

    @media (min-width: ${lib.fi.tablet}) {
        padding-inline: 220.5px;
    }

    @media (min-width: ${lib.fi.desktop}) {
        padding-inline: 258.4px;
    }
`;function Header(_ref){let{headline,standfirst}=_ref;return(0,jsx_runtime.jsxs)(HeadingContainer,{children:[headline&&(0,jsx_runtime.jsx)("h1",{className:"headline",children:headline}),standfirst&&(0,jsx_runtime.jsx)("p",{className:"standfirst",children:standfirst})]})}const components_Header=Header;Header.__docgenInfo={description:"",methods:[],displayName:"Header"};const GridContainer=styled_components_browser_esm.Ay.div`
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
`,ImageProfile=styled_components_browser_esm.Ay.img`
    width: 100%;
    height: 150px;

    object-fit: cover;
    cursor: pointer;

    // * CONDITIONAL STYLES
    opacity: ${props=>props.isHovered?"1":"0.5"};

    -webkit-filter: ${props=>props.grayscale?"grayscale(100%)":"none"};
    filter: ${props=>props.grayscale?"grayscale(100%)":"none"};

    transition: opacity 250ms ease-in;
`;function Grid(_ref){let{data,clickedImage,setClickedImage,setShowTooltip,setTooltipPos}=_ref;const imageEls=data.map((d=>(0,jsx_runtime.jsx)(ImageProfile,{src:`https://nuk-tnl-editorial-prod-staticassets.s3.amazonaws.com/2024/times-image-grid/assets/${d.imgSrc}.jpg`,alt:d.name,grayscale:!1,lazy:!0,onClick:e=>function handleClick(e,d){setClickedImage(d),setShowTooltip(!0),setTooltipPos([e.clientX,e.target.offsetTop+e.target.offsetHeight-20])}(e,d),isHovered:clickedImage===d},d.id)));return(0,jsx_runtime.jsx)(GridContainer,{children:imageEls})}const components_Grid=Grid;Grid.__docgenInfo={description:"",methods:[],displayName:"Grid"};const TooltipContainer=styled_components_browser_esm.Ay.div`
    position: absolute;
    left: 0px;
    top: ${props=>props.isImageInLastRow?props.tooltipPos[1]-380:props.tooltipPos[1]}px;

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

    opacity: ${props=>props.showTooltip?"1":"0"};
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
`;function Tooltip(_ref){let{clickedImage,setClickedImage,tooltipPos,showTooltip,setShowTooltip,isImageInLastRow}=_ref;if(clickedImage)return(0,jsx_runtime.jsxs)(TooltipContainer,{showTooltip,tooltipPos,isImageInLastRow,children:[(0,jsx_runtime.jsx)("img",{className:"tooltip-image",src:`https://nuk-tnl-editorial-prod-staticassets.s3.amazonaws.com/2024/times-image-grid/assets/${clickedImage.imgSrc}.jpg`,alt:clickedImage.name}),(0,jsx_runtime.jsxs)("div",{className:"tooltip-content",children:[(0,jsx_runtime.jsx)("h3",{children:clickedImage.name}),(0,jsx_runtime.jsx)("p",{children:clickedImage.copy})]}),(0,jsx_runtime.jsx)("button",{className:"tooltip-close",onClick:function handleClick(){setShowTooltip(!1),setClickedImage(null)},children:(0,jsx_runtime.jsx)("img",{src:"https://nuk-tnl-editorial-prod-staticassets.s3.amazonaws.com/2023/st-grid-jeremy-clarkson/assets/x.svg"})})]})}const components_Tooltip=Tooltip;function ImageGrid(_ref){let{data}=_ref;const[clickedImage,setClickedImage]=(0,react.useState)(null),[showTooltip,setShowTooltip]=(0,react.useState)(!1),[tooltipPos,setTooltipPos]=(0,react.useState)([0,0]);let isImageInLastRow=data.length-data.indexOf(clickedImage)<=7;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(GlobalStyle,{}),(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)(components_Header,{headline:"Lorem ipsum dolor sit amet",standfirst:"Nulla vel augue ut erat efficitur scelerisque id vel tellus. Ut iaculis nulla sit amet lorem rutrum, ac luctus sem imperdiet"}),(0,jsx_runtime.jsx)(components_Grid,{data,clickedImage,setClickedImage,setShowTooltip,setTooltipPos}),(0,jsx_runtime.jsx)(components_Tooltip,{clickedImage,setClickedImage,showTooltip,setShowTooltip,tooltipPos,isImageInLastRow})]})]})}Tooltip.__docgenInfo={description:"",methods:[],displayName:"Tooltip"},ImageGrid.__docgenInfo={description:"",methods:[],displayName:"ImageGrid"}},"./src/storybook/decorators/WithTextWrapper.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Wrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div`
    padding: 20px;
    text-align: center;
    max-width: 1182px;
    margin-left: auto;
    margin-right: auto;
`,SMALL=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.small`
    font-size: 12px;
    width: 90%;
    text-align: left;
    margin: 0 auto;
    color: #333333;
    display: block;
    font-family:
        "Times Modern",
        serif;

    @media (min-width: 768px) {
        font-size: 12px;
        line-height: 30px;
        padding-left: 0;
        padding-right: 0;
        width: 80.8%;
    }

    @media (min-width: 1024px) {
        width: 56.2%;
    }
`,H1=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.h1`
    font-size: 24px;
    width: 90%;
    text-align: left;
    margin: 0 auto;
    color: #333333;
    display: block;
     font-family:
        "Times Modern",
        serif;

    @media (min-width: 768px) {
        font-size: 34px;
        line-height: 30px;
        padding-left: 0;
        padding-right: 0;
        width: 80.8%;
        margin-bottom: 20px;
    }

    @media (min-width: 1024px) {
        width: 56.2%;
    }
`,Text=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.p`
    font-size: 16px;
    line-height: 28px;
    padding-left: 10px;
    padding-right: 10px;
    width: 90%;
    text-align: left;
    margin: 0 auto;
    color: #333333;
    display: block;
     font-family:
        "Times Modern",
        serif;

    @media (min-width: 768px) {
        font-size: 18px;
        line-height: 30px;
        padding-left: 0;
        padding-right: 0;
        width: 80.8%;
    }

    @media (min-width: 1024px) {
        width: 56.2%;
    }
`,WithTextWrapper=_ref=>{let{children}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Wrapper,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SMALL,{children:"INTERACTIVE"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(H1,{children:"Times article harness"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut justo at risus euismod dictum. Proin maximus purus ex, sit amet lobortis sapien pretium sit amet. Curabitur vehicula ipsum ac suscipit congue. Cras dignissim et dui pharetra blandit. Aenean ex odio, congue ut tincidunt eu, auctor ut lectus. Nam venenatis diam nec scelerisque tempus. Pellentesque laoreet semper est ac condimentum. Suspendisse posuere nisl et malesuada sollicitudin. Vivamus eget vehicula felis. Pellentesque sollicitudin pretium tortor, vitae rhoncus diam euismod in. Etiam nec tincidunt neque. Nullam facilisis elementum nisl cursus finibus. Cras quis faucibus lacus."}),children,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut justo at risus euismod dictum. Proin maximus purus ex, sit amet lobortis sapien pretium sit amet. Curabitur vehicula ipsum ac suscipit congue. Cras dignissim et dui pharetra blandit. Aenean ex odio, congue ut tincidunt eu, auctor ut lectus. Nam venenatis diam nec scelerisque tempus. Pellentesque laoreet semper est ac condimentum. Suspendisse posuere nisl et malesuada sollicitudin. Vivamus eget vehicula felis. Pellentesque sollicitudin pretium tortor, vitae rhoncus diam euismod in. Etiam nec tincidunt neque. Nullam facilisis elementum nisl cursus finibus. Cras quis faucibus lacus."})]})},__WEBPACK_DEFAULT_EXPORT__=WithTextWrapper;WithTextWrapper.__docgenInfo={description:"",methods:[],displayName:"WithTextWrapper"}}}]);
//# sourceMappingURL=795.91cbc17b.iframe.bundle.js.map