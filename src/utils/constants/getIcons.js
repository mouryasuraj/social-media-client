import { faBell, faHouse, faMessage, faPeopleGroup } from "@fortawesome/free-solid-svg-icons"

const getIcons = (tab) =>{
    if(tab==="home"){
        return faHouse
    } else if(tab==="network"){
        return faPeopleGroup
    } else if(tab==="messaging"){
        return faMessage
    } else if(tab==="notifications"){
        return faBell
    }
}


export default getIcons