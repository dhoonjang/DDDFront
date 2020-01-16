import React from "react";
import { Link } from "react-router-dom";
import { useAuthAction } from "../../store/storeFuncs";

const MainPage: React.FC = () => {
  const { logOut } = useAuthAction();
  return (
    <div className="MainPage">
      <h2>MainPage</h2>
      <br />
      <Link to="/board">Board</Link>
      <br />
      <button onClick={logOut}>Log Out</button>
    </div>
  );
};

export default MainPage;
