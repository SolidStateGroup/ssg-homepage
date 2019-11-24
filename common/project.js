export default global.Project = {
    debug: false,
    api: '',
    ga: '',
    appUrl: 'https://app.bullet-train.io/',
    logs: {
        DATA: true,
        STORE: true,
        DISPATCHER: true,
        SERVER: true,
    },
};
if (typeof ENV_NAME !== 'undefined' && typeof ENV_TYPE !== 'undefined') {
    Project.api = `https://api-${ENV_NAME}.data-${ENV_TYPE}.eu-west-2.aws.rp-cloudinfra.com/api/validation/`;
}
