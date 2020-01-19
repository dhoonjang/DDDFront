import { IToken } from "../../control/controlToken";
import momApi from "./MapiModel/momApi";
import joinApi from "./NMapiModel/joinApi";
import loginApi from "./NMapiModel/loginApi";

export interface IApiReturn {
  success: boolean;
}

export type TMapiModel = (token: IToken, ...parameter: any[]) => Promise<any>;
export type TNMapiModel = (...parameter: any[]) => Promise<any>;

export { momApi };
export { joinApi, loginApi };
