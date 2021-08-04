import React from "react";
import { Row } from "../styles/styles";
import { projectsInfo } from "../assets/ProjectsInfo";
import Project from "./ProjectComponent";

const Projects = () => {
  return (
    <Row>
      {projectsInfo.map((project) => {
        return (
          <Project img={project.img} name={project.name} key={project.name} />
        );
      })}
    </Row>
  );
};

export default Projects;
