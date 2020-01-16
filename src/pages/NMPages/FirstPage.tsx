import React from "react";
import { Link } from "react-router-dom";

const FirstPage: React.FC = () => {
  return (
    <div className="FirstPage">
      <h2>FristPage</h2>
      <br />
      <Link to="/login">Login</Link>
    </div>
  );
};

export default FirstPage;
