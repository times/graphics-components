import{j as A}from"./jsx-runtime-D_zvdyIk.js";import{e as N,r as U}from"./index-U0ga5oGA.js";import{f as tr}from"./figma-theme-Cs2p2sUX.js";var R=function(){return R=Object.assign||function(e){for(var r,n=1,o=arguments.length;n<o;n++){r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},R.apply(this,arguments)};function Q(t,e,r){if(r||arguments.length===2)for(var n=0,o=e.length,i;n<o;n++)(i||!(n in e))&&(i||(i=Array.prototype.slice.call(e,0,n)),i[n]=e[n]);return t.concat(i||Array.prototype.slice.call(e))}var b="-ms-",ut="-moz-",m="-webkit-",Se="comm",Rt="rule",Jt="decl",er="@import",$e="@keyframes",rr="@layer",xe=Math.abs,Xt=String.fromCharCode,Bt=Object.assign;function nr(t,e){return E(t,0)^45?(((e<<2^E(t,0))<<2^E(t,1))<<2^E(t,2))<<2^E(t,3):0}function ke(t){return t.trim()}function z(t,e){return(t=e.exec(t))?t[0]:t}function l(t,e,r){return t.replace(e,r)}function vt(t,e,r){return t.indexOf(e,r)}function E(t,e){return t.charCodeAt(e)|0}function tt(t,e,r){return t.slice(e,r)}function T(t){return t.length}function Ce(t){return t.length}function ct(t,e){return e.push(t),t}function or(t,e){return t.map(e).join("")}function se(t,e){return t.filter(function(r){return!z(r,e)})}var Pt=1,et=1,Ie=0,j=0,C=0,ot="";function _t(t,e,r,n,o,i,s,a){return{value:t,root:e,parent:r,type:n,props:o,children:i,line:Pt,column:et,length:s,return:"",siblings:a}}function B(t,e){return Bt(_t("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function J(t){for(;t.root;)t=B(t.root,{children:[t]});ct(t,t.siblings)}function ir(){return C}function sr(){return C=j>0?E(ot,--j):0,et--,C===10&&(et=1,Pt--),C}function O(){return C=j<Ie?E(ot,j++):0,et++,C===10&&(et=1,Pt++),C}function H(){return E(ot,j)}function wt(){return j}function jt(t,e){return tt(ot,t,e)}function Wt(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ar(t){return Pt=et=1,Ie=T(ot=t),j=0,[]}function cr(t){return ot="",t}function Ft(t){return ke(jt(j-1,qt(t===91?t+2:t===40?t+1:t)))}function ur(t){for(;(C=H())&&C<33;)O();return Wt(t)>2||Wt(C)>3?"":" "}function lr(t,e){for(;--e&&O()&&!(C<48||C>102||C>57&&C<65||C>70&&C<97););return jt(t,wt()+(e<6&&H()==32&&O()==32))}function qt(t){for(;O();)switch(C){case t:return j;case 34:case 39:t!==34&&t!==39&&qt(C);break;case 40:t===41&&qt(t);break;case 92:O();break}return j}function pr(t,e){for(;O()&&t+C!==57;)if(t+C===84&&H()===47)break;return"/*"+jt(e,j-1)+"*"+Xt(t===47?t:O())}function fr(t){for(;!Wt(H());)O();return jt(t,j)}function dr(t){return cr(St("",null,null,null,[""],t=ar(t),0,[0],t))}function St(t,e,r,n,o,i,s,a,c){for(var u=0,p=0,d=s,g=0,h=0,w=0,x=1,P=1,k=1,S=0,v="",$=o,I=i,y=n,f=v;P;)switch(w=S,S=O()){case 40:if(w!=108&&E(f,d-1)==58){vt(f+=l(Ft(S),"&","&\f"),"&\f",xe(u?a[u-1]:0))!=-1&&(k=-1);break}case 34:case 39:case 91:f+=Ft(S);break;case 9:case 10:case 13:case 32:f+=ur(w);break;case 92:f+=lr(wt()-1,7);continue;case 47:switch(H()){case 42:case 47:ct(hr(pr(O(),wt()),e,r,c),c);break;default:f+="/"}break;case 123*x:a[u++]=T(f)*k;case 125*x:case 59:case 0:switch(S){case 0:case 125:P=0;case 59+p:k==-1&&(f=l(f,/\f/g,"")),h>0&&T(f)-d&&ct(h>32?ce(f+";",n,r,d-1,c):ce(l(f," ","")+";",n,r,d-2,c),c);break;case 59:f+=";";default:if(ct(y=ae(f,e,r,u,p,o,a,v,$=[],I=[],d,i),i),S===123)if(p===0)St(f,e,y,y,$,i,d,a,I);else switch(g===99&&E(f,3)===110?100:g){case 100:case 108:case 109:case 115:St(t,y,y,n&&ct(ae(t,y,y,0,0,o,a,v,o,$=[],d,I),I),o,I,d,a,n?$:I);break;default:St(f,y,y,y,[""],I,0,a,I)}}u=p=h=0,x=k=1,v=f="",d=s;break;case 58:d=1+T(f),h=w;default:if(x<1){if(S==123)--x;else if(S==125&&x++==0&&sr()==125)continue}switch(f+=Xt(S),S*x){case 38:k=p>0?1:(f+="\f",-1);break;case 44:a[u++]=(T(f)-1)*k,k=1;break;case 64:H()===45&&(f+=Ft(O())),g=H(),p=d=T(v=f+=fr(wt())),S++;break;case 45:w===45&&T(f)==2&&(x=0)}}return i}function ae(t,e,r,n,o,i,s,a,c,u,p,d){for(var g=o-1,h=o===0?i:[""],w=Ce(h),x=0,P=0,k=0;x<n;++x)for(var S=0,v=tt(t,g+1,g=xe(P=s[x])),$=t;S<w;++S)($=ke(P>0?h[S]+" "+v:l(v,/&\f/g,h[S])))&&(c[k++]=$);return _t(t,e,r,o===0?Rt:a,c,u,p,d)}function hr(t,e,r,n){return _t(t,e,r,Se,Xt(ir()),tt(t,2,-2),0,n)}function ce(t,e,r,n,o){return _t(t,e,r,Jt,tt(t,0,n),tt(t,n+1,-1),n,o)}function Ae(t,e,r){switch(nr(t,e)){case 5103:return m+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return m+t+t;case 4789:return ut+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return m+t+ut+t+b+t+t;case 5936:switch(E(t,e+11)){case 114:return m+t+b+l(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return m+t+b+l(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return m+t+b+l(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return m+t+b+t+t;case 6165:return m+t+b+"flex-"+t+t;case 5187:return m+t+l(t,/(\w+).+(:[^]+)/,m+"box-$1$2"+b+"flex-$1$2")+t;case 5443:return m+t+b+"flex-item-"+l(t,/flex-|-self/g,"")+(z(t,/flex-|baseline/)?"":b+"grid-row-"+l(t,/flex-|-self/g,""))+t;case 4675:return m+t+b+"flex-line-pack"+l(t,/align-content|flex-|-self/g,"")+t;case 5548:return m+t+b+l(t,"shrink","negative")+t;case 5292:return m+t+b+l(t,"basis","preferred-size")+t;case 6060:return m+"box-"+l(t,"-grow","")+m+t+b+l(t,"grow","positive")+t;case 4554:return m+l(t,/([^-])(transform)/g,"$1"+m+"$2")+t;case 6187:return l(l(l(t,/(zoom-|grab)/,m+"$1"),/(image-set)/,m+"$1"),t,"")+t;case 5495:case 3959:return l(t,/(image-set\([^]*)/,m+"$1$`$1");case 4968:return l(l(t,/(.+:)(flex-)?(.*)/,m+"box-pack:$3"+b+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+m+t+t;case 4200:if(!z(t,/flex-|baseline/))return b+"grid-column-align"+tt(t,e)+t;break;case 2592:case 3360:return b+l(t,"template-","")+t;case 4384:case 3616:return r&&r.some(function(n,o){return e=o,z(n.props,/grid-\w+-end/)})?~vt(t+(r=r[e].value),"span",0)?t:b+l(t,"-start","")+t+b+"grid-row-span:"+(~vt(r,"span",0)?z(r,/\d+/):+z(r,/\d+/)-+z(t,/\d+/))+";":b+l(t,"-start","")+t;case 4896:case 4128:return r&&r.some(function(n){return z(n.props,/grid-\w+-start/)})?t:b+l(l(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return l(t,/(.+)-inline(.+)/,m+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(T(t)-1-e>6)switch(E(t,e+1)){case 109:if(E(t,e+4)!==45)break;case 102:return l(t,/(.+:)(.+)-([^]+)/,"$1"+m+"$2-$3$1"+ut+(E(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~vt(t,"stretch",0)?Ae(l(t,"stretch","fill-available"),e,r)+t:t}break;case 5152:case 5920:return l(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,o,i,s,a,c,u){return b+o+":"+i+u+(s?b+o+"-span:"+(a?c:+c-+i)+u:"")+t});case 4949:if(E(t,e+6)===121)return l(t,":",":"+m)+t;break;case 6444:switch(E(t,E(t,14)===45?18:11)){case 120:return l(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+m+(E(t,14)===45?"inline-":"")+"box$3$1"+m+"$2$3$1"+b+"$2box$3")+t;case 100:return l(t,":",":"+b)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return l(t,"scroll-","scroll-snap-")+t}return t}function kt(t,e){for(var r="",n=0;n<t.length;n++)r+=e(t[n],n,t,e)||"";return r}function gr(t,e,r,n){switch(t.type){case rr:if(t.children.length)break;case er:case Jt:return t.return=t.return||t.value;case Se:return"";case $e:return t.return=t.value+"{"+kt(t.children,n)+"}";case Rt:if(!T(t.value=t.props.join(",")))return""}return T(r=kt(t.children,n))?t.return=t.value+"{"+r+"}":""}function mr(t){var e=Ce(t);return function(r,n,o,i){for(var s="",a=0;a<e;a++)s+=t[a](r,n,o,i)||"";return s}}function yr(t){return function(e){e.root||(e=e.return)&&t(e)}}function br(t,e,r,n){if(t.length>-1&&!t.return)switch(t.type){case Jt:t.return=Ae(t.value,t.length,r);return;case $e:return kt([B(t,{value:l(t.value,"@","@"+m)})],n);case Rt:if(t.length)return or(r=t.props,function(o){switch(z(o,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":J(B(t,{props:[l(o,/:(read-\w+)/,":"+ut+"$1")]})),J(B(t,{props:[o]})),Bt(t,{props:se(r,n)});break;case"::placeholder":J(B(t,{props:[l(o,/:(plac\w+)/,":"+m+"input-$1")]})),J(B(t,{props:[l(o,/:(plac\w+)/,":"+ut+"$1")]})),J(B(t,{props:[l(o,/:(plac\w+)/,b+"input-$1")]})),J(B(t,{props:[o]})),Bt(t,{props:se(r,n)});break}return""})}}var vr={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},_={},rt=typeof process<"u"&&_!==void 0&&(_.REACT_APP_SC_ATTR||_.SC_ATTR)||"data-styled",Ee="active",Re="data-styled-version",Nt="6.1.17",Qt=`/*!sc*/
`,Ct=typeof window<"u"&&"HTMLElement"in window,wr=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&_!==void 0&&_.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&_.REACT_APP_SC_DISABLE_SPEEDY!==""?_.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&_.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&_!==void 0&&_.SC_DISABLE_SPEEDY!==void 0&&_.SC_DISABLE_SPEEDY!==""&&_.SC_DISABLE_SPEEDY!=="false"&&_.SC_DISABLE_SPEEDY),Sr={},Ot=Object.freeze([]),nt=Object.freeze({});function Pe(t,e,r){return r===void 0&&(r=nt),t.theme!==r.theme&&t.theme||e||r.theme}var _e=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),$r=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,xr=/(^-|-$)/g;function ue(t){return t.replace($r,"-").replace(xr,"")}var kr=/(a)(d)/gi,yt=52,le=function(t){return String.fromCharCode(t+(t>25?39:97))};function Yt(t){var e,r="";for(e=Math.abs(t);e>yt;e=e/yt|0)r=le(e%yt)+r;return(le(e%yt)+r).replace(kr,"$1-$2")}var Mt,je=5381,X=function(t,e){for(var r=e.length;r;)t=33*t^e.charCodeAt(--r);return t},Ne=function(t){return X(je,t)};function te(t){return Yt(Ne(t)>>>0)}function Cr(t){return t.displayName||t.name||"Component"}function Gt(t){return typeof t=="string"&&!0}var Oe=typeof Symbol=="function"&&Symbol.for,Te=Oe?Symbol.for("react.memo"):60115,Ir=Oe?Symbol.for("react.forward_ref"):60112,Ar={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Er={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},De={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Rr=((Mt={})[Ir]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Mt[Te]=De,Mt);function pe(t){return("type"in(e=t)&&e.type.$$typeof)===Te?De:"$$typeof"in t?Rr[t.$$typeof]:Ar;var e}var Pr=Object.defineProperty,_r=Object.getOwnPropertyNames,fe=Object.getOwnPropertySymbols,jr=Object.getOwnPropertyDescriptor,Nr=Object.getPrototypeOf,de=Object.prototype;function ze(t,e,r){if(typeof e!="string"){if(de){var n=Nr(e);n&&n!==de&&ze(t,n,r)}var o=_r(e);fe&&(o=o.concat(fe(e)));for(var i=pe(t),s=pe(e),a=0;a<o.length;++a){var c=o[a];if(!(c in Er||r&&r[c]||s&&c in s||i&&c in i)){var u=jr(e,c);try{Pr(t,c,u)}catch{}}}}return t}function V(t){return typeof t=="function"}function ee(t){return typeof t=="object"&&"styledComponentId"in t}function Y(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function It(t,e){if(t.length===0)return"";for(var r=t[0],n=1;n<t.length;n++)r+=t[n];return r}function lt(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Ut(t,e,r){if(r===void 0&&(r=!1),!r&&!lt(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var n=0;n<e.length;n++)t[n]=Ut(t[n],e[n]);else if(lt(e))for(var n in e)t[n]=Ut(t[n],e[n]);return t}function re(t,e){Object.defineProperty(t,"toString",{value:e})}function K(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var Or=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var r=0,n=0;n<e;n++)r+=this.groupSizes[n];return r},t.prototype.insertRules=function(e,r){if(e>=this.groupSizes.length){for(var n=this.groupSizes,o=n.length,i=o;e>=i;)if((i<<=1)<0)throw K(16,"".concat(e));this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var s=o;s<i;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(e+1),c=(s=0,r.length);s<c;s++)this.tag.insertRule(a,r[s])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var r=this.groupSizes[e],n=this.indexOfGroup(e),o=n+r;this.groupSizes[e]=0;for(var i=n;i<o;i++)this.tag.deleteRule(n)}},t.prototype.getGroup=function(e){var r="";if(e>=this.length||this.groupSizes[e]===0)return r;for(var n=this.groupSizes[e],o=this.indexOfGroup(e),i=o+n,s=o;s<i;s++)r+="".concat(this.tag.getRule(s)).concat(Qt);return r},t}(),$t=new Map,At=new Map,xt=1,bt=function(t){if($t.has(t))return $t.get(t);for(;At.has(xt);)xt++;var e=xt++;return $t.set(t,e),At.set(e,t),e},Tr=function(t,e){xt=e+1,$t.set(t,e),At.set(e,t)},Dr="style[".concat(rt,"][").concat(Re,'="').concat(Nt,'"]'),zr=new RegExp("^".concat(rt,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Fr=function(t,e,r){for(var n,o=r.split(","),i=0,s=o.length;i<s;i++)(n=o[i])&&t.registerName(e,n)},Mr=function(t,e){for(var r,n=((r=e.textContent)!==null&&r!==void 0?r:"").split(Qt),o=[],i=0,s=n.length;i<s;i++){var a=n[i].trim();if(a){var c=a.match(zr);if(c){var u=0|parseInt(c[1],10),p=c[2];u!==0&&(Tr(p,u),Fr(t,p,c[3]),t.getTag().insertRules(u,o)),o.length=0}else o.push(a)}}},he=function(t){for(var e=document.querySelectorAll(Dr),r=0,n=e.length;r<n;r++){var o=e[r];o&&o.getAttribute(rt)!==Ee&&(Mr(t,o),o.parentNode&&o.parentNode.removeChild(o))}};function Gr(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Fe=function(t){var e=document.head,r=t||e,n=document.createElement("style"),o=function(a){var c=Array.from(a.querySelectorAll("style[".concat(rt,"]")));return c[c.length-1]}(r),i=o!==void 0?o.nextSibling:null;n.setAttribute(rt,Ee),n.setAttribute(Re,Nt);var s=Gr();return s&&n.setAttribute("nonce",s),r.insertBefore(n,i),n},Lr=function(){function t(e){this.element=Fe(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,o=0,i=n.length;o<i;o++){var s=n[o];if(s.ownerNode===r)return s}throw K(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,r){try{return this.sheet.insertRule(r,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var r=this.sheet.cssRules[e];return r&&r.cssText?r.cssText:""},t}(),Br=function(){function t(e){this.element=Fe(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,r){if(e<=this.length&&e>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),Wr=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,r){return e<=this.length&&(this.rules.splice(e,0,r),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),ge=Ct,qr={isServer:!Ct,useCSSOMInjection:!wr},Et=function(){function t(e,r,n){e===void 0&&(e=nt),r===void 0&&(r={});var o=this;this.options=R(R({},qr),e),this.gs=r,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Ct&&ge&&(ge=!1,he(this)),re(this,function(){return function(i){for(var s=i.getTag(),a=s.length,c="",u=function(d){var g=function(k){return At.get(k)}(d);if(g===void 0)return"continue";var h=i.names.get(g),w=s.getGroup(d);if(h===void 0||!h.size||w.length===0)return"continue";var x="".concat(rt,".g").concat(d,'[id="').concat(g,'"]'),P="";h!==void 0&&h.forEach(function(k){k.length>0&&(P+="".concat(k,","))}),c+="".concat(w).concat(x,'{content:"').concat(P,'"}').concat(Qt)},p=0;p<a;p++)u(p);return c}(o)})}return t.registerId=function(e){return bt(e)},t.prototype.rehydrate=function(){!this.server&&Ct&&he(this)},t.prototype.reconstructWithOptions=function(e,r){return r===void 0&&(r=!0),new t(R(R({},this.options),e),this.gs,r&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(r){var n=r.useCSSOMInjection,o=r.target;return r.isServer?new Wr(o):n?new Lr(o):new Br(o)}(this.options),new Or(e)));var e},t.prototype.hasNameForId=function(e,r){return this.names.has(e)&&this.names.get(e).has(r)},t.prototype.registerName=function(e,r){if(bt(e),this.names.has(e))this.names.get(e).add(r);else{var n=new Set;n.add(r),this.names.set(e,n)}},t.prototype.insertRules=function(e,r,n){this.registerName(e,r),this.getTag().insertRules(bt(e),n)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(bt(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),Yr=/&/g,Ur=/^\s*\/\/.*$/gm;function Me(t,e){return t.map(function(r){return r.type==="rule"&&(r.value="".concat(e," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(e," ")),r.props=r.props.map(function(n){return"".concat(e," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=Me(r.children,e)),r})}function Hr(t){var e,r,n,o=nt,i=o.options,s=i===void 0?nt:i,a=o.plugins,c=a===void 0?Ot:a,u=function(g,h,w){return w.startsWith(r)&&w.endsWith(r)&&w.replaceAll(r,"").length>0?".".concat(e):g},p=c.slice();p.push(function(g){g.type===Rt&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(Yr,r).replace(n,u))}),s.prefix&&p.push(br),p.push(gr);var d=function(g,h,w,x){h===void 0&&(h=""),w===void 0&&(w=""),x===void 0&&(x="&"),e=x,r=h,n=new RegExp("\\".concat(r,"\\b"),"g");var P=g.replace(Ur,""),k=dr(w||h?"".concat(w," ").concat(h," { ").concat(P," }"):P);s.namespace&&(k=Me(k,s.namespace));var S=[];return kt(k,mr(p.concat(yr(function(v){return S.push(v)})))),S};return d.hash=c.length?c.reduce(function(g,h){return h.name||K(15),X(g,h.name)},je).toString():"",d}var Vr=new Et,Ht=Hr(),Ge=N.createContext({shouldForwardProp:void 0,styleSheet:Vr,stylis:Ht});Ge.Consumer;N.createContext(void 0);function Vt(){return U.useContext(Ge)}var Le=function(){function t(e,r){var n=this;this.inject=function(o,i){i===void 0&&(i=Ht);var s=n.name+i.hash;o.hasNameForId(n.id,s)||o.insertRules(n.id,s,i(n.rules,s,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=r,re(this,function(){throw K(12,String(n.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Ht),this.name+e.hash},t}(),Kr=function(t){return t>="A"&&t<="Z"};function me(t){for(var e="",r=0;r<t.length;r++){var n=t[r];if(r===1&&n==="-"&&t[0]==="-")return t;Kr(n)?e+="-"+n.toLowerCase():e+=n}return e.startsWith("ms-")?"-"+e:e}var Be=function(t){return t==null||t===!1||t===""},We=function(t){var e,r,n=[];for(var o in t){var i=t[o];t.hasOwnProperty(o)&&!Be(i)&&(Array.isArray(i)&&i.isCss||V(i)?n.push("".concat(me(o),":"),i,";"):lt(i)?n.push.apply(n,Q(Q(["".concat(o," {")],We(i),!1),["}"],!1)):n.push("".concat(me(o),": ").concat((e=o,(r=i)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||e in vr||e.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function W(t,e,r,n){if(Be(t))return[];if(ee(t))return[".".concat(t.styledComponentId)];if(V(t)){if(!V(i=t)||i.prototype&&i.prototype.isReactComponent||!e)return[t];var o=t(e);return W(o,e,r,n)}var i;return t instanceof Le?r?(t.inject(r,n),[t.getName(n)]):[t]:lt(t)?We(t):Array.isArray(t)?Array.prototype.concat.apply(Ot,t.map(function(s){return W(s,e,r,n)})):[t.toString()]}function qe(t){for(var e=0;e<t.length;e+=1){var r=t[e];if(V(r)&&!ee(r))return!1}return!0}var Zr=Ne(Nt),Jr=function(){function t(e,r,n){this.rules=e,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&qe(e),this.componentId=r,this.baseHash=X(Zr,r),this.baseStyle=n,Et.registerId(r)}return t.prototype.generateAndInjectStyles=function(e,r,n){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))o=Y(o,this.staticRulesId);else{var i=It(W(this.rules,e,r,n)),s=Yt(X(this.baseHash,i)>>>0);if(!r.hasNameForId(this.componentId,s)){var a=n(i,".".concat(s),void 0,this.componentId);r.insertRules(this.componentId,s,a)}o=Y(o,s),this.staticRulesId=s}else{for(var c=X(this.baseHash,n.hash),u="",p=0;p<this.rules.length;p++){var d=this.rules[p];if(typeof d=="string")u+=d;else if(d){var g=It(W(d,e,r,n));c=X(c,g+p),u+=g}}if(u){var h=Yt(c>>>0);r.hasNameForId(this.componentId,h)||r.insertRules(this.componentId,h,n(u,".".concat(h),void 0,this.componentId)),o=Y(o,h)}}return o},t}(),pt=N.createContext(void 0);pt.Consumer;function Xr(t){var e=N.useContext(pt),r=U.useMemo(function(){return function(n,o){if(!n)throw K(14);if(V(n)){var i=n(o);return i}if(Array.isArray(n)||typeof n!="object")throw K(8);return o?R(R({},o),n):n}(t.theme,e)},[t.theme,e]);return t.children?N.createElement(pt.Provider,{value:r},t.children):null}var Lt={};function Qr(t,e,r){var n=ee(t),o=t,i=!Gt(t),s=e.attrs,a=s===void 0?Ot:s,c=e.componentId,u=c===void 0?function($,I){var y=typeof $!="string"?"sc":ue($);Lt[y]=(Lt[y]||0)+1;var f="".concat(y,"-").concat(te(Nt+y+Lt[y]));return I?"".concat(I,"-").concat(f):f}(e.displayName,e.parentComponentId):c,p=e.displayName,d=p===void 0?function($){return Gt($)?"styled.".concat($):"Styled(".concat(Cr($),")")}(t):p,g=e.displayName&&e.componentId?"".concat(ue(e.displayName),"-").concat(e.componentId):e.componentId||u,h=n&&o.attrs?o.attrs.concat(a).filter(Boolean):a,w=e.shouldForwardProp;if(n&&o.shouldForwardProp){var x=o.shouldForwardProp;if(e.shouldForwardProp){var P=e.shouldForwardProp;w=function($,I){return x($,I)&&P($,I)}}else w=x}var k=new Jr(r,g,n?o.componentStyle:void 0);function S($,I){return function(y,f,Z){var ft=y.attrs,He=y.componentStyle,Ve=y.defaultProps,Ke=y.foldedComponentIds,Ze=y.styledComponentId,Je=y.target,Xe=N.useContext(pt),Qe=Vt(),Tt=y.shouldForwardProp||Qe.shouldForwardProp,oe=Pe(f,Xe,Ve)||nt,D=function(ht,st,gt){for(var at,q=R(R({},st),{className:void 0,theme:gt}),zt=0;zt<ht.length;zt+=1){var mt=V(at=ht[zt])?at(q):at;for(var G in mt)q[G]=G==="className"?Y(q[G],mt[G]):G==="style"?R(R({},q[G]),mt[G]):mt[G]}return st.className&&(q.className=Y(q.className,st.className)),q}(ft,f,oe),dt=D.as||Je,it={};for(var M in D)D[M]===void 0||M[0]==="$"||M==="as"||M==="theme"&&D.theme===oe||(M==="forwardedAs"?it.as=D.forwardedAs:Tt&&!Tt(M,dt)||(it[M]=D[M]));var ie=function(ht,st){var gt=Vt(),at=ht.generateAndInjectStyles(st,gt.styleSheet,gt.stylis);return at}(He,D),Dt=Y(Ke,Ze);return ie&&(Dt+=" "+ie),D.className&&(Dt+=" "+D.className),it[Gt(dt)&&!_e.has(dt)?"class":"className"]=Dt,Z&&(it.ref=Z),U.createElement(dt,it)}(v,$,I)}S.displayName=d;var v=N.forwardRef(S);return v.attrs=h,v.componentStyle=k,v.displayName=d,v.shouldForwardProp=w,v.foldedComponentIds=n?Y(o.foldedComponentIds,o.styledComponentId):"",v.styledComponentId=g,v.target=n?o.target:t,Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function($){this._foldedDefaultProps=n?function(I){for(var y=[],f=1;f<arguments.length;f++)y[f-1]=arguments[f];for(var Z=0,ft=y;Z<ft.length;Z++)Ut(I,ft[Z],!0);return I}({},o.defaultProps,$):$}}),re(v,function(){return".".concat(v.styledComponentId)}),i&&ze(v,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),v}function ye(t,e){for(var r=[t[0]],n=0,o=e.length;n<o;n+=1)r.push(e[n],t[n+1]);return r}var be=function(t){return Object.assign(t,{isCss:!0})};function ne(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];if(V(t)||lt(t))return be(W(ye(Ot,Q([t],e,!0))));var n=t;return e.length===0&&n.length===1&&typeof n[0]=="string"?W(n):be(W(ye(n,e)))}function Kt(t,e,r){if(r===void 0&&(r=nt),!e)throw K(1,e);var n=function(o){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return t(e,r,ne.apply(void 0,Q([o],i,!1)))};return n.attrs=function(o){return Kt(t,e,R(R({},r),{attrs:Array.prototype.concat(r.attrs,o).filter(Boolean)}))},n.withConfig=function(o){return Kt(t,e,R(R({},r),o))},n}var Ye=function(t){return Kt(Qr,t)},F=Ye;_e.forEach(function(t){F[t]=Ye(t)});var tn=function(){function t(e,r){this.rules=e,this.componentId=r,this.isStatic=qe(e),Et.registerId(this.componentId+1)}return t.prototype.createStyles=function(e,r,n,o){var i=o(It(W(this.rules,r,n,o)),""),s=this.componentId+e;n.insertRules(s,s,i)},t.prototype.removeStyles=function(e,r){r.clearRules(this.componentId+e)},t.prototype.renderStyles=function(e,r,n,o){e>2&&Et.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,r,n,o)},t}();function en(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];var n=ne.apply(void 0,Q([t],e,!1)),o="sc-global-".concat(te(JSON.stringify(n))),i=new tn(n,o),s=function(c){var u=Vt(),p=N.useContext(pt),d=N.useRef(u.styleSheet.allocateGSInstance(o)).current;return u.styleSheet.server&&a(d,c,u.styleSheet,p,u.stylis),N.useLayoutEffect(function(){if(!u.styleSheet.server)return a(d,c,u.styleSheet,p,u.stylis),function(){return i.removeStyles(d,u.styleSheet)}},[d,c,u.styleSheet,p,u.stylis]),null};function a(c,u,p,d,g){if(i.isStatic)i.renderStyles(c,Sr,p,g);else{var h=R(R({},u),{theme:Pe(u,d,s.defaultProps)});i.renderStyles(c,h,p,g)}}return N.memo(s)}function rn(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];var n=It(ne.apply(void 0,Q([t],e,!1))),o=te(n);return new Le(o,n)}const nn=en`
   @media (prefers-color-scheme: dark) {
        :root {
            --color-bg: ${t=>t.theme.utils.color("theme.dark.bg")};
            --color-page: ${t=>t.theme.utils.color("theme.dark.page")};
            --color-font: ${t=>t.theme.utils.color("theme.dark.font")};
            --color-border: ${t=>t.theme.utils.color("theme.dark.border")};
        }
        body {
            background-color: var(--color-bg);
            color: var(--color-font) !important;
        }
        h1, h2, h3, h4, h5, h6, p {
            color: var(--color-font) !important;
        }
        .Page {
            background-color: var(--color-page);
        } 
        .MainContainer {
            background-color: var(--color-bg);
        }
        #article-main{
            border-color: ${t=>t.theme.utils.color("neutral.ne080")} black !important;
        }
        @media (min-width: 768px) {
            .MainContainer {
                border-right: 1px solid ${t=>t.theme.utils.color("neutral.ne080")};
                border-left: 1px solid ${t=>t.theme.utils.color("neutral.ne080")};
            }    
        }
    }

    @media (prefers-color-scheme: light) {
        :root {
            --color-bg: ${t=>t.theme.utils.color("theme.light.bg")};
            --color-page: ${t=>t.theme.utils.color("theme.light.page")};
            --color-font: ${t=>t.theme.utils.color("theme.light.font")};
            --color-border: ${t=>t.theme.utils.color("theme.light.border")};
        }
        body {
            background-color: var(--color-bg);
            color: var(--color-font) !important;
        }
        h1, h2, h3, h4, h5, h6, p {
            color: var(--color-font) !important;
        }
        .Page {
            background-color: var(--color-page);
        } 
        .MainContainer {
            background-color: var(--color-bg);
        }
        #article-main{
            border-color: var(--color-border) !important;
        }
        @media (min-width: 768px) {
            .MainContainer {
                border-right: 1px solid var(--color-border);
                border-left: 1px solid var(--color-border);
            }    
        }
    }
`,yn=F.div`
    margin-block-start: ${t=>t.theme.utils.spacing("4")};
    margin-block-end: ${t=>t.theme.utils.spacing("32")};
    position: relative;
`,bn=F.div`
    background-color: ${t=>t.theme.utils.color("neutral.black")};
    color: ${t=>t.theme.utils.color("whiteTint.white")};
    margin: ${t=>t.theme.utils.spacing("10")} 0;
    padding-block-start: ${t=>t.theme.utils.spacing("4")};
    padding-block-end: ${t=>t.theme.utils.spacing("2")};
    padding-inline: ${t=>t.theme.utils.spacing("3")};
    border-radius: ${t=>t.theme.utils.borderRadius("md")};

    .card-image {
        width: 172px;
        aspect-ratio: 1 / 1;
        border-radius: ${t=>t.theme.utils.borderRadius("lg")};
    }

    .card-name {
        margin-block-start: ${t=>t.theme.utils.spacing("2")};
        margin-block-end: 0;
        font-weight: ${t=>t.theme.utils.typography("fontWeight","medium")};
        font-family: ${t=>{var e;return(e=t.theme.utils.typography("fontFamily","timesModernMedium"))==null?void 0:e.join(", ")}};
        font-size: ${t=>t.theme.utils.typography("fontSize","base")};
        color: ${t=>t.theme.utils.color("whiteTint.white")} !important;
    }

    .card-quote {
        font-size: ${t=>t.theme.utils.typography("fontSize","2xl")};
        line-height: ${t=>t.theme.utils.typography("lineHeight","tight")};
        font-weight: ${t=>t.theme.utils.typography("fontWeight","bold")};
        font-family: ${t=>{var e;return(e=t.theme.utils.typography("fontFamily","timesModernBold"))==null?void 0:e.join(", ")}};
        text-align: left;
        color: ${t=>t.theme.utils.color("neutral.ne030")} !important;
        margin-block-start: ${t=>t.theme.utils.spacing("3")};
        letter-spacing: ${t=>t.theme.utils.typography("letterSpacing","editorial")};
    }

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: ${t=>t.theme.utils.spacing("4")};

        .waveform-container {
            grid-column: 2 / 3;
            margin-block: ${t=>t.theme.utils.spacing("2")};
        }

        .card-image--container {
            grid-row: 1 / 3;
        }

        .card-quote {
            margin-block: 0;
        }

        .card-image {
            width: 100%;
        }

        .card-name {
            font-size: ${t=>t.theme.utils.typography("fontSize","base")};
        }
    }
`,on=U.createContext(),sn=t=>({color:(e,r=1)=>{const n=L(t.colors,e);if(!n)return e;if(r===1)return n;if(n.startsWith("#")){const o=n.slice(1),i=parseInt(o.slice(0,2),16),s=parseInt(o.slice(2,4),16),a=parseInt(o.slice(4,6),16);return`rgba(${i}, ${s}, ${a}, ${r})`}return n},spacing:e=>L(t.spacing,e)||e,typography:(e,r)=>L(t.typography[e],r)||r,borderRadius:e=>L(t.borderRadius,e)||e,shadow:e=>L(t.shadows,e)||e,breakpoint:e=>L(t.breakpoints,e)||e,media:{up:e=>`@media (min-width: ${L(t.breakpoints,e)||e})`,down:e=>{const r=Object.values(t.breakpoints),n=Object.keys(t.breakpoints).indexOf(e);return`@media (max-width: ${r[n-1]||"0px"})`}},themeColor:(e,r="light")=>L(t.colors.theme[r],e)||e}),L=(t,e)=>{if(!e||!t)return;const r=e.split(".");let n=t;for(const o of r){if(n[o]===void 0)return;n=n[o]}return n},Zt=({children:t,customTheme:e={}})=>{const r=U.useMemo(()=>Ue(tr,e),[e]),n=U.useMemo(()=>sn(r),[r]),o=U.useMemo(()=>({...r,utils:n}),[r,n]);return A.jsx(on.Provider,{value:o,children:A.jsx(Xr,{theme:o,children:t})})},Ue=(t,e)=>{const r={...t};for(const n in e)e[n]&&typeof e[n]=="object"&&!Array.isArray(e[n])?r[n]=Ue(r[n]||{},e[n]):r[n]=e[n];return r};Zt.__docgenInfo={description:"",methods:[],displayName:"ThemeProvider",props:{customTheme:{defaultValue:{value:"{}",computed:!1},required:!1}}};const an=rn`
  0% { opacity: 1 }
  50% { opacity: 0 }
  100% { opacity: 1 }
`,cn=F.div`
    display: flex;
    flex-wrap: wrap;
    gap: ${({theme:t})=>t.utils.spacing("2")};
    margin-bottom: ${({theme:t})=>t.utils.spacing("2")};

    ${({withContainer:t,theme:e})=>t&&`
    margin-bottom: ${e.utils.spacing("4")};
    margin-top: ${e.utils.spacing("1")};
  `}
`,un=F.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    p {
        color: ${({theme:t})=>t.utils.color("ink.inkBase.light")};
        font-family: ${({theme:t})=>{var e;return(e=t.utils.typography("fontFamily","timesModernRegular"))==null?void 0:e.join(", ")}};
        font-size: ${({theme:t})=>t.utils.typography("fontSize","sm")};
        line-height: ${({theme:t})=>t.utils.typography("lineHeight","tight")};
    }
`,ln=F.div`
    display: flex;
    align-items: center;
    background: ${({theme:t})=>t.utils.color("red.red090")};
    height: ${({theme:t})=>t.utils.spacing("6")};
    padding: ${({theme:t})=>t.utils.spacing("2")};
    display: flex;
    flex-direction: row;
    width: fit-content;
    color: white;
    gap: ${({theme:t})=>t.utils.spacing("2")};
    font-family: ${({theme:t})=>{var e;return(e=t.utils.typography("fontFamily","timesModernRegular"))==null?void 0:e.join(", ")}};
    font-weight: ${({theme:t})=>t.utils.typography("fontWeight","extralight")};
    font-size: ${({theme:t})=>t.utils.typography("fontSize","xs")};
    display: flex;
    -webkit-box-align: center;
    align-items: center;
`,pn=F.div`
    width: ${({theme:t})=>t.utils.spacing("2")};
    height: ${({theme:t})=>t.utils.spacing("2")};
    background: white;
    animation: ${an} 1.2s infinite;
`,ve=F.div`
    font-size: ${({theme:t})=>t.utils.typography("fontSize","xs")};
    font-weight: ${({theme:t})=>t.utils.typography("fontWeight","normal")};
    letter-spacing: ${({theme:t})=>t.utils.typography("letterSpacing","wide")};
    line-height: ${({theme:t})=>t.utils.typography("fontSize","xs")};
    display: flex;
    align-items: center;
    gap: ${({theme:t})=>t.utils.spacing("2")};
    font-family: ${({theme:t})=>{var e;return(e=t.utils.typography("fontFamily","TimesDigitalWRegular"))==null?void 0:e.join(", ")}};
    font-weight: ${({theme:t})=>t.utils.typography("fontWeight","bold")};
    text-transform: uppercase;
    color: ${({$type:t,theme:e})=>{switch(t){case"UPDATED":return e.utils.color("blue.blue070");case"EXCLUSIVE":return e.utils.color("red.red060");case"SPONSORED":return e.utils.color("neutral.ne070");case"NEW":return e.utils.color("amber.amber070");case"LONGREAD":return e.utils.color("neutral.ne070");default:return e.utils.color("neutral.black")}}};
`,we=F.span`
    width: ${({theme:t})=>t.utils.spacing("2")};
    height: ${({theme:t})=>t.utils.spacing("2")};
    border-radius: 50%;
    background: currentColor;
`,fn=t=>{if(!t)return null;const e=new Date(t),r={month:"long",day:"numeric"},n=e.toLocaleDateString("en-US",r);let o=e.getHours();const i=e.getMinutes().toString().padStart(2,"0"),s=o>=12?"pm":"am";o=o%12||12;const a=`${o}.${i}${s}`;return`Updated ${n}, ${a}`},dn=({flags:t=[],longRead:e=!1,withContainer:r=!0,theme:n})=>{if(!t.length&&!e)return null;const o=A.jsxs(A.Fragment,{children:[A.jsx(nn,{}),A.jsxs(cn,{withContainer:r,children:[t.map((i,s)=>{var u,p;const a=i.type;if(i.expiryTime&&new Date(i.expiryTime)<=new Date)return null;const c=fn(i.updatedTime);return a==="LIVE"||a==="BREAKING"?A.jsxs(un,{children:[A.jsxs(ln,{$type:a,children:[A.jsx(pn,{}),A.jsx("span",{className:"live-breaking",children:a})]}),c&&A.jsx("p",{className:"live-breaking",style:{fontWeight:400,marginLeft:(p=(u=n==null?void 0:n.utils)==null?void 0:u.spacing)==null?void 0:p.call(u,"2")},children:c})]},s):A.jsxs(ve,{$type:a,children:[A.jsx(we,{}),A.jsx("span",{children:a})]},s)}),e&&A.jsxs(ve,{$type:"LONGREAD",children:[A.jsx(we,{}),A.jsx("span",{children:"Long Read"})]},"longread")]})]});return n?A.jsx(Zt,{customTheme:n,children:o}):A.jsx(Zt,{children:o})};dn.__docgenInfo={description:"",methods:[],displayName:"ArticleFlags",props:{flags:{defaultValue:{value:"[]",computed:!1},required:!1},longRead:{defaultValue:{value:"false",computed:!1},required:!1},withContainer:{defaultValue:{value:"true",computed:!1},required:!1}}};export{dn as A,bn as C,nn as G,Zt as T,yn as a,F as d,ne as l};
