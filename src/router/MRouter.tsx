import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { RedirectHome } from "../components/simpleComponents";
import { BoardPage, MainPage } from "../pages";

const MRouter: React.FC = () => {
  console.log("M Router Render!!!");

  return (
    <Router>
      <Switch>
        <Route exact={true} path={"/"} component={MainPage} />
        <Route path={"/board"} component={BoardPage} />
        <Route component={RedirectHome} />
      </Switch>
    </Router>
  );
};

export default MRouter;
