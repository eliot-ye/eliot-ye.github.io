(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{65:function(t,a,s){},66:function(t,a,s){},69:function(t,a,s){"use strict";var n=s(65);s.n(n).a},70:function(t,a,s){"use strict";var n=s(66);s.n(n).a},73:function(t,a,s){"use strict";s(70);var n=s(3),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",{attrs:{id:"catalogue-list"}},t._l(t.$pagination.pages,function(a,n){return s("li",{key:n,staticClass:"catalogue-item"},[s("h3",{staticClass:"catalogue-link"},[s("router-link",{attrs:{to:a.path}},[t._v(t._s(a.title))])],1),t._v(" "),s("p",{staticClass:"singleText"},t._l(a.headers,function(a,n){return s("span",{key:n},[t._v(t._s(n+1+". "+a.title+" "))])}),0),t._v(" "),s("div",{staticClass:"tags"},t._l(a.frontmatter.tags,function(a){return s("router-link",{key:a,attrs:{to:"/tag/"+a+"/"}},[s("span",{staticClass:"tag"},[t._v(t._s(a))])])}),1),t._v(" "),s("div",{staticStyle:{clear:"both"}})])}),0)},[],!1,null,null,null);a.a=e.exports},74:function(t,a,s){"use strict";s(69);var n=s(3),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content tagsList"},t._l(t.$tag.list,function(a){return s("router-link",{key:a.name,attrs:{to:a.path}},[s("span",{staticClass:"tag",class:{active:t.$route.path===a.path}},[t._v(t._s(a.name))])])}),1)},[],!1,null,null,null);a.a=e.exports},94:function(t,a,s){"use strict";s.r(a);var n=s(74),e=s(73),i={name:"FrontmatterPagination",components:{TagList:n.a,CatalogueList:e.a}},l=s(3),r=Object(l.a)(i,function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"tagsPage"},[a("TagList"),this._v(" "),a("CatalogueList")],1)},[],!1,null,null,null);a.default=r.exports}}]);