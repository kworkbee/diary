module.exports = {
    title: 'Diary',
    description: 'Feelings',
    base: '/diary/',
    lang: 'ko-KR',
    head: [
        ['meta', {
            name: 'theme-color',
            content: '#3eaf7c'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-capable',
            content: 'yes'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black'
        }],
        ['meta', {
            name: 'og:image',
            //   content: 'https://h4dvprmht2.execute-api.ap-northeast-2.amazonaws.com/automated-og-image?text=Today%20I%20Learned'
        }],
        [
            'script',
            {
                async: true,
                src: 'https://www.googletagmanager.com/gtag/js?id=G-3DJWRRKTMB',
            },
        ],
        [
            'script',
            {},
            [
                "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-99GK4TE88W');",
            ],
        ],
    ],
    themeConfig: {
        repo: 'kworkbee/diary',
        editLinks: false,
        docsDir: '',
        editLinkText: '',
        lastUpdated: false,
        nav: [{
                text: 'Github',
                link: 'https://github.com/kworkbee',
            },
            {
                text: 'Blog',
                link: 'https://about.g1tommy.me/'
            },
            {
                text: 'Profile',
                link: 'https://about.g1tommy.me/resume'
            }
        ],
        sidebar:  [{
            title: 'Diary',
            children: [
                '220511',
                '220512',
                '220523',
            ]
        }]
    }
}
