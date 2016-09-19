/**
 * @author [https://github.com/silence717]
 * @since  2016-09-18
 */
var path = require('path');

module.exports = {
    context: path.resolve('js'),
    entry: ['./app'],
    output: {
        path: path.resolve('build/js/'),
        publicPath: '/public/assets/js/',
        filename: 'bundle.js'
    },

    devServer: {
        contentBase: 'public'
    },
    
    module: {
        loaders: [
            {
                test: /\.html/,
                exclude: /node_modules/,
                loader: 'raw-loader'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.es6']
    }
};