"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[3541],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=d(a),h=r,m=c["".concat(s,".").concat(h)]||c[h]||p[h]||l;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},17512:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const l={},i="Test results for hydra-cluster",o={unversionedId:"tests/hydra-cluster/hspec-results",id:"tests/hydra-cluster/hspec-results",title:"Test results for hydra-cluster",description:"Test.OfflineChain",source:"@site/benchmarks/tests/hydra-cluster/hspec-results.md",sourceDirName:"tests/hydra-cluster",slug:"/tests/hydra-cluster/hspec-results",permalink:"/head-protocol/unstable/benchmarks/tests/hydra-cluster/hspec-results",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Ledger micro-benchmarks",permalink:"/head-protocol/unstable/benchmarks/ledger"},next:{title:"Test results for hydra-node",permalink:"/head-protocol/unstable/benchmarks/tests/hydra-node/hspec-results"}},s={},d=[{value:"Test.OfflineChain",id:"testofflinechain",level:2},{value:"Test.Hydra.Cluster.Mithril",id:"testhydraclustermithril",level:2},{value:"downloadLatestSnapshotTo",id:"downloadlatestsnapshotto",level:3},{value:"Test.Hydra.Cluster.HydraClient",id:"testhydraclusterhydraclient",level:2},{value:"HydraClient on Cardano devnet",id:"hydraclient-on-cardano-devnet",level:3},{value:"hydra-client",id:"hydra-client",level:4},{value:"Test.Hydra.Cluster.Faucet",id:"testhydraclusterfaucet",level:2},{value:"returnFundsToFaucet",id:"returnfundstofaucet",level:3},{value:"seedFromFaucet",id:"seedfromfaucet",level:3},{value:"Test.Hydra.Cluster.CardanoCli",id:"testhydraclustercardanocli",level:2},{value:"cardano-cli",id:"cardano-cli",level:3},{value:"Test.Generator",id:"testgenerator",level:2},{value:"JSON encoding of Dataset",id:"json-encoding-of-dataset",level:3},{value:"Test.EndToEnd",id:"testendtoend",level:2},{value:"End-to-end on Cardano devnet",id:"end-to-end-on-cardano-devnet",level:3},{value:"hydra-node executable",id:"hydra-node-executable",level:4},{value:"Monitoring",id:"monitoring",level:4},{value:"two hydra heads scenario",id:"two-hydra-heads-scenario",level:4},{value:"restarting nodes",id:"restarting-nodes",level:4},{value:"three hydra nodes scenario",id:"three-hydra-nodes-scenario",level:4},{value:"single party hydra head",id:"single-party-hydra-head",level:4},{value:"Test.DirectChain",id:"testdirectchain",level:2},{value:"Test.ChainObserver",id:"testchainobserver",level:2},{value:"Test.CardanoNode",id:"testcardanonode",level:2},{value:"findRunningCardanoNode",id:"findrunningcardanonode",level:3},{value:"Test.CardanoClient",id:"testcardanoclient",level:2}],u={toc:d},c="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"test-results-for-hydra-cluster"},"Test results for hydra-cluster"),(0,r.kt)("h2",{id:"testofflinechain"},"Test.OfflineChain"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"does derive head id from node id"),(0,r.kt)("li",{parentName:"ul"},"does start on slot 0 with no genesis"),(0,r.kt)("li",{parentName:"ul"},"does not start on slot 0 with real genesis file")),(0,r.kt)("h2",{id:"testhydraclustermithril"},"Test.Hydra.Cluster.Mithril"),(0,r.kt)("h3",{id:"downloadlatestsnapshotto"},"downloadLatestSnapshotTo"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"invokes mithril-client correctly (Preview)"),(0,r.kt)("li",{parentName:"ul"},"invokes mithril-client correctly (Preproduction)"),(0,r.kt)("li",{parentName:"ul"},"invokes mithril-client correctly (Mainnet)"),(0,r.kt)("li",{parentName:"ul"},"invokes mithril-client correctly (Sanchonet)")),(0,r.kt)("h2",{id:"testhydraclusterhydraclient"},"Test.Hydra.Cluster.HydraClient"),(0,r.kt)("h3",{id:"hydraclient-on-cardano-devnet"},"HydraClient on Cardano devnet"),(0,r.kt)("h4",{id:"hydra-client"},"hydra-client"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"should filter TxValid by provided address"),(0,r.kt)("li",{parentName:"ul"},"should filter out TxValid when given a random address"),(0,r.kt)("li",{parentName:"ul"},"should filter out TxValid when given a wrong address")),(0,r.kt)("h2",{id:"testhydraclusterfaucet"},"Test.Hydra.Cluster.Faucet"),(0,r.kt)("h3",{id:"returnfundstofaucet"},"returnFundsToFaucet"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"does nothing if nothing to return")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"seedFromFaucet and returnFundsToFaucet should work together"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Details"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"+++ OK, passed 10 tests.\n"))))),(0,r.kt)("h3",{id:"seedfromfaucet"},"seedFromFaucet"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"should work concurrently when called multiple times with the same amount of lovelace")),(0,r.kt)("h2",{id:"testhydraclustercardanocli"},"Test.Hydra.Cluster.CardanoCli"),(0,r.kt)("h3",{id:"cardano-cli"},"cardano-cli"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"cardano-cli can accept a draft commit tx in text-envelope format"),(0,r.kt)("li",{parentName:"ul"},"has expected cardano-cli version available"),(0,r.kt)("li",{parentName:"ul"},"query protocol-parameters is compatible with our FromJSON instance"),(0,r.kt)("li",{parentName:"ul"},"query protocol-parameters matches our schema")),(0,r.kt)("h2",{id:"testgenerator"},"Test.Generator"),(0,r.kt)("h3",{id:"json-encoding-of-dataset"},"JSON encoding of Dataset"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"allows to encode values with aeson and read them back"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Details"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"+++ OK, passed 100 tests.\n")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"generates a Dataset that keeps UTXO constant"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Details"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"+++ OK, passed 100 tests.\n"))))),(0,r.kt)("h2",{id:"testendtoend"},"Test.EndToEnd"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"End-to-end offline mode")),(0,r.kt)("h3",{id:"end-to-end-on-cardano-devnet"},"End-to-end on Cardano devnet"),(0,r.kt)("h4",{id:"hydra-node-executable"},"hydra-node executable"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"logs its command line arguments"),(0,r.kt)("li",{parentName:"ul"},"logs to a logfile")),(0,r.kt)("h4",{id:"monitoring"},"Monitoring"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Node exposes Prometheus metrics on port 6001")),(0,r.kt)("h4",{id:"two-hydra-heads-scenario"},"two hydra heads scenario"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"two heads on the same network do not conflict"),(0,r.kt)("li",{parentName:"ul"},"alice inits a Head with incorrect keys preventing bob from observing InitTx"),(0,r.kt)("li",{parentName:"ul"},"bob cannot abort alice's head")),(0,r.kt)("h4",{id:"restarting-nodes"},"restarting nodes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"can abort head after restart"),(0,r.kt)("li",{parentName:"ul"},"can observe a commit tx after a restart, even when a tx happened while down"),(0,r.kt)("li",{parentName:"ul"},"prevent resuming a head after reconfiguring a peer"),(0,r.kt)("li",{parentName:"ul"},"can start chain from the past and replay on-chain events"),(0,r.kt)("li",{parentName:"ul"},"close of an initial snapshot from re-initialized node is contested")),(0,r.kt)("h4",{id:"three-hydra-nodes-scenario"},"three hydra nodes scenario"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"does not error when all nodes open the head concurrently"),(0,r.kt)("li",{parentName:"ul"},"inits a Head, processes a single Cardano transaction and closes it again"),(0,r.kt)("li",{parentName:"ul"},"inits a Head and closes it immediately")),(0,r.kt)("h4",{id:"single-party-hydra-head"},"single party hydra head"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"full head life-cycle"),(0,r.kt)("li",{parentName:"ul"},"can close with long deadline"),(0,r.kt)("li",{parentName:"ul"},"can submit a timed tx"),(0,r.kt)("li",{parentName:"ul"},"commits from external with utxo"),(0,r.kt)("li",{parentName:"ul"},"can submit a signed user transaction"),(0,r.kt)("li",{parentName:"ul"},"commits from external with tx blueprint"),(0,r.kt)("li",{parentName:"ul"},"can decommit utxo"),(0,r.kt)("li",{parentName:"ul"},"can incrementally commit"),(0,r.kt)("li",{parentName:"ul"},"can recover deposit"),(0,r.kt)("li",{parentName:"ul"},"can see pending deposits"),(0,r.kt)("li",{parentName:"ul"},"incrementally commit script using blueprint tx"),(0,r.kt)("li",{parentName:"ul"},"persistence can load with empty commit")),(0,r.kt)("h2",{id:"testdirectchain"},"Test.DirectChain"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"can init and abort a head given nothing has been committed"),(0,r.kt)("li",{parentName:"ul"},"can init and abort a 2-parties head after one party has committed"),(0,r.kt)("li",{parentName:"ul"},"cannot abort a non-participating head"),(0,r.kt)("li",{parentName:"ul"},"can commit using external wallet"),(0,r.kt)("li",{parentName:"ul"},"can commit using internal hydra-node wallet"),(0,r.kt)("li",{parentName:"ul"},"can commit empty UTxO"),(0,r.kt)("li",{parentName:"ul"},"can commit with multiple required signatures"),(0,r.kt)("li",{parentName:"ul"},"can open, close & fanout a Head"),(0,r.kt)("li",{parentName:"ul"},"can restart head to point in the past and replay on-chain events"),(0,r.kt)("li",{parentName:"ul"},"cannot restart head to an unknown point"),(0,r.kt)("li",{parentName:"ul"},"can publish and query reference scripts in a timely manner"),(0,r.kt)("li",{parentName:"ul"},"can only contest once")),(0,r.kt)("h2",{id:"testchainobserver"},"Test.ChainObserver"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"can observe hydra transactions created by hydra-nodes")),(0,r.kt)("h2",{id:"testcardanonode"},"Test.CardanoNode"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"has expected cardano-node version available"),(0,r.kt)("li",{parentName:"ul"},"withCardanoNodeDevnet does start a block-producing devnet within 5 seconds")),(0,r.kt)("h3",{id:"findrunningcardanonode"},"findRunningCardanoNode"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"returns Nothing on non-matching network")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"returns Just running node on matching network")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"withCardanoNodeOnKnownNetwork starts synchronizing within 10 seconds (Preview)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"withCardanoNodeOnKnownNetwork starts synchronizing within 10 seconds (Preproduction)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"withCardanoNodeOnKnownNetwork starts synchronizing within 10 seconds (Mainnet)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"withCardanoNodeOnKnownNetwork starts synchronizing within 10 seconds (Sanchonet)"))),(0,r.kt)("h2",{id:"testcardanoclient"},"Test.CardanoClient"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"queryGenesisParameters works as expected")))}p.isMDXComponent=!0}}]);