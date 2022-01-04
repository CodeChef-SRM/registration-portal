import React from 'react'
import { Link } from 'react-router-dom';

import InputField from "../../components/InputField/InputField";
import Button from "../../components/Button/Button";
import Heading from "../../components/Heading/Heading";
import "./Login.css"

const Login = () => {
  return (
    <div className="master">
      <div className="container">
        <Heading text="Enter credentials to login"></Heading>
      </div>
      <InputField type="text" name="username" placeholder="Enter team name"/>
      <InputField type="password" name="password" placeholder="Enter Password"/>
      <Link to="/team"><Button type="" text="Login"/></Link>
    </div>
  )
}

export default Login;
