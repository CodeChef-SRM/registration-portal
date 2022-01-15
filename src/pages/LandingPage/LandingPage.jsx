import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Card/Card";
import { GrClose } from "react-icons/gr";
import Heading from "../../components/Heading/Heading";
import password from "../../assets/img/password250.png";
import Careernaksha from "../../assets/img/Careernaksha.png";
import InterviewBuddy from "../../assets/img/InterviewBuddy.png";
import scriptFoundation from "../../assets/img/scriptFoundation250.png";
import sponsorGMC from "../../assets/img/sponsorGMC.png";
import Taskade from "../../assets/img/Taskade.png";
import Voiceflow from "../../assets/img/Voiceflow.png";
import FaqList from "../../components/FaqList/FaqList";
import Footer from "../../components/Footer/Footer";
import Timeline from "../../components/Timeline/Timeline";
import faqListData from "../../assets/js/FaqListData";
import "./LandingPage.css";
import "../Dashboard/Dashboard.css";
import AlertContext from "../../context/Alert/AlertContext";

function LandingPage() {
  const [showSignup, setSignup] = useState(true);
  function toggleShowSignup() {
    setSignup(!showSignup);
  }

  const alertContext = useContext(AlertContext);
  const { handleAlert } = alertContext;

  return (
    <div className="main-div">
      <Navbar />

      {/* <RegisterPopup /> */}
      <RegisterPopup
        showSignup={showSignup}
        toggleShowSignup={toggleShowSignup}
        handleAlert={handleAlert}
      />
      {/* HEADING */}

      <div className="heading-div">
        <h1 className="heading">CodeToScore</h1>

        <div className="heading-btns-div">
          <button onClick={toggleShowSignup} className="heading-div-btn">
            Register
          </button>
        </div>
      </div>

      {/* ABOUT EVENT */}

      <div className="about-event">
        <h2 className="section-heading" id="aboutEvent">
          About the Event
        </h2>
        <div className="aboutEvent-topDiv">
          <p className="about-event-desc">
            Code-To-Score is a colossal event involving students from various
            streams who come together to compete in this coding contest.
            Code-to-score not only focuses on helping the students use their
            skills to cross challenges, which form an integral part of
            Competitive Programming but also shine light upon the areas which
            students generally miss while boosting their skills by brainstorming
            on many ﬁrm questions. To sum up, it's going to be nothing less than
            a roller coaster ride for all techies, while also making some
            memories that can be cherished forever.
          </p>
          <p className="about-event-desc">
            This event will be organized on a CodeChef platform and will have
            three rounds. Participants will have to qualify each round to
            contest in the next. This is a team event and each team can have 2 -
            4 players.
          </p>
        </div>
      </div>

      {/* TIMELINE */}
      <div className="schedule-div">
        <h2 className="section-heading" id="schedule">
          Schedule
        </h2>
        <Timeline />
      </div>

      {/* PRIZES */}
      <div className="prizes">
        <h2 className="section-heading" id="prizes">
          Prizes
        </h2>
        <div className="cards-div">
          <Card
            number="1"
            postfix="st"
            text="Amazon gift card worth Rs.1000 (to the team) + lifetime upgrade of taskade + unlimited Async online Interviews by interview buddy."
          />
          <Card
            number="2"
            postfix="nd"
            text="Amazon gift card worth Rs.700 (to the team) + lifetime upgrade of taskade + unlimited Async online Interviews by interview buddy."
          />
          <Card
            number="3"
            postfix="rd"
            text="Amazon gift card worth Rs.500 (to the team) + lifetime upgrade of taskade + unlimited Async online Interviews by interview buddy."
          />
        </div>
      </div>

      {/* SPONSORS */}

      <div className="sponsors-div">
        <h2 className="section-heading" id="sponsors">
          Sponsors
        </h2>
        <div className="sponsors-top-div">
          <img src={Taskade} alt="sponsor" className="sponsor-icon" />
          <img
            src={password}
            alt="sponsor"
            className="sponsor-icon"
            id="sponsor-password"
          />
          <img
            src={scriptFoundation}
            alt="sponsor"
            className="sponsor-icon"
            id="scriptFoundation"
          />
          <img
            src={Voiceflow}
            alt="sponsor"
            className="sponsor-icon"
            id="voiceflow"
          />
        </div>
        <div className="sponsors-bottom-div">
          <img
            src={InterviewBuddy}
            alt="sponsor"
            className="sponsor-icon"
            id="interviewBuddy"
          />
          <img
            src={Careernaksha}
            alt="sponsor"
            className="sponsor-icon"
            id="careernaksha"
          />
          <img src={sponsorGMC} alt="sponsor" className="sponsor-icon" />
        </div>
      </div>

      {/* FAQ's */}

      <div className="faqs">
        <h2 className="section-heading" id="faqs">
          FAQ's
        </h2>
        <div className="faqs-list-div">
          {faqListData.map((data, index) => {
            return <FaqList key={index} que={data.que} ans={data.ans} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

const RegisterPopup = ({ showSignup, toggleShowSignup, handleAlert }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [teamname, setTeamname] = useState("");
  const [phone, setPhone] = useState("");
  const [registrationnumber, setRegisternumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [unmatch, setUnmatch] = useState(false);

  const history = useHistory();

  const handleRegister = async () => {
    const response = await fetch(
      `https://codetoscore-backend.herokuapp.com/api/auth/register`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          registrationnumber,
          teamname,
          phone,
        }),
      }
    );
    const json = await response.json();
    // console.log(json);
    if (json.authToken) {
      localStorage.setItem("authTokenRegCCSC", json.authToken);
      history.push("/dashboard");
      handleAlert("Registeration Successfull!!", "success");
    } else {
      console.log("something went wrong");
      handleAlert("Wrong Inputs!!", "");
    }
  };
  useEffect(() => {
    if (password === confirmPassword) {
      setUnmatch(false);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className={showSignup ? "d-none" : "registerForEvent-master"}>
      <div className="registerForEvent-contianer">
        <div className="regForm-top">
          <div className="reg-form-right">
            <Heading text="Register for the event" />
            <p className="info">(Only Team Leader should register)</p>
          </div>
          <GrClose onClick={toggleShowSignup} className="close-icon" />
        </div>
        <div>
          <input
            className="edit__input"
            placeholder="Enter your Codechef ID"
            type={"text"}
            value={name}
            onChange={(e) => {
              if (e.target.value.length >= 2) {
                e.target.style.border = "";
              } else {
                e.target.style.border = "2px solid red";
              }
              setName(e.target.value);
            }}
          ></input>
          <input
            className="edit__input"
            placeholder="Enter your E mail (srmist.edu.in)"
            type={"email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            className="edit__input"
            placeholder="Enter your Team Name"
            type={"text"}
            value={teamname}
            onChange={(e) => {
              if (e.target.value.length >= 3) {
                e.target.style.border = "";
              } else {
                e.target.style.border = "2px solid red";
              }
              setTeamname(e.target.value);
            }}
          ></input>
          <input
            className="edit__input"
            placeholder="Enter your Phone No."
            type={"number"}
            value={phone}
            onChange={(e) => {
              if (e.target.value.length >= 10) {
                e.target.style.border = "";
              } else {
                e.target.style.border = "2px solid red";
              }
              setPhone(e.target.value);
            }}
          ></input>
          <input
            className="edit__input"
            placeholder="Enter your Registeration No. (RA...)"
            type={"text"}
            value={registrationnumber}
            onChange={(e) => {
              if (e.target.value.length >= 15) {
                e.target.style.border = "";
              } else {
                e.target.style.border = "2px solid red";
              }
              setRegisternumber(e.target.value);
            }}
          ></input>
          <input
            className="edit__input"
            placeholder="Enter Password"
            type={"password"}
            value={password}
            onChange={(e) => {
              if (e.target.value.length >= 6) {
                e.target.style.border = "";
              } else {
                e.target.style.border = "2px solid red";
              }
              setPassword(e.target.value);
            }}
          ></input>
          <input
            className="edit__input"
            placeholder="Confirm Password"
            type={"password"}
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              if (password !== e.target.value) {
                setUnmatch(true);
              } else {
                setUnmatch(false);
              }
            }}
          ></input>
          {unmatch ? (
            <p style={{ color: "red", fontSize: "12px" }}>
              Passwords don't match
            </p>
          ) : (
            ""
          )}
        </div>
        <button
          className="button__primary"
          style={{ width: "100px", borderRadius: "5px" }}
          onClick={() => handleRegister()}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
