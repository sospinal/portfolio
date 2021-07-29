import React from "react";
import styled from "styled-components/macro";
import colors from "../constants/colors";

const Nav = () => {
  return (
    <header>
      <StyledNav>
        <h2>
          Santiago <span>Ospina</span>
        </h2>
        <ul>
          <li>About</li>
          <li>Resume</li>
        </ul>
      </StyledNav>
    </header>
  );
};

//Styling
const StyledNav = styled.nav`
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 3.5rem 12rem 2rem 12rem;
  align-items: center;
  @media all and (max-width: 1200px) {
    padding: 3.5rem 9rem 2rem 9rem;
  }
  @media all and (max-width: 1008px) {
    padding: 3.5rem 6rem 2rem 6rem;
  }

  h2 {
    font-size: 2rem;
    span {
      color: ${colors.anotherGrey};
      font-size: 80%;
      font-weight: lighter;
    }
    &:hover {
      color: ${colors.green};
      span {
        color: ${colors.anotherGrey};
      }
    }
  }

  ul {
    list-style: none;
    display: flex;
  }

  li {
    padding-left: 2rem;
    font-size: 1.2rem;
    &:hover {
      color: ${colors.green};
    }
  }
`;

export default Nav;
