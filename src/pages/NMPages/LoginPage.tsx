import qs from "query-string";
import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { loginApi, oauthApi } from "../../api/apiModel";
import { ILoginApiReturn } from "../../api/apiModel/NMapiModel/loginApi";
import { IOAuthApiReturn } from "../../api/apiModel/NMapiModel/oauthApi";
import { ETokenCategory, setToken } from "../../control/controlToken";
import { getUrlInfo, RouteUrlMove } from "../../control/controlUrl";
import { useAuthAction } from "../../store/storeFuncs";

const LoginPage: React.FC = () => {
  const [isLogging, setIsLogging] = useState(true);
  const { origin } = getUrlInfo();
  const history = useHistory();
  const location = useLocation();
  const { authorized } = useAuthAction();

  const { code } = qs.parse(location.search);

  const logInFunc = async () => {
    if (code) {
      const oauthRes: IOAuthApiReturn = await oauthApi(
        `${process.env.REACT_APP_KAKAO_CLIENT_ID}`,
        `${origin}/login`,
        String(code)
      );
      if (oauthRes.success && oauthRes.oauthToken) {
        const loginRes: ILoginApiReturn = await loginApi(oauthRes.oauthToken);
        if (loginRes.success) {
          if (loginRes.joinRequired) {
            setToken(ETokenCategory.oauthToken, oauthRes.oauthToken);
            return RouteUrlMove(history, "/join");
          } else if (loginRes.accessToken && loginRes.refreshToken) {
            setToken(ETokenCategory.accessToken, loginRes.accessToken);
            setToken(ETokenCategory.refreshToken, loginRes.refreshToken);
            if (authorized()) {
              return RouteUrlMove(history, "/");
            }
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
