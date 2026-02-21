import { useState } from "react";
import {useDispatch} from 'react-redux'
import { login } from "../slices/authSlice.js";
import { toast } from "react-toastify";

export const useLoginForm = () => {
    const [userDetails, setUserDetails] = useState(null);
    const dispatch = useDispatch();

    const handleInputChange = (e, field) => {
        setUserDetails(prev => ({ ...prev, [field]: e.target.value }))
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        toast.dismiss()
        dispatch(login(userDetails))
    }

    return { userDetails, handleInputChange, handleSubmit }
}


