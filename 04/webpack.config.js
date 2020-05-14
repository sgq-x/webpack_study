/**
 * loader 下载 使用
 * plugins 下载 引入 使用
 */
const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bulit.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      // loader
    ]
  },
  plugins: [
    // 功能: 默认会创建一个空的HTML  自动引入打包输出的所有资源(js/css)
    // 需求: 需要有结构的HTML文件
    new HtmlWebpackPlugin({
      // 复制一个HTML文件,并自动引入打包输出的所有资源
      template: './src/index.html'
    })
  ],
  mode: 'development'
}