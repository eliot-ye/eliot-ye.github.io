module.exports = {
  plugins: [
    ['@vuepress/blog', {
      directories: [
        {
          id: 'technology',
          dirname: 'technology',
          path: '/',
          itemLayout: 'BlogContent',
          pagination: {
            perPagePosts: 100,
          },
        },
        {
          id: 'poetry',
          dirname: 'poetry',
          path: '/poetry/',
          itemLayout: 'BlogContent',
        },
      ],
      frontmatters: [
        {
          id: "tag",
          keys: ['tag', 'tags'],
          path: '/tag/',
          layout: 'Tags',
          pagination: {
            perPagePosts: 100
          }
        },
      ]
    }],
    ['container', {
      type: 'tip',
      defaultTitle: {
        '/zh/': '提示'
      }
    }],
    ['container', {
      type: 'warning',
      defaultTitle: {
        '/zh/': '注意'
      }
    }],
    ['container', {
      type: 'danger',
      defaultTitle: {
        '/zh/': '警告'
      }
    }],
    '@vuepress/active-header-links',
    '@vuepress/last-updated',
    '@vuepress/back-to-top',
    '@vuepress/nprogress'
  ] 
}