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
        <Carousel>
          <Carousel.Item>
            <ProjectItem
              projectImage={CapstoneProject}
              projectTitle={"Meal Generator App"}
              projectDescription={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              }
            ></ProjectItem>
          </Carousel.Item>
          <Carousel.Item>
            <ProjectItem
              projectImage={WeatherReport}
              projectTitle={"Weather Report"}
              projectDescription={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              }
            ></ProjectItem>
          </Carousel.Item>
        </Carousel>
      </Row>
    </>
  );
};

export default Projects;
