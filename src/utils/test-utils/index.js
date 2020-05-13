import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { initialState as reducerInitialState, reducer } from "Reducers";
import { render as rtlRender } from "@testing-library/react";
import { enhancer } from "../createStore";

export const testStore = (initialState = reducerInitialState) => {
  const createStoreWithMiddleware = createStore(
    reducer,
    initialState,
    enhancer
  );
  return createStoreWithMiddleware;
};

function render(
  component,
  {
    initialState = reducerInitialState,
    store = createStore(reducer, initialState, enhancer),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }

  return rtlRender(component, { wrapper: Wrapper, ...renderOptions });
}

export * from "@testing-library/react";

export { render };
