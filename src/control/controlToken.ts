import { getLocalItem, setLocalItem } from "./controlLocal";

export interface IToken {
  accessToken: string;
  refreshToken: string;
  isValid: boolean;
}

export function setLocalToken(token: IToken): void {
  setLocalItem("access_token", token.accessToken);
  setLocalItem("refresh_token", token.refreshToken);
}

export function getLocalToken(): IToken | null {
  const accessToken = getLocalItem("access_token");
  const refreshToken = getLocalItem("refresh_token");

  if (!accessToken) {
    return null;
  }

  return makeToken(accessToken, refreshToken);
}

export function getToken(): IToken {
  const token = getLocalToken();
  if (token) {
    return token;
  } else {
    return makeToken("no_access_token_in_local");
  }
}

export function makeToken(
  accessToken: string,
  refreshToken?: string | null
): IToken {
  if (refreshToken) {
    return {
      accessToken,
      refreshToken,
      isValid: true
    };
  } else {
    return {
      accessToken,
      refreshToken: "no_refresh_token_in_local",
      isValid: false
    };
  }
}
