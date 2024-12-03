"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[1856],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},98090:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={slug:9,title:"9. Simplify Logging\n",authors:[],tags:["Accepted"]},i=void 0,l={permalink:"/head-protocol/unstable/adr/9",source:"@site/adr/2021-08-19_009-simplify-logging.md",title:"9. Simplify Logging\n",description:"Status",date:"2021-08-19T00:00:00.000Z",formattedDate:"August 19, 2021",tags:[{label:"Accepted",permalink:"/head-protocol/unstable/adr/tags/accepted"}],readingTime:1.21,hasTruncateMarker:!1,authors:[],frontMatter:{slug:"9",title:"9. Simplify Logging\n",authors:[],tags:["Accepted"]},prevItem:{title:"8. Custom Prelude\n",permalink:"/head-protocol/unstable/adr/8"},nextItem:{title:"10. Use direct connection to `cardano-node`\n",permalink:"/head-protocol/unstable/adr/10"}},s={authorsImageUrls:[]},c=[{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"status"},"Status"),(0,o.kt)("p",null,"Proposed"),(0,o.kt)("h2",{id:"context"},"Context"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Logs are critical to provide ",(0,o.kt)("em",{parentName:"li"},"observability")," to Hydra nodes' operators"),(0,o.kt)("li",{parentName:"ul"},"Providing the needed components and tools to be able to configure logging and monitoring to each operator's liking should not be the responibility of the Hydra node, and requires complex machinery that will need to be maintained and evolved"),(0,o.kt)("li",{parentName:"ul"},"When a problem occurs in production, if the process is not verbose enough it can be very hard to analyse the problem",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Enabling dynamic changes of verbosity in logs is both complex to implement and comes too late"),(0,o.kt)("li",{parentName:"ul"},'Deciding in the code on what\'s the right "severity" for a log entry leads to dropping important information on ',(0,o.kt)("em",{parentName:"li"},"how")," some error occured")))),(0,o.kt)("h2",{id:"decision"},"Decision"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Therefore")),(0,o.kt)("p",null,"Hydra node provides a very simplified logging mechanism whereby:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"All logs are emitted as JSON-encoded structures providing some metadata (timestamp, threadId) around well-defined data"),(0,o.kt)("li",{parentName:"ul"},"Each ",(0,o.kt)("em",{parentName:"li"},"log entry")," is written to the ",(0,o.kt)("inlineCode",{parentName:"li"},"hydra-node")," process' ",(0,o.kt)("em",{parentName:"li"},"stdout")," port, one line per entry"),(0,o.kt)("li",{parentName:"ul"},"The definition of the logged items is considered to be part of the public A\u03b3PI of the Hydra node")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),": Proper redaction of sensitive information contained in log entries should still be handled in the code."),(0,o.kt)("h2",{id:"consequences"},"Consequences"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The schema of the logged items should be properly documented in a JSON schema, just like we do for client side API"),(0,o.kt)("li",{parentName:"ul"},"It is the responsibility of the node operator to consume the logs and process them")))}u.isMDXComponent=!0}}]);