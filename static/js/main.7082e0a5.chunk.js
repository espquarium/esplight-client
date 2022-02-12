(this["webpackJsonpesplight-client"]=this["webpackJsonpesplight-client"]||[]).push([[0],{38:function(e,n,t){},61:function(e,n,t){"use strict";t.r(n);var c,r,i,a,o,s,d,l,b,u,j,h,p,x,g,O,f,m=t(1),v=t.n(m),k=t(11),w=t.n(k),y=(t(38),t(6)),C=t(8),S=t(3),T=t(4),U={primary:"#21a0a0",navbar:"#046865",background:"#eaeaea"},z=t(2),H=T.a.div(c||(c=Object(S.a)(["\n  height: 100vh;\n  background-color: ",";\n"])),U.background),A=function(e){var n=e.children;return Object(z.jsx)(H,{children:n})},I=T.a.div(r||(r=Object(S.a)(["\n  height: ","px;\n"])),(function(e){return e.height||10})),M=t(9),D=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=Object(m.useState)(e),t=Object(y.a)(n,2),c=t[0],r=t[1],i=Object(m.useCallback)((function(){return r((function(e){return!e}))}),[]);return[c,i]},E=t(15),F=t.n(E),J="esplightserver",L=Object(m.createContext)({}),q=function(e){var n=e.children,t=Object(m.useState)(localStorage.getItem(J)||""),c=Object(y.a)(t,2),r=c[0],i=c[1];return Object(z.jsx)(L.Provider,{value:{serverUrl:r,setServerUrl:i},children:n})},B=function(){var e=Object(m.useContext)(L),n=e.serverUrl,t=e.setServerUrl;return{api:Object(m.useMemo)((function(){return F.a.create({baseURL:n})}),[n]),serverUrl:n,setServerUrl:t}},P=T.a.div(i||(i=Object(S.a)(["\n  border-radius: 10px;\n  background-color: white;\n  color: black;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n"]))),R=T.a.div(a||(a=Object(S.a)(["\n  height: 100%;\n  z-index: 9;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  background-color: ",";\n\n  display: flex;\n  flex-direction: column;\n  padding: 0 20px 0 20px;\n"])),U.background),$=T.a.div(o||(o=Object(S.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  h1 {\n    color: ",";\n  }\n"])),U.primary),G=T.a.input(s||(s=Object(S.a)(["\n  /* background-color: ","; */\n  border-radius: 10px;\n  border: 1px solid black;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  text-indent: 10px;\n\n  :focus {\n    outline: none;\n  }\n"])),U.primary),K=T.a.button(d||(d=Object(S.a)(["\n  background-color: ",";\n  color: white;\n  font-weight: bold;\n  width: 100%;\n  border-radius: 10px;\n  border: none;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  font-size: 1rem;\n"])),U.primary),N=function(e){var n=e.children;return Object(z.jsx)(R,{children:n})},Q=function(e){var n=e.toggle,t=B(),c=Object(m.useState)(t.serverUrl),r=Object(y.a)(c,2),i=r[0],a=r[1];return Object(z.jsxs)(N,{children:[Object(z.jsxs)($,{children:[Object(z.jsx)("h1",{children:"Settings"}),Object(z.jsx)(M.c,{color:"black",size:20,onClick:function(){return n()}})]}),Object(z.jsxs)(P,{children:[Object(z.jsx)("label",{htmlFor:"ipv4",children:"Server ipv4"}),Object(z.jsx)(I,{}),Object(z.jsx)(G,{id:"ipv4",type:"url",name:"ip",value:i,placeholder:"type server ip here",pattern:"^((\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.){3}(\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])$",onChange:function(e){var n,t=e.target;return n=t.value,void a(n.includes("http")?n:"http://".concat(n))}}),Object(z.jsx)(I,{}),Object(z.jsx)(K,{onClick:function(){F.a.get("".concat(i,"/verify")).then((function(){return C.a.success("success, server connected")})).catch((function(e){return C.a.error("server not found")}))},children:"Test"}),Object(z.jsx)(I,{}),Object(z.jsx)(K,{onClick:function(){return window.localStorage.setItem(J,i),C.a.success("ip saved"),void t.setServerUrl(i)},children:"Save"})]})]})},V=T.a.header(l||(l=Object(S.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: ",";\n  color: white;\n  padding: 0 20px 0 20px;\n  box-shadow: 0px 0px 19px -4px #000000;\n  height: 60px;\n"])),U.navbar),W=function(){var e=D(!1),n=Object(y.a)(e,2),t=n[0],c=n[1];return Object(z.jsxs)(V,{children:[Object(z.jsx)("h1",{children:"\ud83d\udc1f Esplight"}),Object(z.jsx)(M.b,{size:30,onClick:function(){return c()}}),t&&Object(z.jsx)(Q,{toggle:function(){return c()}})]})},X=t(10),Y=t(32),Z=t(16),_=t.n(Z),ee=function(e){var n=e.toggle,t=e.times,c=e.editTimes,r=Object(m.useState)(),i=Object(y.a)(r,2),a=i[0],o=i[1];return Object(z.jsxs)(N,{children:[Object(z.jsxs)($,{children:[Object(z.jsx)("h1",{children:"Add new Time"}),Object(z.jsx)(M.c,{color:"black",size:20,onClick:function(){return n()}})]}),Object(z.jsxs)(P,{children:[Object(z.jsx)("label",{htmlFor:"time",children:"Time"}),Object(z.jsx)(I,{}),Object(z.jsx)(G,{type:"time",id:"time",name:"time",min:"00:00",max:"23:59",required:!0,onChange:function(e){var n=e.target;return o(n.valueAsDate)}}),Object(z.jsx)(I,{}),Object(z.jsx)(K,{onClick:function(){return function(){if(a){var e=Object(X.a)(t),r=_()(a).add(a.getTimezoneOffset(),"minutes");e.push({h:r.get("hours"),m:r.get("minutes"),c:[0,0,0,0]}),e.sort((function(e,n){return e.h-n.h||e.m-n.m})),c(e),n()}}()},children:"Add"})]})]})},ne=T.a.table(b||(b=Object(S.a)(["\n  width: 100%;\n  text-align: center;\n\n  /* border-collapse: collapse; */\n  margin: 0;\n  padding: 0;\n  table-layout: fixed;\n\n  caption {\n    font-size: 1.5em;\n    margin: 0.5em 0 0.75em;\n  }\n\n  @media screen and (max-width: 600px) {\n    & {\n      border: 0;\n    }\n\n    & caption {\n      font-size: 1.3em;\n    }\n\n    & thead {\n      border: none;\n      clip: rect(0 0 0 0);\n      height: 1px;\n      margin: -1px;\n      overflow: hidden;\n      padding: 0;\n      position: absolute;\n      width: 1px;\n    }\n\n    & tr {\n      border-bottom: 3px solid #ddd;\n      display: block;\n      margin-bottom: 0.625em;\n      margin: 5px;\n      padding: 10px;\n      background-color: white;\n      border-radius: 10px;\n    }\n\n    & td {\n      border-bottom: 1px solid #ddd;\n      display: block;\n      font-size: 0.8em;\n      text-align: right;\n    }\n\n    & td::before {\n      /*\n    * aria-label has no advantage, it won't be read inside a table\n    content: attr(aria-label);\n    */\n      content: attr(data-label);\n      float: left;\n      font-weight: bold;\n      text-transform: uppercase;\n    }\n\n    & td:last-child {\n      border-bottom: 0;\n    }\n\n    input {\n      text-align: right;\n    }\n  }\n"]))),te=T.a.thead(u||(u=Object(S.a)(["\n  background-color: ",";\n  color: white;\n"])),U.navbar),ce=(T.a.tfoot(j||(j=Object(S.a)(["\n  // custom css goes here\n"]))),T.a.tbody(h||(h=Object(S.a)(["\n  // custom css goes here\n"])))),re=T.a.tr(p||(p=Object(S.a)(["\n  @media screen and (min-width: 600px) {\n    :nth-child(even) {\n      background-color: #f2f2f2;\n    }\n  }\n"]))),ie=(T.a.th(x||(x=Object(S.a)(["\n  // custom css goes here\n"]))),T.a.td(g||(g=Object(S.a)([""])))),ae=T.a.div(O||(O=Object(S.a)(["\n  right: 20px;\n  bottom: 20px;\n  position: fixed;\n\n  padding: 15px;\n  background-color: ",";\n  border-radius: 50%;\n\n  box-shadow: 5px 5px 15px -5px rgba(0, 0, 0, 0.34);\n\n  cursor: pointer;\n\n  :hover {\n    transform: scale(1.05);\n  }\n"])),U.primary),oe=T.a.input(f||(f=Object(S.a)(["\n  background-color: inherit;\n  display: table-cell;\n  /* width: 100%; */\n  /* padding: 10px; */\n  border: none;\n  text-align: center;\n  /* margin: 0px; */\n  :focus {\n    /* width: 100%; */\n    outline: -webkit-focus-ring-color auto 1px;\n  }\n"]))),se=function(e){var n=e.times,t=e.editTimes,c=D(!1),r=Object(y.a)(c,2),i=r[0],a=r[1];return Object(z.jsxs)(z.Fragment,{children:[i&&Object(z.jsx)(ee,{times:n,toggle:a,editTimes:t}),Object(z.jsx)(ae,{onClick:function(){return a()},children:Object(z.jsx)(Y.a,{color:"white"})}),Object(z.jsxs)(ne,{children:[Object(z.jsx)("caption",{children:"Light Times"}),Object(z.jsx)(te,{children:Object(z.jsxs)(re,{children:[Object(z.jsx)("th",{scope:"col",children:"Time"}),Object(z.jsx)("th",{scope:"col",children:"CH1"}),Object(z.jsx)("th",{scope:"col",children:"CH2"}),Object(z.jsx)("th",{scope:"col",children:"CH3"}),Object(z.jsx)("th",{scope:"col",children:"CH4"}),Object(z.jsx)("th",{scope:"col"})]})}),Object(z.jsx)(ce,{children:n.map((function(e,c){var r=new Date;r.setHours(e.h),r.setMinutes(e.m);var i=r.getHours(),a=r.getMinutes(),o="".concat(i<10?"0":"").concat(i,":").concat(a<10?"0":"").concat(a);return Object(z.jsxs)(re,{children:[Object(z.jsx)(ie,{"data-label":"Time",scope:"row",children:Object(z.jsx)(oe,{type:"time",value:o,onChange:function(e){return function(e,c){if(e){var r=Object(X.a)(n),i=_()(e).add(e.getTimezoneOffset(),"minutes");r[c].h=i.get("hours"),r[c].m=i.get("minutes"),t(r)}}(e.target.valueAsDate,c)}})}),e.c.map((function(e,r){return Object(z.jsx)(ie,{"data-label":"ch".concat(r),children:Object(z.jsx)(oe,{value:"".concat(e,"%"),onChange:function(e){return function(e,c,r){var i;e=(null===(i=e.match(/\d+/g))||void 0===i?void 0:i.join(""))||"0";var a=Object(X.a)(n);a[c].c[r]=parseInt(e),t(a),console.log("editChannel ".concat(c," - ").concat(r))}(e.target.value,c,r)}})})})),Object(z.jsx)(ie,{"data-label":"action",children:Object(z.jsx)(M.a,{onClick:function(){return function(e,c){if(window.confirm("confirm delete of time ".concat(e,"?"))){var r=Object(X.a)(n);r.splice(c,1),t(r)}}(o,c)}})})]},"row".concat(c))}))})]})]})},de=t(33);var le=function(){var e=B(),n=Object(m.useState)([]),t=Object(y.a)(n,2),c=t[0],r=t[1],i=Object(m.useState)(),a=Object(y.a)(i,2),o=a[0],s=a[1];return Object(m.useEffect)((function(){e.serverUrl?e.api.get("/light-times").then((function(e){var n=e.data;C.a.success("loaded light times"),r(n)})).catch((function(){C.a.error("error when load data, check your device")})):C.a.info("no server found in configuration, please add before use")}),[e.serverUrl,e.api]),Object(de.a)((function(){e.serverUrl&&o&&e.api.put("/light-times",o).then((function(e){var n=e.data;C.a.success("saved light times"),r(n)})).catch((function(){C.a.error("error when save data, check your device")}))}),750,[o]),Object(z.jsxs)(A,{children:[Object(z.jsx)(W,{}),Object(z.jsx)(I,{height:20}),Object(z.jsx)(se,{times:c,editTimes:s})]})};w.a.render(Object(z.jsx)(v.a.StrictMode,{children:Object(z.jsx)(q,{children:Object(z.jsx)(le,{})})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.7082e0a5.chunk.js.map