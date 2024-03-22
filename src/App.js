import React from "react";
// import { BrowserRouter as Router, Route} from 'react-router-dom';
// import { Container } from 'react-bootstrap';
import MenuBar from "./components/MenuBar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

import "./App.css";
import { Row, Col } from "react-bootstrap";

const App = () => {
  return (
    <div className="App">
      <MenuBar></MenuBar>
      <AboutMe></AboutMe>
      <Projects></Projects>
      <Skills></Skills>
      <Contact></Contact>
      <Row id="bottom">
        <Col id="bottom--left"></Col>
        <Col id="bottom--middle">© 2024 Ryan Thomas. All Rights Reserved.</Col>
        <Col id="bottom--right"></Col>
      </Row>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
    </div>
  );
};

export default App;
