
import { Provider } from 'react-redux'
import Error from '../components/Error'
import Login from '../features/auth/pages/Login'
import './App.css'
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom'
import store from './store'
import Toastify from '../components/Toastify'


const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/",
    element: <Navigate to={"/login"} />
  },
  {
    path: "*",
    element: <Error />
  }
])



function App() {

  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={router} />
        <Toastify />
      </Provider>
    </div>
  )
}

export default App
