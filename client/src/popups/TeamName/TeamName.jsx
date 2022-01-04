import React from 'react';
import { Link } from 'react-router-dom';

import Heading from "../../components/Heading/Heading";
import Button from "../../components/Button/Button";
import InputField from "../../components/InputField/InputField";
import "./TeamName.css";


const TeamName = () => {
  return (
    <div className='master'>
      <Heading text="Team Name" />
      <InputField type="text" name="Team_name" placeholder="Enter Team Name"/>
      <InputField type="password" name="Team_password" placeholder="Enter New Password"/>
      <div className="buttons-div">
        <Link to="/team"><Button type="Submit" text="Save"/></Link>
        <Link to="/login"><button className="delete-btn" type="Submit">Delete Team</button></Link>
      </div>
    </div>
  )
}

export default TeamName
