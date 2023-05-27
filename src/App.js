import React from "react";
import Weather from "./Weather";

const App = () => {
  return (
    <div>
      <div id="main-box">
        <div id="header">
          <div id="logo">
            <img
              id="owl"
              src="https://openweathermap.org/themes/openweathermap/assets/img/mobile_app/android-app-top-banner.png"
            />
          </div>
          <div id="title">
            <span id="logoName">Open Weather</span>
          </div>
        </div>
        <Weather />
      </div>
    </div>
  );
};

export default App;
