import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { login } from "../slices/authThunks.js";
import loginService from "../services/loginService.js";

export const useLoginForm = () => {
  const [userDetails, setUserDetails] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleInputChange = (e, field) => {
    setUserDetails((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.dismiss();
    try {
      loginService.validateLoginField(userDetails,dispatch)

      await dispatch(login(userDetails)).unwrap();
      navigate("/home")
    } catch (error) {
      console.log(error)
    }
  };

  return { userDetails, handleInputChange, handleSubmit };
};
