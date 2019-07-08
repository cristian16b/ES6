const path = require('path');

module.exports = {
  mode: 'production',
  entry: ["@babel/polyfill", ".src/app/js"],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/')
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
};