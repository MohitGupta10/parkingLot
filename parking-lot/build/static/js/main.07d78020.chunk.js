(this.webpackJsonprr=this.webpackJsonprr||[]).push([[0],{24:function(e,l,n){e.exports=n(38)},29:function(e,l,n){},32:function(e,l,n){},38:function(e,l,n){"use strict";n.r(l);var a=n(0),t=n.n(a),u=n(12),c=n.n(u),i=(n(29),n(11)),o=n(15),r=n(8);n(32);var m=function(e){var l=e.todo,n=Object(r.b)(),u=(l.id,Object(a.useState)()),c=Object(o.a)(u,2),m=c[0],h=c[1],d=Object(a.useState)(),p=Object(o.a)(d,2),v=p[0],s=p[1],E=Object(a.useState)(),b=Object(o.a)(E,2),g=b[0],f=b[1];return t.a.createElement("div",{className:" d-inline-block col-md-2  "},l.name?t.a.createElement("div",{className:"col mx-auto  border border-dark m-3 bg-light hero-image-booked"},t.a.createElement("div",{className:"p-2 text-white text-center"},t.a.createElement("strong",null,"This slot is booked")),t.a.createElement("div",{className:"p-1 text-white text-center"},t.a.createElement("strong",null," Parking Slot No.#",l.id)),t.a.createElement("div",{className:"p-2 text-white text-center"},t.a.createElement("h4",null," ",t.a.createElement("strong",null,l.name))),t.a.createElement("div",{className:"p-2 text-white text-center"},t.a.createElement("h4",null," ",t.a.createElement("strong",null,l.phone))),t.a.createElement("div",{className:"text-center"},t.a.createElement("button",{onClick:function(){s(""),h(""),n({type:"DELETE_TODO",payload:Object(i.a)(Object(i.a)({},l),{},{name:m,phone:v,vehicle:g})})},className:"btn btn-danger border border-white m-2"}," ",t.a.createElement("strong",null,"Leave ")))):t.a.createElement("div",{className:"col m-3 bg-light   hero-image-empty"},t.a.createElement("div",{className:"p-2 text-center "},t.a.createElement("strong",null," Parking Slot No. #",l.id)),t.a.createElement("label",{className:"text-center"},t.a.createElement("strong",null,"Enter Your name")),t.a.createElement("input",{type:"text",value:m,onChange:function(e){return h(e.target.value)},className:"col form-control"}),t.a.createElement("label",{className:"text-center"},t.a.createElement("strong",null,"Enter phone number")),t.a.createElement("input",{type:"number",value:v,onChange:function(e){return s(e.target.value)},className:"col form-control"}),t.a.createElement("label",{className:"text-center"},t.a.createElement("strong",null,"Enter vehicle type")),t.a.createElement("input",{type:"text",value:g,onChange:function(e){return f(e.target.value)},className:"col form-control"}),t.a.createElement("div",{className:"text-center"},t.a.createElement("button",{onClick:function(){n(function(e){return{type:"ADD_TODO",payload:e}}(Object(i.a)(Object(i.a)({},l),{},{name:m,phone:v,vehicle:g}))),s(""),h(""),f("")},className:"btn btn-dark border border-white m-2"},t.a.createElement("strong",null," Book")," "))))};var h=function(){var e=Object(r.c)((function(e){return e}));return t.a.createElement("div",{className:"my-4"},t.a.createElement("h1",{className:"text-center"},"Book Slots"),t.a.createElement("hr",null),e.map((function(e){return t.a.createElement(m,{key:e.id,todo:e})})))},d=(n(33),n(22)),p=n(2);var v=function(){return t.a.createElement(d.a,null,t.a.createElement("div",{className:"App"},t.a.createElement(p.a,{exact:!0,path:"/",component:h}),t.a.createElement(p.a,{path:"/list",component:h})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=n(17),E=n(14),b=[{id:1,name:null,phone:null,vehicle:null},{id:2,name:null,phone:null,vehicle:null},{id:3,name:null,phone:null,vehicle:null},{id:4,name:null,phone:null,vehicle:null},{id:5,name:null,phone:null,vehicle:null},{id:6,name:null,phone:null,vehicle:null},{id:7,name:null,phone:null,vehicle:null},{id:8,name:null,phone:null,vehicle:null},{id:9,name:null,phone:null,vehicle:null},{id:10,name:null,phone:null,vehicle:null},{id:11,name:null,phone:null,vehicle:null},{id:12,name:null,phone:null,vehicle:null},{id:13,name:null,phone:null,vehicle:null},{id:14,name:null,phone:null,vehicle:null},{id:15,name:null,phone:null,vehicle:null},{id:16,name:null,phone:null,vehicle:null},{id:17,name:null,phone:null,vehicle:null},{id:18,name:null,phone:null,vehicle:null},{id:19,name:null,phone:null,vehicle:null},{id:20,name:null,phone:null,vehicle:null},{id:21,name:null,phone:null,vehicle:null},{id:22,name:null,phone:null,vehicle:null},{id:23,name:null,phone:null,vehicle:null},{id:24,name:null,phone:null,vehicle:null},{id:25,name:null,phone:null,vehicle:null},{id:26,name:null,phone:null,vehicle:null},{id:27,name:null,phone:null,vehicle:null},{id:28,name:null,phone:null,vehicle:null},{id:29,name:null,phone:null,vehicle:null},{id:30,name:null,phone:null,vehicle:null},{id:31,name:null,phone:null,vehicle:null},{id:32,name:null,phone:null,vehicle:null},{id:33,name:null,phone:null,vehicle:null},{id:34,name:null,phone:null,vehicle:null},{id:35,name:null,phone:null,vehicle:null},{id:36,name:null,phone:null,vehicle:null},{id:37,name:null,phone:null,vehicle:null},{id:38,name:null,phone:null,vehicle:null},{id:39,name:null,phone:null,vehicle:null},{id:40,name:null,phone:null,vehicle:null},{id:41,name:null,phone:null,vehicle:null},{id:42,name:null,phone:null,vehicle:null},{id:43,name:null,phone:null,vehicle:null},{id:44,name:null,phone:null,vehicle:null},{id:45,name:null,phone:null,vehicle:null},{id:46,name:null,phone:null,vehicle:null},{id:47,name:null,phone:null,vehicle:null},{id:48,name:null,phone:null,vehicle:null},{id:49,name:null,phone:null,vehicle:null},{id:50,name:null,phone:null,vehicle:null}],g=Object(s.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,l=arguments.length>1?arguments[1]:void 0,n=Object(E.a)(e);switch(l.type){case"ADD_TODO":n=Object(E.a)(e);for(var a=-1,t=0;t<n.length&&!(l.payload.id<=50&&(a++,n[t].id==l.payload.id&&null==n[t].name))&&(null!=l.payload.id||(a++,null!=n[t].name));t++);if(-1!=a)return n[a]=l.payload,n[a].id=a+1,n;break;case"DELETE_TODO":n=Object(E.a)(e);for(var u=-1,c=0;c<n.length&&(u++,n[c].id!=l.payload.id);c++);if(-1!=u)return n[u]=l.payload,n}return e}));c.a.render(t.a.createElement(t.a.StrictMode,null,t.a.createElement(r.a,{store:g},t.a.createElement(v,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.07d78020.chunk.js.map