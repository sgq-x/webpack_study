const {
  resolve
} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
//分离css 将css提取成单独文件
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')

// 设置nodejs环境变量
// process.env.NODE_ENV = 'development'

// optimize-css-assets-webpack-plugin
module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'js/built.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [{
      test: /\.css$/,
      // style-loader：创建style标签,将样式放入
      // css-loader 将css文件整合到js文件中
      use: [
        // 'style-loader', 
        // 这个loader取代style-loader 作用: 提取js中的css成单独文件
        miniCssExtractPlugin.loader,
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            plugins: () => {
              // postcss的插件
              require('postcss-preset-env')()
            }
          }
        },

      ]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new miniCssExtractPlugin({
      // 对输出的文件重命名
      filename: 'css/built.css'
    }),
    new OptimizeCssAssetsWebpackPlugin()
  ],
  mode: 'development'
}