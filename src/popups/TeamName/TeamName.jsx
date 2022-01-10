import React from 'react';
import { Link } from 'react-router-dom';


import Heading from "../../components/Heading/Heading";
import Button from "../../components/Button/Button";
import InputField from "../../components/InputField/InputField";
import "./TeamName.css";


const TeamName = () => {
  return (
    <div className='master-div'>
        <div className="main">
        <div className="top">
          <Heading text="Edit Team details"/> 
        </div>
        <InputField type="text" name="Name" placeholder="Enter team name"/>  
        <InputField type="email" name="email" placeholder="Enter password"/>
        <Link to="/team"><Button type="Submit" text="Update details"/></Link>
      </div>
    </div>
  )
}

export default TeamName
