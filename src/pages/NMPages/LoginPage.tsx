import qs from "query-string";
import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { loginApi } from "../../api/apiModel";
import { ILoginApiReturn } from "../../api/apiModel/NMapiModel/loginApi";
import { RouteUrlMove } from "../../control/controlUrl";
import { useAuthAction } from "../../store/storeFuncs";

const LoginPage: React.FC = () => {
  const location = useLocation();
  const { code } = qs.parse(location.search);
  const { authorized, setToken } = useAuthAction();
  const history = useHistory();
  console.log(code);

  const logInFunc = async () => {
    if (code) {
      const res: ILoginApiReturn = await loginApi(String(code));
      if (res.success && res.token) {
        setToken(res.token);
        if (res.joinRequired) {
          RouteUrlMove(history, "/join");
          return;
        }
        const authReturn: boolean = authorized();
        if (authReturn) {
          RouteUrlMove(history, "/");
        }
      }
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
