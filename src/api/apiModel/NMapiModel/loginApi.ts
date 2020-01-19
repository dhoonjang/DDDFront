import { IApiReturn } from "..";
import { IToken, makeToken } from "../../../control/controlToken";
import { apiAgent } from "../../apiAgent";

export type TLoginApiNeeds = Parameters<typeof loginApi>;
export interface ILoginApiReturn extends IApiReturn {
  token: IToken | null;
  joinRequired?: boolean;
}

const loginApi = async (code: string): Promise<ILoginApiReturn> => {
  const { get } = apiAgent();
  const res = await get("/login/kakao", { code });
  if (res.code === 200) {
    const token = makeToken(res.access_token, res.refresh_token);
    return {
      success: true,
      token
    };
  } else if (res.code === 301) {
    const semiToken = makeToken(res.access_token);
    return {
      success: false,
      token: semiToken,
      joinRequired: true
    };
  }
  return { success: false, token: null };
};

export default loginApi;
