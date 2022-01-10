import React from "react";
import NavItems from "../NavItems/NavItems";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter, BsWhatsapp } from "react-icons/bs";
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
          <NavItems link="/home" text="Schedule"/>
          <NavItems link="#sponsors" text="Sponsors"/>
          <NavItems link="/home" text="FAQ's"/>
          <NavItems link="#aboutEvent" text="About"/>
      </div>
      <div className="footer-right-div">
        <h3 className="social-links">Social Links</h3>
        <div className="s-media-icons-div">
          <BsFacebook className="s-media-icon"/>
          <BsInstagram className="s-media-icon"/>
          <BsTwitter className="s-media-icon"/>
          <BsLinkedin className="s-media-icon"/>
          <BsWhatsapp className="s-media-icon"/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
