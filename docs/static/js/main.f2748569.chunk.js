(this["webpackJsonpreact-photos-2-0"]=this["webpackJsonpreact-photos-2-0"]||[]).push([[0],{50:function(n,t,e){"use strict";e.r(t);var i,r,a,c,o,s,l,d,h=e(0),b=e(28),j=e.n(b),u=e(25),p=e.n(u),x=e(29),f=e(3),m=e(7),O=e.n(m),g=e(4),v=e(20),y=e(22),w=e(2),k={},A=Object(h.createContext)(k),I=A.Provider,B="setData",P=function(n){var t=n.children,e=Object(h.useReducer)((function(n,t){switch(t.type){case B:var e=t.payload.albums,i={};return{albums:e.map((function(n){var t=Object(v.a)(Object(v.a)({},n),{},{photos:n.photos.map((function(n){return Object(v.a)(Object(v.a)({},n),{},{url:"".concat("/React-Photos-2-0","/").concat(n.url)})}))});return i[n.id]=t,t})),albumsById:i};default:throw new Error}}),k),i=Object(y.a)(e,2),r=i[0],a=i[1];return Object(w.jsx)(I,{value:{state:r,dispatch:a},children:t})},R=function(){return Object(h.useContext)(A)},z=function(){return R().state.albums},L=Object(g.c)(i||(i=Object(f.a)(["\n    100% {\n        transform: rotate(360deg);\n    }\n"]))),C=Object(g.c)(r||(r=Object(f.a)(["\n    0% {\n        stroke-dasharray: 1, 200;\n        stroke-dashoffset: 0;\n    }\n    50% {\n        stroke-dasharray: 89, 200;\n        stroke-dashoffset: -35px;\n    }\n    100% {\n        stroke-dasharray: 89, 200;\n        stroke-dashoffset: -124px;\n    }\n"]))),E=g.b.div(a||(a=Object(f.a)(["\n    width: 50px;\n    height: 50px;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n"]))),F=g.b.div(c||(c=Object(f.a)(["\n    position: relative;\n    margin: 0 auto;\n    width: 50px;\n\n    &:before {\n        content: '';\n        display: block;\n        padding-top: 100%;\n    }\n"]))),U=g.b.svg(o||(o=Object(f.a)(["\n    position: absolute;\n    width: 50px;\n    height: 50px;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    animation: "," 2s linear infinite;\n    transform-origin: center center;\n    margin: auto;\n    stroke: #000000;\n"])),L),H=g.b.circle(s||(s=Object(f.a)(["\n    stroke-width: 3px;\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0;\n    animation: "," 1.5s ease-in-out infinite;\n    stroke-linecap: round;\n"])),C),J=function(){return Object(w.jsx)(E,{children:Object(w.jsx)(F,{children:Object(w.jsx)(U,{viewBox:"25 25 50 50",children:Object(w.jsx)(H,{cx:"50",cy:"50",r:"15",fill:"none","stroke-width":"3","stroke-miterlimit":"10"})})})})},D=e(19),G=e(52),M=e(51),Q=g.b.div(l||(l=Object(f.a)(["\n  width: ",";\n  height: ",";\n  border: ",";\n  align-items: center;\n  justify-content: center;\n  display: flex;\n"])),(function(n){return n.width?n.width:"100%"}),(function(n){return n.height?n.height:"100%"}),(function(n){return n.border?"#f2f2f2 solid 1px":"none"})),S=g.b.div(d||(d=Object(f.a)(["\n  position: absolute;\n  width: ",";\n  height: ",";\n  background-position: center center;\n  background-size: ",";\n  background-image: url(",");\n  background-repeat: no-repeat;\n  opacity: ",";\n  transition: ",";\n"])),(function(n){return n.width?n.width:"100%"}),(function(n){return n.height?n.height:"100%"}),(function(n){return n.type}),(function(n){return n.url}),(function(n){return n.opacity}),(function(n){return n.isAnimated?"opacity 500ms ease-out":"none"})),T="cover",V="contain",Z=function(n){var t=n.height,e=n.isAnimated,i=void 0===e||e,r=n.type,a=n.url,c=n.width,o=Object(h.useState)(""),s=Object(y.a)(o,2),l=s[0],d=s[1],b=void 0;""===l&&(b=Object(w.jsx)(J,{}));var j=void 0;return(j=new Image(c,t)).addEventListener("load",(function(){var n=j.src;d(n)}),!1),j.src=a,Object(w.jsxs)(Q,{width:c,height:t,children:[Object(w.jsx)(S,{height:t,isAnimated:i,opacity:""===l?0:1,type:r,url:l,width:c}),b]})};O.a.string,O.a.oneOf;Z.defaultProps={height:"100%",type:T,width:"100%"};var _,q,K,N,W,X,Y,$,nn,tn,en,rn,an,cn,on,sn,ln,dn=Z,hn=Object(g.b)(D.a)(_||(_=Object(f.a)(["\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  text-decoration: none;\n  width: 100%;\n"]))),bn=Object(g.b)(M.a.div)(q||(q=Object(f.a)(["\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  height: 180px;\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n"]))),jn=Object(g.b)(M.a.div)(K||(K=Object(f.a)(["\n  height: 180px;\n  position: relative;\n  width: 100%;\n"]))),un=g.b.h3(N||(N=Object(f.a)(["\n  color: rgba(0, 0, 0, 0.8);\n  font-size: 1.2rem;\n  margin: 8px 0 0;\n"]))),pn=g.b.p(W||(W=Object(f.a)(["\n  color: rgba(0, 0, 0, 0.8);\n  font-size: 1rem;\n  margin: 8px 0 0;\n"]))),xn={duration:.5,ease:[.43,.13,.23,.96]},fn={initial:{scale:.9,opacity:0},enter:{scale:1,opacity:1,transition:xn},exit:{scale:.9,opacity:0,transition:xn}},mn={hover:{scale:.95}},On={hover:{scale:1.1}},gn=(O.a.string,function(n){var t=n.imageUrl,e=n.isAnimated,i=n.subTitle,r=n.title,a=n.to;return Object(w.jsx)(M.a.div,{variants:fn,children:Object(w.jsxs)(hn,{to:a,children:[Object(w.jsx)(bn,{transition:xn,variants:mn,whileHover:"hover",children:Object(w.jsx)(jn,{variants:On,transition:xn,children:Object(w.jsx)(dn,{isAnimated:e,url:t})})}),Object(w.jsx)(un,{children:r}),i&&Object(w.jsx)(pn,{children:i})]})})}),vn=function(n,t){return n.map((function(n){var e=void 0;return void 0!==n.photos&&n.photos.length>0?e=n.photos[0].url:void 0!==n.url&&(e=n.url),Object(w.jsx)(gn,{id:n.id,imageUrl:e,isAnimated:!1,title:n.title,to:"".concat("/React-Photos-2-0","/").concat(t,"/").concat(n.id)},n.id)}))},yn=Object(g.b)(M.a.div)(X||(X=Object(f.a)(["\n  align-items: center;\n  display: flex;\n  flex-shrink: 0;\n  height: 40px;\n  margin: 20px 0 10px;\n  position: relative;\n"]))),wn=g.b.button(Y||(Y=Object(f.a)(["\n  align-items: center;\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n  display: flex;\n  fill: rgba(0, 0, 0, 0.5);\n  justify-content: center;\n  margin: 0 10px 0 -2px;\n  padding: 0;\n\n  svg {\n    fill: inherit;\n    height: 28px;\n    width: 28px;\n  }\n\n  &:hover {\n    fill: rgba(0, 0, 0, 1);\n  }\n\n  &:focus {\n    outline: none;\n  }\n"]))),kn=g.b.h2($||($=Object(f.a)(["\n  font-size: 1.8rem;\n  line-height: 2.1rem;\n  font-weight: normal;\n  margin: 1px 0 0 0;\n  flex-grow: 1;\n  align-items: center;\n  display: flex;\n"]))),An={duration:.5},In=(O.a.func,function(n){var t=n.onBack,e=n.title,i=void 0;return t&&(i=Object(w.jsx)(wn,{onClick:t,children:Object(w.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(w.jsx)("path",{d:"M15.535 3.515L7.04999 12L15.535 20.485L16.95 19.071L9.87799 12L16.95 4.929L15.535 3.515Z"})})})),Object(w.jsxs)(yn,{animate:"enter",exit:"exit",initial:"initial",variants:{initial:{opacity:0,transition:An,x:-20},enter:{opacity:1,transition:An,x:0},exit:{opacity:0,transition:An,x:20}},children:[i,Object(w.jsx)(kn,{children:e})]})}),Bn=g.b.div(nn||(nn=Object(f.a)(["\n  display: flex;\n  height: calc(100vh - 65px);\n  justify-content: center;\n  width: 100%;\n"]))),Pn=g.b.div(tn||(tn=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 0 25px;\n  width: 100%;\n\n  @media (min-width: 1200px) {\n    max-width: 1200px;\n  }\n"]))),Rn=function(n){var t=n.children;return Object(w.jsx)(Bn,{children:Object(w.jsx)(Pn,{children:t})})},zn=g.b.div(en||(en=Object(f.a)(["\n  align-items: center;\n  border-bottom: 1px solid #eeeeee;\n  display: flex;\n  flex-shrink: 0;\n  height: 65px;\n  justify-content: flex-start;\n  margin: 0 25px;\n  position: relative;\n"]))),Ln=g.b.h2(rn||(rn=Object(f.a)(["\n  color: rgba(0, 0, 0, 0.7);\n  font-size: 1.5rem;\n  line-height: 1rem;\n  font-weight: normal;\n  margin: 1px 0 0 0;\n"]))),Cn=(O.a.func,function(){return Object(w.jsx)(zn,{children:Object(w.jsx)(Ln,{children:"React Photos"})})}),En=Object(g.b)(M.a.div)(an||(an=Object(f.a)(["\n  display: grid;\n  gap: 20px;\n  grid-template-columns: 1fr;\n  width: 100%;\n\n  @media (min-width: 460px) {\n    grid-template-columns: 1fr 1fr;\n  }\n\n  @media (min-width: 800px) {\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n\n  @media (min-width: 1000px) {\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n  }\n\n  @media (min-width: 1250px) {\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n  }\n"]))),Fn=function(n){var t=n.children;return Object(w.jsx)(En,{animate:"enter",exit:"exit",initial:"initial",variants:{enter:{transition:{staggerChildren:.1}},exit:{transition:{staggerChildren:.1}}},children:t})},Un=function(){var n=z(),t=vn(n,"album");return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(Cn,{}),Object(w.jsxs)(Rn,{children:[Object(w.jsx)(In,{title:"Albums"}),Object(w.jsx)(Fn,{children:t})]})]})},Hn=function(n){var t=n.albumId,e=n.navigate,i=function(n){return R().state.albumsById[n]}(t),r=vn(i.photos,"album/".concat(t,"/photo"));return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(Cn,{}),Object(w.jsxs)(Rn,{children:[Object(w.jsx)(In,{title:i.title,onBack:function(){e("".concat("/React-Photos-2-0","/"))}}),Object(w.jsx)(Fn,{children:r})]})]})},Jn=g.b.div(cn||(cn=Object(f.a)(["\n  height: 100%;\n  position: absolute;\n  width: 100%;\n"]))),Dn=(O.a.string,function(n){var t=n.isAnimated,e=n.imageUrl;n.title;return Object(w.jsx)(Jn,{children:Object(w.jsx)(dn,{isAnimated:t,type:V,url:e})})}),Gn=function(n){var t=n.albumId,e=n.navigate,i=n.photoId,r=function(n,t){return R().state.albumsById[n].photos.filter((function(n){return n.id===t}))[0]}(t,i);return console.log(r),Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(Cn,{}),Object(w.jsxs)(Rn,{children:[Object(w.jsx)(In,{title:r.title,onBack:function(){e("".concat("/React-Photos-2-0","/album/").concat(t))}}),Object(w.jsx)(M.a.div,{animate:{opacity:1,scale:1},initial:{opacity:0,scale:.9},exit:{opacity:0,scale:.9},style:{display:"flex",height:"100%"},transition:{ease:"easeOut",duration:.5},children:Object(w.jsx)("div",{style:{flexGrow:1,margin:"20px 0 40px",position:"relative"},children:Object(w.jsx)(Dn,{id:r.id,imageUrl:r.url,isAnimated:!1,title:r.title})})})]})]})},Mn=Object(g.b)(D.c)(on||(on=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n"]))),Qn=function(){return Object(w.jsx)(D.b,{children:function(n){var t=n.location;return Object(w.jsx)(G.a,{exitBeforeEnter:!0,children:Object(w.jsxs)(Mn,{basepath:"/React-Photos-2-0",location:t,children:[Object(w.jsx)(Un,{exact:!0,path:"/"}),Object(w.jsx)(Hn,{path:"/album/:albumId"}),Object(w.jsx)(Gn,{path:"/album/:albumId/photo/:photoId"})]},t.key)})}})},Sn=Object(g.a)(sn||(sn=Object(f.a)(["\n  html {\n    font-size: 14px;\n    line-height: 1.3rem;\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  body {\n    margin: 0;\n    padding: 0;\n    font-family: 'Questrial', Arial, Helvetica, Verdana, sans-serif;\n    color: rgba(0, 0, 0, 0.8);\n  }\n"]))),Tn=g.b.div(ln||(ln=Object(f.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: center;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n"]))),Vn=(O.a.string,function(n){var t=n.source,e=R().dispatch,i=z();return Object(h.useEffect)((function(){(function(){var n=Object(x.a)(p.a.mark((function n(){var i,r;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(t);case 2:return i=n.sent,n.next=5,i.json();case 5:r=n.sent,e({payload:r,type:B});case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()()}),[e,t]),i?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(Sn,{}),Object(w.jsx)(Qn,{})]}):Object(w.jsx)(Tn,{children:Object(w.jsx)(J,{})})});j.a.render(Object(w.jsx)(P,{children:Object(w.jsx)(Vn,{source:"".concat("/React-Photos-2-0","/sample_data.json")})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.f2748569.chunk.js.map