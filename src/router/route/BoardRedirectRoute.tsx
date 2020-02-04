import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useUserData } from "../../store/storeFuncs";

const BoardRedirectRoute = ({ ...rest }: any) => {
  const { userStatus } = useUserData();

  return (
    <Route
      {...rest}
      render={() =>
        userStatus !== "00" ? (
          <Redirect to="/board" />
        ) : (
          <Redirect to="/category" />
        )
      }
    />
  );
};

export default BoardRedirectRoute;
