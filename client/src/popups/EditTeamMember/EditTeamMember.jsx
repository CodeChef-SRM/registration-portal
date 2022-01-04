import React from 'react'
import { Link } from 'react-router-dom';

import Heading from "../../components/Heading/Heading";
import Button from "../../components/Button/Button";
import InputField from "../../components/InputField/InputField";

const EditTeamMember = () => {
  return (
    <div className='master'>
      <Heading text="Name1"/>
      <InputField type="text" name="Edited_name" placeholder="Enter your name"/>  
      <InputField type="email" name="email" placeholder="Enter your email ID"/>
      <InputField type="text" name="regno" placeholder="Enter your Reg. No"/>
      <Link to="/team"><Button type="Submit" text="Edit"/></Link>
    </div>
  )
}

export default EditTeamMember
