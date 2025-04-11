import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-CB3_FCD4.js";import"./App-BEjXRik3.js";import{S as i}from"./index-5tP9gf4g.js";import{M as r}from"./index-COX8M1dP.js";import"./index-MPVjHJeJ.js";import"./preview-BWEswkYC.js";import"./iframe-CacSAXjp.js";import"./DocsRenderer-CFRXHY34-D3PT88Dv.js";import"./react-18-BlUjvyv-.js";import"./index-Bzm33-PM.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function o(n){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Components/ScrollStory",component:i}),`
`,e.jsx(t.h1,{id:"scrollstory",children:"ScrollStory"}),`
`,e.jsx(t.p,{children:"A scrollytelling component that displays media (images, videos, AI2HTML graphics) alongside scroll-triggered text. Media transitions smoothly as the user scrolls through the content."}),`
`,e.jsx(t.h2,{id:"features",children:"Features"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["🎞 ",e.jsx(t.strong,{children:"Sticky Media"}),": Media stays fixed while scrolling through related text."]}),`
`,e.jsxs(t.li,{children:["🖼 ",e.jsx(t.strong,{children:"Image & Video Support"}),": Works with images, MP4 videos, YouTube and Vimeo."]}),`
`,e.jsxs(t.li,{children:["🎯 ",e.jsx(t.strong,{children:"Responsive Layout"}),": Supports edge-to-edge and contained layouts."]}),`
`,e.jsxs(t.li,{children:["🎛 ",e.jsx(t.strong,{children:"Highly Configurable"}),": Customize media behavior, styling, fonts, and more."]}),`
`]}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`import { ScrollStory } from '@times/graphics-components';

const data = {
  imgFit: "cover",
  containerWidth: "edge-to-edge",
  borderRadius: "0",
  fixedImgHeight: "500px",
  fontType: "sans-serif",
  fontSize: "md",
  videoAutoplay: true,
  videoControls: false,
  videoLoop: true,
  videoMute: true,
  slides: [
    {
      media: "https://picsum.photos/id/1015/1200/800",
      text: "This is a slide with an image."
    },
    {
      media: "https://www.youtube.com/watch?v=wDchsz8nmbo",
      text: "This is a slide with a YouTube video."
    },
    {
      media: "https://www.barrons.com/asset/barrons/videos/asset-uploader-a9e12c89-5df7-433d-98aa-868c701b078d/C0586.mp4",
      text: "This is a slide with an MP4 video."
    }
  ]
};

<ScrollStory data={data} />
`})})]})}function S(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{S as default};
