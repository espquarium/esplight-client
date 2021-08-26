import { createContext, useState } from "react";

export const SERVER_URL_KEY = "esplightserver";
export interface IServerContext {
  serverUrl: string;
  setServerUrl: (url: string) => void;
}

export const ServerContext = createContext({} as IServerContext);

export const ServerProvider: React.FC = ({ children }) => {
  const [serverUrl, setServerUrl] = useState(
    localStorage.getItem(SERVER_URL_KEY) || ""
  );

  return (
    <ServerContext.Provider
      value={{
        serverUrl,
        setServerUrl,
      }}
    >
      {children}
    </ServerContext.Provider>
  );
};
