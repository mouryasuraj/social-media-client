import React, { useEffect } from 'react'
import { handleVerifyToken } from '../utils/constants'

const Home = () => {
    useEffect(() => {
        const verify = async () => {
            try {
                const response = await handleVerifyToken()
            } catch (error) {
                console.log("Token verification failed")
            } finally {
            }
        }
        verify()
    }, [])
    return (
        <div>Home</div>
    )
}

export default Home