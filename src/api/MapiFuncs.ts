import { clearLocal } from "../control/controlLocal";
import { IToken } from "../control/controlToken";
import { MapiAgent } from "./apiAgent";

export enum EApiReturnStatus {
  expired = "EXPIRED_TOKEN",
  fail = "FAIL",
  success = "SUCCESS"
}

export interface IApiReturn {
  status: EApiReturnStatus;
  data?: any;
}

export const authApi = async (token: IToken): Promise<IApiReturn> => {
  const { get } = MapiAgent(token);
  const res = await get("/auth");
  if (res.code === 200) {
    return {
      status: EApiReturnStatus.success
    };
  }
  clearLocal();
  return { status: EApiReturnStatus.fail };
};
