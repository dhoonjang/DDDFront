import { IApiReturn } from "..";
import { checkProductOrigin } from "../../../control/controlUrl";
import { apiAgent } from "../../apiAgent";
import { joinDefaultRes } from "../../apiDefaultRes";

export type TJoinApiParameter = Parameters<typeof joinApi>;
export interface IJoinApiReturn extends IApiReturn {
  accessToken?: string;
  refreshToken?: string;
}

const joinApi = async (
  oauth_token: string,
  user_kind: string,
  sex: number,
  hs: string,
  grade: number
): Promise<IJoinApiReturn> => {
  const { post } = apiAgent(false);
  const res = await post("/join/kakao", {
    oauth_token,
    user_kind,
    hs,
    sex,
    grade
  });
  if (res.status === 200) {
    return {
      success: true,
      accessToken: res.data.access_token,
      refreshToken: res.data.refresh_token
    };
  }

  if (!checkProductOrigin()) {
    console.log("default res");
    return joinDefaultRes;
  }

  return { success: false };
};

export default joinApi;
