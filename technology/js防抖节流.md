---
date: 2019/06/03
tags:
  - js
issueId: 12
---

# js 防抖节流

## 防抖

```js
/**
 * 防抖函数
 * @template {any[]} T
 * @param {(...args: T)=>void} callback - 要做防抖处理的执行动作
 * @param {object} [option]
 * @param {number} [option.wait] - 延迟毫秒数，default: 500
 * @param {boolean} [option.immediate] - default: false
 * - [option.immediate=true] 调用函数体时，callback 被立即调用，并锁定不能再调用。函数体会从上一次被调用后，倒计时 wait 毫秒后解锁可调用 callback。
 * - [option.immediate=false] 函数体会从上一次被调用后，延迟 wait 毫秒后调用 callback；
 *
 * @return {(...args: T)=>void} - 防抖函数体
 */
export function debounce(callback, option = {}) {
  let timer = null;
  const { wait = 500, immediate = false } = option;
  return function() {
    const args = arguments;
    if (timer) clearTimeout(timer);
    if (immediate) {
      if (!timer) callback.apply(this, args);
      timer = setTimeout(() => (timer = null), wait);
    } else {
      timer = setTimeout(() => {
        timer = null;
        callback.apply(this, args);
      }, wait);
    }
  };
}
```

## 节流

```js
/**
 * 节流函数。函数体在 wait 毫秒内多次调用，callback 只触发一次
 * @template {any[]} T
 * @param {(...args: T)=>void} callback - 回调函数
 * @param {Number} wait - 间隔时间，单位：毫秒, default: 500
 *
 * @return {(...args: T)=>void} - 节流函数体
 */
export function throttle(callback, wait = 500) {
  let startTime = 0;
  return function() {
    const now = +new Date();
    if (now - startTime >= wait) {
      startTime = now;
      callback.apply(this, arguments);
    }
  };
}
```
