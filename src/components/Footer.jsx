import React from "react";
import "../css/footer.css";
import "../index.css";
import "../css/textstyles.css";
import linkedInIcon from "../img/contacticons/LI-In-Bug.png";
import emailIcon from "../img/contacticons/email.png";
import phoneIcon from "../img/contacticons/phone.png";

function Footer(props) {
  const { email, linkedIn, phonenumber } = props;
  return (
    <div className="footer">
      <h2 className="h2-box"> Contact </h2>
      <ul className="footer-inside dynamic-scaling">
        <li>
          <a
            className="footer-li"
            href={"https://www.linkedin.com/in/" + linkedIn + "/"}
          >
            <img
              className="footer-icon"
              src={linkedInIcon}
              alt="LinkedIn Icon"
            />
            LinkedIn
          </a>
        </li>
        <li>
          <a className="footer-li" href={"mailto:" + email}>
            <img className="footer-icon" src={emailIcon} alt="Email Icon" />
            Email
          </a>
        </li>
        <li className="footer-li footer-text">
          <img className="footer-icon" src={phoneIcon} alt="Phone Icon" />
          {phonenumber}
        </li>
        <a className="footer-copyright-link" href="http://www.freepik.com">
          Icons Designed by Freepik
        </a>
      </ul>
    </div>
  );
}

export default Footer;
