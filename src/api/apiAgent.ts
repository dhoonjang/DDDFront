import { resolve } from "dns";
import { errorHandler } from "../control/constrolError";
import { ETokenStatus, IToken } from "../control/controlToken";

const baseUrl = "https://api.ddakdae.com/";

export enum ERequestType {
  post = "POST",
  get = "GET",
  put = "PUT",
  delete = "DELETE"
}

async function request(
  type: ERequestType,
  url: string,
  body?: any,
  token?: string
): Promise<any> {
  let res;
  try {
    res = await fetch(baseUrl + url, {
      method: type,
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(body)
    });
  } catch (err) {
    return errorHandler(err);
  }
  return res.json;
}

export const MapiAgent = (storeToken: IToken) => {
  let token = storeToken.accessToken;

  if (storeToken.status === ETokenStatus.expired) {
    console.log("Need Refresh AccessToken");
    token = storeToken.refreshToken;
  }

  const post = async (url: string, body: JSON): Promise<any> => {
    return request(ERequestType.post, url, body, token);
  };
  const get = async (url: string): Promise<any> => {
    return request(ERequestType.get, url, {}, token);
  };

  return { post, get };
};

export const NMapiAgent = () => {
  const post = async (url: string, body: JSON): Promise<any> => {
    return request(ERequestType.post, url, body);
  };

  const get = async (url: string): Promise<any> => {
    return request(ERequestType.post, url);
  };

  return { post, get };
};
