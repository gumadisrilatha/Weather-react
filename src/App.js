import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Vienna" />
        <footer>
          This project was coded by Billa Srilatha and is {""}
          <a
            href="https://github.com/gumadisrilatha/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            open-source on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
