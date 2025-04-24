import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-B5Ip8tK9.js";import"./App-BmgZssOb.js";import{I as r}from"./index-Bi4NvvSI.js";import"./index-kkf_Hqc1.js";import"./index-CUPdwlVt.js";import{M as t}from"./index-D0J1qJq9.js";import"./index-U0ga5oGA.js";import"./preview-jmYL-qs6.js";import"./iframe-BZMGlKDR.js";import"./DocsRenderer-CFRXHY34-2TWwEYWH.js";import"./react-18-SRpBHcoT.js";import"./index-BVR6w1bU.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function o(i){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"imagegrid",children:"ImageGrid"}),`
`,e.jsx(n.p,{children:"A component for displaying a grid of images with interactive tooltips. This component supports dynamic data and allows users to interact with images."}),`
`,e.jsx(t,{title:"Components/ImageGrid",component:r}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"ImageGrid"})," component provides an interactive way to display images in a structured grid. Each image supports tooltips and additional descriptive text."]}),`
`,e.jsx(n.h2,{id:"features",children:"Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["🖼 ",e.jsx(n.strong,{children:"Dynamic image grid"}),": Displays images based on provided data."]}),`
`,e.jsxs(n.li,{children:["🏷 ",e.jsx(n.strong,{children:"Tooltips"}),": Hovering over an image shows additional information."]}),`
`,e.jsxs(n.li,{children:["📋 ",e.jsx(n.strong,{children:"Customizable Data Structure"}),": Accepts an array of objects with ",e.jsx(n.code,{children:"id"}),", ",e.jsx(n.code,{children:"name"}),", ",e.jsx(n.code,{children:"imgSrc"}),", ",e.jsx(n.code,{children:"copy"}),", and ",e.jsx(n.code,{children:"age"}),"."]}),`
`,e.jsxs(n.li,{children:["🖥 ",e.jsx(n.strong,{children:"Responsive Layout"}),": Adapts to different screen sizes."]}),`
`]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:["To use the ",e.jsx(n.code,{children:"ImageGrid"})," component in your project, import it and pass the required props."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { ImageGrid } from '@times/graphics-components';

const data = [
    {
      "id": 1,
      "name": "John Doe",
      "imgSrc": "john_doe",
      "copy": "Pellentesque laoreet semper est ac condimentum.",
      "age": 40
    },
    {
      "id": 2,
      "name": "John Doe",
      "imgSrc": "john_doe",
      "copy": "Pellentesque laoreet semper est ac condimentum.",
      "age": 42
    },
    {
      "id": 3,
      "name": "John Doe",
      "imgSrc": "john_doe",
      "copy": "Pellentesque laoreet semper est ac condimentum.",
      "age": 24
    },
]

<ImageGrid data={data} />
`})}),`
`,e.jsx(n.h2,{id:"notes",children:"Notes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Ensure that the ",e.jsx(n.code,{children:"imgSrc"})," corresponds to a valid image available in the project."]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"copy"})," field provides additional information when hovering over an image."]}),`
`,e.jsx(n.li,{children:"The component is designed to be responsive and adapts to different screen sizes."}),`
`]}),`
`,e.jsx(n.p,{children:"This component is highly flexible and can be customized further using styled-components or external CSS."})]})}function D(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(o,{...i})}):o(i)}export{D as default};
