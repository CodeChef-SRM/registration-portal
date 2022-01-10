import React from 'react'
import "./inputField.css";

const inputField = (props) => {
  return (
    <div className='inputField-div'>
      <input type={props.type} name={props.name} className="inputField" placeholder={props.placeholder} />
    </div>
  )
}

export default inputField;
