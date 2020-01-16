import { Provider } from "mobx-react";
import React from "react";
import AuthStore from "./storeModel/authStore";
import UserStore from "./storeModel/userStore";

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
