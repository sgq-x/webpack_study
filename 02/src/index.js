/**
 * 入口文件
 * 
 *  1 运行指令
 *     开发环境 webpack ./src/index.js -o ./build/build.js --mode=development
 *      生产环境 webpack xxx --mode=production
 * 
 *  2 结论
 *     1 webpack能处理js/json 资源, 不能处理css/img资源
 *     2 生产环境和开发环境将ES6模块化变编译成浏览器能识别的
 *     3 生产环境比开发环境多一个js压缩
 *  */

 function add(x, y) {
   return x + y
 }