(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{160:function(t,s,a){"use strict";function n(t,s,a,n,e,o,r,c){var i,_="function"==typeof t?t.options:t;if(s&&(_.render=s,_.staticRenderFns=a,_._compiled=!0),n&&(_.functional=!0),o&&(_._scopeId="data-v-"+o),r?(i=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},_._ssrRegister=i):e&&(i=c?function(){e.call(this,this.$root.$options.shadowRoot)}:e),i)if(_.functional){_._injectStyles=i;var p=_.render;_.render=function(t,s){return i.call(s),p(t,s)}}else{var l=_.beforeCreate;_.beforeCreate=l?[].concat(l,i):[i]}return{exports:t,options:_}}a.d(s,"a",function(){return n})},172:function(t,s,a){"use strict";a.r(s);var n=a(160),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"ios的坑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ios的坑","aria-hidden":"true"}},[t._v("#")]),t._v(" ios的坑")]),t._v(" "),a("h2",{attrs:{id:"date函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#date函数","aria-hidden":"true"}},[t._v("#")]),t._v(" Date函数")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("IOS上只支持yyyy/MM/dd这种标准格式")])]),t._v(" "),a("p",[t._v("先看一段代码：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" theDate "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token template-string"}},[a("span",{attrs:{class:"token string"}},[t._v("`2018-08-24`")])]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("info")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("theDate"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("正常来说，以上代码应该输出"),a("code",[t._v("Fri Aug 24 2018 08:00:00 GMT+0800 (中国标准时间)")]),t._v(";")]),t._v(" "),a("p",[a("code",[t._v("windows")]),t._v("上的所有浏览器都这样，没问题，但ios上，会报错")]),t._v(" "),a("p",[t._v("解决方案：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" theDate "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token template-string"}},[a("span",{attrs:{class:"token string"}},[t._v("`2018-08-24`")])]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("info")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("theDate"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("replace")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token regex"}},[t._v("/\\-/g")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"/"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("这样就没问题了")])])}],!1,null,null,null);e.options.__file="08-24.md";s.default=e.exports}}]);