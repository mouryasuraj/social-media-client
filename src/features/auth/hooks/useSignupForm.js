import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { sendOtp, verifyotp } from "../slices/authThunks";
import { toast } from "react-toastify";
import { showMessage } from "../../../utils/constants/showMessage";
import { useNavigate } from "react-router-dom";
import { setIsError, setMessage, setShowOtpSection } from "../slices/authSlice";
import signUpService from "../services/signupService";

export const useSignupForm = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [confirmPass, setConfirmPass] = useState("")
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [otp, setOtp] = useState("");

  useEffect(() => {
    dispatch(setMessage(""))
  }, [])


  const handleSendOtp = async (e) => {
    e.preventDefault();
    toast.dismiss();
    try {
      const data = signUpService.validateSignupField({firstName, lastName, email, pass, confirmPass})
      const payload = {
        fullName: `${data.firstName} ${data.lastName}`,
        email: data.email,
        password: data.pass,
      };
      await dispatch(sendOtp(payload)).unwrap();
    } catch (error) {
      console.log(error);
      dispatch(setMessage(error.message || "Something went wrong"))
      dispatch(setIsError(true))
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
    firstName, 
    lastName, 
    email,
    pass,
    confirmPass,
    otp,
    setFirstName,
    setLastName,
    setEmail,
    setPass,
    setConfirmPass,
    handleSendOtp,
    handleVerifyOtp,
    setOtp,
  };
};
