import React from "react";
import { useHistory } from "react-router-dom";
import { ETokenStatus, makeToken } from "../../control/controlToken";
import { RouteUrlMove } from "../../control/controlUrl";
import { useAuthAction } from "../../store/storeFuncs";

const LoginPage: React.FC = () => {
  const { authorized, setToken } = useAuthAction();
  const history = useHistory();

  const logInFunc = async () => {
    const newToken = makeToken("abcdefg", "hijklmnop", ETokenStatus.new);
    setToken(newToken);
    const authReturn: boolean = authorized();

    if (authReturn) {
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
