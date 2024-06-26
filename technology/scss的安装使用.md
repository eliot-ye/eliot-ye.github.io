---
date: 2018/08/02
tags: 
  - scss
issueId: 1
---
# scss的安装使用

- 本文基于`node.js`，使用[node-sass](https://www.npmjs.com/package/node-sass)编译，且单独使用[scss](https://www.sass.hk/)的情况
- 本文以如何编译为主，scss的具体语法请参考[https://www.sass.hk/](https://www.sass.hk/)

## 安装node-sass

``` bash
yarn global add node-sass
# 或者
npm i node-scss -g
```

## 文件结构

```md
├─ scss/
│ ├─ _var.scss
│ └─ test.scss
└─ css/
```

## 编译

在testCode下运行

``` bash
node-sass -wro css scss --output-style compressed --source-map-embed
```

- `node-sass -wro css scss`会使监听scss文件夹的变化，编译.scss或.sass文件成.css到css文件夹
- `--output-style compressed`会把css文件编译成已压缩格式
- `--source-map-embed`会在css里生成source-map以便追踪

### 全部命令

``` bash
-w, --watch                # Watch a directory or file
-r, --recursive            # Recursively watch directories or files
-o, --output               # Output directory
-x, --omit-source-map-url  # Omit source map URL comment from output
-i, --indented-syntax      # Treat data from stdin as sass code (versus scss)
-q, --quiet                # Suppress log output except on error
-v, --version              # Prints version info
--output-style             # CSS output style (nested | expanded | compact | compressed)
--indent-type              # Indent type for output CSS (space | tab)
--indent-width             # Indent width; number of spaces or tabs (maximum value: 10)
--linefeed                 # Linefeed style (cr | crlf | lf | lfcr)
--source-comments          # Include debug info in output
--source-map               # Emit source map
--source-map-contents      # Embed include contents in map
--source-map-embed         # Embed sourceMappingUrl as data URI
--source-map-root          # Base path, will be emitted in source-map as is
--include-path             # Path to look for imported files
--follow                   # Follow symlinked directories
--precision                # The amount of precision allowed in decimal numbers
--error-bell               # Output a bell character on errors
--importer                 # Path to .js file containing custom importer
--functions                # Path to .js file containing custom functions
--help                     # Print usage info
```

:::tip

事实上，如果用了编辑器，直接用编辑器来编译更加方便，如：
使用 VSCode 的话，可以直接下载`Live Sass Compiler`插件，详情见[VSCode插件 -> Live Sass Compiler](VSCode插件.md#css)

:::
