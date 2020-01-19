import md5 from "md5";
import { useEffect, useState } from "react";

export type TApiModel = (...parameter: any[]) => Promise<any>;

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
    // eslint-disable-next-line
  }, [apiModel, md5(parameters)]);

  return res;
};
