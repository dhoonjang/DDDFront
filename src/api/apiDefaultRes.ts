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
    mom_order: ["a", "b", "c", "d", "e"],
    d_day: [],
    user_info: {
      high_school: "sungnam",
      nick_name: "dhoonjang",
      suneong_score: 100,
      nashin_score: 100,
      like_univ: "string",
      like_col: "string"
    }
  }
};
