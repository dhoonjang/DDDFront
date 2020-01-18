import React from "react";
import { Link } from "react-router-dom";

const FirstPage: React.FC = () => {
  return (
    <div className="FirstPage">
      <h2>Frist Page</h2>
      <br />
      <Link to="/login">go to login page</Link>
    </div>
  );
};

export default FirstPage;
