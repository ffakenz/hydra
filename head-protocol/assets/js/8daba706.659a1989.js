"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[9668],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=o.createContext({}),l=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(d.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,d=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),s=l(n),u=r,f=s["".concat(d,".").concat(u)]||s[u]||m[u]||c;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=u;var a={};for(var d in t)hasOwnProperty.call(t,d)&&(a[d]=t[d]);a.originalType=e,a[s]="string"==typeof e?e:r,i[1]=a;for(var l=2;l<c;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},88906:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const c={},i="Protocol",a={unversionedId:"dev/protocol",id:"dev/protocol",title:"Protocol",description:"Additional implementation-specific documentation for the Hydra Head protocol and extensions like incremental decommits.",source:"@site/docs/dev/protocol.md",sourceDirName:"dev",slug:"/dev/protocol",permalink:"/head-protocol/docs/dev/protocol",draft:!1,editUrl:"https://github.com/cardano-scaling/hydra/tree/master/docs/docs/dev/protocol.md",tags:[],version:"current",frontMatter:{},sidebar:"developerDocumentation",previous:{title:"Specification",permalink:"/head-protocol/docs/dev/specification"},next:{title:"Architecture",permalink:"/head-protocol/docs/dev/architecture/"}},d={},l=[{value:"Incremental Decommits",id:"incremental-decommits",level:3}],p={toc:l},s="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"protocol"},"Protocol"),(0,r.kt)("p",null,"Additional implementation-specific documentation for the Hydra Head protocol and extensions like incremental decommits."),(0,r.kt)("h3",{id:"incremental-decommits"},"Incremental Decommits"),(0,r.kt)("mermaid",{value:"sequenceDiagram\n    Alice->>HeadLogic: Decommit (decTx)\n    HeadLogic->>HeadLogic: canApply decTx\n\n    par broadcast\n        HeadLogic->>HeadLogic: ReqDec decTx\n    and\n        HeadLogic->>Node B: ReqDec decTx\n    end\n\n    HeadLogic --\x3e> Alice: DecommitRequested\n\n    par Alice isLeader\n        HeadLogic->>HeadLogic: ReqSn decTx\n    and\n        HeadLogic->>Node B: ReqSn decTx\n    end\n\n    HeadLogic->>HeadLogic: canApply decTx, decUTxO =  outputs(decTx)\n    HeadLogic->>HeadLogic: sig = sign snapshot incl. decUTxO\n\n    par broadcast\n        HeadLogic->>HeadLogic: AckSn sig\n    and\n        HeadLogic->>Node B: AckSn sig\n    end\n\n    Node B->>HeadLogic: AckSn sig\n\n    HeadLogic --\x3e> Alice: SnapshotConfirmed\n    HeadLogic --\x3e> Alice: DecommitApproved\n\n    HeadLogic ->> Chain: DecrementTx snapshot sig\n    Chain ->> HeadLogic: OnDecrementTx\n    HeadLogic --\x3e> Alice: DecommitFinalized"}))}m.isMDXComponent=!0}}]);