import React, { useEffect, useState } from 'react'
import Navbar from './NavBar';

function Header({setIsopen}) {
    const navigations = ['Home','Contact','About'];
    const [active, setActive] = useState('Home');

    const click = (e) => {
        setActive(e)
    }

    useEffect(()=>{

    },[active])

  return (
    <>
            <header className='py-[24px] px-[3%] gap-[10px] flex justify-between align-middle	items-center fixed z-[1000] top-0 bg-white w-full'>
                      <Navbar/>
            </header>
    </>
  )
}

export default Header
