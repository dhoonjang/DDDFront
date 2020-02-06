import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { JoinPage } from "../pages";

test("JoinPage Render!", () => {
  const { container, debug } = render(
    <Router>
      <JoinPage />
    </Router>
  );

  expect(container.getElementsByClassName("JoinPage")).not.toBeNull();
  debug();
});
