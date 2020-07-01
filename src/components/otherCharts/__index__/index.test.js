import React from "react";
import OtherCharts from "../index";
import { render, cleanup } from "../../../utils/test-utils";

const setUp = (props = {}) => {
  const component = render(<OtherCharts {...props} />);
  return component;
};

describe("OtherCharts Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  afterEach(cleanup);

  it("should render without error", () => {
    const container = component.getAllByTestId("otherCharts-div");
    expect(container.length).toBe(1);
  });
});
