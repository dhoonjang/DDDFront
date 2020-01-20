import { action, observable } from "mobx";
import { clearLocal } from "../../control/controlLocal";
import { getLocalToken, IToken } from "../../control/controlToken";

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
  public authorized(): boolean {
    const token: IToken | null = getLocalToken();
    if (token && token.isValid) {
      this.authenticated = true;
      return true;
    }
    return false;
  }

  @action
  public unAuthorized(): void {
    clearLocal();
    this.authenticated = false;
  }
}

export default AuthStore;
