import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as t}from"./index-B5Ip8tK9.js";import"./App-BmgZssOb.js";import{D as i}from"./index-Bi4NvvSI.js";import"./index-kkf_Hqc1.js";import"./index-CUPdwlVt.js";import{M as o}from"./index-D0J1qJq9.js";import"./index-U0ga5oGA.js";import"./preview-jmYL-qs6.js";import"./iframe-BZMGlKDR.js";import"./DocsRenderer-CFRXHY34-2TWwEYWH.js";import"./react-18-SRpBHcoT.js";import"./index-BVR6w1bU.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function s(n){const r={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Components/DataWrapperEmbed",component:i}),`
`,e.jsx(r.h1,{id:"datawrapperembed",children:"DataWrapperEmbed"}),`
`,e.jsxs(r.p,{children:["Embeds a responsive ",e.jsx(r.a,{href:"https://www.datawrapper.de/",rel:"nofollow",children:"Datawrapper"})," chart via ",e.jsx(r.code,{children:"iframe"}),", with automatic height adjustment based on content."]}),`
`,e.jsx(r.h2,{id:"features",children:"Features"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["📊 ",e.jsx(r.strong,{children:"Datawrapper Integration"}),": Embeds any published chart from Datawrapper."]}),`
`,e.jsxs(r.li,{children:["📐 ",e.jsx(r.strong,{children:"Auto Resize"}),": Uses ",e.jsx(r.code,{children:"postMessage"})," listener to auto-adjust height."]}),`
`,e.jsxs(r.li,{children:["💡 ",e.jsx(r.strong,{children:"Versioned Support"}),": Allows specifying the exact version of the chart."]}),`
`,e.jsxs(r.li,{children:["🛠 ",e.jsx(r.strong,{children:"Simple API"}),": Pass ",e.jsx(r.code,{children:"chartId"}),", ",e.jsx(r.code,{children:"version"}),", and optional ",e.jsx(r.code,{children:"title"}),"."]}),`
`]}),`
`,e.jsx(r.h2,{id:"props",children:"Props"}),`
`,e.jsx(r.hr,{}),`
`,e.jsxs(r.h3,{id:"chartid-required",children:[e.jsx(r.code,{children:"chartId"})," (required)"]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Type:"})," ",e.jsx(r.code,{children:"string"}),e.jsx(r.br,{}),`
`,"The chart ID from Datawrapper (e.g. ",e.jsx(r.code,{children:"csmgb"})," from the embed URL)."]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h3,{id:"version",children:e.jsx(r.code,{children:"version"})}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Type:"})," ",e.jsx(r.code,{children:"string"}),e.jsx(r.br,{}),`
`,e.jsx(r.strong,{children:"Default:"})," ",e.jsx(r.code,{children:'"1"'}),e.jsx(r.br,{}),`
`,"Version number of the chart, typically found in the embed URL (e.g. ",e.jsx(r.code,{children:"2"})," in ",e.jsx(r.code,{children:"/csmgb/2/"}),")."]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h3,{id:"title",children:e.jsx(r.code,{children:"title"})}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Type:"})," ",e.jsx(r.code,{children:"string"}),e.jsx(r.br,{}),`
`,e.jsx(r.strong,{children:"Default:"})," ",e.jsx(r.code,{children:'""'}),e.jsx(r.br,{}),`
`,"Accessible title for the iframe element."]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-jsx",children:`import { DataWrapperEmbed } from '@times/graphics-components';


<DataWrapperEmbed
  chartId="csmgb"
  version="1"
  title="U.K. inflation trends by sector"
/>
`})})]})}function y(n={}){const{wrapper:r}={...t(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(s,{...n})}):s(n)}export{y as default};
