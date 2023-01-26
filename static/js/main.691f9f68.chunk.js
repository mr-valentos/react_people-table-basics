(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{23:function(e,t,c){},24:function(e,t,c){},26:function(e,t,c){"use strict";c.r(t);var a=c(11),n=c(5),s=(c(21),c(22),c(2)),r=(c(23),c(6)),j=c.n(r),i=c(8),l=c(9),b=c(12),o=c(4),h=c(1),d=(c(24),c(0)),O=function(){return Object(d.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(d.jsx)("div",{className:"Loader__content"})})},x=Object(h.memo)((function(e){var t=e.person;return Object(d.jsx)(n.b,{to:"../".concat(t.slug),className:j()({"has-text-danger":"f"===t.sex}),children:t.name})})),m=Object(h.memo)((function(){var e=Object(h.useState)([]),t=Object(o.a)(e,2),c=t[0],a=t[1],n=Object(h.useState)(!1),r=Object(o.a)(n,2),m=r[0],p=r[1],u=Object(h.useState)(!1),f=Object(o.a)(u,2),v=f[0],g=f[1],N=Object(s.i)().slug,y=function(){var e=Object(b.a)(Object(l.a)().mark((function e(){var t;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.prev=1,e.next=4,fetch("https://mate-academy.github.io/react_people-table/api/people.json").then((function(e){return e.json()}));case 4:t=e.sent,a(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),g(!0);case 11:return e.prev=11,p(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}(),w=function(e){return c.find((function(t){return t.name===e}))};Object(h.useEffect)((function(){y()}),[]);var k=c.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{mother:w(e.motherName),father:w(e.fatherName)})}));return Object(d.jsx)("div",{className:"block",children:Object(d.jsx)("div",{className:"box table-container",children:m?Object(d.jsx)(O,{}):Object(d.jsxs)(d.Fragment,{children:[v&&Object(d.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),0!==c.length||v?Object(d.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Name"}),Object(d.jsx)("th",{children:"Sex"}),Object(d.jsx)("th",{children:"Born"}),Object(d.jsx)("th",{children:"Died"}),Object(d.jsx)("th",{children:"Mother"}),Object(d.jsx)("th",{children:"Father"})]})}),Object(d.jsx)("tbody",{children:k.map((function(e){return Object(d.jsxs)("tr",{"data-cy":"person",className:j()({"has-background-warning":e.slug===N}),children:[Object(d.jsx)("td",{children:Object(d.jsx)(x,{person:e})}),Object(d.jsx)("td",{children:e.sex}),Object(d.jsx)("td",{children:e.born}),Object(d.jsx)("td",{children:e.died}),Object(d.jsx)("td",{children:e.mother?Object(d.jsx)(x,{person:e.mother}):e.motherName||"-"}),Object(d.jsx)("td",{children:e.father?Object(d.jsx)(x,{person:e.father}):e.fatherName||"-"})]},e.slug)}))})]}):Object(d.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"})]})})})})),p=function(){return Object(d.jsxs)("div",{"data-cy":"app",children:[Object(d.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"navbar-brand",children:[Object(d.jsx)(n.c,{to:"/",className:function(e){var t=e.isActive;return j()("navbar-item",{"has-background-grey-lighter":t})},children:"Home"}),Object(d.jsx)(n.c,{to:"people",className:function(e){var t=e.isActive;return j()("navbar-item",{"has-background-grey-lighter":t})},children:"People"})]})})}),Object(d.jsx)("main",{className:"section",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)(s.e,{children:[Object(d.jsx)(s.c,{path:"/",element:Object(d.jsx)("h1",{className:"title",children:"Home Page"})}),Object(d.jsx)(s.c,{path:"home",element:Object(d.jsx)(s.a,{to:"/",replace:!0})}),Object(d.jsxs)(s.c,{path:"people",element:Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{className:"title",children:"People Page"}),Object(d.jsx)(s.b,{})]}),children:[Object(d.jsx)(s.c,{index:!0,element:Object(d.jsx)(m,{})}),Object(d.jsx)(s.c,{path:":slug",element:Object(d.jsx)(m,{})})]}),Object(d.jsx)(s.c,{path:"*",element:Object(d.jsx)("h1",{className:"title",children:"Page not found"})})]})})})]})};Object(a.createRoot)(document.getElementById("root")).render(Object(d.jsx)(n.a,{children:Object(d.jsx)(p,{})}))}},[[26,1,2]]]);
//# sourceMappingURL=main.691f9f68.chunk.js.map