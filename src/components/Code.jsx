import React, { Fragment } from "react";
import mountains3d from "../img/3dmountainscropped.png";

function Code(props) {
  return (
    <Fragment>
      <div className="mainstyle-inner">
        <h2 className="h2-box">This Portfolio Website</h2>
        <p>
          I create this website based upon my old portfolio in order to teach
          myself how to code in react. The CSS and general design is the mostly
          same in both version, but old one use pure html. Right now the code
          portfolio is a bit barebones, but the plan is to add more features
          using external backends to this page. It has a github repository which
          can be found <a href="https://github.com/bbjorn/portfolio">here</a>.
        </p>
      </div>
      <div className="mainstyle-inner" id="mountains">
        <h2 className="h2-box">Procedurally Generated Mountains</h2>
        <p>
          This the results of a project I did in an advanced computer graphics
          course. It's a procedual generation, based upon a raymarching
          algorithm. The code is uploaded to a website called Shadertoy, and it
          can also render it live, which can be found{" "}
          <a href="https://www.shadertoy.com/view/XsKfzz">here</a>.
        </p>

        <a href="https://www.shadertoy.com/view/XsKfzz">
          <img
            alt="Procedurally generated mountains"
            src={mountains3d}
            width="100%"
          />
        </a>
      </div>
    </Fragment>
  );
}

export default Code;
