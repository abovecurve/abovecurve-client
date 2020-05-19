import React from "react";
import DataOptions from "../index.jsx";
import { render, fireEvent, cleanup } from "../../../utils/test-utils";

const setUp = (props = {}) => {
  const component = render(<DataOptions {...props} />);
  return component;
};

describe("DataOptions component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  afterEach(cleanup);

  it("should render the without error", () => {
    expect(component).toBeTruthy();
  });
});
