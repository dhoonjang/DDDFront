import { action, computed, observable } from "mobx";
import { clearLocal } from "../../control/controlLocal";
import {
  ETokenStatus,
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
    return this.token;
  }

  @action
  public setToken(token: IToken): void {
    this.token = token;
    setLocalToken(this.token);
  }

  @action
  public async authorized(): Promise<boolean> {
    if (this.token) {
      if (this.token.status === ETokenStatus.expired || ETokenStatus.semi) {
        return false;
      }
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
