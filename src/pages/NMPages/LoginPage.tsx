import qs from "query-string";
import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { loginApi } from "../../api/apiModel";
import { ILoginApiReturn } from "../../api/apiModel/NMapiModel/loginApi";
import { ETokenType, setToken } from "../../control/controlToken";
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
      if (res.success && res.accessToken) {
        setToken(ETokenType.accessToken, res.accessToken);
        if (res.refreshToken) {
          setToken(ETokenType.refreshToken, res.refreshToken);
          if (authorized()) {
            RouteUrlMove(history, "/");
          }
        } else if (res.joinRequired) {
          RouteUrlMove(history, "/join");
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
      <Link to="/">Home</Link> <Link to="/join">Join</Link>
      {isLogging ? (
        <div>
          <h2>LOGGING...</h2>
        </div>
      ) : (
        <div>
          <h2>LOGIN FAIL!</h2>
          <button onClick={logInFunc}>Retry Login Button</button>
          <br />
        </div>
      )}
    </div>
  );
};

export default LoginPage;
