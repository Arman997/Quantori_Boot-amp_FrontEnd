import React, { useState } from 'react'
import './header.css'

function Header() {

    const [active, setactive] = useState(false)

    const click = () => {
        setactive(!active)
    }

  return (
    <>
            <header className='header'>
                    <div className="imgdiv"></div>
                    <nav className='nav'>
                        <ul className='ul'>
                            <li className={active ? 'active' : 'li'} onClick={click}><a href="#">Home</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">About</a></li>
                        </ul>
                    </nav>
                    <button className='button'>Login</button>
            </header>
    </>
  )
}

export default Header
