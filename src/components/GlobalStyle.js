import { createGlobalStyle } from "styled-components";
import colors from "../constants/colors";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    font-family: Georgia, 'Times New Roman', Times, serif;
    color: ${colors.darkGrey};
    background-color: ${colors.boneWhite};
  }
`;

export default GlobalStyle;
