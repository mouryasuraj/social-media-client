import { useDispatch } from "react-redux"
import axiosInstance from "../services/axios.js"
import { showMessage } from "../utils/constants/showMessage.js"
import { setIsAuthChecked, setIsAuthenticated, setUser } from "../features/auth/slices/authSlice.js"

export const useLogout = () =>{
    const dispatch = useDispatch() 

    const handleLogout = async () =>{
        try {
            const response = await axiosInstance.get("/auth/logout")
            if(response.status===200 && response.data.status){
                dispatch(setUser(null))
                dispatch(setIsAuthChecked(false))
                dispatch(setIsAuthenticated(false))
            }
        } catch (error) {
            console.log("Something went wrong: ",error)
            showMessage("error", "Something went wrong. Please try again later")
        }
    }
    return {handleLogout}
}