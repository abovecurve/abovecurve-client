import React from "react";
import Chart from "../index.js";
import { render, cleanup } from "../../../utils/test-utils";

const setUp = (props = {}) => {
  const component = render(<Chart {...props} />);
  return component;
};

describe("Chart component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  afterEach(cleanup);

  it("should render without error", () => {
    expect(component).toBeTruthy();
  });
});
