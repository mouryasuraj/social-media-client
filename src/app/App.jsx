
import Login from '../features/auth/pages/Login'
import './App.css'
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path:"/login",
    element:<Login />
  },
  {
    path:"/",
    element:<Navigate to={"/login"} />
  }
])



function App() {

  return (
    <div>
    <RouterProvider router={router}>
      <Outlet />
    </RouterProvider>
    </div>
  )
}

export default App
