import React from "react";
import App from "../index.jsx";
import { render, fireEvent, cleanup } from "../../utils/test-utils";

const setUp = (props = {}) => {
  const component = render(<App {...props} />);
  return component;
};

describe("App component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  afterEach(cleanup);

  it("should render the navbar component", () => {
    const navbar = component.getByTestId("navbar");

    expect(navbar).toBeTruthy();
  });

  it("should render the chart component", () => {
    const chart = component.getByTestId("chart");
    expect(chart).toBeTruthy();
  });
});
