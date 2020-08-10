import React from "react";
import { NavLink, Link, withRouter } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { getDesignPortfolio } from "./../services/fakeDesignService";
import "../css/navbar.css";

function Navbar(props) {
  return (
    <nav className="navbar">
      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" exact to="/portfolio/">
            Start
          </NavLink>
          <NavLink className="nav-item nav-link" exact to="/portfolio/aboutme">
            About Me
          </NavLink>
          <NavLink className="nav-item nav-link" exact to="/portfolio/design">
            Design Portfolio
          </NavLink>
          {window.location.pathname === "/portfolio/design" &&
            createDesignNavbar()}
          <NavLink className="nav-item nav-link" exact to="/portfolio/code">
            Code Portfolio
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

function createDesignNavbar() {
  const designPortfolio = getDesignPortfolio();
  return designPortfolio.map((value, index) => (
    <NavHashLink
      className="nav-item nav-link"
      exact
      to={{
        pathname: "/portfolio/design",
        hash: `#${value.titleNoSpace}`,
      }}
      key={index}
    >
      {value.title}
    </NavHashLink>
  ));
}

export default withRouter(Navbar);
