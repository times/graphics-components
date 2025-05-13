import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-B5Ip8tK9.js";import{M as t}from"./index-DQMFRXLt.js";import"./index-U0ga5oGA.js";import"./iframe-0IZ-l_1b.js";import"./index-BVR6w1bU.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function i(s){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Getting Started/Initial Setup"}),`
`,e.jsx(n.h1,{id:"-initial-setup",children:"✨ Initial Setup"}),`
`,e.jsxs(n.p,{children:["To use ",e.jsx(n.strong,{children:"The Times Graphics Components"})," in your own React project:"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-local-development-setup",children:"🔧 Local development setup"}),`
`,e.jsx(n.p,{children:"To install this package locally, you need:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["A GitHub personal access token (classic) with ",e.jsx(n.code,{children:"read:packages"})," permission"]}),`
`,e.jsxs(n.li,{children:["A ",e.jsx(n.code,{children:".npmrc"})," file configured like this:"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ini",children:`@times:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
registry=https://registry.npmjs.org/
`})}),`
`,e.jsx(n.h2,{id:"1-install-the-package",children:e.jsx("span",{style:{fontWeight:"600"},children:"1. Install the package"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install @times/graphics-components
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Or if you use Yarn:"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`yarn add @times/graphics-components
`})}),`
`,e.jsx(n.h2,{id:"2-import-and-use-components",children:e.jsx("span",{style:{fontWeight:"600"},children:"2. Import and use components"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { MediaBlock, ScrollStory } from "@times/graphics-components";
`})}),`
`,e.jsx(n.p,{children:"Each component is documented with examples and supported props in this Storybook."}),`
`,e.jsx(n.h2,{id:"3-required-peer-dependencies",children:e.jsx("span",{style:{fontWeight:"600"},children:"3. Required peer dependencies"})}),`
`,e.jsx(n.p,{children:"Ensure your project has:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"react"})," = 19"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"styled-components"})," ≥ 5"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"framer-motion"})," (if using animations)"]}),`
`]}),`
`,e.jsx(n.h2,{id:"4-customization",children:e.jsx("span",{style:{fontWeight:"600"},children:"4. Customization"})}),`
`,e.jsx(n.p,{children:"You can override layout props like:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"containerWidth"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"fixedImgHeight"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"imgBorderRadius"})}),`
`]}),`
`,e.jsx(n.p,{children:"Check individual stories for full prop support and usage."})]})}function m(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{m as default};
