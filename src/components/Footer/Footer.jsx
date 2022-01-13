import React from "react";
import NavItems from "../NavItems/NavItems";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsWhatsapp,
} from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left-div">
        <h2>CodeToScore</h2>
        <p className="footer-text">
          CodeChef SRM KTR Chapter is a non-proﬁt technical student’s club under
          the alliance of CodeChef,a product of Unacademy. Our main motive is to
          spread and promote competitive coding in our campus.
        </p>
      </div>
      <div className="footer-middle-div">
        <NavItems link="#prizes" text="Prizes" />
        <NavItems link="#schedule" text="Schedule" />
        <NavItems link="#sponsors" text="Sponsors" />
        <NavItems link="#faqs" text="FAQ's" />
        <NavItems link="#aboutEvent" text="About" />
      </div>
      <div className="footer-right-div">
        <h3 className="social-links">Social Links</h3>
        <div className="s-media-icons-div">
          <a href="https://www.facebook.com/CodeChefSRM/">
            <BsFacebook className="s-media-icon" />
          </a>
          <a href="https://www.instagram.com/codechefsrm/?hl=en">
            <BsInstagram className="s-media-icon" />
          </a>
          <a href="https://twitter.com/codechefsrm">
            <BsTwitter className="s-media-icon" />
          </a>
          <a href="https://in.linkedin.com/company/ccscsrm">
            <BsLinkedin className="s-media-icon" />
          </a>
          <a href="mailto:codechefsrm@gmail.com">
            <FiMail className="s-media-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
