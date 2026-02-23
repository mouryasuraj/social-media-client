import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForward, faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { darkBlue, lightBlue } from "../../../utils/constants";
import { useState } from "react";
import { useLoginForm } from "../hooks";
import { createAnAccountTxt, forgotPassTxt, loginTitle, proceedBtnTxt, showPasswordTxt } from "../constants.js"
import { useSelector } from "react-redux";
import SpinnerLoader from "../../../components/SpinnerLoader.jsx";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button.jsx";

const LoginForm = () => {
    const navigate = useNavigate()
    const { handleInputChange, handleSubmit } = useLoginForm()
    const { isLoading, message, isError } = useSelector(store => store.auth)
    const [isShowPassword, setIsShowPassword] = useState(false)



    return (
        <div className="w-[50%]">
            <div className="px-5 relative bg-white py-12 rounded-2xl w-[60%] mx-auto space-y-3 shadow-lg shadow-[#a6c2c2]">
                <h2 className="text-2xl font-semibold text-center text-[#012D52]">
                    {loginTitle}
                </h2>
                <form onSubmit={handleSubmit} className="w-full space-y-4">
                    {/* Email */}
                    <div className="flex items-center w-full outline-none px-2 py-2 rounded-sm border-2 border-[#012D52] bg-white">
                        <FontAwesomeIcon color={darkBlue} className="" icon={faUser} />
                        <input
                            onChange={(e) => {
                                handleInputChange(e, "email")
                            }}
                            required={true}
                            autoFocus
                            tabIndex={1}
                            className="outline-none ml-2 w-full"
                            type="email"
                            placeholder="Username or Email ID"
                            name="email"
                        />
                    </div>

                    <div>
                        {/* Password */}
                        <div className="flex items-center w-full outline-none px-2 py-2 rounded-sm border-2 border-[#012D52] bg-white mb-2">
                            <FontAwesomeIcon color={darkBlue} className="" icon={faLock} />
                            <input
                                onChange={(e) => {
                                    handleInputChange(e, "password")
                                }}
                                required={true}
                                tabIndex={2}
                                className="outline-none ml-2 w-full"
                                type={isShowPassword ? "text" : "password"}
                                placeholder="Password"
                                name="password"
                            />
                        </div>
                        {/* Show password */}
                        <label
                            onChange={() => setIsShowPassword(prev => !prev)}
                            style={{ color: darkBlue }}
                            className="font-semibold select-none w-fit flex items-center cursor-pointer gap-2"
                            htmlFor="showpassword"
                        >
                            <input


                                tabIndex={3}
                                id="showpassword"
                                type="checkbox"
                                className="w-4 h-4 cursor-pointer"
                            />
                            {showPasswordTxt}
                        </label>
                    </div>
                    <div className="space-y-1">
                        {message && <p className="text-red-500">{message}</p>}
                        <Button btnTxt={proceedBtnTxt} icon={faForward} />
                        <p style={{ color: darkBlue }} className={`text-center font-semibold`}>OR</p>
                        <GoogleLogin
                            onSuccess={async (data) => {
                                console.log(data)
                            }}
                            onError={() => {
                                console.log("Login failed")
                            }}
                        />
                    </div>

                </form>
                <div className="flex items-center justify-between">
                    <p className="text-[#0b8585] text-sm font-semibold hover:underline cursor-pointer">
                        {forgotPassTxt}
                    </p>
                    <p onClick={() => navigate("/auth/signup")} className="text-[#0b8585] select-none text-sm font-semibold hover:underline cursor-pointer">
                        {createAnAccountTxt}
                    </p>
                </div>
            </div>


        </div>
    );
};

export default LoginForm;
