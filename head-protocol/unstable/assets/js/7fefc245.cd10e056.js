"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[6346],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,h=p["".concat(c,".").concat(m)]||p[m]||u[m]||r;return n?o.createElement(h,i(i({ref:t},d),{},{components:n})):o.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},39218:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var o=n(87462),a=(n(67294),n(3905));const r={},i="Commit funds to an open Head",l={unversionedId:"how-to/incremental-commit",id:"how-to/incremental-commit",title:"Commit funds to an open Head",description:"Assuming we already have an open Head and some funds on the L1 we would like to commit.",source:"@site/docs/how-to/incremental-commit.md",sourceDirName:"how-to",slug:"/how-to/incremental-commit",permalink:"/head-protocol/unstable/docs/how-to/incremental-commit",draft:!1,editUrl:"https://github.com/cardano-scaling/hydra/tree/master/docs/docs/how-to/incremental-commit.md",tags:[],version:"current",frontMatter:{},sidebar:"userDocumentation",previous:{title:"Extend the node with event source and sinks",permalink:"/head-protocol/unstable/docs/how-to/event-sinks-and-sources"},next:{title:"FAQs",permalink:"/head-protocol/unstable/docs/faqs"}},c={},s=[{value:"Deposit UTxO to commit",id:"deposit-utxo-to-commit",level:3},{value:"Recover a deposit",id:"recover-a-deposit",level:3}],d={toc:s},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"commit-funds-to-an-open-head"},"Commit funds to an open Head"),(0,a.kt)("p",null,"Assuming we already have an open Head and some funds on the L1 we would like to commit."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"You could run a local ",(0,a.kt)("a",{parentName:"p",href:"./../getting-started"},"demo"))),(0,a.kt)("p",null,"The following commands are expected to be run from the ",(0,a.kt)("inlineCode",{parentName:"p"},"demo")," folder and using these environment variables:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"export CARDANO_NODE_SOCKET_PATH=${PWD}/devnet/node.socket\nexport CARDANO_NODE_NETWORK_ID=42\n")),(0,a.kt)("p",null,"We can inspect the L1 utxo with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cardano-cli query utxo --whole-utxo\n")),(0,a.kt)("p",null,"and the state of the faucet public key"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cardano-cli query utxo \\\n  --address $(cardano-cli address build --payment-verification-key-file ${PWD}/../hydra-cluster/config/credentials/faucet.vk)\n")),(0,a.kt)("p",null,"In this setup, we would be using the ",(0,a.kt)("inlineCode",{parentName:"p"},"faucet")," keys to commit everything into the head."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"export WALLET_SK=${PWD}/../hydra-cluster/config/credentials/faucet.sk\nexport WALLET_VK=${PWD}/../hydra-cluster/config/credentials/faucet.vk\n")),(0,a.kt)("h3",{id:"deposit-utxo-to-commit"},"Deposit UTxO to commit"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"/commit")," endpoint supports two ways of specifying what to commit, one is just by showing the UTxO (which is assumed to be owned by public keys), while the more advanced way would be using ",(0,a.kt)("a",{parentName:"p",href:"./commit-blueprint"},"blueprint transactions"),"."),(0,a.kt)("p",null,"We are using the simple request here and want to commit everything owned by ",(0,a.kt)("inlineCode",{parentName:"p"},"${WALLET_SK}"),". So we can just query the L1 for all UTxO owned by it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cardano-cli query utxo \\\n  --address $(cardano-cli address build --payment-verification-key-file ${WALLET_VK}) \\\n  --out-file commit-utxo.json\n")),(0,a.kt)("p",null,"Then a request to the ",(0,a.kt)("inlineCode",{parentName:"p"},"/commit")," endpoint provides us with a transaction:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl -X POST localhost:4001/commit \\\n  --data @commit-utxo.json \\\n  > deposit-tx.json\n")),(0,a.kt)("p",null,"Which we can submit to the cardano network:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cardano-cli transaction sign \\\n  --tx-file deposit-tx.json \\\n  --signing-key-file ${WALLET_SK} \\\n  --out-file deposit-tx.signed.json\n\ncardano-cli transaction submit \\\n  --tx-file deposit-tx.signed.json\n")),(0,a.kt)("p",null,"This will result in a deposit being detected by the ",(0,a.kt)("inlineCode",{parentName:"p"},"hydra-node")," and consequently the funds to be committed to the head."),(0,a.kt)("h3",{id:"recover-a-deposit"},"Recover a deposit"),(0,a.kt)("p",null,"Do the same thing as above, ",(0,a.kt)("strong",{parentName:"p"},"but")," with one node stopped, so the deposit is not going to be picked up."),(0,a.kt)("p",null,"Once we deposited funds we should not see the corresponding UTxO belonging to faucet public key on L1:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"\ncardano-cli query utxo \\\n  --address $(cardano-cli address build --payment-verification-key-file ${PWD}/../hydra-cluster/config/credentials/faucet.vk)\n")),(0,a.kt)("p",null,"Inspect the pending deposits:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"curl -X GET localhost:4001/commits\n\n")),(0,a.kt)("p",null,"and you should see the tx-id of the deposit transaction ",(0,a.kt)("inlineCode",{parentName:"p"},'["6b51f3787f5482004b258c60fe0c94775164f547d9284b6233bbb4f6f8b9dfa6"]')),(0,a.kt)("p",null,"To recover, we can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"/commits")," endpoint again using the transaction id of the deposit:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X DELETE localhost:4001/commits/$(printf "\\"6b51f3787f5482004b258c60fe0c94775164f547d9284b6233bbb4f6f8b9dfa6"\\" | jq -sRr \'@uri\')\n')),(0,a.kt)("p",null,"If we inspect the faucet funds again we will see that the locked deposit is now recovered"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cardano-cli query utxo \\\n  --address $(cardano-cli address build --payment-verification-key-file ${PWD}/../hydra-cluster/config/credentials/faucet.vk)\n")))}u.isMDXComponent=!0}}]);