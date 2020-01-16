import { clearLocal, getLocalItem, setLocalItem } from "./controlLocal";

export const defaulTTokenType = "Bearer";

export type TToken = {
  readonly type: string;
  readonly accessToken: string;
  readonly refreshToken: string;
  readonly isExpired: boolean;
};

export function setLocalToken(token: TToken): void {
  setLocalItem("access_token", token.accessToken);
  setLocalItem("refresh_token", token.refreshToken);
}

export function getLocalToken(): TToken | null {
  const accessToken = getLocalItem("access_token");
  const refreshToken = getLocalItem("refresh_token");

  if (!(accessToken && refreshToken)) {
    clearLocal();
    return null;
  }

  return makeToken(accessToken, refreshToken);
}

export function makeToken(accessToken: string, refreshToken: string): TToken {
  return {
    type: defaulTTokenType,
    accessToken,
    refreshToken,
    isExpired: false
  };
}
