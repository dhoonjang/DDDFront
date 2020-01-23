import React from "react";
import { BlockImg } from "../../components/simpleComponents";
import { getUrlInfo, makeGetUrl } from "../../control/controlUrl";
import kakaoLoginBtn from "../../img/kakao-account-login-btn.png";
import "../../style/FirstPage.scss";

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
      <div className="sub-title">야, 대학</div>
      <div className="main-title">딱 대.</div>
      <a href={kakaoGrantUrl}>
        <BlockImg className="kakao-login-btn" src={kakaoLoginBtn} />
      </a>
    </div>
  );
};

export default FirstPage;
