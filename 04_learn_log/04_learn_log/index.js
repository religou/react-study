import reactDOM from "react-dom/client"
import "./index.css"

const comp = <div className="log">
  <div className="item">
    <div className="date">
      <div className="month">2023年03月</div>
      <div className="day">20</div>
    </div>

    <div className="content">
      <div className="desc">学习React</div>
      <div className="during">30分钟</div>
    </div>
  </div>

  <div className="item">
    <div className="date">
      <div className="month">2023年03月</div>
      <div className="day">20</div>
    </div>

    <div className="content">
      <div className="desc">学习React</div>
      <div className="during">30分钟</div>
    </div>
  </div>
</div>

const root = reactDOM.createRoot(document.getElementById("root"))
root.render(comp)