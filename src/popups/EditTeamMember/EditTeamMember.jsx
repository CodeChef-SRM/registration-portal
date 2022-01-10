import React from 'react'
import { Link } from 'react-router-dom';

import Heading from "../../components/Heading/Heading";
import Button from "../../components/Button/Button";
import InputField from "../../components/InputField/InputField";


const EditTeamMember = () => {
  return (
    <div className='master-div'>
        <div className="main">
        <div className="top">
          <Heading text="Edit Member details"/> 
        </div>
        <InputField type="text" name="Name" placeholder="Enter name"/>  
        <InputField type="email" name="email" placeholder="Enter email ID"/>
        <InputField type="text" name="regno" placeholder="Enter Reg. No"/>
        <Link to="/team"><Button type="Submit" text="Update details"/></Link>
      </div>
    </div>
  )
}

export default EditTeamMember
