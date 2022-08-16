const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const withOffline = require('next-offline');
const withImages = require('next-images');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.BUNDLE_ANALYZE === 'true',
});
const withSourceMaps = require('@zeit/next-source-maps')();


const nextConfig = {
    // next-offline options
    typescript: {
        ignoreBuildErrors: true,
    },
    async rewrites() {
        return [
            {
                'source': '/favicon.ico',
                'destination': '/public/images/favicon.ico',
            },
            {
                'source': '/robots.txt',
                'destination': '/static/robots.txt',
            },
            {
                'source': '/sitemap.xml',
                'destination': '/static/sitemap.xml',
            },
            {
                'source': '/our-work',
                'destination': '/work',
            },
            {
                'source': '/jobs/software-engineer',
                'destination': '/',
            },
            {
                'source': '/2019/08/19/2019/perfect-Google-Lighthouse-score-Next-Redux',
                'destination': '/blog/2019/aug/100-percent-lighthouse-score',
            },
            {
                'source': '/2019/06/19/2019/Our-Tools-2019-Edition',
                'destination': '/blog/2019/jun/our-tools-2019-edition',
            },
            {
                'source': '/2019/05/30/2019/Overcoming-bottlenecks-between-design-frontend-and-backend-developers',
                'destination': '/blog/2019/may/overcoming-bottlenecks-between-design-frontend-and-backend-developers',
            },
            {
                'source': '/2018/12/04/2018/How-To-Work-With-Tech-Agencies-As-A-Startup-Founder---Part-One/',
                'destination': '/blog/2018/feb/how-to-work-with-tech-agencies-as-a-startup-founder-part-one',
            },
            {
                'source': "/2018/11/26/2018/We-Tested-Three-Prototyping-Tools-For-Mobile-Design-in-2018-Here's-What-We-Learned/",
                'destination': '/blog/2018/nov/we-tested-three-prototyping-tools-for-mobile-design-in-2018-heres-what-we-learned',
            },
            {
                'source': '/2018/11/15/2018/The-Sustainable-Change-Roadmap-By-PPL/',
                'destination': '/blog/2018/nov/the-sustainable-change-roadmap-by-ppl',
            },
            {
                'source': '/2018/11/03/2018/How-I-Did-It---What-To-Know-When-You-Leave-A-Corporate-To-Found-A-Tech-Startup/',
                'destination': '/blog/2018/nov/how-i-did-it-what-to-know-when-you-leave-a-corporate-to-found-a-tech-startup',
            },
            {
                'source': "/2018/10/18/2018/How-I-Started-A-Tech-Business---As-Told-By-Seven-Of-London's-Top-Entrepreneurs/",
                'destination': '/blog/2018/oct/how-i-started-a-tech-business---as-told-by-seven-of-londons-top-entrepreneurs',
            },
            {
                'source': '/2018/10/09/2018/Using-our-continuous-integration-tool-to-continuously-integrate-our-continuous-integration-tool/',
                'destination': '/blog/2018/nov/using-our-continuous-integration-tool-to-continuously-integrate-our-continuous-integration-tool',
            },
            {
                'source': '/2018/02/25/2018/Innovations-In-React-Native-=-CodePush/',
                'destination': '/blog/2018/feb/innovations-in-react-native-codepush',
            },

            {
                'source': '/2018/01/26/2018/Healthcare-Tech-Trends-For-2018-Part-2/',
                'destination': '/blog/2018/jan/healthcare-tech-trends-for-2018-part-2',
            },

            {
                'source': '/2018/01/24/2018/An-Augmented-Reality-App-Is-Not-Just-For-Christmas/',
                'destination': '/blog/2018/jan/an-augmented-reality-app-is-not-just-for-christmas',
            },

            {
                'source': '/2018/01/17/2018/Wha-%20CES-2018-Highlights-Tell-Us-About-The-Macro-Trends-For-Tech/',
                'destination': '/blog/2018/jan/what-ces-2018-highlights-tell-us-about-the-macro-trends-for-tech',
            },
            {
                'source': '/2017/11/30/2017/Healthcare-Tech-Trends-for-2018/',
                'destination': '/blog/2017/nov/healthcare-tech-trends-for-2018',
            },

            {
                'source': '/2017/10/25/2017/Startups-Who-Built-Apps-With-React-Native/',
                'destination': '/blog/2017/oct/startups-who-built-apps-with-react-native',
            },
            {
                'source': '/2017/10/20/2017/5-Things-To-Look-For-In-React-Native-Developers/',
                'destination': '/blog/2017/oct/5-things-to-look-for-in-react-native-developers',
            },
            {
                'source': '/2017/09/20/2017/90-percent-of-digital-transformation-projects-fail/',
                'destination': '/blog/2017/sep/90-percent-of-digital-transformation-projects-fail',
            },
            {
                'source': '/2017/09/11/2017/What-The-Gaming-Industry-Can-Teach-Corporates-About-Strategy-Security-and-Digital-Transformation/',
                'destination': '/blog/2017/nov/what-the-gaming-industry-can-teach-corporates-about-strategy-security-and-digital-transformation',
            },

            {
                'source': '/2017/08/15/2017/What-Happens-When-You-Make-SSG-Do-An-Ecommerce-Hackathon-With-Demos/',
                'destination': '/blog/2017/aug/what-happens-when-you-make-ssg-do-an-ecommerce-hackathon-with-demos',
            },

            {
                'source': '/2017/08/14/2017/We-Like-Killing-People/',
                'destination': '/blog/2017/aug/we-like-killing-people',
            },

            {
                'source': '/2017/08/04/2017/The-Real-MVP-What-Happened-Next/',
                'destination': '/blog/2017/apr/the-real-mvp-what-happened-next',
            },

            {
                'source': '/2017/08/24/2017/Introducing-SSG-Labs/',
                'destination': '/blog/2017/nov/introducing-ssg-labs',
            },

            {
                'source': '/2017/07/18/2017/Can-I-Wear-Shorts/',
                'destination': '/blog/2017/jul/can-I-wear-shorts',
            },
            {
                'source': '/2017/06/29/2017/Bridges-Over-Troubled-Water-can-React-Native-handle-integrations/',
                'destination': '/blog/2017/jun/bridges-over-troubled-water-can-react-native-handle-integrations',
            },
            {
                'source': '/2017/06/15/2017/You-Make-One-Bus-App-Then-Hundreds-Come-At-Once/',
                'destination': '/blog/2017/nov/you-make-one-bus-app-then-hundreds-come-at-once',
            },
            {
                'source': '/2017/06/13/2017/Chatbots-Are-Coming-To-Kill-Apps-and-Google-Search/',
                'destination': '/blog/2017/jun/chatbots-are-coming-to-kill-apps-and-google-search',
            },
            {
                'source': '/2017/06/02/2017/The-Real-MVP-Validating-a-Business-In-Two-Days/',
                'destination': '/blog/2017/jun/the-real-mvp-validating-a-business-in-two-days',
            },

            {
                'source': '/2017/04/07/2017/Making-our-LED-Wall-emotionally-aware-with-IBMs-Watson/',
                'destination': '/blog/2017/apr/making-our-led-wall-emotionally-aware-with-ibms-watson',
            },

            {
                'source': '/2017/04/05/2017/Building-a-pixel-wall-in-virtual-reality-with-React-VR-and-RIO!-Our-first-impressions/',
                'destination': '/blog/2017/may/building-a-pixel-wall-in-virtual-reality-with-react-vr-and-rio-our-first-impressions',
            },


            {
                'source': '/2017/03/23/2017/they-went-to-SXSW-and-I-alI-got-was-this-lousy%20blog/',
                'destination': '/blog/2017/apr/they-went-to-SXSW-and-I-alI-got-was-this-lousy-blog',
            },

            {
                'source': '/2017/03/23/2017/they-went-to-SXSW-and-I-alI-got-was-this-lousy%20blog/',
                'destination': '/blog/2017/apr/they-went-to-SXSW-and-I-alI-got-was-this-lousy-blog',
            },

            {
                'source': '/2017/02/08/2017/Its-cross-platform-and-massively-reduces-app-dev-costs-but-WTF-is-React-Native/',
                'destination': '/blog/2017/aug/Its-cross-platform-and-massively-reduces-app-dev-costs-but-WTF-is-React-Native',
            },

            {
                'source': '/2017/01/19/2017/5%20things%20most%20startups%20forget%20when%20building%20their%20first%20app/',
                'destination': '/blog/2017/jan/5-things-most-startups-forget-when-building-their-first-app',
            },

            {
                'source': '/2017/01/17/2017/laundry-is-dull-and-robots-are-cool-insights-from-CES-2017/',
                'destination': '/blog/2017/jan/laundry-is-dull-and-robots-are-cool-insights-from-CES-2017',
            },
            {
                'source': '/2016/12/13/2016/10%20must%20read%20long%20reads%20this%20holiday/',
                'destination': '/blog/2016/dec/10-must-read-long-reads-this-holiday',
            },
            {
                'source': '/2016/12/02/2016/failing-faster-part-1/',
                'destination': '/blog/2016/feb/failing-faster-part-1',
            },
            {
                'source': "/2018/10/17/2018/How-I-Did-It---I-Left-Procter-And-Gamble-To-Start-London's-Biggest-Female-Entrepreneurs-Network/",
                'destination': '/blog/2018/oct/how-i-did-it-i-left-procter-and-gamble-to-start-londons-biggest-female-entrepreneurs-network',
            },
            {
                'source': '/2018/10/17/2018/How-I-Did-It---I-Left-The-BBC-While-Heavily-Pregnant-To-Found-A-Parents-Tech-Startup/',
                'destination': '/blog/2018/oct/how-i-did-it-i-left-the-bbc-while-heavily-pregnant-to-found-a-parents-tech-startup',
            },
            {
                'source': '/2018/10/08/2018/How-I-Retrained-As-A-Junior-Developer-While-Working-At-Solid-State-Group/',
                'destination': '/blog/2018/oct/how-i-retrained-as-a-junior-developer-while-working-at-solid-state-group',
            },
            {
                'source': '/2018/09/30/2018/How-I-Did-It---I-left-commercial-law-to-found-my-legal-startup/',
                'destination': '/blog/2018/sep/how-i-did-it-i-left-commercial-law-to-found-my-legal-startup',
            },
            {
                'source': '/2018/09/30/2018/How-I-Did-It---I-Left-Telefonica-For-A-Healthcare-Tech-Startup/',
                'destination': '/blog/2018/sep/how-i-did-it-i-left-telefonica-for-a-healthcare-tech-startup',
            },
            {
                'source': '/2018/09/13/2018/How-I-Did-It---I-left-finance-to-found-my-machine-learning-startup/',
                'destination': '/blog/2018/sep/how-i-did-it-i-left-finance-to-found-my-machine-learning-startup',
            },
            {
                'source': '/2018/08/30/2018/How-I-Did-It--I-Left-Accountancy-To-Found-My-Own-Startup/',
                'destination': '/blog/2018/aug/how-i-did-it-i-left-accountancy-to-found-my-own-startup',
            },
            {
                'source': '/2018/06/05/2018/The-Road-To-Disruption---How-To-Find-And-Build-Great-Ideas/',
                'destination': '/blog/2018/jun/the-road-to-disruption-how-to-find-and-build-great-ideas',
            },
            {
                'source': '/2018/02/05/2018/Glenfiddich-Stag-Racing-When-Whisky-Meets-Hackathons/',
                'destination': '/blog/2018/may/glenfiddich-stag-racing-when-whisky-meets-hackathons',
            },
            {
                'source': '/2018/04/24/2018/Serverless-Architecture---Explained-Via-Burgers/',
                'destination': '/blog/2018/apr/serverless-architecture-explained-via-burgers',
            },
            {
                'source': '/2018/04/24/2018/Serverless-Architecture---Explained-Via-Burgers/',
                'destination': '/blog/2018/apr/serverless-architecture-explained-via-burgers',
            },
            {
                'source': '/2018/03/17/2018/How-We-Built-It---The-Secure-Healthcare-App/',
                'destination': '/blog/2018/mar/how-we-built-it-the-secure-healthcare-app',
            },
            {
                'source': '/2018/03/07/2018/Technical-Innovation-For-Non-Developers---Serverless-Architecture/',
                'destination': '/blog/2018/mar/technical-innovation-for-non-developers-serverless-architecture',
            },
            {
                'source': '/2018/02/28/2018/How-Do-I-Use-A-React-Native-App-To-Raise-A-Seed-Round/',
                'destination': '/blog/2018/feb/how-do-i-use-a-react-native-app-to-raise-a-seed-round',
            },
            {
                'source': '/2018/02/27/2018/From-MVPs-to-Raising-Seed-Money---Why-You-Should-Build-Your-App-in-React-Native/',
                'destination': '/blog/2018/feb/from-mvps-to-raising-seed-money-why-you-should-build-your-app-in-react-native',
            },
            {
                'source': '/2018/02/25/2018/How-Corporate-Innovation-Teams-Can-Use-React-Native-To-Drive-Ideation,-Visualisation,-and-Stakeholder-Buy-In/',
                'destination': '/blog/2018/feb/how-corporate-innovation-teams-can-use-react-native-to-drive-ideation-visualisation-and-stakeholder-buy-in',
            },
            {
                'source': '/2018/02/16/2018/Healthcare-Tech-Trends-for-2018-Part-3/',
                'destination': '/blog/2018/feb/healthcare-tech-trends-for-2018-part-3',
            },
            {
                'source': '/2018/02/28/2018/How-To-Use-React-Native-To-Get-Stakeholder-Backing-For-Innovation-Projects/',
                'destination': '/blog/2018/feb/how-to-use-react-native-to-get-stakeholder-backing-for-innovation-projects',
            },
            {
                'source': '/2018/02/27/2018/React-Native-For-Scale-Ups---Use-Cases-and-Future-Proofing/',
                'destination': '/blog/2018/feb/react-native-for-scale-ups-use-cases-and-future-proofing',
            },
            {
                'source': '/2017/03/03/2017/we-built-a-giant-pixel-wall-for-fun-but-what-we-learnt-went-a-lot-further/',
                'destination': '/blog/2017/mar/we-built-a-giant-pixel-wall-for-fun-but-what-we-learnt-went-a-lot-further',
            },
            {
                'source': '/2016/07/13/2016/what-is-docker/',
                'destination': '/blog/2016/jul/what-is-docker',
            },
            {
                'source': '/2016/07/13/2016/what-is-docker/',
                'destination': '/blog/2016/jul/what-is-docker',
            },
            {
                'source': '/2015/07/13/2015/how-were-building-startups-2015-edition/',
                'destination': '/blog/2015/jul/how-were-building-startups-2015-edition',
            },
            {
                'source': '/2014/07/13/2014/a-review-of-the-new-fangled-petrol-powered-car',
                'destination': '/blog/2014/jul/a-review-of-the-new-fangled-petrol-powered-car',
            },
        ];
    },
    workboxOpts: {
        swDest: 'static/service-worker.js',
        runtimeCaching: [
            {
                urlPattern: new RegExp('.*?.woff'),
                handler: 'CacheFirst',
                options: {
                    cacheName: 'fonts',
                    expiration: {
                        maxEntries: 150,
                        maxAgeSeconds: (60 * 60 * 24) * 10, // 2 days
                    },
                    cacheableResponse: {
                        statuses: [0, 200, 304],
                    },
                },
            },
            {
                urlPattern: /^https?.*/,
                handler: 'NetworkFirst',
                options: {
                    cacheName: 'https-calls',
                    networkTimeoutSeconds: 15,
                    expiration: {
                        maxEntries: 150,
                        maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
                    },
                    cacheableResponse: {
                        statuses: [0, 200],
                    },
                },
            },
        ],
    },
    // buildId, dev, isServer, defaultLoaders, webpack
    webpack: (config, { dev }) => {
        const base = dev ? require('./webpack/webpack.config.dev') : require('./webpack/webpack.config.prod');
        if (base.plugins) {
            config.plugins = config.plugins.concat(base.plugins);
        }

        config.module.rules.push({
            test: /\.md$/,
            use: 'raw-loader',
        });

        return config;
    },
};

module.exports = withImages(
    withOffline(
        withSourceMaps(
            withBundleAnalyzer(
                withSass(
                    withCSS(nextConfig),
                ),
            ),
        ),
    ),
);
