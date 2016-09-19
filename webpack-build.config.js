/**
 * @author [https://github.com/silence717]
 * @since  2016-09-18
 */
var WebpackStrip = require('strip-loader');
var devConfig = require('./webpack.config');
var stripLoader = {
    test: [/\.js$/, /\.es6$/],
    exclude: /node_modules/,
    loader: WebpackStrip.loader('console.log', 'debug')
};


devConfig.module.loaders.push(stripLoader);

module.exports = devConfig;