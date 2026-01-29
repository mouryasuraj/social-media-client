import React from 'react'
import { darkBlue, lightBlue } from '../utils/colors'

const Logo = ({size="lg"}) => {
  return (
    <h1 className={`text-${size} font-bold tracking-widest text-center`}><span style={{ color: darkBlue }} >work</span><span style={{ color: lightBlue }}>sphere</span></h1>
  )
}

export default Logo