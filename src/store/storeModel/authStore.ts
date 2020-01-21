import { action, observable } from "mobx";
import { clearLocal } from "../../control/controlLocal";
import { ETokenCategory, getToken } from "../../control/controlToken";

class AuthStore {
  public static getInstance(): AuthStore {
    if (!AuthStore.instance) {
      AuthStore.instance = new AuthStore();
      AuthStore.instance.authorized();
    }
    return AuthStore.instance;
  }

  private static instance: AuthStore;

  @observable
  public authenticated: boolean = false;

  private constructor() {}

  @action
  public authorized(path?: string): boolean {
    const accessToken: string | null = getToken(ETokenCategory.accessToken);
    const refreshToken: string | null = getToken(ETokenCategory.refreshToken);
    if (accessToken && refreshToken) {
      this.authenticated = true;
      return true;
    }
    return false;
  }

  @action
  public unAuthorized(path?: string): void {
    clearLocal();
    this.authenticated = false;
  }
}

export default AuthStore;
