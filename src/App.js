import React from "react";
import HeaderDate from "./HeaderDate";
import SearchEngine from "./SearchEngine";

import './App.css';
import './styles.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="WeatherApp">
          <HeaderDate />
          <SearchEngine defaultCity="Detroit" />

          <br />
          <footer>
            <strong>This project coded by Jennifer Griffin and is </strong> <nbsp />
            <a href="https://github.com/coderGriff66/new-weather-react-app1" target="_blank" rel="noreferrer"> Open-Sourced on GitHub</a>
            <br />
            <small>&emsp;Background Photo by www.paulvoie.com</small>
          </footer>
        </div>
      </div>
    </div>
  );
}

