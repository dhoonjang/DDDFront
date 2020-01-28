import { getLocalItem, setLocalItem } from "./localTool";

export enum ETokenCategory {
  oauthToken = "OAUTH_TOKEN",
  accessToken = "ACCESS_TOKEN",
  refreshToken = "REFRESH_TOKEN"
}

export function setToken(type: ETokenCategory, token: string) {
  setLocalItem(type, token);
}

export function getToken(type: ETokenCategory): string | null {
  return getLocalItem(type);
}
