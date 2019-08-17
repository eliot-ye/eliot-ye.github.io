---
date: 2019/07/30
tags:
  - scss
issueId: 16
---

# scss使用js公用变量

在项目中有如下配置js文件

```js
// src/assets/config
module.exports = {
  themeColor: "red",
  h1: "30px"
};
```

## 使用 sass-loader 的 `data` 选项

```js
const styleConfig = require('/src/assets/config')

{
  test: /\.scss$/,
  use: [
    'css-loader',
    'postcss-loader',
    {
      loader: 'sass-loader',
      options: {
        data: Object.keys(styleConfig)
          .map(k => `\$${k}: ${styleConfig[k]};`)
          .join('\n')
      }
    }
  ]
}
```

## 在 vue-cli3 的 vue.config.js 里使用

```js
// vue.config.js
const styleConfig = require("./src/assets/config");
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: Object.keys(styleConfig)
          .map(k => `$${k}: ${styleConfig[k]};`)
          .join("\n")
      }
    }
  }
};
```
