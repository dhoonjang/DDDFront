import axios, { AxiosInstance } from "axios";
import qs from "query-string";
import { errorHandler } from "../control/controlError";
import { makeGetUrl } from "../control/controlUrl";

const baseURL = "https://api.ddakdae.com";

export enum ERequestType {
  post = "POST",
  get = "GET",
  put = "PUT",
  delete = "DELETE"
}

export const MapiInstance: AxiosInstance = axios.create({
  baseURL
});
export const NMapiInstance: AxiosInstance = axios.create({
  baseURL
});

export const apiAgent = (auth: boolean) => {
  let Request = NMapiInstance;
  if (auth) {
    Request = MapiInstance;
  }
  const post = async (url: string, data?: any): Promise<any> => {
    let res;
    try {
      res = await Request.post(url, qs.stringify(data));
    } catch (err) {
      return errorHandler(err);
    }
    return res;
  };

  const get = async (url: string, params?: any): Promise<any> => {
    const getUrl = makeGetUrl(baseURL, url, params);
    let res;
    try {
      res = await Request.get(getUrl);
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
