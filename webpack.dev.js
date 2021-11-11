const path = require("path");
const common = require("./webpack.common")
const merge = require("webpack-merge").merge

module.exports = merge(common, {
	mode: "development",
    output: {
        path: path.resolve(__dirname, "build"), 
        filename: '[name].js'
    },
})