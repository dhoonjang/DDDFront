import { IApiReturn } from "..";
import { IToken, makeToken } from "../../../control/controlToken";
import { apiAgent } from "../../apiAgent";

export type TJoinApiNeeds = Parameters<typeof joinApi>;
export interface IJoinApiReturn extends IApiReturn {
  token: IToken | null;
}

const joinApi = async (
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

export default joinApi;
