import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import TeamMemberBar from "./TeamMemberBar/TeamMemberBar";

const teammembers = [
  {
    name: "Name 1",
    registrationnumber: "RA2011026010023",
    phone: 5748789765,
    email: "aw3423@srmist.edu.in",
    admin: true,
    _id: "61dc691f02425fdcb2d0ce0f",
  },
  {
    name: "Name 2",
    registrationnumber: "RA2011026010024",
    phone: 5748789766,
    email: "aw3424@srmist.edu.in",
    admin: false,
    _id: "61dc691f02425fdcb2d0ce0g",
  },
  {
    name: "Name 3",
    registrationnumber: "RA2011026010025",
    phone: 5748789767,
    email: "aw3425@srmist.edu.in",
    admin: false,
    _id: "61dc691f02425fdcb2d0ce0h",
  },
  {
    name: "Name 4",
    registrationnumber: "RA2011026010026",
    phone: 5748789768,
    email: "aw3426@srmist.edu.in",
    admin: false,
    _id: "61dc691f02425fdcb2d0ce0i",
  },
];

const Dashboard = () => {
  const signOut = () => {};

  return (
    <div className="dashboard__master">
      <HeaderComp signOut={signOut} />
      <h1>Team Name</h1>
      <MainDash />
    </div>
  );
};

const HeaderComp = ({ signOut }) => {
  const [settings, setSettings] = useState(true);
  return (
    <div className="header display__flex flex__space__between">
      <div>
        <h1>Welcome,</h1>
      </div>
      <div className="header__button__cont">
        <Link to="/" onClick={() => signOut()}>
          <button className="header__button button__primary">
            <i class="bi bi-box-arrow-left"></i>Sign Out
          </button>
        </Link>
        <button
          className="header__button button__primary"
          onClick={() => setSettings(true)}
        >
          <i class="bi bi-gear"></i>Settings
        </button>
      </div>
      {settings ? (
        <div className="settings__popup display__flex">
          <div className="settings__body">
            <div className="edit__header display__flex flex__space__between">
              <h1>Settings</h1>
              <button
                className="close__button display__flex"
                onClick={() => setSettings(false)}
              >
                <i class="bi bi-x-lg"></i>
              </button>
            </div>
            <input
              placeholder="Enter Current Password"
              className="edit__input"
            ></input>
            <input
              placeholder="Enter New Password"
              className="edit__input"
            ></input>
            <input
              placeholder="Confirm New Password"
              className="edit__input"
            ></input>
            <div className="buttons__section">
              <button className="button__primary edit__button settings__button">
                Change Password
              </button>
              <button className="button__primary edit__button settings__button">
                Delete Team
              </button>
              <p id="warning">
                (Once you click delete team your team will be deleted
                permanently)
              </p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

const MainDash = () => {
  const [addMember, setAddMember] = useState(false);

  const excuteAddMember = () => {};

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className="main__dashboard">
      <h2>Team Members ({teammembers.length})</h2>
      <div className="team__members display__flex flex__flow__down display__flex__start">
        {teammembers.map((member) => {
          return <TeamMemberBar details={member} />;
        })}
      </div>
      {/*Add Member modal*/}
      {addMember ? (
        <div className="add__member__modal display__flex">
          <div className="add__mem__modal__cont">
            <div className="edit__header display__flex flex__space__between">
              <h1>Add Member</h1>
              <button
                className="close__button display__flex"
                onClick={() => setAddMember(false)}
              >
                <i class="bi bi-x-lg"></i>
              </button>
            </div>
            <input
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="edit__input"
            ></input>
            <input
              placeholder="Enter Email (srmist.edu.in)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="edit__input"
            ></input>
            <input
              placeholder="Enter Reg. No."
              value={registrationNumber}
              onChange={(e) => setRegistrationNumber(e.target.value)}
              className="edit__input"
            ></input>
            <input
              placeholder="Enter Phone No."
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="edit__input"
            ></input>
            <button
              onClick={() => excuteAddMember()}
              className="button__primary edit__button"
            >
              Add Member
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
      <button
        className="button__primary add__member__button"
        onClick={() => setAddMember(true)}
        disabled={teammembers.length === 4 ? "disabled" : ""}
      >
        <i class="bi bi-person-plus"></i>Add member
      </button>
      <p id="warning">(button will be disabled after 4 members are added)</p>
    </div>
  );
};

export default Dashboard;
