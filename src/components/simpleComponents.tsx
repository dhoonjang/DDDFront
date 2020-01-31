import React from "react";
import { Redirect } from "react-router-dom";

export const RedirectHome: React.FC = () => <Redirect to="/" />;

export interface IBlockImgProps {
  className: string;
  src: string;
  alt?: string;
}

export const BlockImg: React.FC<IBlockImgProps> = ({ className, src, alt }) => (
  <div className={className}>
    <img src={src} alt={alt ? alt : className} />
  </div>
);
