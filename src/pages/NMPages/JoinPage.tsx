import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { ETokenCategory, getToken } from "../../control/controlToken";
import { RouteUrlMove } from "../../control/controlUrl";

const JoinPage: React.FC = () => {
  const history = useHistory();
  const token = getToken(ETokenCategory.accessToken);
  if (!token) {
    RouteUrlMove(history, "/");
  }
  const [form, setForm] = useState(false);

  return (
    <div className="JoinPage">
      <Link to="/">Home</Link>
      <h2>Join Page</h2>
      {form ? (
        <form>유저 정보 입력 폼</form>
      ) : (
        <div>
          <button onClick={() => setForm(true)}>입시를 준비하는 학생</button>
          <button onClick={() => setForm(true)}>학생을 도와줄 튜터</button>
        </div>
      )}
      <br />
    </div>
  );
};

export default JoinPage;
