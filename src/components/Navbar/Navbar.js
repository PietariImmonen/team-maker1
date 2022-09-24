import React, { useState } from 'react'
import './navbar.css'
import { BsList, BsX } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [showPop, setShowPop] = useState(false)



  return (
    <div className='navbar'>
        <Link to={'/'} style={{textDecoration: 'none', color: '#050505'}}>
            <h2>DrinkIt.</h2>
        </Link>
        {showPop && 
            <div className='navbar-pop'>
                <div className='navbar-links'>
                    <div className='navbar-link'>
                        <Link to={'/'} style={{textDecoration: 'none', color: '#050505'}}><p className='navbar-link-text'>Home</p></Link>
                    </div>
                    <div className='navbar-link'>
                        <Link to={'/game1'} style={{textDecoration: 'none', color: '#050505'}}><p className='navbar-link-text'>Truth or Drink!</p></Link>
                    </div>
                    <div className='navbar-link'>
                        <Link to={'/team'} style={{textDecoration: 'none', color: '#050505'}}><p className='navbar-link-text'>Team generator</p></Link>
                    </div>
                </div>
            </div>
        }
        <div>
            {showPop ?
                <BsX size={'50px'} onClick={() => setShowPop(false)} className='nav-icon'/>
            :
                <BsList size={'40px'} onClick={() => setShowPop(true)} className='nav-icon'/>
            }
        </div>
    </div>
  )
}

export default Navbar