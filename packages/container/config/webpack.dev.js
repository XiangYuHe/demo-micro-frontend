const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const commonConfig = require('./webpack.common');

// Posible to not explicitly put in the shared section
const packageJson = require('../package.json');

const devConfig = {
    mode: 'development',
    output: {
        publicPath: 'http://localhost:8080/'
    },
    devServer: {
        port: 8080,
        historyApiFallback: {
            index: '/index.html', // Interesting that we need development mode to point to /index.html
        },
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container', // Name for host is being used convention
            remotes: {
                marketing: 'marketing@http://localhost:8081/remoteEntry.js',
                auth: 'auth@http://localhost:8082/remoteEntry.js',
            },
            // shared: ['react', 'react-dom'],
            shared: packageJson.dependencies, // Only if don't want to specific
        }),
    ],
};

module.exports = merge(commonConfig, devConfig);
