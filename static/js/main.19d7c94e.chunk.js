(this["webpackJsonptweries-app"]=this["webpackJsonptweries-app"]||[]).push([[0],[,,,,,,,function(e){e.exports=JSON.parse('{"domain":"dev-17-x3zfb.auth0.com","clientId":"iqgFXkcTFo9l80i7llzcurmrfgVsn3TZ"}')},,,function(e){e.exports=JSON.parse('{"a":"0.19.0"}')},,,,function(e,t,n){e.exports=n(29)},,,,,,function(e,t,n){},function(e,t,n){},,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(9),o=n(2),i=n(1),u=n.n(i),l=n(3),s=n(5),f=n.n(s),p=n(10),h="https://tweries-api.herokuapp.com",d="SPACE_AFTER_PUNCTUATION_V1",v=";;",m="\n";function g(){return(g=Object(l.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(h,"/api/v1/health"));case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var E=function(){return g.apply(this,arguments)};function b(){return(b=Object(l.a)(u.a.mark((function e(t){var n,a,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.items,a=t.userId,e.next=3,fetch("".concat(h,"/api/v1/tweetstorm"),{body:JSON.stringify({items:n,userId:a}),headers:{"Content-Type":"application/json"},method:"POST"});case 3:return r=e.sent,e.next=6,r.json();case 6:return c=e.sent,e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var S=function(e){return b.apply(this,arguments)};n(20);var w=function(e){var t=e.healthy,n=e.version;return r.a.createElement("footer",{className:f()({healthy:t})},r.a.createElement("p",null,"Tweries v",n," \xa9 ",(new Date).getFullYear()," "),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://twitter.com/TweriesApp",rel:"noopener noreferrer",target:"_blank"},"@TweriesApp")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/Tweries",rel:"noopener noreferrer",target:"_blank"},"github.com/Tweries"))))},O=(n(21),{custom:"custom",newline:"newline"});function T(e){var t=e.disabled,n=e.onChange,a=e.value;return r.a.createElement("input",{className:"App__linefeed","data-testid":"linefeed",disabled:t,maxLength:"4",onChange:n,placeholder:v,size:"4",value:a})}var y=function(e){e.feature;var t=e.onChange,n=Object(a.useState)(O.newline),c=Object(o.a)(n,2),i=c[0],u=c[1],l=Object(a.useState)(v),s=Object(o.a)(l,2),f=s[0],p=s[1];return r.a.createElement("ul",{className:"LinefeedPicker__ul"},r.a.createElement("li",{className:"LinefeedPicker__li"},r.a.createElement("input",{"data-testid":"newline",defaultChecked:!0,name:"linefeed",onChange:function(){u(O.newline),t(m)},type:"radio",value:"newline"}),r.a.createElement("label",{htmlFor:"newline"},"Newline(s)")),r.a.createElement("li",{className:"LinefeedPicker__li"},r.a.createElement("input",{"data-testid":"custom",name:"linefeed",onChange:function(){u(O.custom),t(f)},type:"radio",value:"custom"}),r.a.createElement("label",{htmlFor:"louie"},r.a.createElement(T,{disabled:i!==O.custom,onChange:function(e){var n=e.target.value;p(n),t(n)},value:f}))))},_=n(11),k=n(4),j=n.n(k),C=280,A="_/_";function x(e,t){var n=["-","\u2013",".",",",";","!","?"].map((function(e){return{key:e,value:j.a.lastIndexOf(t,e)}})).sort((function(e,t){return e.value>t.value?-1:e.value<t.value?1:0}))[0];return-1!==n.value&&function(e,t,n){return!e.active(d)||" "===j.a.substr(n,t+1,1)}(e,n.value,t)&&(t=j.a.substr(t,0,n.value+1)),t}function N(e,t){return void 0===e&&void 0===t?A:"".concat(e+1,"/").concat(t)}var I=function(e){var t=e.feature,n=e.hashtags,a=e.linefeed,r=e.source;null!==a&&void 0!==a&&""!==a||(a=v);for(var c=function(e,t){var n=t.slice();return e===m&&(n=n.replace(/\n+/g,m)),n}(a,r),o=[];0!==c.length;){var i=void 0,u=void 0;u=n.length>0?C-n.length-N().length-2:C-N().length-1,-1!==(i=j.a.prune(c,u,"")).indexOf(a)?(i=j.a.substr(i,0,i.indexOf(a)),c=j.a.substr(c,i.length+a.length)):(i=x(t,i),c=j.a.substr(c,i.length+1)),o.push(i)}return o.map((function(e,t){var a;return{length:(a=n.length>0?"".concat(j.a.trim(e)," ").concat(n," ").concat(N(t,o.length)):"".concat(j.a.trim(e)," ").concat(N(t,o.length))).length,tweet:a}}))};var H=function(e){var t=e.feature,n=e.hashtags,a=void 0===n?"":n,r=e.linefeed,c=void 0===r?v:r,o=e.source,i=void 0===o?"":o;return{feature:t,hashtags:a,healthy:!1,items:I({feature:t,hashtags:a,linefeed:c,source:i}),linefeed:c,notification:null,source:i,userId:null}};function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(n,!0).forEach((function(t){Object(_.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var D={CHANGE_HASHTAGS:"CHANGE_HASHTAGS",CHANGE_LINEFEED:"CHANGE_LINEFEED",CHANGE_SOURCE:"CHANGE_SOURCE",DISMISS_TOAST:"DISMISS_TOAST",RESET_TWEETSTORM:"RESET_TWEETSTORM",SET_HEALTHY:"SET_HEALTHY",SET_USER_ID:"SET_USER_ID"};var G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H({}),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D.CHANGE_HASHTAGS:return P({},e,{hashtags:t.value,items:I({feature:e.feature,hashtags:t.value,linefeed:e.linefeed,source:e.source})});case D.CHANGE_LINEFEED:return P({},e,{linefeed:t.value,items:I({feature:e.feature,hashtags:e.hashtags,linefeed:t.value,source:e.source})});case D.CHANGE_SOURCE:return P({},e,{items:I({feature:e.feature,hashtags:e.hashtags,linefeed:e.linefeed,source:t.value}),source:t.value});case D.DISMISS_TOAST:return P({},e,{notification:null});case D.RESET_TWEETSTORM:return P({},H({}),{healthy:e.healthy,notification:t.value,userId:e.userId});case D.SET_HEALTHY:return P({},e,{healthy:t.value});case D.SET_USER_ID:return P({},e,{userId:t.value});default:return e}},U=n(13),L=n(12),W=n.n(L),F=function(){return window.history.replaceState({},document.title,window.location.pathname)},M=r.a.createContext(),J=function(){return Object(a.useContext)(M)},Y=(n(25),function(e){var t=e.dispatch,n=J(),c=n.isAuthenticated,o=n.loginWithRedirect,i=n.logout,u=n.user;return Object(a.useEffect)((function(){c&&t({type:D.SET_USER_ID,value:u.sub})}),[t,c,u]),r.a.createElement("header",{className:"NavBar"},c?[r.a.createElement("img",{alt:u.name,key:"img",src:u.picture}),r.a.createElement("span",{key:"span"},r.a.createElement("span",{"aria-label":"hello",role:"img"},"\ud83d\udc4b")," ",u.name),r.a.createElement("button",{"data-testid":"logout",key:"button",onClick:function(){return i({returnTo:window.location.href})}},"Log out")]:r.a.createElement("button",{"data-testid":"login",onClick:function(){return o({})}},"Log in"))});n(26);var z=function(e){var t=e.notification,n=e.onClick;if(t){var a=t.message,c=t.type;return r.a.createElement("div",{className:f()("ToastNotification",{"ToastNotification--success":"success"===c,"ToastNotification--danger":"danger"===c})},r.a.createElement("span",null,a),r.a.createElement("button",{"data-testid":"dismiss",onClick:n},"\xd7"))}return null};var B=function(e,t){var n=Object(a.useState)((function(){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(a){return console.log(a),t}})),r=Object(o.a)(n,2),c=r[0],i=r[1];return[c,function(t){try{var n=t instanceof Function?t(c):t;i(n),window.localStorage.setItem(e,JSON.stringify(n))}catch(a){console.log(a)}}]};n(27);var V=function(e){var t=e.length,n=0===t?"":t;return r.a.createElement("small",{className:"App__counter"},n)};var q=function(e){var t=e.feature,n=e.reducer,c=J(),i=c.isAuthenticated,s=c.loading;Object(a.useEffect)((function(){function e(){return(e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E();case 3:t=e.sent,console.log(t),G({type:D.SET_HEALTHY,value:!0}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0),G({type:D.SET_HEALTHY,value:!1});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var h=B("hashtags",""),d=Object(o.a)(h,2),v=d[0],g=d[1],b=B("source",""),O=Object(o.a)(b,2),T=O[0],_=O[1],k=Object(a.useReducer)(n,H({feature:t,hashtags:v,linefeed:m,source:T})),j=Object(o.a)(k,2),C=j[0],A=C.hashtags,x=C.healthy,N=C.items,I=C.notification,R=C.source,P=C.userId,G=j[1];function U(){return!i||!N.length>0||!x}return s?r.a.createElement("article",null,"..."):r.a.createElement("article",null,r.a.createElement(Y,{dispatch:G}),r.a.createElement("h1",null,"Tweries"),r.a.createElement("form",{onSubmit:function(e){return e.preventDefault()}},r.a.createElement("small",{className:"App__small"},"Start typing, to insert a break prior to reaching 280 characters please use"," ",r.a.createElement(y,{feature:t,onChange:function(e){G({type:D.CHANGE_LINEFEED,value:e})}})),r.a.createElement("textarea",{"data-testid":"source",placeholder:"What's happening?",rows:8,value:R,onChange:function(e){G({type:D.CHANGE_SOURCE,value:e.target.value}),_(e.target.value)}}),r.a.createElement(V,{length:R.length}),r.a.createElement("textarea",{"data-testid":"hashtags",onChange:function(e){G({type:D.CHANGE_HASHTAGS,value:e.target.value}),g(e.target.value)},placeholder:"#hashtags",rows:1,type:"text",value:A}),r.a.createElement(V,{length:A.length}),r.a.createElement("ul",{"data-testid":"list"},N.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("textarea",{readOnly:!0,rows:4,value:e.tweet}),r.a.createElement(V,{length:e.length}))}))),r.a.createElement("button",{className:f()("App__button",{"App__button--disabled":U()}),"data-testid":"tweet",disabled:U(),onClick:Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S({items:N,userId:P});case 3:t=e.sent,console.log(t),G({type:D.RESET_TWEETSTORM,value:{message:"The tweetstorm has been created successfully.",type:"success"}}),_(""),g(""),e.next=16;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0),G({type:D.RESET_TWEETSTORM,value:{message:e.t0.message,type:"danger"}}),_(""),g("");case 16:case"end":return e.stop()}}),e,null,[[0,10]])})))},"Tweet")),r.a.createElement(z,{notification:I,onClick:function(){return G({type:D.DISMISS_TOAST})}}),r.a.createElement(w,{healthy:x,version:p.a}))};var X=function(e){return function(t,n){return e(t,n)}},Z=n(7);var $=function(e){return{active:function(t){return-1!==e.indexOf(t)}}}(["FEATURE_V1",d]);n(28),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));Object(c.render)(r.a.createElement((function(e){var t=e.children,n=e.onRedirectCallback,c=void 0===n?F:n,i=Object(U.a)(e,["children","onRedirectCallback"]),s=Object(a.useState)(),f=Object(o.a)(s,2),p=f[0],h=f[1],d=Object(a.useState)(),v=Object(o.a)(d,2),m=v[0],g=v[1],E=Object(a.useState)(),b=Object(o.a)(E,2),S=b[0],w=b[1],O=Object(a.useState)(!0),T=Object(o.a)(O,2),y=T[0],_=T[1],k=Object(a.useState)(!1),j=Object(o.a)(k,2),C=j[0],A=j[1];Object(a.useEffect)((function(){(function(){var e=Object(l.a)(u.a.mark((function e(){var t,n,a,r,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W()(i);case 2:if(t=e.sent,w(t),!window.location.search.includes("code=")){e.next=10;break}return e.next=7,t.handleRedirectCallback();case 7:n=e.sent,a=n.appState,c(a);case 10:return e.next=12,t.isAuthenticated();case 12:if(r=e.sent,h(r),!r){e.next=19;break}return e.next=17,t.getUser();case 17:o=e.sent,g(o);case 19:_(!1);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var x=function(){var e=Object(l.a)(u.a.mark((function e(){var t,n,a=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:{},A(!0),e.prev=2,e.next=5,S.loginWithPopup(t);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.error(e.t0);case 10:return e.prev=10,A(!1),e.finish(10);case 13:return e.next=15,S.getUser();case 15:n=e.sent,g(n),h(!0);case 18:case"end":return e.stop()}}),e,null,[[2,7,10,13]])})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return _(!0),e.next=3,S.handleRedirectCallback();case 3:return e.next=5,S.getUser();case 5:t=e.sent,_(!1),h(!0),g(t);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(M.Provider,{value:{isAuthenticated:p,user:m,loading:y,popupOpen:C,loginWithPopup:x,handleRedirectCallback:N,getIdTokenClaims:function(){return S.getIdTokenClaims.apply(S,arguments)},loginWithRedirect:function(){return S.loginWithRedirect.apply(S,arguments)},getTokenSilently:function(){return S.getTokenSilently.apply(S,arguments)},getTokenWithPopup:function(){return S.getTokenWithPopup.apply(S,arguments)},logout:function(){return S.logout.apply(S,arguments)}}},t)}),{client_id:Z.clientId,domain:Z.domain,onRedirectCallback:function(e){window.history.replaceState({},document.title,e&&e.targetUrl?e.targetUrl:window.location.pathname)},redirect_uri:window.location.origin},r.a.createElement(q,{feature:$,reducer:X(G)})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[14,1,2]]]);
//# sourceMappingURL=main.19d7c94e.chunk.js.map