import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faForward } from "@fortawesome/free-solid-svg-icons";

const LoginForm = () => {
    return (
        <div className='w-[50%]'>
            <div className='px-5 py-4 rounded-2xl w-[60%] mx-auto space-y-3'>
                <h2 className='text-3xl font-semibold text-center text-[#012D52]'>Login</h2>
                <form className='w-full space-y-5'>
                    {/* Email */}
                    <input autoFocus className='w-full outline-none px-3 py-2 rounded-sm border-2 border-[#012D52] bg-white' type="text" placeholder='Username or Email ID' name="" id="" />
                    {/* Password */}
                    <input className='w-full outline-none px-3 py-2 rounded-sm border-2 border-[#012D52] bg-white' type="password" placeholder='Password' name="" id="" />
                    <button className='bg-[#A9D7CC] text-[#012D52] w-full px-3 py-2 rounded-sm cursor-pointer text-lg hover:bg-[#77ccb8] font-bold'>
                        Proceed
                        <FontAwesomeIcon className='' icon={faForward} />
                    </button>
                </form>
                <div className='flex items-center justify-between'>
                    <p className='text-[#0b8585] font-semibold hover:underline cursor-pointer'>Forgot password?</p>
                    <p className='text-[#0b8585] font-semibold hover:underline cursor-pointer'>Create an account?</p>
                </div>
            </div>
        </div>
    )
}

export default LoginForm