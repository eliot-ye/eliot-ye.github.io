---
date: 2018/08/23
tags:
  - js
issueId: 7
---
# js插件封装

## 自执行普通模式

```js
(function(global){

})(this)
```

## UMD模式

```js
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global['plugin-name'] = factory());
}(this, (function () { 'use strict';

})))
```
