System.register(["single-spa"],(function(e,t){var r={};return{setters:[function(e){r.registerApplication=e.registerApplication,r.start=e.start}],execute:function(){e((()=>{var e={722:(e,t,r)=>{const n=r(905).R;t.s=function(e){if(e||(e=1),!r.y.meta||!r.y.meta.url)throw console.error("__system_context__",r.y),Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");r.p=n(r.y.meta.url,e)}},905:(e,t,r)=>{t.R=function(e,t){var r=document.createElement("a");r.href=e;for(var n="/"===r.pathname[0]?r.pathname:"/"+r.pathname,p=0,a=n.length;p!==t&&a>=0;)"/"===n[--a]&&p++;if(p!==t)throw Error("systemjs-webpack-interop: rootDirectoryLevel ("+t+") is greater than the number of directories ("+p+") in the URL path "+e);var o=n.slice(0,a+1);return r.protocol+"//"+r.host+o};Number.isInteger},645:e=>{"use strict";e.exports=r}},n={};function p(t){var r=n[t];if(void 0!==r)return r.exports;var a=n[t]={exports:{}};return e[t](a,a.exports,p),a.exports}p.y=t,p.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},p.p="";var a={};return(0,p(722).s)(1),(()=>{"use strict";p.r(a);var e=p(645);(0,e.registerApplication)({name:"@app/AppHeader",app:function(){return System.import("@app/AppHeader")},activeWhen:[function(e){return 0==e.pathname.includes("/products")&&0==e.pathname.includes("/quote")}]}),(0,e.registerApplication)({name:"@app/AppFooter",app:function(){return System.import("@app/AppFooter")},activeWhen:[function(e){return 0==e.pathname.includes("/products")&&0==e.pathname.includes("/Claims")&&0==e.pathname.includes("/quote")}]}),(0,e.registerApplication)({name:"@app/Home",app:function(){return System.import("@app/Home")},activeWhen:["/home"]}),(0,e.registerApplication)({name:"@app/Products",app:function(){return System.import("@app/Products")},activeWhen:["/products"]}),(0,e.registerApplication)({name:"@pru/Claims",app:function(){return System.import("@pru/Claims")},activeWhen:["/claims"]}),(0,e.registerApplication)({name:"@app/Career",app:function(){return System.import("@app/Career")},activeWhen:["/career","/aboutUs","/joinWaitList"]}),(0,e.registerApplication)({name:"@app/Quote",app:function(){return System.import("@app/Quote")},activeWhen:["/quote"]}),(0,e.start)({urlRerouteOnly:!0})})(),a})())}}}));
//# sourceMappingURL=app-root-config.js.map