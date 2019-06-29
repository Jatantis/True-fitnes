const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

const buildWebpackConfig = merge(baseWebpackConfig, {
    // BUILD config
    mode: 'production',
    plugins: [
        new HardSourceWebpackPlugin()
    ]
});

module.exports = new Promise((resolve, reject) => {
    resolve(buildWebpackConfig)
});
