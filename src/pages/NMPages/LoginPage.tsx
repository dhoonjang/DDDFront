import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { makeToken } from "../../control/controlToken";
import { RouteUrlMove } from "../../control/controlUrl";
import { useAuthAction } from "../../store/storeFuncs";

const LoginPage: React.FC<RouteComponentProps> = ({ history }) => {
  const { authorized, setToken } = useAuthAction();

  const logInFunc = () => {
    const newToken = makeToken("abcdefg", "hijklmnop");
    setToken(newToken);
    if (authorized() === "Success") {
      RouteUrlMove(history, "/");
    } else {
      RouteUrlMove(history, "/join");
    }
  };

  return (
    <div className="LoginPage">
      <h2>LoginPage</h2>
      <br />
      <button onClick={logInFunc}>Log In</button>
    </div>
  );
};

export default LoginPage;
