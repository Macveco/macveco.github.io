module.exports = {
    nextLinks: true,
    prevLinks: true,
    title: 'Macveco',
    displayAllHeaders: true,
    description: 'Macveco\'blog',
    themeConfig: {
        theme: '@vuepress/blog',
        sidebar: 'auto',
        logo: 'assets/img/homework.svg',
        nav: [
          {text: 'Home', link: '/' },
          {text: 'Rust-lang', link: 'https://www.rust-lang.org'},
          {text: 'Easyicon', link: 'https://www.easyicon.net'}
        ]
    }
}