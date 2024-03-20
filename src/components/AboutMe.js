import React from "react";
import "./AboutMe.css";
import { Row, Col, Image } from "react-bootstrap";
import RyanImage from "../images/RyanThomasPortfolioPicture.png";

const AboutMe = () => {
  return (
    <div>
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
            <h2>Software Engineer</h2>
            <h4>About Me</h4>
            <p class="paragraph">
              My journey into software development began as a natural extension
              of my desire to create impactful solutions. With a foundation in
              teaching, I bring a user-centric approach to my development
              projects, always striving to make technology accessible and
              user-friendly. Whether it's crafting elegant code, designing
              intuitive interfaces, or explaining complex concepts in a way
              that's easy to understand, I thrive on the intersection between
              education and technology.
            </p>
          </Row>
          {/* <Row id="middle--right--bottom">
            <Button id="resume-button" variant="dark">
              Resume
            </Button>
          </Row> */}
        </Col>
      </Row>
    </div>
  );
};
export default AboutMe;
