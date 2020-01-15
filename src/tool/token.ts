import { clearLocal, getLocalItem, setLocalItem } from "./controlLocal";

export type Ttoken = {
  type: string;
  accessToken: string;
  refreshToken: string;
  expiresIn: boolean;
};

export function getLocalToken(type: string): Ttoken | null {
  const accessToken = getLocalItem("access_token");
  const refreshToken = getLocalItem("refresh_token");

  if (!(accessToken && refreshToken)) {
    clearLocal();
    return null;
  }

  return makeToken(type, accessToken, refreshToken);
}

export function setLocalToken(token: Ttoken): void {
  setLocalItem("access_token", token.accessToken);
  setLocalItem("refresh_token", token.refreshToken);
}

export function makeToken(
  type: string,
  accessToken: string,
  refreshToken: string
): Ttoken {
  return {
    type,
    accessToken,
    refreshToken,
    expiresIn: false
  };
}
