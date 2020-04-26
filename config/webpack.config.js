const path = require('path');
const webpack = require('webpack');
const constant = require('./constant');
const HtmlWebpackplugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    devServer:{
        host: 'localhost',
        port: 8080,
    },
    mode : 'development',
    entry: './../src/main.js',
    output: {
        filename: 'index.js',
        path: path.join(__dirname,'./../dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.vue$/,
                use:[
                    {
                        loader:'cache-loader'
                    },{
                        loader: 'thread-loader'
                    },{
                        loader: 'vue-loader',
                        options: {
                            compilerOptions: {
                                perserveWhitespace: false
                            }
                        }
                    }
                ]
            },{
                test: /\.(scss|sass)$/,
                use: [{
                    loader: 'style-loader'
                },{
                    loader: 'css-loader'
                },{
                    loader: 'sass-loader',
                    options: {
                        implementation: require('dart-sass')
                    }
                },{
                    loader: 'postcss-loader',
                    options:{
                        plugins: [
                            require("autoprefixer")
                        ]
                    }
                }]
            },
            // {
            //     test: /\.(png|jpg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
            //     use: [{
            //         loader: 'url-loader',
            //         options: {
            //             limit: 10000
            //         }
            //     }]
            // }
        ]
    },
    plugins: [
        new HtmlWebpackplugin({
            filename: 'index.html',
            template: path.resolve(__dirname + '/index.html')
        }),
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
            CONSTANT: JSON.stringify(constant)
        }),
    ],
}