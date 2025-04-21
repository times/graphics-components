import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as d}from"./index-B5Ip8tK9.js";import"./App-DX_riW3O.js";import{S as r}from"./index-DVUmgCy3.js";import"./index-RfwLgSvu.js";import"./index-hvh0w1v7.js";import{M as o}from"./index-NcjuWlf1.js";import"./index-U0ga5oGA.js";import"./preview-jvJZ-Yd0.js";import"./iframe-CWo7rrvj.js";import"./DocsRenderer-CFRXHY34-C0rzFUmN.js";import"./react-18-SRpBHcoT.js";import"./index-BVR6w1bU.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function i(s){const n={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Components/ScrollStory",component:r}),`
`,e.jsx(n.h1,{id:"scrollstory",children:"ScrollStory"}),`
`,e.jsx(n.p,{children:"A scrollytelling component that displays media (images, videos, AI2HTML graphics) alongside scroll-triggered text. Media transitions smoothly as the user scrolls through the content."}),`
`,e.jsx(n.h2,{id:"features",children:"Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["🎞 ",e.jsx(n.strong,{children:"Sticky Media"}),": Media stays fixed while scrolling through related text."]}),`
`,e.jsxs(n.li,{children:["🖼 ",e.jsx(n.strong,{children:"Image & Video Support"}),": Works with images, MP4 videos, YouTube and Vimeo."]}),`
`,e.jsxs(n.li,{children:["🎯 ",e.jsx(n.strong,{children:"Responsive Layout"}),": Supports edge-to-edge and contained layouts."]}),`
`,e.jsxs(n.li,{children:["🎛 ",e.jsx(n.strong,{children:"Highly Configurable"}),": Customize media behavior, styling, fonts, and more."]}),`
`]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsxs(n.h3,{id:"dataslides-required",children:[e.jsx(n.code,{children:"data.slides"})," (required)"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Type:"})," ",e.jsx(n.code,{children:"Array<{ media: string, text?: string, altText?: string }>"}),e.jsx(n.br,{}),`
`,"A list of slides, each containing a ",e.jsx(n.code,{children:"media"})," URL (image, YouTube, Vimeo, or MP4), optional ",e.jsx(n.code,{children:"text"})," (HTML allowed), and optional ",e.jsx(n.code,{children:"altText"})," for images."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"dataimgfit",children:e.jsx(n.code,{children:"data.imgFit"})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Type:"})," ",e.jsx(n.code,{children:'"cover" | "contain" | "fill"'}),e.jsx(n.br,{}),`
`,e.jsx(n.strong,{children:"Default:"})," ",e.jsx(n.code,{children:'"cover"'}),e.jsx(n.br,{}),`
`,"Sets how the media is resized inside its container (",e.jsx(n.code,{children:"object-fit"}),")."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"datacontainerwidth",children:e.jsx(n.code,{children:"data.containerWidth"})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Type:"})," ",e.jsx(n.code,{children:'"inline" | "edge-to-edge" | "bleed"'}),e.jsx(n.br,{}),`
`,e.jsx(n.strong,{children:"Default:"})," ",e.jsx(n.code,{children:'"inline"'}),e.jsx(n.br,{}),`
`,"Controls the width of the media container."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"inline"}),": uses 56.2% width and centers the media"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"bleed"}),": respects content layout"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"edge-to-edge"}),": stretches to full viewport width"]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"databorderradius",children:e.jsx(n.code,{children:"data.borderRadius"})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Type:"})," ",e.jsx(n.code,{children:"string"}),e.jsx(n.br,{}),`
`,e.jsx(n.strong,{children:"Default:"})," ",e.jsx(n.code,{children:'"0"'}),e.jsx(n.br,{}),`
`,"Sets the ",e.jsx(n.code,{children:"border-radius"})," of the media element (e.g., ",e.jsx(n.code,{children:'"8px"'})," or ",e.jsx(n.code,{children:'"1rem"'}),")."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"datafixedimgheight",children:e.jsx(n.code,{children:"data.fixedImgHeight"})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Type:"})," ",e.jsx(n.code,{children:"string"}),e.jsx(n.br,{}),`
`,"If provided (e.g. ",e.jsx(n.code,{children:'"500px"'}),"), sets a fixed height for all media. Otherwise it defaults to ",e.jsx(n.code,{children:'"500px"'})," or ",e.jsx(n.code,{children:'"100vh"'})," for ",e.jsx(n.code,{children:"edge-to-edge"}),"."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"datafontsize",children:e.jsx(n.code,{children:"data.fontSize"})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Type:"})," ",e.jsx(n.code,{children:'"sm" | "md" | "lg"'}),e.jsx(n.br,{}),`
`,e.jsx(n.strong,{children:"Default:"})," ",e.jsx(n.code,{children:'"md"'}),e.jsx(n.br,{}),`
`,"Adjusts the font size of the scroll-triggered text blocks."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"datavideoautoplay",children:e.jsx(n.code,{children:"data.videoAutoplay"})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Type:"})," ",e.jsx(n.code,{children:"boolean"}),e.jsx(n.br,{}),`
`,e.jsx(n.strong,{children:"Default:"})," ",e.jsx(n.code,{children:"true"}),e.jsx(n.br,{}),`
`,"If ",e.jsx(n.code,{children:"true"}),", videos autoplay when active."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"datavideoloop",children:e.jsx(n.code,{children:"data.videoLoop"})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Type:"})," ",e.jsx(n.code,{children:"boolean"}),e.jsx(n.br,{}),`
`,e.jsx(n.strong,{children:"Default:"})," ",e.jsx(n.code,{children:"true"}),e.jsx(n.br,{}),`
`,"If ",e.jsx(n.code,{children:"true"}),", videos will loop."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"datavideocontrols",children:e.jsx(n.code,{children:"data.videoControls"})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Type:"})," ",e.jsx(n.code,{children:"boolean"}),e.jsx(n.br,{}),`
`,e.jsx(n.strong,{children:"Default:"})," ",e.jsx(n.code,{children:"false"}),e.jsx(n.br,{}),`
`,"If ",e.jsx(n.code,{children:"true"}),", native video player controls will be shown."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"datavideomute",children:e.jsx(n.code,{children:"data.videoMute"})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Type:"})," ",e.jsx(n.code,{children:"boolean"}),e.jsx(n.br,{}),`
`,e.jsx(n.strong,{children:"Default:"})," ",e.jsx(n.code,{children:"true"}),e.jsx(n.br,{}),`
`,"If ",e.jsx(n.code,{children:"true"}),", videos will start muted."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { ScrollStory } from '@times/graphics-components';

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
`})})]})}function w(s={}){const{wrapper:n}={...d(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{w as default};
