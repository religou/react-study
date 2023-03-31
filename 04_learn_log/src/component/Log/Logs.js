import LogItem from "./LogItem"
import './Logs.css'

const Logs = () => {

  const logs_data = [
    {
      id: "001",
      date: new Date(),
      desc: "学习React",
      during: 30
    },
    {
      id: "002",
      date: new Date(),
      desc: "学习Vue",
      during: 20
    },
    {
      id: "003",
      date: new Date(),
      desc: "学习Java",
      during: 40
    },
  ]

  const log_map_data = logs_data.map(item => < LogItem key={item.id} date={item.date} desc={item.desc} during={item.during} />)

  return (<div className="log">
    {/* 组件内部自定义一些属性名称，并给予属性相应的内容 */}

    {/* 对logs_data进行遍历 */}
    {/* {logs_data.map(item => < LogItem date={item.date} desc={item.desc} during={item.during} />)} */}

    {/* 将循环列表后面的数据作为参数传递进去 */}
    {log_map_data}
  </div>)
}

export default Logs