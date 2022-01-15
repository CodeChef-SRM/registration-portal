import React, { useState, useContext } from "react";
import TeamContext from "../../../context/Team/TeamContext";

const TeamMemberBar = ({ details }) => {
  const [edit, setEdit] = useState(false);

  // edit section states
  const [name, setName] = useState(details.name);
  const [email, setEmail] = useState(details.email);
  const [registrationNumber, setRegistrationNumber] = useState(
    details.registrationnumber
  );
  const [phone, setPhone] = useState(details.phone);
  // -------------------

  // Edit section checks
  const [nameVerification, setNameVerification] = useState(false);
  const [emailVerification, setEmailVerification] = useState(false);
  const [registrationNumberVerification, setRegistrationNumberVerification] =
    useState(false);
  const [phoneVerification, setPhoneVerification] = useState(false);

  //contexts
  const teamContext = useContext(TeamContext);

  const { editMember, deleteMember } = teamContext;

  const deleteMemberFunc = () => {
    deleteMember(details._id);
  };
  const editMemberFunc = () => {
    if (
      nameVerification ||
      emailVerification ||
      registrationNumberVerification ||
      phoneVerification
    ) {
      console.log("Wrong Credentials");
    } else {
      editMember(details._id, name, registrationNumber, email, phone);
      setEdit(false);
    }
  };
  return (
    <div
      className="team__member__bar display__flex flex__space__between"
      key={details._id}
    >
      <div className="tm__details display__flex">
        <h3>{details.name}</h3>
        <p>{details.registrationnumber}</p>
        <p>{details.email}</p>
        <p>{details.phone}</p>
      </div>
      <div className="tm__funcs display__flex">
        <button onClick={() => setEdit(true)} className="bar__button">
          <i className="bi bi-pencil-square"></i>Edit
        </button>
        {!details.admin ? (
          <button onClick={() => deleteMemberFunc()} className="bar__button">
            <i className="bi bi-trash"></i>Delete
          </button>
        ) : (
          <button className="bar__button">
            <i className="bi bi-person-badge"></i>Admin
          </button>
        )}
      </div>
      {edit ? (
        <div className="edit__modal display__flex">
          <div className="edit__modal__cont">
            <div className="edit__header display__flex flex__space__between">
              <h2>Edit {details.name}</h2>
              <button
                className="close__button display__flex"
                onClick={() => {
                  setEdit(false);
                  setName(details.name);
                  setEmail(details.email);
                  setRegistrationNumber(details.registrationnumber);
                  setPhone(details.phone);
                }}
              >
                <i className="bi bi-x-lg"></i>
              </button>
            </div>
            <label className="input__label">CodeChef ID</label>
            <input
              placeholder="CodeChef ID"
              className="edit__input"
              value={name}
              onChange={(e) => {
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
              className="edit__input"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (e.target.value.includes("@srmist.edu.in")) {
                  setEmailVerification(false);
                } else {
                  setEmailVerification(true);
                }
              }}
            ></input>
            {emailVerification ? (
              <p className="warning">Enter a valid Email ID (@srmist.edu.in)</p>
            ) : (
              ""
            )}
            <label className="input__label">Registration Number</label>
            <input
              placeholder="Registration Number"
              className="edit__input"
              value={registrationNumber}
              onChange={(e) => {
                setRegistrationNumber(e.target.value);
                if (e.target.value.length === 15) {
                  setRegistrationNumberVerification(false);
                } else {
                  setRegistrationNumberVerification(true);
                }
              }}
            ></input>
            {registrationNumberVerification ? (
              <p className="warning">Enter a valid registration number</p>
            ) : (
              ""
            )}
            <label className="input__label">Phone Number</label>
            <input
              placeholder="Phone Number"
              className="edit__input"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                if (e.target.value.length === 10) {
                  setPhoneVerification(false);
                } else {
                  setPhoneVerification(true);
                }
              }}
            ></input>
            {phoneVerification ? (
              <p className="warning">Enter a valid phone number (10 digits)</p>
            ) : (
              ""
            )}
            <button
              className="edit__button button__primary"
              onClick={() => editMemberFunc()}
            >
              Save
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default TeamMemberBar;
