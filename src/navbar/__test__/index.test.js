import React from "react";
import Navbar from "../index";
import { render } from "@testing-library/react";

const setUp = (props = {}) => {
  const component = render(<Navbar {...props} />);
  return component;
};

describe("Navbar Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should render the ac-logo without error", () => {
    const logo = component.getAllByTestId("ac-logo");
    expect(logo.length).toBe(1);
  });

  it("should render the menu-button without error", () => {
    const menuBtn = component.getAllByLabelText("Menu");
    expect(menuBtn.length).toBe(1);
  });
});
