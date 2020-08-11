import React from "react";
import { NavLink, Link, withRouter } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { getDesignPortfolio } from "./../services/fakeDesignService";
import "../css/navbar.css";

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-ul">
        <li className="navbar-li">
          <NavLink className="nav-item nav-link" exact to="/portfolio/">
            Start
          </NavLink>
        </li>
        <li className="navbar-li">
          <NavLink className="nav-item nav-link" exact to="/portfolio/aboutme">
            About Me
          </NavLink>
        </li>
        <li className="navbar-li">
          <NavLink className="nav-item nav-link" exact to="/portfolio/design">
            Design Portfolio
          </NavLink>
        </li>
        {window.location.pathname === "/portfolio/design" &&
          createDesignNavbar()}
        <li className="navbar-li">
          <NavLink className="nav-item nav-link" exact to="/portfolio/code">
            Code Portfolio
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

/* Shows navbar elements for each project in the design portfolio, only when veiwing the design portfolio. */
function createDesignNavbar() {
  const designPortfolio = getDesignPortfolio();
  return designPortfolio.map((value, index) => (
    <li className="navbar-li">
      <NavHashLink
        className="nav-item nav-link"
        exact
        to={{
          pathname: "/portfolio/design",
          hash: `#${value.titleNoSpace}`,
        }}
        spy={true}
        smooth={true}
        duration={10000}
        key={index}
        offset={700}
      >
        {value.title}
      </NavHashLink>
    </li>
  ));
}

export default withRouter(Navbar);
