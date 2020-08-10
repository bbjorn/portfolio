import React from "react";
import { getDesignPortfolio } from "./../services/fakeDesignService";
import "./../css/design.css";

function Design(props) {
  const designPortfolio = getDesignPortfolio();
  return (
    <div>{designPortfolio.map((value) => createDesignElement(value))}</div>
  );
}

function createDesignElement(designElement) {
  return (
    <div className="mainstyle-inner">
      <h2 className="h2-box"> {designElement.title} </h2>
      <div className="design-side-grid-container">
        <div className="design-side-left">
          <p> Date - {designElement.date}</p>
          <p> Problem - {designElement.problem}</p>
          <p> Design - {designElement.design}</p>
          <p> Role - {designElement.role}</p>
          <p>Responsibilities:</p>
          <ol>
            {designElement.responsibilities.map((value) => (
              <li>{value}</li>
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
    <React.Fragment>
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
      {designEntry.parts.map((value) => (
        <React.Fragment>
          <div style={{ order: -1 }}>
            <img
              src={value.image}
              alt={value.imageAlt}
              className="design-double-img"
            />
          </div>
          <div>
            {value.text.map((textvalue) => (
              <p>{textvalue}</p>
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
        <React.Fragment>
          <img
            src={value.image}
            alt={value.imageAlt}
            className="design-top-img"
          />
          {value.text.map((textvalue) => (
            <p>{textvalue}</p>
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
        <React.Fragment>
          <div className="design-side-left">
            {value.text.map((textvalue) => (
              <p>{textvalue}</p>
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
