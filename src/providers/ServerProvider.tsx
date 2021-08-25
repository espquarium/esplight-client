import { createContext, useState } from "react";

export interface IServerContext {
  serverUrl: string;
  setServerUrl: (url: string) => void;
}

export const ServerContext = createContext({} as IServerContext);

export const ServerProvider: React.FC = ({ children }) => {
  const [serverUrl, setServerUrl] = useState("");

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
