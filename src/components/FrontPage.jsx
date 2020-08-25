import React from "react";
import { NavHashLink } from "react-router-hash-link";
import mesquare from "../img/mesquare.jpg";
import { getDesignPortfolio } from "./../services/fakeDesignService";
import mountains3d from "../img/3dmountainscropped.png";
import "../css/frontpage.css";
import "../index.css";

function FrontPage(props) {
  var { narrowScreen } = props;
  if (narrowScreen) return narrowFrontPage();
  return (
    <React.Fragment>
      <div className="mainstyle-inner">
        <div className="frontpage-grid-container">
          <div className="frontpagelefttop">
            <h1>Björn Bergqvist</h1>
            <h3 className="frontpage-h3">Interaction Design Graduate</h3>
          </div>
          <div className="frontpageleftbottom">
            <div></div>
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
      <div className="mainstyle-inner">
        <h2 className="h2-box"> Selected Examples </h2>
        <div className="frontpage-example-grid">{selectedExamples(true)} </div>
      </div>
    </React.Fragment>
  );
}

export default FrontPage;

function narrowFrontPage() {
  return (
    <React.Fragment>
      <div className="mainstyle-inner">
        <div>
          <img
            className="frontpage-image frontpage-image-narrow"
            src={mesquare}
            alt="A portrait of me"
          />
          <h1 className="center">Björn Bergqvist</h1>
          <h3 className="center">Interaction Design Graduate</h3>
        </div>
      </div>
      <div className="mainstyle-inner">
        <h2 className="h2-box"> Selected Examples </h2>
        {selectedExamples(true)}
      </div>
    </React.Fragment>
  );
}

function selectedExamples(wide) {
  const designPortfolio = getDesignPortfolio();
  const accessEntry = designPortfolio[2].entires[1].parts[1];
  const roboPopEntry = designPortfolio[0].entires[2].parts[0];
  return (
    <React.Fragment>
      <div className="frontpage-example">
        <NavHashLink
          exact
          to={{
            pathname: "/portfolio/design",
            hash: "#Access",
          }}
          smooth={true}
          duration={5000}
        >
          <img
            className="frontpage-example-image1"
            alt={accessEntry.imagealt}
            src={accessEntry.image}
          />
          <br />
          User Studies
        </NavHashLink>
      </div>
      <div className="frontpage-example">
        <NavHashLink
          exact
          to={{
            pathname: "/portfolio/code",
            hash: "#mountains",
          }}
          smooth={true}
          duration={2000}
        >
          <img
            className="frontpage-example-image2"
            alt="Procedurally generated mountains"
            src={mountains3d}
          />
          <br />
          Procedural Generation
        </NavHashLink>
      </div>
      <div className="frontpage-example">
        <NavHashLink
          exact
          to={{
            pathname: "/portfolio/design",
            hash: "#RoboPop",
          }}
          smooth={true}
          duration={2000}
        >
          <img
            className="frontpage-example-image2"
            alt={roboPopEntry.imagealt}
            src={roboPopEntry.image}
          />
          <br />
          Tangible Design
        </NavHashLink>
      </div>
    </React.Fragment>
  );
}
