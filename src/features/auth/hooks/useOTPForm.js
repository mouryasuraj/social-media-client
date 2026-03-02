import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { verifyotp } from "../slices/authThunks";
import { toast } from "react-toastify";
import { showMessage } from "../../../utils/constants/showMessage";
import { useNavigate } from "react-router-dom";
import { setIsError, setMessage, setShowOtpSection } from "../slices/authSlice";

export const useOTPForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [otp, setOtp] = useState("");

  useEffect(() => {
    dispatch(setMessage(""))
  }, [])

  const handleVerifyOtp = async (email) => {
    toast.dismiss();
    try {
      const payload = { email: email, otp };
      const data = await dispatch(verifyotp(payload)).unwrap();
      if (data.status) {
        navigate("/auth/login")
      }
    } catch (error) {
      console.log(error);
      dispatch(setMessage(error.message))
      if(error.status===403){
        showMessage("error",error.message)
        navigate("/auth/login")
        dispatch(setShowOtpSection(false))
        dispatch(setIsError(false))
        dispatch(setMessage(""))
      }
    }
  };

  return {
    otp,
    handleVerifyOtp,
    setOtp,
  };
};
