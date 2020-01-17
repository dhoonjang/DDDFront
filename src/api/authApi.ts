import { clearLocal } from "../control/controlLocal";
import { IToken } from "../control/controlToken";
import { MapiAgent } from "./apiAgent";

export enum EApiReturn {
  expired = "EXPIRED_TOKEN",
  fail = "FAIL",
  success = "SUCCESS"
}

export const authApi = async (token: IToken): Promise<EApiReturn> => {
  const { get } = MapiAgent(token);
  const res = await get("auth");
  if (res.status === 200) {
    return EApiReturn.success;
  }
  clearLocal();
  return EApiReturn.fail;
};
