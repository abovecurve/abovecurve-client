import React from "react";
import Navbar from "../index";
import MapMenu from "../../mapMenu";
import { render, cleanup, fireEvent } from "../../../utils/test-utils";
import { initialState } from "../../../reducers";

const setUp = (props = {}) => {
  const component = render(<Navbar {...props} />, {
    initialState,
  });
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
    it("should display an x if the menu is open", () => {
      const menuBtn = component.getAllByLabelText("Menu")[0];

      fireEvent.click(menuBtn);

      expect(component.getAllByTestId("xBtn").length).toBe(1);
    });
  });
});
