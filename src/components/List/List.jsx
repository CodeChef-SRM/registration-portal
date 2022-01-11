import React from 'react';
import { FiEdit, FiDelete } from "react-icons/fi";
import "./list.css";

const List = (props) => {
  return (
    <div className='list'>
      <h3 className="name">{props.name}</h3>
      <p className="email">{props.email}</p>
      <p className="regno">{props.regno}</p>
      <button  onClick={props.onclick} className='action-btn'><div className="action-div">
        <FiEdit />
        <p className="action">Edit</p>
      </div></button>
      <button className='action-btn'><div className="action-div">
        <FiDelete />
        <p className="action">Delete</p>
      </div></button>
    </div>
  )
}

export default List
