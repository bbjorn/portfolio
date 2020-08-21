import React, { Fragment } from "react";
import { getAboutMe } from "./../services/fakeAboutMeService";
import "./../css/aboutme.css";

function AboutMe(props) {
  var { narrowScreen } = props;
  const aboutMe = getAboutMe();
  return (
    <div className="mainstyle-inner">
      <div>
        <h2 className="h2-box">{aboutMe[0].title}</h2>
        {createAboutMeElement(aboutMe[0], narrowScreen)}
      </div>
      {aboutMeSplit(narrowScreen, aboutMe)}
    </div>
  );
}

function aboutMeSplit(narrowScreen, aboutMe) {
  if (narrowScreen)
    return (
      <Fragment>
        <div>
          <h2 className="h2-box">{aboutMe[1].title}</h2>
          {createAboutMeElement(aboutMe[1])}
        </div>
        <div>
          <h2 className="h2-box">{aboutMe[2].title}</h2>
          {createAboutMeElement(aboutMe[2])}
        </div>
      </Fragment>
    );
  return (
    <Fragment>
      <div className="aboutme-title-grid-container">
        <div className="aboutme-title-left">
          <h2 className="h2-box">{aboutMe[1].title}</h2>
        </div>
        <div className="aboutme-title-right">
          <h2 className="h2-box">{aboutMe[2].title}</h2>
        </div>
      </div>
      <div className="aboutme-grid-container">
        <div className="aboutme-left">{createAboutMeElement(aboutMe[1])}</div>
        <div className="aboutme-right">{createAboutMeElement(aboutMe[2])}</div>
      </div>
    </Fragment>
  );
}

function createAboutMeElement(aboutMeElem, narrowScreen) {
  if (aboutMeElem.image) {
    if (narrowScreen) {
      return (
        <div>
          <img
            src={aboutMeElem.image}
            alt={aboutMeElem.imageAlt}
            className="aboutMe-img"
          />
          {aboutMeElem.text.map((value, index) => {
            return <p key={index}>{value}</p>;
          })}
        </div>
      );
    }
    return (
      <div className="aboutme-img-grid-container">
        <div className="aboutme-img-left">
          {aboutMeElem.text.map((value, index) => {
            return <p key={index}>{value}</p>;
          })}
        </div>
        <div className="aboutme-img-right">
          <img
            src={aboutMeElem.image}
            alt={aboutMeElem.imageAlt}
            className="aboutMe-img"
          />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        {aboutMeElem.text.map((value, index) => {
          return <p key={index}>{value}</p>;
        })}
      </div>
    );
  }
}

export default AboutMe;
