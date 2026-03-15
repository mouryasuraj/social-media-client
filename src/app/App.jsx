
import { useSelector } from 'react-redux'
import Error from '../components/Error'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Toastify from '../components/Toastify'
import Auth from '../features/auth/Auth'
import Login from '../features/auth/components/Login'
import SignUp from '../features/auth/components/SignUp'
import ProtectedRoute from '../components/ProtectedRoute'
import UserLayout from '../Layout/UserLayout'
import Feed from '../features/feed/Feed'
import Network from '../features/network/Network'
import Messaging from '../features/messaging/Messaging'
import Notifications from '../features/notifications/Notifications'
import Profile from '../features/profile/Profile'


const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute>
      <UserLayout />
    </ProtectedRoute>,
    children:[
      {
        path:"/feed",
        element:<Feed />
      },
      {
        path:"/network",
        element:<Network />
      },
      {
        path:"/messaging",
        element:<Messaging />
      },
      {
        path:"/notification",
        element:<Notifications />
      },
      {
        path:"/profile",
        element:<Profile />
      },
    ]
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
