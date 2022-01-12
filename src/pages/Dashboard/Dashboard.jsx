import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import AlertContext from "../../context/Alert/AlertContext";
import TeamContext from "../../context/Team/TeamContext";
import UserContext from "../../context/User/UserContext";
import "./Dashboard.css";
import TeamMemberBar from "./TeamMemberBar/TeamMemberBar";

const Dashboard = () => {
  const history = useHistory();

  const signOut = () => {
    localStorage.removeItem("authTokenRegCCSC");
    history.push("/");
  };

  const teamContext = useContext(TeamContext);
  const userContext = useContext(UserContext);
  const alertContext = useContext(AlertContext);

  const { teamDetails, teamMembers, getTeam, addMember, deleteTeam } =
    teamContext;
  const { changePass } = userContext;
  const { handleAlert } = alertContext;

  const grabData = async () => {
    if (localStorage.getItem("authTokenRegCCSC")) {
      getTeam();
    } else {
      history.push("/");
    }
  };

  useEffect(() => {
    grabData();
  }, []);

  return (
    <div className="dashboard__master">
      <HeaderComp
        signOut={signOut}
        teamDetails={teamDetails}
        changePass={changePass}
        history={history}
        deleteTeam={deleteTeam}
        handleAlert={handleAlert}
      />
      <MainDash
        teamMembers={teamMembers}
        addMember={addMember}
        handleAlert={handleAlert}
      />
    </div>
  );
};

const HeaderComp = ({
  signOut,
  teamDetails,
  changePass,
  history,
  deleteTeam,
  handleAlert,
}) => {
  const [settings, setSettings] = useState(false);

  const [currPass, setCurrPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confPass, setConfPass] = useState("");

  const [compare, setCompare] = useState(true);

  useEffect(() => {
    if (newPass === confPass) {
      setCompare(false);
    }
  }, []);

  const handleChangePassword = () => {
    changePass(currPass, newPass);
    localStorage.removeItem("authTokenRegCCSC");
    handleAlert("Password Changed successfully!!", "success");
    history.push("/");
  };

  const handleDeleteTeam = () => {
    deleteTeam();
    localStorage.removeItem("authTokenRegCCSC");
    handleAlert("Team Deleted successfully!!", "success");
    history.push("/");
  };

  return (
    <div className="header display__flex flex__space__between">
      <div>
        <h1 id="welcome__text">Welcome,</h1>
        <h1 id="team__text">{teamDetails.teamname}</h1>
      </div>
      <div className="header__button__cont">
        <button
          className="header__button button__primary"
          onClick={() => signOut()}
        >
          <i class="bi bi-box-arrow-left"></i>Sign Out
        </button>
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
              value={currPass}
              onChange={(e) => setCurrPass(e.target.value)}
            ></input>
            <input
              placeholder="Enter New Password"
              className="edit__input"
              value={newPass}
              onChange={(e) => setNewPass(e.target.value)}
            ></input>
            <input
              placeholder="Confirm New Password"
              className="edit__input"
              value={confPass}
              onChange={(e) => {
                setConfPass(e.target.value);
                if (newPass !== e.target.value) {
                  setCompare(true);
                } else {
                  setCompare(false);
                }
              }}
            ></input>
            {compare ? (
              <p id="warning" style={{ color: "red" }}>
                Passwords don't match
              </p>
            ) : (
              ""
            )}
            <div className="buttons__section">
              <button
                className="button__primary edit__button settings__button"
                onClick={() => handleChangePassword()}
              >
                Change Password
              </button>
              <button
                className="button__primary edit__button settings__button"
                onClick={() => handleDeleteTeam()}
              >
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

const MainDash = ({ teamMembers, addMember, handleAlert }) => {
  const [addMemberPopUp, setAddMemberPopUp] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [phone, setPhone] = useState("");

  const excuteAddMember = () => {
    addMember(name, registrationNumber, email, phone);
    setAddMemberPopUp(false);
  };

  return (
    <div className="main__dashboard">
      <h2>Team Members ({teamMembers.length})</h2>
      {teamMembers.length < 2 ? (
        <h3 style={{ color: "#b1b1b1" }}>
          You need atleast one more member in your team in order to participate
        </h3>
      ) : (
        ""
      )}
      <div className="team__members display__flex flex__flow__down display__flex__start">
        {teamMembers.map((member) => {
          return <TeamMemberBar details={member} />;
        })}
      </div>
      {/*Add Member modal*/}
      {addMemberPopUp ? (
        <div className="add__member__modal display__flex">
          <div className="add__mem__modal__cont">
            <div className="edit__header display__flex flex__space__between">
              <h1>Add Member</h1>
              <button
                className="close__button display__flex"
                onClick={() => setAddMemberPopUp(false)}
              >
                <i class="bi bi-x-lg"></i>
              </button>
            </div>
            <input
              placeholder="Enter CodeChef ID"
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
        onClick={() => setAddMemberPopUp(true)}
        disabled={teamMembers.length === 4 ? "disabled" : ""}
      >
        <i class="bi bi-person-plus"></i>Add member
      </button>
      <p id="warning">(button will be disabled after 4 members are added)</p>
    </div>
  );
};

export default Dashboard;
