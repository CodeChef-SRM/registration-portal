import React from 'react'
import { Link } from 'react-router-dom';

import InputField from "../../components/InputField/InputField";
import Button from "../../components/Button/Button";
import Heading from "../../components/Heading/Heading";
import registerForEvent_InputFieldData from "../../assets/js/registerForEvent";
import "./registerForEvent.css";



function createInputField(inputFieldData) {
  return <InputField type={inputFieldData.type} name={inputFieldData.name} placeholder={inputFieldData.placeholder} />
}

const RegisterForEvent = () => {
  return (
    <div className='master'>
      <Heading text="Register for the event"/>
      <p className='info'>(Only Team Leader should register)</p>
      {registerForEvent_InputFieldData.map(createInputField)}
      <Link to="/home"><Button type="submit" text="Submit"/></Link>
    </div>
  )
}

export default RegisterForEvent
