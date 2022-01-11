import React, { useState } from "react";
import { Link } from "react-router-dom";

import NavItems from "../NavItems/NavItems";
import { GrClose } from "react-icons/gr";
import { AiOutlineMenu } from "react-icons/ai";
import InputField from "../../components/InputField/InputField";
import Button from "../../components/Button/Button";
import Heading from "../../components/Heading/Heading";
import registerForEvent_InputFieldData from "../../assets/js/registerForEvent";

import "./Navbar.css";

const Navbar = () => {
  const [toggle, setState] = useState(false);
  function showNavbar() {
    setState(!toggle);
  }

  const [showLogin, setLogin] = useState(true);
  function toggleShowLogin() {
    setLogin(!showLogin);
  }
  function loginBtn() {
    showNavbar();
    toggleShowLogin();
  }
  function signupBtn() {
    showNavbar();
    toggleShowSignup();
  }

  function createInputField(inputFieldData, index) {
    return (
      <InputField
        key={index}
        type={inputFieldData.type}
        name={inputFieldData.name}
        placeholder={inputFieldData.placeholder}
      />
    );
  }
  const [showSignup, setSignup] = useState(true);
  function toggleShowSignup() {
    setSignup(!showSignup);
  }

  return (
    <>
      <div className="navbar">
        <div className="left">
          <Link to="/">
            <h1 className="navbar-heading">CodeToScore</h1>
          </Link>
        </div>
        <div className="middle">
          <NavItems link="/" text="Home" />
          <NavItems link="#prizes" text="Prizes" />
          <NavItems link="#schedule" text="Schedule" />
          <NavItems link="#sponsors" text="Sponsors" />
          <NavItems link="#faqs" text="FAQ's" />
          <NavItems link="#aboutEvent" text="About" />
        </div>
        <div className="right">
          <AiOutlineMenu
            onClick={showNavbar}
            className={toggle ? "d-none" : "navbar-icon"}
          />
          <GrClose
            onClick={showNavbar}
            className={toggle ? "navbar-icon" : "d-none"}
          />
          <button onClick={toggleShowLogin} className="navbar-btn">
            Login
          </button>
          <button onClick={toggleShowSignup} className="navbar-btn">
            Sign Up
          </button>
        </div>
      </div>
      <div
        className="resp-navbar"
        style={{ display: toggle ? "flex" : "none" }}
      >
        <NavItems onClick={showNavbar} link="/home" text="Home" />
        <NavItems onClick={showNavbar} link="#prizes" text="Prizes" />
        <NavItems onClick={showNavbar} link="#schedule" text="Schedule" />
        <NavItems onClick={showNavbar} link="#sponsors" text="Sponsors" />
        <NavItems onClick={showNavbar} link="#faqs" text="FAQ's" />
        <NavItems onClick={showNavbar} link="#aboutEvent" text="About" />
        <NavItems onClick={loginBtn} text="Login" />
        <NavItems onClick={signupBtn} text="Signup" />
      </div>

      {/* LOGIN POPUP */}
      <div className={showLogin ? "d-none" : "login-master-div"}>
        <div className="login-div">
          <div className="container">
            <Heading text="Enter credentials to login"></Heading>
            <GrClose onClick={toggleShowLogin} className="close-icon" />
          </div>
          <InputField
            type="text"
            name="username"
            placeholder="Enter team name"
          />
          <InputField
            type="password"
            name="password"
            placeholder="Enter Password"
          />
          <Link to="/dashboard">
            <Button type="" text="Login" />
          </Link>
        </div>
      </div>

      {/* SIGN UP */}

      <div className={showSignup ? "d-none" : "registerForEvent-master"}>
        <div className="registerForEvent-contianer">
          <div className="top">
            <div className="reg-form-right">
              <Heading text="Register for the event" />
              <p className="info">(Only Team Leader should register)</p>
            </div>
            <GrClose onClick={toggleShowSignup} className="close-icon" />
          </div>
          {registerForEvent_InputFieldData.map(createInputField)}
          <Link to="/home">
            <Button onclick={toggleShowSignup} type="submit" text="Submit" />
          </Link>
        </div>
      </div>
    </>
  );
};
export default Navbar;
