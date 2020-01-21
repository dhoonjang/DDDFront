import axios, { AxiosInstance } from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";
import md5 from "md5";
import { useEffect, useState } from "react";
import { ETokenType, getToken, setToken } from "../control/controlToken";

const baseURL = "https://api.ddakdae.com";

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

const refreshAuthLogic = async (failedRequest: any) => {
  const refreshApiInstance = axios.create({
    baseURL,
    headers: {
      Authorization: `Bearer ${getToken(ETokenType.refreshToken)}`
    }
  });

  const res = await refreshApiInstance.get("/refresh");

  setToken(ETokenType.accessToken, res.data.token);

  failedRequest.response.config.headers[
    "Authorization"
  ] = `Bearer ${res.data.token}`;

  return Promise.resolve();
};

export const ConfigureApiInstance = (
  apiInstance: AxiosInstance,
  auth: boolean
) => {
  if (auth) {
    createAuthRefreshInterceptor(apiInstance, refreshAuthLogic);
    apiInstance.interceptors.request.use(request => {
      console.log("intercept");
      request.headers["Authorization"] = `Bearer ${getToken(
        ETokenType.accessToken
      )}`;
      return request;
    });
  }
};
