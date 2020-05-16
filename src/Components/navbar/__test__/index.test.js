import React from "react";
import Navbar from "../index";
import { render, cleanup, fireEvent } from "Utils/test-utils";

const setUp = (props = {}) => {
  const component = render(<Navbar {...props} />);
  return component;
};

describe("Navbar Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  afterEach(cleanup);

  it("should render the ac-logo without error", () => {
    const logo = component.getAllByTestId("ac-logo");
    expect(logo.length).toBe(1);
  });

  it("should render the menu-button without error", () => {
    const menuBtn = component.getAllByLabelText("Menu");
    expect(menuBtn.length).toBe(1);
  });

  describe("Menu button", () => {
    it("should change the props.menuOpen value when clicked", () => {
      const menuBtn = component.getAllByLabelText("Menu")[0];
    });
  });
});
