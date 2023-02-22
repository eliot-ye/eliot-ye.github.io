---
date: 2022/03/25
tags:
  - 语言代码
  - 多语言开发
issueId: 19
---

# 多语言开发中的语言代码

## zh-CN、zh-TW 和 zh-Hans、zh-Hant 的说明

- zh-CN：地区限制匹配规范，表示用在中国大陆区域的中文。一般指简体中文。
- zh-TW：地区限制匹配规范，表示用在中国台湾区域的中文。一般指繁体中文。

- zh-Hans：语言限制匹配规范，表示简体中文。适用区域范围是所有用中文简体的地方，内容包括各种用简体的方言等。
- zh-Hant：语言限制匹配规范，表示繁体中文。适用区域范围是所有用中文繁体的地方，内容包括各种用繁体的方言等。

目前仅有 Windows 10 系统以及 IOS 系统支持 zh-Hans 写法。旧的操作系统与当下的主流浏览器均使用 zh、zh-CN 来代表简体中文，zh-TW、zh-HK 来代表繁体中文。

需要对 HTML5 网页的 lang 属性进行标记时，如果网站只有一种语言，则直接写 lang=”zh” 即可。如果有多种语言支持，则可以写成 lang="zh-CN" 或 lang="zh-TW" 或 lang="zh-HK" 。

## ISO 语言代码

<table>
  <tr>
    <th>语言代码</th>
    <th>语言名称</th>
    <th>国家 / 地区</th>
  </tr>
  <tr v-for="item in require('./data/langCode.json')">
    <td>{{ item.code }}</td>
    <td>{{ item.label }}</td>
    <td>{{ item.region }}</td>
  </tr>
</table>
