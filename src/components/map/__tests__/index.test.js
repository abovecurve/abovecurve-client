import React from "react";
import Map from "../index";
import { render, cleanup, fireEvent, screen } from "../../../utils/test-utils";

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

  //not really sure how to test that all states are getting an svg dot, created in the useEffect method, from what I read online, it looks like JSDOM (via jest) doesn't support createSVGPoint...
});
