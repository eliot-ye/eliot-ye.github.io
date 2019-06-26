module.exports = {
  theme: "blog-official-style",
  title: "Eliot's blog",
  description: "Eliot's blog",
  locales: { "/": { lang: "zh-CN" } },
  head: [
    ["link", { rel: "shortcut icon", href: "/favicon.ico" }]
  ],
  dest: "dist",
  shouldPrefetch: () => false,
  themeConfig: {
    about: {
      portrait: "/portrait.jpg", // 头像
      msgList: [
        {
          text: "GitHub",
          path: "https://github.com/eliot-ye"
        },
        {
          text: "Gitee",
          path: "https://gitee.com/eliot-ye/eliot-ye"
        }
      ]
    },
    directories: [
      {
        dirname: 'technology',
        path: '/'
      },
      {
        dirname: 'others' // 必填
      },
    ],
    navbar: [
      {
        title: "技术",
        path: "/",
        id: "technology"
      },
      {
        title: "诗词",
        path: "/others/诗词/",
        id: "/others/诗词/"
      }
    ],
    comment:{
      owner:"eliot-ye",
      repo:"eliot-ye",
      clientId:"d9eab930f0aef97f59327664f230583ff98ef294d8ba6d5f39873d620b2470c0",
      clientSecret:"c89fa21046cb358765a804e6c1bfada7bed2caced1064d5b9a2e237035e144a8"
    }
  }
}