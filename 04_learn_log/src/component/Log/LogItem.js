import './LogItem.css'

const LogItem = () => {
  return (<div className="item">
    <div className="date">
      <div className="month">2023年03月</div>
      <div className="day">20</div>
    </div>

    <div className="content">
      <div className="desc">学习React</div>
      <div className="during">30分钟</div>
    </div>
  </div>)
}

export default LogItem