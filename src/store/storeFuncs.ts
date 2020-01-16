import { MobXProviderContext, useObserver } from "mobx-react";
import { useContext } from "react";
import { TToken } from "../control/controlToken";

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
    setToken: (token: TToken) => auth.setToken(token),
    authorized: () => auth.authorized(),
    clearStore: () => auth.clearStore()
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
