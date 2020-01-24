import { render } from "@testing-library/react";
import React from "react";
import App from "./App";
import { FirstPage, LoginPage } from "./pages";
import StoreProvider from "./store/storeProvider";

test("App Render!", () => {
  render(
    <StoreProvider>
      <App />
    </StoreProvider>
  );
});
