import qs from "query-string";
import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { loginApi } from "../../api/apiModel";
import { ILoginApiReturn } from "../../api/apiModel/NMapiModel/loginApi";
import { setLocalToken } from "../../control/controlToken";
import { RouteUrlMove } from "../../control/controlUrl";
import { useAuthAction } from "../../store/storeFuncs";

const LoginPage: React.FC = () => {
  const [isLogging, setIsLogging] = useState(true);

  const history = useHistory();
  const location = useLocation();
  const { authorized } = useAuthAction();

  const { code } = qs.parse(location.search);

  const logInFunc = async () => {
    if (code) {
      const res: ILoginApiReturn = await loginApi(String(code));
      /*
      const res = {
        success: true,
        token: {
          accessToken: "asdf",
          refreshToken: "asdf",
          isValid: true
        },
        joinRequired: false
      };
      */
      console.log(res);
      if (res.success && res.token) {
        setLocalToken(res.token);
        if (res.joinRequired) {
          RouteUrlMove(history, "/join");
        } else {
          const authReturn: boolean = authorized();
          if (authReturn) {
            RouteUrlMove(history, "/");
          }
        }
      }
    }
    setIsLogging(false);
  };
  if (isLogging) {
    logInFunc();
  }
  return (
    <div className="LoginPage">
      Logging...
      {!isLogging && "LOGIN FAIL"}
      <br />
      <button onClick={logInFunc}>Log In</button>
    </div>
  );
};

export default LoginPage;
