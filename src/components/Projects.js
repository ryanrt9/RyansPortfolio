import React from "react";
import { Carousel, Row } from "react-bootstrap";
import "./Projects.css";
import CapstoneProject from "../images/ello-AEU9UZstCfs-unsplash.jpg";
import ProjectItem from "./ProjectItem";
import WeatherReport from "../images/WeatherReport.png";

const Projects = () => {
  return (
    <>
      <Row>
        <Carousel variant="dark">
          <Carousel.Item>
            <ProjectItem
              projectImage={CapstoneProject}
              projectTitle={"Meal Generator App"}
              projectDescription={
                "An app to help you figure out your next meal. Code in GitHub."
              }
            ></ProjectItem>
          </Carousel.Item>
          <Carousel.Item>
            <ProjectItem
              projectImage={WeatherReport}
              projectTitle={"Weather Report"}
              projectDescription={
                "An app to get the weather in any city. Code in GitHub."
              }
            ></ProjectItem>
          </Carousel.Item>
        </Carousel>
      </Row>
    </>
  );
};

export default Projects;
