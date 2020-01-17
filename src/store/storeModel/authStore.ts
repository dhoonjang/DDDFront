import { action, observable } from "mobx";
import { clearLocal } from "../../control/controlLocal";
import {
  getLocalToken,
  IToken,
  setLocalToken
} from "../../control/controlToken";

export enum EAuthReturn {
  expired = "ExpiredToken",
  fail = "Fail",
  success = "Success"
}

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
  public token: IToken | null = getLocalToken();

  @observable
  public authenticated: boolean = false;

  private constructor() {}

  @action
  public setToken(token: IToken): void {
    this.token = token;
    setLocalToken(this.token);
  }

  @action
  public authorized(): EAuthReturn {
    if (this.token) {
      if (this.token.isExpired) {
        return EAuthReturn.expired;
      } else {
        this.authenticated = true;
        return EAuthReturn.success;
      }
    }
    return EAuthReturn.fail;
  }

  @action
  public clearStore(): void {
    clearLocal();
    this.token = null;
    this.authenticated = false;
  }
}

export default AuthStore;
