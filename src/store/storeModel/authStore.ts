import { action, computed, observable } from "mobx";
import { clearLocal } from "../../control/controlLocal";
import {
  getLocalToken,
  IToken,
  setLocalToken
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
  public authenticated: boolean = false;

  @observable
  private token: IToken | null = getLocalToken();

  private constructor() {}

  @computed
  get storeToken(): IToken | null {
    if (this.token !== getLocalToken()) {
      this.token = getLocalToken();
    }
    return this.token;
  }

  @action
  public setToken(token: IToken): void {
    setLocalToken(token);
    this.token = token;
  }

  @action
  public async authorized(): Promise<boolean> {
    if (this.token && this.token.isValid) {
      this.authenticated = true;
      return true;
    }
    return false;
  }

  @action
  public clearStore(): void {
    clearLocal();
    this.token = null;
    this.authenticated = false;
  }
}

export default AuthStore;
