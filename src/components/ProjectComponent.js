import React from "react";
import styled from "styled-components";

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
  img {
    border-radius: 10px;
    height: auto;
    width: 100%;
    object-fit: cover;
  }
`;

export default Project;
