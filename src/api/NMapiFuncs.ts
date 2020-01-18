import { ETokenStatus, IToken, makeToken } from "../control/controlToken";
import { NMapiAgent } from "./apiAgent";
import { EApiReturnStatus, IApiReturn } from "./MapiFuncs";

export interface ILoginApiReturn extends IApiReturn {
  token: IToken | null;
  joinRequired?: boolean;
}

export interface IJoinApiReturn extends IApiReturn {
  token: IToken | null;
}

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
): Promise<IJoinApiReturn> => {
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
    const newToken = makeToken(
      res.access_token,
      res.refresh_token,
      ETokenStatus.new
    );
    return {
      status: EApiReturnStatus.success,
      token: newToken
    };
  }
  return { status: EApiReturnStatus.fail, token: null };
};
