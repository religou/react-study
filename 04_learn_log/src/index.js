import reactDOM from "react-dom/client"
import App from './App'

import './index.css'

const root = reactDOM.createRoot(document.getElementById("root"))
// 把 App 当作组件在根组件中渲染出来
root.render(<App></App>)