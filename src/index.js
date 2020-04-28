import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";

//react-redux imports
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";
import reducer from "./reducers";

//creates enhancer for redux store
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension's options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

//applyMiddleware to connect redux
const enhancer = composeEnhancers(applyMiddleware(ReduxThunk));

//creates redux store
const store = createStore(reducer, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,

  document.getElementById("root")
);
