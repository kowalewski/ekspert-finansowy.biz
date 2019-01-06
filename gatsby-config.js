module.exports = {
    siteMetadata: {
        title: 'Ekspert finansowy - Paweł Kowalewski',
        description:
            'Jako ekspert finansowy oferuję Państwu profesjonalną pomoc w zakresie finansów i ubezpieczeń. Swoją działalność opieram na pośredniczeniu w udzielaniu wszelkiego rodzaju kredytów, a także leasingów. Kompletuję od Państwa niezbędną dokumentację do procesowania wniosku kredytowego i przeprowadzam Państwa przez cały etap okołokredytowy. Dysponuję ofertą ponad 16 renomowanych banków, co pozwala na dobranie jak najkorzystniejszej oferty do Państwa potrzeb.',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sass',
        {
            resolve: `gatsby-plugin-favicon`,
            options: {
                logo: './src/img/favicon.jpg',
                dir: 'auto',
                lang: 'pl',
                background: '#332b7e',
                theme_color: '#332b7e',
                display: 'standalone',
                orientation: 'any',
                start_url: '/?homescreen=1',
                icons: {
                    android: true,
                    appleIcon: true,
                    appleStartup: true,
                    coast: false,
                    favicons: true,
                    firefox: true,
                    opengraph: false,
                    twitter: false,
                    yandex: false,
                    windows: false,
                },
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: 'UA-112495850-1',
                head: false,
                anonymize: true,
                respectDNT: true,
                exclude: ['/preview/**', '/do-not-track/me/too/'],
            },
        },
        {
            // keep as first gatsby-source-filesystem plugin for gatsby image support
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/static/img`,
                name: 'uploads',
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/pages`,
                name: 'pages',
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/img`,
                name: 'images',
            },
        },
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-relative-images',
                        options: {
                            name: 'uploads',
                        },
                    },
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            // It's important to specify the maxWidth (in pixels) of
                            // the content container as this plugin uses this as the
                            // base for generating different widths of each image.
                            maxWidth: 2048,
                        },
                    },
                    {
                        resolve: 'gatsby-remark-copy-linked-files',
                        options: {
                            destinationDir: 'static',
                        },
                    },
                ],
            },
        },
        {
            resolve: 'gatsby-plugin-netlify-cms',
            options: {
                modulePath: `${__dirname}/src/cms/cms.js`,
            },
        },
        {
            resolve: 'gatsby-plugin-purgecss',
            options: {
                printRejected: true,
            },
        },
        'gatsby-plugin-netlify', // make sure to keep it last in the array
    ],
};
