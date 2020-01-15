import { action, observable } from "mobx";
import { clearLocal } from "../tool/controlLocal";
import { getLocalToken, setLocalToken, Ttoken } from "../tool/token";

class AuthStore {
  @observable
  public token: Ttoken | null = getLocalToken();

  @observable
  public authenticated: boolean = false;

  @action
  public setStoreToken(token: Ttoken): void {
    this.token = token;
  }

  @action
  public authorized(): void {
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
  public logOut(): void {
    clearLocal();
    this.token = null;
    this.authenticated = false;
  }
}

export default AuthStore;
