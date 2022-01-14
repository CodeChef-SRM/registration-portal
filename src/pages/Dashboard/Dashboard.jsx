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

  const [currPassVerification, setCurrPassVerification] = useState(false);
  const [newPassVerification, setNewPassVerification] = useState(false);

  const [compare, setCompare] = useState(true);

  useEffect(() => {
    if (newPass === confPass) {
      setCompare(false);
    }
  }, []);

  const handleChangePassword = () => {
    if (currPassVerification || newPassVerification) {
      handleAlert("Password Fields are incorrect!!", "warning");
    } else {
      changePass(currPass, newPass);
      handleAlert("Password Changed successfully!!", "success");
    }
    //   localStorage.removeItem("authTokenRegCCSC");
    // history.push("/");
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
            <label className="input__label">Current Password</label>
            <input
              placeholder="Current Password"
              className="edit__input"
              value={currPass}
              onChange={(e) => {
                setCurrPass(e.target.value);
                if (e.target.value.length <= 6) {
                  setCurrPassVerification(true);
                } else {
                  setCurrPassVerification(false);
                }
              }}
              type={"password"}
            ></input>
            {currPassVerification ? (
              <p className="warning">
                Password length should be greater than 6
              </p>
            ) : (
              ""
            )}
            <label className="input__label">New Password</label>
            <input
              placeholder="New Password"
              className="edit__input"
              value={newPass}
              onChange={(e) => {
                setNewPass(e.target.value);
                if (e.target.value.length <= 6) {
                  setNewPassVerification(true);
                } else {
                  setNewPassVerification(false);
                }
              }}
              type={"password"}
            ></input>
            {newPassVerification ? (
              <p className="warning">
                Password length should be greater than 6
              </p>
            ) : (
              ""
            )}
            <label className="input__label">Confirm New Password</label>
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
              type={"password"}
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

  const [nameVerification, setNameVerification] = useState(false);
  const [emailVerification, setEmailVerification] = useState(false);
  const [registrationNumberVerification, setRegistrationNumberVerification] =
    useState(false);
  const [phoneVerification, setPhoneVerification] = useState(false);

  const excuteAddMember = () => {
    if (
      nameVerification ||
      emailVerification ||
      registrationNumberVerification ||
      phoneVerification
    ) {
      console.log("Wrong Credentials");
    } else {
      addMember(name, registrationNumber, email, phone);
      setAddMemberPopUp(false);
    }
  };

  return (
    <div className="main__dashboard">
      <h2>Team Members ({teamMembers.length})</h2>
      {teamMembers.length < 2 ? (
        <h3 style={{ color: "#b1b1b1" }}>
          You need atleast one more member in your team in order to participate
        </h3>
      ) : (
        <h3 style={{ color: "#b1b1b1" }}>
          Congratulations!! your team is registered
        </h3>
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
                onClick={() => {
                  setAddMemberPopUp(false);
                  setName("");
                  setEmail("");
                  setRegistrationNumber("");
                  setPhone("");
                }}
              >
                <i class="bi bi-x-lg"></i>
              </button>
            </div>
            <label className="input__label">CodeChef ID</label>
            <input
              placeholder="CodeChef ID"
              value={name}
              className="edit__input"
              onChange={(e) => {
                setName(e.target.value);
                setName(e.target.value);
                if (e.target.value.length <= 3) {
                  setNameVerification(true);
                } else {
                  setNameVerification(false);
                }
              }}
            ></input>
            {nameVerification ? (
              <p className="warning">
                CodeChef ID length should be greater than 3
              </p>
            ) : (
              ""
            )}
            <label className="input__label">Email (srmist.edu.in)</label>
            <input
              placeholder="Email (srmist.edu.in)"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (e.target.value.includes("@srmist.edu.in")) {
                  setEmailVerification(false);
                } else {
                  setEmailVerification(true);
                }
              }}
              className="edit__input"
            ></input>
            {emailVerification ? (
              <p className="warning">Enter a valid Email ID (@srmist.edu.in)</p>
            ) : (
              ""
            )}
            <label className="input__label">
              Registration Number (Eg :RAXXXXXXXXXXXXX)
            </label>
            <input
              placeholder="Registration Number"
              value={registrationNumber}
              onChange={(e) => {
                setRegistrationNumber(e.target.value);
                if (e.target.value.length === 15) {
                  setRegistrationNumberVerification(false);
                } else {
                  setRegistrationNumberVerification(true);
                }
              }}
              className="edit__input"
            ></input>
            {registrationNumberVerification ? (
              <p className="warning">Enter a valid registration number</p>
            ) : (
              ""
            )}
            <label className="input__label">Phone Number</label>
            <input
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                if (e.target.value.length === 10) {
                  setPhoneVerification(false);
                } else {
                  setPhoneVerification(true);
                }
              }}
              className="edit__input"
            ></input>
            {phoneVerification ? (
              <p className="warning">Enter a valid phone number (10 digits)</p>
            ) : (
              ""
            )}
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
      {teamMembers.length >= 2 ? (
        <div className="challenge__link">
          <h2>Thank you for registering</h2>
          <br></br>
          <p>Challange link will be updated here soon</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Dashboard;
