import React from "react";
import { Row, Container, ImageContainer } from "../styles/styles";
import styled from "styled-components/macro";
import fotoBN from "../images/FOTO_BN.JPG";

const About = () => {
  return (
    <Container id="About">
      <AboutTitle>About me</AboutTitle>
      <Row>
        <PhotoContainer>
          <img src={fotoBN} alt="Foto Santiago" />
        </PhotoContainer>
        <Profile>
          <p>Hey I'm Santiago</p>
          <br />
          <p>
            Engineer with experience in data analysis and data quality. In 2020
            I started learning web development as a hobby, which led me to
            pursue a job in that area, as it is something that I enjoy.
            Therefore, I have learnt graphical interfaces design and development
            with tools like Javascript and React.
            <br />
            <br />I am characterized for being self-taught and always looking
            for new challenges, specially, when they push me into learning new
            things.
          </p>
        </Profile>
      </Row>
    </Container>
  );
};

const AboutTitle = styled.h1`
  font-weight: lighter;
  margin-bottom: 2rem;
  @media all and (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const Profile = styled.div`
  width: 60%;
  text-align: justify;
  font-size: 1.5rem;
  @media all and (max-width: 1300px) {
    font-size: 1.2rem;
  }
  @media all and (max-width: 1008px) {
    font-size: 1.1rem;
  }
  @media all and (max-width: 768px) {
    font-size: 1rem;
    width: 80%;
  }
`;

const PhotoContainer = styled(ImageContainer)`
  width: 30%;
  padding: 2rem;

  @media all and (max-width: 1008px) {
    width: 40%;
  }
  @media all and (max-width: 768px) {
    width: 60%;
  }
  @media all and (max-width: 550px) {
    width: 70%;
    padding: 2rem 1rem;
  }
  @media all and (max-width: 390px) {
    width: 80%;
    padding: 2rem 1rem;
  }
`;

export default About;
