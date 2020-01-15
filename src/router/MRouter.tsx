import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useAuthAction } from "../store/storeFuncs";

const MRouther: React.FC = () => {
  console.log("M Router Render!!!");
  const { logOut } = useAuthAction();

  const logout = () => {
    logOut();
  };

  return (
    <Router>
      <div className="Member">
        member router
        <button onClick={logout}>Log Out</button>
        <Link to="/main">asf</Link>
      </div>
    </Router>
  );
};

export default MRouther;
