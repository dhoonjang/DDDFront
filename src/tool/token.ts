import { clearLocal, getLocalItem, setLocalItem } from "./controlLocal";

export const defaultTokenType = "Bearer";

export type Ttoken = {
  readonly type: string;
  readonly accessToken: string;
  readonly refreshToken: string;
  readonly expiresIn: boolean;
};

export function setLocalToken(token: Ttoken): void {
  setLocalItem("access_token", token.accessToken);
  setLocalItem("refresh_token", token.refreshToken);
}

export function getLocalToken(): Ttoken | null {
  const accessToken = getLocalItem("access_token");
  const refreshToken = getLocalItem("refresh_token");

  if (!(accessToken && refreshToken)) {
    clearLocal();
    return null;
  }

  return makeToken(accessToken, refreshToken);
}

export function makeToken(accessToken: string, refreshToken: string): Ttoken {
  return {
    type: defaultTokenType,
    accessToken,
    refreshToken,
    expiresIn: false
  };
}
