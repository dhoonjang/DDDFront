import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import { RedirectHome } from "../components/simpleComponents";
import { FirstPage, JoinPage, LoginPage } from "../pages";

const NMRouter: React.FC = () => {
  console.log("NM Router Render!!!");

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact={true} path={"/"} component={FirstPage} />
        <Route path={"/login"} component={LoginPage} />
        <Route path={"/join"} component={JoinPage} />
        <Route component={RedirectHome} />
      </Switch>
    </Router>
  );
};

export default NMRouter;
