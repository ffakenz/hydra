"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[4753],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),m=a,y=c["".concat(i,".").concat(m)]||c[m]||d[m]||s;return r?n.createElement(y,o(o({ref:t},p),{},{components:r})):n.createElement(y,o({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<s;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},51896:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const s={},o="Test results for hydra-tui",l={unversionedId:"tests/hydra-tui/hspec-results",id:"tests/hydra-tui/hspec-results",title:"Test results for hydra-tui",description:"Hydra.TUI.Options",source:"@site/benchmarks/tests/hydra-tui/hspec-results.md",sourceDirName:"tests/hydra-tui",slug:"/tests/hydra-tui/hspec-results",permalink:"/head-protocol/unstable/benchmarks/tests/hydra-tui/hspec-results",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Test results for hydra-plutus",permalink:"/head-protocol/unstable/benchmarks/tests/hydra-plutus/hspec-results"},next:{title:"Test results for hydra-tx",permalink:"/head-protocol/unstable/benchmarks/tests/hydra-tx/hspec-results"}},i={},u=[{value:"Hydra.TUI.Options",id:"hydratuioptions",level:2},{value:"Hydra.TUI",id:"hydratui",level:2},{value:"end-to-end smoke tests",id:"end-to-end-smoke-tests",level:3},{value:"text rendering errors",id:"text-rendering-errors",level:3},{value:"text rendering tests",id:"text-rendering-tests",level:3}],p={toc:u},c="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"test-results-for-hydra-tui"},"Test results for hydra-tui"),(0,a.kt)("h2",{id:"hydratuioptions"},"Hydra.TUI.Options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"no arguments yield default options"),(0,a.kt)("li",{parentName:"ul"},"parses --connect option"),(0,a.kt)("li",{parentName:"ul"},"parses --testnet-magic option"),(0,a.kt)("li",{parentName:"ul"},"parses --cardano-signing-key option"),(0,a.kt)("li",{parentName:"ul"},"parses --node-socket option"),(0,a.kt)("li",{parentName:"ul"},"parses --version option")),(0,a.kt)("h2",{id:"hydratui"},"Hydra.TUI"),(0,a.kt)("h3",{id:"end-to-end-smoke-tests"},"end-to-end smoke tests"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"can quit before connected")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"starts & renders")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"supports the init & abort Head life cycle")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"supports the full Head life cycle")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"doesn't allow multiple initializations"))),(0,a.kt)("h3",{id:"text-rendering-errors"},"text rendering errors"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"should show not enough fuel message and suggestion")),(0,a.kt)("h3",{id:"text-rendering-tests"},"text rendering tests"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"should format time with whole values for every unit, not total values")))}d.isMDXComponent=!0}}]);