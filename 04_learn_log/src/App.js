import "./App.css"
import { useState } from 'react'

// 定义 App 组件
// 组件名称应该使用大写，并和文件名称相同
const App = () => {

  console.log("App 组件渲染了。。。")

  // 1.setState 只有在数据发生变化的时候，才会被调用
  // 2.使用setState 修改对象时，是使用新的对象来代替老的对象，如果直接更新原有
  //   对象的值，并不会重新渲染组件，因为对象的内存地址并没有发生变化
  // 3.setState 的原理是每次修改数据的时候，将修改内容放入到队列中，然后等到其
  //   他函数执行完成之后，才会对数据进行修改，所以是直接修改成最终的结果
  const [counter, setCounter] = useState(1)

  const [user, setUser] = useState({ name: 'Martin', sex: 'Male' })

  const add = () => {
    setCounter(2)
  }

  const updateHandler = () => {
    // 第一种方法：使用原生js中Object.Assign来对之前的对象进行浅复制
    // const newUser = Object.assign({}, user)
    // newUser.name = 'Martin-New'
    // setUser(newUser)

    // 第二种方法：使用 ... 进行展开
    const newUser = { ...user, name: 'Martin-New' }
    setUser(newUser)
  }

  return (<div className="app">
    <h1>{counter} -- {user.name} -- {user.sex}</h1>
    <button onClick={add}>+1</button>
    <button onClick={updateHandler}>update user</button>
  </div>)
}

export default App