import { IApiReturn } from "..";
import { apiAgent } from "../../apiAgent";

export type TLoginApiParameter = Parameters<typeof loginApi>;
export interface ILoginApiReturn extends IApiReturn {
  accessToken?: string;
  refreshToken?: string;
  joinRequired?: boolean;
}

const loginApi = async (code: string): Promise<ILoginApiReturn> => {
  const { get } = apiAgent(false);
  const res = await get("/login/kakao", { code });
  if (res.code === 200) {
    return {
      success: true,
      accessToken: res.data.access_token,
      refreshToken: res.data.refresh_token
    };
  } else if (res.code === 301) {
    return {
      success: false,
      accessToken: res.data.access_token,
      joinRequired: true
    };
  }
  return { success: false };
};

export default loginApi;
