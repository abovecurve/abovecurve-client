import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import BarChart from './app/visualization/BarChart';
import DeathBySexState from './app/visualization/DeathBySexState';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
