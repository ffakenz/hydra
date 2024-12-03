"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[6777],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),u=i,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||r;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},42483:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=a(87462),i=(a(67294),a(3905));const r={slug:24,title:"24. Persist state changes incrementally\n",authors:["abailly"],tags:["Accepted"]},o=void 0,l={permalink:"/head-protocol/adr/24",source:"@site/adr/2023-06-19_024-event-sourced-persistence.md",title:"24. Persist state changes incrementally\n",description:"Status",date:"2023-06-19T00:00:00.000Z",formattedDate:"June 19, 2023",tags:[{label:"Accepted",permalink:"/head-protocol/adr/tags/accepted"}],readingTime:2.47,hasTruncateMarker:!1,authors:[{name:"Arnaud Bailly",title:"Lead Architect",url:"https://github.com/abailly-iohk",imageURL:"https://github.com/abailly-iohk.png",key:"abailly"}],frontMatter:{slug:"24",title:"24. Persist state changes incrementally\n",authors:["abailly"],tags:["Accepted"]},prevItem:{title:"23. Local chain state in chain layer\n",permalink:"/head-protocol/adr/23"},nextItem:{title:"25. Event-sourced, resource-based API\n",permalink:"/head-protocol/adr/25"}},s={authorsImageUrls:[void 0]},c=[{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2}],p={toc:c},d="wrapper";function m(e){let{components:t,...a}=e;return(0,i.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"status"},"Status"),(0,i.kt)("p",null,"Accepted"),(0,i.kt)("h2",{id:"context"},"Context"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The state of a Hydra Head is currently persisted as a whole upon each ",(0,i.kt)("inlineCode",{parentName:"li"},"NewState")," ",(0,i.kt)("em",{parentName:"li"},"outcome")," from the ",(0,i.kt)("inlineCode",{parentName:"li"},"update")," function: The new state is serialised and the ",(0,i.kt)("inlineCode",{parentName:"li"},"state")," file is overwritten with the corresponding bytes. While this is a straightforward strategy to implement, it has a huge impact on the performance of a Hydra Head as serialising a large data structure like the ",(0,i.kt)("inlineCode",{parentName:"li"},"HeadState")," and completely overwriting a file is costly",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"We revisited our benchmarks and ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/186#issuecomment-1584292265"},"found")," that persistence was the major bottleneck when measuring roundtrip confirmation time,e g. the time it takes from a client's perspective to submit a transaction and observe in a ",(0,i.kt)("inlineCode",{parentName:"li"},"ConfirmedSnapshot")))),(0,i.kt)("li",{parentName:"ul"},"Furthermore, the way we currently handle changes to the ",(0,i.kt)("inlineCode",{parentName:"li"},"HeadState")," in the hydra-node, while conceptually being an ",(0,i.kt)("inlineCode",{parentName:"li"},"Effect")," is handled differently from other ",(0,i.kt)("inlineCode",{parentName:"li"},"Effect"),"s: The state is updated transactionally through a dedicated ",(0,i.kt)("inlineCode",{parentName:"li"},"modifyHeadState")," function in the core loop of processing events, and ",(0,i.kt)("em",{parentName:"li"},"then")," effects are processed.")),(0,i.kt)("h2",{id:"decision"},"Decision"),(0,i.kt)("p",null,"Implement state persistence using ",(0,i.kt)("a",{parentName:"p",href:"https://thinkbeforecoding.com/post/2013/07/28/Event-Sourcing-vs-Command-Sourcing"},(0,i.kt)("em",{parentName:"a"},"Event Sourcing")),". Practically, this means:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Replace the ",(0,i.kt)("inlineCode",{parentName:"li"},"NewState")," outcome with a ",(0,i.kt)("inlineCode",{parentName:"li"},"StateChanged")," ",(0,i.kt)("em",{parentName:"li"},"event")," which can be part of the ",(0,i.kt)("inlineCode",{parentName:"li"},"Outcome")," of ",(0,i.kt)("inlineCode",{parentName:"li"},"HeadLogic"),"'s ",(0,i.kt)("inlineCode",{parentName:"li"},"update")," function, representing the ",(0,i.kt)("em",{parentName:"li"},"change")," to be applied to the current state."),(0,i.kt)("li",{parentName:"ol"},"Add an ",(0,i.kt)("inlineCode",{parentName:"li"},"aggregate")," function to manage applying ",(0,i.kt)("inlineCode",{parentName:"li"},"StateChanged")," events on top of the current ",(0,i.kt)("inlineCode",{parentName:"li"},"HeadState")," to keep it updated in-memory."),(0,i.kt)("li",{parentName:"ol"},"Persist ",(0,i.kt)("inlineCode",{parentName:"li"},"StateChanged"),"s in an append-only log using a dedicated ",(0,i.kt)("a",{parentName:"li",href:"/adr/4"},"handle"),"."),(0,i.kt)("li",{parentName:"ol"},"Upon node startup, reread ",(0,i.kt)("inlineCode",{parentName:"li"},"StateChanged")," events log and reapply those to reset the ",(0,i.kt)("inlineCode",{parentName:"li"},"HeadState"),".")),(0,i.kt)("p",null,"The following sequence diagram illustrates new event handling in the ",(0,i.kt)("inlineCode",{parentName:"p"},"HeadLogic"),":"),(0,i.kt)("mermaid",{value:"sequenceDiagram\n   Node ->> Node : nextEvent : event\n   critical modifyHeadState : state -> state';\n     activate Node\n     Node ->>+ HeadLogic: update(state, event)\n     HeadLogic --\x3e>- Node : Outcome (sc: StateChanged, oe: OtherEffect)\n     Node ->>+ HeadLogic: aggregate(state, sc)\n     HeadLogic --\x3e- Node : state'\n   end\n   deactivate Node\n   Node ->> Persistence: append(sc)\n   Node ->> Node: processEffect(oe)"}),(0,i.kt)("h2",{id:"consequences"},"Consequences"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\ud83d\udc0e The main expected consequence of this change is an increase of the overall performance of Hydra Head network.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Need to pattern match twice on the ",(0,i.kt)("inlineCode",{parentName:"p"},"HeadState"),", once in ",(0,i.kt)("inlineCode",{parentName:"p"},"update")," and once in ",(0,i.kt)("inlineCode",{parentName:"p"},"aggregate"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Terms from the specification are distributed over ",(0,i.kt)("inlineCode",{parentName:"p"},"update")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"aggregate")," function. For example, the statements about updating all seen transactions would now be in ",(0,i.kt)("inlineCode",{parentName:"p"},"aggregate")," and not anymore in ",(0,i.kt)("inlineCode",{parentName:"p"},"update"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"New possibilities this change introduces with respect to ",(0,i.kt)("inlineCode",{parentName:"p"},"ServerOutput")," handling and client's access to a head's state:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Instead of having the ",(0,i.kt)("inlineCode",{parentName:"li"},"HeadLogic")," emits directly a ",(0,i.kt)("inlineCode",{parentName:"li"},"ClientEffect"),", the latter could be the result of a client-centric ",(0,i.kt)("em",{parentName:"li"},"interpretation")," of a ",(0,i.kt)("inlineCode",{parentName:"li"},"StateChanged"),"."),(0,i.kt)("li",{parentName:"ul"},"Pushing this a little further, we could maintain a ",(0,i.kt)("em",{parentName:"li"},"Query Model")," for clients with a dedicated ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/cardano-scaling/hydra/discussions/686"},"Query API")," to ease implementation of stateless clients."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Calling ",(0,i.kt)("inlineCode",{parentName:"p"},"StateChanged")," an ",(0,i.kt)("em",{parentName:"p"},"event")," while treating it in the code alongside ",(0,i.kt)("em",{parentName:"p"},"effects")," might introduce some confusion as we already use the word ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/blob/45913954eb18ef550a31017daa443cee6720a00c/hydra-node/src/Hydra/HeadLogic.hs#L64"},"Event")," to designate the inputs (a.k.a. commands) to the Head logic state machine. We might want at some later point to unify the terminology."))))}m.isMDXComponent=!0}}]);