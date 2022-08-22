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
        technology: 'Technology | Solid State Group',
        mobileAppDevelopment: 'React Native Mobile App Development - Apps For iOS & Android',
        webAppDevelopment: 'Web App Development | Solid State Group',
        reactNative: 'What Is React Native And How Does It Work For Mobile Apps',
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
        userResearch: 'User Research | Solid State Group',
        userTesting: 'User Testing | Solid State Group',
        discovery: 'Discovery | Solid State Group',
        prototyping: 'Prototyping | Solid State Group',
        responsiveWebApps: 'Responsive Web Apps | Solid State Group',
        systemsIntegration: 'Systems Integration | Solid State Group',
        contactForm: 'Contact | Solid State Group',
        contactFormThanksPage: 'Thanks | Solid State Group',
        leadSoftwareDevJobPage: 'Lead Software / DevOps Engineer | Solid State Group',
        racingPost: 'Racing Post | Solid State Group',
        toyota: 'Toyota | Solid State Group',
        zopa: 'Zopa | Solid State Group',
        ladbrokes: 'Ladbrokes Coral | Solid State Group',
        heroWellbeing: 'Hero Wellbeing | Solid State Group',
        siteAssist: 'Site Assist | Solid State Group',
        detonator: 'Detonator | Solid State Group',
        vuunity: 'Vuunity | Solid State Group',
        pickswise: 'Pickswise | Solid State Group',
        cap10: 'Cap10 | Solid State Group',
        reactNativeConversionCalculator: 'React Native Conversion Calculator | Solid State Group', // Used by default on all pages
    },
    // meta:description
    descriptions: {
        // Used by default
        home: 'We build amazing digital products, with services such as UX & UI design, mobile & responsive web app development and more. Learn more about our services.',
        '/blog': 'Stay in the loop with our thoughts and experiences from the digital world, in which we detail our techniques, tools, processes and up-to-date industry trends.',
        '/work': 'We\'ve worked on a large range of development projects across a wide variety of sectors. Take a look at some of the latest and greatest projects we’ve built.',
        '/partners': 'Are you looking for a technology partner made up of highly skilled developers to supplement your team? Learn more about how to become a partner today!',
        '/services': 'We offer a wide range of development services, including mobile app development, UX & UI design, and more. Take a look at some of the services we offer!',
        '/contact': 'Have any questions about the services we offer? Get in contact and send us a brief today. Send us your web development needs and find out how we can help you!',
        '/contact-form': 'Have any questions about our services? Get in contact and fill out a contact form today with your web development needs and find out how we can help you!',
        '/privacy-policy': 'Read our Privacy Policy, giving you information on how we use personal data and other private information that we collect from you as a user of this site.',
        '/projects/toyota': 'View our logistics mobile App made for Toyota internal teams.  VIN Scanning and vehicle audit mobile application built for Toyota teams Android devices',
        '/projects/site-assist': 'View our work with startup Site Assist, a full service project including branding and the design and build of a responsive web app and mobile apps for iOS and Android',
        '/projects/unilever': 'Take a look at the case study from our work with global superbrand Unilever, in which we assisted in making ecommerce more efficient and sustainable.',
        '/projects/hertz': 'View our work with car rental giants Hertz, in which we created a connected mobile application using Ford\'s AppLink technology to soothe customer pain-points.',
        '/projects/glenfiddich': 'View our work with Glenfiddich, designing a mobile multiplayer racing game with integrated augmented reality technology to increase customer engagement.',
        '/projects/wazoku': 'Take a look at our work with Wazoku, where we created a high security mobile application for the capture & innovation of ideas using their existing API platform.',
        '/projects/hero-wellbeing': 'View our work with Hero; a responsive web and mobile app allowing users to progress goals in sleep, nutrition & mindfulness with wearable technologies.',
        '/projects/british-airways': 'View our work with British Airways, in which we created a real-time operational dashboard that integrated with 1960s technology to great effect within 6 months.',
        '/projects/meow-now': 'Take a look at our work with Meow Now, where we created a new brand identity, product packaging and product website for their cat food subscription business.',
        '/projects/publicate': 'View our work with Publicate, tasked with the redesign and rebuild their app to help companies manage and distribute documentation across their organisation.',
        '/projects/tone-and-sculpt': 'View our work in creating an iOS and Android mobile app in the fitness industry to vastly improve the quality of the experience customers were getting. ',
        '/projects/hailie': 'View our work in the healthcare industry, where we built a mobile app and clinician dashboard which integrated with Adherium’s Bluetooth Smart Inhalers.',
        '/projects/visa': 'View our work with Visa, creating an app which integrated with smart technology in the form of an NFC ring that could be tapped in order to make a purchase.',
        '/projects/purely-capital': 'Take a look at the innovative approach we took to UX & UI design with Purely Capital to create a web application with a unique & exciting customer experience.',
        '/projects/dugout': 'View our work with Dugout FC to build web and mobile apps for their brand new fantasy football game using Facebook’s React and React Native technologies.',
        '/projects/electron-trader': 'View our work with Electron, in which we created a unique UX design to signifcantly improve experience, whilst remaining in keeping with brand guidelines.',
        '/services/api-development': 'We\'ve been working with corporations and startups for over 15 years to build secure, bespoke APIs with scalable integrations for legacy systems. Learn more.',
        '/services/branding': 'Learn about our work with small and large businesses to deliver high quality brand guidelines and identities, including logo designs, display ads, icons & more.',
        '/services/design': 'Read about our approach our design projects, born out of a desire to understand our customers and deliver value quickly. Great design solves problems.',
        '/services/mobile-app-development': 'Using React Native to build amazing mobile apps, we build apps for iOS & Android simultaneously, and can reduce build costs up to 40%! Learn more today.',
        '/services/react-native': 'React Native is a real mobile app. Unlike web app wrappers, React Native uses native platform libraries to create a completely native experience for your users.',
        '/services/responsive-web-apps': 'Users access content through a variety of devices, so it\'s important your digital properties work well in every instance. Learn about our responsive designs.',
        '/services/strategy': 'Learn how we can help create technical solutions to solve business problems, including digital transformation, process re-engineering, new products & more.',
        '/services/systems-integration': 'Our integration solutions are designed to be scalable, merging component subsystems into one system with bespoke software development. Learn more.',
        '/services/user-research': 'Read more about how we conduct detailed user research, flexible depending on your project and budget, resulting in a better user experience for your users.',
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

        technology: 'Technology',
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
        servicesUserResearch: 'User Research',
        servicesUserTesting: 'User Testing',
        servicesDiscovery: 'Discovery',
        servicesFlutter: 'Flutter',
        mobileAppDev: 'Mobile Application Development',
        servicePrototyping: 'Prototyping',
        reactNative: 'React Native',
        responsiveWebApps: 'Responsive web applications',
        serviceStrategy: 'Strategy',
        systemsIntegration: 'Systems Integration',

        projectHero: 'Hero Wellbeing',
        projectSA: 'Site Assist',
        projectDetonator: 'Detonator',
        projectVuunity: 'Vuunity',
        projectBA: 'British Airways',
        projectCap10: 'Cap10',
        projectCP: 'Change Please',
        projectChorus: 'Chorus',
        projectDugout: 'Dugout FC',
        projectElectronTrader: 'Electron Trader',
        projectElectronX: 'Electron X',
        projectGlenfiddich: 'Glenfiddich',
        projectHailie: 'Hailie',
        projectHertz: 'Hertz',
        projectImperial: 'Imperial Hotels',
        projectLC: 'Ladbrokes Coral',
        projectTails: 'Tails.com',
        projectToyota: 'Toyota',
        projectPV: 'PatientView',
        projectPublicate: 'Publicate',
        projectPurely: 'Purely Capital',
        projectRP: 'Racing Post',
        projectTandS: 'Tone and Sculpt',
        projectUnilever: 'Unilever',
        projectVisa: 'VISA',
        projectWazoku: 'Wazoku',
        projectWFA: 'WFA',
        projectZopa: 'Zopa',
    },
};

export default Constants;
