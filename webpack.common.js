const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: "development",
	entry: "./src/index.js",
    plugins: [new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/index.html'
    })],
    module: {
        rules: [
            {
                test: /\.css$/,  // never wrap regex in quotes
                use: [
                    "style-loader", //2. Inject styles into DOM
                    "css-loader", //1. Turns css into commonjs
                ]
            }
        ]
  }
}
