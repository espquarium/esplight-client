import axios from "axios";
import { useContext } from "react";
import { ServerContext } from "../providers/ServerProvider";

const useApi = () => {
  const { serverUrl, setServerUrl } = useContext(ServerContext);

  const api = axios.create({
    baseURL: serverUrl,
  });

  return { api, serverUrl, setServerUrl };
};

export default useApi;
