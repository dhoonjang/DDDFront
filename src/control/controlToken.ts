import { clearLocal, getLocalItem, setLocalItem } from "./controlLocal";

export enum ETokenStatus {
  new = "NEW",
  old = "OLD",
  semi = "SEMI",
  expired = "EXPIRED"
}
export interface IToken {
  accessToken: string;
  refreshToken: string;
  status: ETokenStatus;
}

export function setLocalToken(token: IToken): void {
  setLocalItem("access_token", token.accessToken);
  setLocalItem("refresh_token", token.refreshToken);
}

export function getLocalToken(): IToken | null {
  const accessToken = getLocalItem("access_token");
  const refreshToken = getLocalItem("refresh_token");

  if (!(accessToken && refreshToken)) {
    clearLocal();
    return null;
  }

  return makeToken(accessToken, refreshToken, ETokenStatus.old);
}

export function makeToken(
  accessToken: string,
  refreshToken: string,
  status: ETokenStatus
): IToken {
  return {
    accessToken,
    refreshToken,
    status
  };
}

export function getRightToken(token: IToken) {
  if (token.status === ETokenStatus.expired) {
    return token.refreshToken;
  }
  return token.accessToken;
}
