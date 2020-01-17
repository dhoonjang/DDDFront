import { clearLocal } from "../control/controlLocal";
import { ETokenStatus, IToken, makeToken } from "../control/controlToken";
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

export interface ILoginApiReturn extends IApiReturn {
  token: IToken | null;
  joinRequired?: boolean;
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

export const loginApi = async (code: string): Promise<ILoginApiReturn> => {
  const { get } = NMapiAgent();
  const res = await get("/login/kakao", { code });
  if (res.code === 200) {
    const newToken = makeToken(
      res.access_token,
      res.refresh_token,
      ETokenStatus.new
    );
    return {
      status: EApiReturnStatus.success,
      token: newToken
    };
  } else if (res.code === 301) {
    const semiToken = makeToken(res.access_token, "_", ETokenStatus.semi);
    return {
      status: EApiReturnStatus.success,
      token: semiToken,
      joinRequired: true
    };
  }
  return { status: EApiReturnStatus.fail, token: null };
};

export const joinApi = async (
  token: IToken,
  user_kind: string,
  hs: string,
  grade: string,
  category1: string,
  category2: string
): Promise<IApiReturn> => {
  const { post } = NMapiAgent();
  const res = await post(
    "/join/kakao",
    JSON.stringify({
      access_token: token.accessToken,
      user_kind,
      hs,
      grade,
      category1,
      category2
    })
  );
  if (res.code === 200) {
    return {
      status: EApiReturnStatus.success
    };
  }
  return { status: EApiReturnStatus.fail };
};
