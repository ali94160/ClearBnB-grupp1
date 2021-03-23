import React, { useState, useContext, useEffect } from 'react'
import { UserContext } from '../contexts/UserContextProvider'
import '../style/Nav.css';
import {Link} from 'react-router-dom'
import ProfileMenu from './ProfileMenu.js'


const Nav = () => {

  const { whoAmI, logOut, whoIsOnline } = useContext(UserContext);
  

  useEffect(() => {
    whoIsOnline();
  }, [])
  
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };
  const closeHamburger = () => {
    setActive(!isActive);
  }
  return (
    <div className={isActive ? "nav-bar" : "nav-bar"}>
      <div className="hamburger-menu-opened">
        <p className="hamburger-menu" onClick={handleToggle}>☰</p>
        <div className={isActive ? "display-none" : "flex-column"}>
          <Link to="/" onClick={() => closeHamburger()}>Home</Link>
          <Link to="/about" onClick={() => closeHamburger()}>About</Link>
          <Link to="/Residences" onClick={() => closeHamburger()}>Residences</Link>
          {!whoAmI && <Link to="/login" onClick={() => closeHamburger()}>Login</Link>}
          {!whoAmI && <Link to="/register" onClick={() => closeHamburger()}>Register</Link>}
        </div>
      </div>
     <Link to="/"><img className="logoImg" src="https://i.postimg.cc/020TTsWC/logo-transparent-2.png" alt=""/></Link>
      <div className="links">
      <Link to="/">HOME</Link>
      <Link to="/about">ABOUT</Link>
      <Link to="/Residences">RESIDENCES</Link>
      {!whoAmI && <Link to="/login">LOGIN</Link>}
      {!whoAmI && <Link to="/register">REGISTER</Link>} 
      </div>
      <ProfileMenu className="profileMenu"/>
      </div>
  ); 
}

export default Nav;