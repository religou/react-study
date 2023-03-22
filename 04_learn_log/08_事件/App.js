
// 定义 App 组件
// 组件名称应该使用大写，并和文件名称相同
const App = () => {
  const clickHandler = (event) => {

    alert("事件触发函数")
    // 取消原始的事件功能
    event.preventDefault()
    // 阻止事件的冒泡
    event.stopPropagation()

  }

  const clickHandler_2 = (event) => {

    // 不使用这个的话，那么组件内的子元素都会触发该事件
    event.stopPropagation()
    alert("父组件的触发函数")

  }
  return (<div onClick={clickHandler_2}>
    <button onClick={clickHandler}>点击</button>
    <a href="https://www.baidu.com" onClick={clickHandler}>超链接</a>
  </div>)
}

export default App