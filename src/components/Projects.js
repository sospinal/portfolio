import React from "react";
import { ContainerBlock, Row } from "../styles/styles";
import { projectsInfo } from "../ProjectsInfo";
import Project from "./ProjectComponent";

const Projects = () => {
  return (
    <ContainerBlock>
      <Row>
        {projectsInfo.map((project) => {
          return <Project img={project.img} name={project.name} />;
        })}
      </Row>
    </ContainerBlock>
  );
};

export default Projects;
