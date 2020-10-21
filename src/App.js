import React from "react";
import "./styles/App.css";
import Navigation from "./Pages/Navigation";
import Introduction from "./Pages/Introduction";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Connect from "./Pages/Connect";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Introduction />
      <About />
      <Portfolio />
      <Connect />
    </div>
  );
}

export default App;
