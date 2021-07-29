import React from "react";
import styled from "styled-components/macro";

const Project = ({ img, name }) => {
  return (
    <ImageContainer>
      <img src={img} alt={name} />
    </ImageContainer>
  );
};

const ImageContainer = styled.div`
  display: flex;
  width: 25%;
  min-width: 150px;
  @media all and (max-width: 768px) {
    width: 60%;
    padding: 2rem 0rem;
  }
  @media all and (max-width: 576px) {
    width: 80%;
  }
  img {
    border-radius: 10px;
    height: auto;
    width: 100%;
    object-fit: cover;
  }
`;

export default Project;
