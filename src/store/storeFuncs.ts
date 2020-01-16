import { MobXProviderContext, useObserver } from "mobx-react";
import { useContext } from "react";
import { Ttoken } from "../control/controlToken";

function useStores() {
  const store = useContext(MobXProviderContext);
  if (!store) {
    throw new Error("useStores must be used within a Store Provider.");
  }
  return store;
}

export function useAuthData() {
  const { auth } = useStores();
  return useObserver(() => ({
    authenticated: auth.authenticated,
    token: auth.token
  }));
}

export function useAuthAction() {
  const { auth } = useStores();
  return {
    setStoreToken: (token: Ttoken) => auth.setStoreToken(token),
    authorized: (token?: Ttoken) => auth.authorized(token),
    logOut: () => auth.logOut()
  };
}

export function useUserData() {
  const { user } = useStores();
  return useObserver(() => ({
    userId: user.id,
    userName: user.name,
    userState: user.state
  }));
}