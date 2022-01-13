import React from "react";
import NavItems from "../NavItems/NavItems";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left-div">
        <h2>CodeToScore</h2>
        <p className="footer-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          nec egestas nulla. Vestibulum fringilla vestibulum metus, vitae congue
          lacus hendrerit eu. Nulla ut arcu et erat convallis cursus. Sed velit
          urna, dictum sollicitudin mi quis, consectetur blandit sapien. Vivamus
          auctor quis mi non vulputate. Mauris pulvinar bibendum dui, et rhoncus
          sapien ultrices non. Duis faucibus cursus fringilla.
        </p>
      </div>
      <div className="footer-middle-div">
          <NavItems link="#prizes" text="Prizes"/>
          <NavItems link="#schedule" text="Schedule"/>
          <NavItems link="#sponsors" text="Sponsors"/>
          <NavItems link="#faqs" text="FAQ's"/>
          <NavItems link="#aboutEvent" text="About"/>
      </div>
      <div className="footer-right-div">
        <h3 className="social-links">Social Links</h3>
        <div className="s-media-icons-div">
          <a href="https://www.facebook.com/CodeChefSRM/"><BsFacebook className="s-media-icon"/></a>
          <a href="https://www.instagram.com/codechefsrm/?hl=en"><BsInstagram className="s-media-icon"/></a>
          <a href="https://twitter.com/codechefsrm"><BsTwitter className="s-media-icon"/></a>
          <a href="https://in.linkedin.com/company/ccscsrm"><BsLinkedin className="s-media-icon"/></a>
          <a href="mailto:codechefsrm@gmail.com"><FiMail className="s-media-icon"/></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
