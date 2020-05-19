import React, { Component } from "react";
import { PageView, initGA, Event } from "../tracking";
import { fetchData } from "../utils/axios";
import "./app.css";

import { connect } from "react-redux";
import { actionsTest } from "../actions";

import Chart from "../components/chart";
import Navbar from "../components/navbar";

// NOTE: "UA-164204874-2" Is the tracking ID for Above Curve lcoalhost
// open this app in incognito for it to register in the GA dashboard
// when testing locally.
const GATRACKING = process.env.REACT_APP_GATRACKING || "UA-164204874-2";

/* 
  When using React Router see this guide for
  impmelemting Google Analytics
  https://github.com/react-ga/react-ga/wiki/React-Router-v4-withTracker
*/

class App extends Component {
  state = {
    data: {},
  };

  componentDidMount = async () => {
    // custom axios uses env specific base path
    // LOCAL_API="http://localhost:4000"
    // REACT_APP_API_URL="http://api.abovecurve.com" (production)
    // REACT_APP_API_URL="http://api.abovecurve.dev" (development)

    // Call the custom axios using the below example
    const { data } = await fetchData("/ping");
    this.setState({ data });

    // Google Analytics initialization
    initGA(GATRACKING);
    // Trigger a Google Analytics Page View for this page (app.js)
    PageView();
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <Chart />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    testPassed: state.testPassed,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchTest: () => {
      return dispatch(actionsTest());
    },
  };
};

export default App = connect(mapStateToProps, mapDispatchToProps)(App);
