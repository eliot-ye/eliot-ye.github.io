---
date: 2019/06/24
tags:
  - npm
issueId: 13
---

# npm 使用 git 上的包

## 原因

- 在开发 npm 包时，有时要测试一下包，但又不想发到 npm 仓库上这么麻烦
- 有些私有项目，抽取了一些共有依赖包，不方便放到 npm 仓库上

基于以上两个原因，npm 使用 git 上的包，这种方式就很好

## 使用

使用方式很简单，确保 git 上的包有 package.json 文件，并符合规范。下载：

```bash
npm i git://git@github.com/eliot-ye/vuepress-theme-blog-official-style.git -S
# or
npm i https://github.com/eliot-ye/vuepress-theme-blog-official-style.git -S
```

如果没有错误，package.json 文件会添加以下依赖

```json
"dependencies": {
  "vuepress-theme-blog-official-style": "git+ssh://git@github.com/eliot-ye/vuepress-theme-blog-official-style.git"
}
```

## 更新

```bash
npm update
```
