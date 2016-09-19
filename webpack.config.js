/**
 * @author [https://github.com/silence717]
 * @since  2016-09-18
 */
var path = require('path');
var webpack = require('webpack');

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('share.js');

module.exports = {
    context: path.resolve('js'),
    entry: ['./utils.js', './app'],
    output: {
        path: path.resolve('build/js/'),
        publicPath: '/public/assets/js/',
        filename: 'bundle.js'
    },

    plugins: [commonsPlugin],
    
    devServer: {
        contentBase: 'public'
    },
    
    module: {
        // preLoaders: [
        //     {
        //         test: /\.js$/,
        //         exclude: 'node_modules',
        //         loader: 'eslint-loader'
        //     }
        // ],
        loaders: [
            {
                test: /\.es6$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.es6']
    }
};