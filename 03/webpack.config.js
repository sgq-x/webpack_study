/**
 * webpack的配置文件
 *  作用: 指示webpack干哪些活
 * 所有的构建工具都是基于nodejs平台运行的  默认采用commonjs
 */
const {resolve} = require('path')
 module.exports = {
   entry: './src/index.js',
   output: {
     filename: 'built.js',
    // 当前文件的目录绝对路径
     path: resolve(__dirname, 'build')
   },
  //  loader配置
  module: {
    rules: [
      // 详细loader配置
      {
        test: /\.css$/,
        use: [
          // 数组中执行的顺序 右到做 下到上
          // 创建style标签,将js中的样式资源添加到head中生效
          'style-loader',
          // 将css文件加载到js中
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      }
    ]
  },
  // plugin的配置
  // plugins: [

  // ],
  // 模式
  mode: 'development'
 }

