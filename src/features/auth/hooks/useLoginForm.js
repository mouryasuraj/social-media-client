import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { login } from "../slices/authThunks.js";
import loginService from "../services/loginService.js";
import { setIsError, setMessage, setShowOtpSection } from "../slices/authSlice.js";
import { defaulErrMsg } from "../../../utils/constants/ui.constants.js";

export const useLoginForm = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(setMessage(""))
    dispatch(setShowOtpSection(false))
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.dismiss();
    try {
      const userDetails = {email,password:pass}
      loginService.validateLoginField(userDetails)

      await dispatch(login(userDetails)).unwrap();
      navigate("/")
    } catch (error) {
      dispatch(setMessage(error?.message || defaulErrMsg))
      dispatch(setIsError(true))
    }
  };

  return { setEmail, email, setPass, pass, handleSubmit };
};
