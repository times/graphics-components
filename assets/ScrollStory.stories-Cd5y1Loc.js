import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./index-MPVjHJeJ.js";import{S as s}from"./index-vIJoc0uv.js";import"./index-I2Yy_fyO.js";import"./index-CAATbwiK.js";import{W as d}from"./WithTextWrapper-l1EXoTq6.js";const b={title:"Components/ScrollStory",component:s,argTypes:{containerWidth:{control:{type:"select"},options:["bleed","edge-to-edge","inline"]},imgFit:{control:{type:"select"},options:["cover","contain","fill"]},borderRadius:{control:"text"},fixedImgHeight:{control:"text"},fontSize:{control:{type:"select"},options:["md","lg"]},videoLoop:{control:"boolean"},videoAutoplay:{control:"boolean"},videoControls:{control:"boolean"},videoMute:{control:"boolean"},data:{table:{disable:!0}}},decorators:[o=>e.jsx(d,{children:e.jsx(o,{})})]},c={containerWidth:"default",imgFit:"cover",fontSize:"lg",videoAutoplay:!0,videoControls:!1,slides:[{media:"https://picsum.photos/id/1015/1200/800",text:"This is the first slide with a beautiful image."},{media:"https://www.youtube.com/watch?v=wDchsz8nmbo",text:"This is the second slide with a YouTube video."},{media:"https://picsum.photos/id/1035/1200/800",text:"This is the third slide with another image."}]},p=({data:o,...n})=>{const l={...o,...n};return e.jsx(s,{data:l})},t=p.bind({});t.args={data:c};var r,a,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`({
  data,
  ...rest
}) => {
  const mergedData = {
    ...data,
    ...rest
  };
  return <ScrollStory data={mergedData} />;
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const S=["Default"];export{t as Default,S as __namedExportsOrder,b as default};
