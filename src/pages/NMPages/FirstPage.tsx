import React from "react";
import { getUrlInfo, makeGetUrl } from "../../control/controlUrl";

const FirstPage: React.FC = () => {
  const { origin } = getUrlInfo();
  const redirect_uri = `${origin}/login`;

  const kakaoOauthUrl = makeGetUrl(
    "https://kauth.kakao.com",
    "/oauth/authorize",
    {
      client_id: "b9339e3d9d65a4a60f71b38c8da49977",
      redirect_uri,
      response_type: "code"
    }
  );

  return (
    <div className="FirstPage">
      <h2>Frist Page</h2>
      <br />
      <a href={kakaoOauthUrl}>Kakao 간편 로그인</a>
    </div>
  );
};

export default FirstPage;
