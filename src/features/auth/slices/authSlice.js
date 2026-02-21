import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import loginService from "../services/loginService";
import { toast } from "react-toastify";
import { showMessage } from "../../../utils/constants/showMessage";

// Initial State 
const initialState = {
    user:null,
    isLoading:false,
    isError:false,
    isSuccess:false,
    message:""
}

export const login = createAsyncThunk("/auth/login", async (data, thunkAPI)=>{
    try {
        const response = await loginService.login(data)
        return response
    } catch (error) {
        console.error(error)
        return thunkAPI.rejectWithValue(error?.response?.data?.message || "Login failed")
    }
})


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
        builder.addCase(login.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(login.fulfilled, (state, action) =>{
            state.user = action.payload?.data || null;
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.message = action.payload?.message || "Successfully loggedIn."
            showMessage("success", state.message)
        })
        .addCase(login.rejected, (state,action)=>{
            state.user = null
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.payload || "Something went wrong. Please try again later."
            showMessage("error", state.message)
        })
    }
})

export const {logout, reset} = authSlice.actions

export default authSlice.reducer

