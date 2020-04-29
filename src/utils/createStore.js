import { createStore, applyMiddleware, compose } from "redux";
import { reducer } from "../reducers";
import ReduxThunk from "redux-thunk";

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
export const store = createStore(reducer, enhancer);
