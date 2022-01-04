import React from 'react';
import { Link } from 'react-router-dom';
import { GrClose } from "react-icons/gr";

import Heading from "../../components/Heading/Heading";
import Button from "../../components/Button/Button";
import InputField from "../../components/InputField/InputField";
import "./NewTeamMember.css";

const NewTeamMember = () => {
  return (
    <div className='master-div'>
        <div className="main">
        <div className="top">
          <Heading text="Add Member"/> 
          <button className='close-btn'><GrClose /></button>
        </div>
        <InputField type="text" name="Name" placeholder="Enter name"/>  
        <InputField type="email" name="email" placeholder="Enter email ID"/>
        <InputField type="text" name="regno" placeholder="Enter Reg. No"/>
        <Link to="/team"><Button type="Submit" text="Add member"/></Link>
      </div>
    </div>
  )
}

export default NewTeamMember
