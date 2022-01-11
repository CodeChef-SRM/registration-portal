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

  //contexts
  const teamContext = useContext(TeamContext);

  const { editMember, deleteMember } = teamContext;

  const deleteMemberFunc = () => {
    deleteMember(details._id);
  };
  const editMemberFunc = () => {
    editMember(details._id, name, registrationNumber, email, phone);
    setEdit(false);
  };
  return (
    <div
      className="team__member__bar display__flex flex__space__between"
      key={details.id}
    >
      <div className="tm__details display__flex">
        <h3>{details.name}</h3>
        <p>{details.registrationnumber}</p>
        <p>{details.email}</p>
        <p>{details.phone}</p>
      </div>
      <div className="tm__funcs display__flex">
        <button onClick={() => setEdit(true)} className="bar__button">
          <i class="bi bi-pencil-square"></i>Edit
        </button>
        {!details.admin ? (
          <button onClick={() => deleteMemberFunc()} className="bar__button">
            <i class="bi bi-trash"></i>Delete
          </button>
        ) : (
          <button className="bar__button">
            <i class="bi bi-person-badge"></i>Admin
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
                <i class="bi bi-x-lg"></i>
              </button>
            </div>
            <input
              placeholder="Enter CodeChef ID"
              className="edit__input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
            <input
              placeholder="Enter Email"
              className="edit__input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input
              placeholder="Enter Registration Number"
              className="edit__input"
              value={registrationNumber}
              onChange={(e) => setRegistrationNumber(e.target.value)}
            ></input>
            <input
              placeholder="Enter Phone Number"
              className="edit__input"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            ></input>
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
