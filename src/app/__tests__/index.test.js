import React from "react";
import App from "../index";
import { render, fireEvent, cleanup } from "../../utils/test-utils";

const setUp = (props = {}) => {
  const component = render(<App {...props} />);
  return component;
};

describe("App component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  afterEach(cleanup);

  it("should render welcome text", () => {
    const welcomeElement = component.getByText(/Welcome to Above Curve!/i);
    expect(welcomeElement).toBeInTheDocument();
  });

  describe("React-redux", () => {
    it("should render a redux test button", () => {
      const reduxButton = component.getByText(
        /React-redux test has not passed/
      );
      expect(reduxButton).toBeInTheDocument();
    });

    it("should rerender the button when clicked", () => {
      const reduxButton = component.getByText(
        /React-redux test has not passed/
      );
      fireEvent.click(reduxButton);
      expect(reduxButton).toHaveTextContent("React-redux test has passed");
    });
  });
});
