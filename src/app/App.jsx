
import { Provider } from 'react-redux'
import Error from '../components/Error'
import './App.css'
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom'
import store from './store'
import Toastify from '../components/Toastify'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { env } from '../utils/constants'
import Auth from '../features/auth/Auth'
import Login from '../features/auth/components/Login'
import SignUp from '../features/auth/components/SignUp'
import ProtectedRoute from '../components/ProtectedRoute'
 

const router = createBrowserRouter([
  {
    path: "/home",
    element: <ProtectedRoute>
      <p>Hello from Home page</p>
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
    element: <Navigate to={"/auth/login"} />
  },
  {
    path: "*",
    element: <Error />
  }
])



function App() {

  return (
    <div>
      <GoogleOAuthProvider clientId={env.GOOGLE_CLIENT_ID}>
        <Provider store={store}>
          <RouterProvider router={router} />
          <Toastify />
        </Provider>
      </GoogleOAuthProvider>
    </div>
  )
}

export default App
