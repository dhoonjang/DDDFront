import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/header-logo.png";
import { BlockImg } from "./simpleComponents";

const Header: React.FC = () => {
  return (
    <div className="Header">
      <Link to="/">
        <BlockImg className="iddakdae-logo" src={logo} alt="ddakdae-logo" />
      </Link>
    </div>
  );
};

export default Header;
