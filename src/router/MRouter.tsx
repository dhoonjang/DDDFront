import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { RedirectHome } from "../components/simpleComponents";
import { BoardPage, MainPage } from "../pages";
import CategoryPage from "../pages/MPages/CategoryPage";
import CategoryRedirectRoute from "./route/CategoryRedirectRoute";

const MRouter: React.FC = () => {
  return (
    <Router>
      <Switch>
        <CategoryRedirectRoute exact={true} path={"/"} component={MainPage} />
        <Route path={"/board"} component={BoardPage} />
        <Route path={"/category"} component={CategoryPage} />
        <Route component={RedirectHome} />
      </Switch>
    </Router>
  );
};

export default MRouter;
