import{j as o}from"./jsx-runtime-D_zvdyIk.js";import"./index-MPVjHJeJ.js";import{S as i}from"./index-DUUT1ymY.js";import{W as d}from"./WithTextWrapper-CMASEMwk.js";const f={title:"Components/ScrollStory",component:i,argTypes:{containerWidth:{control:{type:"select"},options:["bleed","edge-to-edge","inline"]},imgFit:{control:{type:"select"},options:["cover","contain","fill"]},borderRadius:{control:"text"},fixedImgHeight:{control:"text"},fontSize:{control:{type:"select"},options:["md","lg"]},videoLoop:{control:"boolean"},videoAutoplay:{control:"boolean"},videoControls:{control:"boolean"},videoMute:{control:"boolean"},data:{table:{disable:!0}}},decorators:[e=>o.jsx(d,{children:o.jsx(e,{})})]},c={containerWidth:"default",imgFit:"cover",fontSize:"lg",videoAutoplay:!0,videoControls:!1,slides:[{media:"https://picsum.photos/id/1015/1200/800",text:"This is the first slide with a beautiful image."},{media:"https://www.youtube.com/watch?v=wDchsz8nmbo",text:"This is the second slide with a YouTube video."},{media:"https://picsum.photos/id/1035/1200/800",text:"This is the third slide with another image."}]},p=({data:e,...n})=>{const l={...e,...n};return o.jsx(i,{data:l})},t=p.bind({});t.args={data:c};var r,a,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`({
  data,
  ...rest
}) => {
  const mergedData = {
    ...data,
    ...rest
  };
  return <ScrollStory data={mergedData} />;
}`,...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const x=["Default"];export{t as Default,x as __namedExportsOrder,f as default};
