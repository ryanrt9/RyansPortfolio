import RyanImage from './images/RyanThomasPortfolioPicture.png';
import './App.css';
import {Row, Col, Button, Image} from 'react-bootstrap'
import { FaGithubSquare, FaLinkedin} from "react-icons/fa";
import MenuBar from "./components/MenuBar"

const App = () => {
  return (
    <div className="App">
      <Row id="top">
        <MenuBar>
        </MenuBar>

      </Row>
      <Row id="middle">
        <Col id="middle--left">
          <Image
            src={RyanImage}
            alt="Ryan Thomas smiling"
            // rounded
            id="ryan-image"
          ></Image>
        </Col>
        <Col id="middle--right">
          <Row id="middle--right--top">
            <h1>Ryan Thomas (she/her)</h1>
          </Row>
          <Row id="middle--right--middle">
            <h2>Software Developer</h2>
            <h4>About Me</h4>
            <p>
            My journey into software development began as a natural extension of my desire to create impactful solutions. With a foundation in teaching, I bring a user-centric approach to my development projects, always striving to make technology accessible and user-friendly.
Whether it's crafting elegant code, designing intuitive interfaces, or explaining complex concepts in a way that's easy to understand, I thrive on the intersection between education and technology.

            </p>
          </Row>
          <Row id="middle--right--bottom">
          <Button id="resume-button" variant="dark">Resume</Button>
          </Row>
         
        </Col>

      </Row>
      <Row id="bottom">
        <Col id="bottom--left"></Col>
        <Col id="bottom--middle">Copyright 2024 Ryan Thomas</Col>
        <Col id="bottom--right"><FaGithubSquare /><FaLinkedin /></Col>

      </Row>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
     </div>
  );
}

export default App;
