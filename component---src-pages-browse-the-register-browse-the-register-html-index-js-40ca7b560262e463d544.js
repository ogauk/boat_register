(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"9Zci":function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return u}));var r=t("q1tI"),s=t.n(r),c=t("dMq0"),o=t("VX74"),i=t("R44f"),n=t("K/JX"),l=t("WpG8");const p={page:1,boatsPerPage:"12",sortField:"editors_choice",sortDirection:"asc",filters:{sale:!1}},f=new c.a({link:Object(i.a)({uri:"https://api-oga.herokuapp.com/v1/graphql"}),cache:new n.a});function u({location:e}){const a={...p};if(""!==e.search){const t=new URLSearchParams(e.search);for(const[e,r]of t)switch(e){case"p":a.page=parseInt(r,10);break;case"bpp":a.boatsPerPage=r;break;case"sort":a.sortField=r;break;case"asc":a.sortDirection="true"===r?"asc":"desc";break;case"y":const t={},[s,c]=r.split("-");""!==s&&(t.firstYear=s),""!==c&&(t.lastYear=c),a.filters.year=t;break;default:a.filters[e]=r}}return s.a.createElement(o.ApolloProvider,{client:f},s.a.createElement(l.a,{title:"Browse the Register",defaultState:a}),";")}}}]);
//# sourceMappingURL=component---src-pages-browse-the-register-browse-the-register-html-index-js-40ca7b560262e463d544.js.map