"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[8284],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=l(a),m=n,u=h["".concat(c,".").concat(m)]||h[m]||d[m]||o;return a?r.createElement(u,i(i({ref:t},p),{},{components:a})):r.createElement(u,i({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[h]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},46035:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=a(87462),n=(a(67294),a(3905));const o={},i="Poker game",s={unversionedId:"other/poker-game/index",id:"other/poker-game/index",title:"Poker game",description:"The poker game is a prototypical example of a multi-party state channel.",source:"@site/use-cases/other/poker-game/index.md",sourceDirName:"other/poker-game",slug:"/other/poker-game/",permalink:"/head-protocol/use-cases/other/poker-game/",draft:!1,editUrl:"https://github.com/cardano-scaling/hydra/tree/master/docs/use-cases/other/poker-game/index.md",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Lightning network payments",permalink:"/head-protocol/use-cases/payments/lighting-network-like-payments/"}},c={},l=[],p={toc:l},h="wrapper";function d(e){let{components:t,...o}=e;return(0,n.kt)(h,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"poker-game"},"Poker game"),(0,n.kt)("p",null,"The poker game is a prototypical example of a multi-party state channel."),(0,n.kt)("p",null,"We often use the analogy of a ",(0,n.kt)("em",{parentName:"p"},"poker game")," to explain how Hydra heads function, as it closely aligns with the fundamentals of the Hydra Head protocol. A poker game, like any game, has a clear start and end, and progresses according to a set of agreed-upon rules. In poker, the monetary component is central; players place bids and exchange money throughout the game. Moreover, the game involves a fixed number of players who have conflicting goals (ie, to win the game), may not fully trust each other, but are willing to cooperate within the established rules."),(0,n.kt)("admonition",{title:"Decentralized randomness and multi-party computation",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"For this use case, we consider the possibility of implementing a decentralized poker game with pseudo-randomness or multi-party computation (refer to ",(0,n.kt)("a",{parentName:"p",href:"https://eprint.iacr.org/2018/157"},"ROYALE by David & al"),"). We focus here on the state channel aspect, for which Hydra heads provide a robust solution.")),(0,n.kt)("p",null,"In this scenario, each player represents a member of a Hydra head, operating their own Hydra node. The game begins with each participant committing funds to the head, which serve as their chips. Once the head is active, participants can start the game, utilizing on-head Plutus contracts to facilitate gameplay. Players can instantly process fund transfers within the head, with the script acting as the game dealer \u2014 ensuring adherence to rules and smooth game progression."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(72061).Z,width:"1043",height:"601"})),(0,n.kt)("p",null,"Ultimately, the game concludes with a well-defined distribution of funds. Participants can choose to play another game or close the head and record the final outcomes on layer 1. The entire gameplay remains opaque to layer 1; only the ultimate UTXO distribution is known."),(0,n.kt)("p",null,"While it is technically feasible to conduct this game entirely on layer 1, using a Hydra head offers significant advantages. It enables fast-paced transactions throughout the game and minimizes transaction fees beyond the initial costs needed to establish the Hydra head."))}d.isMDXComponent=!0},72061:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/poker-5da0a259ae448b547c2059af88b66f2b.webp"}}]);