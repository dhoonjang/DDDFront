import { Provider } from "mobx-react";
import React from "react";
import AuthStore from "./authStore";
import UserStore from "./userStore";

const auth = AuthStore.getInstance();
const user = UserStore.getInstance();

const StoreProvider: React.FC = ({ children }) => {
  return (
    <Provider auth={auth} user={user}>
      {children}
    </Provider>
  );
};

export default StoreProvider;
