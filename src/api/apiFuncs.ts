import md5 from "md5";
import { useEffect, useState } from "react";

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
