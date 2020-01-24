import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { joinApi } from "../../api/apiModel";
import { BlockImg } from "../../components/simpleComponents";
import { ETokenCategory, getToken, setToken } from "../../control/controlToken";
import { RouteUrlMove } from "../../control/controlUrl";
import joinMessage from "../../img/join-message.png";
import { useAuthAction } from "../../store/storeFuncs";
import "../../style/JoinPage.scss";

enum EJoinState {
  initial = "INITIAL",
  student = "STUDENT",
  tutor = "TUTOR"
}

interface IJoinFormProps {
  joinState: EJoinState;
}

const JoinForm: React.FC<IJoinFormProps> = ({ joinState }) => {
  const history = useHistory();
  const [gender, setGender] = useState("--man");
  const [hs, setHs] = useState("");
  const [grade, setGrade] = useState("--one");
  const { authorized } = useAuthAction();

  const joinFunc = async () => {
    const oauth_token = getToken(ETokenCategory.oauthToken);
    if (oauth_token) {
      const res = await joinApi(oauth_token, joinState, gender, hs, grade);
      if (res.success && res.accessToken && res.refreshToken) {
        setToken(ETokenCategory.accessToken, res.accessToken);
        setToken(ETokenCategory.refreshToken, res.refreshToken);
        if (authorized()) {
          return RouteUrlMove(history, "/");
        }
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
      <JoinForm joinState={joinState} />
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
