import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { getDesignPortfolio } from "./../services/fakeDesignService";
import "../css/navbar.css";

function Navbar(props) {
  const designPortfolio = getDesignPortfolio();
  return (
    <div className="navbar-sticky">
      <nav className="navbar">
        <NavLink className="nav-item" exact to="/portfolio/">
          Start
        </NavLink>
        <NavLink className="nav-item" exact to="/portfolio/aboutme">
          About Me
        </NavLink>
        <NavLink className="nav-item" exact to="/portfolio/design">
          Design Portfolio
        </NavLink>
        {window.location.pathname === "/portfolio/design" &&
          createDesignNavbar(designPortfolio)}
        <NavLink className="nav-item" exact to="/portfolio/code">
          Code Portfolio
        </NavLink>
      </nav>
    </div>
  );
}

/* Creates navlinks for all projects inside a portfolio.  */
function createDesignNavbar(portfolio) {
  return portfolio.map((value, index) => (
    <NavHashLink
      className="nav-item"
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
  ));
}

export default withRouter(Navbar);
