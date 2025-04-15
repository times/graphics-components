import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-CB3_FCD4.js";import"./App-DqXtLEqf.js";import{M as s}from"./index-_NQI7EM8.js";import{M as o}from"./index-BB8TmY3_.js";import"./index-MPVjHJeJ.js";import"./preview-Zoeaqrmj.js";import"./iframe-6tfAuwoJ.js";import"./DocsRenderer-CFRXHY34-Bu7O0yKc.js";import"./react-18-BlUjvyv-.js";import"./index-Bzm33-PM.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function i(d){const n={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...d.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Components/MediaBlock",component:s}),`
`,e.jsx(n.h1,{id:"mediablock",children:"MediaBlock"}),`
`,e.jsx(n.p,{children:"A flexible media display component that supports responsive layout and a variety of formats, including images, MP4, YouTube, and Vimeo. It includes optional wrapper content such as headlines, captions, and notes."}),`
`,e.jsx(n.h2,{id:"features",children:"Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["🖼 ",e.jsx(n.strong,{children:"Multiple Media Types"}),": Supports YouTube, Vimeo, MP4, and static images."]}),`
`,e.jsxs(n.li,{children:["🧱 ",e.jsx(n.strong,{children:"Wrapper Support"}),": Includes optional headline, subhead, chart title, caption, and notes."]}),`
`,e.jsxs(n.li,{children:["📐 ",e.jsx(n.strong,{children:"Responsive Layout"}),": Choose from ",e.jsx(n.code,{children:"inline"}),", ",e.jsx(n.code,{children:"edge-to-edge"}),", or ",e.jsx(n.code,{children:"bleed"})," width behavior."]}),`
`,e.jsxs(n.li,{children:["🎛 ",e.jsx(n.strong,{children:"Customizable"}),": Control video playback, image styling, and content layout."]}),`
`]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsxs(n.h3,{id:"datamedia-required",children:[e.jsx(n.code,{children:"data.media"})," (required)"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Type:"})," ",e.jsx(n.code,{children:"string"}),e.jsx(n.br,{}),`
`,"Media URL. Can be an image, ",e.jsx(n.code,{children:".mp4"})," file, YouTube or Vimeo link."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"datatext",children:e.jsx(n.code,{children:"data.text"})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Type:"})," ",e.jsx(n.code,{children:"string"}),e.jsx(n.br,{}),`
`,"Optional descriptive text rendered below the media. Accepts raw HTML."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"datacaption",children:e.jsx(n.code,{children:"data.caption"})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Type:"})," ",e.jsx(n.code,{children:"string"}),e.jsx(n.br,{}),`
`,"Optional caption displayed as an overlay."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"dataalttext",children:e.jsx(n.code,{children:"data.altText"})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Type:"})," ",e.jsx(n.code,{children:"string"}),e.jsx(n.br,{}),`
`,"Alternative text for accessibility when ",e.jsx(n.code,{children:"media"})," is an image."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"datacontainerwidth",children:e.jsx(n.code,{children:"data.containerWidth"})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Type:"})," ",e.jsx(n.code,{children:"'inline' | 'edge-to-edge' | 'bleed'"}),e.jsx(n.br,{}),`
`,e.jsx(n.strong,{children:"Default:"})," ",e.jsx(n.code,{children:"'inline'"}),e.jsx(n.br,{}),`
`,"Controls the layout of the media."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"datafixedimgheight",children:e.jsx(n.code,{children:"data.fixedImgHeight"})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Type:"})," ",e.jsx(n.code,{children:"string"}),e.jsx(n.br,{}),`
`,"If defined, forces a fixed height for the media element (e.g. ",e.jsx(n.code,{children:"'400px'"}),")."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"dataimgborderradius",children:e.jsx(n.code,{children:"data.imgBorderRadius"})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Type:"})," ",e.jsx(n.code,{children:"string"}),e.jsx(n.br,{}),`
`,"CSS value to round media corners (e.g. ",e.jsx(n.code,{children:"'8px'"}),", ",e.jsx(n.code,{children:"'0'"}),")."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"datavideoautoplay",children:e.jsx(n.code,{children:"data.videoAutoplay"})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Type:"})," ",e.jsx(n.code,{children:"boolean"}),e.jsx(n.br,{}),`
`,e.jsx(n.strong,{children:"Default:"})," ",e.jsx(n.code,{children:"true"}),e.jsx(n.br,{}),`
`,"Whether videos should autoplay."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"datavideoloop",children:e.jsx(n.code,{children:"data.videoLoop"})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Type:"})," ",e.jsx(n.code,{children:"boolean"}),e.jsx(n.br,{}),`
`,e.jsx(n.strong,{children:"Default:"})," ",e.jsx(n.code,{children:"true"}),e.jsx(n.br,{}),`
`,"Whether videos should loop."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"datavideomute",children:e.jsx(n.code,{children:"data.videoMute"})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Type:"})," ",e.jsx(n.code,{children:"boolean"}),e.jsx(n.br,{}),`
`,e.jsx(n.strong,{children:"Default:"})," ",e.jsx(n.code,{children:"true"}),e.jsx(n.br,{}),`
`,"Whether videos should start muted."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"datavideocontrols",children:e.jsx(n.code,{children:"data.videoControls"})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Type:"})," ",e.jsx(n.code,{children:"boolean"}),e.jsx(n.br,{}),`
`,e.jsx(n.strong,{children:"Default:"})," ",e.jsx(n.code,{children:"false"}),e.jsx(n.br,{}),`
`,"Show native video player controls."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"datahed-datadek-datacharttitle-datanote-datasource",children:[e.jsx(n.code,{children:"data.hed"}),", ",e.jsx(n.code,{children:"data.dek"}),", ",e.jsx(n.code,{children:"data.chartTitle"}),", ",e.jsx(n.code,{children:"data.note"}),", ",e.jsx(n.code,{children:"data.source"})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Type:"})," ",e.jsx(n.code,{children:"string"}),e.jsx(n.br,{}),`
`,"Optional elements for the wrapper component (headline, subhead, etc)."]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { MediaBlock } from '@times/graphics-components';

const data = {
  media: "https://www.youtube.com/watch?v=wDchsz8nmbo",
  containerWidth: "inline",
  fixedImgHeight: "400px",
  imgBorderRadius: "8px",
  videoAutoplay: true,
  videoLoop: true,
  videoMute: true,
  videoControls: true,
  text: "This is a media block with a YouTube video.",
  caption: "Example caption.",
  hed: "Main headline",
  dek: "Descriptive subheadline",
  note: "Source note",
  source: "Reuters"
};

<MediaBlock data={data} />
`})})]})}function y(d={}){const{wrapper:n}={...r(),...d.components};return n?e.jsx(n,{...d,children:e.jsx(i,{...d})}):i(d)}export{y as default};
