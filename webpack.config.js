/**
 * @author [https://github.com/silence717]
 * @since  2016-09-18
 */
module.exports = {
    entry: ['./utils.js', './app.js'],
    output: {
        filename: 'bundle.js'
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                exclude: 'node_modules',
                loader: 'eslint-loader'
            }
        ],
        loaders: [
            {
                test: /\.es6$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensidons: ['', '.js', '.es6']
    }
};