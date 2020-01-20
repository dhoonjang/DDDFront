import { MobXProviderContext, useObserver } from "mobx-react";
import { useContext } from "react";

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
    authenticated: auth.authenticated
  }));
}

export function useAuthAction() {
  const { auth } = useStores();
  return {
    authorized: () => auth.authorized(),
    unAuthorized: () => auth.unAuthorized()
  };
}

export function useUserData() {
  const { user } = useStores();
  return useObserver(() => ({
    userId: user.id,
    userName: user.name,
    userState: user.status
  }));
}
