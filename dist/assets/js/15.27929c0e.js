(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{92:function(t,s,a){"use strict";a.r(s);var e=a(3),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"ios的坑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ios的坑","aria-hidden":"true"}},[t._v("#")]),t._v(" ios的坑")]),t._v(" "),a("p",[t._v("ios的浏览器有一堆坑，只看会不会遇到，一下是本人遇到的两个大坑")]),t._v(" "),a("h2",{attrs:{id:"date函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#date函数","aria-hidden":"true"}},[t._v("#")]),t._v(" Date函数")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("IOS上只支持yyyy/MM/dd这种标准格式")])]),t._v(" "),a("p",[t._v("先看一段代码：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" theDate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v("`2018-08-24`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("theDate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("正常来说，以上代码应该输出"),a("code",[t._v("Fri Aug 24 2018 08:00:00 GMT+0800 (中国标准时间)")]),t._v(";")]),t._v(" "),a("p",[a("code",[t._v("windows")]),t._v("上的所有浏览器都这样，没问题，但ios上，会报错")]),t._v(" "),a("p",[t._v("解决方案：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" theDate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v("`2018-08-24`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("theDate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\-/g")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("这样就没问题了")]),t._v(" "),a("h2",{attrs:{id:"position-fixed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#position-fixed","aria-hidden":"true"}},[t._v("#")]),t._v(" position: fixed")]),t._v(" "),a("p",[t._v("这个坑应该是非常有名的了，目前我所知的有两点：")]),t._v(" "),a("ul",[a("li",[t._v("用了"),a("code",[t._v("position: fixed")]),t._v("的元素会随着屏幕的滚动而滚动")]),t._v(" "),a("li",[t._v("在文本框唤出键盘后，用了"),a("code",[t._v("position: fixed")]),t._v("的元素表现会类似"),a("code",[t._v("position: absolute")])])]),t._v(" "),a("p",[t._v("目前还没有很好的办法能解决第二点，公认的方法是不用"),a("code",[t._v("position: fixed")]),t._v("，转而在外层包上一个用了"),a("code",[t._v("overflow-y:auto;-webkit-overflow-scrolling: touch;")]),t._v("的"),a("code",[t._v("div")])]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",[t._v("在所有"),a("code",[t._v("webkit")]),t._v("内核的浏览器中，用了"),a("code",[t._v("overflow-y:auto")]),t._v("都建议和"),a("code",[t._v("-webkit-overflow-scrolling: touch")]),t._v("一起使用，可以滑动更顺畅")])]),t._v(" "),a("h2",{attrs:{id:"z-index-和-transform-translate-一起用时，z-index-会失效"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#z-index-和-transform-translate-一起用时，z-index-会失效","aria-hidden":"true"}},[t._v("#")]),t._v(" z-index 和 transform:translate() 一起用时，z-index 会失效")]),t._v(" "),a("p",[t._v("当同一个元素上同时用上 "),a("code",[t._v("z-index")]),t._v(" 和 "),a("code",[t._v("translate")]),t._v(" 时，在 ios 上 "),a("code",[t._v("z-index")]),t._v(" 会失效，其他浏览器表现正常")]),t._v(" "),a("p",[t._v("解决方案：")]),t._v(" "),a("p",[t._v("使用 "),a("code",[t._v("translate3D")]),t._v("，并在 z轴上加上一个足够大的数")])])},[],!1,null,null,null);s.default=n.exports}}]);