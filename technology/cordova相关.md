---
date: 2019/12/21
tags:
  - js
  - cordova
issueId: 17
---
# cordova相关

## cordova 常用插件

- 加载白名单：[cordova-plugin-whitelist](https://github.com/apache/cordova-plugin-whitelist)
- 启动屏：[cordova-plugin-splashscreen](https://github.com/apache/cordova-plugin-splashscreen)
- 状态栏控制：[cordova-plugin-statusbar](https://github.com/apache/cordova-plugin-statusbar)
- 网络状态：[cordova-plugin-network-information](https://github.com/apache/cordova-plugin-network-information)
- 获取版本：[cordova-plugin-appversion](https://github.com/Rareloop/cordova-plugin-app-version)
- 提示音和原生的弹窗：[cordova-plugin-dialogs](https://github.com/apache/cordova-plugin-dialogs)
- ios使用wkwebview：[cordova-plugin-wkwebview-engine](https://github.com/apache/cordova-plugin-wkwebview-engine)
- 屏幕方向：[cordova-plugin-screen-orientation](https://github.com/apache/cordova-plugin-screen-orientation)

## cordova run ios 时报错

- Error: Cannot read property 'toLowerCase' of undefined

  - 解决方案：修改platforms/ios/cordova/lib/list-emulator-build-targets文件第53行左右。

原来的代码：

```js
if (device.name === deviceType.name.replace(/\-inch/g, ' inch') &&
    device.availability.toLowerCase().indexOf('unavailable') < 0) {
    availAcc.push(device);
 }
```

修改为：

```js
if (device.name === deviceType.name.replace(/\-inch/g, ' inch')) {
  if (
    (device.availability && device.availability.toLowerCase().indexOf('unavailable') < 0)
    || device.isAvailable == 'YES'
  ) {
    availAcc.push(device);
  }
}
```

- Error: Cannot read property 'name' of undefined

  - 解决方案：修改platforms/ios/cordova/lib/build.js 文件第130行左右

原来的代码：

```js
emulatorTarget = defaultTarget.name;
```

修改为

```js
emulatorTarget = defaultTarget && defaultTarget.name;
```

以上两个错误都有可能是因为某些环境没安装而导致，例如没安装pod
