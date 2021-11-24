import SplashContainer from "../splash/splash_container"
import React from 'react'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='left-navbar'>
        <img className='logo' src={logoUrl} alt="logo" />
        <p>Pinspiration</p>
      </div>
      <ul className='right-navbar'>
        <SplashContainer />
      </ul>
    </div>
  )
}

export default Navbar