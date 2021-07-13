import React from "react";
//Global style
import GlobalStyle from "./components/GlobalStyle";
//Import components
import Nav from "./components/NavComponent";
import Work from "./components/workSection";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <Work />
    </div>
  );
}

export default App;
