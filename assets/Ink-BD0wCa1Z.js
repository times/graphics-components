import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as d}from"./index-B5Ip8tK9.js";import{M as t}from"./index-fbXgqHOt.js";import"./index-U0ga5oGA.js";import"./iframe-ewfBsgXs.js";import"./index-BVR6w1bU.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function a(s){const i={h1:"h1",h2:"h2",p:"p",...d(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Design System/Ink"}),`
`,e.jsx(i.h1,{id:"ink",children:"Ink"}),`
`,e.jsxs("div",{style:{fontFamily:"system-ui, -apple-system, sans-serif",fontSize:"14px",lineHeight:"1.4",marginTop:"2rem"},children:[e.jsx("style",{children:`


.ink-section {
  margin-bottom: 3rem;
  padding: 0;
}

.ink-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #111827;
}

.ink-description {
  color: #6b7280;
  margin-bottom: 2rem;
  font-size: 0.9rem;
  line-height: 1.5;
}

.theme-container {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.theme-demo {
  flex: 1;
  min-width: 100%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  display: grid;
  grid-template-columns: 1fr 200px;
  height: 100%;
}

.light-theme {
  background: #ffffff;
  color: #111827;
}

.dark-theme {
  background: #000;
  color: #f9fafb;
}

.demo-content {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-family: 'TimesModern', serif;
}

.demo-title p{
  font-size: 56px;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.2;
  font-family: 'TimesModern-Regular' !important;
  margin: 0;
}

.demo-subtitle p{
  font-size: 32px;
  margin-bottom: 1rem;
  line-height: 1.4;
  font-weight: 400;
  font-family: 'TimesModern-Regular', serif;
  margin: 0;
  color: #696969;
}

.demo-text p{
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 1rem;
  font-family: 'TimesModern-Regular', serif;
  margin: 0;
}

.demo-button {
  padding: 0.5rem 1rem;
  border: none;
  font-size: 0.8rem;
  margin-top: auto;
  width: fit-content;
  cursor: pointer;
  font-family: 'TimesModern-Bold';
}

.demo-button p{
  font-family: 'Roboto-Regular';
  font-weight: 500;
  margin: 0;
}

.demo-sidebar {
  background: #000;
  display: flex;
  flex-direction: column;
  padding: 1.5rem 1rem;
  justify-content: center;
  gap: 1.5rem;
}

.dark-theme .demo-sidebar {
  background: #fff;
}

.sidebar-section {
  text-align: left;
}

.sidebar-title {
  font-size: 0.75rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: #ffffff;
  line-height: 1.2;
}

.dark-theme .sidebar-title {
  color: #1f2937;
}

.sidebar-hex {
  font-size: 0.65rem;
  color: #d1d5db;
  margin-bottom: 0.25rem;
}

.dark-theme .sidebar-hex {
  color: #6b7280;
}

.sidebar-standard {
  font-size: 0.65rem;
  color: #d0d0d1;
}

.dark-theme .sidebar-standard {
  color: #9ca3af;
}

/* Light theme text colors */
.light-theme .demo-title {
  color: #000000 !important;
}

.light-theme .demo-subtitle {
  color: #374151 !important;
}

.light-theme .demo-text {
  color: #6b7280 !important;
}

.light-theme .demo-button {
  background: #3b82f6;
  color: #ffffff;
}


/* Dark theme text colors */
.dark-theme .demo-title p{
  color: #ffffff !important;
}

.dark-theme .demo-subtitle p{
  color: #f3f4f6 !important;
}

.dark-theme .demo-text p{
  color: #e5e7eb !important;
}

.dark-theme .demo-button {
  background: #3b82f6;
  color: #ffffff;
}

.info-section p {
  font-family: 'Roboto-Regular';
  margin: 0;
  color: #ffffff !important;
  fontSize: '0.8rem';
}

.dark-theme .info-section p {
  color: #000000 !important;
}

.demo-button p {
  color: #fff !important;
}

.dark-theme .disabled-button p {
  color: #aaa !important;
}

.disabled-button {
  padding: 0.5rem 1rem;
  border: none;
  font-size: 0.8rem;
  margin-top: auto;
  width: fit-content;
  cursor: not-allowed;
  font-family: 'TimesModern-Bold';
}

.disabled-button p {
  font-family: 'Roboto-Regular';
  font-weight: 500;
  margin: 0;
}

.text-container {
  width: 18rem;
  padding: 0.75rem;
  background: #e4e4e4;
  font-size: 0.8rem;
  padding: 1rem
}

.text-container p{
  margin: 0;
  font-weight: 600;
  font-family: 'Roboto-Regular';
  text-align: center;
}

.dark-theme .text-container {
  background: #e4e4e4;
}

.container-text {
  color: #111827;
  margin: 0;
  font-family: 'Roboto-Regular';
}

.dark-theme .container-text {
  color: #f9fafb;
}

.input-container {
  width: auto;
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  background: #ffffff;
  font-size: 0.8rem;
}

.dark-theme .input-container {
  border: 1px solid #4b5563;
  background: #1f2937;
}

.input-text {
  color: #111827;
  margin: 0;
  font-family: 'Roboto-Regular';
}

.dark-theme .input-text {
  color: #f9fafb;
}
`}),e.jsx(i.h2,{id:"common",children:"Common"}),e.jsxs("div",{className:"ink-section",children:[e.jsx("p",{className:"ink-description",children:e.jsx(i.p,{children:"Common ink tokens are used to style most generic text and icons within a design such as traditional body/header/kicker & body text."})}),e.jsxs("div",{className:"theme-container",children:[e.jsxs("div",{className:"theme-demo light-theme",children:[e.jsxs("div",{className:"demo-content",children:[e.jsx("h1",{className:"demo-title",children:e.jsx(i.p,{children:"The quick brown fox jumps over the lazy dog"})}),e.jsx("h3",{className:"demo-subtitle",children:e.jsx(i.p,{children:"The quick brown fox jumps over the lazy dog"})}),e.jsx("p",{className:"demo-text",children:e.jsx(i.p,{children:"A mad boxer shot a quick, gloved jab to the jaw of his dizzy opponent whilst the frayed wizards plucky ivy from the big quilt. The quick brown fox jumps over the lazy dog and crazy Fredrick bought many very exquisite opal jewels."})})]}),e.jsxs("div",{className:"demo-sidebar",children:[e.jsxs("div",{className:"sidebar-section",children:[e.jsx("div",{className:"sidebar-title",children:"ink.inkContrast"}),e.jsx("div",{className:"sidebar-hex",children:"neutral100"}),e.jsx("div",{className:"sidebar-standard",children:"#01000d"})]}),e.jsxs("div",{className:"sidebar-section",children:[e.jsx("div",{className:"sidebar-title",children:"ink.inkBase"}),e.jsx("div",{className:"sidebar-hex",children:"neutral080"}),e.jsx("div",{className:"sidebar-standard",children:"#333333"})]}),e.jsxs("div",{className:"sidebar-section",children:[e.jsx("div",{className:"sidebar-title",children:"ink.inkSubtle"}),e.jsx("div",{className:"sidebar-hex",children:"neutral070"}),e.jsx("div",{className:"sidebar-standard",children:"#696969"})]})]})]}),e.jsxs("div",{className:"theme-demo dark-theme",children:[e.jsxs("div",{className:"demo-content",children:[e.jsx("h1",{className:"demo-title",children:e.jsx(i.p,{children:"The quick brown fox jumps over the lazy dog"})}),e.jsx("h3",{className:"demo-subtitle",children:e.jsx(i.p,{children:"The quick brown fox jumps over the lazy dog"})}),e.jsx("p",{className:"demo-text",children:e.jsx(i.p,{children:"A mad boxer shot a quick, gloved jab to the jaw of his dizzy opponent whilst the frayed wizards plucky ivy from the big quilt. The quick brown fox jumps over the lazy dog and crazy Fredrick bought many very exquisite opal jewels."})})]}),e.jsxs("div",{className:"demo-sidebar",children:[e.jsxs("div",{className:"sidebar-section",children:[e.jsx("div",{className:"sidebar-title",children:"ink.inkContrast"}),e.jsx("div",{className:"sidebar-hex",children:"white"}),e.jsx("div",{className:"sidebar-standard",children:"#ffffff"})]}),e.jsxs("div",{className:"sidebar-section",children:[e.jsx("div",{className:"sidebar-title",children:"ink.inkBase"}),e.jsx("div",{className:"sidebar-hex",children:"neutral020"}),e.jsx("div",{className:"sidebar-standard",children:"#eeeeee"})]}),e.jsxs("div",{className:"sidebar-section",children:[e.jsx("div",{className:"sidebar-title",children:"ink.inkSubtle"}),e.jsx("div",{className:"sidebar-hex",children:"neutral030"}),e.jsx("div",{className:"sidebar-standard",children:"#e4e4e4"})]})]})]})]})]}),e.jsx("div",{className:"ink-section",children:e.jsxs("div",{className:"theme-container",children:[e.jsxs("div",{className:"theme-demo light-theme",children:[e.jsx("div",{className:"demo-content",children:e.jsx("button",{className:"disabled-button",style:{background:"#eee",color:"#9ca3af !important"},children:e.jsx(i.p,{children:"Disabled button"})})}),e.jsx("div",{className:"demo-sidebar",children:e.jsxs("div",{className:"sidebar-section",children:[e.jsx("div",{className:"sidebar-title",children:"ink.inkNonEssential"}),e.jsx("div",{className:"sidebar-hex",children:"(neutral060)"}),e.jsx("div",{className:"sidebar-standard",children:"#aaaaaa"})]})})]}),e.jsxs("div",{className:"theme-demo dark-theme",children:[e.jsx("div",{className:"demo-content",children:e.jsx("button",{className:"disabled-button",style:{background:"#333333",color:"#6b7280 !important"},children:e.jsx(i.p,{children:"Disabled button"})})}),e.jsx("div",{className:"demo-sidebar",children:e.jsxs("div",{className:"sidebar-section",children:[e.jsx("div",{className:"sidebar-title",children:"ink.inkNonEssential"}),e.jsx("div",{className:"sidebar-hex",children:"(neutral070)"}),e.jsx("div",{className:"sidebar-standard",children:"#333333"})]})})]})]})}),e.jsx("div",{className:"ink-section",children:e.jsxs("div",{className:"theme-container",children:[e.jsxs("div",{className:"theme-demo light-theme",children:[e.jsx("div",{className:"demo-content",children:e.jsxs("div",{style:{background:"#333333",padding:"0.75rem",border:"1px solid #e5e7eb",display:"flex",alignItems:"center",gap:"0.5rem"},className:"info-section",children:[e.jsx("span",{style:{width:"12px",height:"12px",background:"#6b7280",borderRadius:"50%"}}),e.jsx("p",{children:e.jsx(i.p,{children:"A tool like is not describing the best information"})})]})}),e.jsx("div",{className:"demo-sidebar",children:e.jsxs("div",{className:"sidebar-section",children:[e.jsx("div",{className:"sidebar-title",children:"ink.inkInverse"}),e.jsx("div",{className:"sidebar-hex",children:"white"}),e.jsx("div",{className:"sidebar-standard",children:"#333333"})]})})]}),e.jsxs("div",{className:"theme-demo dark-theme",children:[e.jsx("div",{className:"demo-content",children:e.jsxs("div",{style:{background:"#fff",padding:"0.75rem",border:"1px solid #4b5563",display:"flex",alignItems:"center",gap:"0.5rem"},className:"info-section",children:[e.jsx("span",{style:{width:"12px",height:"12px",background:"#9ca3af",borderRadius:"50%"}}),e.jsx("p",{children:e.jsx(i.p,{children:"A tool like is not describing the best information"})})]})}),e.jsx("div",{className:"demo-sidebar",children:e.jsxs("div",{className:"sidebar-section",children:[e.jsx("div",{className:"sidebar-title",children:"ink.inkInverse"}),e.jsx("div",{className:"sidebar-hex",children:"neutral090"}),e.jsx("div",{className:"sidebar-standard",children:"#fff"})]})})]})]})}),e.jsx("div",{className:"ink-section",children:e.jsxs("div",{className:"theme-container",children:[e.jsxs("div",{className:"theme-demo light-theme",children:[e.jsx("div",{className:"demo-content",children:e.jsx("button",{className:"demo-button",style:{background:"#1573a2",color:"#ffffff !important"},children:e.jsx(i.p,{children:"Solid button"})})}),e.jsx("div",{className:"demo-sidebar",children:e.jsxs("div",{className:"sidebar-section",children:[e.jsx("div",{className:"sidebar-title",children:"ink.inkLight010"}),e.jsx("div",{className:"sidebar-hex",children:"white"}),e.jsx("div",{className:"sidebar-standard",children:"#fff"})]})})]}),e.jsxs("div",{className:"theme-demo dark-theme",children:[e.jsx("div",{className:"demo-content",children:e.jsx("button",{className:"demo-button",style:{background:"#1573a2",color:"#ffffff !important"},children:e.jsx(i.p,{children:"Solid button"})})}),e.jsx("div",{className:"demo-sidebar",children:e.jsxs("div",{className:"sidebar-section",children:[e.jsx("div",{className:"sidebar-title",children:"ink.inkLight010"}),e.jsx("div",{className:"sidebar-hex",children:"white"}),e.jsx("div",{className:"sidebar-standard",children:"#333"})]})})]})]})}),e.jsx("div",{className:"ink-section",children:e.jsxs("div",{className:"theme-container",children:[e.jsxs("div",{className:"theme-demo light-theme",children:[e.jsx("div",{className:"demo-content",children:e.jsx("div",{className:"text-container",children:e.jsx("p",{className:"container-text",children:e.jsx(i.p,{children:"The quick brown fox jumps over the lazy dog"})})})}),e.jsx("div",{className:"demo-sidebar",children:e.jsxs("div",{className:"sidebar-section",children:[e.jsx("div",{className:"sidebar-title",children:"ink.inkDark010"}),e.jsx("div",{className:"sidebar-hex",children:"neutral100"}),e.jsx("div",{className:"sidebar-standard",children:"#e4e4e4"})]})})]}),e.jsxs("div",{className:"theme-demo dark-theme",children:[e.jsx("div",{className:"demo-content",children:e.jsx("div",{className:"text-container",children:e.jsx("p",{className:"container-text",children:e.jsx(i.p,{children:"The quick brown fox jumps over the lazy dog"})})})}),e.jsx("div",{className:"demo-sidebar",children:e.jsxs("div",{className:"sidebar-section",children:[e.jsx("div",{className:"sidebar-title",children:"ink.inkDark010"}),e.jsx("div",{className:"sidebar-hex",children:"neutral100"}),e.jsx("div",{className:"sidebar-standard",children:"#e4e4e4"})]})})]})]})})]})]})}function b(s={}){const{wrapper:i}={...d(),...s.components};return i?e.jsx(i,{...s,children:e.jsx(a,{...s})}):a(s)}export{b as default};
