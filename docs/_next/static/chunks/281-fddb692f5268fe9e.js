(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[281],{9959:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},30:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(6495).Z,o=n(2648).Z,a=n(1598).Z,l=n(7273).Z,i=a(n(5784)),u=o(n(5322)),s=n(9642),c=n(931),d=n(601);n(2437);var f=o(n(7112));let p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function g(e){return void 0!==e.default}function h(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function m(e,t,n,o,a,l,i){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let u="decode"in e?e.decode():Promise.resolve();u.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===n&&l(!0),null==o?void 0:o.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,a=!1;o.current(r({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>a,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{a=!0,t.stopPropagation()}}))}(null==a?void 0:a.current)&&a.current(e)}})}let v=i.forwardRef((e,t)=>{var{imgAttributes:n,heightInt:o,widthInt:a,qualityInt:u,className:s,imgStyle:c,blurStyle:d,isLazy:f,fill:p,placeholder:g,loading:h,srcString:v,config:y,unoptimized:b,loader:_,onLoadRef:w,onLoadingCompleteRef:C,setBlurComplete:S,setShowAltText:E,onLoad:j,onError:x}=e,O=l(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return h=f?"lazy":h,i.default.createElement(i.default.Fragment,null,i.default.createElement("img",Object.assign({},O,n,{width:a,height:o,decoding:"async","data-nimg":p?"fill":"1",className:s,loading:h,style:r({},c,d),ref:i.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(x&&(e.src=e.src),e.complete&&m(e,v,g,w,C,S,b))},[v,g,w,C,S,x,b,t]),onLoad:e=>{let t=e.currentTarget;m(t,v,g,w,C,S,b)},onError:e=>{E(!0),"blur"===g&&S(!0),x&&x(e)}})))}),y=i.forwardRef((e,t)=>{let n,o;var a,{src:m,sizes:y,unoptimized:b=!1,priority:_=!1,loading:w,className:C,quality:S,width:E,height:j,fill:x,style:O,onLoad:M,onLoadingComplete:P,placeholder:k="empty",blurDataURL:I,layout:R,objectFit:z,objectPosition:A,lazyBoundary:L,lazyRoot:D}=e,T=l(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let U=i.useContext(d.ImageConfigContext),Z=i.useMemo(()=>{let e=p||U||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return r({},e,{allSizes:t,deviceSizes:n})},[U]),N=T,B=N.loader||f.default;delete N.loader;let F="__next_img_default"in B;if(F){if("custom"===Z.loader)throw Error('Image with src "'.concat(m,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=B;B=t=>{let{config:n}=t,r=l(t,["config"]);return e(r)}}if(R){"fill"===R&&(x=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[R];e&&(O=r({},O,e));let t={responsive:"100vw",fill:"100vw"}[R];t&&!y&&(y=t)}let H="",W=h(E),q=h(j);if("object"==typeof(a=m)&&(g(a)||void 0!==a.src)){let e=g(m)?m.default:m;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(n=e.blurWidth,o=e.blurHeight,I=I||e.blurDataURL,H=e.src,!x){if(W||q){if(W&&!q){let t=W/e.width;q=Math.round(e.height*t)}else if(!W&&q){let t=q/e.height;W=Math.round(e.width*t)}}else W=e.width,q=e.height}}let V=!_&&("lazy"===w||void 0===w);((m="string"==typeof m?m:H).startsWith("data:")||m.startsWith("blob:"))&&(b=!0,V=!1),Z.unoptimized&&(b=!0),F&&m.endsWith(".svg")&&!Z.dangerouslyAllowSVG&&(b=!0);let[G,K]=i.useState(!1),[$,J]=i.useState(!1),Q=h(S),X=Object.assign(x?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:z,objectPosition:A}:{},$?{}:{color:"transparent"},O),Y="blur"===k&&I&&!G?{backgroundSize:X.objectFit||"cover",backgroundPosition:X.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(s.getImageBlurSvg({widthInt:W,heightInt:q,blurWidth:n,blurHeight:o,blurDataURL:I}),'")')}:{},ee=function(e){let{config:t,src:n,unoptimized:r,width:o,quality:a,sizes:l,loader:i}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:u,kind:s}=function(e,t,n){let{deviceSizes:r,allSizes:o}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(n);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:o,kind:"w"}}if("number"!=typeof t)return{widths:r,kind:"w"};let a=[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))];return{widths:a,kind:"x"}}(t,o,l),c=u.length-1;return{sizes:l||"w"!==s?l:"100vw",srcSet:u.map((e,r)=>"".concat(i({config:t,src:n,quality:a,width:e})," ").concat("w"===s?e:r+1).concat(s)).join(", "),src:i({config:t,src:n,quality:a,width:u[c]})}}({config:Z,src:m,unoptimized:b,width:W,quality:Q,sizes:y,loader:B}),et=m,en={imageSrcSet:ee.srcSet,imageSizes:ee.sizes,crossOrigin:N.crossOrigin},er=i.useRef(M);i.useEffect(()=>{er.current=M},[M]);let eo=i.useRef(P);i.useEffect(()=>{eo.current=P},[P]);let ea=r({isLazy:V,imgAttributes:ee,heightInt:q,widthInt:W,qualityInt:Q,className:C,imgStyle:X,blurStyle:Y,loading:w,config:Z,fill:x,unoptimized:b,placeholder:k,loader:B,srcString:et,onLoadRef:er,onLoadingCompleteRef:eo,setBlurComplete:K,setShowAltText:J},N);return i.default.createElement(i.default.Fragment,null,i.default.createElement(v,Object.assign({},ea,{ref:t})),_?i.default.createElement(u.default,null,i.default.createElement("link",Object.assign({key:"__nimg-"+ee.src+ee.srcSet+ee.sizes,rel:"preload",as:"image",href:ee.srcSet?void 0:ee.src},en))):null)});t.default=y,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4090:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(2648).Z,o=n(7273).Z,a=r(n(5784)),l=n(3777),i=n(2962),u=n(5463),s=n(4825),c=n(2568),d=n(2127),f=n(9959),p=n(3795);let g=new Set;function h(e,t,n,r){if(l.isLocalURL(t)){if(!r.bypassPrefetchedCheck){let o=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,a=t+"%"+n+"%"+o;if(g.has(a))return;g.add(a)}Promise.resolve(e.prefetch(t,n,r)).catch(e=>{})}}function m(e){return"string"==typeof e?e:i.formatUrl(e)}let v=a.default.forwardRef(function(e,t){let n,r;let{href:i,as:g,children:v,prefetch:y,passHref:b,replace:_,shallow:w,scroll:C,locale:S,onClick:E,onMouseEnter:j,onTouchStart:x,legacyBehavior:O=!1}=e,M=o(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=v,O&&("string"==typeof n||"number"==typeof n)&&(n=a.default.createElement("a",null,n));let P=!1!==y,k=a.default.useContext(s.RouterContext),I=a.default.useContext(c.AppRouterContext),R=null!=k?k:I,z=!k,{href:A,as:L}=a.default.useMemo(()=>{if(!k){let e=m(i);return{href:e,as:g?m(g):e}}let[e,t]=l.resolveHref(k,i,!0);return{href:e,as:g?l.resolveHref(k,g):t||e}},[k,i,g]),D=a.default.useRef(A),T=a.default.useRef(L);O&&(r=a.default.Children.only(n));let U=O?r&&"object"==typeof r&&r.ref:t,[Z,N,B]=d.useIntersection({rootMargin:"200px"}),F=a.default.useCallback(e=>{(T.current!==L||D.current!==A)&&(B(),T.current=L,D.current=A),Z(e),U&&("function"==typeof U?U(e):"object"==typeof U&&(U.current=e))},[L,U,A,B,Z]);a.default.useEffect(()=>{R&&N&&P&&h(R,A,L,{locale:S})},[L,A,N,S,P,null==k?void 0:k.locale,R]);let H={ref:F,onClick(e){O||"function"!=typeof E||E(e),O&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),R&&!e.defaultPrevented&&function(e,t,n,r,o,i,u,s,c,d){let{nodeName:f}=e.currentTarget,p="A"===f.toUpperCase();if(p&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!l.isLocalURL(n)))return;e.preventDefault();let g=()=>{"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:i,locale:s,scroll:u}):t[o?"replace":"push"](r||n,{forceOptimisticNavigation:!d})};c?a.default.startTransition(g):g()}(e,R,A,L,_,w,C,S,z,P)},onMouseEnter(e){O||"function"!=typeof j||j(e),O&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),R&&(P||!z)&&h(R,A,L,{locale:S,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){O||"function"!=typeof x||x(e),O&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),R&&(P||!z)&&h(R,A,L,{locale:S,priority:!0,bypassPrefetchedCheck:!0})}};if(!O||b||"a"===r.type&&!("href"in r.props)){let e=void 0!==S?S:null==k?void 0:k.locale,t=(null==k?void 0:k.isLocaleDomain)&&f.getDomainLocale(L,e,null==k?void 0:k.locales,null==k?void 0:k.domainLocales);H.href=t||p.addBasePath(u.addLocale(L,e,null==k?void 0:k.defaultLocale))}return O?a.default.cloneElement(r,H):a.default.createElement("a",Object.assign({},M,H),n)});t.default=v,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2127:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:u}=e,s=u||!a,[c,d]=r.useState(!1),f=r.useRef(null),p=r.useCallback(e=>{f.current=e},[]);r.useEffect(()=>{if(a){if(s||c)return;let e=f.current;if(e&&e.tagName){let r=function(e,t,n){let{id:r,observer:o,elements:a}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=i.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=l.get(r)))return t;let o=new Map,a=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:a,elements:o},i.push(n),l.set(n,t),t}(n);return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),l.delete(r);let e=i.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&i.splice(e,1)}}}(e,e=>e&&d(e),{root:null==t?void 0:t.current,rootMargin:n});return r}}else if(!c){let e=o.requestIdleCallback(()=>d(!0));return()=>o.cancelIdleCallback(e)}},[s,n,t,c,f.current]);let g=r.useCallback(()=>{d(!1)},[]);return[p,c,g]};var r=n(5784),o=n(672);let a="function"==typeof IntersectionObserver,l=new Map,i=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1697:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var r=(0,n(2648).Z)(n(5784));let o=r.default.createContext({});t.AmpStateContext=o},3996:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=function(){let{ampFirst:e=!1,hybrid:t=!1,hasQuery:n=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e||t&&n}},5322:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=c,t.default=void 0;var r=n(6495).Z,o=n(2648).Z,a=(0,n(1598).Z)(n(5784)),l=o(n(9914)),i=n(1697),u=n(8385),s=n(3996);function c(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}n(2437);let f=["name","httpEquiv","charSet","itemProp"];function p(e,t){let{inAmpMode:n}=t;return e.reduce(d,[]).reverse().concat(c(n).reverse()).filter(function(){let e=new Set,t=new Set,n=new Set,r={};return o=>{let a=!0,l=!1;if(o.key&&"number"!=typeof o.key&&o.key.indexOf("$")>0){l=!0;let t=o.key.slice(o.key.indexOf("$")+1);e.has(t)?a=!1:e.add(t)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(let e=0,t=f.length;e<t;e++){let t=f[e];if(o.props.hasOwnProperty(t)){if("charSet"===t)n.has(t)?a=!1:n.add(t);else{let e=o.props[t],n=r[t]||new Set;("name"!==t||!l)&&n.has(e)?a=!1:(n.add(e),r[t]=n)}}}}return a}}()).reverse().map((e,t)=>{let o=e.key||t;if(!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t=r({},e.props||{});return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,a.default.cloneElement(e,t)}return a.default.cloneElement(e,{key:o})})}t.default=function(e){let{children:t}=e,n=a.useContext(i.AmpStateContext),r=a.useContext(u.HeadManagerContext);return a.default.createElement(l.default,{reduceComponentsToState:p,headManager:r,inAmpMode:s.isInAmpMode(n)},t)},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9642:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:n,blurWidth:r,blurHeight:o,blurDataURL:a}=e,l=r||t,i=o||n,u=a.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return l&&i?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(l," ").concat(i,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(r&&o?"1":"20","'/%3E").concat(u,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(a,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(a,"'/%3E%3C/svg%3E")}},601:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ImageConfigContext=void 0;var r=(0,n(2648).Z)(n(5784)),o=n(931);let a=r.default.createContext(o.imageConfigDefault);t.ImageConfigContext=a},931:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.imageConfigDefault=t.VALID_LOADERS=void 0,t.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"],t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",remotePatterns:[],unoptimized:!1}},7112:function(e,t){"use strict";function n(e){let{config:t,src:n,width:r,quality:o}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n.__next_img_default=!0,t.default=n},4825:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RouterContext=void 0;var r=(0,n(2648).Z)(n(5784));let o=r.default.createContext(null);t.RouterContext=o},9914:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let{headManager:t,reduceComponentsToState:n}=e;function i(){if(t&&t.mountedInstances){let o=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(o,e))}}if(o){var u;null==t||null==(u=t.mountedInstances)||u.add(e.children),i()}return a(()=>{var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),()=>{var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}}),a(()=>(t&&(t._pendingUpdate=i),()=>{t&&(t._pendingUpdate=i)})),l(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null};var r=(0,n(1598).Z)(n(5784));let o=!1,a=o?()=>{}:r.useLayoutEffect,l=o?()=>{}:r.useEffect},2437:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.warnOnce=void 0;let n=e=>{};t.warnOnce=n},5675:function(e,t,n){e.exports=n(30)}}]);