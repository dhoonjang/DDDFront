import { IApiReturn } from "..";
import { checkProductOrigin } from "../../../tool/urlTool";
import { apiAgent } from "../../apiAgent";
import { joinDefaultRes } from "../../apiDefaultRes";

export type TJoinApiParameter = Parameters<typeof joinApi>;
export interface IJoinApiReturn extends IApiReturn {
  data?: {
    accessToken: string;
    refreshToken: string;
    userStatus: string;
  };
}

const joinApi = async (
  oauth_token: string,
  user_kind: string,
  sex: string,
  hs: string,
  grade: string
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
      data: {
        accessToken: res.data.access_token,
        refreshToken: res.data.refresh_token,
        userStatus: res.data.user_status
      }
    };
  }

  if (!checkProductOrigin()) {
    return joinDefaultRes;
  }

  return { success: false };
};

export default joinApi;
