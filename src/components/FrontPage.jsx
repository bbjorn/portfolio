import React from "react";
import mesquare from "../img/mesquare.jpg";
import "../css/frontpage.css";
import "../index.css";

function FrontPage(props) {
  return (
    <React.Fragment>
      <div className="mainstyle-inner">
        <div className="frontpage-grid-container">
          <div className="frontpagelefttop">
            <h1>Björn Bergqvist</h1>
            <h3 className="frontpage-h3">Interaction Design Graduate</h3>
          </div>
          <div className="frontpageleftbottom">
            <div>
              <h3>Portfolio</h3>
              <h3>Selected Examples</h3>
            </div>
          </div>
          <div className="frontpageright">
            <img
              className="frontpage-image"
              src={mesquare}
              alt="A portrait of me"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default FrontPage;
