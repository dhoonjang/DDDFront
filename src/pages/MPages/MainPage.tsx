import React from "react";
import { Link } from "react-router-dom";
import { useApiModel } from "../../api/apiFuncs";
import { momApi } from "../../api/apiModel";
import { TMomApiParameter } from "../../api/apiModel/MapiModel/momApi";
import Header from "../../components/Header";
import { useAuthAction } from "../../store/storeFuncs";

const MainPage: React.FC = () => {
  const { unAuthorized } = useAuthAction();

  const momApiParameter: TMomApiParameter = [];
  const momData = useApiModel(momApi, momApiParameter);

  console.log(momData);
  return (
    <div className="MainPage">
      <Header />
      <h2>Main Page</h2>
      <br />
      <Link to="/board">Board</Link>
      <br />
      <button onClick={unAuthorized}>Log Out</button>
    </div>
  );
};

export default MainPage;
