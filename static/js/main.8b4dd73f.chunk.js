(this["webpackJsonpchina-musk"]=this["webpackJsonpchina-musk"]||[]).push([[0],{10:function(e){e.exports=JSON.parse('{"a":"0.6.4"}')},14:function(e,t,n){e.exports=n(26)},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),o=n(1),i=n(9),u=n.n(i),l=n(10),s=n(2),h=n.n(s),p=n(5),f=n(13),d=n(11),m=n.n(d),g=function(){return window.history.replaceState({},document.title,window.location.pathname)},E=r.a.createContext(),v=function(){return Object(a.useContext)(E)},b=(n(23),function(e){var t=e.dispatch,n=v(),c=n.isAuthenticated,o=n.loginWithRedirect,i=n.logout,u=n.user;return Object(a.useEffect)((function(){c&&t({type:"SET_USER_ID",value:u.sub})}),[t,c,u]),r.a.createElement("header",{className:"NavBar"},c?[r.a.createElement("img",{alt:u.name,key:"img",src:u.picture}),r.a.createElement("span",{key:"span"},r.a.createElement("span",{"aria-label":"hello",role:"img"},"\ud83d\udc4b")," ",u.name),r.a.createElement("button",{key:"button",onClick:function(){return i({returnTo:window.location.href})}},"Log out")]:r.a.createElement("button",{onClick:function(){return o({})}},"Log in"))}),O={hashtags:"",healthy:!1,items:[],source:"",userId:null},y=n(12),w=n(3),T=n.n(w),S="[..]",k=280,j="_/_";function x(e,t){return void 0===e&&void 0===t?j:"".concat(e+1,"/").concat(t)}var R=function(e,t){for(var n=e.slice(),a=[];0!==n.length;){var r=T.a.prune(n,k-x().length-t.length-2,"");r.indexOf(S)>-1?(r=T.a.substr(r,0,r.indexOf(S)),n=T.a.substr(n,r.length+4)):n=T.a.substr(n,r.length+1),a.push(r)}return a.map((function(e,n){var r="".concat(x(n,a.length)," ").concat(T.a.trim(e)," ").concat(t);return{length:r.length,tweet:r}}))};function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(n,!0).forEach((function(t){Object(y.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_HASHTAGS":return _({},e,{hashtags:t.value});case"CHANGE_SOURCE":return _({},e,{source:t.value});case"GENERATE_TWEETSTORM":return _({},e,{items:R(e.source,e.hashtags)});case"RESET_TWEETSTORM":return _({},e,{items:[]});case"SET_HEALTHY":return _({},e,{healthy:t.value});case"SET_USER_ID":return _({},e,{userId:t.value});default:return e}};n(24);var W=function(e){return function(t,n){return e(t,n)}},H="https://china-musk-api.herokuapp.com";var P=function(){var e=v(),t=e.isAuthenticated,n=e.loading;Object(a.useEffect)((function(){fetch("".concat(H,"/api/v1/health")).then((function(e){return e.json()})).then((function(e){console.log(e),g({type:"SET_HEALTHY",value:!0})})).catch((function(e){console.log(e),g({type:"SET_HEALTHY",value:!1})}))}),[]);var c=Object(a.useReducer)(W(A),O),i=Object(o.a)(c,2),s=i[0],h=s.hashtags,p=s.healthy,f=s.items,d=s.source,m=s.userId,g=i[1];return n?r.a.createElement("article",null,"..."):r.a.createElement("article",null,r.a.createElement(b,{dispatch:g}),r.a.createElement("h1",null,"Tweries"),r.a.createElement("form",{onSubmit:function(e){return e.preventDefault()}},r.a.createElement("textarea",{"data-testid":"source",placeholder:"What's happening?",rows:16,value:d,onChange:function(e){return g({type:"CHANGE_SOURCE",value:e.target.value})}}),r.a.createElement("textarea",{"data-testid":"hashtags",onChange:function(e){return g({type:"CHANGE_HASHTAGS",value:e.target.value})},placeholder:"#hashtags",rows:1,type:"text",value:h}),r.a.createElement("button",{"data-testid":"generate",onClick:function(){return g({type:"GENERATE_TWEETSTORM"})}},"Generate Tweetstorm"),r.a.createElement("ul",{"data-testid":"list"},f.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("textarea",{readOnly:!0,rows:8,value:e.tweet}))}))),r.a.createElement("button",{"data-testid":"tweet",disabled:!t||!f.length>0||!p,onClick:function(){fetch("".concat(H,"/api/v1/tweetstorm"),{body:JSON.stringify({items:f,userId:m}),headers:{"Content-Type":"application/json"},method:"POST"}).then((function(e){return e.json()})).then((function(e){console.log(e),g({type:"RESET_TWEETSTORM"})})).catch((function(e){console.log(e),g({type:"RESET_TWEETSTORM"})}))}},"Tweet")),r.a.createElement("footer",{className:u()({healthy:p})},"v",l.a))},N=n(6);n(25),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));Object(c.render)(r.a.createElement((function(e){var t=e.children,n=e.onRedirectCallback,c=void 0===n?g:n,i=Object(f.a)(e,["children","onRedirectCallback"]),u=Object(a.useState)(),l=Object(o.a)(u,2),s=l[0],d=l[1],v=Object(a.useState)(),b=Object(o.a)(v,2),O=b[0],y=b[1],w=Object(a.useState)(),T=Object(o.a)(w,2),S=T[0],k=T[1],j=Object(a.useState)(!0),x=Object(o.a)(j,2),R=x[0],C=x[1],_=Object(a.useState)(!1),A=Object(o.a)(_,2),W=A[0],H=A[1];Object(a.useEffect)((function(){(function(){var e=Object(p.a)(h.a.mark((function e(){var t,n,a,r,o;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m()(i);case 2:if(t=e.sent,k(t),!window.location.search.includes("code=")){e.next=10;break}return e.next=7,t.handleRedirectCallback();case 7:n=e.sent,a=n.appState,c(a);case 10:return e.next=12,t.isAuthenticated();case 12:if(r=e.sent,d(r),!r){e.next=19;break}return e.next=17,t.getUser();case 17:o=e.sent,y(o);case 19:C(!1);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var P=function(){var e=Object(p.a)(h.a.mark((function e(){var t,n,a=arguments;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:{},H(!0),e.prev=2,e.next=5,S.loginWithPopup(t);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.error(e.t0);case 10:return e.prev=10,H(!1),e.finish(10);case 13:return e.next=15,S.getUser();case 15:n=e.sent,y(n),d(!0);case 18:case"end":return e.stop()}}),e,null,[[2,7,10,13]])})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(p.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C(!0),e.next=3,S.handleRedirectCallback();case 3:return e.next=5,S.getUser();case 5:t=e.sent,C(!1),d(!0),y(t);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(E.Provider,{value:{isAuthenticated:s,user:O,loading:R,popupOpen:W,loginWithPopup:P,handleRedirectCallback:N,getIdTokenClaims:function(){return S.getIdTokenClaims.apply(S,arguments)},loginWithRedirect:function(){return S.loginWithRedirect.apply(S,arguments)},getTokenSilently:function(){return S.getTokenSilently.apply(S,arguments)},getTokenWithPopup:function(){return S.getTokenWithPopup.apply(S,arguments)},logout:function(){return S.logout.apply(S,arguments)}}},t)}),{client_id:N.clientId,domain:N.domain,onRedirectCallback:function(e){window.history.replaceState({},document.title,e&&e.targetUrl?e.targetUrl:window.location.pathname)},redirect_uri:window.location.href},r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},6:function(e){e.exports=JSON.parse('{"domain":"dev-17-x3zfb.auth0.com","clientId":"iqgFXkcTFo9l80i7llzcurmrfgVsn3TZ"}')}},[[14,1,2]]]);
//# sourceMappingURL=main.8b4dd73f.chunk.js.map