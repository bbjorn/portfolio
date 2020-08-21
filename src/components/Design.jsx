import React from "react";
import { getDesignPortfolio } from "./../services/fakeDesignService";
import "./../css/design.css";

function Design(props) {
  var { narrowScreen } = props;
  const designPortfolio = getDesignPortfolio();
  if (narrowScreen)
    return (
      <div>
        {designPortfolio.map((value) => createDesignElementNarrow(value))}
      </div>
    );
  return (
    <div>{designPortfolio.map((value) => createDesignElement(value))}</div>
  );
}

function createDesignElementNarrow(designElement) {
  return (
    <div className="mainstyle-inner" key={designElement._id}>
      <div className="design-anchor" id={designElement.titleNoSpace} />
      <h2 className="h2-box"> {designElement.title} </h2>
      <div className="design-top-grid-container">
        <img
          src={designElement.image}
          alt={designElement.imageAlt}
          className="design-side-img"
        />
        {designElement.imagecredit && (
          <p className="design-credit"> {designElement.imagecredit}</p>
        )}

        <p> Date - {designElement.date}</p>
        <p> Problem - {designElement.problem}</p>
        <p> Design - {designElement.design}</p>
        <p> Role - {designElement.role}</p>
        <p>Responsibilities:</p>
        <ol>
          {designElement.responsibilities.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ol>
      </div>
      <div className="design-side-right"></div>

      {designElement.entires.map((value) => (
        <React.Fragment key={value._id}>
          <h2 className="h2-box">
            {designElement.title + " - " + value.title}{" "}
          </h2>
          {createDesignEntryTop(value)}
        </React.Fragment>
      ))}
    </div>
  );
}

function createDesignElement(designElement) {
  return (
    <div className="mainstyle-inner" key={designElement._id}>
      <div className="design-anchor" id={designElement.titleNoSpace} />
      <h2 className="h2-box"> {designElement.title} </h2>
      <div className="design-side-grid-container">
        <div className="design-side-left">
          <p> Date - {designElement.date}</p>
          <p> Problem - {designElement.problem}</p>
          <p> Design - {designElement.design}</p>
          <p> Role - {designElement.role}</p>
          <p>Responsibilities:</p>
          <ol>
            {designElement.responsibilities.map((value, index) => (
              <li key={index}>{value}</li>
            ))}
          </ol>
        </div>
        <div className="design-side-right">
          <img
            src={designElement.image}
            alt={designElement.imageAlt}
            className="design-side-img"
          />
          {designElement.imagecredit && (
            <p className="design-credit"> {designElement.imagecredit}</p>
          )}
        </div>
      </div>
      {designElement.entires.map((value) =>
        createDesignEntry(value, designElement.title)
      )}
    </div>
  );
}

function createDesignEntry(designEntry, title) {
  return (
    <React.Fragment key={designEntry._id}>
      <h2 className="h2-box"> {title + " - " + designEntry.title} </h2>
      {designEntry.layout === "double" && createDesignEntryDouble(designEntry)}
      {designEntry.layout === "top" && createDesignEntryTop(designEntry)}
      {designEntry.layout === "side" && createDesignEntrySide(designEntry)}
    </React.Fragment>
  );
}

function createDesignEntryDouble(designEntry) {
  return (
    <div className="design-double-grid-container">
      {designEntry.parts.map((value, index) => (
        <React.Fragment key={index}>
          <div style={{ order: -1 }}>
            <img
              src={value.image}
              alt={value.imageAlt}
              className="design-double-img"
            />
          </div>
          <div>
            {value.text.map((textvalue, index) => (
              <p key={index}>{textvalue}</p>
            ))}
            {value.link && <a href={value.link}>{value.link}</a>}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

function createDesignEntryTop(designEntry) {
  return (
    <div className="design-top-grid-container">
      {designEntry.parts.map((value) => (
        <React.Fragment key={value._id}>
          <img
            src={value.image}
            alt={value.imageAlt}
            className="design-top-img"
          />
          {value.text.map((textvalue, index) => (
            <p key={index}>{textvalue}</p>
          ))}
          {value.link && <a href={value.link}>{value.link}</a>}
        </React.Fragment>
      ))}
    </div>
  );
}

function createDesignEntrySide(designEntry) {
  return (
    <div className="design-side-grid-container">
      {designEntry.parts.map((value) => (
        <React.Fragment key={value._id}>
          <div className="design-side-left">
            {value.text.map((textvalue, index) => (
              <p key={index}>{textvalue}</p>
            ))}
            {value.link && <a href={value.link}>{value.link}</a>}
          </div>
          <div className="design-side-right">
            <img
              src={value.image}
              alt={value.imageAlt}
              className="design-side-img"
            />
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

export default Design;
