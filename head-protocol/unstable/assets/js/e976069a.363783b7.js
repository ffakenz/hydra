"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[9168],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),l=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(a),u=r,m=p["".concat(d,".").concat(u)]||p[u]||h[u]||o;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},70494:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const o={sidebar_label:"Managed Hydra head",sidebar_position:3},i="Managed Hydra head",s={unversionedId:"managed/index",id:"managed/index",title:"Managed Hydra head",description:"This document is a work in progress.",source:"@site/topologies/managed/index.mdx",sourceDirName:"managed",slug:"/managed/",permalink:"/head-protocol/unstable/topologies/managed/",draft:!1,editUrl:"https://github.com/cardano-scaling/hydra/tree/master/docs/topologies/managed/index.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Managed Hydra head",sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"Basic Hydra head",permalink:"/head-protocol/unstable/topologies/basic/"},next:{title:"Delegated head",permalink:"/head-protocol/unstable/topologies/delegated-head/"}},d={},l=[],c={toc:l},p="wrapper";function h(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"managed-hydra-head"},"Managed Hydra head"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\ud83d\udee0\ufe0f This document is a work in progress.")),(0,r.kt)("p",null,"This document outlines the ",(0,r.kt)("em",{parentName:"p"},"managed Hydra head")," topology, which could also be described as ",(0,r.kt)("em",{parentName:"p"},"Hydra as a service"),"."),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:a(32740).Z,alt:"Managed Hydra Head",height:400})),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"../basic"},"basic Hydra head setup")," requires each participant to host an instance of a ",(0,r.kt)("inlineCode",{parentName:"p"},"hydra-node"),", similar to how ",(0,r.kt)("inlineCode",{parentName:"p"},"cardano-node"),"s operate on the Cardano network. In contrast, 'light node' setups allow users to access the blockchain through a hosted API, with light wallets being a common example."),(0,r.kt)("p",null,"In this topology, clients do not need to run their own ",(0,r.kt)("inlineCode",{parentName:"p"},"hydra-node"),"s but instead access a ",(0,r.kt)("inlineCode",{parentName:"p"},"hydra-node")," provided by a ",(0,r.kt)("em",{parentName:"p"},"service provider"),". Client applications, such as light wallets, do not need to be aware of individual ",(0,r.kt)("inlineCode",{parentName:"p"},"hydra-node")," instances. Instead, logical ",(0,r.kt)("em",{parentName:"p"},"Hydra heads")," are accessible via an API."),(0,r.kt)("p",null,"The illustration above depicts three different Hydra heads: two pairwise (yellow and green) and one multi-party (blue). Clients A, B, and C access their heads using the service provider, while client D manages their own hosting.\nFor this setup to be feasible, it is crucial that the ",(0,r.kt)("em",{parentName:"p"},"Hydra keys")," remain on the client side and that the ",(0,r.kt)("inlineCode",{parentName:"p"},"hydra-node")," serves purely as infrastructure \u2014 it does not take custody of the user's funds."),(0,r.kt)("p",null,"As a result, the client must be online for any progress to occur within a Hydra head. This requirement can be cumbersome in multi-party Hydra heads, as they may stall if a lightweight mobile client is offline for a period. However, this setup aligns well with ",(0,r.kt)("em",{parentName:"p"},"two-party Hydra heads"),", where a transaction is only completed if both parties are online to send, receive, and acknowledge it."),(0,r.kt)("p",null,"An example use case for two-party Hydra heads includes payment channels between two ",(0,r.kt)("a",{parentName:"p",href:"../../use-cases/payments/pay-per-use-api"},"machines")," or ",(0,r.kt)("a",{parentName:"p",href:"../../use-cases/payments/inter-wallet-payments"},"individuals"),", especially if such multiple channels are logically interconnected, similar to the Lightning Network."),(0,r.kt)("p",null,"Although access to Hydra heads is facilitated by the service provider, this does not centralize the system. A client can always close a head and recover funds with an alternative provider or even use a transaction created out-of-band (eg, by the client application using another service to submit the transaction)."))}h.isMDXComponent=!0},32740:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/managed-hydra-head-2203fcc5a3e69632cdd273a1c1acef21.jpg"}}]);