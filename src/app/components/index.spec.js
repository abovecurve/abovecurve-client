import React from "react";
import { render } from "@testing-library/react";
import App from "./index.jsx";

test("renders Welcome to Above Curve! text", () => {
  const { getByText } = render(<App />);
  const welcomeElement = getByText(/Welcome to Above Curve!/i);
  expect(welcomeElement).toBeInTheDocument();
});
