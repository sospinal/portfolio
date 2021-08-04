import React from "react";
import styled from "styled-components";
import { Container } from "../styles/styles";
import Projects from "./AllProjects";

const Work = () => {
  return (
    <Container>
      <WorkTitle>Some of my work</WorkTitle>
      <Projects />
    </Container>
  );
};

const WorkTitle = styled.h1`
  font-weight: lighter;
  margin-bottom: 4rem;
  @media all and (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

export default Work;
