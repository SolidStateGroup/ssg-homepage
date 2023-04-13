const webpack = require('webpack');

const props = {
    E2E: process.env.E2E,
    ENV_NAME: JSON.stringify(process.env.NAME),
    ENV_TYPE: JSON.stringify(process.env.ACCOUNT_TYPE),
};

module.exports = [

    new webpack.DefinePlugin(props),


];
