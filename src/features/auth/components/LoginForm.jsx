import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForward, faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import {
    forgotPassTxt,
    loginTitle,
    proceedBtnTxt,
    showPasswordTxt,
    createAnAccountTxt,
    darkBlue,
} from "../../../utils/constants";
import { useState } from "react";

const LoginForm = () => {
    const [userCred, setUserCred] = useState({ email: "", password: "" });
    const [isShowPassword, setIsShowPassword] = useState(false)

    return (
        <div className="w-[50%]">
            <div className="px-5 py-4 rounded-2xl w-[60%] mx-auto space-y-3">
                <h2 className="text-3xl font-semibold text-center text-[#012D52]">
                    {loginTitle}
                </h2>
                <form className="w-full space-y-4">
                    {/* Email */}
                    <div className="flex items-center w-full outline-none px-2 py-2 rounded-sm border-2 border-[#012D52] bg-white">
                        <FontAwesomeIcon color={darkBlue} className="" icon={faUser} />
                        <input
                            onChange={(e) => {
                                setUserCred((prev) => ({ ...prev, email: e.target.value }));
                            }}
                            autoFocus
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
                                    setUserCred((prev) => ({ ...prev, password: e.target.value }));
                                }}
                                autoFocus
                                className="outline-none ml-2 w-full"
                                type={isShowPassword ? "text" : "password"}
                                placeholder="Password"
                                name="password"
                            />
                        </div>
                        {/* Show password */}
                        <label
                            onChange={() =>setIsShowPassword(prev=> !prev)}
                            style={{ color: darkBlue }}
                            className="font-semibold select-none w-fit flex items-center cursor-pointer gap-2"
                            htmlFor="showpassword"
                        >
                            <input
                                id="showpassword"
                                type="checkbox"
                                className="w-4 h-4 cursor-pointer"
                            />
                            {showPasswordTxt}
                        </label>
                    </div>
                    <button className="bg-[#00BCBB] text-white w-full px-3 py-2 rounded-sm cursor-pointer text-lg hover:bg-[#0b8d8d] font-bold">
                        {proceedBtnTxt}
                        <FontAwesomeIcon className="ml-2" icon={faForward} />
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
