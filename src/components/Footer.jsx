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
      <h2 className="h2-box"> Get In Touch </h2>

      <div className="footer-inside dynamic-scaling">
        <p className="footer-text">
          Want to have a chat over a cup of tea? Send me a message!
        </p>
        <br />
        <div className="footer-grid-container">
          <div className="footer-grid-cell">
            <a
              className="footer-a"
              href={"https://www.linkedin.com/in/" + linkedIn + "/"}
            >
              <img
                className="footer-icon-big"
                src={linkedInIcon}
                alt="LinkedIn Icon"
              />
              <br />
              LinkedIn
            </a>
          </div>
          <div className="footer-grid-cell ">
            <a className="footer-a" href={"mailto:" + email}>
              <img
                className="footer-icon-big"
                src={emailIcon}
                alt="Email Icon"
              />
              <br />
              Email
            </a>
          </div>
          <div className="footer-grid-cell">
            <a href={`tel:${phonenumber}`}>
              <img
                className="footer-icon-big"
                src={phoneIcon}
                alt="Phone Icon"
              />
              <br />
              {phonenumber}
            </a>
          </div>
        </div>
        <br />
        <a className="footer-copyright-link" href="http://www.freepik.com">
          Icons Designed by Freepik
        </a>
      </div>
    </div>
  );
}

export default Footer;

/* Old version, a bit stiffer and not as suited for phones.

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
*/
