/* eslint sonarjs/no-duplicate-string: 0 */
const webpack = require("webpack");
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: 'production', // https://webpack.js.org/configuration/mode/
    entry: './src/main/js/app.js',
    output: {
        publicPath: "/",
        filename: 'js/[name].bundle.js',
        chunkFilename: 'js/[name].chunk.js',
        path: __dirname + '/build/resources/main/static'
    },
    module: {
        rules: [
            {
                test: /\.ico$/,
                loader: 'file-loader?name=[name].[ext]'  // <-- retain original file name
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: __dirname + "/build/resources/main/static/css/"
                    }
                }, 'css-loader'],
            },
            {
                test: /\.sass$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            indentedSyntax: true,
                            // sass-loader version >= 8
                            sassOptions: {
                                indentedSyntax: true
                            }
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: 'vue-style-loader' },
                    { loader: 'css-loader', options: { sourceMap: false } },
                    { loader: 'sass-loader', options: { sourceMap: false } },
                    { loader: 'sass-resources-loader', options: { sourceMap: false } }
                ]
            },
            {test: /\.svg$/, use: [ {loader: 'url-loader', options: { mimetype: 'image/svg+xml' }} ]},
            {test: /\.woff$/, use: [ {loader: 'url-loader', options: { mimetype: 'application/font-woff' }} ]},
            {test: /\.woff2$/, use: [ {loader: 'url-loader', options: { mimetype: 'application/font-woff' }} ]},
            {test: /\.eot$/, use: [ {loader: 'url-loader', options: { mimetype: 'application/font-woff' }} ]},
            {test: /\.ttf$/, use: [ {loader: 'url-loader', options: { mimetype: 'application/font-woff' }} ]}
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/main.css"
        }),
        // IntelliJ IDEA uses out/production/resources/ as a classpath.
        new FileManagerPlugin({
            onEnd: {
                copy: [
                    {
                        source: __dirname + '/build/resources/main/static/js',
                        destination: __dirname + '/out/production/resources/static/js'
                    },
                    {
                        source: __dirname + '/build/resources/main/static/css',
                        destination: __dirname + '/out/production/resources/static/css'
                    }
                ]
            }
        })
    ]
};