const path = require('path');
const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        './src/app.js'
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "app.bundle.js"
    },
    module: {
        rules: [{
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    externals: {
        jquery: 'jQuery'
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'My App',
        filename: 'index.html',
        hash: true,
        template: 'src/index.html',
    })],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 8080,
        stats: "errors-only"
    }
}