import React from "react";
import styled from "styled-components";

export const ContainerBlock = ({ children }) => {
  return <Container>{children}</Container>;
};

export const Container = styled.div`
  margin: auto;
  display: flex;
  padding: 3rem 6rem;
  flex-direction: column;
`;

export const Row = styled.div`
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  min-height: 20vh;
`;
