import { apiAgent } from "../api/apiAgent";
import { clearLocal, getLocalItem, setLocalItem } from "./controlLocal";

export interface IToken {
  accessToken: string;
  refreshToken: string;
  isValid: boolean;
}

export function setLocalToken(token: IToken): void {
  if (token.isValid) {
    setLocalItem("access_token", token.accessToken);
    setLocalItem("refresh_token", token.refreshToken);
  }
}

export function getLocalToken(): IToken | null {
  const accessToken = getLocalItem("access_token");
  const refreshToken = getLocalItem("refresh_token");

  if (!(accessToken && refreshToken)) {
    clearLocal();
    return null;
  }

  return makeToken(accessToken, refreshToken);
}

export function makeToken(accessToken: string, refreshToken?: string): IToken {
  if (refreshToken) {
    return {
      accessToken,
      refreshToken,
      isValid: true
    };
  } else {
    return {
      accessToken,
      refreshToken: "_",
      isValid: false
    };
  }
}

export async function refreshAccessToken(
  token: IToken
): Promise<IToken | null> {
  const refreshAgent = apiAgent(token.refreshToken);
  const refreshRes = await refreshAgent.get("/refresh");

  if (refreshRes.code === 200) {
    const refreshedToken = makeToken(
      refreshRes.data.accessToken,
      token.refreshToken
    );
    setLocalToken(refreshedToken);
    return refreshedToken;
  } else {
    clearLocal();
    return null;
  }
}
