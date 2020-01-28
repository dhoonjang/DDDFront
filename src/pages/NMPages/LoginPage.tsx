import qs from "query-string";
import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import LoginRequest from "../../components/LoginRequest";
import { useAuthAction, useUserAction } from "../../store/storeFuncs";

const LoginPage: React.FC = () => {
  const [isLogging, setIsLogging] = useState(true);
  const history = useHistory();
  const location = useLocation();
  const { authorized } = useAuthAction();
  const { setUserStatus } = useUserAction();

  const { code } = qs.parse(location.search);

  return (
    <div className="LoginPage">
      {isLogging ? (
        <LoginRequest
          history={history}
          code={String(code)}
          authorized={authorized}
          setUserStatus={setUserStatus}
          setIsLogging={setIsLogging}
        />
      ) : (
        <div>
          <h2>LOGIN FAIL!</h2>
          <button onClick={() => setIsLogging(true)}>Retry Login Button</button>
          <br />
        </div>
      )}
    </div>
  );
};

export default LoginPage;
