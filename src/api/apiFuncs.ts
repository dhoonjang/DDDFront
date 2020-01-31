import md5 from "md5";
import { useEffect, useState } from "react";
import { ETokenCategory, getToken, setToken } from "../tool/tokenTool";
import { refreshApi } from "./apiModel";

export const baseURL = "http://api.ddakdae.com";

export type TApiModel = (...parameters: any[]) => Promise<any>;

export const useApiModel = (
  apiModel: TApiModel,
  parameters: Parameters<typeof apiModel>
) => {
  const [res, setRes] = useState();

  useEffect(() => {
    const requestApi = async () => {
      const response = await apiModel(...parameters);
      setRes(response);
    };
    requestApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiModel, md5(parameters)]);

  return res;
};

export const refreshAuthLogic = async (failedRequest: any) => {
  try {
    const refreshToken = getToken(ETokenCategory.refreshToken);
    if (refreshToken) {
      const res = await refreshApi(refreshToken);
      if (res.success && res.accessToken) {
        setToken(ETokenCategory.accessToken, res.accessToken);
        failedRequest.response.config.headers[
          "Authorization"
        ] = `Bearer ${res.accessToken}`;
        return Promise.resolve();
      }
      return Promise.reject("refresh api fail");
    }
    return Promise.reject("no refresh token");
  } catch (error) {
    return Promise.reject(error);
  }
};
