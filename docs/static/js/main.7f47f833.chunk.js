(this["webpackJsonpreact-photos-2-0"]=this["webpackJsonpreact-photos-2-0"]||[]).push([[0],{36:function(n,t,e){"use strict";e.r(t);var o,i,r,a,c,s,l,d,u=e(0),b=e(14),h=e.n(b),j=e(10),f=e.n(j),p=e(15),g=e(2),x=e(4),O=e.n(x),m=e(8),v=e(3),w=e(6),y=e(7),k=e(1),R={},I=Object(u.createContext)(R),P=I.Provider,B="setData",E=function(n){var t=n.children,e=Object(u.useReducer)((function(n,t){switch(t.type){case B:var e=t.payload.albums,o={};return{albums:e.map((function(n){var t=Object(w.a)(Object(w.a)({},n),{},{photos:n.photos.map((function(n){return Object(w.a)(Object(w.a)({},n),{},{url:"".concat("/React-Photos-2-0","/").concat(n.url)})}))});return o[n.id]=t,t})),albumsById:o};default:throw new Error}}),R),o=Object(y.a)(e,2),i=o[0],r=o[1];return Object(k.jsx)(P,{value:{state:i,dispatch:r},children:t})},C=function(){return Object(u.useContext)(I)},U=function(){return C().state.albums},z=Object(v.c)(o||(o=Object(g.a)(["\n    100% {\n        transform: rotate(360deg);\n    }\n"]))),F=Object(v.c)(i||(i=Object(g.a)(["\n    0% {\n        stroke-dasharray: 1, 200;\n        stroke-dashoffset: 0;\n    }\n    50% {\n        stroke-dasharray: 89, 200;\n        stroke-dashoffset: -35px;\n    }\n    100% {\n        stroke-dasharray: 89, 200;\n        stroke-dashoffset: -124px;\n    }\n"]))),W=v.b.div(r||(r=Object(g.a)(["\n    width: 50px;\n    height: 50px;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n"]))),L=v.b.div(a||(a=Object(g.a)(["\n    position: relative;\n    margin: 0 auto;\n    width: 50px;\n\n    &:before {\n        content: '';\n        display: block;\n        padding-top: 100%;\n    }\n"]))),A=v.b.svg(c||(c=Object(g.a)(["\n    position: absolute;\n    width: 50px;\n    height: 50px;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    animation: "," 2s linear infinite;\n    transform-origin: center center;\n    margin: auto;\n    stroke: #000000;\n"])),z),D=v.b.circle(s||(s=Object(g.a)(["\n    stroke-width: 3px;\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0;\n    animation: "," 1.5s ease-in-out infinite;\n    stroke-linecap: round;\n"])),F),J=function(){return Object(k.jsx)(W,{children:Object(k.jsx)(L,{children:Object(k.jsx)(A,{viewBox:"25 25 50 50",children:Object(k.jsx)(D,{cx:"50",cy:"50",r:"15",fill:"none","stroke-width":"3","stroke-miterlimit":"10"})})})})},N=v.b.div(l||(l=Object(g.a)(["\n    width: ",";\n    height: ",";\n    border: ",";\n    align-items: center;\n    justify-content: center;\n    display: flex;\n"])),(function(n){return n.width?n.width:"100%"}),(function(n){return n.height?n.height:"100%"}),(function(n){return n.border?"#f2f2f2 solid 1px":"none"})),H=v.b.div(d||(d=Object(g.a)(["\n    position: absolute;\n    width: ",";\n    height: ",";\n    background-position: center center;\n    background-size: ",";\n    background-image: url(",");\n    background-repeat: no-repeat;\n    opacity: ",";\n    transition: opacity 500ms ease-out;\n"])),(function(n){return n.width?n.width:"100%"}),(function(n){return n.height?n.height:"100%"}),(function(n){return n.type}),(function(n){return n.url}),(function(n){return n.opacity})),S="cover",V="contain",$=function(n){var t=Object(u.useState)(""),e=Object(y.a)(t,2),o=e[0],i=e[1],r=n.height,a=n.type,c=n.url,s=n.width,l=void 0;""===o&&(l=Object(k.jsx)(J,{}));var d=void 0;return(d=new Image(s,r)).addEventListener("load",(function(){var n=d.src;i(n)}),!1),d.src=c,Object(k.jsxs)(N,{width:s,height:r,children:[Object(k.jsx)(H,{url:o,opacity:""===o?0:1,width:s,height:r,type:a}),l]})};O.a.string,O.a.oneOf;$.defaultProps={height:"100%",type:S,width:"100%"};var _,q,G,K,M,Q,T,X,Y,Z,nn,tn,en=$,on=Object(v.b)(m.a)(_||(_=Object(g.a)(["\n  position: relative;\n  cursor: pointer;\n"]))),rn=v.b.p(q||(q=Object(g.a)(["\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n  left: 0;\n  color: rgba(255, 255, 255, 1);\n  padding: 10px;\n  margin: 0;\n  background: linear-gradient(\n    to bottom,\n    transparent 0%,\n    rgba(0, 0, 0, 0.75) 100%\n  );\n  align-items: center;\n  justify-content: flex-start;\n  flex-direction: row;\n  display: flex;\n"]))),an=(O.a.string,function(n){var t=n.title,e=n.imageUrl,o=n.to;return Object(k.jsxs)(on,{to:o,children:[Object(k.jsx)(en,{url:e}),Object(k.jsx)(rn,{children:t})]})}),cn=function(n,t){return n.map((function(n){var e=void 0;return void 0!==n.photos&&n.photos.length>0?e=n.photos[0].url:void 0!==n.url&&(e=n.url),Object(k.jsx)(an,{id:n.id,title:n.title,imageUrl:e,to:"".concat("/React-Photos-2-0","/").concat(t,"/").concat(n.id)},n.id)}))},sn=v.b.div(G||(G=Object(g.a)(["\n    width: 100%;\n    grid-template-rows: repeat(3, 180px [col-start]);\n    grid-template-columns: 25% 25% 25% 25%;\n    display: grid;\n"]))),ln=(O.a.array,function(n){var t=n.children;return Object(k.jsx)(sn,{children:t})}),dn=e.p+"static/media/back-arrow.4917378d.svg",un=v.b.div(K||(K=Object(g.a)(["\n  position: relative;\n  width: 100%;\n  height: 50px;\n  border-bottom: rgba(0, 0, 0, 0.05) solid 1px;\n  display: flex;\n"]))),bn=v.b.button(M||(M=Object(g.a)(["\n  height: 50px;\n  width: 50px;\n  cursor: pointer;\n  border: none;\n  border-right: rgba(0, 0, 0, 0.1) solid 1px;\n  background-color: transparent;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n\n  &:hover {\n    background-color: rgba(0, 0, 0, 0.05);\n  }\n\n  &:focus {\n    outline: none;\n  }\n"]))),hn=v.b.h2(Q||(Q=Object(g.a)(["\n  font-size: 1.2em;\n  line-height: 1em;\n  font-weight: normal;\n  margin: 1px 0 0 15px;\n  flex-grow: 1;\n  align-items: center;\n  display: flex;\n"]))),jn=(O.a.func,function(n){var t=n.onBack,e=n.title,o=void 0;return t&&(o=Object(k.jsx)(bn,{onClick:t,children:Object(k.jsx)("img",{src:dn,alt:"Back"})})),Object(k.jsxs)(un,{children:[o,Object(k.jsx)(hn,{children:e})]})}),fn=v.b.div(T||(T=Object(g.a)(["\n  flex-grow: 1;\n  position: relative;\n  width: 100%;\n"]))),pn=function(){var n=U(),t=cn(n,"album");return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(jn,{title:"React Photos"}),Object(k.jsx)(fn,{children:Object(k.jsx)(ln,{children:t})})]})},gn=function(n){var t=n.albumId,e=n.navigate,o=function(n){return C().state.albumsById[n]}(t),i=cn(o.photos,"album/".concat(t,"/photo"));return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(jn,{title:o.title,onBack:function(){e("".concat("/React-Photos-2-0","/"))}}),Object(k.jsx)(fn,{children:Object(k.jsx)(ln,{children:i})})]})},xn=v.b.div(X||(X=Object(g.a)(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n"]))),On=v.b.p(Y||(Y=Object(g.a)(["\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n  left: 0;\n  color: rgba(255, 255, 255, 1);\n  padding: 10px;\n  margin: 0;\n  background: linear-gradient(\n    to bottom,\n    transparent 0%,\n    rgba(0, 0, 0, 0.75) 100%\n  );\n  align-items: center;\n  justify-content: flex-start;\n  flex-direction: row;\n  display: flex;\n"]))),mn=(O.a.string,function(n){var t=n.title,e=n.imageUrl;return Object(k.jsxs)(xn,{children:[Object(k.jsx)(en,{url:e,type:V}),Object(k.jsx)(On,{children:t})]})}),vn=function(n){var t=n.albumId,e=n.navigate,o=n.photoId,i=function(n,t){return C().state.albumsById[n].photos.filter((function(n){return n.id===t}))[0]}(t,o);return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(jn,{title:i.title,onBack:function(){e("".concat("/React-Photos-2-0","/album/").concat(t))}}),Object(k.jsx)(fn,{children:Object(k.jsx)(mn,{id:i.id,title:i.title,imageUrl:i.url})})]})},wn=Object(v.a)(Z||(Z=Object(g.a)(["\n  html {\n    font-size: 14px;\n    line-height: 1.3rem;\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  body {\n    margin: 0;\n    padding: 0;\n    font-family: 'Roboto Condensed', Arial, Helvetica, Verdana, sans-serif;\n    color: rgba(0, 0, 0, 0.8);\n  }\n"]))),yn=Object(v.b)(m.b)(nn||(nn=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n"]))),kn=v.b.div(tn||(tn=Object(g.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: center;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n"]))),Rn=(O.a.string,function(n){var t=n.source,e=C().dispatch,o=U();return Object(u.useEffect)((function(){(function(){var n=Object(p.a)(f.a.mark((function n(){var o,i;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("loadData"),n.next=3,fetch(t);case 3:return o=n.sent,n.next=6,o.json();case 6:i=n.sent,e({payload:i,type:B});case 8:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()()}),[e,t]),o?Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(wn,{}),Object(k.jsxs)(yn,{basepath:"/React-Photos-2-0",children:[Object(k.jsx)(pn,{exact:!0,path:"/"}),Object(k.jsx)(gn,{path:"/album/:albumId"}),Object(k.jsx)(vn,{path:"/album/:albumId/photo/:photoId"})]})]}):Object(k.jsx)(kn,{children:Object(k.jsx)(J,{})})}),In=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Pn(n){navigator.serviceWorker.register(n).then((function(n){n.onupdatefound=function(){var t=n.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(n){console.error("Error during service worker registration:",n)}))}h.a.render(Object(k.jsx)(E,{children:Object(k.jsx)(Rn,{source:"".concat("/React-Photos-2-0","/sample_data.json")})}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/React-Photos-2-0",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/React-Photos-2-0","/service-worker.js");In?function(n){fetch(n).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(n){n.unregister().then((function(){window.location.reload()}))})):Pn(n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n):Pn(n)}))}}()}},[[36,1,2]]]);
//# sourceMappingURL=main.7f47f833.chunk.js.map