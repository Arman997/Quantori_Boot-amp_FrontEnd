import React, { useEffect } from 'react'
import Login from '../components/Login'

function LoginPage({isOpen,SetIsopen}) {
    useEffect(()=>{
       
    },[isOpen])
    if(!isOpen)
        return null
  return (
      
        <Login isOpen={isOpen} setIsopen={SetIsopen} />
  )
}

export default LoginPage