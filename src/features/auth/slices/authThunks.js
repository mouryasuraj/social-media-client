import { createAsyncThunk } from "@reduxjs/toolkit"
import loginService from "../services/loginService"
import signUpService from "../services/signupService"

export const login = createAsyncThunk("/auth/login", async (data, thunkAPI)=>{
    try {
        const response = await loginService.handleLogin(data)
        return response
    } catch (error) {
        console.log(error)
        return thunkAPI.rejectWithValue({message:error?.response?.data?.message} || "Login failed")
    }
})

export const sendOtp = createAsyncThunk("/auth/sendotp", async (data, thunkAPI) =>{
    try {
        const response = await signUpService.handleSendOTP(data)
        return response
    } catch (error) {
        console.log(error)
        return thunkAPI.rejectWithValue({message:error?.response?.data?.message} || "Signup failed")
    }
})


export const verifyotp = createAsyncThunk("/auth/verifyotp",async (data, thunkAPI)=>{
    try {
        const response = await signUpService.handleVerfiyOTP(data)
        return response
    } catch (error) {
        console.log(error)
        return thunkAPI.rejectWithValue({message:error?.response?.data?.message, status:error?.status} || "OTP verification failed")
    }
})
