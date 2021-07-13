import React from "react";
//Global style
import GlobalStyle from "./components/GlobalStyle";
//Styles
import Container from "./styles/styles";
//Import components
import Nav from "./components/NavComponent";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <Container>
        <h1 style={{ margin: "auto", fontWeight: "lighter" }}>
          Some of my work
        </h1>
      </Container>
    </div>
  );
}

export default App;
