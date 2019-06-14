module.exports = (themeConfig, ctx) => {
  console.log(ctx)
  const pagination = {perPagePosts: 100};
  let directories = themeConfig.directories && themeConfig.directories.map(item=>{
    return {
      id: item.id || item.dirname,
      dirname: item.dirname,
      path: item.path || `/${item.dirname}/`,
      layout: item.layout || "Layout",
      itemLayout: item.itemLayout || "BlogContent",
      pagination: Object.assign({},pagination,item.pagination)
    }
  })
  return {
    plugins: [
      ['@vuepress/blog', {
        directories,
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
}