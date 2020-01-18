import { errorHandler } from "../control/controlError";
import { getRightToken, IToken } from "../control/controlToken";
import { makeGetUrl } from "../control/controlUrl";

const baseUrl = "https://api.ddakdae.com";

export enum ERequestType {
  post = "POST",
  get = "GET",
  put = "PUT",
  delete = "DELETE"
}

export const MapiAgent = (storeToken: IToken) => {
  const token = getRightToken(storeToken);

  const post = async (url: string, body: string): Promise<any> => {
    let res;
    try {
      res = await fetch(baseUrl + url, {
        method: ERequestType.post,
        headers: {
          Authorization: `Bearer ${token}`
        },
        body
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
          Authorization: `Bearer ${token}`
        }
      });
    } catch (err) {
      return errorHandler(err);
    }
    return res.json;
  };

  return { post, get };
};

export const NMapiAgent = () => {
  const post = async (url: string, body: string): Promise<any> => {
    let res;
    try {
      res = await fetch(baseUrl + url, {
        method: ERequestType.post,
        body
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
        method: ERequestType.get
      });
    } catch (err) {
      return errorHandler(err);
    }
    return res.json;
  };

  return { post, get };
};
