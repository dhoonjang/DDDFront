import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { loginApi } from "../../api/NMapiFuncs";
import { RouteUrlMove } from "../../control/controlUrl";
import { useAuthAction } from "../../store/storeFuncs";

const LoginPage: React.FC = () => {
  const { code } = useParams();
  const { authorized, setToken } = useAuthAction();
  const history = useHistory();

  const logInFunc = async () => {
    if (code) {
      const res = await loginApi(code);
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
