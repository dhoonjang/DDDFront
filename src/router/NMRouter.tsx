import React from "react";
import { useAuthAction } from "../store/storeFuncs";
import { makeToken } from "../tool/token";

const NMRouther: React.FC = () => {
  const { setStoreToken, authorized } = useAuthAction();

  const login = () => {
    setStoreToken(makeToken("Bearer", "abcdefg", "hijklmnop"));
    authorized();
  };

  return (
    <div className="Member">
      nonmember router
      <button onClick={login}>Log In</button>
    </div>
  );
};

export default NMRouther;
