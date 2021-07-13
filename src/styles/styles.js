import React from "react";
import styled from "styled-components";

const Container = ({ children }) => {
  return <Row>{children}</Row>;
};

const Row = styled.div`
  margin: auto;
  display: flex;
  padding: 3rem 12rem;
  align-items: center;
  justify-content: space-between;
`;

export default Container;
