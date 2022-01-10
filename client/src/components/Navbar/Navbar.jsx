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
    console.log(toggle);
  }
  return (
    <>
      <div className='navbar'>
        <div className="left">
          <Link to="/home"><h1 className='navbar-heading'>CodeToScore</h1></Link>
        </div>
        <div className="middle">
          <NavItems link="/home" text="Home"/>
          <NavItems link="#prizes" text="Prizes"/>
          <NavItems link="/home" text="Schedule"/>
          <NavItems link="#sponsors" text="Sponsors"/>
          <NavItems link="/home" text="FAQ's"/>
          <NavItems link="#aboutEvent" text="About"/>
        </div>
        <div className="right">
          <AiOutlineMenu onClick={showNavbar} className='navbar-icon' style= {{display: toggle ? "none" : "inline"}} />
          <GrClose onClick={showNavbar} className='navbar-icon' style= {{display: toggle ? "inline" : "none"}} />
          <Link to="/login"><button className="navbar-btn">Login</button></Link>
          <Link to="/registerForEvent"><button  className="navbar-btn">Sign Up</button></Link>
        </div>
      </div>
      <div className="resp-navbar" style= {{display: toggle ? "flex" : "none"}}>
        <NavItems onClick={showNavbar} link="/home" text="Home"/>
        <NavItems onClick={showNavbar} link="#prizes" text="Prizes"/>
        <NavItems onClick={showNavbar} link="/home" text="Schedule"/>
        <NavItems onClick={showNavbar} link="#sponsors" text="Sponsors"/>
        <NavItems onClick={showNavbar} link="#faqs" text="FAQ's"/>
        <NavItems onClick={showNavbar} link="#aboutEvent" text="About"/>
        <NavItems onClick={showNavbar} link="/login" text="Login"/>
        <NavItems onClick={showNavbar} link="/registerForEvent" text="Signup"/>
      </div>
    </>
  )
}

export default Navbar
