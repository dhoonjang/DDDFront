import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { MainPage } from "../pages";

const MRouter: React.FC = () => {
  console.log("M Router Render!!!");

  return (
    <Router>
      <h1>Member Router</h1>
      <Route exact={true} path={"/"} component={MainPage} />
    </Router>
  );
};

export default MRouter;
