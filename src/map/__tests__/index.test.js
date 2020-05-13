import React from "react";
import Map from "../index";
import { render, cleanup, fireEvent } from "../../utils/test-utils";

const setUp = (props = {}) => {
  const component = render(<Map {...props} />);
  return component;
};

describe("Map Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  afterEach(cleanup);

  it("should render a map of the United State", () => {
    const map = component.getAllByTestId("USMapSVG");
    expect(map.length).toBe(1);
  });
});
