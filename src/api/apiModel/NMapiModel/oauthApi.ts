import { IApiReturn } from "..";
import { apiAgent } from "../../apiAgent";

export type TLoginApiParameter = Parameters<typeof oauthApi>;
export interface IOAuthApiReturn extends IApiReturn {
  oauthToken?: string;
}

const oauthApi = async (
  client_id: string,
  redirect_uri: string,
  code: string
): Promise<IOAuthApiReturn> => {
  const { post } = apiAgent(false);
  const res = await post("https://kauth.kakao.com/oauth/token", {
    grant_type: "authorization_code",
    client_id,
    redirect_uri,
    code
  });
  if (res.status === 200) {
    return {
      success: true,
      oauthToken: res.data.access_token
    };
  }
  return { success: false };
};

export default oauthApi;
