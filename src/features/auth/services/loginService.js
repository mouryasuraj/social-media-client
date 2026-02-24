
import axiosInstance from "../../../services/axios";
import { showMessage } from "../../../utils/constants/showMessage";
import { setIsError, setMessage } from "../slices/authSlice";
import validator from 'validator'


const handleLogin = async (data) => {
  const response = await axiosInstance.post("auth/login", data);
  return response.data;
};

const handleFulfilled = (state, action) => {
  state.user = action.payload?.data || null;
  state.isLoading = false;
  state.isError = false;
  state.isSuccess = true;
  state.message = action.payload?.message || "Successfully loggedIn.";
  showMessage("success", state.message);
};

const handleRejected = (state, action) => {
  state.user = null;
  state.isLoading = false;
  state.isError = true;
  state.isSuccess = false;
  state.message =
    action.payload || "Something went wrong. Please try again later.";

};

const validateLoginField = (userDetails,dispatch) =>{
  const {email, password} = userDetails;
  if(!email || !password) {
    dispatch(setMessage("please provide input"))
    dispatch(setIsError(true))
    return
  }

  if(!validator.isEmail(email)){
    dispatch(setMessage("Please provide valid email"))
    dispatch(setIsError(true))
    return
  }

}



const loginService = { handleLogin, handleFulfilled, handleRejected, validateLoginField };
export default loginService
