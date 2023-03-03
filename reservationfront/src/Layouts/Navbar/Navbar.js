
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthContext'

import "./Navbar.scss"

function Navbar() {
  const [mobileNavbar, setMobileNavbar] = useState(false)
  const { user } = useContext(AuthContext)

  return (
    <nav>
      <div className='navbar'>
        <button className='navbar_Hamburger' onClick={()=> setMobileNavbar(!mobileNavbar)}>
        {mobileNavbar ? (<i className="fa-solid fa-x"></i>) : (<i className="fa-solid fa-bars"></i>)}
        </button>
        <div className='navbar_logo'>
          <div className='NavbarImage'>
          <img src='https://mediacity.co.in/riorelax/assets/img/logo/logo.png' alt='...'></img>
          </div>
        </div>
        <ul className={mobileNavbar ? "navbar_link-mobil" :"navbar_link"}
        onClick={()=> setMobileNavbar(false)}>
          <Link to ={"/"}><li>Home</li></Link>
          <Link to={"/about"}><li>About</li></Link>
          <li>Contant</li>
        </ul>
       {user ? user.username : (<div className='navbar_icon'>
          <Link to={"/login"}><i className="fa-solid fa-user"></i></Link>
          <Link to ={'/register'}><i className="fa-solid fa-registered"></i></Link>
        </div>)}
      </div>
    </nav>
  )
}

export default Navbar