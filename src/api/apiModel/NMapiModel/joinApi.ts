import { IApiReturn } from "..";
import { IToken, makeToken } from "../../../control/controlToken";
import { apiAgent } from "../../apiAgent";

export type TJoinApiParameter = Parameters<typeof joinApi>;
export interface IJoinApiReturn extends IApiReturn {
  token?: IToken;
}

const joinApi = async (
  semiToken: IToken,
  user_kind: string,
  sex: number,
  hs: string,
  grade: number
): Promise<IJoinApiReturn> => {
  const { post } = apiAgent();
  const res = await post(
    "/join/kakao",
    JSON.stringify({
      access_token: semiToken.accessToken,
      user_kind,
      hs,
      sex,
      grade
    })
  );
  if (res.code === 200) {
    const token = makeToken(res.data.access_token, res.data.refresh_token);
    return {
      success: true,
      token
    };
  }
  return { success: false };
};

export default joinApi;
