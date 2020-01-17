import React from "react";
import { EApiReturn } from "../../api/authApi";
import { ETokenStatus, makeToken } from "../../control/controlToken";
import { RouteUrlMove } from "../../control/controlUrl";
import { useAuthAction } from "../../store/storeFuncs";

const LoginPage: React.FC = () => {
  const { authorized, setToken } = useAuthAction();

  const logInFunc = () => {
    const newToken = makeToken("abcdefg", "hijklmnop", ETokenStatus.new);
    setToken(newToken);
    const authReturn: EApiReturn = authorized();

    if (authReturn === EApiReturn.success) {
      RouteUrlMove("/");
    } else if (authReturn === EApiReturn.fail) {
      RouteUrlMove("/join");
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
