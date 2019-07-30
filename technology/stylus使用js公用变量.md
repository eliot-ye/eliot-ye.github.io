---
date: 2019/07/12
tags:
  - stylus
issueId: 15
---

# stylus使用js公用变量

在使用 `stylus` 预编译器时，变量配置常规要写在 `.styl` 文件里的，这导致 js 文件不能获取 css 变量，不能做统一配置。在深入了解 `stylus` 后，发现可通过内置的一些方法，实现配置变量通用

## 内置 `json()` 方法

内置的 `json()` 方法可以直接把 json 文件转化为 `stylus变量`，使用如下

```stylus
// src/assets/config.styl
json("./config.json");
```

基于使用习惯，把所有变量配置放到一个单独的文件里，所以只要有一个只有以上代码的 styl 文件，就可以在 config.json 文件里写变量了，而 json 文件可以直接被 js 文件使用。如果使用了 `stylus-loader` 还可以直接把 `config.styl` 文件全局注入

```js
const path = require("path");

// stylus-loader 配置
{
  import: [path.join(__dirname, "src/assets/var.styl")],
}
```

## 使用 stylus-loader 的 `use` 选项

现今的工程化项目基本都是使用 webpack 作为构建器，而 `stylus-loader` 做为 stylus 的 loader ，有 `use` 选项可以使用插件

```js
// src/assets/var.js
module.exports = {
  textColor: "#333",
  h1: "30px"
};

// 定义插件
const nodes = require("stylus").nodes;
const stylusVar = require("./src/assets/var");
function setStylusVar(stylus) {
  for (const key in stylusVar) {
    if (stylusVar.hasOwnProperty(key)) {
      const element = stylusVar[key];
      stylus.define(key, new nodes.String(element, ""));
    }
  }
}

// stylus-loader 配置，使用插件
{
  use:[setStylusVar]
}
```

:::warning

使用以上插件的话，要注意：注入的变量是属于字符串类型，不能进行计算，所以还是推荐使用第一种 `json()` 模式

:::
