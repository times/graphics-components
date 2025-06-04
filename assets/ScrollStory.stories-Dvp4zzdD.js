import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./index-U0ga5oGA.js";import{S as s}from"./index-DX5sIDEo.js";import"./index-bJS6NAc1.js";import"./index-DNhRQn0H.js";import{W as d}from"./WithTextWrapper-BbK_a_Zr.js";import"./figma-theme-Cs2p2sUX.js";const S={title:"Components/ScrollStory",component:s,argTypes:{containerWidth:{control:{type:"select"},options:["bleed","edge-to-edge","inline"]},imgFit:{control:{type:"select"},options:["cover","contain","fill"]},borderRadius:{control:"text"},fixedImgHeight:{control:"text"},fontSize:{control:{type:"select"},options:["md","lg"]},videoLoop:{control:"boolean"},videoAutoplay:{control:"boolean"},videoControls:{control:"boolean"},videoMute:{control:"boolean"},data:{table:{disable:!0}}},decorators:[o=>e.jsx(d,{children:e.jsx(o,{})})]},c={containerWidth:"default",imgFit:"cover",fontSize:"lg",videoAutoplay:!0,videoControls:!1,slides:[{media:"https://picsum.photos/id/1015/1200/800",text:"This is the first slide with a beautiful image."},{media:"https://www.youtube.com/watch?v=wDchsz8nmbo",text:"This is the second slide with a YouTube video."},{media:"https://picsum.photos/id/1035/1200/800",text:"This is the third slide with another image."}]},p=({data:o,...n})=>{const l={...o,...n};return e.jsx(s,{data:l})},t=p.bind({});t.args={data:c};var r,i,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`({
  data,
  ...rest
}) => {
  const mergedData = {
    ...data,
    ...rest
  };
  return <ScrollStory data={mergedData} />;
}`,...(a=(i=t.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const y=["Default"];export{t as Default,y as __namedExportsOrder,S as default};
