import "./App.css"

// 定义 App 组件
// 组件名称应该使用大写，并和文件名称相同
const App = () => {

  let counter = 23

  const add = () => {
    // alert("+1")
    counter++
    console.log(counter)
  }

  const sub = () => {
    // alert("-1")
    counter--
    console.log(counter)
  }

  return (<div className="app">
    <h1>{counter}</h1>
    <button onClick={add}>+1</button>
    <button onClick={sub}>-1</button>
  </div>)
}

export default App