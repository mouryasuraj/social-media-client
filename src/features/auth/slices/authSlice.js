import { createSlice } from "@reduxjs/toolkit";
import loginService from '../services/loginService.js'
import signUpService from "../services/signupService.js";
import { login, sendOtp, verifyotp } from "./authThunks.js";


// Initial State 
const initialState = {
    user:null,
    isLoading:false,
    isError:false,
    isSuccess:false,
    message:"",
    showOtpSection:false
}

const handlePending = (state) =>{
    state.isLoading = true
}


const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        logout:()=>{

        },
        reset:()=>{

        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(login.fulfilled,loginService.handleFulfilled)
        .addCase(login.rejected, loginService.handleRejected)
        .addCase(sendOtp.fulfilled,signUpService.handleFulfilled)
        .addCase(sendOtp.rejected, signUpService.handleRejected)
        .addCase(verifyotp.fulfilled,signUpService.handleOtpFullfilled)
        .addCase(verifyotp.rejected, signUpService.handleOtpRejected)
        .addMatcher((a)=> a.type.endsWith("/pending"),handlePending)
    }
})

export const {logout, reset} = authSlice.actions

export default authSlice.reducer

