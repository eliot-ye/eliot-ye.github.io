module.exports = {
	base:'/blog/',
	dest:'dist',
	locales: {
		'/': {
			lang: 'zh-CN',
			title: 'Mr.Ye',
			description: 'Mr.Ye blog'
		}
	},
	themeConfig:{
		lastUpdated: '最近更新',
		repo: 'https://gitee.com/xspiritx/blog/',
    repoLabel: '去评论',
		nav: [
      { text: '2018', link: '/2018/08-02' },
    ],
		sidebar:{
			'/2018/':['08-02','08-03','08-05']
		}
	}
}