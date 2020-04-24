const path = require('path');
const HtmlWebpackplugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    devServer:{
        host: 'localhost',
        port: 8080,
    },
    mode : 'development',
    entry: './src/main.js',
    output: {
        filename: 'index.js',
        path: path.join(__dirname,'./dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },{
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
            }
        ]
    },
    plugins: [
        new HtmlWebpackplugin({
            filename: 'index.html',
            template: path.resolve(__dirname + '/index.html')
        }),
        new VueLoaderPlugin()
    ],
}