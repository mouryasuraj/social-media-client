import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { sendOtp } from "../slices/authThunks";
import { toast } from "react-toastify";
import { setIsError, setMessage, setShowOtpSection } from "../slices/authSlice";
import signUpService from "../services/signupService";

export const useSignupForm = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [confirmPass, setConfirmPass] = useState("")
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(setMessage(""))
    dispatch(setShowOtpSection(false))
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
      const respone = await dispatch(sendOtp(payload)).unwrap();
      // if(respone?.status){
      //   dispatch(setShowOtpSection(true))
      // }
      
    } catch (error) {
      console.log(error);
      dispatch(setMessage(error.message || "Something went wrong"))
      dispatch(setIsError(true))
    }
  };

  return {
    firstName, 
    lastName, 
    email,
    pass,
    confirmPass,
    setFirstName,
    setLastName,
    setEmail,
    setPass,
    setConfirmPass,
    handleSendOtp,
  };
};
