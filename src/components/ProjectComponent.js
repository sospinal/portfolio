import React from "react";
import styled from "styled-components/macro";
import colors from "../constants/colors";

const Project = ({ img, name, description, url }) => {
  return (
    <ImageContainer>
      <Image src={img} alt={name} />

      <a href={url} target="_blank" rel="noreferrer">
        <Description>
          <h3>{description.header}</h3>
          <br />
          <p>{description.body}</p>
        </Description>
      </a>
    </ImageContainer>
  );
};

const ImageContainer = styled.div`
  display: flex;
  width: 25%;
  min-width: 150px;
  position: relative;
  @media all and (max-width: 768px) {
    width: 60%;
    margin: 2rem 0rem;
  }
  @media all and (max-width: 576px) {
    width: 80%;
  }
`;

const Description = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00000088;
  border-radius: 10px;
  color: ${colors.boneWhite};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 2rem;
  z-index: 2;
  visibility: hidden;
  object-fit: cover;

  &:hover {
    visibility: visible;
  }

  @media all and (min-width: 1008px) {
    font-size: 1rem;
    h3 {
      font-size: 1.4rem;
    }
  }

  @media all and (max-width: 1008px) {
    padding: 1rem;
  }

  @media all and (max-width: 840px) {
    font-size: 0.9rem;
    h3 {
      font-size: 1.2rem;
    }
  }

  @media all and (max-width: 768px) {
    height: 100%;
    padding-bottom: 4rem;
    font-size: 1.2rem;
    h3 {
      font-size: 2rem;
    }
  }

  @media all and (max-width: 400px) {
    font-size: 1rem;
    h3 {
      font-size: 1.2rem;
    }
  }
`;

const Image = styled.img`
  border-radius: 10px;
  height: auto;
  width: 100%;
  object-fit: cover;
  cursor: pointer;
  &:hover + a ${Description} {
    visibility: visible;
  }
`;

export default Project;
