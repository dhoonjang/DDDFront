import { IApiReturn } from "..";
import { checkProductOrigin } from "../../../tool/urlTool";
import { apiAgent } from "../../apiAgent";
import { refreshDefaultRes } from "../../apiDefaultRes";
import { refreshAuthLogic } from "../../apiFuncs";

export type TLoginApiParameter = Parameters<typeof refreshAuthLogic>;
export interface IRefreshApiReturn extends IApiReturn {
  accessToken?: string;
}

const refreshApi = async (
  refresh_token: string
): Promise<IRefreshApiReturn> => {
  const { post } = apiAgent(false);
  const res = await post("/auth/refresh", {
    refresh_token
  });
  if (res.status === 200) {
    return {
      success: true,
      accessToken: res.data.access_token
    };
  }
  if (!checkProductOrigin()) {
    return refreshDefaultRes;
  }
  return { success: false };
};

export default refreshApi;
