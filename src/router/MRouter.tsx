import React from "react";
import { useAuthAction } from "../store/storeFuncs";

const MRouther: React.FC = () => {
  const { logOut } = useAuthAction();

  const logout = () => {
    logOut();
  };
  return (
    <div className="Member">
      member router
      <button onClick={logout}>Log Out</button>
    </div>
  );
};

export default MRouther;
