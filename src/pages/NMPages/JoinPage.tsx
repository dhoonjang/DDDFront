import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header";
import JoinForm from "../../components/JoinForm";
import { BlockImg } from "../../components/simpleComponents";
import joinMessage from "../../img/join-message.png";
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
      <Header />
      <BlockImg className={`imessage ${joinState}`} src={joinMessage} />
      <JoinForm
        joinState={joinState}
        setUserStatus={setUserStatus}
        authorized={authorized}
        token={token ? token : "not_token"}
      />
      <div className={`area student-area ${joinState}`}>
        <button onClick={() => setJoinState(EJoinState.student)}>
          입시를 준비하는 학생
        </button>
        <div className="ex">ex) 고등학교 1~3학년, N수생</div>
        <div
          className={`cover ${studentFocus}`}
          onMouseOver={() => {
            setStudentFocus("--focus");
            setTutorFocus("");
          }}
        />
      </div>
      <div className={`area tutor-area ${joinState}`}>
        <button onClick={() => setJoinState(EJoinState.tutor)}>
          학생을 도와줄 튜터
        </button>
        <div className="ex">ex) 학부모, 선생님</div>
        <div
          className={`cover ${tutorFocus}`}
          onMouseOver={() => {
            setTutorFocus("--focus");
            setStudentFocus("");
          }}
        />
      </div>
    </div>
  );
};

export default JoinPage;
