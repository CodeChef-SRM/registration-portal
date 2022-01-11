import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import { GrClose } from "react-icons/gr";
import { AiOutlineMenu } from "react-icons/ai";

import Heading from "../../components/Heading/Heading";
import Button from "../../components/Button/Button";
import List from "../../components/List/List";
import welcomePage_data from "../../assets/js/welcome";
import InputField from "../../components/InputField/InputField";

import "./Team.css";

const Team = () => {
  
  const [mobNavbar, showMobNavbar] = useState(false);
  function setMobNavbar() {
    showMobNavbar(!mobNavbar);
  }

  const [addMember, setState] = useState(false);
  const toggleAddMember = () => {
    setState(!addMember);
  }
  
  const [editMember, setEditMember] = useState(false);
  const toggleEditMember = () => {
    setEditMember(!editMember);
  }

  const [editTeam, setEditTeam] = useState(false);
  const toggleEditTeam = () => {
    setEditTeam(!editTeam);
  }

  return (
    <div className="team-container">
      <div className="top">

        <div className="team-container-right">
          <h1 className="welcome-heading">Welcome</h1>
          <Heading text="Team Name"/>
        </div>

        <div className="mob-navbar-toggler-div">
          <AiOutlineMenu className='welcome-navbar-icon' onClick={setMobNavbar} style={{display: mobNavbar ? "none" : "inline"}}/>
          <GrClose className='welcome-navbar-icon' onClick={setMobNavbar} style={{display: mobNavbar ? "inline" : "none"}}/>
        </div>
        <div className="team-container-left">
          <div className="submit-btn-div">
            <Button onclick={toggleEditTeam} type="Submit" text="Settings"/>
          </div>
          <Link to="/home"><Button type="Submit" text="Log Out"/></Link>
        </div>

      </div>

      <div className="mob-navbar" style={{display: mobNavbar ? "flex" : "none"}}>
          <div className="submit-btn-div">
            <Button onclick={toggleEditTeam} type="Submit" text="Settings"/>
          </div>
        <Link to="/home"><Button type="Submit" text="Log Out"/></Link>
      </div>

      {/* ADD MEMBER */}

      <div className={addMember ? "master-div" : "d-none"}>
          <div className="main">
          <div className="top">
            <Heading text="Add Member"/> 
            <GrClose onClick={toggleAddMember} className='close-icon'/>
          </div>
          <InputField type="text" name="Name" placeholder="Enter name"/>  
          <InputField type="email" name="email" placeholder="Enter email ID"/>
          <InputField type="text" name="regno" placeholder="Enter Reg. No"/>
          <Link to="/team"><Button onclick={toggleAddMember} type="Submit" text="Add member"/></Link>
        </div>
      </div>

      {/* EDIT MEMBER DETAILS */}

      <div className={editMember ? "master-div" : "d-none"}>
        <div className="main">
        <div className="top">
          <Heading text="Edit Member details"/> 
          <GrClose onClick={toggleEditMember} className='close-icon'/>
        </div>
        <InputField type="text" name="Name" placeholder="Enter name"/>  
        <InputField type="email" name="email" placeholder="Enter email ID"/>
        <InputField type="text" name="regno" placeholder="Enter Reg. No"/>
        <Button onclick={toggleEditMember} type="Submit" text="Update details"/>
      </div>
    </div>

    {/* EDIT TEAM DETAILS */}
    <div className={editTeam ? "master-div" : "d-none"}>
        <div className="main">
        <div className="top">
          <Heading text="Edit Team details"/> 
          <GrClose onClick={toggleEditTeam} className='close-icon'/>
        </div>
        <InputField type="text" name="Name" placeholder="Enter team name"/>  
        <InputField type="email" name="email" placeholder="Enter password"/>
        <Button onclick={toggleEditTeam} type="Submit" text="Update details"/>
      </div>
    </div>

      <h3 className="team-members">Team Members</h3>
      
      {/* TEAM LIST */}

      { welcomePage_data.map((listData, index) => {
        return <List onclick={toggleEditMember} key={index} name={listData.name} email={listData.email} regno={listData.regno}/>
      })}

      <Button onclick={toggleAddMember} className="add-member-btn" type="Submit" text="Add Member"/>
    </div>
  )
}

export default Team;
