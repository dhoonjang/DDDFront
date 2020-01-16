import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FirstPage, JoinPage, LoginPage } from "../pages";

const NMRouter: React.FC = () => {
  console.log("NM Router Render!!!");

  return (
    <Router>
      <h1>NonMember Router</h1>
      <Route exact={true} path={"/"} component={FirstPage} />
      <Route path={"/login"} component={LoginPage} />
      <Route path={"/join"} component={JoinPage} />
    </Router>
  );
};

export default NMRouter;
