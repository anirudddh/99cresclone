/*! For license information please see 10Bundle.531549c817f40df7e688.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"JKa+":function(e,t,r){"use strict";r.d(t,"b",(function(){return s}));var n=r("RhWx"),o=r.n(n),a=r("KEM+"),i=r.n(a);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var s={current_page:null,previous_page:null,data_custom_info_global:null,isBatching:!1,batchQueue:[],batchedSetView:{},batchedSetLoad:{}};t.a=function e(t,r){switch(r.type){case"SET_PAGE_NAME":return u(u({},t),{},{previous_page:t.current_page,current_page:r.item.current_page});case"SET_DATA_CUSTOM_INFO":return u(u({},t),{},{data_custom_info_global:r.item.data_custom_info_global});case"SET_BATCH_TRACKING":return u(u({},t),{},{isBatching:!0});case"BATCH_TRACKING":var n=t.batchQueue;return u(u({},t),{},{batchQueue:[].concat(o()(n),[r.item])});case"EMPTY_BATCH_QUEUE":return u(u({},t),{},{batchQueue:t.batchQueue.length<5?[]:t.batchQueue.slice(5,t.batchQueue.length)});case"BATCHED_SET_VIEW":return t.batchedSetView[r.item]=r.item,t;case"BATCHED_SET_LOAD":return t.batchedSetLoad[r.item]=r.item,t;default:return t}}},WpSa:function(e,t,r){"use strict";r.d(t,"f",(function(){return u}));var n=r("T0aG"),o=r.n(n),a=r("cbiG"),i=r.n(a);function c(){c=function t(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",u=n.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(L){s=function e(t,r,n){return t[r]=n}}function l(e,t,r,n){var o=t&&t.prototype instanceof d?t:d,a=Object.create(o.prototype),i=new E(n||[]);return a._invoke=function(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return P()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=w(i,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=f(e,t,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(e,r,i),a}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(L){return{type:"throw",arg:L}}}e.wrap=l;var p={};function d(){}function h(){}function g(){}var y={};s(y,a,(function(){return this}));var m=Object.getPrototypeOf,b=m&&m(m(T([])));b&&b!==t&&r.call(b,a)&&(y=b);var O=g.prototype=d.prototype=Object.create(y);function v(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function _(e,t){function n(a,i,c,u){var s=f(e[a],e,i);if("throw"!==s.type){var l=s.arg,p=l.value;return p&&"object"==o()(p)&&r.call(p,"__await")?t.resolve(p.__await).then((function(e){n("next",e,c,u)}),(function(e){n("throw",e,c,u)})):t.resolve(p).then((function(e){l.value=e,c(l)}),(function(e){return n("throw",e,c,u)}))}u(s.arg)}var a;this._invoke=function(e,r){function o(){return new t((function(t,o){n(e,r,t,o)}))}return a=a?a.then(o,o):o()}}function w(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return p;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var n=f(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,p;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,p):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function E(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function T(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:P}}function P(){return{value:void 0,done:!0}}return h.prototype=g,s(O,"constructor",g),s(g,"constructor",h),h.displayName=s(g,u,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,s(e,u,"GeneratorFunction")),e.prototype=Object.create(O),e},e.awrap=function(e){return{__await:e}},v(_.prototype),s(_.prototype,i,(function(){return this})),e.AsyncIterator=_,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new _(l(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},v(O),s(O,u,"Generator"),s(O,a,(function(){return this})),s(O,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=T,E.prototype={constructor:E,reset:function e(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function e(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function e(t){if(this.done)throw t;var n=this;function o(e,r){return c.type="throw",c.arg=t,n.next=e,r&&(n.method="next",n.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function e(t,n){for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=n,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(c)},complete:function e(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),p},finish:function e(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),S(n),p}},catch:function e(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc===t){var o=n.completion;if("throw"===o.type){var a=o.arg;S(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function e(t,r,n){return this.delegate={iterator:T(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=void 0),p}},e}function u(e){return s.apply(this,arguments)}function s(){return(s=i()(c().mark((function e(t){return c().wrap((function e(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",t);case 1:case"end":return r.stop()}}),e)})))).apply(this,arguments)}},aykS:function(e,t,r){"use strict";r.r(t),r.d(t,"_post",(function(){return m})),r.d(t,"setpageName",(function(){return b})),r.d(t,"sendCsEvent",(function(){return O})),r.d(t,"sendSectionTracking",(function(){return v})),r.d(t,"sendSectionViewTracking",(function(){return j})),r.d(t,"sendSectionOnLoadTracking",(function(){return S})),r.d(t,"sendSectionClickTracking",(function(){return E})),r.d(t,"sendPageTracking",(function(){return _})),r.d(t,"sendPageOnLoadTracking",(function(){return w}));r("T0aG");var n=r("KEM+"),o=r.n(n),a=(r("cbiG"),r("4LIG")),i=r("nsO7"),c=r.n(i),u=r("WpSa"),s=r("PLrh");function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=[],d="",h="",g=new Set,y=1;function m(e,t){if("android"===a.a.OS||"ios"===a.a.OS)!function r(e){fetch("".concat(s.API_URL,"/99api/v24/clickstreamtracking/"),{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:e}).then((function(e){return e.json()})).then((function(e){})).catch((function(e){}))}(t);else{var n=function r(){var e=null;try{e=new XMLHttpRequest}catch(t){}return e}();if(n){n.open("POST",e,!0);var o=t;n.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),n.send(o)}}}var b=function e(t){h=t},O=function e(t,r,n,o){if("PAGE_VIEW"===t.event){""===h&&t.page.length>0&&(h=t.page);var i=t.event+" "+t.stage+" "+h;if(g.has(i))return;if(g.clear(),g.add(i),"web"==a.a.OS)return}if(""==t.page&&""!=h&&(t.page=h),"SECTION_VIEW"===t.event){var c=t.event+" "+t.stage+" "+t.section;if(g.has(c))return;g.add(c)}"web"==a.a.OS&&""==h&&(h=document.getElementsByTagName("body")[0].getAttribute("data-label"));var s={};s.action={page:t.page||h,event:t.event||"",stage:t.stage||"FINAL",referrer_section:t.referrer_section||"",section:t.section||""},t.trigger&&(s.action=f(f({},s.action),{},{trigger:t.trigger})),t.workflow&&(s.action=f(f({},s.action),{},{workflow:t.workflow})),t.source&&(s.action=f(f({},s.action),{},{source:t.source}));var l={isRnSDK:"true"};s.custom_object=Object.assign({},l),n&&(n.search&&Object.getOwnPropertyNames(n.search).length&&(s.search=n.search),n.payload&&Object.getOwnPropertyNames(n.payload).length&&(s.payload=n.payload),n.custom_object&&Object.getOwnPropertyNames(n.custom_object).length&&(s.custom_object=Object.assign({},n.custom_object,l))),"ios"===a.a.OS&&(s.platform="IOS"),"android"===a.a.OS&&(s.platform="Android"),s.date_time=function b(){return(new Date).getTime()/1e3}(),"web"==a.a.OS&&(document.referrer?s.referrer=encodeURIComponent(document.referrer):s.referrer="NOT_EXIST",window.location.href?s.current_url=encodeURIComponent(window.location.href):s.current_url="NOT_EXIST"),"ios"!==a.a.OS&&"android"!==a.a.OS||(s.referrer=r,s.current_url=t.page);var O="/do/clickStreamTracking/ClickStream/trackData";if("android"===a.a.OS&&(O="http://99services.99.jsb9.net/clickstream-validation-service/tracking/app"),"web"===a.a.OS)if(p.push(s),o)for(var v=0;v<p.length;v++){var _;(null===(_=d)||void 0===_?void 0:_.length)>0?d=d+","+JSON.stringify(p[v]):d+=JSON.stringify(p[v])}else d="trackingData[]="+JSON.stringify(p);if("android"===a.a.OS||"ios"===a.a.OS)Object(u.getAppInfo)().then((function(e){s.visitor_id=e.clientId.toString();var t={};t.csTrackingModel=s,t.id=y,y+=1,p.push(t),d="data="+JSON.stringify(p),m(O,d),p=[]}));else{if(o){p=[];var w=d;return d="",w}m(O,d),p=[],d=""}return null},v=c.a.curry((function(e,t,r,n,o,a,i,c){return O({page:r,stage:t,event:e,section:o,trigger:i.trigger,workflow:i.workflow,source:i.source},n,a,c)}));function _(e,t,r,n,o){v("SRP"===e||"NPSRP"===e||"GROUP_SRP"===e||"NOTIFICATION_PROPERTY_LIST"===e?"SEARCH":"PAGE_VIEW","FINAL",e,t,r,n,o,!1)}function w(e,t,r,n,o){"SRP"===e||"NPSRP"===e||"GROUP_SRP"===e||"NOTIFICATION_PROPERTY_LIST"===e?v("SEARCH","LOAD",e,t,r,n,o,!1):(h=e,v("PAGE_VIEW","LOAD",e,t,r,n,o,!1))}var j=v("SECTION_VIEW","FINAL"),S=v("SECTION_VIEW","LOAD"),E=v("CLICK","FINAL")},h0LN:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return c}));var n=r("ERkP"),o=r.n(n),a=Object(n.createContext)(),i=function e(t){var r=t.reducer,i=t.initialState,c=t.children;return o.a.createElement(a.Provider,{value:Object(n.useReducer)(r,i)},c)},c=function e(){return Object(n.useContext)(a)}},jYfG:function(e,t,r){"use strict";r.d(t,"a",(function(){return _}));var n=r("97Jx"),o=r.n(n),a=r("KEM+"),i=r.n(a),c=r("ddV6"),u=r.n(c),s=r("ERkP"),l=r.n(s),f=r("i4Oy"),p=r("4LIG"),d=r("UVub"),h=r("8C0w"),g=r("aWzz"),y=r.n(g),m=r("h0LN"),b=r("aykS");function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var _=function e(t){var r=t.type,n=!!t.enableLoadTracking&&t.enableLoadTracking,a=Object(m.b)(),i=u()(a,2),c=i[0],g=c.previous_page,y=c.current_page,O=c.data_custom_info_global,_=c.isBatching,w=c.batchedSetView,j=c.batchedSetLoad,S=i[1],E=Object(s.useRef)({rectTop:0,rectBottom:0,rectWidth:0}),T=Object(s.useState)(!1),P=u()(T,2),L=P[0],k=P[1],N=Object(s.useRef)(),I={},A=function e(){t.trigger&&(I=v(v({},I),{},{trigger:t.trigger})),t.workflow&&(I=v(v({},I),{},{workflow:t.workflow})),t.source&&(I=v(v({},I),{},{source:t.source}))},C=function e(){var r={},n={},o={};t.data_custominfo_global?r=JSON.parse(t.data_custominfo_global):O&&(r=JSON.parse(O)),t.data_custominfo&&(o=JSON.parse(t.data_custominfo)),r.srp_clickstream_object&&(n=r.srp_clickstream_object);var a=Object.assign({},r.custom_object,n.custom_object,o.custom_object);if(n.payload&&o.payload)if(n.payload.search_results&&o.payload.search_results)var i=Object.assign({search_results:Object.assign({},n.payload.search_results,o.payload.search_results)});else if(r.payload)if(r.payload.property&&o.payload.property)i=Object.assign({property:Object.assign({},r.payload.property,o.payload.property)});else if(r.payload.project&&o.payload.project)i=Object.assign({project:Object.assign({},r.payload.project,o.payload.project)});else if(r.payload.user&&o.payload.user)i=Object.assign({user:Object.assign({},r.payload.user,o.payload.user)});else i=Object.assign({},r.payload,n.payload,o.payload);else i=Object.assign({},r.payload,n.payload,o.payload);else if(r.payload&&r.payload.recommendation&&o.payload&&o.payload.recommendation)i=Object.assign({recommendation:Object.assign({},r.payload.recommendation,o.payload.recommendation)});else i=Object.assign({},r.payload,n.payload,o.payload);return{custom_object:a,payload:i,search:Object.assign({},n.search,o.search)}},x=function e(){var r=f.a.get("window"),n=E.current,o=n.rectBottom,a=n.rectTop,i=n.rectWidth,c=.7*(o-a),u=0!=o&&a>=-c&&o<=r.height+c&&i>0&&i<=r.width;!L&&u&&(k(u),A(),"true"===t.topmost&&function e(r,n){var o=Object(b.sendSectionViewTracking)(y,g,t.section_name,r,n,_);null!=o&&!w.hasOwnProperty(t.section_name)&&_&&(S({type:"BATCH_TRACKING",item:o}),S({type:"BATCHED_SET_VIEW",item:t.section_name}))}(C(),I))};Object(s.useEffect)((function(){(t.page_name&&function e(){S({type:"SET_PAGE_NAME",item:{current_page:t.page_name}})}(),t.data_custominfo_global&&function e(){S({type:"SET_DATA_CUSTOM_INFO",item:{data_custom_info_global:t.data_custominfo_global}})}(),A(),t.section_name&&"true"===t.topmost)&&function e(r,o){if("web"!==p.a.OS||n){var a=Object(b.sendSectionOnLoadTracking)(y,g,t.section_name,r,o,_);null!=a&&!j.hasOwnProperty(t.section_name)&&_&&(S({type:"BATCH_TRACKING",item:a}),S({type:"BATCHED_SET_LOAD",item:t.section_name}))}}(C(),I)}),[]),Object(s.useEffect)((function(){t.page_name&&Object(b.setpageName)(t.page_name)}),[]),Object(s.useEffect)((function(){if("true"===t.topmost&&!L){var e=setInterval((function(){var e;null===N||void 0===N||null===(e=N.current)||void 0===e||e.measureInWindow((function(e,t,r,n){E.current={rectTop:t,rectBottom:t+n,rectWidth:e+r}})),x()}),t.delay);return function(){return clearInterval(e)}}}));var R=function e(r){A(),function e(r,n){Object(b.sendSectionClickTracking)(y,g,t.section_name,r,n,!1)}(C(),I),t.passedFunction&&t.passedFunction()&&t.passedFunction(r)};return"Switch"==t.displayName?l.a.createElement(d.a,null,l.a.createElement(h.a,o()({collapsable:!1,ref:N},t,{onValueChange:R}),t.children)):"View"===r.displayName?l.a.createElement(r,o()({collapsable:!1,ref:N},t,{onStartShouldSetResponder:R}),t.children):"Switch"===r.displayName?l.a.createElement(d.a,null,l.a.createElement(r,o()({collapsable:!1,ref:N},t,{onValueChange:R}),t.children)):l.a.createElement(r,o()({collapsable:!1,ref:N},t,{onPress:R}),t.children)};_.propTypes={delay:y.a.number,children:y.a.node,tag:y.a.string,section_name:y.a.string,page_name:y.a.string,referrer:y.a.string,moreParams:y.a.object,data_custominfo_global:y.a.string,data_custominfo:y.a.string,onPress:y.a.func,topmost:y.a.string,trigger:y.a.string,workflow:y.a.string,source:y.a.string},_.defaultProps={delay:100}}}]);