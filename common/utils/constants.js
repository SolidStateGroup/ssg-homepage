const Constants = global.Constants = {
    events: {
        'LOGIN': { 'event': 'User login', 'category': 'User' },
        'REGISTER': { 'event': 'User register', 'category': 'User' },
    },
    defaultLocale: 'en',
    simulate: {
        FORCE_LANGUAGE: false, // set to "en" etc to specify a language
    },
    // <title>
    titles: {
        home: 'Solid State Group', // Used by default on all pages
        blog: 'Blog | Solid State Group',
        work: 'Our Work | Solid State Group',
        partners: 'Partners | Solid State Group',
        jobs: 'Jobs | Solid State Group',
        services: 'Services | Solid State Group',
        mobileAppDevelopment: 'Mobile App Development | Solid State Group',
        webAppDevelopment: 'Web App Development | Solid State Group',
        reactNative: 'React Native | Solid State Group',
        augmentedReality: 'Augmented Reality | Solid State Group',
        flutter: 'Flutter | Solid State Group',
        contact: 'Contact | Solid State Group',
        apiDevelopment: 'API Development | Solid State Group',
        bespokeSoftwareDevelopment: 'Bespoke Software Development | Solid State Group',
        strategy: 'Strategy | Solid State Group',
        branding: 'Branding | Solid State Group',
        cloudInfrastructure: 'Cloud Infrastructure | Solid State Group',
        customSoftwareDevelopment: 'Custom Software Development | Solid State Group',
        design: 'Design | Solid State Group',
        prototyping: 'Prototyping | Solid State Group',
        responsiveWebApps: 'Responsive Web Apps | Solid State Group',
        systemsIntegration: 'Systems Integration | Solid State Group',
        contactForm: 'Contact | Solid State Group',
        contactFormThanksPage: 'Thanks | Solid State Group',
        leadSoftwareDevJobPage: 'Lead Software / DevOps Engineer | Solid State Group',
        racingPost: 'Racing Post | Solid State Group',
        zopa: 'Zopa | Solid State Group',
        ladbrokes: 'Ladbrokes Coral | Solid State Group',
        heroWellbeing: 'Hero Wellbeing Coral | Solid State Group',
    },
    // meta:description
    descriptions: {
        // Used by default
        home: 'At Solid State Group, we help design and build new digital products, drag legacy technology up to date, and make all your systems work together.',
    },
    // meta:description
    keywords: {
        // Used by default
        home: 'Api development, custom, iot, bespoke, software development, mobile application development, user interface design, ux design, react native, systems integration, cloud infrastructure, technology, digital',
    },
    pages: {
        home: 'Homepage',
        blog: 'Blog',
        work: 'Work',
        services: 'Services',
        partners: 'Partners',
        contact: 'Contact',
        thanks: 'Thanks',

        serviceApiDev: 'API Development',
        augmentedReality: 'AR',
        bespokeSoftwareDev: 'Bespoke Software Development',
        serviceBranding: 'Branding',
        serviceCloudInfra: 'Cloud Infrastructure',
        customSoftwareDev: 'Custom Software Development',
        servicesDesign: 'Design',
        servicesFlutter: 'Flutter',
        mobileAppDev: 'Mobile Application Development',
        servicePrototyping: 'Prototyping',
        reactNative: 'React Native',
        responsiveWebApps: 'Responsive web applications',
        serviceStrategy: 'Strategy',
        systemsIntegration: 'Systems Integration',
    },
};

export default Constants;
