import React, { useEffect } from 'react'
import { handleVerifyToken } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import axiosInstance from '../services/axios'
import { showMessage } from '../utils/constants/showMessage'
import { useNavigate } from 'react-router-dom'
import { setIsAuthChecked, setIsAuthenticated, setUser } from '../features/auth/slices/authSlice'

const Home = () => {

    const {user} = useSelector(store => store.auth)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLogout = async () =>{
        const res = await axiosInstance.get("/auth/logout")
        if(res.status===200){
            showMessage("success", "Logged out successfully")
            navigate("/auth/login")
            dispatch(setUser(null))
            dispatch(setIsAuthenticated(false))
        }
    }

    return (
        <div className='flex items-center gap-10 m-4'>
            Welcome, {user.email}
            <button onClick={handleLogout} className='px-4 py-2 rounded-lg border cursor-pointer hover:bg-gray-100'>Logout</button>
        </div>
    )
}

export default Home