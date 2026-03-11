import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Search = () => {
  return (
    <div className="outline-none rounded-4xl px-3 w-[70%] py-1 border-[1.5px] border-gray-200 flex items-center gap-2">
        <FontAwesomeIcon fontSize={"15px"} icon={faSearch} />
        <input className="outline-none text-sm w-full" placeholder="Search" type="text" />
    </div>
  )
}

export default Search