import axiosInstance from "../../../services/axios";
import { showMessage } from "../../../utils/constants/showMessage";
import { setIsError, setMessage } from "../slices/authSlice";
import validator from 'validator'

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
  state.message = action.payload?.message || "Sign up failed";
};

const handleOtpFullfilled = (state, action) => {
  if (action.payload.status) {
    state.isLoading = false;
    state.isError = false;
    state.isSuccess = true;
    state.showOtpSection = false;
    state.message = "User created successfully. Please login." || "User created successfullu";
    showMessage("success", state.message);
  } else {
    handleOtpRejected(state, { payload: {message: action.payload?.message} })
  }
};
const handleOtpRejected = (state, action) => {
  state.isLoading = false;
  state.isError = true;
  state.isSuccess = false;
  state.showOtpSection = true;
  state.message = action.payload?.message || "OTP verification failed";
};

const validateSignupField = (userDetails) => {
  if (!userDetails) {
      throw new Error("please provide inputs")
  }

  const { firstName, lastName, email, pass, confirmPass } = userDetails;

  const validateField = [
    { valid: !firstName, message: "Please provide first name" },
    { valid: !lastName, message: "Please provide last name" },
    { valid: !email, message: "Please provide valid email " },
    { valid: !pass, message: "Please provide password " },
    { valid: !confirmPass, message: "Please confirm your password " },
    { valid: !validator.isEmail(email), message: "Please provide valid email " },
    { valid: !validator.isStrongPassword(pass, { minLength: 8, minLowercase: 1, minNumbers: 1, minSymbols: 1, minUppercase: 1 }), message: "Please provide strong password" },
    { valid: pass!==confirmPass , message: "Your password and confirm password is not matching" },
  ]

  for(const check of validateField){
    if(check.valid){
      throw new Error(check.message)
    }
  }

  const details = {
    ...userDetails,
    firstName:firstName.toLowerCase(),
    lastName:lastName.toLowerCase(),
    email:email.toLowerCase(),
  }
  return details

}


const signUpService = {
  handleSendOTP,
  handleFulfilled,
  handleRejected,
  handleVerfiyOTP,
  handleOtpFullfilled,
  handleOtpRejected,
  validateSignupField
};







export default signUpService;
