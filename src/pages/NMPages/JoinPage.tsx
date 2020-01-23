import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { BlockImg } from "../../components/simpleComponents";
import { ETokenCategory, getToken } from "../../control/controlToken";
import { RouteUrlMove } from "../../control/controlUrl";
import joinMessage from "../../img/join-message.png";
import "../../style/JoinPage.scss";

enum EJoinState {
  initial = "INITIAL",
  student = "STUDENT",
  tutor = "TUTOR"
}

const JoinPage: React.FC = () => {
  const history = useHistory();
  const token = getToken(ETokenCategory.oauthToken);
  if (!token) {
    RouteUrlMove(history, "/");
  }
  const [joinState, setJoinState] = useState<EJoinState>(EJoinState.initial);
  const [tutorFocus, setTutorFocus] = useState("");
  const [studentFocus, setStudentFocus] = useState("");

  return (
    <div className="JoinPage">
      <BlockImg className={`imessage ${joinState}`} src={joinMessage} />
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
