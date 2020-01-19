import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useApiModel } from "../../api/apiFuncs";
import { momApi } from "../../api/apiModel";
import { TMomApiNeeds } from "../../api/apiModel/MapiModel/momApi";
import { RouteUrlMove } from "../../control/controlUrl";
import { useAuthAction, useAuthData } from "../../store/storeFuncs";

const MainPage: React.FC = () => {
  const { clearStore } = useAuthAction();
  const { token } = useAuthData();
  const history = useHistory();

  const logOutFunc = () => {
    clearStore();
    RouteUrlMove(history, "/");
  };

  const momApiNeeds: TMomApiNeeds = [token];
  const momData = useApiModel(momApi, momApiNeeds);

  console.log(momData);
  return (
    <div className="MainPage">
      <h2>MainPage</h2>
      <br />
      <Link to="/board">Board</Link>
      <br />
      <button onClick={logOutFunc}>Log Out</button>
    </div>
  );
};

export default MainPage;
