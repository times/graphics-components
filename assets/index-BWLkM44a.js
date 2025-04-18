import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./index-MPVjHJeJ.js";import{d as s,l as p,G as d,A as $}from"./index-CAATbwiK.js";const _=s.div`
    h3 {
        line-height: 20px;
        color: #000;
        font-size: 22px;
        font-weight: 700;
        margin: 0 auto;
        padding: 0 0 4px;
        text-align: left;
    }

    h4 {
        line-height: 20px;
        color: #000;
        font-size: 16px;
        font-weight: 400;
        margin: 0 auto 15px;
        padding: 0 0 4px;
        text-align: left;
    }

    .chart-title {
        line-height: 20px;
        color: #000;
        font-size: 16px;
        font-weight: 400;
        margin: 0 auto 15px;
        padding: 0 0 4px;
        text-align: left;
    }

    .note {
        color: rgb(51, 51, 51);
        font-family: Roboto-Regular, Roboto-Regular-fallback, sans-serif;
        font-size: 9px;
        line-height: 17px;
        margin-bottom: 0px;
        font-weight: 400;
        letter-spacing: 0.5px;
        text-align: left;
    }
`,g=({data:t={},children:r})=>{const{hed:o="",dek:i="",chartTitle:n="",note:l="",source:a=""}=t;return e.jsxs(_,{children:[o&&e.jsx("h3",{children:o}),i&&e.jsx("h4",{children:i}),n&&e.jsx("p",{className:"chart-title",children:n}),r,(l||a)&&e.jsxs("div",{className:"note-container",children:[l&&e.jsx("p",{className:"note",children:l}),a&&e.jsx("p",{className:"note",children:a})]})]})};g.__docgenInfo={description:"",methods:[],displayName:"Wrapper",props:{data:{defaultValue:{value:"{}",computed:!1},required:!1}}};const M=s.div`
    display: block;
    margin: 20px auto;
    position: relative;

    &.bleed {
        width: 80vw;
        margin-left: calc(-50vw + 50%);
        padding: 0 10vw;
    }

    &.edge-to-edge {
        width: 96vw;
        margin-left: calc(-48vw + 50%);
    }

    @media (max-width: 767px) {
        padding: 0 14px !important;
        &.bleed {
            padding: 0;
        }
    }
`,R=s.div`
    margin-top: 10px;
    text-align: left;
    font-family: Roboto-Regular, Roboto-Regular-fallback, sans-serif;
    p {
        font-size: 14px;
        color: rgb(105, 105, 105);
        line-height: 19px;
        margin-bottom: 4px;
        text-align: left;
    }
`,T=s.div`
    position: absolute;
    top: 0;
    background-color: black;
    color: #fff;
    padding: 10px;
    border-radius: ${({$imgBorderRadius:t})=>`${t} 0 0 0`};

    p {
        color: #fff;
        font-size: 12px;
        margin: 0;
    }
`,I=s.div`
    position: relative;

    iframe,
    video,
    img {
        width: 100%;
        height: auto;
        border: none;
        ${({$containerWidth:t,$fixedImgHeight:r,$imgBorderRadius:o})=>t==="edge-to-edge"?p`
                    height: 100vh;
                    object-fit: cover;
                    border-radius: ${o};
                `:t==="bleed"||t==="inline"&&r?p`
                    height: ${r};
                    object-fit: cover;
                    border-radius: ${o};
                `:p`
                border-radius: ${o};
            `}
    }
`,z=(t,r,o,i,n)=>{var l;if(t.includes("youtube.com")){const a=(l=t.split("v=")[1])==null?void 0:l.split("&")[0];return`https://www.youtube.com/embed/${a}?autoplay=${r?1:0}&loop=${o?1:0}&controls=${i?1:0}&mute=${n?1:0}&playlist=${a}`}else if(t.includes("vimeo.com"))return`https://player.vimeo.com/video/${t.split("/").pop()}?autoplay=${r?1:0}&loop=${o?1:0}&controls=${i?1:0}&muted=${n?1:0}`;return t},m=({data:t})=>{if(!t)return null;const{fixedImgHeight:r=null,containerWidth:o="inline",imgBorderRadius:i=null,media:n="",videoLoop:l="true",videoAutoplay:a="true",videoControls:c="false",videoMute:u="true",text:f,caption:x,altText:j}=t,w=z(n,a===!0,l===!0,c===!0,u===!0),y=e.jsxs(I,{$containerWidth:o,$fixedImgHeight:r,$imgBorderRadius:i,children:[n.includes("youtube.com")||n.includes("vimeo.com")?e.jsx("iframe",{src:w,title:"Embedded media",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}):n.endsWith(".mp4")?e.jsxs("video",{autoPlay:a,loop:l,controls:c,muted:u,children:[e.jsx("source",{src:n,type:"video/mp4"}),e.jsx("track",{kind:"captions",src:n.replace(".mp4",".vtt"),label:"English"}),"Your browser does not support the video tag."]}):e.jsx("img",{src:n,alt:j}),f&&e.jsx(R,{$imgBorderRadius:i,dangerouslySetInnerHTML:{__html:f}}),x&&e.jsx(T,{$imgBorderRadius:i,dangerouslySetInnerHTML:{__html:x}})]});return e.jsxs(e.Fragment,{children:[e.jsx(d,{}),e.jsx(M,{className:o,children:e.jsx(g,{data:t,children:y})})]})};m.__docgenInfo={description:"",methods:[],displayName:"MediaBlock"};const N=s.h1`
    box-sizing: border-box;
    padding: 0px;
    white-space: pre-wrap;
    overflow-wrap: break-word;
    margin: 0px 0px 7px;
    font-weight: 600;
    font-size: 30px;
    line-height: 33px;
    color: rgb(29, 29, 27);
    text-align: ${({align:t})=>t||"left"};

    font-family: TimesModern-Bold, TimesModern-Bold-fallback, serif;
    @media (min-width: 768px) {
        font-size: 45px;
        line-height: 45px;
    }
`,h=({text:t,align:r="left"})=>t?e.jsxs(e.Fragment,{children:[e.jsx(d,{}),e.jsx(N,{align:r,children:t})]}):null;h.__docgenInfo={description:"",methods:[],displayName:"Headline",props:{align:{defaultValue:{value:"'left'",computed:!1},required:!1}}};const k=s.p`
    font-family: TimesModern-Regular, TimesModern-Regular-fallback, serif;
    font-size: 20px;
    line-height: 26px;
    color: rgb(51, 51, 51);
    padding-bottom: 10px;
    white-space: pre-wrap;
    overflow-wrap: break-word;
    text-align: ${({align:t})=>t||"left"};
`,b=({text:t,align:r="left"})=>t?e.jsxs(e.Fragment,{children:[e.jsx(d,{}),e.jsx(k,{align:r,children:t})]}):null;b.__docgenInfo={description:"",methods:[],displayName:"Description",props:{align:{defaultValue:{value:"'left'",computed:!1},required:!1}}};const F=s.p`
    font-family: TimesModern-Regular, TimesModern-Regular-fallback, serif;
    font-size: 20px;
    line-height: 26px;
    color: rgb(51, 51, 51);
    padding-bottom: 10px;
    text-align: ${({align:t})=>t||"left"};
`,v=({text:t,align:r="left"})=>t?e.jsxs(e.Fragment,{children:[e.jsx(d,{}),e.jsx(F,{align:r,dangerouslySetInnerHTML:{__html:t}})]}):null;v.__docgenInfo={description:"",methods:[],displayName:"Text",props:{align:{defaultValue:{value:"'left'",computed:!1},required:!1}}};const B=({blocks:t,align:r="left"})=>e.jsx(e.Fragment,{children:t.map((o,i)=>{switch(o.type){case"headline":return e.jsx(h,{text:o.text,align:r},i);case"description":return e.jsx(b,{text:o.text,align:r},i);case"flags":return e.jsx($,{withContainer:o.withContainer,longRead:o.longRead,flags:o.flags},i);case"text":return e.jsx(v,{text:o.text,align:r},i);case"media":return e.jsx(m,{data:o.data},i);default:return null}})});B.__docgenInfo={description:"",methods:[],displayName:"FurnitureBlock",props:{align:{defaultValue:{value:"'left'",computed:!1},required:!1}}};export{b as D,B as F,h as H,m as M,v as T};
