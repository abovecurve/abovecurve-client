import React from "react";
import App from "../index";
import { render, fireEvent, cleanup, testStore } from "../../utils/test-utils";

const setUp = (props = {}) => {
  const component = render(<App {...props} />, { initialState: testStore() });
  return component;
};

describe("App component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  afterEach(cleanup);

  it("should render the Navbar component", () => {
    const navbar = component.getByTestId("navbar");

    expect(navbar).toBeTruthy();
  });

  it("should render the Chart component", () => {
    const chart = component.getByTestId("chart");
    expect(chart).toBeTruthy();
  });

  it("should not display the MapMenu component", () => {
    const mapMenu = component.queryByTestId("MapMenu");

    expect(mapMenu).toBe(null);
  });

  it("should display the MapMenu component when the Navbar menu button is clicked", () => {
    const menuBtn = component.getByLabelText("Menu");

    fireEvent.click(menuBtn);

    expect(component.getAllByTestId("MapMenu").length).toBe(1);
  });
});
