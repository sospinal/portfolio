import React from "react";
import styled from "styled-components/macro";
import colors from "../constants/colors";
import { Container, Row } from "../styles/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  let iconSize = "2x";

  return (
    <GreenBlock>
      <FooterContainer>
        <FooterRow>
          <p>&#169; Santiago Ospina L &#127793; &#127795;</p>

          <IconsBox>
            <FontAwesomeIcon
              icon={faGithub}
              color={colors.boneWhite}
              size={iconSize}
              fixedWidth
            />
            <FontAwesomeIcon
              icon={faLinkedin}
              color={colors.boneWhite}
              size={iconSize}
              fixedWidth
            />
            <FontAwesomeIcon
              icon={faEnvelope}
              color={colors.boneWhite}
              size={iconSize}
              fixedWidth
            />
          </IconsBox>
        </FooterRow>
      </FooterContainer>
    </GreenBlock>
  );
};

const GreenBlock = styled.div`
  width: 100%;
  min-height: 10vh;
  background-color: ${colors.green};
  margin-top: 4rem;

  p {
    color: ${colors.boneWhite};
  }
`;

const FooterContainer = styled(Container)`
  padding-top: 0rem;
  padding-bottom: 0rem;
`;

const FooterRow = styled(Row)`
  justify-content: space-between;
  margin: 0;

  @media all and (max-width: 768px) {
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
`;

const IconsBox = styled.div`
  & > * {
    padding: 0.2rem;
  }
`;

export default Footer;
