import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { RedirectHome } from "../components/simpleComponents";
import { BoardPage, CategoryPage, MomPage } from "../pages";
import CategoryRedirectRoute from "./route/CategoryRedirectRoute";
import MomRedirectRoute from "./route/MomRedirectRoute";

const MRouter: React.FC = () => {
  return (
    <Router>
      <Switch>
        <MomRedirectRoute exact={true} path={"/"} />
        <CategoryRedirectRoute path={"/mom"} component={MomPage} />
        <Route path={"/board"} component={BoardPage} />
        <Route path={"/category"} component={CategoryPage} />
        <Route component={RedirectHome} />
      </Switch>
    </Router>
  );
};

export default MRouter;
