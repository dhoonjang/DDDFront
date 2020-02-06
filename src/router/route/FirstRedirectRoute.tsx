import React from "react";
import { Redirect, Route } from "react-router-dom";
import { ETokenCategory, getToken } from "../../tool/tokenTool";

const FirstRedirectRoute = ({ component: Component, ...rest }: any) => {
  const token = getToken(ETokenCategory.oauthToken);

  return (
    <Route
      {...rest}
      render={props => (token ? <Component {...props} /> : <Redirect to="/" />)}
    />
  );
};

export default FirstRedirectRoute;
