import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-B5Ip8tK9.js";import"./App-BlS6QY-k.js";import{A as t}from"./index-CUPdwlVt.js";import{M as o}from"./index-DQMFRXLt.js";import"./index-U0ga5oGA.js";import"./preview-B9XV4SJv.js";import"./iframe-0IZ-l_1b.js";import"./DocsRenderer-CFRXHY34-C8at_NIa.js";import"./react-18-SRpBHcoT.js";import"./index-BVR6w1bU.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function r(i){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"articleflags",children:"ArticleFlags"}),`
`,e.jsxs(n.p,{children:["A component that renders one or multiple article flags such as ",e.jsx(n.strong,{children:"LIVE"}),", ",e.jsx(n.strong,{children:"BREAKING"}),", ",e.jsx(n.strong,{children:"EXCLUSIVE"}),", ",e.jsx(n.strong,{children:"UPDATED"}),", ",e.jsx(n.strong,{children:"SPONSORED"}),", ",e.jsx(n.strong,{children:"NEW"}),", and optionally a ",e.jsx(n.strong,{children:"Long Read"})," badge."]}),`
`,e.jsx(o,{title:"Furniture Components/ArticleFlags",component:t}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"ArticleFlags"}),' component displays visual labels for articles with metadata such as status, exclusivity, or timeliness. It also supports an optional "Long Read" indicator.']}),`
`,e.jsx(n.h2,{id:"features",children:"Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["🚨 ",e.jsx(n.strong,{children:"LIVE/BREAKING"}),": Includes an animated pulsing square."]}),`
`,e.jsxs(n.li,{children:["🟣 ",e.jsx(n.strong,{children:"EXCLUSIVE/SPONSORED/UPDATED/etc."}),": Displayed with a colored dot."]}),`
`,e.jsxs(n.li,{children:["⏱ ",e.jsx(n.strong,{children:"Expiry Support"}),": Flags with an ",e.jsx(n.code,{children:"expiryTime"})," automatically disappear when outdated."]}),`
`,e.jsxs(n.li,{children:["🧠 ",e.jsx(n.strong,{children:"Updated Time Label"}),": ",e.jsx(n.code,{children:"LIVE"})," and ",e.jsx(n.code,{children:"BREAKING"})," can show a formatted ",e.jsx(n.code,{children:"updatedTime"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { ArticleFlags } from '@times/graphics-components';

<ArticleFlags
  withContainer
  longRead
  flags={[
    {
      type: 'LIVE',
      expiryTime: '2099-01-01T00:00:00Z',
      updatedTime: '2025-04-18T06:00:00Z',
    },
    { type: 'BREAKING', expiryTime: '2099-01-01T00:00:00Z' },
    { type: 'EXCLUSIVE' },
    { type: 'UPDATED', expiryTime: '2099-01-01T00:00:00Z' },
    { type: 'SPONSORED', expiryTime: '2099-01-01T00:00:00Z' },
    { type: 'NEW', expiryTime: '2099-01-01T00:00:00Z' }
  ]}
/>
`})})]})}function T(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{T as default};
