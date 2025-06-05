import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-B5Ip8tK9.js";import"./App-Daxsf6a7.js";import{a as o}from"./index-VN6yc_Z_.js";import"./index-04EgjTPC.js";import"./index-BvmmDGMR.js";import{M as t}from"./index-B3XoukBn.js";import"./index-U0ga5oGA.js";import"./preview-Dv4S1djZ.js";import"./iframe-CtDn_5ff.js";import"./DocsRenderer-CFRXHY34-bVSwbYMM.js";import"./react-18-SRpBHcoT.js";import"./index-BVR6w1bU.js";import"./figma-theme-Cs2p2sUX.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function s(n){const r={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Components/ImageSlider",component:o}),`
`,e.jsx(r.h1,{id:"imageslider",children:"ImageSlider"}),`
`,e.jsx(r.p,{children:"A component for comparing two images using an interactive slider. Commonly used for before/after visual comparisons."}),`
`,e.jsx(r.h2,{id:"features",children:"Features"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["↔️ ",e.jsx(r.strong,{children:"Draggable Slider"}),": Interactive handle reveals either side of the image."]}),`
`,e.jsxs(r.li,{children:["🖼 ",e.jsx(r.strong,{children:"Image Comparison"}),": Accepts ",e.jsx(r.code,{children:"beforeImage"})," and ",e.jsx(r.code,{children:"afterImage"})," props."]}),`
`,e.jsxs(r.li,{children:["🏷 ",e.jsx(r.strong,{children:"Custom Labels"}),': Show optional "Before" and "After" tags.']}),`
`,e.jsxs(r.li,{children:["✨ ",e.jsx(r.strong,{children:"Photo Credits"}),": Optionally include source credits below."]}),`
`,e.jsxs(r.li,{children:["📱 ",e.jsx(r.strong,{children:"Responsive"}),": Works on desktop and mobile."]}),`
`,e.jsxs(r.li,{children:["♿ ",e.jsx(r.strong,{children:"Accessible"}),": Keyboard support and semantic markup."]}),`
`]}),`
`,e.jsx(r.h2,{id:"props",children:"Props"}),`
`,e.jsxs(r.h3,{id:"beforeimage-required",children:[e.jsx(r.code,{children:"beforeImage"})," (required)"]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Type:"})," ",e.jsx(r.code,{children:"string"}),e.jsx(r.br,{}),`
`,'URL of the "before" image.']}),`
`,e.jsx(r.hr,{}),`
`,e.jsxs(r.h3,{id:"afterimage-required",children:[e.jsx(r.code,{children:"afterImage"})," (required)"]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Type:"})," ",e.jsx(r.code,{children:"string"}),e.jsx(r.br,{}),`
`,'URL of the "after" image.']}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h3,{id:"beforelabel",children:e.jsx(r.code,{children:"beforeLabel"})}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Type:"})," ",e.jsx(r.code,{children:"string"}),e.jsx(r.br,{}),`
`,"Default: ",e.jsx(r.code,{children:"'Before'"}),e.jsx(r.br,{}),`
`,"Text label shown on the left side."]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h3,{id:"afterlabel",children:e.jsx(r.code,{children:"afterLabel"})}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Type:"})," ",e.jsx(r.code,{children:"string"}),e.jsx(r.br,{}),`
`,"Default: ",e.jsx(r.code,{children:"'After'"}),e.jsx(r.br,{}),`
`,"Text label shown on the right side."]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h3,{id:"photocredits",children:e.jsx(r.code,{children:"photoCredits"})}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Type:"})," ",e.jsx(r.code,{children:"{ before?: string; after?: string }"}),e.jsx(r.br,{}),`
`,"Optional object to display source credits below the component."]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-jsx",children:`import { ImageSlider } from '@times/graphics-components';

<ImageSlider
  beforeImage="https://placehold.co/800x450?text=Before"
  afterImage="https://placehold.co/800x450?text=After"
  beforeLabel="Before Renovation"
  afterLabel="After Renovation"
  photoCredits={{
    before: 'NASA (2020)',
    after: 'NOAA (2024)'
  }}
/>
`})})]})}function C(n={}){const{wrapper:r}={...i(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(s,{...n})}):s(n)}export{C as default};
