import React, { useEffect } from "react";
import { useState, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faTornado } from "@fortawesome/free-solid-svg-icons";

const apikey = "a0e06dc3fac6fc5e38dbefcf8b410bcd";
const apicall =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&appid=";
const Weather = () => {
  const [state, setState] = useState();
  const [desc, SetDesc] = useState();
  const inputref = useRef();
  const descref = useRef();
  const show = useRef();
  const titleshow = useRef();
  const boximage = useRef();
  const focus = () => {
    weathercheck(inputref.current.value);
    descref.current.style.animation = "appear 2s";
    descref.current.style.display = "flex";
    titleshow.current.style.display = "flex";
    titleshow.current.style.animation = "appear 2s";
    show.current.style.display = "flex";
    show.current.style.animation = "appear 2s";
  };
  async function weathercheck(city) {
    let data = await fetch(`${apicall}` + `${apikey}` + `&q=${city}`);
    const datasheet = await data.json();
    document.querySelector("#titleweather").innerHTML =
      datasheet.weather[0].main;
    setState(datasheet.weather[0].main);
    document.querySelector("#temp").innerHTML =
      Math.round(datasheet.main.temp) + "°C";
    document.querySelector("#wind").innerHTML = datasheet.wind.speed + "m/s";
    SetDesc(datasheet.weather[0].description);
  }
  weathercheck();

  const iconchange = () => {
    if (state === "Clouds") {
      return (
        <FontAwesomeIcon
          icon={faCloud}
          style={{ color: "#ffffff" }}
          size="6x"
        />
      );
    }
    if (state === "Clear") {
      titleshow.current.style.display = "flex";
      titleshow.current.style.animation = "appear 2s";
      show.current.style.display = "flex";
      show.current.style.animation = "appear 2s";

      return (
        <FontAwesomeIcon icon={faSun} style={{ color: "#ffffff" }} size="6x" />
      );
    }
    if (state === "Tornado") {
      titleshow.current.style.display = "flex";
      titleshow.current.style.animation = "appear 2s";
      show.current.style.display = "flex";
      show.current.style.animation = "appear 2s";

      return (
        <FontAwesomeIcon
          icon={faTornado}
          style={{ color: "#ffffff" }}
          size="6x"
        />
      );
    }
    if (state === "Ash") {
      titleshow.current.style.display = "flex";
      titleshow.current.style.animation = "appear 2s";
      show.current.style.display = "flex";
      show.current.style.animation = "appear 2s";

      return (
        <FontAwesomeIcon icon={faSun} style={{ color: "#ffffff" }} size="6x" />
      );
    }
  };

  return (
    <div id="box">
      <div id="content-box" ref={boximage}>
        <div id="textbox">
          <div className="textbox-content">
            <form>
              <input
                ref={inputref}
                type="text"
                className="textboxcss"
                placeholder="Enter city name"
              ></input>
            </form>
            <button onClick={focus} id="searchbtn">
              Search
            </button>
          </div>
        </div>
        <div id="titlebox" ref={titleshow}>
          <div id="weatherimg">{iconchange()}</div>
          <div id="titleweather"></div>
        </div>
        <div ref={descref} id="cunt">
          <div id="description">{desc}</div>
        </div>
        <div id="main-content" ref={show}>
          <div id="wind"></div>
          <div id="temp"></div>
        </div>
      </div>
    </div>
  );
};
const selector = document.getElementsByClassName(".textboxcss");
const btn = document.getElementById("searchbtn");

export default Weather;
