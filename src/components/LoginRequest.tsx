import React from "react";
import { loginApi, oauthApi } from "../api/apiModel";
import { ILoginApiReturn } from "../api/apiModel/NMapiModel/loginApi";
import { IOAuthApiReturn } from "../api/apiModel/NMapiModel/oauthApi";
import { clearLocal } from "../tool/localTool";
import { ETokenCategory, setToken } from "../tool/tokenTool";
import { getUrlInfo, IHistory, RouteUrlMove } from "../tool/urlTool";

interface ILoginRequestProps {
  code: string;
  history: IHistory;
  authorized: (history?: IHistory, path?: string) => boolean;
  setUserStatus: (status: string) => void;
  setIsLogging: (isLogging: boolean) => void;
}

const LoginRequest: React.FC<ILoginRequestProps> = ({
  code,
  history,
  authorized,
  setUserStatus,
  setIsLogging
}) => {
  const { origin } = getUrlInfo();

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
          } else if (loginRes.data) {
            clearLocal();
            setToken(ETokenCategory.accessToken, loginRes.data.accessToken);
            setToken(ETokenCategory.refreshToken, loginRes.data.refreshToken);
            setUserStatus(loginRes.data.userStatus);
            return authorized();
          }
        }
      }
    }
    setIsLogging(false);
  };

  logInFunc();

  return (
    <div className="LoginRequest">
      <div>
        <h2>LOGGING...</h2>
      </div>
    </div>
  );
};

export default LoginRequest;
