import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/header-logo.png";
import { BlockImg } from "./simpleComponents";

export interface IHeaderProps {
  unAuthorized?: () => void;
}

const Header: React.FC<IHeaderProps> = ({ unAuthorized }) => {
  return (
    <div className="Header">
      <div className="header-flex">
        <Link to="/">
          <BlockImg className="iddakdae-logo" src={logo} alt="ddakdae-logo" />
        </Link>
        {unAuthorized && <button onClick={unAuthorized}>log out</button>}
      </div>
    </div>
  );
};

export default Header;
