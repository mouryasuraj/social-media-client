import axiosInstance from "../../../services/axios";
import { showMessage } from "../../../utils/constants/showMessage";

const handleSendOTP = async (payload) => {
  const response = await axiosInstance.post("/auth/sendotp", payload);
  return response.data;
};

const handleVerfiyOTP = async (payload) => {
  const { email, otp } = payload;
  const response = await axiosInstance.post(
    `/auth/verifyotp?email=${email}&otp=${otp}`,
  );
  return response.data;
};

const handleFulfilled = (state, action) => {
  state.user = null;
  state.isLoading = false;
  state.isError = false;
  state.isSuccess = true;
  state.showOtpSection = true;
  state.message = action.payload?.message || "Signed up successfullly";
  showMessage("success", state.message);
};

const handleRejected = (state, action) => {
  state.user = null;
  state.isLoading = false;
  state.isError = true;
  state.isSuccess = false;
  state.showOtpSection = false;
  state.message = action.payload || "Sign up failed";
};

const handleOtpFullfilled = (state, action) => {
    if(action.payload.status){
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.showOtpSection = false;
        state.message = "User created successfully. Please login." || "User created successfullu";
        showMessage("success", state.message);
    }else{
        handleOtpRejected(state, {payload:action.payload?.message})
    }
};
const handleOtpRejected = (state, action) => {
  state.isLoading = false;
  state.isError = true;
  state.isSuccess = false;
  state.showOtpSection = true;
  state.message = action.payload || "OTP verification failed";
};

const signUpService = {
  handleSendOTP,
  handleFulfilled,
  handleRejected,
  handleVerfiyOTP,
  handleOtpFullfilled,
  handleOtpRejected,
};

export default signUpService;
