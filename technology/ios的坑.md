---
date: 2018/08/24
tags:
 - js
 - css
 - ios
issueId: 8
---
# ios的坑

ios的浏览器有一堆坑，只看会不会遇到，一下是本人遇到的两个大坑

## Date函数

::: tip 注意
IOS上只支持yyyy/MM/dd这种标准格式
:::

先看一段代码：

```js
const theDate = `2018-08-24`;
console.info(new Date(theDate))
```

正常来说，以上代码应该输出`Fri Aug 24 2018 08:00:00 GMT+0800 (中国标准时间)`;

`windows`上的所有浏览器都这样，没问题，但ios上，会报错

解决方案：

```js
const theDate = `2018-08-24`;
console.info(new Date(theDate.replace(/\-/g, "/")))
```

这样就没问题了

## position: fixed

这个坑应该是非常有名的了，目前我所知的有两点：

- 用了`position: fixed`的元素会随着屏幕的滚动而滚动
- 在文本框唤出键盘后，用了`position: fixed`的元素表现会类似`position: absolute`

目前还没有很好的办法能解决第二点，公认的方法是不用`position: fixed`，转而在外层包上一个用了`overflow-y:auto;-webkit-overflow-scrolling: touch;`的`div`

::: tip

在所有`webkit`内核的浏览器中，用了`overflow-y:auto`都建议和`-webkit-overflow-scrolling: touch`一起使用，可以滑动更顺畅

:::

## z-index 和 transform:translate() 一起用时，z-index 会失效

当同一个元素上同时用上 `z-index` 和 `translate` 时，在 ios 上 `z-index` 会失效，其他浏览器表现正常

解决方案：

使用 `translate3D`，并在 z轴上加上一个足够大的数
