import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { initialState, reducer } from "../../reducers";
import { render } from "@testing-library/react";

export const renderWithRedux = (
  component,
  { initialState, store = createStore(reducer, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};
