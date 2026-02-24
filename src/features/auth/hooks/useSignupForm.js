import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { sendOtp, verifyotp } from "../slices/authThunks";
import { toast } from "react-toastify";
import { showMessage } from "../../../utils/constants/showMessage";
import { useNavigate } from "react-router-dom";
import { setMessage } from "../slices/authSlice";

export const useSignupForm = () => {
  const [userDetails, setUserDetails] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [otp, setOtp] = useState(null);

  useEffect(() => {
    dispatch(setMessage(""))
  }, [])

  const handleInputChange = (e, field) => {
    setUserDetails((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSendOtp = async (e) => {
    e.preventDefault();
    toast.dismiss();
    try {
      const { firstName, lastName, email, password } = userDetails;
      const payload = {
        fullName: `${firstName} ${lastName}`,
        email: email,
        password: password,
      };
      await dispatch(sendOtp(payload)).unwrap();
    } catch (error) {
      console.log(error);
    }
  };

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
      console.log("error",error)
    }
  };

  return {
    userDetails,
    setUserDetails,
    handleInputChange,
    handleSendOtp,
    handleVerifyOtp,
    setOtp,
  };
};
