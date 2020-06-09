import React from "react";
import MapMenu from "../index";
import { render, testStore, cleanup } from "../../../utils/test-utils";
import mapMenu from "../index";

describe("MapMenu Component", () => {
  afterEach(cleanup);

  it("should not render if menuOpen is false", () => {
    const component = render(<MapMenu />, {
      initialState: { menuOpen: false },
    });
    expect(component.queryByTestId("MapMenu")).toBe(null);
  });

  it("should render if menuOpen is true", () => {
    const component = render(<MapMenu />, { initialState: { menuOpen: true } });
    expect(component.getAllByTestId("MapMenu").length).toBe(1);
  });

  it("should render a list of datasets", () => {
    const component = render(<MapMenu />, {
      initialState: {
        menuOpen: true,
        allDatasets: ["Number one", "Number two", "Number three"],
      },
    });

    expect(component.getAllByText(/Number/i).length).toBe(3);
  });
});
