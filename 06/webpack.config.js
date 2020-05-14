const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'built.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      // {
      //   test: /\.less$/,
      //   use: [
      //     'style-loader',
      //     'css-loader',
      //     'less-loader'
      //   ]
      // },
      {
        // 处理不了html中img图片
        // 处理图片资源
        test: /\.(jpg|png|gif)$/,
        // url-loader file-loader
        loader: 'url-loader',
        options: {
          // 图片大小小于8kb 就会被base64处理--字符串处理
          // base64 优点: 减少请求数量 缺点: 图片体积会更大
          limit: 8 * 1024,
          // esModule: false
          name: '[hash:10].[ext]'
        }
      },
      // {
      //   test: /\.html$/,
      //   // 处理html文件的img图片
      //   loader: 'html-loader'
      // },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(ttf|eot|svg|woff|woff2)$/,
        use: ['url-loader']
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  mode: 'development'
}