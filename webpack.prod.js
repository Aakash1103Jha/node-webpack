const path = require("path");
const common = require('./webpack.common')
const merge = require('webpack-merge').merge

module.exports = merge(common, {
	mode: "production",
    output: {
        path: path.resolve(__dirname, "build"), 
        filename: '[name]-[hash]-bundle.js'
    },
})