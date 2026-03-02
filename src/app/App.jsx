
import { Provider, useDispatch, useSelector } from 'react-redux'
import Error from '../components/Error'
import './App.css'
import { createBrowserRouter, Navigate, RouterProvider, useNavigate } from 'react-router-dom'
import store from './store'
import Toastify from '../components/Toastify'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { env, handleVerifyToken } from '../utils/constants'
import Auth from '../features/auth/Auth'
import Login from '../features/auth/components/Login'
import SignUp from '../features/auth/components/SignUp'
import ProtectedRoute from '../components/ProtectedRoute'
import { useEffect } from 'react'
import { setIsAuthenticated } from '../features/auth/slices/authSlice'
import Home from '../components/Home'


const router = createBrowserRouter([
  {
    path: "/home",
    element: <ProtectedRoute>
      <Home />
    </ProtectedRoute>,
  },
  {
    path: "/auth",
    element: <Auth />,
    children: [
      {
        path: "login",
        element: <Login />
      },
      {
        path: "signup",
        element: <SignUp />
      },
    ]
  },
  {
    path: "/",
    element: <Navigate to={"/auth/login"} replace={true} />
  },
  {
    path: "*",
    element: <Error />
  }
])


function App() {

  const {isAuthChecked, isAuthenticated} = useSelector(store => store.auth)
  
  console.log("app.jsx", isAuthChecked, isAuthenticated)


  return (
    <div>
      <RouterProvider router={router} />
      <Toastify />
    </div>
  )
}

export default App
