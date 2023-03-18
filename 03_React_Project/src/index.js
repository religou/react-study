// src/index.js 是 js 的入口文件
// 引入 ReactDOM
import ReactDOM from 'react-dom/client'

// 创建 JSX
const app = <div>
  <h1>这是一个React项目</h1>
  <p>我终于有了一个React项目</p>
</div>

// 获取根元素
const root = ReactDOM.createRoot(document.getElementById("root"))
// 渲染到根元素中
root.render(app)
