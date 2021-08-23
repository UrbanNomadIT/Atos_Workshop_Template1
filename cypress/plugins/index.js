const cucumber = require("cypress-cucumber-preprocessor").default; // eslint-disable-line

module.exports = (on) => {
  on("file:preprocessor", cucumber());
};

//
// const webpackPreprocessor = require('@cypress/webpack-preprocessor');
// const PnpWebpackPlugin = require('pnp-webpack-plugin');
//
// module.exports = (on) => {
//    const options = {
//        webpackOptions: {
//            resolve: {
//                plugins: [
//                    PnpWebpackPlugin
//                ]
//            },
//            resolveLoader: {
//                plugins: [
//                    PnpWebpackPlugin.moduleLoader(module)
//                ]
//            }
//        },
//        watchOptions: {}
//    };
//
//  on('file:preprocessor', webpackPreprocessor(options));
// };