"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[9514,4972],{71072:(e,t,n)=>{n.r(t),n.d(t,{default:()=>fe});var a=n(67294),l=n(86010),o=n(10833),r=n(35281),i=n(43320),c=n(53438),s=n(74477),d=n(1116),m=n(81513),u=n(95999),b=n(12466),p=n(85936);const h={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};function E(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,l]=(0,a.useState)(!1),o=(0,a.useRef)(!1),{startScroll:r,cancelScroll:i}=(0,b.Ct)();return(0,b.RF)(((e,n)=>{let{scrollY:a}=e;const r=n?.scrollY;r&&(o.current?o.current=!1:a>=r?(i(),l(!1)):a<t?l(!1):a+window.innerHeight<document.documentElement.scrollHeight&&l(!0))})),(0,p.S)((e=>{e.location.hash&&(o.current=!0,l(!1))})),{shown:n,scrollToTop:()=>r(0)}}({threshold:300});return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,l.Z)("clean-btn",r.k.common.backToTopButton,h.backToTopButton,e&&h.backToTopButtonShow),type:"button",onClick:t})}var f=n(91442),C=n(16550),g=n(87524),_=n(86668),k=n(11231),v=n(87462);const I=e=>a.createElement("svg",(0,v.Z)({xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},e),a.createElement("path",{d:"M15.3258 14.9258V9.07578L12.3758 12.0008L15.3258 14.9258ZM5.80078 19.7008C5.38411 19.7008 5.02995 19.5549 4.73828 19.2633C4.44661 18.9716 4.30078 18.6174 4.30078 18.2008V5.80078C4.30078 5.38411 4.44661 5.02995 4.73828 4.73828C5.02995 4.44661 5.38411 4.30078 5.80078 4.30078H18.2008C18.6174 4.30078 18.9716 4.44661 19.2633 4.73828C19.5549 5.02995 19.7008 5.38411 19.7008 5.80078V18.2008C19.7008 18.6174 19.5549 18.9716 19.2633 19.2633C18.9716 19.5549 18.6174 19.7008 18.2008 19.7008H5.80078ZM8.00078 19.0008V5.00078H5.80078C5.60078 5.00078 5.41745 5.08411 5.25078 5.25078C5.08411 5.41745 5.00078 5.60078 5.00078 5.80078V18.2008C5.00078 18.4008 5.08411 18.5841 5.25078 18.7508C5.41745 18.9174 5.60078 19.0008 5.80078 19.0008H8.00078ZM8.70078 19.0008H18.2008C18.4008 19.0008 18.5841 18.9174 18.7508 18.7508C18.9174 18.5841 19.0008 18.4008 19.0008 18.2008V5.80078C19.0008 5.60078 18.9174 5.41745 18.7508 5.25078C18.5841 5.08411 18.4008 5.00078 18.2008 5.00078H8.70078V19.0008Z",fill:"black"}));function S(e){let{onClick:t}=e;return a.createElement("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,l.Z)("inline-flex p-4 mx-6 justify-between"),onClick:t},"Collapse side panel ",a.createElement(I,null))}var N=n(59689),Z=n(902);const x=Symbol("EmptyContext"),T=a.createContext(x);function w(e){let{children:t}=e;const[n,l]=(0,a.useState)(null),o=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:l})),[n]);return a.createElement(T.Provider,{value:o},t)}var y=n(86043),L=n(48596),B=n(39960),A=n(72389);function H(e){let{categoryLabel:t,onClick:n}=e;return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function M(e){let{item:t,onItemClick:n,activePath:o,level:i,index:s,...d}=e;const{items:m,label:u,collapsible:b,className:p,href:h}=t,{docs:{sidebar:{autoCollapseCategories:E}}}=(0,_.L)(),f=function(e){const t=(0,A.Z)();return(0,a.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,c.Wl)(e):void 0),[e,t])}(t),C=(0,c._F)(t,o),g=(0,L.Mg)(h,o),{collapsed:k,setCollapsed:I}=(0,y.u)({initialState:()=>!!b&&(!C&&t.collapsed)}),{expandedItem:S,setExpandedItem:N}=function(){const e=(0,a.useContext)(T);if(e===x)throw new Z.i6("DocSidebarItemsExpandedStateProvider");return e}(),w=function(e){void 0===e&&(e=!k),N(e?null:s),I(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:l}=e;const o=(0,Z.D9)(t);(0,a.useEffect)((()=>{t&&!o&&n&&l(!1)}),[t,o,n,l])}({isActive:C,collapsed:k,updateCollapsed:w}),(0,a.useEffect)((()=>{b&&null!=S&&S!==s&&E&&I(!0)}),[b,S,s,I,E]),a.createElement("li",{className:(0,l.Z)(r.k.docs.docSidebarItemCategory,r.k.docs.docSidebarItemCategoryLevel(i),"menu__list-item",{"menu__list-item--collapsed":k},p)},a.createElement("div",{className:(0,l.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":g})},a.createElement(B.Z,(0,v.Z)({className:(0,l.Z)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!h&&b,"menu__link--active":C}),onClick:b?e=>{n?.(t),h?w(!1):(e.preventDefault(),w())}:()=>{n?.(t)},"aria-current":g?"page":void 0,"aria-expanded":b?!k:void 0,href:b?f??"#":f},d),u),h&&b&&a.createElement(H,{categoryLabel:u,onClick:e=>{e.preventDefault(),w()}})),a.createElement(y.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:k},a.createElement(Y,{items:m,tabIndex:k?-1:0,onItemClick:n,activePath:o,level:i+1})))}var F=n(13919),P=n(22457);const V={menuExternalLink:"menuExternalLink_NmtK"};function W(e){let{item:t,onItemClick:n,activePath:o,level:i,index:s,...d}=e;const{href:m,label:u,className:b,autoAddBaseUrl:p}=t,h=(0,c._F)(t,o),E=(0,F.Z)(m);return a.createElement("li",{className:(0,l.Z)(r.k.docs.docSidebarItemLink,r.k.docs.docSidebarItemLinkLevel(i),"menu__list-item",b),key:u},a.createElement(B.Z,(0,v.Z)({className:(0,l.Z)("menu__link",!E&&V.menuExternalLink,{"menu__link--active":h}),autoAddBaseUrl:p,"aria-current":h?"page":void 0,to:m},E&&{onClick:n?()=>n(t):void 0},d),u,!E&&a.createElement(P.Z,null)))}const R={menuHtmlItem:"menuHtmlItem_M9Kj"};function D(e){let{item:t,level:n,index:o}=e;const{value:i,defaultStyle:c,className:s}=t;return a.createElement("li",{className:(0,l.Z)(r.k.docs.docSidebarItemLink,r.k.docs.docSidebarItemLinkLevel(n),c&&[R.menuHtmlItem,"menu__list-item"],s),key:o,dangerouslySetInnerHTML:{__html:i}})}function U(e){let{item:t,...n}=e;switch(t.type){case"category":return a.createElement(M,(0,v.Z)({item:t},n));case"html":return a.createElement(D,(0,v.Z)({item:t},n));default:return a.createElement(W,(0,v.Z)({item:t},n))}}function z(e){let{items:t,...n}=e;return a.createElement(w,null,t.map(((e,t)=>a.createElement(U,(0,v.Z)({key:t,item:e,index:t},n)))))}const Y=(0,a.memo)(z),j={menu:"menu_Y1UP",menuWithAnnouncementBar:"menuWithAnnouncementBar_fPny"};function K(e){let{path:t,sidebar:n,className:o}=e;const i=function(){const{isActive:e}=(0,N.nT)(),[t,n]=(0,a.useState)(e);return(0,b.RF)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return a.createElement("nav",{"aria-label":(0,u.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,l.Z)("menu thin-scrollbar",j.menu,i&&j.menuWithAnnouncementBar,o)},a.createElement("ul",{className:(0,l.Z)(r.k.docs.docSidebarMenu,"menu__list")},a.createElement(Y,{items:n,activePath:t,level:1})))}const O="sidebar_mhZE",X="sidebarWithHideableNavbar__6UL",q="sidebarHidden__LRd",G="sidebarLogo_F_0z";function J(e){let{path:t,sidebar:n,onCollapse:o,isHidden:r}=e;const{navbar:{hideOnScroll:i},docs:{sidebar:{hideable:c}}}=(0,_.L)();return a.createElement("div",{className:(0,l.Z)(O,i&&X,r&&q)},i&&a.createElement(k.Z,{tabIndex:-1,className:G}),a.createElement(K,{path:t,sidebar:n}),a.createElement(S,{onClick:o}))}const Q=a.memo(J);var $=n(13102),ee=n(93163);const te=e=>{let{sidebar:t,path:n}=e;const o=(0,ee.e)();return a.createElement("ul",{className:(0,l.Z)(r.k.docs.docSidebarMenu,"menu__list")},a.createElement(Y,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&o.toggle(),"link"===e.type&&o.toggle()},level:1}))};function ne(e){return a.createElement($.Zo,{component:te,props:e})}const ae=a.memo(ne);function le(e){const t=(0,g.i)(),n="desktop"===t||"ssr"===t,l="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(Q,e),l&&a.createElement(ae,e))}const oe={expandButton:"expandButton_pI3x",expandButtonIcon:"expandButtonIcon_Vtwu"};function re(e){let{toggleSidebar:t}=e;return a.createElement("div",{className:oe.expandButton,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},a.createElement(I,{className:"rotate-180 self-start mt-[120px] "}))}const ie={docSidebarContainer:"docSidebarContainer_b6E3",docSidebarContainerHidden:"docSidebarContainerHidden_b3ry",sidebarViewport:"sidebarViewport_Xe31"};function ce(e){let{children:t}=e;const n=(0,d.V)();return a.createElement(a.Fragment,{key:n?.name??"noSidebar"},t)}function se(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:o}=e;const{pathname:i}=(0,C.TH)(),[c,s]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{c&&s(!1),!c&&(0,f.n)()&&s(!0),o((e=>!e))}),[o,c]);return a.createElement("aside",{className:(0,l.Z)(r.k.docs.docSidebarContainer,ie.docSidebarContainer,n&&ie.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(ie.docSidebarContainer)&&n&&s(!0)}},a.createElement(ce,null,a.createElement("div",{className:(0,l.Z)(ie.sidebarViewport,c&&ie.sidebarViewportHidden)},a.createElement(le,{sidebar:t,path:i,onCollapse:d,isHidden:c}),c&&a.createElement(re,{toggleSidebar:d}))))}const de={docMainContainer:"docMainContainer_gTbr",docMainContainerEnhanced:"docMainContainerEnhanced_Uz_u",docItemWrapperEnhanced:"docItemWrapperEnhanced_czyv"};function me(e){let{hiddenSidebarContainer:t,children:n}=e;const o=(0,d.V)();return a.createElement("main",{className:(0,l.Z)(de.docMainContainer,(t||!o)&&de.docMainContainerEnhanced)},a.createElement("div",{className:(0,l.Z)("container padding-top--md padding-bottom--lg",de.docItemWrapper,t&&de.docItemWrapperEnhanced)},n))}const ue={docPage:"docPage__5DB",docsWrapper:"docsWrapper_BCFX"};function be(e){let{children:t}=e;const n=(0,d.V)(),[l,o]=(0,a.useState)(!1);return a.createElement(m.Z,{wrapperClassName:ue.docsWrapper},a.createElement(E,null),a.createElement("div",{className:ue.docPage},n&&a.createElement(se,{sidebar:n.items,hiddenSidebarContainer:l,setHiddenSidebarContainer:o}),a.createElement(me,{hiddenSidebarContainer:l},t)))}var pe=n(4972),he=n(90197);function Ee(e){const{versionMetadata:t}=e;return a.createElement(a.Fragment,null,a.createElement(he.Z,{version:t.version,tag:(0,i.os)(t.pluginId,t.version)}),a.createElement(o.d,null,t.noIndex&&a.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function fe(e){const{versionMetadata:t}=e,n=(0,c.hI)(e);if(!n)return a.createElement(pe.default,null);const{docElement:i,sidebarName:m,sidebarItems:u}=n;return a.createElement(a.Fragment,null,a.createElement(Ee,e),a.createElement(o.FG,{className:(0,l.Z)(r.k.wrapper.docsPages,r.k.page.docsDocPage,e.versionMetadata.className)},a.createElement(s.q,{version:t},a.createElement(d.b,{name:m,items:u},a.createElement(be,null,i)))))}},4972:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var a=n(67294),l=n(95999),o=n(10833),r=n(81513);function i(){return a.createElement(a.Fragment,null,a.createElement(o.d,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),a.createElement(r.Z,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}}}]);