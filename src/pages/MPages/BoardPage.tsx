import React from "react";
import { Link } from "react-router-dom";

const BoardPage: React.FC = () => {
  return (
    <div className="BoardPage">
      <Link to="/">Home</Link>
      <h2>Board Page</h2>
    </div>
  );
};

export default BoardPage;
