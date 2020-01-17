import React from "react";
import { useHistory } from "react-router-dom";
import { EApiReturnStatus, loginApi } from "../../api/apiFuncs";
import { RouteUrlMove } from "../../control/controlUrl";
import { useAuthAction } from "../../store/storeFuncs";

const LoginPage: React.FC = () => {
  const { authorized, setToken } = useAuthAction();
  const history = useHistory();

  const logInFunc = async () => {
    const res = await loginApi("temp_code");
    if (res.status === EApiReturnStatus.success && res.token) {
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
