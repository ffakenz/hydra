"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[3741],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},28802:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(86010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,i),hidden:n},t)}},10599:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(87462),a=n(67294),o=n(86010),i=n(12466),l=n(16550),s=n(91980),c=n(67392),d=n(50012);function u(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=p(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,c]=h({queryString:n,groupId:r}),[u,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,d.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),y=(()=>{const e=s??u;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{y&&l(y)}),[y]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),k(e)}),[c,k,o]),tabValues:o}}var y=n(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:c}=e;const d=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),p=e=>{const t=e.currentTarget,n=d.indexOf(t),r=c[n].value;r!==l&&(u(t),s(r))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:p},i,{className:(0,o.Z)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function b(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function g(e){const t=k(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",v.tabList)},a.createElement(f,(0,r.Z)({},e,t)),a.createElement(b,(0,r.Z)({},e,t)))}function w(e){const t=(0,y.Z)();return a.createElement(g,(0,r.Z)({key:String(t)},e))}},31006:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=n(87462),a=(n(67294),n(3905)),o=n(10599),i=n(28802);const l={sidebar_position:3},s="Getting started without Docker",c={unversionedId:"getting-started-without-docker",id:"getting-started-without-docker",title:"Getting started without Docker",description:"This tutorial guides you through the same setup as the docker-based one, but without using Docker containers and only using executables and scripts.",source:"@site/docs/getting-started-without-docker.md",sourceDirName:".",slug:"/getting-started-without-docker",permalink:"/head-protocol/unstable/docs/getting-started-without-docker",draft:!1,editUrl:"https://github.com/cardano-scaling/hydra/tree/master/docs/docs/getting-started-without-docker.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"userDocumentation",previous:{title:"Getting started",permalink:"/head-protocol/unstable/docs/getting-started"},next:{title:"Open a head on testnet",permalink:"/head-protocol/unstable/docs/tutorial/"}},d={},u=[{value:"Preparation",id:"preparation",level:2},{value:"Set up the devnet",id:"set-up-the-devnet",level:2},{value:"Start Hydra nodes",id:"start-hydra-nodes",level:2},{value:"Run Hydra clients",id:"run-hydra-clients",level:2}],p={toc:u},m="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started-without-docker"},"Getting started without Docker"),(0,a.kt)("p",null,"This tutorial guides you through the same setup as the ",(0,a.kt)("a",{parentName:"p",href:"./getting-started"},"docker-based one"),", but without using Docker containers and only using executables and scripts."),(0,a.kt)("admonition",{title:"Shortcut using nix",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"All steps of this tutorial are also available in a combined ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/F1bonacc1/process-compose"},"process-compose")," setup via ",(0,a.kt)("inlineCode",{parentName:"p"},"nix run .#demo"))),(0,a.kt)("h2",{id:"preparation"},"Preparation"),(0,a.kt)("p",null,"Make sure that you have a ",(0,a.kt)("inlineCode",{parentName:"p"},"cardano-node"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"hydra-node")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"hydra-tui")," executable in your scope. You can either"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"use ",(0,a.kt)("inlineCode",{parentName:"li"},"nix develop .#demo")," or"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cabal build")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"cabal exec")," them (do not forget the ",(0,a.kt)("inlineCode",{parentName:"li"},"--")," before passing further arguments).")),(0,a.kt)("p",null,"All further commands are written as if executed from the ",(0,a.kt)("inlineCode",{parentName:"p"},"demo")," folder in the project repository:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cd demo\n")),(0,a.kt)("admonition",{title:"Tip for nix-direnv users",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Allowing the ",(0,a.kt)("inlineCode",{parentName:"p"},"demo/.envrc")," will ensure you have the nix shell environment available whenever you are in the ",(0,a.kt)("inlineCode",{parentName:"p"},"demo/")," directory. To use this, opt-in via ",(0,a.kt)("inlineCode",{parentName:"p"},"direnv allow")," after ",(0,a.kt)("inlineCode",{parentName:"p"},"cd demo"),".")),(0,a.kt)("admonition",{title:"Tmux shortcut",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"demo")," nix shell, there is a ",(0,a.kt)("inlineCode",{parentName:"p"},"run-tmux")," script which starts a new ",(0,a.kt)("inlineCode",{parentName:"p"},"tmux")," session with multiple windows and panes executing all the commands below!")),(0,a.kt)("h2",{id:"set-up-the-devnet"},"Set up the devnet"),(0,a.kt)("p",null,"First, let's prepare and start an ad-hoc, single ",(0,a.kt)("inlineCode",{parentName:"p"},"cardano-node")," devnet using our configuration. Note that this will create a ",(0,a.kt)("inlineCode",{parentName:"p"},"devnet")," directory in your current working directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./prepare-devnet.sh\ncd devnet\ncardano-node run \\\n  --config cardano-node.json \\\n  --topology topology.json \\\n  --database-path db \\\n  --socket-path node.socket \\\n  --shelley-operational-certificate opcert.cert \\\n  --shelley-kes-key kes.skey \\\n  --shelley-vrf-key vrf.skey\n")),(0,a.kt)("p",null,"From the ",(0,a.kt)("inlineCode",{parentName:"p"},"demo")," folder you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"seed-devnet.sh")," script by passing it the path/command to a cardano-cli and hydra-node executable to use, instead of having it using the Docker container. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"export CARDANO_NODE_SOCKET_PATH=devnet/node.socket\n./seed-devnet.sh $(which cardano-cli) $(which hydra-node)\n")),(0,a.kt)("p",null,"Note, should you want to use ",(0,a.kt)("inlineCode",{parentName:"p"},"cabal"),", pass the invocation for example like this ",(0,a.kt)("inlineCode",{parentName:"p"},'"cabal exec hydra-node --"'),"."),(0,a.kt)("h2",{id:"start-hydra-nodes"},"Start Hydra nodes"),(0,a.kt)("p",null,"Then, in 3 different terminals, start 3 Hydra nodes from the ",(0,a.kt)("inlineCode",{parentName:"p"},"demo/")," directory:"),(0,a.kt)("admonition",{title:"Note",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"We are trying to force ipv4 addresses by using ",(0,a.kt)("inlineCode",{parentName:"p"},"--peer 127.0.0.1"),".\nIf you don't see any connected peers in the tui it probably means that your system is configured to use ipv6.")),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Alice",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"source .env && hydra-node \\\n  --node-id 1 --port 5001 --api-port 4001 --monitoring-port 6001 \\\n  --peer 127.0.0.1:5002 \\\n  --peer 127.0.0.1:5003 \\\n  --hydra-signing-key alice.sk \\\n  --hydra-verification-key bob.vk \\\n  --hydra-verification-key carol.vk \\\n  --hydra-scripts-tx-id $HYDRA_SCRIPTS_TX_ID \\\n  --cardano-signing-key devnet/credentials/alice.sk \\\n  --cardano-verification-key devnet/credentials/bob.vk \\\n  --cardano-verification-key devnet/credentials/carol.vk \\\n  --ledger-protocol-parameters devnet/protocol-parameters.json \\\n  --testnet-magic 42 \\\n  --node-socket devnet/node.socket \\\n  --persistence-dir devnet/persistence/alice\n"))),(0,a.kt)(i.Z,{value:"Bob",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"source .env && hydra-node \\\n  --node-id 2 --port 5002 --api-port 4002 --monitoring-port 6002 \\\n  --peer 127.0.0.1:5001 \\\n  --peer 127.0.0.1:5003 \\\n  --hydra-signing-key bob.sk \\\n  --hydra-verification-key alice.vk \\\n  --hydra-verification-key carol.vk \\\n  --hydra-scripts-tx-id $HYDRA_SCRIPTS_TX_ID \\\n  --cardano-signing-key devnet/credentials/bob.sk \\\n  --cardano-verification-key devnet/credentials/alice.vk \\\n  --cardano-verification-key devnet/credentials/carol.vk \\\n  --ledger-protocol-parameters devnet/protocol-parameters.json \\\n  --testnet-magic 42 \\\n  --node-socket devnet/node.socket \\\n  --persistence-dir devnet/persistence/bob\n"))),(0,a.kt)(i.Z,{value:"Carol",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"source .env && hydra-node \\\n  --node-id 3 --port 5003 --api-port 4003 --monitoring-port 6003 \\\n  --peer 127.0.0.1:5001 \\\n  --peer 127.0.0.1:5002 \\\n  --hydra-signing-key carol.sk \\\n  --hydra-verification-key alice.vk \\\n  --hydra-verification-key bob.vk \\\n  --hydra-scripts-tx-id $HYDRA_SCRIPTS_TX_ID \\\n  --cardano-signing-key devnet/credentials/carol.sk \\\n  --cardano-verification-key devnet/credentials/alice.vk \\\n  --cardano-verification-key devnet/credentials/bob.vk \\\n  --ledger-protocol-parameters devnet/protocol-parameters.json \\\n  --testnet-magic 42 \\\n  --node-socket devnet/node.socket \\\n  --persistence-dir devnet/persistence/carol\n")))),(0,a.kt)("p",null,"If things go well, the nodes should start logging once connected to the chain."),(0,a.kt)("h2",{id:"run-hydra-clients"},"Run Hydra clients"),(0,a.kt)("p",null,"Connect to the nodes using hydra-tui."),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Alice",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"hydra-tui \\\n  --connect 0.0.0.0:4001 \\\n  --cardano-signing-key devnet/credentials/alice-funds.sk \\\n  --testnet-magic 42 \\\n  --node-socket devnet/node.socket\n"))),(0,a.kt)(i.Z,{value:"Bob",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"hydra-tui \\\n  --connect 0.0.0.0:4002 \\\n  --cardano-signing-key devnet/credentials/bob-funds.sk \\\n  --testnet-magic 42 \\\n  --node-socket devnet/node.socket\n"))),(0,a.kt)(i.Z,{value:"Carol",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"hydra-tui \\\n  --connect 0.0.0.0:4003 \\\n  --cardano-signing-key devnet/credentials/carol-funds.sk \\\n  --testnet-magic 42 \\\n  --node-socket devnet/node.socket\n")))))}h.isMDXComponent=!0}}]);