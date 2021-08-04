import React from "react";
//Global style
import GlobalStyle from "./components/GlobalStyle";
//Import components
import Nav from "./components/NavComponent";
import Work from "./components/workSection";
import About from "./components/aboutSection";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <Work />
      <About />
      <Footer />
    </div>
  );
}

export default App;
