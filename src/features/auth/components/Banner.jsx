
import BannerImg from '../../../assets/login-banner.avif'
import Logo from '../../../components/Logo'

const Banner = () => {
    return (
        <div>
            <Logo fontSize='4vw' />
            <img src={BannerImg} alt="" />
        </div>
    )
}

export default Banner