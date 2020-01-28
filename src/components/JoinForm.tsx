import React, { useState } from "react";
import { joinApi } from "../api/apiModel";
import { EJoinState } from "../pages/NMPages/JoinPage";
import { ETokenCategory, setToken } from "../tool/tokenTool";
import { IHistory } from "../tool/urlTool";

interface IJoinFormProps {
  joinState: EJoinState;
  token: string;
  authorized: (history?: IHistory, path?: string) => boolean;
  setUserStatus: (status: string) => void;
}

const JoinForm: React.FC<IJoinFormProps> = ({
  joinState,
  token,
  authorized,
  setUserStatus
}) => {
  const [gender, setGender] = useState("--man");
  const [hs, setHs] = useState("");
  const [grade, setGrade] = useState("--one");

  const joinFunc = async () => {
    const oauth_token = token;
    if (oauth_token) {
      const res = await joinApi(oauth_token, joinState, gender, hs, grade);
      if (res.success && res.data) {
        setToken(ETokenCategory.accessToken, res.data.accessToken);
        setToken(ETokenCategory.refreshToken, res.data.refreshToken);
        setUserStatus(res.data.userStatus);
        return authorized();
      }
    } else {
      return "ERROR";
    }
  };

  if (joinState === EJoinState.initial) {
    return null;
  }

  return (
    <div className="JoinForm">
      {joinState === EJoinState.student && (
        <div className="student-form">
          성별
          <div className={`gender-select ${gender}`}>
            <button className="man" onClick={() => setGender("--man")}>
              남자
            </button>
            <button className="woman" onClick={() => setGender("--woman")}>
              여자
            </button>
          </div>
          학교 입력
          <input
            type="text"
            onChange={e => setHs(e.target.value)}
            placeholder="학교 이름을 입력하세요"
          />
          학년 선택
          <div className={`grade-select ${grade}`}>
            <button className="one" onClick={() => setGrade("--one")}>
              1학년
            </button>
            <button className="two" onClick={() => setGrade("--two")}>
              2학년
            </button>
            <button className="three" onClick={() => setGrade("--three")}>
              3학년
            </button>
            <button className="else" onClick={() => setGrade("--else")}>
              기타
            </button>
          </div>
          <button className="submit" onClick={joinFunc}>
            확인
          </button>
        </div>
      )}
      {joinState === EJoinState.tutor && <div>아직 준비 안됨 ㅅㄱ</div>}
    </div>
  );
};

export default JoinForm;
