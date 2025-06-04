import{j as m}from"./jsx-runtime-D_zvdyIk.js";import"./index-U0ga5oGA.js";import"./index-DX5sIDEo.js";import{M as j}from"./index-bJS6NAc1.js";import"./index-DNhRQn0H.js";import{W as E}from"./WithTextWrapper-BbK_a_Zr.js";import"./figma-theme-Cs2p2sUX.js";const F={title:"Components/MediaBlock",component:j,argTypes:{containerWidth:{control:{type:"select"},options:["bleed","edge-to-edge","inline"]},imgFit:{control:{type:"select"},options:["cover","contain","fill"]},borderRadius:{control:"text"},fixedImgHeight:{control:"text"},fontSize:{control:{type:"select"},options:["md","lg"]},videoLoop:{control:"boolean"},videoAutoplay:{control:"boolean"},videoControls:{control:"boolean"},videoMute:{control:"boolean"},data:{table:{disable:!0}}},decorators:[c=>m.jsx(E,{children:m.jsx(c,{})})]},e={media:"https://picsum.photos/1200/800",containerWidth:"inline",fixedImgHeight:"400px",imgBorderRadius:"0",videoAutoplay:"true",videoLoop:!0,videoMute:!0,videoControls:!0,wrapper:"true",text:"Chris Reynolds Gordon at one of his party venues in London",altText:"Example image",note:"GARETH PHILIPS"},t=({data:c,...P})=>{const R={...c,...P};return m.jsx(j,{data:R})},a=t.bind({});a.args={data:e};const o=t.bind({});o.args={data:{...e,media:"https://www.youtube.com/watch?v=wDchsz8nmbo",text:"YouTube video example"}};const r=t.bind({});r.args={data:{...e,media:"https://vimeo.com/76979871",text:"Vimeo video example"}};const s=t.bind({});s.args={data:{...e,media:"https://www.barrons.com/asset/barrons/videos/asset-uploader-a9e12c89-5df7-433d-98aa-868c701b078d/C0574.mp4",text:"MP4 video example with video.js"}};const n=t.bind({});n.args={data:{...e,media:"https://picsum.photos/1200/800",text:"Static image example"}};const d=t.bind({});d.args={data:{...e,media:"https://picsum.photos/1200/800",text:"Static image example",hed:"Header text",dek:"Dek text"}};const i=t.bind({});i.args={data:{...e,media:"https://picsum.photos/1200/800",text:"Static image example",caption:"Image caption"}};var p,l,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`({
  data,
  ...rest
}) => {
  const mergedData = {
    ...data,
    ...rest
  };
  return <MediaBlock data={mergedData} />;
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,x,h;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`({
  data,
  ...rest
}) => {
  const mergedData = {
    ...data,
    ...rest
  };
  return <MediaBlock data={mergedData} />;
}`,...(h=(x=o.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var b,D,v;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`({
  data,
  ...rest
}) => {
  const mergedData = {
    ...data,
    ...rest
  };
  return <MediaBlock data={mergedData} />;
}`,...(v=(D=r.parameters)==null?void 0:D.docs)==null?void 0:v.source}}};var M,f,k;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:`({
  data,
  ...rest
}) => {
  const mergedData = {
    ...data,
    ...rest
  };
  return <MediaBlock data={mergedData} />;
}`,...(k=(f=s.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var S,B,w;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`({
  data,
  ...rest
}) => {
  const mergedData = {
    ...data,
    ...rest
  };
  return <MediaBlock data={mergedData} />;
}`,...(w=(B=n.parameters)==null?void 0:B.docs)==null?void 0:w.source}}};var y,W,T;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`({
  data,
  ...rest
}) => {
  const mergedData = {
    ...data,
    ...rest
  };
  return <MediaBlock data={mergedData} />;
}`,...(T=(W=d.parameters)==null?void 0:W.docs)==null?void 0:T.source}}};var C,H,I;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`({
  data,
  ...rest
}) => {
  const mergedData = {
    ...data,
    ...rest
  };
  return <MediaBlock data={mergedData} />;
}`,...(I=(H=i.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};const O=["Default","YouTube","Vimeo","MP4","Image","WithHeader","WithCaption"];export{a as Default,n as Image,s as MP4,r as Vimeo,i as WithCaption,d as WithHeader,o as YouTube,O as __namedExportsOrder,F as default};
