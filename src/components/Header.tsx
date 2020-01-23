import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo-3.png";
import { BlockImg } from "./simpleComponents";

const Header: React.FC = () => {
  return (
    <div className="Header">
      <Link to="/">
        <BlockImg className="ddakdae-logo" src={logo} alt="ddakdae-logo" />
      </Link>
    </div>
  );
};

export default Header;
