import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/auth/slices/authSlice.js'
import feedReducer from '../features/feed/slices/feedSlice.js'

const store = configureStore({
    reducer:{
        auth:authReducer,
        feed:feedReducer
    }
})

export default store