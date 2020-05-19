import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import { Provider } from "react-redux";
import { store } from "./utils/createStore";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
