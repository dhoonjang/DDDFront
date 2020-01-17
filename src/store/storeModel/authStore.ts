import { action, observable } from "mobx";
import { MapiAgent } from "../../api/apiAgent";
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
  public async authorized(): Promise<EAuthReturn> {
    if (this.token) {
      const { get } = MapiAgent(this.token);
      const res = await get("auth");
      if (res.status === 200) {
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
