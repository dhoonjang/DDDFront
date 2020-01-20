import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useApiModel } from "../../api/apiFuncs";
import { momApi } from "../../api/apiModel";
import { TMomApiParameter } from "../../api/apiModel/MapiModel/momApi";
import { getToken } from "../../control/controlToken";
import { RouteUrlMove } from "../../control/controlUrl";
import { useAuthAction } from "../../store/storeFuncs";

const MainPage: React.FC = () => {
  const { unAuthorized } = useAuthAction();
  const history = useHistory();
  const token = getToken();

  const logOutFunc = () => {
    unAuthorized();
    RouteUrlMove(history, "/");
  };

  const momApiParameter: TMomApiParameter = [token];
  const momData = useApiModel(momApi, momApiParameter);

  console.log(momData);
  return (
    <div className="MainPage">
      <h2>Main Page</h2>
      <br />
      <Link to="/board">Board</Link>
      <br />
      <button onClick={logOutFunc}>Log Out</button>
    </div>
  );
};

export default MainPage;
