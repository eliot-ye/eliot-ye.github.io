module.exports = {
	base:'/blog/',
	locales: {
		'/': {
			lang: 'zh-CN',
			title: 'Mr.Ye',
			description: 'Mr.Ye blog'
		}
	},
	themeConfig:{
		lastUpdated: '最近更新',
		nav: [
      { text: '2018', link: '/2018/08-02' },
    ],
		sidebar:{
			'/2018/':['08-02']
		}
	}
}