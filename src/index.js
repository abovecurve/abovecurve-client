import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app/components";
import ReactGA from "react-ga";

// Init .env variables
require("dotenv").config();

// Only run analytics in production
if (process.env.GATRACKING) {
  ReactGA.initialize(process.env.GATRACKING);
  ReactGA.pageview(window.location.pathname + window.location.search);
}

/* 
  When using React Router see this guide for
  impmelemting Google Analytics
  https://github.com/react-ga/react-ga/wiki/React-Router-v4-withTracker
*/

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
