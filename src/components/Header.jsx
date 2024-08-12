import React, { useEffect, useState } from 'react'

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
            <header className='py-[24px] px-[10%] flex justify-between align-middle	items-center fixed z-[1000] top-0 bg-white w-full'>
                   <ul className='grid grid-cols-3  odd:bg-white  rounded-[30px] w-max box-border border-solid border-[1px]  border-custom-color'>
                     {navigations.map((elem,key)=>( 
                       <li onClick={()=>click(elem)} key={key} className={"w-full first:rounded-l-[30px] last:rounded-r-[30px] box-border px-4 py-1 text-align-center  cursor-pointer text-custom-color "} style={active == elem ? {'backgroundColor' :'#66837E', 'color':'white'} : {}} >{elem}</li>))}
                   </ul>
                   <button onClick={()=>setIsopen(true) } className='absolut text-center right-[1%] border-custom-color border-solid border-[1px] bg-white-500 text-custom-color rounded-lg font-bold px-4 py-2 w-24 ' >Login</button>                       
            </header>
    </>
  )
}

export default Header
