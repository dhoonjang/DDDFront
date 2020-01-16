import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { RouteUrlMove } from "../../control/controlUrl";
import { useAuthAction } from "../../store/storeFuncs";

const MainPage: React.FC<RouteComponentProps> = ({ history }) => {
  const { clearStore } = useAuthAction();

  const logOutFunc = () => {
    clearStore();
    RouteUrlMove(history, "/");
  };

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
