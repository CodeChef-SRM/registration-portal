import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import { GrClose } from "react-icons/gr";
import { AiOutlineMenu } from "react-icons/ai";

import Heading from "../../components/Heading/Heading";
import Button from "../../components/Button/Button";
import List from "../../components/List/List";
import welcomePage_data from "../../assets/js/welcome";
import NewTeamMember from "../../popups/NewTeamMember/NewTeamMember";
import "./Team.css";

const Team = () => {
  const [popUp, setState] = useState(false);
  const togglePopUp = () => {
    setState(!popUp);
  }

  const [mobNavbar, showMobNavbar] = useState(false);
  function setMobNavbar() {
    showMobNavbar(!mobNavbar);
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
          <Link to="/teamDetails"><Button type="Submit" text="Settings"/></Link>
          <Link to="/home"><Button type="Submit" text="Log Out"/></Link>
        </div>

      </div>

      <div className="mob-navbar" style={{display: mobNavbar ? "flex" : "none"}}>
        <Link to="/teamDetails"><Button type="Submit" text="Settings"/></Link>
        <Link to="/home"><Button type="Submit" text="Log Out"/></Link>
      </div>

      <h3 className="team-members">Team Members</h3>
      
      {/* TEAM LIST */}

      { welcomePage_data.map((listData, index) => {
        return <List key={index} name={listData.name} email={listData.email} regno={listData.regno}/>
      })}

      <Link to="/addMember"><Button onClick={togglePopUp} className="add-member-btn" type="Submit" text="Add Member"/></Link>

      {popUp && (
        <div className="popup">
          <NewTeamMember />
        </div>
      )}
    </div>
  )
}

export default Team;
