(this["webpackJsonpchina-musk"]=this["webpackJsonpchina-musk"]||[]).push([[0],{10:function(e){e.exports=JSON.parse('{"a":"0.6.2"}')},14:function(e,t,n){e.exports=n(26)},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),c=n(1),i=n(9),u=n.n(i),l=n(10),s=n(2),h=n.n(s),d=n(5),p=n(13),f=n(11),m=n.n(f),g=function(){return window.history.replaceState({},document.title,window.location.pathname)},v=r.a.createContext(),E=function(){return Object(a.useContext)(v)},b=(n(23),function(e){var t=e.dispatch,n=E(),o=n.isAuthenticated,c=n.loginWithRedirect,i=n.logout,u=n.user;return Object(a.useEffect)((function(){o&&t({type:"SET_USER_ID",value:u.sub})}),[t,o,u]),r.a.createElement("header",{className:"NavBar"},o?[r.a.createElement("button",{key:"button",onClick:function(){return i({returnTo:window.location.href})}},"Log out"),r.a.createElement("img",{alt:u.name,key:"img",src:u.picture})]:r.a.createElement("button",{onClick:function(){return c({})}},"Log in"))}),y={hashtags:"#QueenFTW",healthy:!1,items:[],source:"Mama, just killed a man\nPut a gun against his head\nPulled my trigger, now he's dead\nMama, life had just begun\nBut now I've gone and thrown it all away\n[..]\nMama, ooh\nDidn't mean to make you cry\nIf I'm not back again this time tomorrow\nCarry on, carry on\nAs if nothing really matters\n[..]\nToo late, my time has come\nSends shivers down my spine\nBody's aching all the time\nGoodbye everybody, I've got to go\nGotta leave you all behind and face the truth",userId:null},O=n(12),w=n(3),T=n.n(w),S="[..]",k=280,j="_/_";function x(e,t){return void 0===e&&void 0===t?j:"".concat(e+1,"/").concat(t)}var C=function(e,t){for(var n=e.slice(),a=[];0!==n.length;){var r=T.a.prune(n,k-x().length-t.length-2,"");r.indexOf(S)>-1?(r=T.a.substr(r,0,r.indexOf(S)),n=T.a.substr(n,r.length+4)):n=T.a.substr(n,r.length+1),a.push(r)}return a.map((function(e,n){var r="".concat(x(n,a.length)," ").concat(T.a.trim(e)," ").concat(t);return{length:r.length,tweet:r}}))};function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(n,!0).forEach((function(t){Object(O.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_HASHTAGS":return _({},e,{hashtags:t.value});case"CHANGE_SOURCE":return _({},e,{source:t.value});case"GENERATE_TWEETSTORM":return _({},e,{items:C(e.source,e.hashtags)});case"RESET_TWEETSTORM":return _({},e,{items:[]});case"SET_HEALTHY":return _({},e,{healthy:t.value});case"SET_USER_ID":return _({},e,{userId:t.value});default:return e}};n(24);var P=function(e){return function(t,n){return e(t,n)}},I="https://china-musk-api.herokuapp.com";var W=function(){var e=E(),t=e.isAuthenticated,n=e.loading;Object(a.useEffect)((function(){fetch("".concat(I,"/api/v1/health")).then((function(e){return e.json()})).then((function(e){console.log(e),g({type:"SET_HEALTHY",value:!0})})).catch((function(e){console.log(e),g({type:"SET_HEALTHY",value:!1})}))}),[]);var o=Object(a.useReducer)(P(A),y),i=Object(c.a)(o,2),s=i[0],h=s.hashtags,d=s.healthy,p=s.items,f=s.source,m=s.userId,g=i[1];return n?r.a.createElement("article",null,"..."):r.a.createElement("article",null,r.a.createElement(b,{dispatch:g}),r.a.createElement("h1",null,"Serial Twitter"),r.a.createElement("form",{onSubmit:function(e){return e.preventDefault()}},r.a.createElement("textarea",{"data-testid":"source",rows:16,value:f,onChange:function(e){return g({type:"CHANGE_SOURCE",value:e.target.value})}}),r.a.createElement("input",{"data-testid":"hashtags",onChange:function(e){return g({type:"CHANGE_HASHTAGS",value:e.target.value})},type:"text",value:h}),r.a.createElement("button",{"data-testid":"generate",onClick:function(){return g({type:"GENERATE_TWEETSTORM"})}},"Generate Tweetstorm"),r.a.createElement("ul",{"data-testid":"list"},p.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("textarea",{readOnly:!0,rows:8,value:e.tweet}))}))),r.a.createElement("button",{"data-testid":"tweet",disabled:!t||!p.length>0||!d,onClick:function(){fetch("".concat(I,"/api/v1/tweetstorm"),{body:JSON.stringify({items:p,userId:m}),headers:{"Content-Type":"application/json"},method:"POST"}).then((function(e){return e.json()})).then((function(e){console.log(e),g({type:"RESET_TWEETSTORM"})})).catch((function(e){console.log(e),g({type:"RESET_TWEETSTORM"})}))}},"Tweet")),r.a.createElement("footer",{className:u()({healthy:d})},"v",l.a))},H=n(6);n(25),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));Object(o.render)(r.a.createElement((function(e){var t=e.children,n=e.onRedirectCallback,o=void 0===n?g:n,i=Object(p.a)(e,["children","onRedirectCallback"]),u=Object(a.useState)(),l=Object(c.a)(u,2),s=l[0],f=l[1],E=Object(a.useState)(),b=Object(c.a)(E,2),y=b[0],O=b[1],w=Object(a.useState)(),T=Object(c.a)(w,2),S=T[0],k=T[1],j=Object(a.useState)(!0),x=Object(c.a)(j,2),C=x[0],R=x[1],_=Object(a.useState)(!1),A=Object(c.a)(_,2),P=A[0],I=A[1];Object(a.useEffect)((function(){(function(){var e=Object(d.a)(h.a.mark((function e(){var t,n,a,r,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m()(i);case 2:if(t=e.sent,k(t),!window.location.search.includes("code=")){e.next=10;break}return e.next=7,t.handleRedirectCallback();case 7:n=e.sent,a=n.appState,o(a);case 10:return e.next=12,t.isAuthenticated();case 12:if(r=e.sent,f(r),!r){e.next=19;break}return e.next=17,t.getUser();case 17:c=e.sent,O(c);case 19:R(!1);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var W=function(){var e=Object(d.a)(h.a.mark((function e(){var t,n,a=arguments;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:{},I(!0),e.prev=2,e.next=5,S.loginWithPopup(t);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.error(e.t0);case 10:return e.prev=10,I(!1),e.finish(10);case 13:return e.next=15,S.getUser();case 15:n=e.sent,O(n),f(!0);case 18:case"end":return e.stop()}}),e,null,[[2,7,10,13]])})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=Object(d.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return R(!0),e.next=3,S.handleRedirectCallback();case 3:return e.next=5,S.getUser();case 5:t=e.sent,R(!1),f(!0),O(t);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(v.Provider,{value:{isAuthenticated:s,user:y,loading:C,popupOpen:P,loginWithPopup:W,handleRedirectCallback:H,getIdTokenClaims:function(){return S.getIdTokenClaims.apply(S,arguments)},loginWithRedirect:function(){return S.loginWithRedirect.apply(S,arguments)},getTokenSilently:function(){return S.getTokenSilently.apply(S,arguments)},getTokenWithPopup:function(){return S.getTokenWithPopup.apply(S,arguments)},logout:function(){return S.logout.apply(S,arguments)}}},t)}),{client_id:H.clientId,domain:H.domain,onRedirectCallback:function(e){window.history.replaceState({},document.title,e&&e.targetUrl?e.targetUrl:window.location.pathname)},redirect_uri:window.location.href},r.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},6:function(e){e.exports=JSON.parse('{"domain":"dev-17-x3zfb.auth0.com","clientId":"iqgFXkcTFo9l80i7llzcurmrfgVsn3TZ"}')}},[[14,1,2]]]);
//# sourceMappingURL=main.23032059.chunk.js.map