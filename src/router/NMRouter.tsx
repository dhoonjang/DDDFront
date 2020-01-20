import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RedirectHome from "../components/RedirectHome";
import { FirstPage, JoinPage, LoginPage } from "../pages";

const NMRouter: React.FC = () => {
  console.log("NM Router Render!!!");

  return (
    <Router>
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
