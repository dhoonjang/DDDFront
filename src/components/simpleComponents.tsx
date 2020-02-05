import React from "react";
import { Redirect } from "react-router-dom";

export const RedirectHome: React.FC = () => <Redirect to="/" />;

export interface IBlockImgProps {
  className: string;
  src: string;
  onClick?: (params?: any) => any;
  alt?: string;
}

export const BlockImg: React.FC<IBlockImgProps> = ({
  className,
  src,
  alt,
  onClick
}) => (
  <div className={className} onClick={onClick}>
    <img src={src} alt={alt ? alt : className} />
  </div>
);
