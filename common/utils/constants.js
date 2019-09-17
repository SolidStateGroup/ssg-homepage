const Constants = global.Constants = {
    events: {
        'LOGIN': { 'event': 'User login', 'category': 'User' },
        'REGISTER': { 'event': 'User register', 'category': 'User' },
    },
    defaultLocale: 'en',
    simulate: {
        FORCE_LANGUAGE: false, // set to "en" etc to specify a language
    },
    pages: {
        'ACCOUNT': 'Account Page',
        'AUDIT_LOG': 'Audit Log Page',
        'WHAT_ARE_FEATURE_FLAGS': 'What are feature flags Page',
        'RESET_PASSWORD': 'Reset Password Page',
        'COMING_SOON': 'Coming Soon Page',
        'CREATE_ENVIRONMENT': 'Create Environment Page',
        'DOCUMENTATION': 'Documentation Page',
        'ENVIRONMENT_SETTINGS': 'Environment Settings Page',
        'FEATURES': 'Features Page',
        'HOME': 'Home Page',
        'INVITE': 'User Invited Page',
        'NOT_FOUND': '404 Page',
        'ORGANISATION_SETTINGS': 'Organisation Settings Page',
        'POLICIES': 'Terms & Policies Page',
        'PRICING': 'Pricing Page',
        'PROJECT_SELECT': 'Project Select Page',
        'PROJECT_SETTINGS': 'Project Settings Page',
        'USER': 'User Page',
        'USERS': 'Users Page',
    },
};

export default Constants;
