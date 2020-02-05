import React from "react";
import { Link } from "react-router-dom";
import blackLogo from "../img/logo-black.png";
import whiteLogo from "../img/logo-white.png";
import blackMenuIcon from "../img/menu-icon-black.png";
import whiteMenuIcon from "../img/menu-icon-white.png";
import { BlockImg } from "./simpleComponents";

export interface IHeaderProps {
  white?: boolean;
  unAuthorized?: () => void;
}

const Header: React.FC<IHeaderProps> = ({ white, unAuthorized }) => {
  return (
    <div className="Header">
      <div className="header-flex">
        <Link to="/">
          <div className="ddakdae-logo">
            <BlockImg
              className="iddakdae-logo"
              src={white ? whiteLogo : blackLogo}
              alt="ddakdae-logo"
            />
            <div className={`ddakdae-logo-text ${white ? "white" : "black"}`}>
              딱 대.
            </div>
          </div>
        </Link>
        <BlockImg
          className="imenu-icon"
          onClick={unAuthorized}
          src={white ? whiteMenuIcon : blackMenuIcon}
          alt="ddakdae-menu-icon"
        />
      </div>
    </div>
  );
};

export default Header;
