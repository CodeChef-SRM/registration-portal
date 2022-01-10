import React, { useState} from 'react'
import { Link } from 'react-router-dom';

import NavItems from '../NavItems/NavItems';
import { GrClose } from "react-icons/gr";
import { AiOutlineMenu } from "react-icons/ai";
import "./Navbar.css";

const Navbar = () => {

  const [toggle, setState] = useState(false);
  function showNavbar () {
    setState(!toggle);
  }
  return (
    <>
      <div className='navbar'>
        <div className="left">
          <Link to="/home"><h1 className='navbar-heading'>CodeToScore</h1></Link>
        </div>
        <div className="middle">
          <NavItems link="#prizes" text="Prizes"/>
          <NavItems link="/home" text="Schedule"/>
          <NavItems link="#sponsors" text="Sponsors"/>
          <NavItems link="/home" text="FAQ's"/>
          <NavItems link="#aboutEvent" text="About"/>
        </div>
        <div className="right">
          <AiOutlineMenu onClick={showNavbar} className='icon' style= {{display: toggle ? "none" : "inline"}} />
          <GrClose onClick={showNavbar} className='icon' style= {{display: toggle ? "inline" : "none"}} />
          <Link to="/login"><button className="navbar-btn">Login</button></Link>
          <Link to="/registerForEvent"><button  className="navbar-btn">Sign Up</button></Link>
        </div>
      </div>
      <div className="resp-navbar" style= {{display: toggle ? "flex" : "none"}}>
        <NavItems link="#prizes" text="Prizes"/>
        <NavItems link="/home" text="Schedule"/>
        <NavItems link="#sponsors" text="Sponsors"/>
        <NavItems link="/home" text="FAQ's"/>
        <NavItems link="#aboutEvent" text="About"/>
        <NavItems link="/login" text="Login"/>
        <NavItems link="/registerForEvent" text="Signup"/>
      </div>
    </>
  )
}

export default Navbar
