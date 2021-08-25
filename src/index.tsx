import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ServerProvider } from "./providers/ServerProvider";

ReactDOM.render(
  <React.StrictMode>
    <ServerProvider>
      <App />
    </ServerProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
