import React, { useState } from 'react'
import './navbar.css'
import { BsList, BsX } from "react-icons/bs";

const Navbar = () => {

    const [showPop, setShowPop] = useState(false)



  return (
    <div className='navbar'>
        <h2>DrinkIt.</h2>
        {showPop && 
            <div className='navbar-pop'>
                <div className='navbar-links'>
                    <div className='navbar-link'>
                        <p className='navbar-link-text'>Home</p>
                    </div>
                    <div className='navbar-link'>
                        <p className='navbar-link-text'>Truth or Drink!</p>
                    </div>
                    <div className='navbar-link'>
                        <p className='navbar-link-text'>Team Generator</p>
                    </div>
                </div>
            </div>
        }
        <div>
            {showPop ?
                <BsX size={'50px'} onClick={() => setShowPop(false)}/>
            :
                <BsList size={'40px'} onClick={() => setShowPop(true)}/>
            }
        </div>
    </div>
  )
}

export default Navbar