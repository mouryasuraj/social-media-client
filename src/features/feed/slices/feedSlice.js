import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    feed:null
}


const feedSlice = createSlice({
    name:"feed",
    initialState,
    reducers:{
        getFeed:(state,action)=>{
            state.feed = action.payload
        }
    },
    extraReducers:(builder)=>{

    }
})


export const {getFeed} = feedSlice.actions

export default feedSlice.reducer
