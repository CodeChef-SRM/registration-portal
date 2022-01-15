import React, { useEffect, useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import NavItems from "../NavItems/NavItems";
import { GrClose } from "react-icons/gr";
import { AiOutlineMenu } from "react-icons/ai";
import Heading from "../../components/Heading/Heading";

import "./Navbar.css";
import "../InputField/inputField.css";
import AlertContext from "../../context/Alert/AlertContext";

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

  const alertContext = useContext(AlertContext);
  const { handleAlert } = alertContext;

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
      <LoginPopup
        showLogin={showLogin}
        toggleShowLogin={toggleShowLogin}
        handleAlert={handleAlert}
      />

      {/* SIGN UP */}

      <RegisterPopup
        showSignup={showSignup}
        toggleShowSignup={toggleShowSignup}
        setLogin={setLogin}
        handleAlert={handleAlert}
      />
    </>
  );
};

const RegisterPopup = ({ showSignup, toggleShowSignup, handleAlert }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [teamname, setTeamname] = useState("");
  const [phone, setPhone] = useState("");
  const [registrationnumber, setRegisternumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [unmatch, setUnmatch] = useState(false);

  const history = useHistory();

  const handleRegister = async () => {
    const response = await fetch(
      `https://codetoscore-backend.herokuapp.com/api/auth/register`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          registrationnumber,
          teamname,
          phone,
        }),
      }
    );
    const json = await response.json();
    // console.log(json);
    if (json.authToken) {
      localStorage.setItem("authTokenRegCCSC", json.authToken);
      history.push("/dashboard");
      handleAlert("Registeration Successfull!!", "success");
    } else {
      console.log("something went wrong");
      handleAlert("Wrong Inputs!!", "");
    }
  };
  useEffect(() => {
    if (password === confirmPassword) {
      setUnmatch(false);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className={showSignup ? "d-none" : "registerForEvent-master"}>
      <div className="registerForEvent-contianer">
        <div className="regForm-top">
          <div className="reg-form-right">
            <Heading text="Register for the event" />
            <p className="info">(Only Team Leader should register)</p>
          </div>
          <GrClose onClick={toggleShowSignup} className="close-icon" />
        </div>
        <div>
          <input
            className="edit__input"
            placeholder="Enter your Codechef ID"
            type={"text"}
            value={name}
            onChange={(e) => {
              if (e.target.value.length >= 2) {
                e.target.style.border = "";
              } else {
                e.target.style.border = "2px solid red";
              }
              setName(e.target.value);
            }}
          ></input>
          <input
            className="edit__input"
            placeholder="Enter your E mail (srmist.edu.in)"
            type={"email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            className="edit__input"
            placeholder="Enter your Team Name"
            type={"text"}
            value={teamname}
            onChange={(e) => {
              if (e.target.value.length >= 3) {
                e.target.style.border = "";
              } else {
                e.target.style.border = "2px solid red";
              }
              setTeamname(e.target.value);
            }}
          ></input>
          <input
            className="edit__input"
            placeholder="Enter your Phone No."
            type={"number"}
            value={phone}
            onChange={(e) => {
              if (e.target.value.length >= 10) {
                e.target.style.border = "";
              } else {
                e.target.style.border = "2px solid red";
              }
              setPhone(e.target.value);
            }}
          ></input>
          <input
            className="edit__input"
            placeholder="Enter your Registeration No. (RA...)"
            type={"text"}
            value={registrationnumber}
            onChange={(e) => {
              if (e.target.value.length >= 15) {
                e.target.style.border = "";
              } else {
                e.target.style.border = "2px solid red";
              }
              setRegisternumber(e.target.value);
            }}
          ></input>
          <input
            className="edit__input"
            placeholder="Enter Password"
            type={"password"}
            value={password}
            onChange={(e) => {
              if (e.target.value.length >= 6) {
                e.target.style.border = "";
              } else {
                e.target.style.border = "2px solid red";
              }
              setPassword(e.target.value);
            }}
          ></input>
          <input
            className="edit__input"
            placeholder="Confirm Password"
            type={"password"}
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              if (password !== e.target.value) {
                setUnmatch(true);
              } else {
                setUnmatch(false);
              }
            }}
          ></input>
          {unmatch ? (
            <p style={{ color: "red", fontSize: "12px" }}>
              Passwords don't match
            </p>
          ) : (
            ""
          )}
        </div>
        <button
          className="button__primary"
          style={{ width: "100px", borderRadius: "5px" }}
          onClick={() => handleRegister()}
        >
          Register
        </button>
      </div>
    </div>
  );
};

const LoginPopup = ({ showLogin, toggleShowLogin, handleAlert }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleLogin = async () => {
    const response = await fetch(
      `https://codetoscore-backend.herokuapp.com/api/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );
    const json = await response.json();
    // console.log(json);
    if (json.authToken) {
      localStorage.setItem("authTokenRegCCSC", json.authToken);
      toggleShowLogin(false);
      history.push("/dashboard");
      handleAlert("Log In Successfull!!", "success");
    } else {
      toggleShowLogin(true);
      handleAlert("Wrong Credentials!!", "");
    }
  };
  return (
    <div className={showLogin ? "d-none" : "login-master-div"}>
      <div className="login-div">
        <div className="container">
          <Heading text="Enter credentials to login"></Heading>
          <GrClose onClick={toggleShowLogin} className="close-icon" />
        </div>
        <input
          className="inputField-div"
          placeholder="Enter your E mail (srmist.edu.in)"
          type={"email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          className="inputField-div"
          placeholder="Enter your Password"
          type={"password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button
          className="button__primary"
          style={{ borderRadius: "5px", marginTop: "10px" }}
          onClick={() => handleLogin()}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
