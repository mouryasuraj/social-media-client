
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSignupForm } from '../hooks'
import { darkBlue } from '../../../utils/constants'
import { faForward, faMessage } from '@fortawesome/free-solid-svg-icons'
import { proceedBtnTxt } from '../constants'
import Button from '../../../components/Button'
import { useSelector } from 'react-redux'

const OTPSection = ({ userDetails }) => {
    const { handleVerifyOtp, setOtp, otp } = useSignupForm()
    const { message } = useSelector(store => store.auth)

    return (
        <div className="px-5 relative bg-white py-5 rounded-2xl w-[60%] mx-auto space-y-3 shadow-lg shadow-[#a6c2c2]">
            <h2 className="text-2xl font-semibold text-center text-[#012D52]">
                OTP
            </h2>
            <form onSubmit={(e) => {
                e.preventDefault()
                handleVerifyOtp(userDetails?.email)
            }} className="w-full space-y-3">
                {/* OTP */}
                <p className='text-[#012D52] text-sm'>
                    Please enter the OTP sent to <span className='font-semibold text-blue-500 underline'> {userDetails?.email.toLowerCase()}</span> {!userDetails?.email && "your email ID."}
                </p>
                <div className="flex items-center w-full outline-none px-2 py-2 rounded-sm border-2 border-[#012D52] bg-white">
                    <FontAwesomeIcon color={darkBlue} className="" icon={faMessage} />
                    <input
                        onChange={(e) => setOtp(e.target.value)}
                        value={otp}
                        tabIndex={3}
                        className="outline-none ml-2 w-full"
                        type="text"
                        placeholder="Enter OTP"
                        name="email"
                    />
                </div>

                {message && <p className="text-red-500 text-sm">{message}</p>}
                <Button btnTxt={proceedBtnTxt} icon={faForward} />


            </form>
            <div className="flex items-center justify-end">
                <p onClick={() => { }} className="text-[#0b8585] select-none text-sm font-semibold underline cursor-pointer">
                    Resend OTP
                </p>
            </div>
        </div>
    )
}

export default OTPSection