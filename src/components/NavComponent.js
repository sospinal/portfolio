import React from "react";
import styled from "styled-components/macro";
import colors from "../constants/colors";

const Nav = () => {
  const smoothScroll = (e) => {
    e.preventDefault();
    document.getElementById("About").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header>
      <StyledNav>
        <h2>
          Santiago <span>Ospina</span>
        </h2>
        <ul>
          <li>
            <a onClick={smoothScroll} href="#About">
              About
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1WUm-B-blxa37_mi6W7jZNsOGytt5N-xD/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </li>
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
  @media all and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 3.5rem 6rem 0rem 6rem;
    h2 {
      padding-bottom: 1rem;
      text-align: center;
    }
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
    @media all and (max-width: 768px) {
      padding: 1rem;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default Nav;
