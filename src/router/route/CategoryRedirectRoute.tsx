import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useUserData } from "../../store/storeFuncs";

const CategoryRedirectRoute = ({ component: Component, ...rest }: any) => {
  const { userStatus } = useUserData();

  return (
    <Route
      {...rest}
      render={props =>
        userStatus !== "00" ? (
          <Component {...props} />
        ) : (
          <Redirect to="/category" />
        )
      }
    />
  );
};

export default CategoryRedirectRoute;
