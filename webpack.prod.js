const path = require("path");
const common = require('./webpack.common')
const {merge} = require('webpack-merge')
const {CleanWebpackPlugin}  = require('clean-webpack-plugin')

module.exports = merge(common, {
	mode: "production",
    output: {
        path: path.resolve(__dirname, "build"), 
        filename: '[name]-[contenthash]-bundle.js'
    },
    plugins: [new CleanWebpackPlugin()]
})