import { IApiReturn } from "..";
import { IToken } from "../../../control/controlToken";
import { authApiAgent } from "../../apiAgent";

export type TMomApiNeeds = Parameters<typeof momApi>;
export interface IMomApiReturn extends IApiReturn {
  mom_order?: string[];
  d_day?: string[];
  user_info?: {
    high_school?: string;
    nick_name?: string;
    profile_image?: string;
    suneong_score?: string;
    nashin_score?: string;
    like_univ?: string;
    like_col?: string;
  };
}

const momApi = async (token: IToken): Promise<IMomApiReturn> => {
  const { post } = authApiAgent(token);
  const res = await post("/mom", {});
  if (res.code === 200) {
    return {
      success: true
    };
  } else if (res.code === 301) {
    return {
      success: false
    };
  }
  return { success: false };
};

export default momApi;
