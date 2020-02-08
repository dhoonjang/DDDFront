import { IApiReturn } from "..";
import { checkProductOrigin } from "../../../tool/urlTool";
import { apiAgent } from "../../apiAgent";
import { momDefaultRes } from "../../apiDefaultRes";

export interface IDday {
  name: string;
  date: string;
}

export type TMomApiParameter = Parameters<typeof momApi>;
export interface IMomApiReturn extends IApiReturn {
  data?: {
    user_status: string;
    big_cat: string;
    medium_cat: string;
    mom_order: string[];
    d_day: IDday[];
    user_info: {
      high_school: string;
      grade: number;
      profile_image?: string;
    };
  };
}

const momApi = async (): Promise<IMomApiReturn> => {
  const { get } = apiAgent(true);
  const res = await get("/mom/board");
  console.log(res);
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
