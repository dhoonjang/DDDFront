import { action, computed, observable } from "mobx";
import { authApi, EApiReturn } from "../../api/authApi";
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
  public getToken(): IToken | null {
    return this.token;
  }

  @action
  public setToken(token: IToken): void {
    this.token = token;
    setLocalToken(this.token);
  }

  @action
  public async authorized() {
    if (this.token) {
      const authReturn = await authApi(this.token);
      if (authReturn === EApiReturn.success) {
        this.authenticated = true;
      }
    }
  }

  @action
  public clearStore(): void {
    clearLocal();
    this.token = null;
    this.authenticated = false;
  }
}

export default AuthStore;
