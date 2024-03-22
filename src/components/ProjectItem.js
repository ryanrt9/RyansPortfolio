import React from "react";
import { Image, Col, Row } from "react-bootstrap";
import "./ProjectItem.css";
// import RyanThomasSignature from "../images/RyanThomasSignatureLogo.png";

const ProjectItem = ({
  projectImage,
  projectTitle,
  projectDescription,
  projectGitHubBackend,
  // projectGitHubFrontend,
}) => {
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
        <h4>{projectGitHubBackend}</h4>
        {/* <h5>{projectGitHubFrontend}</h5> */}

      </Col>
    </Row>
  );
};

export default ProjectItem;
