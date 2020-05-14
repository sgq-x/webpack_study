const {
  resolve
} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
//分离css 将css提取成单独文件
const miniCssExtractPlugin = require('mini-css-extract-plugin')

// 设置nodejs环境变量
// process.env.NODE_ENV = 'development'

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
        /**
           * css兼容处理: postcss --> postcss-loader postcss-preset-env
           * 
           * 帮助postcss找到package.json中的browserlist里面的配置 通过配置加载指定的css兼容性样式
           * 
           *   "browserslist": {
           * // 开发环境 --> 设置node环境变量: process.env.NODE_ENV = development
            "development": [
            "last 1 chrome version",
           "last 1 firefox version",
            "last 1 safari version"
          ],
          "production": [
          ">0.2%",
          "not dead",
          "not op_mini all"
          ]
                }
           */
        // 使用loader的默认配置
        // 'postcss-loader'
        // 修改loader配置i
        {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            plugins: () => {
              // postcss的插件
              require('postcss-preset-env')()
            }
          }
        }
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
    })
  ],
  mode: 'development'
}