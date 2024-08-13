import React, { Children, useEffect } from 'react';
import { Outlet } from 'react-router-dom';




function Main({isOpen,SetIsopen}) {
  useEffect(()=>{
    
  },[isOpen])
  return (
    <>
        <div className="relative">
          <div className='item1 h-full bg-[#66837E]'></div>
          <div className='item2 h-full bg-[#9D4E2D]'></div>
          <div className='item3 h-full bg-[#495F4B] items-center flex'> </div>
          <div className='item4 h-full bg-[#DD9857]'></div>
          <div className="item5 h-full bg-[#9DABB6]"></div>  
          <Outlet/>
        </div>
    </>
  )
}

export default Main