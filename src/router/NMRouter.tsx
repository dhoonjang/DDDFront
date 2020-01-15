import React from "react";
import { useAuthAction } from "../store/storeFuncs";
import { makeToken } from "../tool/token";

const NMRouther: React.FC = () => {
  console.log("NM Router Render!!!");
  const { setStoreToken, authorized } = useAuthAction();

  const login = () => {
    setStoreToken(makeToken("abcdefg", "hijklmnop"));
    authorized();
  };

  return (
    <div className="NonMember">
      nonmember router
      <button onClick={login}>Log In</button>
    </div>
  );
};

export default NMRouther;
