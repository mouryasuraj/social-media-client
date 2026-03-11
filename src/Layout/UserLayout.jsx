import { Outlet } from "react-router-dom"
import useUserLayout from "./hooks/useUserLayout"
import Navbar from "../components/Navbar"


const UserLayout = () => {

  useUserLayout()

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default UserLayout