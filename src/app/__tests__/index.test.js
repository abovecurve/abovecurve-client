import React from "react";
import { render } from "@testing-library/react";
import App from "../index";

import { createStore } from "redux";
import { Provider } from "react-redux";
import { initialState, reducer } from "../../reducers";

const renderWithRedux = (
  component,
  { initialState, store = createStore(reducer, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

describe("App component", () => {
  it("should render welcome text", () => {
    const { getByText } = renderWithRedux(<App />);
    const welcomeElement = getByText(/Welcome to Above Curve!/i);
    expect(welcomeElement).toBeInTheDocument();
  });
});
