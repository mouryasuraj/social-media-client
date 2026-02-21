import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForward, faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { darkBlue } from "../../../utils/constants";
import { useState } from "react";
import { useLoginForm } from "../hooks";
import { createAnAccountTxt, forgotPassTxt, loginTitle, proceedBtnTxt, showPasswordTxt} from "../login.constants.js"
import Loader from "../../../components/Loader.jsx";
import { useSelector } from "react-redux";

const LoginForm = () => {
    const { handleInputChange, handleSubmit } = useLoginForm()
    const { isLoading } = useSelector(store => store.auth)
    const [isShowPassword, setIsShowPassword] = useState(false)


    return (
        <div className="w-[50%] ">
            <div className="px-5 relative bg-white py-12 rounded-2xl w-[60%] mx-auto space-y-3 shadow-lg shadow-[#a6c2c2]">
                <h2 className="text-3xl font-semibold text-center text-[#012D52]">
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
                            autoFocus
                            tabIndex={1}
                            className="outline-none ml-2 w-full"
                            type="text"
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
                    <button
                        disabled={isLoading}
                        tabIndex={4} className={`${isLoading ? "bg-[#c0c0c0] cursor-not-allowed" : "bg-[#00BCBB] cursor-pointer hover:bg-[#0b8d8d]"} text-white w-full px-3 py-2 rounded-sm  text-lg  font-bold flex items-center justify-center gap-2`}>
                        {isLoading && <Loader />}
                        <span>{proceedBtnTxt}</span>
                        <FontAwesomeIcon className="" icon={faForward} />
                    </button>
                </form>
                <div className="flex items-center justify-between">
                    <p className="text-[#0b8585] font-semibold hover:underline cursor-pointer">
                        {forgotPassTxt}
                    </p>
                    <p className="text-[#0b8585] font-semibold hover:underline cursor-pointer">
                        {createAnAccountTxt}
                    </p>
                </div>
            </div>


        </div>
    );
};

export default LoginForm;
