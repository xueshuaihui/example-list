import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const App1 = () => <div>this is app1</div>
const App2 = () => <div>this is app2</div>

const router = createBrowserRouter([
  {
    path: '/app1',
    element: <App1 />,
  },
  {
    path: '/app2',
    element: <App2 />
  }
])

export default () => {
  return (
      <RouterProvider router={router}></RouterProvider>
  )
}