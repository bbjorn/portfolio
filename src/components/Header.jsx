import React from "react";
import "../css/header.css";

function Header(props) {
  const { name, position } = props;
  return (
    <div className="header">
      <h1 className="header-h1">{position}</h1>
      <h2 className="header-h2">{name}</h2>
    </div>
  );
}

export default Header;
