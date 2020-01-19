import momApi from "./MapiModel/momApi";
import joinApi from "./NMapiModel/joinApi";
import loginApi from "./NMapiModel/loginApi";

export interface IApiReturn {
  success: boolean;
  data?: any;
}

export { momApi };
export { joinApi, loginApi };
