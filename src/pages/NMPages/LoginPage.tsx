import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { makeToken } from "../../control/controlToken";
import { RouteUrlMove } from "../../control/controlUrl";
import { useAuthAction } from "../../store/storeFuncs";
import { EAuthReturn } from "../../store/storeModel/authStore";

const LoginPage: React.FC<RouteComponentProps> = ({ history }) => {
  const { authorized, setToken } = useAuthAction();

  const logInFunc = () => {
    const newToken = makeToken("abcdefg", "hijklmnop");
    setToken(newToken);

    const authReturn: EAuthReturn = authorized();

    if (authReturn === EAuthReturn.success) {
      RouteUrlMove(history, "/");
    } else if (authReturn === EAuthReturn.fail) {
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
