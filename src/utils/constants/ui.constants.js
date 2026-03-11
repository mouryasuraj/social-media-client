// Logo Name
export const LOGO={
    partOne:"work",
    partTwo:"sphere",
}

// ENV
export const env = {
    BASE_URL:import.meta.env.VITE_BASE_URL,
    GOOGLE_CLIENT_ID:import.meta.env.VITE_GOOGLE_CLIENT_ID,
}

// default error message
export const defaulErrMsg = "Something went wrong. Please try again after some time"


// Login
export const loginTitle = "Sign In"
export const  showPasswordTxt = "Show password"
export const  proceedBtnTxt = "Proceed"
export const forgotPassTxt = "Forgot Password?"
export const createAnAccountTxt = "Create an account?"

// Signup
export const signInTitle = "Sign Up"


// Navlinks 
export const navlinks = [
    {
        name:"Home",
        path:"/feed",
    },
    {
        name:"Network",
        path:"/network",
    },
    {
        name:"Messaging",
        path:"/messaging",
    },
    {
        name:"Notifications",
        path:"/notification",
    },
]