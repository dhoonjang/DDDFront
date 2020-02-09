import React from "react";
import { Redirect } from "react-router-dom";

export const RedirectHome: React.FC = () => <Redirect to="/" />;

export interface IBlockImgProps {
  className: string;
  src: string;
  onClick?: (params?: any) => any;
  alt?: string;
  draggable?: boolean;
}

export const BlockImg: React.FC<IBlockImgProps> = ({
  className,
  src,
  alt,
  onClick,
  draggable
}) => (
  <div className={className} onClick={onClick}>
    <img
      src={src}
      alt={alt ? alt : className}
      draggable={draggable ? draggable : false}
    />
  </div>
);
