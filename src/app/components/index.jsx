import React, { Component } from "react";
import axios from "../../utils/axios";
import logo from "../assets/logo.svg";
import "./app.css";

class App extends Component {
  state = {
    data: "",
  };
  componentDidMount = () => {
    // custom axios uses env specific base path
    // LOCAL_API="http://localhost:4000/ping"
    // REACT_APP_API_URL="http://api.abovecurve.com/ping" (production)
    // REACT_APP_API_URL="http://api.abovecurve.dev/ping" (development)
    axios.get(`/ping`).then((res) => {
      const data = res.data;
      this.setState({ data });
    });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Welcome to Above Curve!</p>
          {this.state.data.message}
        </header>
      </div>
    );
  }
}

export default App;
