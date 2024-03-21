import React from "react";
import "./AboutMe.css";
import { Row, Col, Image } from "react-bootstrap";
import RyanImage from "../images/RyanThomasPortfolioPicture.png";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

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
            <h1 class="paragraph">Ryan Thomas</h1>
          </Row>
          <Row id="middle--right--middle">
            <h3 class="paragraph">Software Engineer</h3>
            <h5 class="paragraph">About Me</h5>
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
            <div class="paragraph" id="aboutMeIcons">
              <a
                id="aboutMeIcons"
                href="http://www.linkedin.com/in/ryan-r-thomas"
              >
                <FaLinkedin />
              </a>
              <a id="aboutMeIcons" href="https://github.com/ryanrt9">
                <FaGithubSquare />
              </a>
            </div>
          </Row>
          <Row id="middle--right--bottom">
            {/* <div id="aboutMeIcons">
              <a
                id="aboutMeIcons"
                href="http://www.linkedin.com/in/ryan-r-thomas"
              >
                <FaLinkedin />
              </a>
              <a id="aboutMeIcons" href="https://github.com/ryanrt9">
                <FaGithubSquare />
              </a>
            </div> */}
          </Row>
        </Col>
      </Row>
    </div>
  );
};
export default AboutMe;
