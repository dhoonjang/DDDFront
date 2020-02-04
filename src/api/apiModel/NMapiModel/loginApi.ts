import { IApiReturn } from "..";
import { checkProductOrigin } from "../../../tool/urlTool";
import { apiAgent } from "../../apiAgent";
import { loginDefaultRes } from "../../apiDefaultRes";

export type TLoginApiParameter = Parameters<typeof loginApi>;
export interface ILoginApiReturn extends IApiReturn {
  data?: {
    accessToken: string;
    refreshToken: string;
    userStatus: string;
  };
  joinRequired?: boolean;
}

const loginApi = async (oauth_token: string): Promise<ILoginApiReturn> => {
  const { get } = apiAgent(false);
  const res = await get("/login/kakao", { oauth_token });
  console.log(res);
  if (res.status === 200) {
    return {
      success: true,
      data: {
        accessToken: res.data.access_token,
        refreshToken: res.data.refresh_token,
        userStatus: res.data.user_status
      }
    };
  } else if (res.status === 301) {
    return {
      success: true,
      joinRequired: true
    };
  }

  if (!checkProductOrigin()) {
    return loginDefaultRes;
  }

  return { success: false };
};

export default loginApi;
