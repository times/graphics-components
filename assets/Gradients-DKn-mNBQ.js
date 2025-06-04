import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as n}from"./index-B5Ip8tK9.js";import{M as t}from"./index-fbXgqHOt.js";import"./index-U0ga5oGA.js";import"./iframe-ewfBsgXs.js";import"./index-BVR6w1bU.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function i(a){const r={h1:"h1",p:"p",...n(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Design System/Gradients"}),`
`,e.jsx(r.h1,{id:"gradients",children:"Gradients"}),`
`,e.jsxs("div",{style:{fontFamily:"system-ui, -apple-system, sans-serif",fontSize:"14px",lineHeight:"1.4",marginTop:"2rem"},children:[e.jsx("style",{children:`
.gradients-section {
  margin-bottom: 3rem;
  padding: 0;
}

.gradients-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #111827;
}

.gradients-description {
  color: #6b7280;
  margin-bottom: 2rem;
  font-size: 0.9rem;
  line-height: 1.5;
}

.gradient-container {
  display: flex;
  gap: 2rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.gradient-demo {
  flex: 1;
  min-width: 500px;
  border-radius: 12px;
  overflow: hidden;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  display: grid;
  grid-template-columns: 300px 1fr;
  height: 350px;
}

.gradient-image {
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.gradient-image img {
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}

.gradient-image-placeholder {
  width: 100%;
  height: 100%;
  background: #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: 8px;
  border: 2px dashed #cbd5e1;
  position: relative;
}

.gradient-info {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.gradient-name {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #1a202c;
}

.gradient-css {
  background: #f7fafc;
  padding: 1rem;
  border-radius: 6px;
  font-family: 'Monaco', 'Courier New', monospace;
  font-size: 0.8rem;
  color: #2d3748;
  margin-bottom: 1rem;
  border-left: 3px solid #4299e1;
}

.gradient-usage {
  font-size: 0.85rem;
  color: #718096;
  line-height: 1.5;
}

/* Theme-specific styles for gradient info sections */
.gradient-info-light * {
  color: #000000 !important;
}

.gradient-info-dark * {
  color: #ffffff !important;
}

.gradient-info-light .gradient-name {
  color: #1a202c !important;
}

.gradient-info-dark .gradient-name {
  color: #ffffff !important;
}

.gradient-info-light .gradient-usage {
  color: #4a5568 !important;
}

.gradient-info-dark .gradient-usage {
  color: #e2e8f0 !important;
}

/* Gradient Variations */
.overlay-gradient-base-vertical-light {
  background: linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%);
}

.overlay-gradient-base-horizontal-light {
  background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%);
}

.overlay-gradient-base-vertical-dark {
  background: linear-gradient(0deg, rgba(41, 41, 41, 0) 0%, rgba(41, 41, 41, 1) 100%);
}

.overlay-gradient-base-horizontal-dark {
  background: linear-gradient(90deg, rgba(41, 41, 41, 0) 0%, rgba(41, 41, 41, 1) 100%);
}

/* Inverse Gradient Variations */
.overlay-gradient-inverse-vertical-light {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);
}

.overlay-gradient-inverse-horizontal-light {
  background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);
}

.overlay-gradient-inverse-vertical-dark {
  background: linear-gradient(0deg, rgba(228, 228, 228, 0) 0%, rgba(228, 228, 228, 1) 100%);
}

.overlay-gradient-inverse-horizontal-dark {
  background: linear-gradient(90deg, rgba(228, 228, 228, 0) 0%, rgba(228, 228, 228, 1) 100%);
}

/* Demo backgrounds for better visibility */
.gradient-demo-bg {
  background-image: url('data:image/svg+xml,<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect width="10" height="10" fill="%23f1f5f9"/><rect x="10" y="10" width="10" height="10" fill="%23f1f5f9"/><rect x="10" width="10" height="10" fill="%23e2e8f0"/><rect y="10" width="10" height="10" fill="%23e2e8f0"/></svg>');
}
`}),e.jsxs("div",{className:"gradients-section",children:[e.jsx("div",{className:"gradients-description",children:e.jsx(r.p,{children:"Gradients provide smooth transitions between colors and transparency levels. Our gradient system offers consistent overlay effects for both light and dark themes, helping create visual depth and improve text readability over images."})}),e.jsx("div",{className:"gradient-container",children:e.jsxs("div",{className:"gradient-demo",children:[e.jsx("div",{className:"gradient-image",children:e.jsx("img",{src:"img/overlayGradientBaseVertical-light.jpg",alt:"Vertical gradient light mode example"})}),e.jsxs("div",{className:"gradient-info gradient-info-light",style:{background:"#ffffff"},children:[e.jsx("div",{className:"gradient-name",children:"Base Vertical - Light Mode"}),e.jsx("div",{className:"gradient-css overlay-gradient-base-vertical-light",children:e.jsx(r.p,{children:"background: linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%);"})}),e.jsx("div",{className:"gradient-usage",children:e.jsxs(r.p,{children:[e.jsx("strong",{children:"overlay.overlayGradientBaseVertical"}),e.jsx("br",{}),`\r
Vertical gradient for light theme overlays. Creates a smooth transition from transparent to white, ideal for text readability over images in light mode interfaces.`]})})]})]})}),e.jsx("div",{className:"gradient-container",children:e.jsxs("div",{className:"gradient-demo",children:[e.jsx("div",{className:"gradient-image",children:e.jsx("img",{src:"img/overlay.overlayGradientBaseHorizontal-light.jpg",alt:"Horizontal gradient light mode example"})}),e.jsxs("div",{className:"gradient-info gradient-info-light",style:{background:"#ffffff"},children:[e.jsx("div",{className:"gradient-name",children:"Base Horizontal - Light Mode"}),e.jsx("div",{className:"gradient-css overlay-gradient-base-horizontal-light",children:e.jsx(r.p,{children:"background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%);"})}),e.jsx("div",{className:"gradient-usage",children:e.jsxs(r.p,{children:[e.jsx("strong",{children:"overlay.overlayGradientBaseHorizontal"}),e.jsx("br",{}),`\r
Horizontal gradient for light theme overlays. Transitions from transparent to white from left to right, perfect for side-aligned content in light mode.`]})})]})]})}),e.jsx("div",{className:"gradient-container",children:e.jsxs("div",{className:"gradient-demo",children:[e.jsx("div",{className:"gradient-image",children:e.jsx("img",{src:"img/overlayGradientBaseVertical-dark.jpg",alt:"Vertical gradient dark mode example"})}),e.jsxs("div",{className:"gradient-info gradient-info-dark",style:{background:"#1b1b27"},children:[e.jsx("div",{className:"gradient-name",children:"Base Vertical - Dark Mode"}),e.jsx("div",{className:"gradient-css overlay-gradient-base-vertical-dark",children:e.jsx(r.p,{children:"background: linear-gradient(0deg, rgba(41, 41, 41, 0) 0%, rgba(41, 41, 41, 1) 100%);"})}),e.jsx("div",{className:"gradient-usage",children:e.jsxs(r.p,{children:[e.jsx("strong",{children:"overlay.overlayGradientBaseVertical"}),e.jsx("br",{}),`\r
Vertical gradient for dark theme overlays. Creates a smooth transition from transparent to dark gray (#292929), ensuring text readability in dark mode interfaces.`]})})]})]})}),e.jsx("div",{className:"gradient-container",children:e.jsxs("div",{className:"gradient-demo",children:[e.jsx("div",{className:"gradient-image",children:e.jsx("img",{src:"img/overlay.overlayGradientBaseHorizontal-dark.jpg",alt:"Horizontal gradient dark mode example"})}),e.jsxs("div",{className:"gradient-info gradient-info-dark",style:{background:"#1b1b27"},children:[e.jsx("div",{className:"gradient-name",children:"Base Horizontal - Dark Mode"}),e.jsx("div",{className:"gradient-css overlay-gradient-base-horizontal-dark",children:e.jsx(r.p,{children:"background: linear-gradient(90deg, rgba(41, 41, 41, 0) 0%, rgba(41, 41, 41, 1) 100%);"})}),e.jsx("div",{className:"gradient-usage",children:e.jsxs(r.p,{children:[e.jsx("strong",{children:"overlay.overlayGradientBaseHorizontal"}),e.jsx("br",{}),`\r
Horizontal gradient for dark theme overlays. Transitions from transparent to dark gray from left to right, ideal for side content in dark mode layouts.`]})})]})]})}),e.jsx("div",{className:"gradient-container",children:e.jsxs("div",{className:"gradient-demo",children:[e.jsx("div",{className:"gradient-image",children:e.jsx("img",{src:"img/overlay.overlayGradientInverseVertical-light.jpg",alt:"Inverse vertical gradient light mode example"})}),e.jsxs("div",{className:"gradient-info gradient-info-light",style:{background:"#ffffff"},children:[e.jsx("div",{className:"gradient-name",children:"Inverse Vertical - Light Mode"}),e.jsx("div",{className:"gradient-css overlay-gradient-inverse-vertical-light",children:e.jsx(r.p,{children:"background: linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);"})}),e.jsx("div",{className:"gradient-usage",children:e.jsxs(r.p,{children:[e.jsx("strong",{children:"overlay.overlayGradientInverseVertical"}),e.jsx("br",{}),`\r
Inverse vertical gradient for light theme overlays. Creates a smooth transition from transparent to black, ideal for white text over bright images.`]})})]})]})}),e.jsx("div",{className:"gradient-container",children:e.jsxs("div",{className:"gradient-demo",children:[e.jsx("div",{className:"gradient-image",children:e.jsx("img",{src:"img/overlay.overlayGradientInverseHorizontal-light.jpg",alt:"Inverse horizontal gradient light mode example"})}),e.jsxs("div",{className:"gradient-info gradient-info-light",style:{background:"#ffffff"},children:[e.jsx("div",{className:"gradient-name",children:"Inverse Horizontal - Light Mode"}),e.jsx("div",{className:"gradient-css overlay-gradient-inverse-horizontal-light",children:e.jsx(r.p,{children:"background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);"})}),e.jsx("div",{className:"gradient-usage",children:e.jsxs(r.p,{children:[e.jsx("strong",{children:"overlay.overlayGradientInverseHorizontal"}),e.jsx("br",{}),`\r
Inverse horizontal gradient for light theme overlays. Transitions from transparent to black from left to right, perfect for white text placement.`]})})]})]})}),e.jsx("div",{className:"gradient-container",children:e.jsxs("div",{className:"gradient-demo",children:[e.jsx("div",{className:"gradient-image",children:e.jsx("img",{src:"img/overlay.overlayGradientInverseVertical-dark.jpg",alt:"Inverse vertical gradient dark mode example"})}),e.jsxs("div",{className:"gradient-info gradient-info-dark",style:{background:"#1b1b27"},children:[e.jsx("div",{className:"gradient-name",children:"Inverse Vertical - Dark Mode"}),e.jsx("div",{className:"gradient-css overlay-gradient-inverse-vertical-dark",children:e.jsx(r.p,{children:"background: linear-gradient(0deg, rgba(228, 228, 228, 0) 0%, rgba(228, 228, 228, 1) 100%);"})}),e.jsx("div",{className:"gradient-usage",children:e.jsxs(r.p,{children:[e.jsx("strong",{children:"overlay.overlayGradientInverseVertical"}),e.jsx("br",{}),`\r
Inverse vertical gradient for dark theme overlays. Creates a smooth transition from transparent to light gray (#e4e4e4), ensuring dark text readability.`]})})]})]})}),e.jsx("div",{className:"gradient-container",children:e.jsxs("div",{className:"gradient-demo",children:[e.jsx("div",{className:"gradient-image",children:e.jsx("img",{src:"img/overlay.overlayGradientInverseHorizontal-dark.jpg",alt:"Inverse horizontal gradient dark mode example"})}),e.jsxs("div",{className:"gradient-info gradient-info-dark",style:{background:"#1b1b27"},children:[e.jsx("div",{className:"gradient-name",children:"Inverse Horizontal - Dark Mode"}),e.jsx("div",{className:"gradient-css overlay-gradient-inverse-horizontal-dark",children:e.jsx(r.p,{children:"background: linear-gradient(90deg, rgba(228, 228, 228, 0) 0%, rgba(228, 228, 228, 1) 100%);"})}),e.jsx("div",{className:"gradient-usage",children:e.jsxs(r.p,{children:[e.jsx("strong",{children:"overlay.overlayGradientInverseHorizontal"}),e.jsx("br",{}),`\r
Inverse horizontal gradient for dark theme overlays. Transitions from transparent to light gray from left to right, ideal for dark text placement.`]})})]})]})})]})]})]})}function v(a={}){const{wrapper:r}={...n(),...a.components};return r?e.jsx(r,{...a,children:e.jsx(i,{...a})}):i(a)}export{v as default};
