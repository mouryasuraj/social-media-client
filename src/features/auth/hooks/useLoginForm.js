import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { showMessage } from "../../../utils/constants/showMessage.js";
import { useNavigate } from "react-router-dom";
import { login } from "../slices/authThunks.js";

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
      await dispatch(login(userDetails)).unwrap();
      navigate("/home")
    } catch (error) {
        console.log(error)
    }
  };

  return { userDetails, handleInputChange, handleSubmit };
};
