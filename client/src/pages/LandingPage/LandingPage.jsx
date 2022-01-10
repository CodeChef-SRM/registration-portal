import React from "react";

import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Card/Card";
import sponsor from "../../assets/img/sponsor.png";
import FaqList from "../../components/FaqList/FaqList";
import Footer from "../Footer/Footer";
import Timeline from "../../components/Timeline/Timeline";
import "./LandingPage.css";

function LandingPage() {
  const que1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec egestas nulla ?"; 
  const ans1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec egestas nulla. Vestibulum fringilla vestibulum metus, vitae congue lacus hendrerit eu. Nulla ut arcu et erat convallis cursus. Sed velit urna, dictum sollicitudin mi quis, consectetur blandit sapien. Vivamus auctor quis mi non vulputate. Mauris pulvinar bibendum dui, et rhoncus sapien ultrices non. Duis faucibus cursus fringilla.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec egestas nulla. Vestibulum fringilla vestibulum metus, vitae congue lacus hendrerit eu. Nulla ut arcu et erat convallis cursus. Sed velit urna, dictum sollicitudin mi quis, consectetur blandit sapien. Vivamus auctor quis mi non vulputate. Mauris pulvinar bibendum dui, et rhoncus sapien ultrices non. Duis faucibus cursus fringilla."
  return (
    <div className="main-div">
      <Navbar />

      {/* HEADING */}

      <div className="heading-div">
        <h1 className="heading">CodeToScore</h1>
      </div>

      {/* ABOUT EVENT */}

      <div className="about-event" id="aboutEvent">
        <h2 className="section-heading">About the Event</h2>
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
        <h2 className="section-heading">Schedule</h2>
        <Timeline />
      </div>

      {/* PRIZES */}
      <div className="prizes" id="prizes">
        <h2 className="section-heading">Prizes</h2>
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

      <div className="sponsors-div" id="sponsors">
        <h2 className="section-heading">Sponsors</h2>
        <div className="sponsors-top-div">
          <img src={sponsor} alt="sponsor" className="sponsor-icon" />
          <img src={sponsor} alt="sponsor" className="sponsor-icon" />
          <img src={sponsor} alt="sponsor" className="sponsor-icon" />
        </div>
        <div className="sponsors-bottom-div">
          <img src={sponsor} alt="sponsor" className="sponsor-icon" />
          <img src={sponsor} alt="sponsor" className="sponsor-icon" />
          <img src={sponsor} alt="sponsor" className="sponsor-icon" />
        </div>
      </div>

      {/* FAQ's */}

      <div className="faqs" id="faqs">
        <h2 className="section-heading">FAQ's</h2>
        <div className="faqs-list-div">
          <FaqList que={que1} ans={ans1}/>
          <FaqList que={que1} ans={ans1}/>
          <FaqList que={que1} ans={ans1}/>
          <FaqList que={que1} ans={ans1}/>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default LandingPage;
