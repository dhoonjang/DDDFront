import React from "react";
import Header from "../../components/Header";
import { BlockImg } from "../../components/simpleComponents";
import kakaoLoginBtn from "../../img/kakao-account-login-btn.png";
import "../../style/FirstPage.scss";
import { getUrlInfo, makeGetUrl } from "../../tool/urlTool";

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
      <Header />
      <div className="body-content">
        <div className="sub-title">야, 대학</div>
        <div className="title">딱 대.</div>
        <a href={kakaoGrantUrl}>
          <BlockImg className="ikakao-login-btn" src={kakaoLoginBtn} />
        </a>
      </div>
    </div>
  );
};

export default FirstPage;
