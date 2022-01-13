import React from "react";

import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Card/Card";
import password from "../../assets/img/password250.png"
import Careernaksha from "../../assets/img/Careernaksha.png"
import InterviewBuddy from "../../assets/img/InterviewBuddy.png"
import scriptFoundation from "../../assets/img/scriptFoundation250.png"
import sponsorGMC from "../../assets/img/sponsorGMC.png"
import Taskade from "../../assets/img/Taskade.png"
import Voiceflow from "../../assets/img/Voiceflow.png"
import FaqList from "../../components/FaqList/FaqList";
import Footer from "../../components/Footer/Footer";
import Timeline from "../../components/Timeline/Timeline";
import faqListData from "../../assets/js/FaqListData";
import "./LandingPage.css";
import Alert from "../../components/Alert/Alert";

function LandingPage() {
  return (
    <div className="main-div">
      <Navbar />

      {/* HEADING */}

      <div className="heading-div">
        <h1 className="heading">CodeToScore</h1>
      </div>

      {/* ABOUT EVENT */}

      <div className="about-event">
        <h2 className="section-heading" id="aboutEvent">
          About the Event
        </h2>
        <div className="aboutEvent-topDiv">
          <p className="about-event-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            nec egestas nulla. Vestibulum fringilla vestibulum metus, vitae
            congue lacus hendrerit eu. Nulla ut arcu et erat convallis cursus.
            Sed velit urna, dictum sollicitudin mi quis, consectetur blandit
            sapien. Vivamus auctor quis mi non vulputate. Mauris pulvinar
            bibendum dui, et rhoncus sapien ultrices non. Duis faucibus cursus
            fringilla. Donec in molestie mi, at sagittis nisl. Vivamus et odio
            nec arcu eleifend tempus ac sed ex. Vestibulum at pretium nunc, sed
            venenatis odio. Cras est sapien, aliquam non viverra in, sodales ut
            odio. Nulla sodales dapibus maximus. Proin a convallis tortor.
            Vestibulum pulvinar elit eu diam faucibus, consectetur dignissim
            ante posuere.
          </p>
          <p className="about-event-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            nec egestas nulla. Vestibulum fringilla vestibulum metus, vitae
            congue lacus hendrerit eu. Nulla ut arcu et erat convallis cursus.
            Sed velit urna, dictum sollicitudin mi quis, consectetur blandit
            sapien. Vivamus auctor quis mi non vulputate. Mauris pulvinar
            bibendum dui, et rhoncus sapien ultrices non. Duis faucibus cursus
            fringilla. Donec in molestie mi, at sagittis nisl. Vivamus et odio
            nec arcu eleifend tempus ac sed ex. Vestibulum at pretium nunc, sed
            venenatis odio. Cras est sapien, aliquam non viverra in, sodales ut
            odio. Nulla sodales dapibus maximus. Proin a convallis tortor.
            Vestibulum pulvinar elit eu diam faucibus, consectetur dignissim
            ante posuere.
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
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec egestas nulla. Vestibulum fringilla vestibulum metus, vitae congue lacus hendrerit eu."
          />
          <Card
            number="2"
            postfix="nd"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec egestas nulla. Vestibulum fringilla vestibulum metus, vitae congue lacus hendrerit eu."
          />
          <Card
            number="3"
            postfix="rd"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec egestas nulla. Vestibulum fringilla vestibulum metus, vitae congue lacus hendrerit eu."
          />
        </div>
      </div>

      {/* SPONSORS */}

      <div className="sponsors-div">
        <h2 className="section-heading" id="sponsors">
          Sponsors
        </h2>
        <div className="sponsors-top-div">
          <img src={Taskade} alt="sponsor" className="sponsor-icon"/>
          <img src={scriptFoundation} alt="sponsor" className="sponsor-icon" id="scriptFoundations" />
          <img src={password} alt="sponsor" className="sponsor-icon" />
          <img src={Voiceflow} alt="sponsor" className="sponsor-icon" id="voiceflow"/>
        </div>
        <div className="sponsors-bottom-div">
          <img src={InterviewBuddy} alt="sponsor" className="sponsor-icon" id="interviewBuddy" />
          <img src={Careernaksha} alt="sponsor" className="sponsor-icon" id="careernaksha"/>
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

export default LandingPage;
