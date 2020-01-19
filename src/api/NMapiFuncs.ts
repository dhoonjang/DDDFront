import { IToken, makeToken } from "../control/controlToken";
import { apiAgent } from "./apiAgent";
import { IApiReturn } from "./MapiFuncs";

export interface ILoginApiReturn extends IApiReturn {
  token: IToken | null;
  joinRequired?: boolean;
}

export interface IJoinApiReturn extends IApiReturn {
  token: IToken | null;
}

export const loginApi = async (code: string): Promise<ILoginApiReturn> => {
  const { get } = apiAgent();
  const res = await get("/login/kakao", { code });
  if (res.code === 200) {
    const token = makeToken(res.access_token, res.refresh_token);
    return {
      success: true,
      token
    };
  } else if (res.code === 301) {
    const semiToken = makeToken(res.access_token);
    return {
      success: false,
      token: semiToken,
      joinRequired: true
    };
  }
  return { success: false, token: null };
};

export const joinApi = async (
  semiToken: IToken,
  user_kind: string,
  hs: string,
  grade: string,
  category1: string,
  category2: string
): Promise<IJoinApiReturn> => {
  const { post } = apiAgent();
  const res = await post(
    "/join/kakao",
    JSON.stringify({
      access_token: semiToken.accessToken,
      user_kind,
      hs,
      grade,
      category1,
      category2
    })
  );
  if (res.code === 200) {
    const token = makeToken(res.access_token, res.refresh_token);
    return {
      success: true,
      token
    };
  }
  return { success: false, token: null };
};
