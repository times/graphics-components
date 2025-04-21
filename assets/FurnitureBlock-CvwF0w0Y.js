import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-B5Ip8tK9.js";import"./App-r_imil8f.js";import{F as t}from"./index-RfwLgSvu.js";import{M as o}from"./index-Cwx2EfSn.js";import"./index-U0ga5oGA.js";import"./preview-BnH-QrhI.js";import"./iframe-CPMF4akN.js";import"./DocsRenderer-CFRXHY34-as7xhERT.js";import"./react-18-SRpBHcoT.js";import"./index-BVR6w1bU.js";import"./index-hvh0w1v7.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function i(r){const n={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Furniture Components/FurnitureBlock",component:t}),`
`,e.jsx(n.h1,{id:"furnitureblock",children:"FurnitureBlock"}),`
`,e.jsx(n.p,{children:"A layout component that dynamically renders a collection of pre-defined content blocks (headline, description, flags, text, media, etc.) based on a structured array. The order and presence of blocks is entirely driven by a JSON config."}),`
`,e.jsx(n.h2,{id:"features",children:"Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["🧩 ",e.jsx(n.strong,{children:"Composable Layout"}),": Handles dynamic sequences of article components."]}),`
`,e.jsxs(n.li,{children:["🆎 ",e.jsx(n.strong,{children:"Text Blocks"}),": Includes headline, description, and body text."]}),`
`,e.jsxs(n.li,{children:["🚩 ",e.jsx(n.strong,{children:"Metadata Flags"}),": Displays article status like LIVE, BREAKING, SPONSORED, etc."]}),`
`,e.jsxs(n.li,{children:["🖼 ",e.jsx(n.strong,{children:"Media Support"}),": Renders videos or images via ",e.jsx(n.code,{children:"MediaBlock"}),"."]}),`
`,e.jsxs(n.li,{children:["🔄 ",e.jsx(n.strong,{children:"Flexible Ordering"}),": Block order is fully determined by the input array."]}),`
`,e.jsxs(n.li,{children:["📐 ",e.jsx(n.strong,{children:"Global Text Alignment"}),": Optional ",e.jsx(n.code,{children:"align"})," prop controls global text alignment."]}),`
`]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsxs(n.h3,{id:"blocks-required",children:[e.jsx(n.code,{children:"blocks"})," (required)"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Type:"})," ",e.jsx(n.code,{children:"Array<{ type: string, [key: string]: any }>"}),e.jsx(n.br,{}),`
`,"An array of block objects. Each block must include a ",e.jsx(n.code,{children:"type"}),", and may include other fields depending on the component being rendered."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"align",children:e.jsx(n.code,{children:"align"})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Type:"})," ",e.jsx(n.code,{children:'"left" | "center" | "right"'}),e.jsx(n.br,{}),`
`,e.jsx(n.strong,{children:"Default:"})," ",e.jsx(n.code,{children:'"left"'}),e.jsx(n.br,{}),`
`,"Sets the alignment for all text-based components (",e.jsx(n.code,{children:"headline"}),", ",e.jsx(n.code,{children:"description"}),", ",e.jsx(n.code,{children:"text"}),")."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"supported-block-types",children:"Supported Block Types"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'"headline"'})," → Renders a headline text."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'"description"'})," → Renders a subtitle or lead-in text."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'"flags"'})," → Renders one or more article flags with optional ",e.jsx(n.code,{children:"longRead"}),", ",e.jsx(n.code,{children:"expiryTime"}),", ",e.jsx(n.code,{children:"updatedTime"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'"text"'})," → Renders body copy, accepts inline HTML."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'"media"'})," → Renders an image or video using ",e.jsx(n.code,{children:"MediaBlock"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { FurnitureBlock } from '@times/graphics-components';


<FurnitureBlock
  align="center"
  blocks={[
    { type: "headline", text: "Markets Rally After Fed Decision" },
    { type: "description", text: "Investors respond to new monetary policy signals." },
    {
      type: "flags",
      withContainer: true,
      longRead: true,
      flags: [
        { type: "LIVE", expiryTime: "2099-01-01T00:00:00Z", updatedTime: "2025-04-18T06:00:00Z" },
        { type: "BREAKING" }
      ]
    },
    {
      type: "text",
      text: "The Federal Reserve has decided to keep interest rates steady..."
    },
    {
      type: "media",
      data: {
        media: "https://picsum.photos/1200/800",
        containerWidth: "inline",
        caption: "Chair Powell speaking after the announcement.",
        altText: "Federal Reserve press conference"
      }
    }
  ]}
/>
`})})]})}function k(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(i,{...r})}):i(r)}export{k as default};
