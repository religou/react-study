const a = 1

const b = 2

const c = 3

const fn = () => {
  console.log("这是函数")
}

const obj = {
  name: "Martin",
  age: "25"
}

/**
 * 将ref.js中的一些变量暴露给别的页面或者是js使用
 * 使用 export
 *    - 默认导出，export default xxx
 *    - 重命名导出
 * 
 * 使用 import
 *    - 在其他文件中，使用 import 导入暴露的数据
 *      - 语法：import xxx from './ref.js'
 *      - 注意：在本地打开 html 的时候，ES6 中不允许直接访问 js 文件
 *             需要安装 live server 插件，使用 live server 打开 html 文件
 */

export default a