import { IApiReturn } from "..";
import { apiAgent } from "../../apiAgent";
import { refreshAuthLogic } from "../../apiFuncs";

export type TLoginApiParameter = Parameters<typeof refreshAuthLogic>;
export interface ILoginApiReturn extends IApiReturn {
  accessToken?: string;
}

const refreshApi = async (refresh_token: string): Promise<ILoginApiReturn> => {
  const { post } = apiAgent(false);
  const res = await post("/refresh", {
    refresh_token
  });
  if (res.status === 200) {
    return {
      success: true,
      accessToken: res.data.access_token
    };
  }
  return { success: false };
};

export default refreshApi;
