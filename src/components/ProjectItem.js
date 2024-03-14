import React from "react";
import { Image, Col, Row } from "react-bootstrap";
import "./ProjectItem.css";

const ProjectItem = ({ projectImage, projectTitle, projectDescription }) => {
  return (
    <Row>
      <Col>
        <Image className="project-img" src={projectImage} roundedCircle />
      </Col>
      <Col>
        <h1>{projectTitle}</h1>
        <p>{projectDescription}</p>
      </Col>
    </Row>
  );
};

export default ProjectItem;
