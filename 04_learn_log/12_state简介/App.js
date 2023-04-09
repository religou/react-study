import "./App.css"
import { useState } from 'react'

// 定义 App 组件
// 组件名称应该使用大写，并和文件名称相同
const App = () => {

  // let counter = 23

  // useState 会返回一个数组，数组内有两个元素，第一个元素是传进去的数据
  // 第二个元素是修改数据并重新渲染视图的函数，一般命名为 setXXX
  const [counter, setCounter] = useState(1)

  const add = () => {
    // alert("+1")
    // counter++
    setCounter(counter + 1)
    console.log(counter)
  }

  const sub = () => {
    // alert("-1")
    // counter--
    setCounter(counter - 1)
    console.log(counter)
  }

  return (<div className="app">
    <h1>{counter}</h1>
    <button onClick={add}>+1</button>
    <button onClick={sub}>-1</button>
  </div>)
}

export default App