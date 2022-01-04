import React from 'react';
import { Link } from 'react-router-dom';
import Button from "../../components/Button/Button";
import "./Page1Default.css";

function Page1Default() {
  return (
    <div className='main-div'>
      <Link to="/login"><Button type="" text="Login"/></Link>
      <Link to="/registerForEvent"><Button type="" text="Sign Up"/></Link>
    </div>
  )
}

export default Page1Default
