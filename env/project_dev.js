// export default global.Project = {
//     debug: false,
//     ga: '',
//     // appUrl: 'https://app.bullet-train.io/',
//     api: 'https://bullet-train-api-dev.dokku1.solidstategroup.com/api/v1/',
//     appUrl: 'https://app.dev.bullet-train.io/',
//     logs: {
//         DATA: true,
//         STORE: true,
//         DISPATCHER: true,
//         SERVER: true,
//     },
// };

module.exports = global.Project = {
    api: 'https://api.bullet-train.io/api/v1/',
    ga: 'UA-120237963-1', // This is our Google Analytics key
    appUrl: 'https://app.bullet-train.io/',
    freshChat: {
        token: '5a71b820-b007-4bc4-86f6-4145411604c2',
        host: 'https://wchat.freshchat.com',
    },
    mixpanel: '9448f5be8a5555c380e5dd4b7ac2c345',
};
