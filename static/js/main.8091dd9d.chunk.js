(this["webpackJsonptweries-app"]=this["webpackJsonptweries-app"]||[]).push([[0],{10:function(e){e.exports=JSON.parse('{"domain":"dev-17-x3zfb.auth0.com","clientId":"iqgFXkcTFo9l80i7llzcurmrfgVsn3TZ"}')},16:function(e){e.exports=JSON.parse('{"a":"0.21.1"}')},20:function(e,t,n){e.exports=n(46)},37:function(e,t,n){},38:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(9),r=n(14),c=n.n(r),i=n(0),u=n.n(i),o=n(15),l=n(2),s=n(1),f=n.n(s),p=n(3),h=n(6),d=n.n(h),v=n(16),m="https://tweries-api.herokuapp.com",E="EMPTY_FIRST_SEQUENCE_NUMBER_V1",g="SPACE_AFTER_PUNCTUATION_V1",b=";;",S="\n";function w(){return(w=Object(p.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(m,"/api/v1/health"));case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var O=function(){return w.apply(this,arguments)};function T(){return(T=Object(p.a)(f.a.mark((function e(t){var n,a,r,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.items,a=t.userId,e.next=3,fetch("".concat(m,"/api/v1/tweetstorm"),{body:JSON.stringify({items:n,userId:a}),headers:{"Content-Type":"application/json"},method:"POST"});case 3:return r=e.sent,e.next=6,r.json();case 6:return c=e.sent,e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var y=function(e){return T.apply(this,arguments)};n(37);var _=function(e){var t=e.healthy,n=e.version;return u.a.createElement("footer",{className:d()({healthy:t})},u.a.createElement("p",null,"Tweries v",n," \xa9 ",(new Date).getFullYear()," "),u.a.createElement("ul",null,u.a.createElement("li",null,u.a.createElement("a",{href:"https://twitter.com/TweriesApp",rel:"noopener noreferrer",target:"_blank"},"@TweriesApp")),u.a.createElement("li",null,u.a.createElement("a",{href:"https://github.com/Tweries",rel:"noopener noreferrer",target:"_blank"},"github.com/Tweries"))))},k=(n(38),{custom:"custom",newline:"newline"});function A(e){var t=e.disabled,n=e.onChange,a=e.value;return u.a.createElement("input",{className:"LinefeedPicker__linefeed","data-testid":"linefeed",disabled:t,maxLength:"4",onChange:n,placeholder:b,size:"4",value:a})}var C=function(e){e.feature;var t=e.onChange,n=Object(i.useState)(k.newline),a=Object(l.a)(n,2),r=a[0],c=a[1],o=Object(i.useState)(b),s=Object(l.a)(o,2),f=s[0],p=s[1];return u.a.createElement("ul",{className:"LinefeedPicker__ul"},u.a.createElement("li",{className:"LinefeedPicker__li"},u.a.createElement("input",{"data-testid":"newline",defaultChecked:!0,name:"linefeed",onChange:function(){c(k.newline),t(S)},type:"radio",value:"newline"}),u.a.createElement("label",{htmlFor:"newline"},"Newline(s)")),u.a.createElement("li",{className:"LinefeedPicker__li"},u.a.createElement("input",{"data-testid":"custom",name:"linefeed",onChange:function(){c(k.custom),t(f)},type:"radio",value:"custom"}),u.a.createElement("label",{htmlFor:"louie"},u.a.createElement(A,{disabled:r!==k.custom,onChange:function(e){var n=e.target.value;p(n),t(n)},value:f}))))},j=n(17),x=n(4),N=n.n(x),I=280,H="_/_";function R(e,t){var n=["-","\u2013",".",",",";","!","?"].map((function(e){return{key:e,value:N.a.lastIndexOf(t,e)}})).sort((function(e,t){return e.value>t.value?-1:e.value<t.value?1:0}))[0];return-1!==n.value&&function(e,t,n){return!e.active(g)||" "===N.a.substr(n,t+1,1)}(e,n.value,t)&&(t=N.a.substr(t,0,n.value+1)),t}function P(e){var t=e.feature,n=e.index,a=e.length;return void 0===n&&void 0===a?H:t.active(E)&&0===n&&1===a?"":"".concat(n+1,"/").concat(a)}var G=function(e){var t=e.feature,n=e.hashtags,a=e.linefeed,r=e.source;null!==a&&void 0!==a&&""!==a||(a=b);for(var c=function(e,t){var n=t.slice();return e===S&&(n=n.replace(/\n+/g,S)),n}(a,r),i=[];0!==c.length;){var u=void 0,o=void 0;o=n.length>0?I-n.length-P({feature:t}).length-2:I-P({feature:t}).length-1,-1!==(u=N.a.prune(c,o,"")).indexOf(a)?(u=N.a.substr(u,0,u.indexOf(a)),c=N.a.substr(c,u.length+a.length)):(u=R(t,u),c=N.a.substr(c,u.length+1)),i.push(u)}return i.map((function(e,a){var r;return{length:(r=n.length>0?"".concat(N.a.trim(e)," ").concat(n," ").concat(P({feature:t,index:a,length:i.length})):"".concat(N.a.trim(e)," ").concat(P({feature:t,index:a,length:i.length}))).length,tweet:r}}))};var U=function(e){var t=e.feature,n=e.hashtags,a=void 0===n?"":n,r=e.linefeed,c=void 0===r?b:r,i=e.source,u=void 0===i?"":i;return{feature:t,hashtags:a,healthy:!1,items:G({feature:t,hashtags:a,linefeed:c,source:u}),linefeed:c,notification:null,source:u,userId:null}};function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(n,!0).forEach((function(t){Object(j.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var W={CHANGE_HASHTAGS:"CHANGE_HASHTAGS",CHANGE_LINEFEED:"CHANGE_LINEFEED",CHANGE_SOURCE:"CHANGE_SOURCE",DISMISS_TOAST:"DISMISS_TOAST",RESET_TWEETSTORM:"RESET_TWEETSTORM",SET_HEALTHY:"SET_HEALTHY",SET_USER_ID:"SET_USER_ID"};var F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U({}),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case W.CHANGE_HASHTAGS:return L({},e,{hashtags:t.value,items:G({feature:e.feature,hashtags:t.value,linefeed:e.linefeed,source:e.source})});case W.CHANGE_LINEFEED:return L({},e,{linefeed:t.value,items:G({feature:e.feature,hashtags:e.hashtags,linefeed:t.value,source:e.source})});case W.CHANGE_SOURCE:return L({},e,{items:G({feature:e.feature,hashtags:e.hashtags,linefeed:e.linefeed,source:t.value}),source:t.value});case W.DISMISS_TOAST:return L({},e,{notification:null});case W.RESET_TWEETSTORM:return L({},U({}),{healthy:e.healthy,notification:t.value,userId:e.userId});case W.SET_HEALTHY:return L({},e,{healthy:t.value});case W.SET_USER_ID:return L({},e,{userId:t.value});default:return e}},M=n(19),J=n(18),Y=n.n(J),B=function(){return window.history.replaceState({},document.title,window.location.pathname)},V=u.a.createContext(),z=function(){return Object(i.useContext)(V)},q=(n(42),function(e){var t=e.dispatch,n=z(),a=n.isAuthenticated,r=n.loginWithRedirect,c=n.logout,o=n.user;return Object(i.useEffect)((function(){a&&t({type:W.SET_USER_ID,value:o.sub})}),[t,a,o]),u.a.createElement("header",{className:"NavBar"},a?[u.a.createElement("img",{alt:o.name,key:"img",src:o.picture}),u.a.createElement("span",{key:"span"},u.a.createElement("span",{"aria-label":"hello",role:"img"},"\ud83d\udc4b")," ",o.name),u.a.createElement("button",{"data-testid":"logout",key:"button",onClick:function(){return c({returnTo:window.location.href})}},"Log out")]:u.a.createElement("button",{"data-testid":"login",onClick:function(){return r({})}},"Log in"))});n(43);var K=function(e){var t=e.notification,n=e.onClick;if(t){var a=t.message,r=t.type;return u.a.createElement("div",{className:d()("ToastNotification",{"ToastNotification--success":"success"===r,"ToastNotification--danger":"danger"===r})},u.a.createElement("span",null,a),u.a.createElement("button",{"data-testid":"dismiss",onClick:n},"\xd7"))}return null};var Q=function(e,t){var n=Object(i.useState)((function(){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(a){return console.log(a),t}})),a=Object(l.a)(n,2),r=a[0],c=a[1];return[r,function(t){try{var n=t instanceof Function?t(r):t;c(n),window.localStorage.setItem(e,JSON.stringify(n))}catch(a){console.log(a)}}]};n(44);var X=function(e){var t=e.length,n=0===t?"":t;return u.a.createElement("small",{className:"App__counter"},n)};var Z=function(e){var t=e.feature,n=e.reducer,a=z(),r=a.isAuthenticated,c=a.loading;Object(i.useEffect)((function(){function e(){return(e=Object(p.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O();case 3:t=e.sent,console.log(t),P({type:W.SET_HEALTHY,value:!0}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0),P({type:W.SET_HEALTHY,value:!1});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var o=Q("hashtags",""),s=Object(l.a)(o,2),h=s[0],m=s[1],E=Q("source",""),g=Object(l.a)(E,2),b=g[0],w=g[1],T=Object(i.useReducer)(n,U({feature:t,hashtags:h,linefeed:S,source:b})),k=Object(l.a)(T,2),A=k[0],j=A.hashtags,x=A.healthy,N=A.items,I=A.notification,H=A.source,R=A.userId,P=k[1];function G(){return!r||!N.length>0||!x}return c?u.a.createElement("article",null,"..."):u.a.createElement("article",null,u.a.createElement(q,{dispatch:P}),u.a.createElement("h1",null,"Tweries"),u.a.createElement("form",{onSubmit:function(e){return e.preventDefault()}},u.a.createElement("small",{className:"App__small"},"Start typing, to insert a break prior to reaching 280 characters please use"," ",u.a.createElement(C,{feature:t,onChange:function(e){P({type:W.CHANGE_LINEFEED,value:e})}})),u.a.createElement("textarea",{"data-testid":"source",placeholder:"What's happening?",rows:8,value:H,onChange:function(e){P({type:W.CHANGE_SOURCE,value:e.target.value}),w(e.target.value)}}),u.a.createElement(X,{length:H.length}),u.a.createElement("textarea",{"data-testid":"hashtags",onChange:function(e){P({type:W.CHANGE_HASHTAGS,value:e.target.value}),m(e.target.value)},placeholder:"#hashtags",rows:1,type:"text",value:j}),u.a.createElement(X,{length:j.length}),u.a.createElement("ul",{"data-testid":"list"},N.map((function(e,t){return u.a.createElement("li",{key:t},u.a.createElement("textarea",{readOnly:!0,rows:4,value:e.tweet}),u.a.createElement(X,{length:e.length}))}))),u.a.createElement("button",{className:d()("App__button",{"App__button--disabled":G()}),"data-testid":"tweet",disabled:G(),onClick:Object(p.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y({items:N,userId:R});case 3:t=e.sent,console.log(t),P({type:W.RESET_TWEETSTORM,value:{message:"The tweetstorm has been created successfully.",type:"success"}}),w(""),m(""),e.next=16;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0),P({type:W.RESET_TWEETSTORM,value:{message:e.t0.message,type:"danger"}}),w(""),m("");case 16:case"end":return e.stop()}}),e,null,[[0,10]])})))},"Tweet")),u.a.createElement(K,{notification:I,onClick:function(){return P({type:W.DISMISS_TOAST})}}),u.a.createElement(_,{healthy:x,version:v.a}))};var $=function(e){var t=e.logEvent,n=e.reducer;return function(e,a){var r=n(e,a);switch(a.type){case W.CHANGE_HASHTAGS:case W.CHANGE_SOURCE:break;default:t(a.type,a.value)}return r}},ee=n(10);var te=function(e){return{active:function(t){return-1!==e.indexOf(t)}}}([E,"FEATURE_V1",g]);n(45),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));Object(o.render)(u.a.createElement(a.AmplitudeProvider,{amplitudeInstance:c.a.getInstance(),apiKey:"7cbe8a9a37db4f88f06c79a387943cca"},u.a.createElement((function(e){var t=e.children,n=e.onRedirectCallback,a=void 0===n?B:n,r=Object(M.a)(e,["children","onRedirectCallback"]),c=Object(i.useState)(),o=Object(l.a)(c,2),s=o[0],h=o[1],d=Object(i.useState)(),v=Object(l.a)(d,2),m=v[0],E=v[1],g=Object(i.useState)(),b=Object(l.a)(g,2),S=b[0],w=b[1],O=Object(i.useState)(!0),T=Object(l.a)(O,2),y=T[0],_=T[1],k=Object(i.useState)(!1),A=Object(l.a)(k,2),C=A[0],j=A[1];Object(i.useEffect)((function(){(function(){var e=Object(p.a)(f.a.mark((function e(){var t,n,c,i,u;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y()(r);case 2:if(t=e.sent,w(t),!window.location.search.includes("code=")){e.next=10;break}return e.next=7,t.handleRedirectCallback();case 7:n=e.sent,c=n.appState,a(c);case 10:return e.next=12,t.isAuthenticated();case 12:if(i=e.sent,h(i),!i){e.next=19;break}return e.next=17,t.getUser();case 17:u=e.sent,E(u);case 19:_(!1);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var x=function(){var e=Object(p.a)(f.a.mark((function e(){var t,n,a=arguments;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:{},j(!0),e.prev=2,e.next=5,S.loginWithPopup(t);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.error(e.t0);case 10:return e.prev=10,j(!1),e.finish(10);case 13:return e.next=15,S.getUser();case 15:n=e.sent,E(n),h(!0);case 18:case"end":return e.stop()}}),e,null,[[2,7,10,13]])})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(p.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return _(!0),e.next=3,S.handleRedirectCallback();case 3:return e.next=5,S.getUser();case 5:t=e.sent,_(!1),h(!0),E(t);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return u.a.createElement(V.Provider,{value:{isAuthenticated:s,user:m,loading:y,popupOpen:C,loginWithPopup:x,handleRedirectCallback:N,getIdTokenClaims:function(){return S.getIdTokenClaims.apply(S,arguments)},loginWithRedirect:function(){return S.loginWithRedirect.apply(S,arguments)},getTokenSilently:function(){return S.getTokenSilently.apply(S,arguments)},getTokenWithPopup:function(){return S.getTokenWithPopup.apply(S,arguments)},logout:function(){return S.logout.apply(S,arguments)}}},t)}),{client_id:ee.clientId,domain:ee.domain,onRedirectCallback:function(e){window.history.replaceState({},document.title,e&&e.targetUrl?e.targetUrl:window.location.pathname)},redirect_uri:window.location.origin},u.a.createElement(a.Amplitude,null,(function(e){var t=e.logEvent;return u.a.createElement(Z,{feature:te,reducer:$({logEvent:t,reducer:F})})})))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[20,1,2]]]);
//# sourceMappingURL=main.8091dd9d.chunk.js.map