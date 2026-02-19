import axiosInstance from "../../../services/axios"

const login = async (data) =>{
    const response = await axiosInstance.post("/auth/login", data)
    return response.data
}


const loginService = { login }

export default loginService