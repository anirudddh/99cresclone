(window.webpackJsonp=window.webpackJsonp||[]).push([[819],{b72m:function(e,a,t){"use strict";t.r(a);var n=t("KEM+"),o=t.n(n),l=t("97Jx"),c=t.n(l),r=t("ddV6"),s=t.n(r),i=t("ERkP"),m=t.n(i),d=t("yMbT"),p=t("JV35"),u=t("Do4k"),N=t("pfcs"),g=t("NXRc"),E=t("J2YR"),b=t.n(E),f=t("QnEd"),v=t("3LCL");a.default=function e(a){var t=a.exceptionPages,n=a.pageName,l=a.userData,r=a.initials,E=a.dropdownOpen,_=a.name,y=a.profileDrop,C=a.toggleDropdownOpen,w=a.userType,O=a.ownerSellerOptions,k=a.listingCount,h=a.modifyProfileLink,L=a.openChangePassword,P=a.doLogout,S=a.cookies,W=a.dropDownOpenRecent,A=a.ownerActivityOptions,I=a.closeOverlay,x=a.open,R=a.showLoginRegisterWidget,j=a.OwnerPlans,M=a.profileId,D=a.prodId,J=a.modifiedData,K=a.insideMenuShow,F=a.dropDownOpen,B=a.hamburgerConfig,G=a.openFeedbackForm,H=Object(i.useState)(!1),T=s()(H,2),Y=T[0],U=T[1];Object(i.useEffect)((function(){Y&&X.current.scrollTo(0,0)}),[Y]);var X=Object(i.useRef)(null);return m.a.createElement("div",{className:"".concat(b.a.sideMenu," ").concat(t.includes(n)?b.a.sideMenuXID:""),"data-open":"close",id:"hamburgerMenu"},"undefined"!==typeof l&&(Object.keys(l||{})||[]).length?m.a.createElement("div",{className:b.a.userInfoBox},m.a.createElement("div",{className:"".concat(b.a.nameInitial," f10 successFont")},r),m.a.createElement("div",{className:b.a.nameWrap},m.a.createElement("div",{className:"".concat(b.a.point," ").concat(E?b.a.arrowUp:""," list_header_semiBold Ng800"),onClick:function e(a){return a.stopPropagation(),y(a,C,w)}},_),m.a.createElement("div",{className:b.a.dropDownBox,"data-open":"close",id:"profileDropDown"},m.a.createElement("ul",null,"O"==w?O.map((function(e,a){var t;return m.a.createElement("li",{"data-label":"O"==(null===l||void 0===l||null===(t=l.user)||void 0===t?void 0:t.class)&&1==a?g.a.HAMBURGER_LAYER_USER_ICON_LINK_OWNER_PLANS:"LINK","data-custominfo":JSON.stringify({custom_object:{url:"".concat(d.b).concat(e.url)}}),className:"pageComponent caption_strong_large",style:"O"==w&&1==a?{fontWeight:"600"}:{}},m.a.createElement("a",{className:"Ng800",href:"".concat(d.b).concat(e.url)},e.label),1==a&&m.a.createElement("div",{className:b.a.dot}))})):null,"O"==w?null:m.a.createElement("li",{"data-label":"LINK","data-custominfo":JSON.stringify({custom_object:{url:"".concat(d.b,"/recent-activity")}}),className:"pageComponent caption_strong_large"},m.a.createElement("a",{className:"Ng800",href:"".concat(d.b,"/recent-activity")},"Your Activity")),"O"!=w&&k?m.a.createElement("li",{"data-label":"LINK","data-custominfo":JSON.stringify({custom_object:{url:"".concat(d.b,"/do/my99acres/mainpage")}}),className:"pageComponent caption_strong_large"},m.a.createElement("a",{className:"Ng800",href:"".concat(d.b,"/do/my99acres/mainpage")},"My 99acres")):null,m.a.createElement("li",{"data-label":"LINK","data-custominfo":JSON.stringify({custom_object:{url:h}}),className:"pageComponent caption_strong_large"},m.a.createElement("a",{className:"Ng800",href:h},"O"==w?"Manage Profile":"Modify Profile")),m.a.createElement("li",{"data-label":"CHANGE_PASSWORD",className:"pageComponent caption_strong_large"},m.a.createElement("a",{className:"".concat(b.a.point," Ng800"),onClick:function e(a){return a.stopPropagation(),L(a)}},"Change Password")),m.a.createElement("li",{"data-label":"LOGOUT",className:"pageComponent caption_strong_large"},m.a.createElement("a",{className:"".concat(b.a.point," Ng800"),onClick:function e(a){return a.stopPropagation(),P({cookies:S})}},"Logout"))),"O"==w?m.a.createElement("div",null,m.a.createElement("div",{class:"spacer20"}),m.a.createElement("div",{className:"".concat(b.a.bd_gry," spacer20 ")}),m.a.createElement("div",{className:b.a.labelWrap,onClick:function e(a){return a.stopPropagation(),W(a,C)}},m.a.createElement("div",{className:"".concat(b.a.downwardArrow," body_med Ng500 "),style:{fontWeight:"600",cursor:"pointer"}},"My Activity"),m.a.createElement("div",{className:b.a.dropDown},m.a.createElement("ul",{style:{paddingTop:"0px"}},A.map((function(e){return m.a.createElement("li",{style:{cursor:"pointer",paddingLeft:"12px"},className:"caption_strong_large Ng800"},m.a.createElement("a",{"data-label":e.label,onClick:function a(t){t.stopPropagation(),window.open(e.url)},className:"pageComponent Ng800"},e.label))})))))):null)),m.a.createElement("div",{className:b.a.crossIcn,onClick:function e(a){return a.stopPropagation(),I(),x(a)}},m.a.createElement("i",{className:"iconS_Common_24 icon_close"}))):m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"P500 ".concat(b.a.loginRegister),onClick:function e(a){return a.stopPropagation(),R()}},m.a.createElement("i",{style:{marginRight:"8px"},className:"icon_grayProf  iconS_Common_24"}),m.a.createElement("div",null,"LOGIN / REGISTER"),m.a.createElement("div",{style:{display:"inline-block"},className:b.a.crossIcn,onClick:function e(a){return a.stopPropagation(),I(),x(a)}},m.a.createElement("i",{className:"iconS_Common_24 icon_close"})))),m.a.createElement("div",{ref:X,style:Y?{overflowX:"hidden",overflowY:"hidden"}:{},className:"".concat(E?b.a.menuBoxWrapNewHeight:""," ").concat(b.a.menuBoxWrap," ").concat("O"==w?b.a.menuBoxWrap2:"")},m.a.createElement("div",{className:b.a.postYourProperty,style:"O"==w?{paddingLeft:"50px"}:{}},m.a.createElement("div",{"data-label":"LINK","data-custominfo":JSON.stringify({custom_object:{url:"".concat(d.b,"/postproperty/")}}),className:"pageComponent body_med Ng800"},m.a.createElement("a",{className:"Ng800 semi",href:"".concat(d.b,"/postproperty/")},"Post Property")),m.a.createElement(v.a,null)),"O"==w?m.a.createElement("div",{className:b.a.postYourProperty2},m.a.createElement("ul",{className:"".concat(b.a.boshover," body_med ")},j.map((function(e){return m.a.createElement("li",null,m.a.createElement("a",c()({className:"pageComponent"},Object(f.c)(p.f.HOMEPAGE_HAMBURGER_MENU_OWNER_PLANS_ON_CLICK,{profileId:M,prodId:D}),{style:{color:e.color},href:"".concat(d.b).concat(e.url)}),e.label,e.newBadges?m.a.createElement(u.default,{style:{marginLeft:"9px",borderRadius:"2px"},variant:"primaryRegular"},"NEW"):null))})))):m.a.createElement("div",{className:b.a.postYourProperty},m.a.createElement("div",{className:"body_med Ng800"},m.a.createElement("a",{"data-label":"LINK",className:"pageComponent Ng800","data-custominfo":JSON.stringify({custom_object:{url:"".concat(d.b,"/do/buyourservices")}}),href:"".concat(d.b,"/do/buyourservices")},"Explore our Services"))),m.a.createElement("div",{className:b.a.divisionMenuWrap},Object.keys(J).map((function(e){var a=J[e],t=((e||"").split(":")||["",""])[1]||"NA";return m.a.createElement("div",{className:b.a.labelWrap},m.a.createElement("div",{className:"body_med Ng800 ",onClick:function e(a){return a.stopPropagation(),K("open")}},t),m.a.createElement("div",{className:b.a.insideMenuWrap,"data-open":"close",id:"buyerMenuWrap"},m.a.createElement("div",{className:b.a.headWrap},m.a.createElement("i",{className:"iconS_Common_24 icon_backArrow",onClick:function e(a){return a.stopPropagation(),K("close")}}),m.a.createElement("div",{className:"section_header_bold Ng800 "},t)),(a||[]).map((function(e){var a=e.label,n=void 0===a?"":a,o=e.children,l=void 0===o?[]:o;return m.a.createElement("div",{key:n,className:"pageComponent ".concat(b.a.labelWrap),onClick:function e(a){return a.stopPropagation(),F(a)},"data-label":n,"data-custominfo":JSON.stringify({custom_object:{tab:t}})},m.a.createElement("div",{className:"body_med Ng500 "},n,"Insights"==n?m.a.createElement(u.default,{style:{marginLeft:"6px",verticalAlign:"text-bottom",backgroundColor:"#004E8F"},variant:"primaryRegular"},"NEW"):null),m.a.createElement("div",{className:b.a.dropDown},m.a.createElement("ul",null,(l||[]).map((function(e,a){e.count;var n=e.title,o=void 0===n?"":n,l=e.url,c=void 0===l?"":l,r=e.isNew,s=void 0!==r&&r,i=e.backgroundColor,d=e.variant,p=void 0===d?"errorRegular":d;return c?"BOSS Plans"===o&&"A"!==w?null:m.a.createElement("li",{key:a,className:"caption_strong_large Ng800"},m.a.createElement("span",{"data-label":"LINK","data-custominfo":JSON.stringify({custom_object:{url:c,title:o,tab:t}}),onClick:function e(a){a.stopPropagation(),window.open(c,"_blank")},className:"pageComponent Ng800"},o,s?m.a.createElement(u.default,{style:{marginLeft:"6px",verticalAlign:"text-bottom",backgroundColor:i},variant:p},"NEW"):null)):null})))))}))))}))),Object.keys(B).map((function(e){var a=B[e];return Array.isArray(a)?m.a.createElement("div",{className:b.a.divisionMenuWrap},a.map((function(e){return e.isMultiLevel?m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:b.a.labelWrap},m.a.createElement("div",{className:"body_med Ng800 ",onClick:function a(t){t.stopPropagation(),"Articles & News"===(e||{}).label&&U(!0),K("open")}},e.label),m.a.createElement("div",{className:b.a.insideMenuWrap,"data-open":"close",id:"buyerMenuWrap"},m.a.createElement("div",{className:b.a.headWrap},m.a.createElement("i",{className:"iconS_Common_24 icon_backArrow",onClick:function e(a){return a.stopPropagation(),U(!1),K("close")}}),m.a.createElement("div",{className:"section_header_bold Ng800 "},e.label)),(e.children||[]).map((function(e){var a=e.url,t=e.label,n=void 0===t?"":t,o=e.children,l=void 0===o?[]:o;return a?m.a.createElement("div",{className:"".concat(b.a.labelWrap," ").concat(b.a.noArrow)},m.a.createElement("div",{className:"body_med Ng800 "},m.a.createElement("span",{"data-label":"LINK","data-custominfo":JSON.stringify({custom_object:{url:a}}),onClick:function e(t){t.stopPropagation(),window.open(a,"_blank")},className:"pageComponent Ng800"},n))):m.a.createElement("div",{className:b.a.labelWrap,onClick:function e(a){return a.stopPropagation(),F(a)}},m.a.createElement("div",{className:"body_med Ng500 "},n),m.a.createElement("div",{className:b.a.dropDown},m.a.createElement("ul",null,(l||[]).map((function(e){e.count;var a=e.label,t=void 0===a?"":a,n=e.url,o=void 0===n?"":n;e.isNew;return m.a.createElement("li",{className:"caption_strong_large Ng800"},m.a.createElement("span",{onClick:function e(a){a.stopPropagation(),window.open(o,"_blank")},"data-custominfo":JSON.stringify({custom_object:{url:o}}),"data-label":"LINK",className:"pageComponent Ng800"},t))})))))}))))):e.isDropdown?m.a.createElement("div",{className:b.a.labelWrap,onClick:function e(a){return a.stopPropagation(),F(a)}},m.a.createElement("div",{className:"pageComponent ".concat(b.a.downwardArrow," body_med Ng500 "),"data-custominfo":JSON.stringify({custom_object:{tab:"Home Loans"}})},e.label,"Insights"==e.label?m.a.createElement(u.default,{style:{marginLeft:"6px",verticalAlign:"text-bottom",backgroundColor:"#004E8F"},variant:"primaryRegular"},"NEW"):null),m.a.createElement("div",{className:b.a.dropDown},m.a.createElement("ul",null,e.list.map((function(e){var a=e.isNew,t=void 0!==a&&a,n=e.onClick,o=(e.count,e.title),l=void 0===o?"":o,c=e.url,r=void 0===c?"":c;return r?m.a.createElement("li",{key:r,className:"caption_strong_large Ng800"},"showFeedback"===n?m.a.createElement("a",{"data-label":"SHOW_FEEDBACK_DIALOG",onClick:G,className:"pageComponent Ng800"},l):m.a.createElement("a",{"data-label":"LINK","data-custominfo":JSON.stringify({custom_object:{url:r,tab:"Home Loans"}}),target:"_blank",className:"pageComponent Ng800",href:r},l),t?m.a.createElement(u.default,{style:{marginLeft:"6px",verticalAlign:"text-bottom"},variant:"successLargeSubtle"},"NEW"):null):null}))))):m.a.createElement("div",{className:"".concat(b.a.labelWrap," ").concat(b.a.noArrow)},m.a.createElement("div",{className:"body_med Ng800"},m.a.createElement("a",{"data-label":"LINK","data-custominfo":JSON.stringify({custom_object:{url:e.url}}),className:"pageComponent Ng800",href:e.url},e.label,e.isNew&&"Rental Agreement Service"==e.label?m.a.createElement(u.default,{style:{marginLeft:"6px",verticalAlign:"text-bottom"},variant:"successLargeSubtle"},"NEW"):e.isNew?m.a.createElement(u.default,{style:{marginLeft:"6px",verticalAlign:"text-bottom"},variant:"errorRegular"},"NEW"):null)))}))):null}))),m.a.createElement("div",{className:b.a.ham_footer},m.a.createElement("div",{className:b.a.hamSearch},m.a.createElement(N.a,null)),m.a.createElement("div",{className:"spacer16"}),m.a.createElement("div",{className:"caption_strong_medium ".concat(b.a.tollFree)},"Toll Free Number: 1800 41 99099. ",m.a.createElement("br",null),"For international numbers ",m.a.createElement("a",o()({className:"pageComponent Ng800","data-label":"LINK","data-custominfo":JSON.stringify({custom_object:{url:"/faq/"}}),href:"/faq/"},"className","pageComponent hyperlinks_small"),"click here"))))}}}]);