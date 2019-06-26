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
    ]
  }
}