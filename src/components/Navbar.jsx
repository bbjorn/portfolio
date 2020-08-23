import React from "react";
import { NavLink, Link, withRouter } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { getDesignPortfolio } from "./../services/fakeDesignService";
import "../css/navbar.css";
import { Fragment } from "react";

function Navbar(props) {
  return (
    <div className="navbar-sticky">
      <nav className="navbar">
        <ul className="navbar-ul">
          <li className="navbar-li">
            <NavLink className="nav-item nav-link" exact to="/portfolio/">
              Start
            </NavLink>
          </li>
          <li className="navbar-li">
            <NavLink
              className="nav-item nav-link"
              exact
              to="/portfolio/aboutme"
            >
              About Me
            </NavLink>
          </li>
          <li className="navbar-li">
            <NavLink className="nav-item nav-link" exact to="/portfolio/design">
              Design Portfolio
            </NavLink>
          </li>
          <li className="navbar-li">
            <NavLink className="nav-item nav-link" exact to="/portfolio/code">
              Code Portfolio
            </NavLink>
          </li>
        </ul>
      </nav>
      {window.location.pathname === "/portfolio/design" && createDesignNavbar()}
    </div>
  );
}

/* Shows navbar elements for each project in the design portfolio, only when veiwing the design portfolio. */
function createDesignNavbar() {
  const designPortfolio = getDesignPortfolio();
  return (
    <nav className="navbar">
      <ul className="navbar-ul">
        {designPortfolio.map((value, index) => (
          <li className="navbar-li" key={index * -1}>
            <NavHashLink
              className="nav-item nav-link"
              exact
              to={{
                pathname: "/portfolio/design",
                hash: `#${value.titleNoSpace}`,
              }}
              smooth={true}
              duration={1000}
              key={index}
            >
              {value.title}
            </NavHashLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default withRouter(Navbar);
