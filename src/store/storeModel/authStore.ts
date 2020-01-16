import { action, observable } from "mobx";
import { clearLocal } from "../../control/controlLocal";
import {
  getLocalToken,
  setLocalToken,
  Ttoken
} from "../../control/controlToken";
import {
  ReloadUrlMove,
  RouteUrlMove,
  Thistory
} from "../../control/controlUrl";

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
  public setStoreToken(token: Ttoken): void {
    this.token = token;
  }

  @action
  public authorized(token?: Ttoken): void {
    if (token) {
      this.setStoreToken(token);
    }

    if (this.token) {
      if (this.token.expiresIn) {
        this.logOut();
      } else {
        this.authenticated = true;
        setLocalToken(this.token);
      }
    }
  }

  @action
  public logOut(history?: Thistory): void {
    clearLocal();
    this.token = null;
    this.authenticated = false;

    if (history) {
      RouteUrlMove(history, "/");
    } else {
      ReloadUrlMove("/");
    }
  }
}

export default AuthStore;
