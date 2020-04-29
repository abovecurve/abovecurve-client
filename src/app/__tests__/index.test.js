import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "../index";

import { renderWithRedux } from "../../utils/tests";

describe("App component", () => {
  it("should render welcome text", () => {
    const { getByText } = renderWithRedux(<App />);
    const welcomeElement = getByText(/Welcome to Above Curve!/i);
    expect(welcomeElement).toBeInTheDocument();
  });

  describe("React-redux", () => {
    it("should render a redux test button", () => {
      const { getByText } = renderWithRedux(<App />);
      const reduxButton = getByText(/React-redux test has not passed/);
      expect(reduxButton).toBeInTheDocument();
    });

    // it("should change when the button is clicked", () => {
    //   const { getByText } = renderWithRedux(<App />);
    //   const reduxButton = getByText(/React-redux/i);

    //   fireEvent.click(reduxButton);
    //   expect(getByText(/React-redux/i).textContent).toBe(
    //     "React-redux test has passed"
    //   );
    // });
  });
});
