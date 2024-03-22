import React from "react";
import { Carousel, Row } from "react-bootstrap";
import "./Projects.css";
import CapstoneProject from "../images/ello-AEU9UZstCfs-unsplash.jpg";
import ProjectItem from "./ProjectItem";
import WeatherReport from "../images/WeatherReport.png";

const Projects = () => {
  return (
    <>
      <Row id="projects">
        <Carousel variant="dark">
          <Carousel.Item>
            <ProjectItem
              class="projectItem"
              projectImage={CapstoneProject}
              projectTitle={"Meal Generator App"}
              projectDescription={
                "Bon-Appetype is an exciting coding project aiming to change how we discover recipes. It's a full-stack web application that brings together both the Frontend and Backend smoothly, creating a user-friendly space for finding personalized recipes based on what ingredients you have. With a mix of Python, JavaScript, CSS, and HTML, the project ensures a seamless experience for users. What's cool is that Bon-Appetype uses RESTful CRUD routes, making it quick and responsive when fetching data from external APIs. Plus, it's built with modern tools like React, Firebase, and Heroku, showing its commitment to staying at the forefront of web development. You can easily save, like, and remove recipes, making your cooking journey more tailored and flexible. Code in GitHub."
              }
              projectGitHubBackend={
                <a
                  class="gitHub"
                  href="https://github.com/ryanrt9/meal_generator_backend"
                >
                  Backend Repo
                </a>
              }
              // projectGitHubFrontEnd={
              //   <a href="https://github.com/chemtecher/meal_generator2_front_end">
              //     Frontend Repo
              //   </a>
              // }
            ></ProjectItem>
          </Carousel.Item>
          <Carousel.Item>
            <ProjectItem
              projectImage={WeatherReport}
              projectTitle={"Weather Report"}
              projectDescription={
                "Weather Report is a clever coding project that gives you accurate weather forecasts for different cities. With its user-friendly interface made with JavaScript, CSS, and HTML, you can easily check the weather in any location. It uses a weather API to ensure you get real-time updates and reliable information. Just input your city, and you'll instantly receive a detailed weather report. Weather Report makes it simple to stay informed about weather patterns worldwide with its intuitive design and seamless integration. Code in GitHub."
              }
              projectGitHubBackend={
                <a
                  class="gitHub"
                  href="https://github.com/ryanrt9/weather-report"
                >
                  Backend Repo
                </a>
              }
            ></ProjectItem>
          </Carousel.Item>
        </Carousel>
      </Row>
    </>
  );
};

export default Projects;
