(this["webpackJsonpreact-side"]=this["webpackJsonpreact-side"]||[]).push([[0],{125:function(e,t,n){},130:function(e,t,n){},131:function(e,t,n){"use strict";n.r(t);var a,r,s,c=n(0),i=n(35),o=n.n(i),l=n(52),u=n(12),d=n(1),h=function(){return Object(d.jsx)("div",{children:"Home Page"})},j=n(6),p=n.n(j),b=n(10),m=n(8),g=n(9),f=n.n(g),v=n(59),O={isAuthenticated:!1,authenticate:function(){this.isAuthenticated=!0},signOut:function(){this.isAuthenticated=!1},getAuth:function(){return this.isAuthenticated}},x={email:(null===(a=sessionStorage.getItem("user"))||void 0===a?void 0:a.email)||null,username:(null===(r=sessionStorage.getItem("user"))||void 0===r?void 0:r.username)||null,type:(null===(s=sessionStorage.getItem("user"))||void 0===s?void 0:s.type)||null},w=Object(c.createContext)(),y=function(e,t){switch(t.type){case"LOGIN":var n=t.payload;return Object(v.a)(Object(v.a)({},e),{},{email:n.email,username:n.username,type:n.type});case"LOGOUT":return Object(v.a)(Object(v.a)({},e),{},{email:!1,username:!1,type:!1});default:return e}},k=function(e){var t=e.children,n=Object(c.useReducer)(y,x),a=Object(m.a)(n,2),r=a[0],s=a[1];f.a.create({baseURL:"https://chatting-server-git.herokuapp.com/"});return Object(c.useEffect)((function(){(function(){var e=Object(b.a)(p.a.mark((function e(){var t,n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("https://chatting-server-git.herokuapp.com//userData",{withCredentials:!0});case 3:t=e.sent,O.authenticate(),s({type:"LOGIN",payload:t.data}),sessionStorage.setItem("user",JSON.stringify(t.data)),e.next=32;break;case 9:if(e.prev=9,e.t0=e.catch(0),403!==(null===(n=e.t0.response)||void 0===n?void 0:n.status)){e.next=30;break}return e.prev=12,e.next=15,f.a.get("https://chatting-server-git.herokuapp.com//refreshToken",{withCredentials:!0});case 15:return O.authenticate(),e.next=18,f.a.get("https://chatting-server-git.herokuapp.com//userData",{withCredentials:!0});case 18:a=e.sent,console.log("login with RT"),s({type:"LOGIN",payload:a.data}),sessionStorage.setItem("user",JSON.stringify(a.data)),e.next=28;break;case 24:e.prev=24,e.t1=e.catch(12),O.signOut(),sessionStorage.removeItem("user");case 28:e.next=32;break;case 30:O.signOut(),sessionStorage.removeItem("user");case 32:case"end":return e.stop()}}),e,null,[[0,9],[12,24]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(d.jsx)(w.Provider,{value:{state:r,dispatch:s},children:t})},C=(n(73),n(50),function(){var e=Object(c.useState)(""),t=Object(m.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(m.a)(r,2),i=s[0],o=s[1],l=Object(c.useState)(""),h=Object(m.a)(l,2),j=h[0],g=h[1],v=Object(c.useState)(""),x=Object(m.a)(v,2),y=x[0],k=x[1],C=f.a.create({baseURL:"https://chatting-server-git.herokuapp.com/"}),S=(Object(c.useContext)(w).state,Object(c.useContext)(w).dispatch),I=Object(u.f)(),N=function(){var e=Object(b.a)(p.a.mark((function e(t){var a,r,s,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={name:n,email:i,password:j,type:"normal"},e.prev=2,e.next=5,C.post("register",a,{withCredentials:!0});case 5:return r=e.sent,console.log(r.data),e.next=9,O.authenticate();case 9:return e.next=11,window.sessionStorage.setItem("user",JSON.stringify(r.data));case 11:return e.next=13,S({type:"LOGIN",payload:r.data});case 13:window.location.replace("/chatting"),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(2),console.log(null===(s=e.t0.response)||void 0===s?void 0:s.data),k(null===(c=e.t0.response)||void 0===c?void 0:c.data);case 20:case"end":return e.stop()}}),e,null,[[2,16]])})));return function(t){return e.apply(this,arguments)}}();return O.getAuth()&&I.push("/chatting"),Object(d.jsx)("div",{className:"outer",children:Object(d.jsxs)("form",{className:"inner",onSubmit:N,children:[Object(d.jsx)("h3",{children:"Register"}),Object(d.jsx)("p",{style:{marginRight:"30px"},children:y}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{children:"Name"}),Object(d.jsx)("input",{type:"text",value:n,onChange:function(e){a(e.target.value)},className:"form-control",placeholder:"First name"})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{children:"Email"}),Object(d.jsx)("input",{type:"email",value:i,onChange:function(e){o(e.target.value)},className:"form-control",placeholder:"Enter email"})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{children:"Password"}),Object(d.jsx)("input",{type:"password",value:j,onChange:function(e){g(e.target.value)},className:"form-control",placeholder:"Enter password"})]}),Object(d.jsx)("button",{type:"submit",className:"btn btn-dark btn-lg btn-block",children:"Register"}),Object(d.jsxs)("p",{className:"forgot-password text-right",children:["Already registered ",Object(d.jsx)("a",{href:"/login",children:"log in?"})]})]})})}),S={searchedItem:null},I=Object(c.createContext)(),N=function(e,t){switch(t.type){case"Change":return{searchedItem:t.payload};case"Empty":return{searchedItem:null};default:return e}},E=function(e){var t=e.children,n=Object(c.useReducer)(N,S),a=Object(m.a)(n,2),r=a[0],s=a[1];return Object(d.jsx)(I.Provider,{value:{search:r,searchDispatch:s},children:t})},L=n(138),R=n(88),F=function(e){var t=Object(c.useState)(""),n=Object(m.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(""),i=Object(m.a)(s,2),o=i[0],l=i[1],u=Object(c.useState)(""),h=Object(m.a)(u,2),j=h[0],g=h[1],v=Object(c.useState)(""),O=Object(m.a)(v,2),x=O[0],w=O[1],y=f.a.create({baseURL:"https://chatting-server-git.herokuapp.com/"}),k=function(){var t=Object(b.a)(p.a.mark((function t(n){var r,s;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),r={name:a,email:o,password:j,type:"admin"},t.prev=2,t.next=5,y.post("register",r);case 5:!0===(s=t.sent).data.register?(console.log(s.data.message),e.toggleModal()):(console.log(s.data.message),w(s.data.message)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}();return Object(d.jsx)("div",{children:Object(d.jsx)(L.a,{show:e.isOpen,onHide:e.toggleModal,animation:!1,children:Object(d.jsxs)("form",{onSubmit:k,children:[Object(d.jsx)(L.a.Header,{children:Object(d.jsx)(L.a.Title,{children:"Register New Admin"})}),Object(d.jsxs)(L.a.Body,{children:[Object(d.jsx)("p",{style:{marginRight:"30px"},children:x}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{children:"Name"}),Object(d.jsx)("input",{type:"text",value:a,onChange:function(e){r(e.target.value)},className:"form-control",placeholder:"First name"})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{children:"Email"}),Object(d.jsx)("input",{type:"email",value:o,onChange:function(e){l(e.target.value)},className:"form-control",placeholder:"Enter email"})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{children:"Password"}),Object(d.jsx)("input",{type:"password",value:j,onChange:function(e){g(e.target.value)},className:"form-control",placeholder:"Enter password"})]})]}),Object(d.jsxs)(L.a.Footer,{children:[Object(d.jsx)(R.a,{variant:"secondary",onClick:e.toggleModal,children:"Close"}),Object(d.jsx)(R.a,{type:"submit",variant:"primary",children:"Register New Admin"})]})]})})})},T=n(139),M=n(136),A=n(140),_=n(137),D=function(){var e=Object(c.useContext)(w).state,t=Object(c.useContext)(I).searchDispatch,n=Object(c.useState)(!1),a=Object(m.a)(n,2),r=a[0],s=a[1],i=Object(c.useState)(""),o=Object(m.a)(i,2),l=o[0],u=o[1],h=f.a.create({baseURL:"https://chatting-server-git.herokuapp.com/"}),j=function(){var n=Object(b.a)(p.a.mark((function n(a){var r;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(u(a.target.value),""!==a.target.value){n.next=5;break}t({type:"Empty"}),n.next=15;break;case 5:return n.prev=5,n.next=8,h.post("searchUsers",{name:a.target.value,email:e.email},{withCredentials:!0});case 8:r=n.sent,t({type:"Change",payload:r.data}),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(5),console.log(n.t0);case 15:case"end":return n.stop()}}),n,null,[[5,12]])})));return function(e){return n.apply(this,arguments)}}(),g=function(){s(!r)};return Object(c.useState)((function(){}),[e]),Object(d.jsx)(T.a,{style:{zIndex:"2",position:"sticky",height:"62px"},bg:"light",expand:"lg",children:Object(d.jsxs)(M.a,{children:[Object(d.jsxs)(T.a.Brand,{href:"/",children:[Object(d.jsx)("img",{src:"https://www.logolynx.com/images/logolynx/21/214fba9d9e8566bf92d15c66bf919d16.png",width:"30",height:"30",style:{marginRight:"10px"},className:"d-inline-block align-top",alt:"React Bootstrap logo"}),"Rahul Verma"]}),Object(d.jsx)(T.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(d.jsxs)(T.a.Collapse,{id:"basic-navbar-nav",children:[Object(d.jsxs)(A.a,{className:"me-auto",children:["admin"===e.type?Object(d.jsx)(A.a.Link,{onClick:g,children:"Register Admin"}):"normal"===e.type?Object(d.jsx)(d.Fragment,{}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(A.a.Link,{href:"/register",children:"Register"}),Object(d.jsx)(A.a.Link,{href:"/login",children:"Login"})]}),Object(d.jsx)(F,{isOpen:r,toggleModal:g}),Object(d.jsx)(A.a.Link,{href:"/chatting",children:"Chatting"}),Object(d.jsxs)(_.a,{title:"Dropdown",id:"basic-nav-dropdown",children:[Object(d.jsx)(_.a.Item,{href:"#action/3.2",children:"Another action"}),Object(d.jsx)(_.a.Item,{href:"#action/3.3",children:"Something"}),Object(d.jsx)(_.a.Divider,{}),Object(d.jsx)(_.a.Item,{href:"#action/3.4",children:"Separated link"})]})]}),(e.email||e.username)&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("form",{className:"d-flex",onSubmit:function(e){return e.preventDefault()},children:Object(d.jsx)("input",{style:{height:"34px"},className:"form-control me-2 mt-2",value:l,type:"search",placeholder:"Search","aria-label":"Search",onChange:j})}),Object(d.jsxs)(A.a,{children:[Object(d.jsx)("li",{style:{float:"left",paddingRight:"5px"},children:Object(d.jsx)(A.a.Link,{href:"/logout",children:"Logout"})}),Object(d.jsx)(A.a.Link,{className:"",children:Object(d.jsx)("li",{className:"text-center",children:Object(d.jsx)("span",{className:"p-2 avatar avatar-32 rounded bg-danger",children:e.username})})})]})]})]})]})})},U=function(){var e=Object(c.useState)(""),t=Object(m.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(m.a)(r,2),i=s[0],o=s[1],l=Object(c.useState)(""),h=Object(m.a)(l,2),j=h[0],g=h[1],v=Object(u.f)(),x=f.a.create({baseURL:"https://chatting-server-git.herokuapp.com/"}),y=Object(c.useContext)(w).dispatch,k=function(){var e=Object(b.a)(p.a.mark((function e(t){var a,r,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={email:n,password:i},e.prev=2,e.next=5,x.post("login",a,{withCredentials:!0});case 5:return r=e.sent,e.next=8,O.authenticate();case 8:return e.next=10,window.sessionStorage.setItem("user",JSON.stringify(r.data));case 10:return e.next=12,y({type:"LOGIN",payload:r.data});case 12:window.location.replace("/chatting"),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(2),g(null===(s=e.t0.response)||void 0===s?void 0:s.data),console.log(e.t0.response);case 19:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(t){return e.apply(this,arguments)}}();return O.getAuth()&&v.push("/chatting"),Object(d.jsx)("div",{className:"outer",children:Object(d.jsxs)("form",{className:"inner",onSubmit:k,children:[Object(d.jsx)("h3",{children:"Log in"}),Object(d.jsx)("p",{style:{marginRight:"30px"},children:j}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{children:"Email"}),Object(d.jsx)("input",{type:"email",value:n,onChange:function(e){a(e.target.value)},className:"form-control",placeholder:"Enter email"})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{children:"Password"}),Object(d.jsx)("input",{type:"password",value:i,onChange:function(e){o(e.target.value)},className:"form-control",placeholder:"Enter password"})]}),Object(d.jsx)("div",{className:"form-group",children:Object(d.jsxs)("div",{className:"custom-control custom-checkbox",children:[Object(d.jsx)("input",{type:"checkbox",className:"custom-control-input",id:"customCheck1"}),Object(d.jsx)("label",{className:"custom-control-label",htmlFor:"customCheck1",children:"Remember me"})]})}),Object(d.jsx)("button",{type:"submit",className:"btn btn-dark btn-lg btn-block",children:"Login"})]})})},B=n(76),J=(n(125),n(141)),P=n(93),G=function(e){var t=e.message,n=e.index,a=(e.conversation,Object(c.useContext)(w).state);return Object(d.jsxs)("div",{children:[Object(d.jsx)(J.a,{bg:t.senderEmail===a.email?"light":"primary",text:t.senderEmail===a.email?"dark":"light",style:t.senderEmail===a.email?{width:"20rem",marginLeft:"9rem"}:{width:"20rem"},className:"mt-4",children:Object(d.jsx)(J.a.Body,{children:Object(d.jsx)(J.a.Text,{children:t.message})})},n),Object(d.jsxs)("div",{style:t.senderEmail===a.email?{marginLeft:"20rem"}:{},children:[Object(d.jsx)("small",{className:"text-muted",children:Object(P.a)(t.createdAt)}),t.senderEmail===a.email&&("seen"===t.status?Object(d.jsx)("ion-icon",{style:{color:"red"},name:"done-all"}):"delivered"===t.status?Object(d.jsx)("ion-icon",{name:"done-all"}):Object(d.jsx)("ion-icon",{name:"checkmark"}))]})]})},H=function(e){var t=e.conversation,n=e.index,a=e.setMessageByConversation,r=e.clicked,s=e.active,i=Object(c.useContext)(w).state,o=Object(c.useState)({}),l=Object(m.a)(o,2),u=l[0],h=l[1],j=Object(c.useState)(!1),g=Object(m.a)(j,2),v=g[0],O=g[1],x=Object(c.useState)({}),y=Object(m.a)(x,2),k=y[0],C=y[1],S=f.a.create({baseURL:"https://chatting-server-git.herokuapp.com/"});return Object(c.useEffect)((function(){var e={friendCollectionId:t.friendCollectionId};(function(){var t=Object(b.a)(p.a.mark((function t(){var n,a,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S.post("friendId",e,{withCredentials:!0});case 2:return n=t.sent,t.next=5,n.data.members.find((function(e){return e!==i.email}));case 5:return a=t.sent,O(s.some((function(e){return e.userEmail===a}))),t.next=9,S.post("emailData",{email:a},{withCredentials:!0});case 9:r=t.sent,h(r.data);case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[t,i,s,S]),Object(c.useEffect)((function(){C({_id:t._id,friendCollectionId:t.friendCollectionId,newMessage:t.newMessage,lastMessage:t.lastMessage,active:v})}),[t,v]),Object(d.jsx)("div",{children:Object(d.jsx)(J.a,{bg:r._id===t._id?"primary":"light",text:r._id===t._id?"light":"dark",style:{width:"29rem",cursor:"pointer"},className:"mb-4",onClick:function(e){a(k)},children:Object(d.jsxs)(J.a.Body,{children:[Object(d.jsxs)(J.a.Title,{children:[u.name,Object(d.jsx)("small",{style:{color:r._id===t._id?"white":"green",marginLeft:"30%"},children:v?"Active Now":""}),Object(d.jsx)("div",{style:{color:r._id===t._id?"white":"blue",marginLeft:"40%"},children:t.newMessage&&t.senderEmail!==i.email&&Object(d.jsx)("ion-icon",{name:"radio-button-off"})})]}),Object(d.jsx)(J.a.Text,{children:u.email})]})},n)})},W=function(e){var t=e.data,n=e.index,a=Object(c.useState)("light"),r=Object(m.a)(a,2),s=r[0],i=r[1],o=Object(c.useContext)(w).state,l=f.a.create({baseURL:"https://chatting-server-git.herokuapp.com/"}),u=function(){var e=Object(b.a)(p.a.mark((function e(n){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.post("addFriend",{senderEmail:o.email,receiverEmail:t.email},{withCredentials:!0});case 3:null===e.sent.data?console.log("you are already friends"):console.log("Friend Added Successfully"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsx)("div",{children:Object(d.jsx)(J.a,{bg:s,text:"Light",style:{width:"29rem",cursor:"pointer","&:hover":{background:"blue"}},className:"mb-4",onMouseOver:function(e){i("primary")},onMouseLeave:function(e){i("light")},onClick:u,children:Object(d.jsxs)(J.a.Body,{children:[Object(d.jsx)(J.a.Title,{children:t.name}),Object(d.jsx)(J.a.Text,{children:t.email})]})},n)})},V=function(e){var t=e.data,n=e.index,a=e.setMessageByFriend,r=e.clicked,s=Object(c.useState)({}),i=Object(m.a)(s,2),o=i[0],l=i[1],u=Object(c.useContext)(w).state,h=f.a.create({baseURL:"https://chatting-server-git.herokuapp.com/"});return Object(c.useEffect)((function(){(function(){var e=Object(b.a)(p.a.mark((function e(){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.members.find((function(e){return e!==u.email})),e.prev=1,e.next=4,h.post("emailData",{email:n},{withCredentials:!0});case 4:a=e.sent,l(a.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}})()()}),[t,u,h]),Object(d.jsx)("div",{children:Object(d.jsx)(J.a,{bg:r===t?"primary":"light",text:r===t?"light":"dark",style:{width:"29rem",cursor:"pointer","&:hover":{background:"blue"}},className:"mb-4",onClick:function(e){return a(t)},children:Object(d.jsxs)(J.a.Body,{children:[Object(d.jsx)(J.a.Title,{children:o.name}),Object(d.jsx)(J.a.Text,{children:o.email})]})},n)})},z=n(92),$=function(){var e=Object(c.useContext)(w).state,t=Object(c.useState)(""),n=Object(m.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)([]),i=Object(m.a)(s,2),o=i[0],l=i[1],u=Object(c.useState)(!1),h=Object(m.a)(u,2),j=h[0],g=h[1],v=Object(c.useState)(!1),x=Object(m.a)(v,2),y=x[0],k=x[1],C=Object(c.useContext)(I).search,S=Object(c.useState)([]),N=Object(m.a)(S,2),E=N[0],R=N[1],F=Object(c.useState)(""),T=Object(m.a)(F,2),M=T[0],A=T[1],_=Object(c.useState)(null),D=Object(m.a)(_,2),U=D[0],J=D[1],P=Object(c.useState)([]),$=Object(m.a)(P,2),q=$[0],K=$[1],Q=Object(c.useRef)(),X=f.a.create({baseURL:"https://chatting-server-git.herokuapp.com/"}),Y=function(){var t=Object(b.a)(p.a.mark((function t(n){var a,r,s,c,i,o,l;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),a={conversationId:j._id,friendId:y._id,senderEmail:e.email,message:M},console.log(a),t.prev=3,t.next=6,X.post("messagePost",a,{withCredentials:!0});case 6:if(r=t.sent,console.log("Message send successfully",r.data),A(""),R((function(e){return[].concat(Object(B.a)(e),[r.data])})),!j){t.next=18;break}return t.next=13,X.post("friendId",{friendCollectionId:j.friendCollectionId},{withCredentials:!0});case 13:s=t.sent,c=s.data.members.find((function(t){return t!==e.email})),Q.current.emit("sendMessage",{friend:!1,conversationId:j._id,senderEmail:e.email,text:M,receiverEmail:c}),t.next=20;break;case 18:i=y.members.find((function(t){return t!==e.email})),Q.current.emit("sendMessage",{friend:y,conversationId:r.data.conversationId,senderEmail:e.email,text:M,receiverEmail:i});case 20:t.next=28;break;case 22:if(t.prev=22,t.t0=t.catch(3),403!==(null===(o=t.t0.response)||void 0===o?void 0:o.status)){t.next=27;break}return t.next=27,X.get("refreshToken",{withCredentials:!0});case 27:console.log(t.t0,null===(l=t.t0.response)||void 0===l?void 0:l.data);case 28:case"end":return t.stop()}}),t,null,[[3,22]])})));return function(e){return t.apply(this,arguments)}}();Object(c.useEffect)((function(){""!==a&&a.scrollIntoView({behavior:"smooth"})}),[E,a]),Object(c.useEffect)((function(){var e=function(){var e=Object(b.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post("https://chatting-server-git.herokuapp.com//seen",{id:t},{withCredentials:!0});case 2:return e.next=4,f.a.post("https://chatting-server-git.herokuapp.com//messageGet",{conversationId:t},{withCredentials:!0});case 4:n=e.sent,R(n.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t=function(){var e=Object(b.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post("https://chatting-server-git.herokuapp.com//delivered",{id:t},{withCredentials:!0});case 2:return e.next=4,f.a.post("https://chatting-server-git.herokuapp.com//messageGet",{conversationId:t},{withCredentials:!0});case 4:n=e.sent,R(n.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Q.current=Object(z.a)("https://chatting-socket-git.herokuapp.com/"),Q.current.on("getMessage",(function(e){J({friend:e.friend,conversationId:e.conversationId,senderEmail:e.senderEmail,message:e.text,createdAt:Date.now()})})),Q.current.on("getMessageSeen",(function(t){var n=t.conversationId;console.log("id received",n),e(n)})),Q.current.on("getMessageDelivered",(function(e){var n=e.conversationId;t(n)}))}),[]),Object(c.useEffect)((function(){var e=function(){var e=Object(b.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://chatting-server-git.herokuapp.com//allConversations",{withCredentials:!0});case 2:t=e.sent,l(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(null===U||void 0===U?void 0:U.friend)?e():(console.log(U),U&&((null===j||void 0===j?void 0:j._id)===U.conversationId?(Q.current.emit("messageSeen",{conversationId:U.conversationId,senderEmail:U.senderEmail}),R((function(e){return[].concat(Object(B.a)(e),[U])})),j.newMessage&&e()):(e(),Q.current.emit("messageDelivered",{conversationId:U.conversationId,senderEmail:U.senderEmail}))))}),[U,j]),Object(c.useEffect)((function(){e.email&&(Q.current.emit("addUser",e.email),Q.current.on("getUsers",(function(e){K(e)}))),sessionStorage.getItem("messageFriend")?k(JSON.parse(sessionStorage.getItem("messageFriend"))):sessionStorage.getItem("messageConversation")&&g(JSON.parse(sessionStorage.getItem("messageConversation")))}),[e]),Object(c.useEffect)((function(){Q.current.on("welcome",(function(e){console.log(e)}))}),[Q]),Object(c.useEffect)((function(){var e=!0,t=function(){var t=Object(b.a)(p.a.mark((function t(){var n,a,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f.a.get("https://chatting-server-git.herokuapp.com//allConversations",{withCredentials:!0});case 3:n=t.sent,console.log("from useEffect",n),e&&l(n.data),t.next=28;break;case 8:if(t.prev=8,t.t0=t.catch(0),403!==(null===(a=t.t0.response)||void 0===a?void 0:a.status)){t.next=27;break}return console.log("receive 403 from token user"),t.prev=12,t.next=15,f.a.get("https://chatting-server-git.herokuapp.com//refreshToken",{withCredentials:!0});case 15:return t.next=17,f.a.get("https://chatting-server-git.herokuapp.com//allConversations",{withCredentials:!0});case 17:r=t.sent,e&&l(r.data),console.log("login with RT user"),t.next=25;break;case 22:t.prev=22,t.t1=t.catch(12),O.signOut();case 25:t.next=28;break;case 27:O.signOut();case 28:case"end":return t.stop()}}),t,null,[[0,8],[12,22]])})));return function(){return t.apply(this,arguments)}}();return null===C.searchedItem&&(t(),k(!1)),function(){e=!1}}),[e,C]),Object(c.useEffect)((function(){var t=function(){var e=Object(b.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post("https://chatting-server-git.herokuapp.com//seen",{id:t._id},{withCredentials:!0});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n=function(){var e=Object(b.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post("https://chatting-server-git.herokuapp.com//delivered",{conversation:t._id},{withCredentials:!0});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();o.forEach((function(a){!0===a.newMessage&&(console.log("my id",null===j||void 0===j?void 0:j._id),console.log("c id",a._id),a.senderEmail!==e.email&&(a._id===(null===j||void 0===j?void 0:j._id)?t(a):n(a)))}))}),[o,j,e]),Object(c.useEffect)((function(){j?function(){var e=Object(b.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.post("https://chatting-server-git.herokuapp.com//messageGet",{conversationId:j._id},{withCredentials:!0});case 3:t=e.sent,R(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()():R([])}),[j]);var Z=function(e){sessionStorage.setItem("messageConversation",JSON.stringify(e)),sessionStorage.removeItem("messageFriend"),k(!1),g(e)},ee=function(){var e=Object(b.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,X.post("conversationId",{friendId:t._id},{withCredentials:!0});case 3:""===(n=e.sent).data?(sessionStorage.setItem("messageFriend",JSON.stringify(t)),sessionStorage.removeItem("messageConversation"),g(!1),k(t)):(sessionStorage.setItem("messageConversation",JSON.stringify(n.data)),sessionStorage.removeItem("messageFriend"),k(!1),g(n.data)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return console.log(o),O.getAuth()?Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"split left",children:Object(d.jsxs)(L.a.Dialog,{children:[Object(d.jsxs)(L.a.Body,{children:[null===C.searchedItem&&Object(d.jsx)(L.a.Header,{children:Object(d.jsx)(L.a.Title,{children:"Recent"})}),null===C.searchedItem?o.map((function(t,n){return t.email===e.email?null:Object(d.jsx)(H,{conversation:t,index:n,setMessageByConversation:Z,clicked:j,active:q})})):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(L.a.Header,{children:Object(d.jsx)(L.a.Title,{children:"Recent"})}),C.searchedItem.conversations.map((function(e,t){return Object(d.jsx)(H,{conversation:e,index:t,setMessageByConversation:Z,clicked:j,active:q})})),Object(d.jsx)(L.a.Header,{children:Object(d.jsx)(L.a.Title,{children:"Friends"})}),C.searchedItem.friends.map((function(e,t){return Object(d.jsx)(V,{data:e,index:t,setMessageByFriend:ee,clicked:y})})),Object(d.jsx)(L.a.Header,{children:Object(d.jsx)(L.a.Title,{children:"Others"})}),C.searchedItem.others.map((function(t,n){return t.email===e.email?null:Object(d.jsx)(W,{data:t,index:n})}))]})]}),Object(d.jsx)(L.a.Footer,{})]})}),Object(d.jsx)("div",{className:"split right",children:Object(d.jsxs)(L.a.Dialog,{children:[Object(d.jsx)(L.a.Header,{children:Object(d.jsx)(L.a.Title,{children:"Messages"})}),Object(d.jsx)(L.a.Body,{children:E.map((function(e,t){return Object(d.jsx)(G,{message:e,index:t,conversation:j})}))}),Object(d.jsx)(L.a.Footer,{children:y||j?Object(d.jsxs)("form",{className:"d-flex",onSubmit:Y,ref:function(e){r(e)},children:[Object(d.jsx)("input",{style:{height:"60px",width:"300px"},className:"form-control me-4 mt-2",value:M,type:"search",placeholder:"Search","aria-label":"Search",onChange:function(e){A(e.target.value)}}),Object(d.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]}):Object(d.jsx)(d.Fragment,{})})]})})]}):(O.getAuth(),Object(d.jsxs)("div",{children:[null===e.email&&Object(d.jsx)("h1",{children:"Loading"}),!1===e.email&&Object(d.jsx)("h1",{children:"First you have to Login/Register"})]}))},q=function(){var e=Object(b.a)(p.a.mark((function e(){var t,n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(c.useContext)(w),n=t.dispatch,Object(u.f)(),e.prev=2,e.next=5,f.a.get("http://localhost:5000/logout",{withCredentials:!0});case 5:return a=e.sent,console.log("response",a),e.next=9,n({type:"LOGOUT"});case 9:return e.next=11,O.signOut();case 11:return e.next=13,sessionStorage.removeItem("user");case 13:return e.next=15,sessionStorage.removeItem("messageConversation");case 15:return e.next=17,sessionStorage.removeItem("messageFriend");case 17:window.location.replace("/login"),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(2),console.log("error",e.t0);case 23:return e.abrupt("return",null);case 24:case"end":return e.stop()}}),e,null,[[2,20]])})));return function(){return e.apply(this,arguments)}}(),K=function(){return Object(d.jsx)("div",{children:"you type some wrong link in the url bar 404 NOT FOUND"})},Q=(n(130),function(){return Object(d.jsx)(E,{children:Object(d.jsx)(k,{children:Object(d.jsxs)(l.a,{children:[Object(d.jsx)(D,{}),Object(d.jsxs)(u.c,{children:[" ",Object(d.jsx)(u.a,{exact:!0,path:"/",children:Object(d.jsx)(h,{})}),Object(d.jsx)(u.a,{exact:!0,path:"/register",children:Object(d.jsx)(C,{})}),Object(d.jsx)(u.a,{exact:!0,path:"/login",children:Object(d.jsx)(U,{})}),Object(d.jsx)(u.a,{exact:!0,path:"/chatting",children:Object(d.jsx)($,{})}),Object(d.jsx)(u.a,{exact:!0,path:"/logout",children:Object(d.jsx)(q,{})}),Object(d.jsx)(u.a,{children:Object(d.jsx)(K,{})})," "]})]})})})}),X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,142)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),s(e),c(e)}))},Y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Z(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(Object(d.jsx)(Q,{}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");Y?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Z(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Z(t,e)}))}}(),X()},73:function(e,t,n){}},[[131,1,2]]]);
//# sourceMappingURL=main.998b1f77.chunk.js.map