(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{103:function(t,n,i){"use strict";i.r(n);var a=i(17),o=i(91),e=i(89),s={name:"Layout",components:{About:a.a,CatalogueList:o.a,PaginationButton:e.a}},u=(i(96),i(3)),r=Object(u.a)(s,function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"Layout"}},[n("About"),this._v(" "),n("CatalogueList"),this._v(" "),n("PaginationButton")],1)},[],!1,null,null,null);n.default=r.exports},79:function(t,n,i){},80:function(t,n,i){},85:function(t,n,i){"use strict";var a=i(79);i.n(a).a},86:function(t,n,i){"use strict";var a=i(80);i.n(a).a},88:function(t,n,i){},89:function(t,n,i){"use strict";var a={data:()=>({btnShowNum:9}),computed:{paginationNum(){return this.$pagination.paginationIndex+1},twoFlanksNum(){return(this.btnShowNum+1)/2},prevMore(){return this.paginationNum>this.twoFlanksNum},nextMore(){return this.paginationNum<this.$pagination.length-this.twoFlanksNum+1}},beforeMount(){document.documentElement.clientWidth<=419&&(this.btnShowNum=5)},methods:{paginationBtnShow(t){return this.prevMore?this.prevMore&&this.nextMore?t>this.paginationNum-this.twoFlanksNum&&t<=this.paginationNum||t<this.paginationNum+this.twoFlanksNum&&t>=this.paginationNum:this.nextMore?void 0:t>this.$pagination.length-this.btnShowNum:t<=this.btnShowNum}}},o=(i(86),i(3)),e=Object(o.a)(a,function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{attrs:{id:"pagination"}},[t.prevMore?i("button",{staticClass:"pagination-btn",on:{click:function(n){return t.$router.push(t.$pagination._paginationPages[0].path)}}},[t._v("1")]):t._e(),t._v(" "),t.prevMore?i("div",{staticClass:"pagination-btn pagination-more"},[t._v("...")]):t._e(),t._v(" "),t._l(t.$pagination.length,function(n){return i("button",{directives:[{name:"show",rawName:"v-show",value:t.paginationBtnShow(n),expression:"paginationBtnShow(i)"}],staticClass:"pagination-btn",class:{"pagination-btn-active":t.$pagination.paginationIndex+1===n},on:{click:function(i){return t.$router.push(t.$pagination._paginationPages[n-1].path)}}},[t._v(t._s(n))])}),t._v(" "),t.nextMore?i("div",{staticClass:"pagination-btn pagination-more"},[t._v("...")]):t._e(),t._v(" "),t.nextMore?i("button",{staticClass:"pagination-btn",on:{click:function(n){return t.$router.push(t.$pagination._paginationPages[t.$pagination.length-1].path)}}},[t._v(t._s(t.$pagination.length))]):t._e()],2)},[],!1,null,null,null);n.a=e.exports},91:function(t,n,i){"use strict";i(85);var a=i(3),o=Object(a.a)({},function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("ul",{attrs:{id:"catalogue-list"}},t._l(t.$pagination.pages,function(n,a){return i("li",{key:a,staticClass:"catalogue-item"},[i("h3",{staticClass:"catalogue-link"},[i("router-link",{attrs:{to:n.path}},[t._v(t._s(n.title))])],1),t._v(" "),i("p",{staticClass:"singleText"},t._l(n.headers,function(n,a){return i("span",{key:a},[t._v(t._s(a+1+". "+n.title+" "))])}),0),t._v(" "),i("div",{staticClass:"tags"},t._l(n.frontmatter.tags,function(n){return i("router-link",{key:n,attrs:{to:"/tag/"+n+"/"}},[i("span",{staticClass:"tag"},[t._v(t._s(n))])])}),1),t._v(" "),i("div",{staticStyle:{clear:"both"}})])}),0)},[],!1,null,null,null);n.a=o.exports},96:function(t,n,i){"use strict";var a=i(88);i.n(a).a}}]);