import LogItem from "./LogItem"
import './Logs.css'

const Logs = () => {
  return (<div className="log">
    {/* 组件内部自定义一些属性名称，并给予属性相应的内容 */}
    <LogItem date={new Date()} desc={"学习React"} during={30} />
    <LogItem date={new Date()} desc={"学习Java"} during={20} />
  </div>)
}

export default Logs