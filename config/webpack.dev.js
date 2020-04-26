const merge = require('webpack-merge');
const webpackConfig  =  require('webpack.config');
module.exports = {
    devtool: 'cheap-module-eval-source-map',
    devServer:{
        host: 'localhost',
        port: 8080,
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