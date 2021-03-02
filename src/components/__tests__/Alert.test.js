import React from "react";
import { render } from "@testing-library/react";
import Alert from "../Alert";

test("displays an error message", () => {
  const { getByText } = render(<Alert message="Error!" />);

  expect(getByText(/Error/).textContent).toBe("Error!");
});

test("displays an success message", () => {
  const { getByText } = render(<Alert message="Success!!!" success />);

  expect(getByText(/Success/).textContent).toBe("Success!!!");
});

//need to check over theses tests this evening 
test("does not render an error or a success message if message props is empty", () => {
  const { getByText, asFragment } = render(<Alert message="Error!" />);
  const alert = asFragment();
  expect(alert).toMatchSnapshot();
  expect(getByText(/Error/)).toMatchSnapshot("Error!");
  expect(asFragment()).toMatchSnapshot();
});
