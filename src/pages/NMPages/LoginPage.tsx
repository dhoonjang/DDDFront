import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { makeToken } from "../../control/controlToken";
import { RouteUrlMove } from "../../control/controlUrl";
import { useAuthAction } from "../../store/storeFuncs";

const LoginPage: React.FC<RouteComponentProps> = ({ history }) => {
  const { authorized } = useAuthAction();

  const login = () => {
    const newToken = makeToken("abcdefg", "hijklmnop");
    authorized(newToken);
    RouteUrlMove(history, "/");
  };

  return (
    <div className="LoginPage">
      <h2>LoginPage</h2>
      <br />
      <button onClick={login}>Log In</button>
    </div>
  );
};

export default LoginPage;
