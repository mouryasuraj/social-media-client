import { useSelector } from "react-redux"
import Search from "../../features/search/Search"
import { navlinks } from "../../utils/constants"
import ShortLogo from "../Logo/ShortLogo"
import Navlinks from "./Navlinks"
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons"
import { useLogout } from "../../hooks/useLogout"


const Navbar = () => {
  const {user} = useSelector(store => store.auth)
  const {handleLogout} = useLogout()

  return (
    <div className="flex justify-between px-[8vw] gap-5 border-b border-gray-200">
      
      {/* Left */}
      <section className="flex items-center my-1 gap-3 w-[50%]">
        <ShortLogo fontSize="20px" />
        <Search />
      </section>

      {/* Right */}
      <section className="flex items-center gap-3">
        {/* links */}
        <div className="flex items-center">
          {
            navlinks.map((link) => (
              <Navlinks name={link.name} path={link.path} />
            ))
          }
        </div>
        {/* profile */}
        <NavLink to={"/profile"}>
        <div data-tip={user.email || "User"} className="tooltip tooltip-bottom w-10 h-10 bg-gray-400 flex cursor-pointer items-center justify-center rounded-full text-white border-2 border-gray-500 hover:border-gray-700">
          S
        </div>
        </NavLink>
        <div onClick={handleLogout} data-tip={"Signout"} className="tooltip tooltip-bottom cursor-pointer">
          <FontAwesomeIcon icon={faArrowRightFromBracket} />
        </div>
      </section>
    </div>
  )
}

export default Navbar