module.exports = {
    plugins: [
        '@vuepress/blog'
    ],
    title: 'Macveco',
    displayAllHeaders: true,
    description: 'Macveco\'blog',
    themeConfig: {
        sidebar: 'auto',
        logo: 'assets/img/homework.svg',
        nav: [
          {text: 'Home', link: '/' },
          {text: 'Guide', link: '/guide'},
          {text: 'Easyicon', link: 'https://www.easyicon.net'}
        ]
    }
}