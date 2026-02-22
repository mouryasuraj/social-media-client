import { useSelector } from "react-redux"
import SpinnerLoader from "./SpinnerLoader"
import { Navigate } from "react-router-dom"


const ProtectedRoute = ({children}) => {


  const {user, isLoading} = useSelector(store => store.auth)

  if(isLoading) return <SpinnerLoader />


  if(!user) return <Navigate to={"/auth/login"} />

  return children
}

export default ProtectedRoute