import React from 'react'
import "./NavItems.css";

const NavItems = (props) => {
  return (
    <a href={props.link}><button className='nav-item'>{props.text}</button></a>
  )
}

export default NavItems
