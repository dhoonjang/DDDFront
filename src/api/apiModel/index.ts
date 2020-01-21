import momApi from "./MapiModel/momApi";
import joinApi from "./NMapiModel/joinApi";
import loginApi from "./NMapiModel/loginApi";
import oauthApi from "./NMapiModel/oauthApi";

export interface IApiReturn {
  success: boolean;
  data?: any;
}

export { momApi };
export { joinApi, loginApi, oauthApi };
