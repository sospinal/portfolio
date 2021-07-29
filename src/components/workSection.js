import React from "react";
import styled from "styled-components";
import { Container } from "../styles/styles";
import Projects from "./Projects";

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
`;

export default Work;
