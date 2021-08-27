import axios from "axios";
import { useContext, useMemo } from "react";
import { ServerContext } from "../providers/ServerProvider";

const useApi = () => {
  const { serverUrl, setServerUrl } = useContext(ServerContext);

  const api = useMemo(
    () =>
      axios.create({
        baseURL: serverUrl,
      }),
    [serverUrl]
  );

  return { api, serverUrl, setServerUrl };
};

export default useApi;
