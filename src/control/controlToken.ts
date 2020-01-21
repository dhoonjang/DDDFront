import { getLocalItem, setLocalItem } from "./controlLocal";

export enum ETokenType {
  accessToken = "ACCESS_TOKEN",
  refreshToken = "REFRESH_TOKEN"
}

export function setToken(type: ETokenType, token: string) {
  setLocalItem(type, token);
}

export function getToken(type: ETokenType): string | null {
  return getLocalItem(type);
}
