import { IApiReturn } from "..";
import { IToken } from "../../../control/controlToken";
import { apiAgent } from "../../apiAgent";

export type TMomApiParameter = Parameters<typeof momApi>;
export interface IMomApiReturn extends IApiReturn {
  data?: {
    mom_order: string[];
    d_day: object[];
    user_info: {
      high_school: string;
      nick_name: string;
      profile_image?: string;
      suneong_score?: number;
      nashin_score?: number;
      like_univ?: string;
      like_col?: string;
    };
  };
}

const momApi = async (token: IToken): Promise<IMomApiReturn> => {
  const { post } = apiAgent(true);
  const res = await post("/mom");
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
