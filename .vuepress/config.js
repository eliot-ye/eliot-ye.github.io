// @ts-check
const changeVersion = require('./plugins/changeVersion.js')

module.exports = {
  title: "Eliot's blog",
  description: "Eliot's blog",
  locales: { "/": { lang: "zh-CN" } },
  head: [
    ["link", { rel: "shortcut icon", href: "/favicon.ico" }]
  ],
  dest: "dist",
  shouldPrefetch: () => false,
  evergreen: true,
  plugins: [ changeVersion ],
  theme: "blog-official-style",
  themeConfig: {
    statement: {
      author: "Eliot Ye",
      serveUrl: "https://eliot-ye.gitee.io/",
      copyright: "BY-NC-SA",
      copyrightUrl: "https://creativecommons.org/licenses/by-nc-nd/3.0/deed.zh"
    },
    about: {
      portrait: "/portrait.jpg", // 头像
      msgList: [
        {
          text: "GitHub",
          path: "https://github.com/eliot-ye/"
        },
        {
          text: "Gitee",
          path: "https://gitee.com/eliot-ye/"
        }
      ]
    },
    directories: [
      {
        dirname: 'technology',
        path: '/',
        pagination: {
          lengthPerPage: 5
        }
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
    comment: {
      owner: "eliot-ye",
      repo: "eliot-ye.github.io",
      clientId: "a496810e46e71845f6e6",
      clientSecret: "b30105f8c8780c1b9f9dda493757a5682c14c74d"
    }
  }
}