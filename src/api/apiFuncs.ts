import { clearLocal } from "../control/controlLocal";
import { IToken } from "../control/controlToken";
import { MapiAgent, NMapiAgent } from "./apiAgent";

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
  const res = await get("auth");
  if (res.status === 200) {
    return {
      status: EApiReturnStatus.success
    };
  }
  clearLocal();
  return { status: EApiReturnStatus.fail };
};

export const loginApi = async (): Promise<IApiReturn> => {
  const { get } = NMapiAgent();
  const res = await get("login/kako");
  if (res.status !== 200) {
    return {
      status: EApiReturnStatus.success
    };
  }
  clearLocal();
  return { status: EApiReturnStatus.fail };
};
