import momApi from "./MapiModel/momApi";
import joinApi from "./NMapiModel/joinApi";
import loginApi from "./NMapiModel/loginApi";
import oauthApi from "./NMapiModel/oauthApi";
import refreshApi from "./NMapiModel/refreshApi";

export interface IApiReturn {
  success: boolean;
  data?: any;
}

export { momApi };
export { joinApi, loginApi, oauthApi, refreshApi };
