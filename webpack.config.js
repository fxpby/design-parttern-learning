const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: './release/bundle.js'
  },
  module: {
    rules: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  devServer: {
    static: path.join(__dirname, './release'),
    hot: true,
    open: true, // 自动打开浏览器
    port: 9001
  }
}