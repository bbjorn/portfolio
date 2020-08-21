import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FrontPage from "./components/FrontPage";
import AboutMe from "./components/AboutMe";
import Code from "./components/Code";
import Design from "./components/Design";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import "./css/textstyles.css";
import "./App.css";
import useWindowDimensions from "./components/common/useWindowDimensions";

function App() {
  const { height, width } = useWindowDimensions();
  var aspectRatio = width / height;
  const breakpoint = 0.8;
  var narrowScreen = aspectRatio < breakpoint;
  return (
    <React.Fragment>
      <div className="container">
        <div className="main">
          <Header
            position="Interaction Designer and Developer"
            name="Björn Bergqvist"
          />
          <Navbar />

          <main className="mainstyle-outer dynamic-scaling">
            <Switch>
              <Route
                path="/portfolio/design"
                component={() => <Design narrowScreen={narrowScreen} />}
              />
              <Route path="/portfolio/code" component={Code} />
              <Route
                path="/portfolio/aboutme"
                component={() => <AboutMe narrowScreen={narrowScreen} />}
              />
              <Route path="/portfolio/notfound" component={NotFound} />
              <Route
                path="/portfolio/"
                exact
                component={() => <FrontPage narrowScreen={narrowScreen} />}
              />

              <Redirect
                from="/portfolio/index.html"
                exact
                to="/portfolio/start"
              />
              <Redirect from="/portfolio/" exact to="/portfolio/start" />
              <Redirect to="/portfolio/notfound" />
            </Switch>
          </main>
        </div>
      </div>
      <Footer
        linkedIn="bjrn-bergquist"
        email="bjrn.bergqvist@gmail.com"
        phonenumber="(+46) 073-3809927"
      />
    </React.Fragment>
  );
}

export default App;

/*
header
navbar
switch -> welcome / about me / design / code
footer
*/
