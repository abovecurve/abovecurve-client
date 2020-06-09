import React from "react";
import Footer from "../index";
import { render, cleanup, fireEvent } from "../../../utils/test-utils";

const setUp = (props = {}) => {
  const component = render(<Footer {...props} />);
  return component;
};

describe("Footer Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  afterEach(cleanup);

  it("should render the ac-logo without error", () => {
    const logo = component.getAllByTestId("ac-footer-logo");
    expect(logo.length).toBe(1);
  });
});
