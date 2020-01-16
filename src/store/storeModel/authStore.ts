import { action, observable } from "mobx";
import { clearLocal } from "../../control/controlLocal";
import {
  getLocalToken,
  setLocalToken,
  Ttoken
} from "../../control/controlToken";

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
  public token: Ttoken | null = getLocalToken();

  @observable
  public authenticated: boolean = false;

  private constructor() {}

  @action
  public setToken(token: Ttoken): void {
    this.token = token;
    setLocalToken(this.token);
  }

  @action
  public authorized(): string {
    if (this.token) {
      if (this.token.expiresIn) {
        return "ExpiredToken";
      } else {
        this.authenticated = true;
        return "Success";
      }
    }
    return "Fail";
  }

  @action
  public clearStore(): void {
    clearLocal();
    this.token = null;
    this.authenticated = false;
  }
}

export default AuthStore;
