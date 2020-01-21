import React from "react";
import { getUrlInfo, makeGetUrl } from "../../control/controlUrl";

const FirstPage: React.FC = () => {
  const { origin } = getUrlInfo();
  const redirect_uri = `${origin}/login`;

  const kakaoGrantUrl = makeGetUrl(
    `${process.env.REACT_APP_KAKAO_OAUTH_URL}`,
    "/authorize",
    {
      client_id: process.env.REACT_APP_KAKAO_CLIENT_ID,
      redirect_uri,
      response_type: "code"
    }
  );

  return (
    <div className="FirstPage">
      <h2>Frist Page</h2>
      <br />
      <a href={kakaoGrantUrl}>Kakao 간편 로그인</a>
    </div>
  );
};

export default FirstPage;
