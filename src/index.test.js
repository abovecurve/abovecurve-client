import * as index from "./index";
import ReactDOM from "react-dom";

jest.mock("react-dom", () => ({
  render: jest.fn(),
}));

describe("index", () => {
  it("ReactDOM render is called", () => {
    expect(ReactDOM.render).toHaveBeenCalled();
  });
});
