"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[2529],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),i=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),s=i(a),h=n,k=s["".concat(c,".").concat(h)]||s[h]||u[h]||l;return a?r.createElement(k,o(o({ref:t},p),{},{components:a})):r.createElement(k,o({ref:t},p))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=h;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d[s]="string"==typeof e?e:n,o[1]=d;for(var i=2;i<l;i++)o[i]=a[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},50231:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>i});var r=a(87462),n=(a(67294),a(3905));const l={},o="Haskell packages",d={unversionedId:"dev/haskell-packages",id:"dev/haskell-packages",title:"Haskell packages",description:"The Hydra project consists of several Haskell packages, each serving distinct parts of the protocol. While some packages are internal and tailored specifically to Hydra, others offer more generic functionalities that could benefit other projects tackling similar challenges. Comprehensive Haddock documentation is provided for all packages.",source:"@site/docs/dev/haskell-packages.md",sourceDirName:"dev",slug:"/dev/haskell-packages",permalink:"/head-protocol/unstable/docs/dev/haskell-packages",draft:!1,editUrl:"https://github.com/cardano-scaling/hydra/tree/master/docs/docs/dev/haskell-packages.md",tags:[],version:"current",frontMatter:{},sidebar:"developerDocumentation",previous:{title:"Layer 2 solutions",permalink:"/head-protocol/unstable/docs/dev/layer-two"}},c={},i=[{value:"Public packages",id:"public-packages",level:2},{value:"Internal packages",id:"internal-packages",level:2}],p={toc:i},s="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(s,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"haskell-packages"},"Haskell packages"),(0,n.kt)("p",null,"The Hydra project consists of several Haskell packages, each serving distinct parts of the protocol. While some packages are internal and tailored specifically to Hydra, others offer more generic functionalities that could benefit other projects tackling similar challenges. Comprehensive ",(0,n.kt)("a",{parentName:"p",href:"https://www.haskell.org/haddock/"},"Haddock")," documentation is provided for all packages."),(0,n.kt)("h2",{id:"public-packages"},"Public packages"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Package"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"pathname:///haddock/hydra-prelude/index.html"},"hydra-prelude")),(0,n.kt)("td",{parentName:"tr",align:null},"Custom Hydra prelude used across other Hydra packages")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"pathname:///haddock/hydra-cardano-api/index.html"},"hydra-cardano-api")),(0,n.kt)("td",{parentName:"tr",align:null},"A wrapper around the ",(0,n.kt)("inlineCode",{parentName:"td"},"cardano-api"),", with era-specialized types and extra utilities")))),(0,n.kt)("h2",{id:"internal-packages"},"Internal packages"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Package"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"pathname:///haddock/hydra-node/index.html"},"hydra-node")),(0,n.kt)("td",{parentName:"tr",align:null},"The Hydra node")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"pathname:///haddock/hydra-node/tests/index.html"},"hydra-node tests")),(0,n.kt)("td",{parentName:"tr",align:null},"The Hydra node test code")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"pathname:///haddock/hydra-tui/index.html"},"hydra-tui")),(0,n.kt)("td",{parentName:"tr",align:null},"Terminal User Interface (TUI) for managing a Hydra node")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"pathname:///haddock/hydra-plutus/index.html"},"hydra-plutus")),(0,n.kt)("td",{parentName:"tr",align:null},"Hydra Plutus contracts")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"pathname:///haddock/hydra-cluster/index.html"},"hydra-cluster")),(0,n.kt)("td",{parentName:"tr",align:null},"Integration test suite using a local cluster of Cardano and Hydra nodes")))))}u.isMDXComponent=!0}}]);