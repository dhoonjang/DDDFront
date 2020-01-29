import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useUserData } from "../../store/storeFuncs";

const MomRedirectRoute = ({ ...rest }: any) => {
  const { userStatus } = useUserData();

  return (
    <Route
      {...rest}
      render={() =>
        userStatus !== "00" ? (
          <Redirect to="/mom" />
        ) : (
          <Redirect to="/category" />
        )
      }
    />
  );
};

export default MomRedirectRoute;
