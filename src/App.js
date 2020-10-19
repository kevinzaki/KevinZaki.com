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
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
