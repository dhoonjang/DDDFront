import { IMomApiReturn } from "./apiModel/MapiModel/momApi";
import { IJoinApiReturn } from "./apiModel/NMapiModel/joinApi";
import { ILoginApiReturn } from "./apiModel/NMapiModel/loginApi";
import { IRefreshApiReturn } from "./apiModel/NMapiModel/refreshApi";

export const refreshDefaultRes: IRefreshApiReturn = {
  success: true,
  accessToken: "default_access_token"
};

export const loginDefaultRes: ILoginApiReturn = {
  success: true,
  joinRequired: true
};

export const joinDefaultRes: IJoinApiReturn = {
  success: true,
  data: {
    accessToken: "default_access_token",
    refreshToken: "default_refresh_token",
    userStatus: "00"
  }
};

export const momDefaultRes: IMomApiReturn = {
  success: true,
  data: {
    user_status: "01",
    big_cat: "engineering",
    medium_cat: "building",
    mom_order: ["a", "b", "c", "d", "e"],
    d_day: [
      {
        name: "21년 수능",
        date: "20201119"
      },
      {
        name: "20년 3월 모의고사",
        date: "20200312"
      }
    ],
    user_info: {
      high_school: "태원 고등학교",
      grade: 3
    }
  }
};
