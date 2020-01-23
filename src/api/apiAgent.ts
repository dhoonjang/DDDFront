import axios, { AxiosInstance } from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";
import qs from "query-string";
import { errorHandler } from "../control/controlError";
import { ETokenCategory, getToken } from "../control/controlToken";
import { makeGetUrl } from "../control/controlUrl";
import { baseURL, refreshAuthLogic } from "./apiFuncs";

export const createFetchClient = (auth: boolean) => {
  const apiInstance: AxiosInstance = axios.create({
    baseURL
  });
  if (auth) {
    createAuthRefreshInterceptor(apiInstance, refreshAuthLogic);
    apiInstance.interceptors.request.use(
      request => {
        console.log(request);
        request.headers.Authorization = `Bearer ${getToken(
          ETokenCategory.accessToken
        )}`;
        return request;
      },
      error => Promise.reject(error)
    );
  } else {
    apiInstance.interceptors.request.use(
      request => {
        console.log(request);
        return request;
      },
      error => Promise.reject(error)
    );
  }
  return apiInstance;
};

export const apiAgent = (auth: boolean) => {
  const fetchClient: AxiosInstance = createFetchClient(auth);
  const post = async (url: string, data?: any): Promise<any> => {
    let res;
    try {
      res = await fetchClient.post(url, qs.stringify(data));
    } catch (err) {
      return errorHandler(err);
    }
    return res;
  };
  const get = async (url: string, params?: any): Promise<any> => {
    const getUrl = makeGetUrl(baseURL, url, params);
    let res;
    try {
      res = await fetchClient.get(getUrl);
    } catch (err) {
      return errorHandler(err);
    }
    return res;
  };
  return { post, get };
};

/*
export const authApiAgent = (token: IToken) => {
  const accessAgent = apiAgent(token.accessToken);

  const post = async (url: string, data?: any): Promise<any> => {
    let res = await accessAgent.post(url, data);
    if (res.code === 401) {
      const refreshedToken = await refreshAccessToken(token);
      if (refreshedToken) {
        const reAccessAgent = apiAgent(refreshedToken.accessToken);
        res = await reAccessAgent.post(url, data);
      }
    }
    return res;
  };

  const get = async (url: string, params?: any): Promise<any> => {
    let res = await accessAgent.get(url, params);
    if (res.code === 401) {
      const refreshedToken = await refreshAccessToken(token);
      if (refreshedToken) {
        const reAccessAgent = apiAgent(refreshedToken.accessToken);
        res = await reAccessAgent.get(url, params);
      }
    }
    return res;
  };

  return { post, get };
};
*/
