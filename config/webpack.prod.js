const path = require('path');
const merge = require('webpack-merge'); //合并webpack配置
const webpack = require('webpack');
const constant = require('./config/constant');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //提取css到文件中
const OptimizeCssnanoPlugin = reuqire('@intervolga/optimize-cssnano-plugin'); //压缩css代码
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // 删除上次构建的文件
const CopyWebpackPlugin = require('copy-webpack-plugin');  //
module.exports = {
    mode: 'production',
    devtool: '#source-map',
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    name: 'chunk-vendors',
                    test: /[\\\/]node_modules[\\\/]/,
                    priority: -10,
                    chunk: 'initial'
                },
                common: {
                    name: 'chunk-common',
                    minChunks: 2,
                    priority: -20,
                    chunk: 'initial',
                    reuseExistingChunk: true
                }
            }
        }
    },
    module: {
        rules: [{
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
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }),
        new OptimizeCssnanoPlugin({
            sourceMap: true,
            cssnanoOptions: {
                preset: [
                    'default',{
                        mergeLonghand: false,
                        cssDeclarationSorter: false
                    }
                ]
            }
        }),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname,'../dist'),
                to: path.resolve(__dirname, '../dist')
            }
        ]),
        new CleanWebpackPlugin(),   //用于删除上次构建的文件
    ],
}