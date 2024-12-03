"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[6427],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),h=d(a),m=i,u=h["".concat(p,".").concat(m)]||h[m]||c[m]||r;return a?n.createElement(u,l(l({ref:t},s),{},{components:a})):n.createElement(u,l({ref:t},s))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[h]="string"==typeof e?e:i,l[1]=o;for(var d=2;d<r;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},72702:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=a(87462),i=(a(67294),a(3905));const r={slug:18,title:"18. Single state in Hydra.Node.\n",authors:[],tags:["Superseded"]},l=void 0,o={permalink:"/head-protocol/unstable/adr/18",source:"@site/adr/2022-04-13_018-single-state.md",title:"18. Single state in Hydra.Node.\n",description:"Status",date:"2022-04-13T00:00:00.000Z",formattedDate:"April 13, 2022",tags:[{label:"Superseded",permalink:"/head-protocol/unstable/adr/tags/superseded"}],readingTime:3.735,hasTruncateMarker:!1,authors:[],frontMatter:{slug:"18",title:"18. Single state in Hydra.Node.\n",authors:[],tags:["Superseded"]},prevItem:{title:"17. Use UDP protocol for Hydra networking\n",permalink:"/head-protocol/unstable/adr/17"},nextItem:{title:"19. Use of reference scripts\n",permalink:"/head-protocol/unstable/adr/19"}},p={authorsImageUrls:[]},d=[{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2},{value:"Alternative",id:"alternative",level:2}],s={toc:d},h="wrapper";function c(e){let{components:t,...a}=e;return(0,i.kt)(h,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"status"},"Status"),(0,i.kt)("p",null,"Superseded by ",(0,i.kt)("a",{parentName:"p",href:"/adr/23"},"ADR 23")," and ",(0,i.kt)("a",{parentName:"p",href:"/adr/26"},"ADR 26")),(0,i.kt)("h2",{id:"context"},"Context"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Currently the ",(0,i.kt)("inlineCode",{parentName:"li"},"hydra-node")," maintains two pieces of state during the life-cycle of a Hydra Head:",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"HeadState tx")," provided by the ",(0,i.kt)("inlineCode",{parentName:"li"},"HydraHead tx m")," handle interface and part of the ",(0,i.kt)("inlineCode",{parentName:"li"},"Hydra.Node")," module. It provides the basis for the main ",(0,i.kt)("inlineCode",{parentName:"li"},"hydra-node")," business logic in ",(0,i.kt)("inlineCode",{parentName:"li"},"Hydra.Node.processNextEvent")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"Hydra.HeadLogic.update"),(0,i.kt)("a",{parentName:"li",href:"https://github.com/cardano-scaling/hydra/blob/a98e2907c4e425de2736782793383aad63132c14/hydra-node/src/Hydra/Node.hs#L256-L257"},"Creation"),", ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/cardano-scaling/hydra/blob/a98e2907c4e425de2736782793383aad63132c14/hydra-node/src/Hydra/Node.hs#L174"},"Usage")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"SomeOnChainHeadState")," is kept in the ",(0,i.kt)("inlineCode",{parentName:"li"},"Hydra.Chain.Direct")," to keep track of the latest known head state, including notable transaction outputs and information how to spend it (e.g. scripts and datums)\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/blob/a98e2907c4e425de2736782793383aad63132c14/hydra-node/src/Hydra/Chain/Direct.hs#L156-L162"},"Code"),", ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/blob/a98e2907c4e425de2736782793383aad63132c14/hydra-node/src/Hydra/Chain/Direct.hs#L449"},"Usage 1"),", ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/blob/a98e2907c4e425de2736782793383aad63132c14/hydra-node/src/Hydra/Chain/Direct.hs#L414"},"Usage 2"),", ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/blob/a98e2907c4e425de2736782793383aad63132c14/hydra-node/src/Hydra/Chain/Direct.hs#L349-L352"},"Usage 3"),"\n(There are other unrelated things kept in memory like the event history in the API server or a peer map in the network heartbeat component.)"))),(0,i.kt)("li",{parentName:"ul"},"The interface between the ",(0,i.kt)("inlineCode",{parentName:"li"},"Hydra.Node")," and a ",(0,i.kt)("inlineCode",{parentName:"li"},"Hydra.Chain")," component consists of ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"constructing certain Head protocol transactions given a description of it (",(0,i.kt)("inlineCode",{parentName:"li"},"PostChainTx tx"),"):",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-hs"},"postTx :: MonadThrow m => PostChainTx tx -> m ()\n"))),(0,i.kt)("li",{parentName:"ul"},"a callback function when the ",(0,i.kt)("inlineCode",{parentName:"li"},"Hydra.Chain")," component observed a new Head protocol transaction described by ",(0,i.kt)("inlineCode",{parentName:"li"},"OnChainTx tx"),":",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-hs"},"type ChainCallback tx m = OnChainTx tx -> m ()\n"))))),(0,i.kt)("li",{parentName:"ul"},"Given by the usage sites above, the ",(0,i.kt)("inlineCode",{parentName:"li"},"Hydra.Chain.Direct")," module requires additional info to do both, construct protocol transactions with ",(0,i.kt)("inlineCode",{parentName:"li"},"postTx")," as well as observe potential ",(0,i.kt)("inlineCode",{parentName:"li"},"OnChainTx")," (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/blob/a98e2907c4e425de2736782793383aad63132c14/hydra-node/src/Hydra/Chain/Direct.hs#L333-L336"},"here"),"). Hence we see that, operation of the ",(0,i.kt)("inlineCode",{parentName:"li"},"Hydra.Chain.Direct")," component (and likely any implementing the interface fully) is ",(0,i.kt)("strong",{parentName:"li"},"inherently stateful"),"."),(0,i.kt)("li",{parentName:"ul"},"We are looking at upcoming features to ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/cardano-scaling/hydra/issues/185"},"handle rollbacks")," and dealing with ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/cardano-scaling/hydra/issues/187"},"persisting the head state"),".",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Both could benefit from the idea, that the ",(0,i.kt)("inlineCode",{parentName:"li"},"HeadState")," is just a result of pure ",(0,i.kt)("inlineCode",{parentName:"li"},"Event")," processing (a.k.a event sourcing)."),(0,i.kt)("li",{parentName:"ul"},"Right now the ",(0,i.kt)("inlineCode",{parentName:"li"},"HeadState")," kept in ",(0,i.kt)("inlineCode",{parentName:"li"},"Hydra.Node")," alone, is not enough to fully describe the state of the ",(0,i.kt)("inlineCode",{parentName:"li"},"hydra-node"),". Hence it would not be enough to just persist all the ",(0,i.kt)("inlineCode",{parentName:"li"},"Event"),"s and replaying them to achieve persistence, nor resetting to some previous ",(0,i.kt)("inlineCode",{parentName:"li"},"HeadState")," in the presence of a rollback.")))),(0,i.kt)("h2",{id:"decision"},"Decision"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'We define and keep a "blackbox" ',(0,i.kt)("inlineCode",{parentName:"p"},"ChainStateType tx")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"HeadState tx")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"It shall not be introspectable to the business logic in ",(0,i.kt)("inlineCode",{parentName:"li"},"HeadLogic")),(0,i.kt)("li",{parentName:"ul"},"It shall contain chain-specific information about the current Hydra Head, which will naturally need to evolve once we have multiple Heads in our feature scope"),(0,i.kt)("li",{parentName:"ul"},"For example:")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-hs"},"data HeadState tx\n  = IdleState\n  | InitialState\n      { chainState :: ChainStateType tx\n      -- ...\n      }\n  | OpenState\n      { chainState :: ChainStateType tx\n      -- ...\n      }\n  | ClosedState\n      { chainState :: ChainStateType tx\n      -- ...\n      }\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We provide the latest ",(0,i.kt)("inlineCode",{parentName:"p"},"ChainStateType tx")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"postTx"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-hs"},"postTx :: ChainStateType tx -> PostChainTx tx -> m ()\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We change the ",(0,i.kt)("inlineCode",{parentName:"p"},"ChainEvent tx")," data type and callback interface of ",(0,i.kt)("inlineCode",{parentName:"p"},"Chain")," to:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-hs"},"data ChainEvent tx\n  = Observation\n      { observedTx :: OnChainTx tx\n      , newChainState :: ChainStateType tx\n      }\n  | Rollback ChainSlot\n  | Tick UTCTime\n\ntype ChainCallback tx m = (ChainStateType tx -> Maybe (ChainEvent tx)) -> m ()\n")),(0,i.kt)("p",{parentName:"li"},"with the meaning, that invocation of the callback indicates receival of a transaction which is ",(0,i.kt)("inlineCode",{parentName:"p"},"Maybe")," observing a relevant ",(0,i.kt)("inlineCode",{parentName:"p"},"ChainEvent tx"),", where an ",(0,i.kt)("inlineCode",{parentName:"p"},"Observation")," may include a ",(0,i.kt)("inlineCode",{parentName:"p"},"newChainState"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We also decide to extend ",(0,i.kt)("inlineCode",{parentName:"p"},"OnChainEffect")," with a ",(0,i.kt)("inlineCode",{parentName:"p"},"ChainState tx")," to explicitly\nthread the used ",(0,i.kt)("inlineCode",{parentName:"p"},"chainState")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Hydra.HeadLogic"),"."))),(0,i.kt)("h2",{id:"consequences"},"Consequences"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We need to change the construction of ",(0,i.kt)("inlineCode",{parentName:"li"},"Chain")," handles and the call sites of ",(0,i.kt)("inlineCode",{parentName:"li"},"postTx")),(0,i.kt)("li",{parentName:"ul"},"We need to extract the state handling (similar to the event queue) out of the ",(0,i.kt)("inlineCode",{parentName:"li"},"HydraNode")," handle and shuffle the main of ",(0,i.kt)("inlineCode",{parentName:"li"},"hydra-node")," a bit to be able to provide the latest ",(0,i.kt)("inlineCode",{parentName:"li"},"ChainState")," to the chain callback as a continuation."),(0,i.kt)("li",{parentName:"ul"},"We need to make the ",(0,i.kt)("inlineCode",{parentName:"li"},"ChainState")," serializable (",(0,i.kt)("inlineCode",{parentName:"li"},"ToJSON"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"FromJSON"),") as it will be part of the ",(0,i.kt)("inlineCode",{parentName:"li"},"HeadState"),"."),(0,i.kt)("li",{parentName:"ul"},"We can drop the ",(0,i.kt)("inlineCode",{parentName:"li"},"TVar")," of keeping ",(0,i.kt)("inlineCode",{parentName:"li"},"OnChainHeadState")," in the ",(0,i.kt)("inlineCode",{parentName:"li"},"Hydra.Chain.Direct")," module."),(0,i.kt)("li",{parentName:"ul"},"We need to update ",(0,i.kt)("inlineCode",{parentName:"li"},"DirectChainSpec")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"BehaviorSpec")," test suites to mock/implement the callback & state handling."),(0,i.kt)("li",{parentName:"ul"},"We might be able to simplify the ",(0,i.kt)("inlineCode",{parentName:"li"},"ChainState tx")," to be just a ",(0,i.kt)("inlineCode",{parentName:"li"},"UTxOType tx")," later."),(0,i.kt)("li",{parentName:"ul"},"As ",(0,i.kt)("inlineCode",{parentName:"li"},"OnChainEffect")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"Observation")," values will contain a ",(0,i.kt)("inlineCode",{parentName:"li"},"ChainStateType tx"),", traces will automatically include the full ",(0,i.kt)("inlineCode",{parentName:"li"},"ChainState"),", which might be helpful but also possible big. ")),(0,i.kt)("h2",{id:"alternative"},"Alternative"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We could extend ",(0,i.kt)("inlineCode",{parentName:"li"},"PostChainTx")," (like ",(0,i.kt)("inlineCode",{parentName:"li"},"Observation"),") with ",(0,i.kt)("inlineCode",{parentName:"li"},"ChainState")," and keep the signatures:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hs"},"postTx :: MonadThrow m => PostChainTx tx -> m ()\ntype ChainCallback tx m = (ChainState tx -> Maybe (ChainEvent tx) -> m ()\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Not implemented as it is less clear on the need for a ",(0,i.kt)("inlineCode",{parentName:"li"},"ChainState")," in the signatures.")))}c.isMDXComponent=!0}}]);