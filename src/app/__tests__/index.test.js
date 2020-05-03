import React from "react";
import App from "../index";
import { render, fireEvent, cleanup } from "../../utils/tests";

describe("App component", () => {
  afterEach(cleanup);

  it("should render welcome text", () => {
    const { getByText } = render(<App />);
    const welcomeElement = getByText(/Welcome to Above Curve!/i);
    expect(welcomeElement).toBeInTheDocument();
  });

  describe("React-redux", () => {
    it("should render a redux test button", () => {
      const { getByText } = render(<App />);
      const reduxButton = getByText(/React-redux test has not passed/);
      expect(reduxButton).toBeInTheDocument();
    });

    it("should rerender the button when clicked", () => {
      const { getByText } = render(<App />);
      const reduxButton = getByText(/React-redux test has not passed/);
      fireEvent.click(reduxButton);

      expect(reduxButton).toHaveTextContent("React-redux test has passed");
    });
  });
});
