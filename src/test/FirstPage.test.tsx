import { fireEvent, render } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { FirstPage } from "../pages";

test("FirstPage Render!", () => {
  const { container, getByAltText, debug } = render(
    <Router>
      <FirstPage />
    </Router>
  );
  expect(container.getElementsByClassName("FirstPage")).not.toBeNull();
  fireEvent.click(getByAltText("ikakao-login-btn"));
  debug();
});
