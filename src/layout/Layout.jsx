import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'

function Layout({isOpen,setIsopen, builder}) {
  return (
    <>
        <Header/>
            <Main/>
        <Footer/>
    </>
  )
}

export default Layout