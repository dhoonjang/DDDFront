import { errorHandler } from "../control/controlError";
import { IToken, refreshAccessToken } from "../control/controlToken";
import { makeGetUrl } from "../control/controlUrl";

const baseUrl = "https://api.ddakdae.com";

export enum ERequestType {
  post = "POST",
  get = "GET",
  put = "PUT",
  delete = "DELETE"
}

export const apiAgent = (tokenCode?: string) => {
  const post = async (url: string, data?: any): Promise<any> => {
    let res;
    try {
      res = await fetch(baseUrl + url, {
        method: ERequestType.post,
        headers: {
          Authorization: `Bearer ${tokenCode}`
        },
        body: JSON.stringify(data)
      });
    } catch (err) {
      return errorHandler(err);
    }
    return res.json;
  };

  const get = async (url: string, params?: any): Promise<any> => {
    const getUrl = makeGetUrl(baseUrl, url, params);
    let res;
    try {
      res = await fetch(getUrl, {
        method: ERequestType.get,
        headers: {
          Authorization: `Bearer ${tokenCode}`
        }
      });
    } catch (err) {
      return errorHandler(err);
    }
    return res.json;
  };

  return { post, get };
};

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
