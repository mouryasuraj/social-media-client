
import BannerImg from '../../../assets/login-banner.avif'
import Logo from '../../../components/Logo'

const LoginBanner = () => {
    return (
        <div className='w-[50%]'>
            <Logo size='5xl' />
            <img src={BannerImg} alt="" />
        </div>
    )
}

export default LoginBanner