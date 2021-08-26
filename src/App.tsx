import cogoToast from "cogo-toast";
import { useState } from "react";
import { useEffect } from "react";
import Body from "./components/Body";
import NavBar from "./components/NavBar";
import TimesTable from "./components/TimesTable";
import useApi from "./hooks/useApi";
import { ILightTime } from "./typings/EspLight";

function App() {
  const api = useApi();
  const [times, setTimes] = useState<ILightTime[]>([]);

  useEffect(() => {
    if (api.serverUrl) {
      api.api
        .get("/light-times")
        .then(({ data }) => {
          cogoToast.success("loaded light times");
          setTimes(data);
        })
        .catch(() => {
          cogoToast.error("error when load data, check your device");
        });
    } else {
      cogoToast.info("no server found in configuration, please add before use");
    }
  }, [api.serverUrl]);

  return (
    <Body>
      <NavBar />
      <TimesTable times={times} />
    </Body>
  );
}

export default App;
