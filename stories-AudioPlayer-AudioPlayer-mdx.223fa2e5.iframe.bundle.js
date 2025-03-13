(self.webpackChunktimes_graphics_components=self.webpackChunktimes_graphics_components||[]).push([[280],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./node_modules/@storybook/addon-docs/dist/chunk-NUUEMKO5.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{f:()=>DocsRenderer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.XA,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.zE,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Sw},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.kQ;return new Promise(((resolve,reject)=>{__webpack_require__.e(294).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then((({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.renderElement)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs,{context,docsParameter}))),element))).then((()=>resolve()))}))},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.unmountElement)(element)}}}},"./node_modules/@storybook/blocks/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/blocks/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./src/lib/components/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Y:()=>components_AudioPlayer});var react=__webpack_require__("./node_modules/react/index.js"),wavesurfer_esm=__webpack_require__("./node_modules/wavesurfer.js/dist/wavesurfer.esm.js");const hooks_useWaveSurfer=(containerRef,options)=>{const[wavesurfer,setWavesurfer]=(0,react.useState)(null);return(0,react.useEffect)((()=>{if(!containerRef.current)return;const ws=wavesurfer_esm.A.create({...options,container:containerRef.current});return setWavesurfer(ws),()=>{ws.destroy()}}),[options,containerRef]),wavesurfer};var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const EqualizerContainer=styled_components_browser_esm.Ay.div`
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
    src: url(/d/fonts/TimesModern/TimesModern-Regular-f3419df85d.woff2) format("woff2");
    font-display: swap;
    font-style: normal;
    font-weight: 400;
  }

`,CardContainer=styled_components_browser_esm.Ay.div`
    font-family: 'RobotoRegular', sans-serif;

    background-color: black;
    color: white;

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
`;function AudioPlayer(_ref){let{data}=_ref;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(GlobalStyle,{}),(0,jsx_runtime.jsxs)(CardContainer,{children:[(0,jsx_runtime.jsxs)("div",{className:"card-image--container",children:[(0,jsx_runtime.jsx)("img",{src:`https://extras.thetimes.co.uk/web/2025/times-knife-crime-audio/assets/${data.imgSrc}.jpg`,className:"card-image"}),(0,jsx_runtime.jsx)("p",{className:"card-name",children:data.name})]}),(0,jsx_runtime.jsx)("p",{className:"card-quote",children:data.quote}),(0,jsx_runtime.jsx)(components_Equalizer,{height:100,waveColor:"#ff0000",progressColor:"#940000",url:`https://extras.thetimes.co.uk/web/2025/times-knife-crime-audio/assets/${data.audioSrc}.m4a`,normalize:!0,barWidth:2,barGap:2,barRadius:2,cursorWidth:2},data.id)]})]})}const components_AudioPlayer=AudioPlayer;AudioPlayer.__docgenInfo={description:"",methods:[],displayName:"AudioPlayer"}},"./src/stories/AudioPlayer/AudioPlayer.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=(__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-PRSJUHPQ.mjs"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-NUUEMKO5.mjs"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-H6MOWX77.mjs"),__webpack_require__("storybook/internal/preview-api"),__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")),components=__webpack_require__("./src/lib/components/index.js");function _createMdxContent(props){const _components={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,lib.R)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"audioplayer",children:"AudioPlayer"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"A component for playing audio with a waveform visualization. This component integrates an equalizer visualization and allows users to play, pause, and interact with the audio in a visually engaging manner."}),"\n",(0,jsx_runtime.jsx)(dist.W8,{title:"Components/AudioPlayer",component:components.Y}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"AudioPlayer"})," component is designed to provide an interactive way to play audio while displaying a waveform visualization. It supports customizable styles and properties, making it versatile for different use cases."]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"features",children:"Features"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsxs)(_components.li,{children:["🎵 ",(0,jsx_runtime.jsx)(_components.strong,{children:"Waveform visualization"}),": Displays the audio waveform dynamically."]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:["⏯ ",(0,jsx_runtime.jsx)(_components.strong,{children:"Play/Pause control"}),": Users can toggle playback."]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:["🔊 ",(0,jsx_runtime.jsx)(_components.strong,{children:"Volume control"}),": Adjust audio volume dynamically."]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:["🖼 ",(0,jsx_runtime.jsx)(_components.strong,{children:"Image & Quote support"}),": Can display an image and a short text description."]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:["📂 ",(0,jsx_runtime.jsx)(_components.strong,{children:"Flexible Data Input"}),": Accepts an object with ",(0,jsx_runtime.jsx)(_components.code,{children:"id"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"name"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"quote"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"imgSrc"}),", and ",(0,jsx_runtime.jsx)(_components.code,{children:"audioSrc"}),"."]}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["To use the ",(0,jsx_runtime.jsx)(_components.code,{children:"AudioPlayer"})," component in your project, import it and pass the required props."]}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"import AudioPlayer from 'the-times-graphics-components';\r\n\r\n<AudioPlayer \r\n  data={{\r\n    id: '1',\r\n    name: 'Sample Audio',\r\n    quote: 'This is a sample audio player.',\r\n    imgSrc: 'sample-image',\r\n    audioSrc: 'sample-audio'\r\n  }}\r\n/>\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"notes",children:"Notes"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsxs)(_components.li,{children:["Ensure that the ",(0,jsx_runtime.jsx)(_components.code,{children:"audioSrc"})," points to a valid audio file (e.g., ",(0,jsx_runtime.jsx)(_components.code,{children:".mp3"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:".wav"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:".m4a"}),")."]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"imgSrc"})," should be a valid image file accessible in the project."]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:["If no ",(0,jsx_runtime.jsx)(_components.code,{children:"quote"})," is provided, the component will still function correctly without displaying a description."]}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"This component is designed to be flexible and can be styled further using styled-components or external CSS to fit different UI requirements."})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}}}]);
//# sourceMappingURL=stories-AudioPlayer-AudioPlayer-mdx.223fa2e5.iframe.bundle.js.map