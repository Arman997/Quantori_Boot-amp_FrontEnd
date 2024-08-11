import React, { useEffect, useState } from 'react'
import './header.css'

function Header() {
    const navigations = ['home','contact','about us']
    const [active, setActive] = useState('home')


    const click = (e) => {
        console.log(e);
        setActive(e)
    }

    useEffect(()=>{

    },[active])

  return (
    <>
            <header className='py-[24px] px-[10%] flex justify-between align-middle	items-center'>
                   <ul className='grid grid-cols-3  odd:bg-red  rounded-[30px] w-max box-border border-solid border-2 border-sky-500'>
                     {navigations.map((elem)=>( 
                       <li onClick={()=>click(elem)}  className={"w-full first:rounded-l-[30px] last:rounded-r-[30px] box-border px-4 py-1 text-align-center  cursor-pointer text-black "} style={active == elem ? {'background-color' :'blue'} : {}} >{elem}</li>
                     ))}
                     {/* <li onClick={(e)=>click(e.id)} id="home" className='focus:bg-black/80 active:bg-black/80 cursor-pointer'>home</li>
                     <li onClick={(e)=>click(this.value)}>contact</li>
                     <li onClick={(e)=>click(this.value)}>abutus</li> */}
                   </ul>

                   <button className='login'>Login</button>
            </header>
    </>
  )
}

export default Header
