const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HappyPack = require('happypack');

const PATHS = {
    src: path.join(__dirname, '../src'),
    dist: path.join(__dirname, '../dist'),
    assets: 'assets/'
};

module.exports = {
    // BASE config
    externals: {
        paths: PATHS
    },
    entry: {
        app: PATHS.src
    },
    output: {
        filename: `${PATHS.assets}js/[name].js`,
        path: PATHS.dist,
        publicPath: ''
    },


    optimization: {
        minimizer: [
            new TerserPlugin({
                sourceMap: true,
                parallel: true,
                cache: true,
                cacheKeys: (defaultCacheKeys, file) => {
                    defaultCacheKeys.myCacheKey = 'myCacheKeyValue';

                    return defaultCacheKeys;
                },
                terserOptions: {
                    warnings: false,
                    ie8: false
                }
            }),
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            }),
        ],
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true,
                },
            },
        },
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: '/node_modules/',
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            },

            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {sourceMap: false}
                    }, {
                        loader: 'postcss-loader',
                        options: {sourceMap: false, config: {path: `${PATHS.src}/js/postcss.config.js`}}
                    }, {
                        loader: 'sass-loader',
                        options: {sourceMap: false}
                    },

                ],
            },

            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            },
        ]
    },
    plugins: [

        new MiniCssExtractPlugin({
            filename: `${PATHS.assets}css/[name].css`,
            chunkFilename: '[id].css',
        }),

        new HappyPack({
            id: 'styles',
            threads: 2,
            loaders: [ 'css-loader', 'sass-loader' ]
        }),

        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/index.html`,
            filename: './index.html'
        }),

        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/cardio.html`,
            filename: './cardio.html'
        }),

        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/power.html`,
            filename: './power.html'
        }),

        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/treadmills.html`,
            filename: './treadmills.html'
        }),

        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/technology.html`,
            filename: './technology.html'
        }),

        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/compas.html`,
            filename: './compas.html'
        }),

        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/goods-cart.html`,
            filename: './goods-cart.html'
        }),

        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/blog.html`,
            filename: './blog.html'
        }),

        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/blog-page.html`,
            filename: './blog-page.html'
        }),

        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/project.html`,
            filename: './project.html'
        }),

        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/project-page.html`,
            filename: './project-page.html'
        }),

        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/comparison.html`,
            filename: './comparison.html'
        }),

        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/comparison-page.html`,
            filename: './comparison-page.html'
        }),

        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/about.html`,
            filename: './about.html'
        }),

        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/service.html`,
            filename: './service.html'
        }),

        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/contact.html`,
            filename: './contact.html'
        }),

        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/search.html`,
            filename: './search.html'
        }),

        new CopyWebpackPlugin([
            {from: `${PATHS.src}/img`, to: `${PATHS.assets}img`},
            {from: `${PATHS.src}/fonts`, to: `${PATHS.assets}fonts`},
            {from: `${PATHS.src}/static`, to: ''},
        ]),


    ],
};
