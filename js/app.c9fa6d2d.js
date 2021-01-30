(function(e){function t(t){for(var r,a,s=t[0],c=t[1],i=t[2],l=0,p=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(u,a)&&u[a]&&p.push(u[a][0]),u[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(p.length)p.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==u[s]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},u={app:0},o=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-0f694726":"40539274","chunk-2d22d746":"16e9c24e"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-0f694726":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-0f694726":"1357a4c4","chunk-2d22d746":"31d6cfe0"}[e]+".css",u=c.p+r,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var i=o[s],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===r||l===u))return t()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){i=p[s],l=i.getAttribute("data-href");if(l===r||l===u)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||u,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],f.parentNode.removeChild(f),n(o)},f.href=u;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){a[e]=0})));var r=u[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=u[e]=[t,n]}));t.push(r[2]=o);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var p=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=u[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",p.name="ChunkLoadError",p.type=r,p.request=a,n[1](p)}u[e]=void 0}};var f=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/vue-issue-blog/",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var p=0;p<i.length;p++)t(i[p]);var f=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1318:function(e,t,n){},"23f6":function(e,t,n){"use strict";n("5e8a")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("a5d8");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header"),n("router-view")],1)},u=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("router-link",{staticClass:"header-logo",attrs:{to:{name:"Posts"}}},[e._v("KK's VueBlog")]),n("div",{staticClass:"header-dropdown"},[n("button",{staticClass:"dropdown-button",on:{click:function(t){return e.setActiveLabel(null)}}},[e._v("Tags")]),n("div",{staticClass:"dropdown-content"},e._l(e.labels,(function(t){return n("a",{key:t,on:{click:function(n){return e.setActiveLabel(t)}}},[e._v(e._s(t))])})),0)]),n("router-link",{staticClass:"header-about",attrs:{to:{name:"About"}}},[e._v("About")]),n("a",{attrs:{href:e.project.reactIssueBlog.demo}},[e._v(" Version React ")])],1)},s=[],c=(n("96cf"),n("1da1")),i=n("5a13"),l=n("db49"),p={data:function(){return{labels:[],project:l["b"]}},mounted:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["c"])();case 2:e.labels=t.sent;case 3:case"end":return t.stop()}}),t)})))()},methods:{setActiveLabel:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.$store.commit("updateActiveLabel",e),"/"!==t.$route.path&&t.$router.push("/");case 2:case"end":return n.stop()}}),n)})))()}}},f=p,d=(n("9348"),n("2877")),h=Object(d["a"])(f,o,s,!1,null,"5e1f689e",null),b=h.exports,m={name:"App",components:{Header:b}},v=m,g=Object(d["a"])(v,a,u,!1,null,null,null),y=g.exports,w=(n("585e"),n("d3b7"),n("323e")),k=n.n(w),_=n("8c4f"),j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"list"},[n("h2",{staticClass:"category"},[e._v(e._s(e.activeLabel||"All"))]),n("ul",{ref:"issueList"},e._l(e.issues,(function(t){return n("li",{key:t.id,staticClass:"list-post"},[n("div",{staticClass:"list-title"},[n("router-link",{attrs:{to:{name:"Post",params:{number:t.number,issue:t}}}},[e._v(" "+e._s(t.title)+" ")])],1),e._l(t.labels,(function(t){return n("span",{key:t.id,staticClass:"list-label"},[e._v(" "+e._s(t.name)+" ")])})),n("span",{staticClass:"list-date"},[e._v(e._s(t.created_at.slice(0,10)))])],2)})),0)])},O=[],x=n("5530"),L=n("2f62"),C={name:"Posts",data:function(){return{totalNum:0,issues:[],isNoData:!1,date:""}},mounted:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["b"])({label:e.activeLabel});case 2:e.issues=t.sent;case 3:case"end":return t.stop()}}),t)})))()},computed:Object(x["a"])({},Object(L["b"])(["activeLabel"])),watch:{activeLabel:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["b"])({label:e.activeLabel});case 2:e.issues=t.sent;case 3:case"end":return t.stop()}}),t)})))()}},methods:{}},A=C,P=(n("23f6"),Object(d["a"])(A,j,O,!1,null,"36197f9e",null)),R=P.exports;r["a"].use(_["a"]);var E=[{path:"/",name:"Posts",component:R},{path:"/about",name:"About",component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))}},{path:"/post/:number",name:"Post",component:function(){return n.e("chunk-0f694726").then(n.bind(null,"37d3"))}},{path:"*",redirect:"/"}],S=new _["a"]({base:"/vue-issue-blog",routes:E,mode:"history"});S.beforeEach((function(e,t,n){k.a.start(),n()})),S.afterEach((function(){k.a.done()}));var T=S;r["a"].use(L["a"]);var B=new L["a"].Store({state:{activeLabel:null},mutations:{updateActiveLabel:function(e,t){e.activeLabel=t}},getters:{activeLabel:function(e){return e.activeLabel}}});r["a"].config.productionTip=!1,new r["a"]({router:T,store:B,render:function(e){return e(y)}}).$mount("#app")},"585e":function(e,t,n){},"5a13":function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return i}));n("99af"),n("d81d"),n("b0c0"),n("d3b7"),n("498a"),n("96cf");var r=n("1da1"),a=n("db49");function u(e){return o.apply(this,arguments)}function o(){return o=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n="",t&&t.label&&t.label.trim().length>0&&(n='+label:"'.concat(t.label,'"')),e.prev=2,e.next=5,fetch("https://api.github.com/search/issues?q=state:open+repo:".concat(a["a"]).concat(n,"&sort=created&order=desc")).then((function(e){return e.json()}));case 5:return r=e.sent,e.next=8,r.items;case 8:return e.abrupt("return",e.sent);case 11:e.prev=11,e.t0=e["catch"](2),console.log("GetIssues Failed",e.t0);case 14:case"end":return e.stop()}}),e,null,[[2,11]])}))),o.apply(this,arguments)}function s(e){return c.apply(this,arguments)}function c(){return c=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.github.com/repos/".concat(a["a"],"/issues/").concat(t)).then((function(e){return e.json()}));case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e["catch"](0),console.log("GetIssue Failed",e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])}))),c.apply(this,arguments)}function i(){return l.apply(this,arguments)}function l(){return l=Object(r["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.github.com/repos/".concat(a["a"],"/labels")).then((function(e){return e.json()}));case 3:return t=e.sent,e.next=6,t.map((function(e){return e.name}));case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e["catch"](0),console.log("GetLabels Failed",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])}))),l.apply(this,arguments)}},"5e8a":function(e,t,n){},9348:function(e,t,n){"use strict";n("1318")},db49:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return u}));var r="kelyu0/articles",a=[{href:"mailto:kelyu0109@gmail.com",title:"kelyu0109@gmail.com"},{href:"https://github.com/kelyu0",title:"GitHub"},{href:"https://www.linkedin.com/in/ke-lyu-638bb8141/",title:"Linkedin"}],u={vueIssueBlog:{code:"https://github.com/kelyu0/vue-issue-blog",demo:"https://kelyu0.github.io/vue-issue-blog"},reactIssueBlog:{code:"https://github.com/kelyu0/react-issue-blog",demo:"https://kelyu0.github.io/react-issue-blog"}}}});
//# sourceMappingURL=app.c9fa6d2d.js.map