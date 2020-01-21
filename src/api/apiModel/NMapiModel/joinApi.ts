import { IApiReturn } from "..";
import { apiAgent } from "../../apiAgent";

export type TJoinApiParameter = Parameters<typeof joinApi>;
export interface IJoinApiReturn extends IApiReturn {
  accessToken?: string;
  refreshToken?: string;
}

const joinApi = async (
  access_token: string,
  user_kind: string,
  sex: number,
  hs: string,
  grade: number
): Promise<IJoinApiReturn> => {
  const { post } = apiAgent(false);
  const res = await post("/join/kakao", {
    access_token,
    user_kind,
    hs,
    sex,
    grade
  });
  if (res.code === 200) {
    return {
      success: true,
      accessToken: res.data.access_token,
      refreshToken: res.data.refresh_token
    };
  }
  return { success: false };
};

export default joinApi;
