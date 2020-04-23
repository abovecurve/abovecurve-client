import React, { Component } from "react";
import { PageView, initGA, Event } from "../../tracking";
import axios from "../../utils/axios";
import logo from "../assets/logo.svg";
import "./app.css";
const { GATRACKING } = process.env;

// Init .env variables
require("dotenv").config();

/* 
  When using React Router see this guide for
  impmelemting Google Analytics
  https://github.com/react-ga/react-ga/wiki/React-Router-v4-withTracker
*/

class App extends Component {
  state = {
    data: "",
  };
  componentDidMount = () => {
    // custom axios uses env specific base path
    // LOCAL_API="http://localhost:4000"
    // REACT_APP_API_URL="http://api.abovecurve.com" (production)
    // REACT_APP_API_URL="http://api.abovecurve.dev" (development)
    axios.get(`/ping`).then((res) => {
      const data = res.data;
      this.setState({ data });
    });

    // if (GATRACKING) {
    initGA(GATRACKING);
    PageView();
    // }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Welcome to Above Curve!</p>
          {/* Below line proves that the client talks to the api */}
          {/* Should output: Hello from the Above Curve API! */}
          {this.state.data.message}
          <button
            onClick={() => {
              Event(
                "TEST",
                "Someone clicked on the Google Analytics test button.",
                "LANDING_PAGE"
              );
              console.log("clicked!");
            }}
          >
            Test Google Analytics event tracking.
          </button>
        </header>
      </div>
    );
  }
}

export default App;
