const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const commonConfig = require('./webpack.common');

// Posible to not explicitly put in the shared section
const packageJson = require('../package.json');

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8080,
        historyApiFallback: {
            index: 'index.html',
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new ModuleFederationPlugin({
            name: 'container', // Name for host is being used convention
            remotes: {
                marketing: 'marketing@http://localhost:8081/remoteEntry.js'
            },
            // shared: ['react', 'react-dom'],
            shared: packageJson.dependencies, // Only if don't want to specific
        }),
    ],
};

module.exports = merge(commonConfig, devConfig);
