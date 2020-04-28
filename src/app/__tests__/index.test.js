import React from "react";
import { render } from "@testing-library/react";
import App from "../index";

describe("App component", () => {
  it("should render welcome text", () => {
    const { getByText } = render(<App />);
    const welcomeElement = getByText(/Welcome to Above Curve!/i);
    expect(welcomeElement).toBeInTheDocument();
  });
});
