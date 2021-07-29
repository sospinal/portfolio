import React from "react";
import styled from "styled-components/macro";

export const ContainerBlock = ({ children }) => {
  return <Container>{children}</Container>;
};

export const Container = styled.div`
  margin: auto;
  display: flex;
  padding: 3rem 6rem;
  flex-direction: column;
  text-align: center;
  @media all and (max-width: 1200px) {
    padding: 3rem 4rem;
  }
  @media all and (max-width: 1008px) {
    padding: 3rem 3rem;
  }
`;

export const Row = styled.div`
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  min-height: 20vh;
  @media all and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
