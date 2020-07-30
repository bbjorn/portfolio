import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../css/navbar.css";

function Navbar(props) {
  return (
    <nav className="navbar">
      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/portfolio/start">
            Start
          </NavLink>
          <NavLink className="nav-item nav-link" to="/portfolio/aboutme">
            About Me
          </NavLink>
          <NavLink className="nav-item nav-link" to="/portfolio/design">
            Design Portfolio
          </NavLink>
          <NavLink className="nav-item nav-link" to="/portfolio/code">
            Code Portfolio
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
