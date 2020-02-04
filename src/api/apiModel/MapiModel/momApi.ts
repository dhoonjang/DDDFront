import { IApiReturn } from "..";
import { checkProductOrigin } from "../../../tool/urlTool";
import { apiAgent } from "../../apiAgent";
import { momDefaultRes } from "../../apiDefaultRes";

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

const momApi = async (): Promise<IMomApiReturn> => {
  const { get } = apiAgent(true);
  const res = await get("/mom/board");
  if (res.status === 200) {
    return {
      success: true
    };
  }
  if (!checkProductOrigin()) {
    return momDefaultRes;
  }
  return { success: false };
};

export default momApi;
