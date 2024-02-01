---
date: 2020/12/22
tags:
  - js
issueId: 18
---

# js utils

## 美观的 name-value 打印

```js
/**
 * 美观的 name-value 打印
 * @param {string} name
 * @param {string} value
 * @param {any[]} [args]
 */
export function logNameValue(name, value, ...args) {
  console.log(
    `%c ${name} %c ${value} %c`,
    "background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff",
    "background:#41b883 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff",
    "background:transparent",
    ...args
  );
}
```

## 隐藏字符串

```js
/**
 * 隐藏字符串
 * @param {string} str
 * @param {number} start
 * @param {number} end
 */
export function invisibleStr(str, start = 0, end = 0) {
  const strLength = str.length;
  if (strLength <= start + end) {
    return str;
  } else {
    const startStr = str.slice(0, start);
    const endStr = str.slice(strLength - end);
    let invisibleStr = "";
    for (let i = 0; i < strLength - start - end; i++) invisibleStr += "* ";
    return startStr + invisibleStr + endStr;
  }
}
```

## 深度复制传入的对象，JSON.parse(JSON.stringify(obj))

```js
/**
 * 深度复制传入的对象，JSON.parse(JSON.stringify(obj));
 * @type {<T>(obj:T)=>T}
 */
export function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}
```

## 获取年龄

```js
/**
 * 获取年龄
 * @param {string} strBirthday 计算年龄的生日日期
 * @returns {number} -1 为输入的日期大于当前日期
 */
export function jsGetAge(strBirthday) {
  const strBirthdayDate = new Date(strBirthday.replace(/-/g, "/"));
  const strBirthdayArr = [
    strBirthdayDate.getFullYear(),
    strBirthdayDate.getMonth(),
    strBirthdayDate.getDate()
  ];
  const d = new Date();
  const yearDiff = d.getFullYear() - strBirthdayArr[0];
  const monthDiff = d.getMonth() - strBirthdayArr[1];
  const dayDiff = d.getDate() - strBirthdayArr[2];
  const age =
    monthDiff < 0 || (monthDiff == 0 && dayDiff < 0) ? yearDiff - 1 : yearDiff; //判断有没有到生日,没到就减1
  return age < 0 ? -1 : age;
}
```

## 提取 url 的 query

```js
/**
 * 提取 url 的 query
 * @param {string} url 需要提取的 url
 * @param {string} key query 的 key
 */
export function getUrlQuery(url, key) {
  const reg = new RegExp(`(^|&)${key}=([^&]*)(&|$)`, "i");
  const resultList = url.split("?")[1].match(reg);
  return resultList ? decodeURIComponent(resultList[2]) : null;
}
```

## 计时器

```js
/**
 * 计时器
 * @param {number} totalTime - 总时间，单位：毫秒
 * @param {()=>void} [handle] - 设置计时为 0 或小于 0 时的触发函数
 * @param {object} [option]
 * @param {number} [option.unit] - 计时间隔，单位：毫秒，default: 1000
 * @param {boolean} [option.auto] - 是否自动开始计时，default: false
 */
export function countDown(totalTime, handle = () => {}, option = {}) {
  /** setInterval 的 id 用于 clearInterval */
  let setIntervalId = null;

  /** 计时间隔，单位：毫秒 */
  const unit = option.unit || 1000;

  /** 是否自动开始计时 */
  const auto = option.auto || false;

  const publicObj = {
    /** 剩余时间，单位：毫秒 */
    timer: totalTime,

    /** 开始计时 */
    start() {
      if (setIntervalId) return;
      setIntervalId = setInterval(() => {
        publicObj.timer -= unit;
        if (publicObj.timer <= 0) {
          publicObj.clear();
          publicObj.handle();
        }
      }, unit);
    },

    /**
     * 重置计时器
     * @param {number} [resetTime]
     */
    reset(resetTime) {
      publicObj.clear();
      publicObj.timer = resetTime || totalTime;
      if (auto) publicObj.start();
    },

    /** 停止计时 */
    clear() {
      clearInterval(setIntervalId);
      setIntervalId = null;
    },

    /** 设置计时为 0 或小于 0 时的触发函数 */
    handle
  };

  if (auto) publicObj.start();

  return publicObj;
}
```

## 获取颜色的灰度值

```js
/**
 * 获取颜色的灰度值
 * @param {string} hex - HEX 颜色值
 */
export function getGrayScale(hex) {
  let sColor = hex.toLowerCase();
  //十六进制颜色值的正则表达式
  const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  // 如果是16进制颜色
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      let sColorNew = "#";
      for (let i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    //处理六位的颜色值
    let sColorChange = [];
    for (let i = 1; i < 7; i += 2) {
      sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
    }
    return (
      sColorChange[0] * 0.299 +
      sColorChange[1] * 0.587 +
      sColorChange[2] * 0.114
    );
  }
  return null;
}
```

## 判断是否从左边向右滑动

```js
/**
 * 判断是否从左边向右滑动
 * @param {()=>void} [handle]
 * @param {Object} [option]
 * @param {number} [option.startingPoint] - 从左边开始的最大触发阈值，default: 80
 * @param {number} [option.offsetValue] - 滑动起点和终点的上下最大触发偏移值，default: 100
 * @param {number} [option.slidingLength] - 滑动的最小触发长度，default: 150
 */
export function slideLeft(handle = () => {}, option = {}) {
  /** @type {{pageX:number,pageY:number}} */
  let touchstartObj = null;
  let { startingPoint = 80, offsetValue = 100, slidingLength = 150 } = option;

  const publicObj = {
    /** 设置是否可以触发 handle */
    trigger: true,
    handle,
    /** @param {TouchEvent} e */
    touchstart(e) {
      const changedTouches = e.changedTouches[0];
      const theTouchstartObj = {
        pageX: changedTouches.pageX,
        pageY: changedTouches.pageY
      };
      if (!publicObj.trigger) return;
      if (theTouchstartObj.pageX > startingPoint) return;
      touchstartObj = theTouchstartObj;
    },
    /** @param {TouchEvent} e */
    touchend(e) {
      if (!touchstartObj) return;
      const changedTouches = e.changedTouches[0];
      const theSlidingLength = changedTouches.pageX - touchstartObj.pageX;
      const theOffsetValue = Math.abs(
        changedTouches.pageY - touchstartObj.pageY
      );
      const isSlideLeft =
        theSlidingLength > slidingLength && theOffsetValue < offsetValue;
      if (isSlideLeft) publicObj.handle();
      touchstartObj = null;
    }
  };
  return publicObj;
}
```

## 判断是否往上滑动或往下滑动

```js
/**
 * 判断是否往上滑动或往下滑动
 * @param {(slidingDirection:"top"|"bottom")=>void} [handle]
 * @param {Object} [option]
 * @param {number} [option.offsetValue] - 滑动起点和终点的左右最大触发偏移值，default: 80
 * @param {number} [option.slidingLength] - 滑动的最小触发长度，default: 20
 */
export function slideTopBottom(handle = () => {}, option = {}) {
  /** @type {{pageX:number,pageY:number}} */
  let touchstartObj = null;
  let { offsetValue = 80, slidingLength = 20 } = option;

  const publicObj = {
    /** 设置是否可以触发 handle */
    trigger: true,
    handle,
    /** @param {TouchEvent} e */
    touchstart(e) {
      const changedTouches = e.changedTouches[0];
      const theTouchstartObj = {
        pageX: changedTouches.pageX,
        pageY: changedTouches.pageY
      };
      if (!publicObj.trigger) return;
      touchstartObj = theTouchstartObj;
    },
    /** @param {TouchEvent} e */
    touchend(e) {
      if (!touchstartObj) return;
      const changedTouches = e.changedTouches[0];
      const theSlidingLength = changedTouches.pageY - touchstartObj.pageY;
      const theOffsetValue = Math.abs(
        changedTouches.pageX - touchstartObj.pageX
      );
      if (theOffsetValue > offsetValue) {
        touchstartObj = null;
        return;
      }
      if (Math.abs(theSlidingLength) > slidingLength)
        publicObj.handle(theSlidingLength > 0 ? "top" : "bottom");
    }
  };
  return publicObj;
}
```
