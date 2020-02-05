import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header";
import JoinForm from "../../components/JoinForm";
import { useAuthAction, useUserAction } from "../../store/storeFuncs";
import "../../style/JoinPage.scss";
import { ETokenCategory, getToken } from "../../tool/tokenTool";
import { RouteUrlMove } from "../../tool/urlTool";

export enum EJoinState {
  initial = "INITIAL",
  student = "STUDENT",
  tutor = "TUTOR"
}

const JoinPage: React.FC = () => {
  const history = useHistory();
  const token = getToken(ETokenCategory.oauthToken);
  const { authorized } = useAuthAction();
  const { setUserStatus } = useUserAction();

  if (!token) {
    RouteUrlMove(history, "/");
  }

  const [joinState, setJoinState] = useState<EJoinState>(EJoinState.initial);
  const [tutorFocus, setTutorFocus] = useState("");
  const [studentFocus, setStudentFocus] = useState("");

  return (
    <div className="JoinPage">
      <Header white={true} />
      <div className={`message ${joinState}`}>
        당신은 누구신가요?
        <div className="sub-message">어떤 사용자로 시작할지 선택해주세요</div>
      </div>
      <JoinForm
        joinState={joinState}
        setUserStatus={setUserStatus}
        authorized={authorized}
        token={token ? token : "not_token"}
      />
      <div className="join-area">
        <div className={`area student-area ${joinState} ${studentFocus}`}>
          <button onClick={() => setJoinState(EJoinState.student)}>
            입시를 준비하는 학생
          </button>
          <div className="ex">고등학교 1~3학년, N수생</div>
          <div
            className={`cover ${studentFocus}`}
            onMouseOver={() => {
              setStudentFocus("-focus");
              setTutorFocus("");
            }}
          />
        </div>
        <div className={`area tutor-area ${joinState} ${tutorFocus}`}>
          <button onClick={() => setJoinState(EJoinState.tutor)}>
            학생을 도와줄 튜터
          </button>
          <div className="ex">학부모, 선생님</div>
          <div
            className={`cover ${tutorFocus}`}
            onMouseOver={() => {
              setTutorFocus("-focus");
              setStudentFocus("");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default JoinPage;
