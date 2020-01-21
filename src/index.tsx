import dotenv from "dotenv";
import React from "react";
import ReactDOM from "react-dom";
import { MapiInstance, NMapiInstance } from "./api/apiAgent";
import { ConfigureApiInstance } from "./api/apiFuncs";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import StoreProvider from "./store/storeProvider";

dotenv.config();

ConfigureApiInstance(MapiInstance, true);
ConfigureApiInstance(NMapiInstance, false);

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
