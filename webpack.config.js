const path = require("path");

module.exports = {
	mode: "development",
	entry: "./src/index.js",
	output: {
        path: path.resolve(__dirname, "build"), 
        filename: '[name]-[hash]-bundle.js'
    },
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
