import React from "react";
import { ETokenStatus, makeToken } from "../../control/controlToken";
import { RouteUrlMove } from "../../control/controlUrl";
import { useAuthAction } from "../../store/storeFuncs";
import { EAuthReturn } from "../../store/storeModel/authStore";

const LoginPage: React.FC = () => {
  const { authorized, setToken } = useAuthAction();

  const logInFunc = () => {
    const newToken = makeToken("abcdefg", "hijklmnop", ETokenStatus.new);
    setToken(newToken);
    const authReturn: EAuthReturn = authorized();

    if (authReturn === EAuthReturn.success) {
      RouteUrlMove("/");
    } else if (authReturn === EAuthReturn.fail) {
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
