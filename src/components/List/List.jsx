import React from 'react';
import { Link } from 'react-router-dom';
import { FiEdit, FiDelete } from "react-icons/fi";
import "./list.css";

const List = (props) => {
  return (
    <div className='list'>
      <h3 className="name">{props.name}</h3>
      <p className="email">{props.email}</p>
      <p className="regno">{props.regno}</p>
      <Link to="/editTeamMember"><button className='action-btn'><div className="action-div">
        <FiEdit />
        <p className="action">Edit</p>
      </div></button></Link>
      <button className='action-btn'><div className="action-div">
        <FiDelete />
        <p className="action">Delete</p>
      </div></button>
    </div>
  )
}

export default List