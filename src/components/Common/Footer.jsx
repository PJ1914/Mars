import React from "react";
import fb from "../../assets/Icon/facebook-01.png";
import indeed from "../../assets/Icon/indeed-01.png";
import Insta from "../../assets/Icon/insta-01.png";
import mail from "../../assets/Icon/mail.png";
import X from "../../assets/Icon/twiter-01.png";
import Youtube from "../../assets/Icon/youtube-01.png";

import "./index.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer-container">
      <Link className="footer-icon" to={"#"}>
        <img src={Youtube} alt="" />
      </Link>
      <Link className="footer-icon" to={"#"}>
        <img src={indeed} alt="" />
      </Link>{" "}
      <Link className="footer-icon" to={"#"}>
        <img src={Insta} alt="" />
      </Link>{" "}
      <Link className="footer-icon" to={"#"}>
        <img src={X} alt="" />
      </Link>{" "}
      <Link className="footer-icon" to={"#"}>
        <img src={fb} alt="" />
      </Link>{" "}
      <Link className="footer-icon" to={"#"}>
        <img src={mail} alt="" />
      </Link>
    </div>
  );
};

export default Footer;
