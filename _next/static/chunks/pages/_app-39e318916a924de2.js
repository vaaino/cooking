(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{294:function(e,r,t){"use strict";t.d(r,{iv:function(){return $e},cx:function(){return Ae},hi:function(){return Oe}});var n=function(){function e(e){var r=this;this._insertTag=function(e){var t;t=0===r.tags.length?r.insertionPoint?r.insertionPoint.nextSibling:r.prepend?r.container.firstChild:r.before:r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(e,t),r.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var r=e.prototype;return r.hydrate=function(e){e.forEach(this._insertTag)},r.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(function(e){var r=document.createElement("style");return r.setAttribute("data-emotion",e.key),void 0!==e.nonce&&r.setAttribute("nonce",e.nonce),r.appendChild(document.createTextNode("")),r.setAttribute("data-s",""),r}(this));var r=this.tags[this.tags.length-1];if(this.isSpeedy){var t=function(e){if(e.sheet)return e.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===e)return document.styleSheets[r]}(r);try{t.insertRule(e,t.cssRules.length)}catch(n){0}}else r.appendChild(document.createTextNode(e));this.ctr++},r.flush=function(){this.tags.forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),a=Math.abs,o=String.fromCharCode,s=Object.assign;function i(e){return e.trim()}function c(e,r,t){return e.replace(r,t)}function u(e,r){return e.indexOf(r)}function l(e,r){return 0|e.charCodeAt(r)}function f(e,r,t){return e.slice(r,t)}function d(e){return e.length}function h(e){return e.length}function p(e,r){return r.push(e),e}var v=1,g=1,m=0,y=0,b=0,x="";function w(e,r,t,n,a,o,s){return{value:e,root:r,parent:t,type:n,props:a,children:o,line:v,column:g,length:s,return:""}}function k(e,r){return s(w("",null,null,"",null,null,0),e,{length:-e.length},r)}function j(){return b=y>0?l(x,--y):0,g--,10===b&&(g=1,v--),b}function C(){return b=y<m?l(x,y++):0,g++,10===b&&(g=1,v++),b}function A(){return l(x,y)}function O(){return y}function $(e,r){return f(x,e,r)}function S(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function _(e){return v=g=1,m=d(x=e),y=0,[]}function E(e){return x="",e}function P(e){return i($(y-1,I(91===e?e+2:40===e?e+1:e)))}function M(e){for(;(b=A())&&b<33;)C();return S(e)>2||S(b)>3?"":" "}function N(e,r){for(;--r&&C()&&!(b<48||b>102||b>57&&b<65||b>70&&b<97););return $(e,O()+(r<6&&32==A()&&32==C()))}function I(e){for(;C();)switch(b){case e:return y;case 34:case 39:34!==e&&39!==e&&I(b);break;case 40:41===e&&I(e);break;case 92:C()}return y}function R(e,r){for(;C()&&e+b!==57&&(e+b!==84||47!==A()););return"/*"+$(r,y-1)+"*"+o(47===e?e:C())}function L(e){for(;!S(A());)C();return $(e,y)}var z="-ms-",G="-moz-",T="-webkit-",D="comm",W="rule",U="decl",H="@keyframes";function Z(e,r){for(var t="",n=h(e),a=0;a<n;a++)t+=r(e[a],a,e,r)||"";return t}function B(e,r,t,n){switch(e.type){case"@import":case U:return e.return=e.return||e.value;case D:return"";case H:return e.return=e.value+"{"+Z(e.children,n)+"}";case W:e.value=e.props.join(",")}return d(t=Z(e.children,n))?e.return=e.value+"{"+t+"}":""}function F(e,r){switch(function(e,r){return(((r<<2^l(e,0))<<2^l(e,1))<<2^l(e,2))<<2^l(e,3)}(e,r)){case 5103:return T+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return T+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return T+e+G+e+z+e+e;case 6828:case 4268:return T+e+z+e+e;case 6165:return T+e+z+"flex-"+e+e;case 5187:return T+e+c(e,/(\w+).+(:[^]+)/,"-webkit-box-$1$2-ms-flex-$1$2")+e;case 5443:return T+e+z+"flex-item-"+c(e,/flex-|-self/,"")+e;case 4675:return T+e+z+"flex-line-pack"+c(e,/align-content|flex-|-self/,"")+e;case 5548:return T+e+z+c(e,"shrink","negative")+e;case 5292:return T+e+z+c(e,"basis","preferred-size")+e;case 6060:return T+"box-"+c(e,"-grow","")+T+e+z+c(e,"grow","positive")+e;case 4554:return T+c(e,/([^-])(transform)/g,"$1-webkit-$2")+e;case 6187:return c(c(c(e,/(zoom-|grab)/,T+"$1"),/(image-set)/,T+"$1"),e,"")+e;case 5495:case 3959:return c(e,/(image-set\([^]*)/,T+"$1$`$1");case 4968:return c(c(e,/(.+:)(flex-)?(.*)/,"-webkit-box-pack:$3-ms-flex-pack:$3"),/s.+-b[^;]+/,"justify")+T+e+e;case 4095:case 3583:case 4068:case 2532:return c(e,/(.+)-inline(.+)/,T+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(d(e)-1-r>6)switch(l(e,r+1)){case 109:if(45!==l(e,r+4))break;case 102:return c(e,/(.+:)(.+)-([^]+)/,"$1-webkit-$2-$3$1"+G+(108==l(e,r+3)?"$3":"$2-$3"))+e;case 115:return~u(e,"stretch")?F(c(e,"stretch","fill-available"),r)+e:e}break;case 4949:if(115!==l(e,r+1))break;case 6444:switch(l(e,d(e)-3-(~u(e,"!important")&&10))){case 107:return c(e,":",":"+T)+e;case 101:return c(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+T+(45===l(e,14)?"inline-":"")+"box$3$1"+T+"$2$3$1"+z+"$2box$3")+e}break;case 5936:switch(l(e,r+11)){case 114:return T+e+z+c(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return T+e+z+c(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return T+e+z+c(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return T+e+z+e+e}return e}function K(e){return E(q("",null,null,null,[""],e=_(e),0,[0],e))}function q(e,r,t,n,a,s,i,l,f){for(var h=0,v=0,g=i,m=0,y=0,b=0,x=1,w=1,k=1,$=0,S="",_=a,E=s,I=n,z=S;w;)switch(b=$,$=C()){case 40:if(108!=b&&58==z.charCodeAt(g-1)){-1!=u(z+=c(P($),"&","&\f"),"&\f")&&(k=-1);break}case 34:case 39:case 91:z+=P($);break;case 9:case 10:case 13:case 32:z+=M(b);break;case 92:z+=N(O()-1,7);continue;case 47:switch(A()){case 42:case 47:p(J(R(C(),O()),r,t),f);break;default:z+="/"}break;case 123*x:l[h++]=d(z)*k;case 125*x:case 59:case 0:switch($){case 0:case 125:w=0;case 59+v:y>0&&d(z)-g&&p(y>32?Q(z+";",n,t,g-1):Q(c(z," ","")+";",n,t,g-2),f);break;case 59:z+=";";default:if(p(I=X(z,r,t,h,v,a,l,S,_=[],E=[],g),s),123===$)if(0===v)q(z,r,I,I,_,s,g,l,E);else switch(m){case 100:case 109:case 115:q(e,I,I,n&&p(X(e,I,I,0,0,a,l,S,a,_=[],g),E),a,E,g,l,n?_:E);break;default:q(z,I,I,I,[""],E,0,l,E)}}h=v=y=0,x=k=1,S=z="",g=i;break;case 58:g=1+d(z),y=b;default:if(x<1)if(123==$)--x;else if(125==$&&0==x++&&125==j())continue;switch(z+=o($),$*x){case 38:k=v>0?1:(z+="\f",-1);break;case 44:l[h++]=(d(z)-1)*k,k=1;break;case 64:45===A()&&(z+=P(C())),m=A(),v=g=d(S=z+=L(O())),$++;break;case 45:45===b&&2==d(z)&&(x=0)}}return s}function X(e,r,t,n,o,s,u,l,d,p,v){for(var g=o-1,m=0===o?s:[""],y=h(m),b=0,x=0,k=0;b<n;++b)for(var j=0,C=f(e,g+1,g=a(x=u[b])),A=e;j<y;++j)(A=i(x>0?m[j]+" "+C:c(C,/&\f/g,m[j])))&&(d[k++]=A);return w(e,r,t,0===o?W:l,d,p,v)}function J(e,r,t){return w(e,r,t,D,o(b),f(e,2,-2),0)}function Q(e,r,t,n){return w(e,r,t,U,f(e,0,n),f(e,n+1,-1),n)}var V=function(e,r,t){for(var n=0,a=0;n=a,a=A(),38===n&&12===a&&(r[t]=1),!S(a);)C();return $(e,y)},Y=function(e,r){return E(function(e,r){var t=-1,n=44;do{switch(S(n)){case 0:38===n&&12===A()&&(r[t]=1),e[t]+=V(y-1,r,t);break;case 2:e[t]+=P(n);break;case 4:if(44===n){e[++t]=58===A()?"&\f":"",r[t]=e[t].length;break}default:e[t]+=o(n)}}while(n=C());return e}(_(e),r))},ee=new WeakMap,re=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var r=e.value,t=e.parent,n=e.column===t.column&&e.line===t.line;"rule"!==t.type;)if(!(t=t.parent))return;if((1!==e.props.length||58===r.charCodeAt(0)||ee.get(t))&&!n){ee.set(e,!0);for(var a=[],o=Y(r,a),s=t.props,i=0,c=0;i<o.length;i++)for(var u=0;u<s.length;u++,c++)e.props[c]=a[i]?o[i].replace(/&\f/g,s[u]):s[u]+" "+o[i]}}},te=function(e){if("decl"===e.type){var r=e.value;108===r.charCodeAt(0)&&98===r.charCodeAt(2)&&(e.return="",e.value="")}},ne=[function(e,r,t,n){if(e.length>-1&&!e.return)switch(e.type){case U:e.return=F(e.value,e.length);break;case H:return Z([k(e,{value:c(e.value,"@","@"+T)})],n);case W:if(e.length)return function(e,r){return e.map(r).join("")}(e.props,(function(r){switch(function(e,r){return(e=r.exec(e))?e[0]:e}(r,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Z([k(e,{props:[c(r,/:(read-\w+)/,":-moz-$1")]})],n);case"::placeholder":return Z([k(e,{props:[c(r,/:(plac\w+)/,":-webkit-input-$1")]}),k(e,{props:[c(r,/:(plac\w+)/,":-moz-$1")]}),k(e,{props:[c(r,/:(plac\w+)/,z+"input-$1")]})],n)}return""}))}}],ae=function(e){var r=e.key;if("css"===r){var t=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(t,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var a=e.stylisPlugins||ne;var o,s,i={},c=[];o=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+r+' "]'),(function(e){for(var r=e.getAttribute("data-emotion").split(" "),t=1;t<r.length;t++)i[r[t]]=!0;c.push(e)}));var u,l,f=[B,(l=function(e){u.insert(e)},function(e){e.root||(e=e.return)&&l(e)})],d=function(e){var r=h(e);return function(t,n,a,o){for(var s="",i=0;i<r;i++)s+=e[i](t,n,a,o)||"";return s}}([re,te].concat(a,f));s=function(e,r,t,n){u=t,Z(K(e?e+"{"+r.styles+"}":r.styles),d),n&&(p.inserted[r.name]=!0)};var p={key:r,sheet:new n({key:r,container:o,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:i,registered:{},insert:s};return p.sheet.hydrate(c),p};var oe=function(e){for(var r,t=0,n=0,a=e.length;a>=4;++n,a-=4)r=1540483477*(65535&(r=255&e.charCodeAt(n)|(255&e.charCodeAt(++n))<<8|(255&e.charCodeAt(++n))<<16|(255&e.charCodeAt(++n))<<24))+(59797*(r>>>16)<<16),t=1540483477*(65535&(r^=r>>>24))+(59797*(r>>>16)<<16)^1540483477*(65535&t)+(59797*(t>>>16)<<16);switch(a){case 3:t^=(255&e.charCodeAt(n+2))<<16;case 2:t^=(255&e.charCodeAt(n+1))<<8;case 1:t=1540483477*(65535&(t^=255&e.charCodeAt(n)))+(59797*(t>>>16)<<16)}return(((t=1540483477*(65535&(t^=t>>>13))+(59797*(t>>>16)<<16))^t>>>15)>>>0).toString(36)},se={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};var ie=function(e){var r=Object.create(null);return function(t){return void 0===r[t]&&(r[t]=e(t)),r[t]}},ce=/[A-Z]|^ms/g,ue=/_EMO_([^_]+?)_([^]*?)_EMO_/g,le=function(e){return 45===e.charCodeAt(1)},fe=function(e){return null!=e&&"boolean"!==typeof e},de=ie((function(e){return le(e)?e:e.replace(ce,"-$&").toLowerCase()})),he=function(e,r){switch(e){case"animation":case"animationName":if("string"===typeof r)return r.replace(ue,(function(e,r,t){return ve={name:r,styles:t,next:ve},r}))}return 1===se[e]||le(e)||"number"!==typeof r||0===r?r:r+"px"};function pe(e,r,t){if(null==t)return"";if(void 0!==t.__emotion_styles)return t;switch(typeof t){case"boolean":return"";case"object":if(1===t.anim)return ve={name:t.name,styles:t.styles,next:ve},t.name;if(void 0!==t.styles){var n=t.next;if(void 0!==n)for(;void 0!==n;)ve={name:n.name,styles:n.styles,next:ve},n=n.next;return t.styles+";"}return function(e,r,t){var n="";if(Array.isArray(t))for(var a=0;a<t.length;a++)n+=pe(e,r,t[a])+";";else for(var o in t){var s=t[o];if("object"!==typeof s)null!=r&&void 0!==r[s]?n+=o+"{"+r[s]+"}":fe(s)&&(n+=de(o)+":"+he(o,s)+";");else if(!Array.isArray(s)||"string"!==typeof s[0]||null!=r&&void 0!==r[s[0]]){var i=pe(e,r,s);switch(o){case"animation":case"animationName":n+=de(o)+":"+i+";";break;default:n+=o+"{"+i+"}"}}else for(var c=0;c<s.length;c++)fe(s[c])&&(n+=de(o)+":"+he(o,s[c])+";")}return n}(e,r,t);case"function":if(void 0!==e){var a=ve,o=t(e);return ve=a,pe(e,r,o)}}if(null==r)return t;var s=r[t];return void 0!==s?s:t}var ve,ge=/label:\s*([^\s;\n{]+)\s*(;|$)/g;var me=function(e,r,t){if(1===e.length&&"object"===typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var n=!0,a="";ve=void 0;var o=e[0];null==o||void 0===o.raw?(n=!1,a+=pe(t,r,o)):a+=o[0];for(var s=1;s<e.length;s++)a+=pe(t,r,e[s]),n&&(a+=o[s]);ge.lastIndex=0;for(var i,c="";null!==(i=ge.exec(a));)c+="-"+i[1];return{name:oe(a)+c,styles:a,next:ve}};function ye(e,r,t){var n="";return t.split(" ").forEach((function(t){void 0!==e[t]?r.push(e[t]+";"):n+=t+" "})),n}var be=function(e,r,t){var n=e.key+"-"+r.name;if(!1===t&&void 0===e.registered[n]&&(e.registered[n]=r.styles),void 0===e.inserted[r.name]){var a=r;do{e.insert(r===a?"."+n:"",a,e.sheet,!0);a=a.next}while(void 0!==a)}};function xe(e,r){if(void 0===e.inserted[r.name])return e.insert("",r,e.sheet,!0)}function we(e,r,t){var n=[],a=ye(e,n,t);return n.length<2?t:a+r(n)}var ke=function e(r){for(var t="",n=0;n<r.length;n++){var a=r[n];if(null!=a){var o=void 0;switch(typeof a){case"boolean":break;case"object":if(Array.isArray(a))o=e(a);else for(var s in o="",a)a[s]&&s&&(o&&(o+=" "),o+=s);break;default:o=a}o&&(t&&(t+=" "),t+=o)}}return t},je=function(e){var r=ae(e);r.sheet.speedy=function(e){this.isSpeedy=e},r.compat=!0;var t=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var a=me(t,r.registered,void 0);return be(r,a,!1),r.key+"-"+a.name};return{css:t,cx:function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];return we(r.registered,t,ke(n))},injectGlobal:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var a=me(t,r.registered);xe(r,a)},keyframes:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var a=me(t,r.registered),o="animation-"+a.name;return xe(r,{name:a.name,styles:"@keyframes "+o+"{"+a.styles+"}"}),o},hydrate:function(e){e.forEach((function(e){r.inserted[e]=!0}))},flush:function(){r.registered={},r.inserted={},r.sheet.flush()},sheet:r.sheet,cache:r,getRegisteredStyles:ye.bind(null,r.registered),merge:we.bind(null,r.registered,t)}},Ce=je({key:"css"}),Ae=(Ce.flush,Ce.hydrate,Ce.cx),Oe=(Ce.merge,Ce.getRegisteredStyles,Ce.injectGlobal),$e=(Ce.keyframes,Ce.css);Ce.sheet,Ce.cache},7942:function(e,r,t){"use strict";var n=t(5696);r.default=void 0;var a,o=(a=t(7294))&&a.__esModule?a:{default:a},s=t(4957),i=t(9898),c=t(639);var u={};function l(e,r,t,n){if(e&&s.isLocalURL(r)){e.prefetch(r,t,n).catch((e=>{0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;u[r+"%"+t+(a?"%"+a:"")]=!0}}var f=function(e){var r,t=!1!==e.prefetch,a=i.useRouter(),f=o.default.useMemo((()=>{var r=s.resolveHref(a,e.href,!0),t=n(r,2),o=t[0],i=t[1];return{href:o,as:e.as?s.resolveHref(a,e.as):i||o}}),[a,e.href,e.as]),d=f.href,h=f.as,p=e.children,v=e.replace,g=e.shallow,m=e.scroll,y=e.locale;"string"===typeof p&&(p=o.default.createElement("a",null,p));var b=(r=o.default.Children.only(p))&&"object"===typeof r&&r.ref,x=c.useIntersection({rootMargin:"200px"}),w=n(x,2),k=w[0],j=w[1],C=o.default.useCallback((e=>{k(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,k]);o.default.useEffect((()=>{var e=j&&t&&s.isLocalURL(d),r="undefined"!==typeof y?y:a&&a.locale,n=u[d+"%"+h+(r?"%"+r:"")];e&&!n&&l(a,d,h,{locale:r})}),[h,d,j,y,t,a]);var A={ref:C,onClick:e=>{r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,t,n,a,o,i,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&s.isLocalURL(t))&&(e.preventDefault(),r[a?"replace":"push"](t,n,{shallow:o,locale:c,scroll:i}))}(e,a,d,h,v,g,m,y)},onMouseEnter:e=>{r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),s.isLocalURL(d)&&l(a,d,h,{priority:!0})}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var O="undefined"!==typeof y?y:a&&a.locale,$=a&&a.isLocaleDomain&&s.getDomainLocale(h,O,a&&a.locales,a&&a.domainLocales);A.href=$||s.addBasePath(s.addLocale(h,O,a&&a.defaultLocale))}return o.default.cloneElement(r,A)};r.default=f},639:function(e,r,t){"use strict";var n=t(5696);Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootRef,t=e.rootMargin,u=e.disabled||!s,l=a.useRef(),f=a.useState(!1),d=n(f,2),h=d[0],p=d[1],v=a.useState(r?r.current:null),g=n(v,2),m=g[0],y=g[1],b=a.useCallback((e=>{l.current&&(l.current(),l.current=void 0),u||h||e&&e.tagName&&(l.current=function(e,r,t){var n=function(e){var r,t={root:e.root||null,margin:e.rootMargin||""},n=c.find((e=>e.root===t.root&&e.margin===t.margin));n?r=i.get(n):(r=i.get(t),c.push(t));if(r)return r;var a=new Map,o=new IntersectionObserver((e=>{e.forEach((e=>{var r=a.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;r&&t&&r(t)}))}),e);return i.set(t,r={id:t,observer:o,elements:a}),r}(t),a=n.id,o=n.observer,s=n.elements;return s.set(e,r),o.observe(e),function(){if(s.delete(e),o.unobserve(e),0===s.size){o.disconnect(),i.delete(a);var r=c.findIndex((e=>e.root===a.root&&e.margin===a.margin));r>-1&&c.splice(r,1)}}}(e,(e=>e&&p(e)),{root:m,rootMargin:t}))}),[u,m,t,h]);return a.useEffect((()=>{if(!s&&!h){var e=o.requestIdleCallback((()=>p(!0)));return()=>o.cancelIdleCallback(e)}}),[h]),a.useEffect((()=>{r&&y(r.current)}),[r]),[b,h]};var a=t(7294),o=t(6286),s="undefined"!==typeof IntersectionObserver;var i=new Map,c=[]},1561:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return p}});var n=t(9499),a=t(7294),o=t(294),s=t(2640),i=t(1664),c=t(5893);function u(){var e=(0,a.useMemo)((()=>{var e;return(null===(e="GitHub,https://github.com/kinnounko")?void 0:e.split(";").map((e=>e.split(","))))||[]}),[]);return(0,c.jsxs)("footer",{className:(0,o.iv)({name:"atf797",styles:"user-select:none;display:flex;align-items:center;height:64px;padding:0 20px;border-top:1px solid #e1e4e8;span{color:#586069;font-size:12px;}a{color:#0366d6;text-decoration:none;font-size:12px;}a+a{margin-left:16px;}a:hover,a:focus{text-decoration:underline;}"}),children:[(0,c.jsxs)("span",{children:["Generated by:\xa0",(0,c.jsx)("a",{href:"https://github.com/renzholy/blogit",target:"_blank",rel:"noreferrer",children:"Blogit"})]}),(0,c.jsx)("span",{className:(0,o.iv)({name:"82a6rk",styles:"flex:1"})}),e.map((e=>{var r=(0,s.Z)(e,2),t=r[0],n=r[1];return n.startsWith("http")||n.startsWith("//")?(0,c.jsx)("a",{href:n,target:"_blank",rel:"noreferrer",children:t},t):(0,c.jsx)(i.default,{href:n,children:t},t)}))]})}function l(e){var r=(0,a.useMemo)((()=>{var e;return(null===(e="about,/about")?void 0:e.split(";").map((e=>e.split(","))))||[]}),[]);return(0,c.jsxs)("nav",{className:(0,o.cx)(e.className,(0,o.iv)({name:"172w2om",styles:"user-select:none;display:flex;align-items:center;a{color:#ffffff;font-size:14px;font-weight:600;text-decoration:none;}a+a{margin-left:16px;}a:hover,a:focus{color:hsla(0, 0%, 100%, 0.7);}"})),children:[(0,c.jsx)(i.default,{href:"/",children:"cooking"}),(0,c.jsx)("div",{className:(0,o.iv)({name:"82a6rk",styles:"flex:1"})}),r.map((e=>{var r=(0,s.Z)(e,2),t=r[0],n=r[1];return n.startsWith("http")||n.startsWith("//")?(0,c.jsx)("a",{href:n,target:"_blank",rel:"noreferrer",children:t},t):(0,c.jsx)(i.default,{href:n,children:t},t)}))]})}function f(e){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(l,{className:(0,o.iv)({name:"2289rx",styles:"position:fixed;top:0;left:0;right:0;height:64px;background-color:#24292e;padding:0 20px"})}),e.children,(0,c.jsx)(u,{})]})}t(7927);function d(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function h(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?d(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}(0,o.hi)({name:"1uruf9f",styles:"::-webkit-scrollbar{display:none;}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;}:root{--max-width:900px;}"});var p=function(e){var r=e.Component,t=e.pageProps;return(0,c.jsx)(f,{children:(0,c.jsx)(r,h({},t))})}},6363:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t(1561)}])},7927:function(){},1664:function(e,r,t){e.exports=t(7942)},9499:function(e,r,t){"use strict";function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}t.d(r,{Z:function(){return n}})},2640:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function a(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,a,o=[],s=!0,i=!1;try{for(t=t.call(e);!(s=(n=t.next()).done)&&(o.push(n.value),!r||o.length!==r);s=!0);}catch(c){i=!0,a=c}finally{try{s||null==t.return||t.return()}finally{if(i)throw a}}return o}}(e,r)||function(e,r){if(e){if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(e,r):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.d(r,{Z:function(){return a}})}},function(e){var r=function(r){return e(e.s=r)};e.O(0,[774,179],(function(){return r(6363),r(9898)}));var t=e.O();_N_E=t}]);