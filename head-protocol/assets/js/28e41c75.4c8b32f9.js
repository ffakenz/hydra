"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[1957],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),u=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=n,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return r?o.createElement(f,i(i({ref:t},c),{},{components:r})):o.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},30077:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var o=r(87462),n=(r(67294),r(3905));const a={slug:17,title:"17. Use UDP protocol for Hydra networking\n",authors:[],tags:["Draft"]},i=void 0,s={permalink:"/head-protocol/adr/17",source:"@site/adr/2022-03-28_017-udp-networking.md",title:"17. Use UDP protocol for Hydra networking\n",description:"Status",date:"2022-03-28T00:00:00.000Z",formattedDate:"March 28, 2022",tags:[{label:"Draft",permalink:"/head-protocol/adr/tags/draft"}],readingTime:1.5,hasTruncateMarker:!1,authors:[],frontMatter:{slug:"17",title:"17. Use UDP protocol for Hydra networking\n",authors:[],tags:["Draft"]},prevItem:{title:"16. Keep Rejected ADRs\n",permalink:"/head-protocol/adr/16"},nextItem:{title:"18. Single state in Hydra.Node.\n",permalink:"/head-protocol/adr/18"}},l={authorsImageUrls:[]},u=[{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Details",id:"details",level:2},{value:"Consequences",id:"consequences",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"status"},"Status"),(0,n.kt)("p",null,"Draft"),(0,n.kt)("h2",{id:"context"},"Context"),(0,n.kt)("p",null,"Current Hydra networking layer is based on ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/tree/master/ouroboros-network-framework"},"Ouroboros network framework")," networking stack which, among other features, provides:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"An abstraction of stream-based duplex communication channels called a ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-network/blob/6c15a8093bac34091ad96af2b8b0d1f7fe54b732/ouroboros-network-framework/src/Ouroboros/Network/Snocket.hs"},"Snocket"),","),(0,n.kt)("li",{parentName:"ol"},"A Multiplexing connection manager that manages a set of equivalent peers, maintains connectivity, and ensures diffusion of messages to/from all peers,"),(0,n.kt)("li",{parentName:"ol"},"Typed protocols for expressing the logic of message exchanges as a form of ",(0,n.kt)("em",{parentName:"li"},"state machine"),".")),(0,n.kt)("p",null,"While it's been working mostly fine so far, the abstractions and facilities provided by this network layer are not well suited for Hydra Head networking. Some of the questions and shortcomings are discussed in a document on ",(0,n.kt)("a",{parentName:"p",href:"/docs/dev/architecture/networking"},"Networking Requirements"),", and as the Hydra Head matures it seems time is ripe for overhauling current network implementation to better suite current and future Hydra Head networks needs."),(0,n.kt)("h2",{id:"decision"},"Decision"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Hydra Head nodes communicate by sending messages to other nodes using ",(0,n.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/User_Datagram_Protocol"},"UDP")," protocol")),(0,n.kt)("h2",{id:"details"},"Details"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"How do nodes know each other?"),": This is unspecified by this ADR and left for future work, it is assumed that a Hydra node operator knows the IP:Port address of its peers before opening a Head with them"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Are messages encrypted?"),": This should probably be the case in order to ensure Heads' privacy but is also left for future work"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"How are nodes identified?"),": At the moment they are identified by their IP:Port pair. As we implement more of the setup process from section 4 of the Hydra Head paper, we should identify nodes by some public key(hash) and resolve the actual IP:Port pair using some other mechanism")),(0,n.kt)("h2",{id:"consequences"},"Consequences"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Node's ",(0,n.kt)("em",{parentName:"li"},"HeadLogic")," handles lost, duplicates, and out-of-order messages using ",(0,n.kt)("em",{parentName:"li"},"retry")," and ",(0,n.kt)("em",{parentName:"li"},"timeout")," mechanisms"),(0,n.kt)("li",{parentName:"ul"},"Messages should carry a unique identifier, eg. source node and index"),(0,n.kt)("li",{parentName:"ul"},"Protocol, eg. messages format, is documented")))}p.isMDXComponent=!0}}]);