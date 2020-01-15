import { Provider } from "mobx-react";
import React from "react";
import AuthStore from "./authStore";
import UserStore from "./userStore";

const auth = new AuthStore();
const user = new UserStore();

const StoreProvider: React.FC = ({ children }) => {
  return (
    <Provider auth={auth} user={user}>
      {children}
    </Provider>
  );
};

export default StoreProvider;
