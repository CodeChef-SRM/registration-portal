import React from 'react'
import "./button.css"

const Button = (props) => {
  return (
    <div className='btn-div'>
      <button className='btn' type={props.type}>{props.text}</button>
    </div>
  )
}

export default Button;
