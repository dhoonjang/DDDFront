import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { RedirectHome } from "../components/simpleComponents";
import { BoardPage, CategoryItemPage, CategoryPage, MomPage } from "../pages";
import BoardRedirectRoute from "./route/BoardRedirectRoute";
import CategoryRedirectRoute from "./route/CategoryRedirectRoute";

const MRouter: React.FC = () => {
  return (
    <Router>
      <Switch>
        <BoardRedirectRoute exact={true} path={"/"} />
        <CategoryRedirectRoute
          exact={true}
          path={"/board"}
          component={MomPage}
        />
        <CategoryRedirectRoute
          path={"/board/:board_id"}
          component={BoardPage}
        />
        <Route exact={true} path={"/category"} component={CategoryPage} />
        <Route path={"/category/:category_id"} component={CategoryItemPage} />
        <Route component={RedirectHome} />
      </Switch>
    </Router>
  );
};

export default MRouter;
