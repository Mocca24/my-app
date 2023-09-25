import React from "react";
import Weather from "./Weather";
import "./Weather.css";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1> Weather App</h1>
        <Weather />
              <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/cynthia-alvez/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cynthia Alvez
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Mocca24/my-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://graceful-griffin-d70005.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
