(this["webpackJsonptweries-app"]=this["webpackJsonptweries-app"]||[]).push([[0],{17:function(e){e.exports=JSON.parse('{"domain":"dev-17-x3zfb.auth0.com","clientId":"iqgFXkcTFo9l80i7llzcurmrfgVsn3TZ"}')},27:function(e){e.exports=JSON.parse('{"a":"1.6.5"}')},32:function(e,t,n){e.exports=n(51)},50:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(15),r=n(25),c=n.n(r),o=n(9),u=n.n(o),s=n(0),l=n.n(s),i=n(26),p=n(6),f=n(3),d=n(2),m=n.n(d),b=n(4),h=n(5),v=n.n(h),g=n(29),w=n(13),y=n(11),x=n(27),E="https://tweries-api.herokuapp.com";function O(){return(O=Object(b.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(E,"/api/v2/health"));case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var j=function(){return O.apply(this,arguments)};function k(){return(k=Object(b.a)(m.a.mark((function e(t){var n,a,r,c,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.inReplyToTweetUrl,a=t.items,r=t.userId,e.next=3,fetch("".concat(E,"/api/v2/tweetstorm"),{body:JSON.stringify({inReplyToTweetUrl:n,items:a,userId:r}),headers:{"Content-Type":"application/json"},method:"POST"});case 3:return c=e.sent,e.next=6,c.json();case 6:return o=e.sent,e.abrupt("return",o);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var T=function(e){return k.apply(this,arguments)},N="github.com/Tweries",S="Tweries",C="@TweriesApp";var I=function(e){var t=e.healthy,n=e.version;return l.a.createElement("footer",{className:"flex flex-col items-center text-sm"},l.a.createElement("ul",{className:"flex"},l.a.createElement("li",{className:"m-1"},l.a.createElement("a",{href:"https://github.com/Tweries",rel:"noopener noreferrer",target:"_blank"},N)),l.a.createElement("li",{className:"m-1"},l.a.createElement("a",{href:"https://twitter.com/TweriesApp",rel:"noopener noreferrer",target:"_blank"},C))),l.a.createElement("p",{className:v()({"text-green-800":t,"text-red-800":!t})},S," v",n," \xa9 ",(new Date).getFullYear()))},R="Log out";var _=function(e){var t=e.logout,n=e.user,a=Object(s.useState)(!0),r=Object(f.a)(a,2),c=r[0],o=r[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("p",{className:"flex items-center"},c&&l.a.createElement("img",{alt:n.name,className:"border mr-2 rounded-full tweries-border-color",onError:function(){return o(!1)},src:n.picture}),n.name),l.a.createElement("button",{className:"px-4 underline","data-testid":"logout",onClick:function(){return t({returnTo:window.location.href})},type:"button"},R))};function U(){return(U=Object(b.a)(m.a.mark((function e(t){var n,a,r,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.inReplyToTweetUrl,a=t.userId,e.next=3,fetch("".concat(E,"/api/v2/tweet"),{body:JSON.stringify({tweetUrl:n,userId:a}),headers:{"Content-Type":"application/json"},method:"POST"});case 3:return r=e.sent,e.next=6,r.json();case 6:return c=e.sent,e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var A=function(e){return U.apply(this,arguments)},F="If you want to reply to a specific Tweet:",P="URL goes here";var W=function(e){var t=e.callback,n=e.onChange,a=e.tweetUrl,r=e.userId,c=Object(s.useState)(!1),o=Object(f.a)(c,2),u=o[0],i=o[1],p=Object(s.useState)(!1),d=Object(f.a)(p,2),h=d[0],g=d[1];return Object(s.useEffect)((function(){function e(){return(e=Object(b.a)(m.a.mark((function e(){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A({inReplyToTweetUrl:a,userId:r});case 3:n=e.sent,console.log(n),n.data?(t(null,n.data),i(!0),g(!1)):(t(n.error),i(!1),g(!1)),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(0),t(e.t0),i(!1),g(!1);case 13:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}a&&r&&(g(!0),function(){e.apply(this,arguments)}())}),[t,a,r]),l.a.createElement(l.a.Fragment,null,l.a.createElement("label",{className:"pb-1 text-sm",htmlFor:"reply-to"},F),l.a.createElement("textarea",{className:v()("p-2 tweries-border",{"tweries-background-color-blue-white":!0===h||""===a,"bg-green-200":!1===h&&""!==a&&u,"bg-red-200":!1===h&&""!==a&&!u}),"data-testid":"reply-to",name:"reply-to",onChange:function(e){var t=e.target.value;n(t)},placeholder:P,rows:1,value:a}))},J="Your tweetstorm has been created!";function z(e){var t=e.notification,n=e.onClick;if(t){var a=t.link,r=t.message,c=t.type;return l.a.createElement("p",{className:v()("border flex justify-between mb-2 p-2 rounded",{"bg-green-100 border-green-800 text-green-800":"success"===c,"bg-red-100 border-red-800 text-red-800":"danger"===c})},l.a.createElement("span",null,"danger"===c&&r,"success"===c&&l.a.createElement("a",{className:"underline",href:a,rel:"noopener noreferrer",target:"_blank"},J)),l.a.createElement("button",{className:"font-bold","data-testid":"dismiss",onClick:n,type:"button"},"\xd7"))}return null}z.defaultProps={notification:null};var D=z;var L=function(e,t){var n=Object(s.useState)((function(){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(a){return console.log(a),t}})),a=Object(f.a)(n,2),r=a[0],c=a[1];return[r,function(t){try{var n=t instanceof Function?t(r):t;c(n),window.localStorage.setItem(e,JSON.stringify(n))}catch(a){console.log(a)}}]},H=n(7),M=n.n(H);var Y=function(e){function t(e,t){var n=["-","\u2013",".",",",";","!","?"].map((function(e){return{key:e,value:M.a.lastIndexOf(t,e)}})).sort((function(e,t){return e.value>t.value?-1:e.value<t.value?1:0}))[0];return-1!==n.value&&function(e,t){return" "===M.a.substr(t,e+1,1)}(n.value,t)&&!function(e,t){return e===t}(e,t)?M.a.substr(t,0,n.value+1):t}function n(e,t){return void 0===e&&void 0===t?" ".concat("_/_"):0===e&&1===t?"":" ".concat(e+1,"/").concat(t)}return function(e){for(var a=e.linefeed,r=e.source,c=function(e){return null===e||void 0===e||""===e?"\n":e}(a),o=function(e,t){var n=t.slice();return"\n"===e&&(n=n.replace(/\n+/g,"\n")),n}(c,r),u=[];0!==o.length;){var s=void 0,l=280-n().length;-1!==(s=M.a.prune(o,l,"")).indexOf(c)?(s=M.a.substr(s,0,s.indexOf(c)),o=M.a.substr(o,s.length+c.length)):(s=t(o,s),o=M.a.substr(o,s.length+1)),u.push(s)}return u.map((function(e,t){var a=n(t,u.length),r="".concat(M.a.trim(e)).concat(a);return{id:"_".concat(Math.random().toString(36).substr(2,9)),tweet:r}}))}},B=n(30);var G=function(e){var t=e.feature;return{healthy:!1,items:Y(t)({linefeed:"\n",source:""}),linefeed:"\n",notification:null,source:"",userId:""}},V="APPEND_SCREEN_NAME",q="CHANGE_SOURCE",K="CHANGE_TWEET",X="DISMISS_TOAST",Z="RESET_TWEETSTORM",$="SET_HEALTHY",Q="SET_USER_ID";var ee=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G({feature:e}),n=arguments.length>1?arguments[1]:void 0;switch(n.type){case V:var a="@".concat(n.value," ").concat(t.source);return Object(p.a)({},t,{items:Y(e)({linefeed:t.linefeed,source:a}),source:a});case q:return Object(p.a)({},t,{items:Y(e)({linefeed:t.linefeed,source:n.value}),source:n.value});case K:return Object(p.a)({},t,{items:Object(B.a)(t.items).map((function(e){var t=Object(p.a)({},e);return t.id===n.value.id&&(t.tweet=n.value.tweet),t}))});case X:return Object(p.a)({},t,{notification:null});case Z:return"success"===n.value.type?Object(p.a)({},G({feature:e}),{healthy:t.healthy,notification:n.value,userId:t.userId}):Object(p.a)({},t,{notification:n.value});case $:return Object(p.a)({},t,{healthy:n.value});case Q:return Object(p.a)({},t,{userId:n.value});default:return t}}},te=n(31),ne=n(28),ae=function(){return window.history.replaceState({},document.title,window.location.pathname)},re=l.a.createContext(),ce=function(e){var t=e.children,n=e.onRedirectCallback,a=void 0===n?ae:n,r=Object(te.a)(e,["children","onRedirectCallback"]),c=Object(s.useState)(),o=Object(f.a)(c,2),u=o[0],i=o[1],p=Object(s.useState)(),d=Object(f.a)(p,2),h=d[0],v=d[1],g=Object(s.useState)(),w=Object(f.a)(g,2),y=w[0],x=w[1],E=Object(s.useState)(!0),O=Object(f.a)(E,2),j=O[0],k=O[1],T=Object(s.useState)(!1),N=Object(f.a)(T,2),S=N[0],C=N[1];Object(s.useEffect)((function(){(function(){var e=Object(b.a)(m.a.mark((function e(){var t,n,c,o,u;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ne.a)(r);case 2:if(t=e.sent,x(t),!window.location.search.includes("code=")){e.next=10;break}return e.next=7,t.handleRedirectCallback();case 7:n=e.sent,c=n.appState,a(c);case 10:return e.next=12,t.isAuthenticated();case 12:if(o=e.sent,i(o),!o){e.next=19;break}return e.next=17,t.getUser();case 17:u=e.sent,v(u);case 19:k(!1);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var I=function(){var e=Object(b.a)(m.a.mark((function e(){var t,n,a=arguments;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:{},C(!0),e.prev=2,e.next=5,y.loginWithPopup(t);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.error(e.t0);case 10:return e.prev=10,C(!1),e.finish(10);case 13:return e.next=15,y.getUser();case 15:n=e.sent,v(n),i(!0);case 18:case"end":return e.stop()}}),e,null,[[2,7,10,13]])})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(b.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),e.next=3,y.handleRedirectCallback();case 3:return e.next=5,y.getUser();case 5:t=e.sent,k(!1),i(!0),v(t);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return l.a.createElement(re.Provider,{value:{isAuthenticated:u,user:h,loading:j,popupOpen:S,loginWithPopup:I,handleRedirectCallback:R,getIdTokenClaims:function(){return y.getIdTokenClaims.apply(y,arguments)},loginWithRedirect:function(){return y.loginWithRedirect.apply(y,arguments)},getTokenSilently:function(){return y.getTokenSilently.apply(y,arguments)},getTokenWithPopup:function(){return y.getTokenWithPopup.apply(y,arguments)},logout:function(){return y.logout.apply(y,arguments)}}},t)};function oe(e){var t=e.length,n=0===t?null:t,a="tweet"===e.type;return l.a.createElement("p",{className:v()("text-right text-xs",{"text-gray-700":!a||a&&t<=280,"text-red-500 ":a&&t>280})},"\xa0",n)}oe.defaultProps={type:""};var ue=oe;var se=function(e){return"https://twitter.com/".concat(e.userId.split("|")[1],"/status/").concat(e.statusIds[0])},le="Tweet";var ie=function(e){var t=e.disabled,n=e.onClick,a=e.waiting;return l.a.createElement("button",{disabled:t,className:v()("bg-gray-300 border border-gray-500 font-bold my-4 px-6 py-2 rounded self-center",{"tweries-background-color-blue-button":!t,"cursor-auto":t}),"data-testid":"tweet",onClick:n,type:"button"},a?l.a.createElement(y.a,{icon:w.b,spin:!0}):le)},pe="...",fe="Edits can be made in the boxes below before publishing",de="Log in",me="Login is necessary in order for your series of Tweets to be sent through your Twitter account",be="Start typing. To insert a break prior to reaching 280 characters, please use Newline(s)",he="Tweet",ve="Tweries",ge="Type your thoughts here",we="When 280 characters just aren't enough";var ye=function(e){var t=e.initialState,n=e.reducer,a=Object(s.useContext)(re),r=a.isAuthenticated,c=a.loading,u=a.loginWithRedirect,i=a.logout,d=a.user,h=Object(o.useFeature)();function E(e,t){e&&(console.log(e),H({type:$,value:!1})),t&&(console.log(t),H({type:$,value:!t.error}))}Object(s.useEffect)((function(){function e(){return(e=Object(b.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j();case 3:E(null,e.sent),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),E(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(s.useEffect)((function(){r&&d&&H({type:Q,value:d.sub})}),[r,d]);var O=L("source",""),k=Object(f.a)(O,2),N=k[0],S=k[1],C=Object(s.useReducer)(n,Object(p.a)({},t,{items:Y(h)({linefeed:t.linefeed,source:N}),source:N})),R=Object(f.a)(C,2),U=R[0],A=U.healthy,F=U.items,P=U.notification,J=U.source,z=U.userId,H=R[1];Object(s.useEffect)((function(){if(P&&"danger"!==P.type){var e=setTimeout((function(){H({type:X})}),3e3);return function(){return clearTimeout(e)}}}),[P]);var M=Object(s.useState)(""),B=Object(f.a)(M,2),G=B[0],ee=B[1],te=Object(s.useState)(!1),ne=Object(f.a)(te,2),ae=ne[0],ce=ne[1];function oe(e,t){var n=null,a=null,r="success";e||t.error?(a=e?e.message:t.error.message,r="danger"):n=se(t.data),console.log(e,t),H({type:Z,value:{link:n,message:a,type:r}}),"success"===r&&(ee(""),S("")),ce(!1)}function le(){return(le=Object(b.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ce(!0),e.prev=1,e.next=4,T({inReplyToTweetUrl:G,items:F,userId:z});case 4:oe(null,e.sent),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),oe(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}var ye=Object(s.useCallback)((function(e,t){t&&H({type:V,value:t.user.screen_name})}),[]);return c?l.a.createElement("article",{className:"container content-center mx-auto m-1 p-4 text-center"},pe):l.a.createElement("article",{className:"container content-center mx-auto m-1 p-4"},l.a.createElement("header",{className:"flex flex-row justify-between"},r?l.a.createElement(_,{logout:i,user:d}):l.a.createElement("span",{className:"my-4"})),l.a.createElement("h1",{className:"font-bold my-4 text-5xl text-center tweries-font-family"},ve),l.a.createElement("h2",{className:"my-4 text-center"},we),l.a.createElement("p",{className:"my-4 text-center"},l.a.createElement(y.a,{className:"tweries-color-blue",icon:g.a,size:"3x"})),r?l.a.createElement("form",{className:"flex flex-col",onSubmit:function(e){return e.preventDefault()}},l.a.createElement(W,{callback:ye,onChange:ee,tweetUrl:G,userId:z}),l.a.createElement("p",{className:"italic py-4 text-sm"},be),l.a.createElement("textarea",{className:"p-2 tweries-background-color-blue-white tweries-border","data-testid":"source",name:"source",onChange:function(e){H({type:q,value:e.target.value}),S(e.target.value)},placeholder:ge,rows:8,value:J}),l.a.createElement(ue,{length:J.length}),F.length>0&&[l.a.createElement("p",{className:"italic py-4 text-sm",key:"copy"},fe),l.a.createElement("ul",{className:"flex flex-col","data-testid":"list",key:"list"},F.map((function(e,t){return l.a.createElement("li",{className:"flex flex-col",key:e.id},l.a.createElement("label",{className:"pb-1 text-sm",htmlFor:e.id},"".concat(he," #").concat(t+1)),function(e){return l.a.createElement("textarea",{className:v()("p-2 tweries-background-color-blue-white",{"tweries-border":e.tweet.length<=280,"border-2 border-red-500":e.tweet.length>280}),name:e.id,onChange:function(t){H({type:K,value:{id:e.id,tweet:t.target.value}})},rows:4,value:e.tweet})}(e),l.a.createElement(ue,{length:e.tweet.length,type:"tweet"}))})))],l.a.createElement(ie,{disabled:!r||!F.length>0||!A||F.find((function(e){return e.tweet.length>280}))||!1,onClick:function(){return le.apply(this,arguments)},waiting:ae})):l.a.createElement(l.a.Fragment,null,l.a.createElement("p",{className:"flex justify-center my-4"},l.a.createElement("button",{className:"font-bold px-6 py-2 rounded tweries-background-color-blue-button","data-testid":"login",onClick:function(){return u({})},type:"button"},de)),l.a.createElement("p",{className:"flex justify-center my-4"},l.a.createElement(y.a,{className:"tooltip tweries-color-dark-blue",icon:w.a,size:"1x"}),l.a.createElement("span",{className:"p-3 mt-6 -ml-1 tooltip-text tweries-border"},me))),l.a.createElement(D,{notification:P,onClick:function(){return H({type:X})}}),l.a.createElement(I,{healthy:A,version:x.a}))};var xe=function(e){var t=e.logEvent,n=e.reducer;return function(e,a){var r=n(e,a);switch(a.type){case q:case K:break;default:t(a.type,a.value)}return r}},Ee=(n(50),n(17)),Oe=["FEATURE_V1"],je=n(18);var ke=function(){je.a.initialize("UA-54446639-10"),je.a.pageview("/")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));Object(i.render)(l.a.createElement(ce,{client_id:Ee.clientId,domain:Ee.domain,onRedirectCallback:function(e){window.history.replaceState({},document.title,e&&e.targetUrl?e.targetUrl:window.location.pathname)},redirect_uri:window.location.origin},l.a.createElement(a.AmplitudeProvider,{amplitudeInstance:c.a.getInstance(),apiKey:"7cbe8a9a37db4f88f06c79a387943cca"},l.a.createElement(a.Amplitude,null,(function(e){return function(e){var t=Object(o.setFeatures)(Oe);return l.a.createElement(u.a,{features:Oe},l.a.createElement(ye,{initialState:G({feature:t}),reducer:xe({logEvent:e,reducer:ee(t)})}))}(e.logEvent)})))),document.getElementById("root"),ke()),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[32,1,2]]]);
//# sourceMappingURL=main.10dd2187.chunk.js.map