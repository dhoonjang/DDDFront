import React from "react";
import { Link, useHistory } from "react-router-dom";
import { getLocalToken } from "../../control/controlToken";
import { RouteUrlMove } from "../../control/controlUrl";

const JoinPage: React.FC = () => {
  const history = useHistory();
  const token = getLocalToken();
  if (!token) {
    RouteUrlMove(history, "/");
  }
  return (
    <div className="JoinPage">
      <Link to="/">Home</Link>
      <h2>Join Page</h2>
      Ready to Join
      <br />
    </div>
  );
};

export default JoinPage;
