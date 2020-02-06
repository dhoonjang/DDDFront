import React from "react";
import { Route, Switch } from "react-router-dom";
import { RedirectHome } from "../components/simpleComponents";
import { FirstPage, JoinPage, LoginPage } from "../pages";
import FirstRedirectRoute from "./route/FirstRedirectRoute";

const NMRouter: React.FC = () => {
  console.log("NM Router Render!!!");

  return (
    <Switch>
      <Route exact={true} path={"/"} component={FirstPage} />
      <Route path={"/login"} component={LoginPage} />
      <FirstRedirectRoute path={"/join"} component={JoinPage} />
      <Route component={RedirectHome} />
    </Switch>
  );
};

export default NMRouter;
