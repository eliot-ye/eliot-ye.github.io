---
date: 2022/03/25
tags:
  - 语言代码
issueId: 19
---

# ISO 语言代码

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
