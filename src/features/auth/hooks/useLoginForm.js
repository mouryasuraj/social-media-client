import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { login } from "../slices/authThunks.js";
import loginService from "../services/loginService.js";
import { setIsError, setMessage } from "../slices/authSlice.js";

export const useLoginForm = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(setMessage(""))
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.dismiss();
    try {
      const userDetails = {email,password:pass}
      loginService.validateLoginField(userDetails)

      await dispatch(login(userDetails)).unwrap();
      navigate("/home")
    } catch (error) {
      console.log(error)
      dispatch(setMessage(error.message))
      dispatch(setIsError(true))
    }
  };

  return { setEmail, email, setPass, pass, handleSubmit };
};
