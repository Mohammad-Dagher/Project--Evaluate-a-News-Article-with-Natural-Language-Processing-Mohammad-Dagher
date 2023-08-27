const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")  /////
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// const { WorkboxPlugin } = require('workbox-webpack-plugin');
const { GenerateSW } = require('workbox-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');



module.exports = {
    entry: './src/client/index.js',

    output: {
        libraryTarget: 'var',
        library: 'Client',
    },



    // 2- Verify if the mode is present in both dev and prod files.

    mode: 'development',
    devtool: 'source-map',
    // stats: 'verbose',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }

            // 6- Add the test case to the rule in webpack.dev.js and prod:
            
            ,
            
            {
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            }



        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new CleanWebpackPlugin({
            // Simulate the removal of files
            dry: true,
            // Write Logs to Console
            verbose: true,
            // Automatically remove all unused webpack assets on rebuild
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        }),

        // new GenerateSW(),



        new WorkboxPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true
        }), 




        
    ]
}
