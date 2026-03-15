import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Avatar from "./Avatar"
import { faPencil } from "@fortawesome/free-solid-svg-icons"
import { darkBlue } from "../../../utils/constants"
import { useSelector } from "react-redux"


const ProfileCard = () => {
    const {user} = useSelector(store => store.auth)
    return (
        <div className='col-span-4 bg-white rounded-xl overflow-hidden'>
            {/* Bg Template */}
            <div className={`h-40 relative bg-linear-to-r from-[#012D52] to-[#00BCBB] `}>
                <img src="" alt="" />
                    <FontAwesomeIcon className="px-2 py-2.5 m-3 tooltip absolute top-0 right-0 cursor-pointer text-sm bg-white rounded-full" color={darkBlue} icon={faPencil} />
                <Avatar />
            </div>
            {/* Profile Section */}
            <div className="p-5 mt-10">
                {user && user?.email || "User"}
            </div>
        </div>
    )
}

export default ProfileCard