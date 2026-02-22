
import axiosInstance from "../../../services/axios";
import { showMessage } from "../../../utils/constants/showMessage";


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
  showMessage("error", state.message);

};



const loginService = { handleLogin, handleFulfilled, handleRejected };
export default loginService
