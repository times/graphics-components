import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-CB3_FCD4.js";import"./App-F7iu6esv.js";import{A as r}from"./index-BcUqYuF1.js";import{M as t}from"./index-DieRKL1D.js";import"./index-MPVjHJeJ.js";import"./preview-OCLSlt1b.js";import"./iframe-C9WIXs6N.js";import"./DocsRenderer-CFRXHY34-BEygJx-t.js";import"./react-18-BlUjvyv-.js";import"./index-Bzm33-PM.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function o(n){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i.h1,{id:"audioplayer",children:"AudioPlayer"}),`
`,e.jsx(i.p,{children:"A component for playing audio with a waveform visualization. This component integrates an equalizer visualization and allows users to play, pause, and interact with the audio in a visually engaging manner."}),`
`,e.jsx(t,{title:"Components/AudioPlayer",component:r}),`
`,e.jsx(i.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"AudioPlayer"})," component is designed to provide an interactive way to play audio while displaying a waveform visualization. It supports customizable styles and properties, making it versatile for different use cases."]}),`
`,e.jsx(i.h2,{id:"features",children:"Features"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["🎵 ",e.jsx(i.strong,{children:"Waveform visualization"}),": Displays the audio waveform dynamically."]}),`
`,e.jsxs(i.li,{children:["⏯ ",e.jsx(i.strong,{children:"Play/Pause control"}),": Users can toggle playback."]}),`
`,e.jsxs(i.li,{children:["🔊 ",e.jsx(i.strong,{children:"Volume control"}),": Adjust audio volume dynamically."]}),`
`,e.jsxs(i.li,{children:["🖼 ",e.jsx(i.strong,{children:"Image & Quote support"}),": Can display an image and a short text description."]}),`
`,e.jsxs(i.li,{children:["📂 ",e.jsx(i.strong,{children:"Flexible Data Input"}),": Accepts an object with ",e.jsx(i.code,{children:"id"}),", ",e.jsx(i.code,{children:"name"}),", ",e.jsx(i.code,{children:"quote"}),", ",e.jsx(i.code,{children:"imgSrc"}),", and ",e.jsx(i.code,{children:"audioSrc"}),"."]}),`
`]}),`
`,e.jsx(i.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(i.p,{children:["To use the ",e.jsx(i.code,{children:"AudioPlayer"})," component in your project, import it and pass the required props."]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-jsx",children:`import { AudioPlayer } from '@times/graphics-components';

<AudioPlayer 
  data={{
    id: '1',
    name: 'Sample Audio',
    quote: 'This is a sample audio player.',
    imgSrc: 'sample-image',
    audioSrc: 'sample-audio'
  }}
/>
`})}),`
`,e.jsx(i.h2,{id:"notes",children:"Notes"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Ensure that the ",e.jsx(i.code,{children:"audioSrc"})," points to a valid audio file (e.g., ",e.jsx(i.code,{children:".mp3"}),", ",e.jsx(i.code,{children:".wav"}),", ",e.jsx(i.code,{children:".m4a"}),")."]}),`
`,e.jsxs(i.li,{children:["The ",e.jsx(i.code,{children:"imgSrc"})," should be a valid image file accessible in the project."]}),`
`,e.jsxs(i.li,{children:["If no ",e.jsx(i.code,{children:"quote"})," is provided, the component will still function correctly without displaying a description."]}),`
`]}),`
`,e.jsx(i.p,{children:"This component is designed to be flexible and can be styled further using styled-components or external CSS to fit different UI requirements."})]})}function v(n={}){const{wrapper:i}={...s(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(o,{...n})}):o(n)}export{v as default};
