import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { CategoryPage } from "../pages";

test("CategoryPage Render!", () => {
  const { container, debug } = render(
    <Router>
      <CategoryPage />
    </Router>
  );

  expect(container.getElementsByClassName("CategoryPage")).not.toBeNull();
  debug();
});
