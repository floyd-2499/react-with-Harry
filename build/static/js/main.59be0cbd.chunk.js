(this["webpackJsonpnew-2"]=this["webpackJsonpnew-2"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(18),o=n.n(s),r=(n(25),n(11)),l=n(20),i=(n(26),n(8)),b=n(0);function d(e){return Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)(i.b,{className:"navbar-brand",to:"/",children:e.title}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(b.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(i.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(i.b,{className:"nav-link",to:"/about",children:"About"})})]}),e.searchBar?Object(b.jsxs)("form",{className:"d-flex",children:[Object(b.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(b.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]}):" "]})]})})}d.defaultProps={title:"Your Title Here",searchBar:!0};n(33);var j=function(){return Object(b.jsx)("footer",{className:"bg-dark text-light py-2",style:{position:"relative",marginTop:"10vh",width:"100%",border:"5px solid red"},children:Object(b.jsx)("p",{className:"text-center",children:"Copyright \xa9 Code with harry"})})},u=function(e){var t=e.todo,n=e.onDelete;return Object(b.jsxs)("div",{children:[Object(b.jsx)("h4",{children:t.title}),Object(b.jsx)("p",{children:t.desc}),Object(b.jsx)("button",{className:"btn btn-danger btn-sm ",onClick:function(){n(t)},children:"Delete"})]})},m=function(e){return Object(b.jsxs)("div",{className:"container",style:{minHeight:"80vh"},children:[Object(b.jsx)("h3",{className:" my-5",children:"Todos List"}),0===e.todos.length?"No todos to display ":e.todos.map((function(t){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(u,{todo:t,onDelete:e.onDelete},t.sno),"   ",Object(b.jsx)("hr",{})]})}))]})},h=function(e){var t=e.addTodo,n=Object(a.useState)(" "),c=Object(r.a)(n,2),s=c[0],o=c[1],l=Object(a.useState)(" "),i=Object(r.a)(l,2),d=i[0],j=i[1];return Object(b.jsxs)("div",{className:"container my-3",children:[Object(b.jsx)("h3",{children:"Add a todo"}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s&&d?(t(s,d),o(""),j("")):alert("Title or description are not to be blank")},children:[Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"title",className:"form-label",children:"Todo Title"}),Object(b.jsx)("input",{type:"text",value:s,className:"form-control",onChange:function(e){return o(e.target.value)},id:"title","aria-describedby":"emailHelp"})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"desc",className:"form-label",children:"Todo Description"}),Object(b.jsx)("input",{type:"text",value:d,className:"form-control",onChange:function(e){return j(e.target.value)},id:"desc"})]}),Object(b.jsx)("button",{type:"submit",className:"btn btn-success btn-sm",children:"Add Todo"})]})]})},O=function(){return Object(b.jsxs)("div",{children:["This is an about component",Object(b.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quam dolorem, necessitatibus cum perferendis voluptatibus iure placeat nesciunt ipsum, qui at nam numquam dolore adipisci porro dolores maiores sapiente molestiae."})]})},x=n(2);var p=function(){var e;e=null===localStorage.getItem("todos")?[]:JSON.parse(localStorage.getItem("todos"));var t=function(e){console.log("You clicked on delete",e),u(o.filter((function(t){return t!==e}))),localStorage.setItem("todos",JSON.stringify(o))},n=function(e,t){var n={sno:0===o.length?0:o[o.length-1].sno+1,title:e,desc:t};u([].concat(Object(l.a)(o),[n])),console.log(n)},c=Object(a.useState)(e),s=Object(r.a)(c,2),o=s[0],u=s[1];return Object(a.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(o))}),[o]),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(i.a,{children:[Object(b.jsx)(d,{title:"TO DO List",searchBar:!1}),Object(b.jsxs)(x.c,{children:[Object(b.jsx)(x.a,{exact:!0,path:"/",render:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(h,{addTodo:n}),Object(b.jsx)(m,{todos:o,onDelete:t})]})}}),Object(b.jsx)(x.a,{exact:!0,path:"/About",children:Object(b.jsx)(O,{})})]}),Object(b.jsx)(j,{})]})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),s(e),o(e)}))};o.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(p,{})}),document.getElementById("root")),g()}},[[34,1,2]]]);
//# sourceMappingURL=main.59be0cbd.chunk.js.map