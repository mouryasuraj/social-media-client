import { useState } from "react"

export const useLoginForm = () => {
    const [userDetails, setUserDetails] = useState(null);

    const handleInputChange = (e, field) => {
        setUserDetails(prev => ({ ...prev, [field]: e.target.value }))
    }

    return { userDetails, handleInputChange }
}


