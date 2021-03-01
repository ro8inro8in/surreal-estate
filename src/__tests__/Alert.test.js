import React from "react";
import { render } from "@testing-library/react";
import Alert from "../components/Alert";

test("displays an error message", () => {
  const { getByText } = render(<Alert message="Error!" />);

  expect(getByText(/Error/).textContent).toBe("Error!");
});

test("displays an success message", () => {
  const { getByText } = render(<Alert message="Success!!!" success />);

  expect(getByText(/Success/).textContent).toBe("Success!!!");
});
