import { IApiReturn } from "..";
import { apiAgent } from "../../apiAgent";

export type TLoginApiParameter = Parameters<typeof loginApi>;
export interface ILoginApiReturn extends IApiReturn {
  accessToken?: string;
  refreshToken?: string;
  joinRequired?: boolean;
}

const loginApi = async (oauth_token: string): Promise<ILoginApiReturn> => {
  const { get } = apiAgent(false);
  const res = await get("/login/kakao", { oauth_token });
  if (res.status === 200) {
    return {
      success: true,
      accessToken: res.data.access_token,
      refreshToken: res.data.refresh_token
    };
  } else if (res.status === 301) {
    return {
      success: true,
      joinRequired: true
    };
  }
  return { success: false };
};

export default loginApi;
