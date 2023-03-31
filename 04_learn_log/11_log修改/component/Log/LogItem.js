import './LogItem.css'

// 使用函数组件中使用 props 类比于函数参数
const LogItem = (props) => {

  // 打印 props
  console.log(props)
  // 对props进行解构
  const { date, desc, during } = props

  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  // 组件中的month、day、desc、during的数据应该是由外部传递进来的
  // 就像函数的参数一样，在组件内部这些数据不应该写死
  return (<div className="item">
    <div className="date">
      <div className="month">{year}年{month}月</div>
      <div className="day">{day}日</div>
    </div>

    <div className="content">
      <div className="desc">{desc}</div>
      <div className="during">{during}分钟</div>
    </div>
  </div>)
}

export default LogItem