import { Outlet, Link } from 'react-router-dom'

const  App1 = () => {
  return (
    <div>
      <h1>App1</h1>
      <Link to="/app3?id=101&name=zhangsan">to app3</Link>
      <br/>
      <Link to="/app2/101/zhangsan">to app2</Link>
      <Outlet />
    </div>
  )
}

export default App1
