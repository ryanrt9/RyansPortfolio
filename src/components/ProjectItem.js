import React from "react";
import { Navbar, Image, Col, Row } from "react-bootstrap";
import "./ProjectItem.css";
import RyanThomasSignature from "../images/RyanThomasSignatureLogo.png";

const ProjectItem = ({ projectImage, projectTitle, projectDescription }) => {
  return (
    <Row>
      <Col>
      {/* <Navbar.Brand href="#home">
            <Image
              src={RyanThomasSignature}
              alt="Ryan Thomas Signature "
              // rounded
              id="ryan-signature"
              href="#home"
            ></Image>
            
          </Navbar.Brand> */}
        <Image className="project-img" src={projectImage} roundedCircle />
      </Col>
      <Col>
        <h1 class="projectTitle">{projectTitle}</h1>
        <p>{projectDescription}</p>
      </Col>
    </Row>
  );
};

export default ProjectItem;
