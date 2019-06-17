module.exports = {
  base: '/blog/',
  theme: require.resolve('../../theme/'),
  title: "Eliot's blog",
  description: "Eliot's blog",
  locales: { "/": { lang: 'zh-CN' } },
  dest: "dist",
  themeConfig: {
    portrait: "", // 头像
    directories: [
      {
        dirname: 'technology',
        path: '/'
      },
      {
        dirname: 'poetry' // 必填
      },
    ],
    navbar:[
      {
        title: "技术",
        path: "/",
        id:"technology"
      },
      {
        title: "诗词",
        path: "/poetry/2018/11/19/诗词/",
        id: "poetry"
      }
    ],
    tag: {}
  }
}