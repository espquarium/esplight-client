import cogoToast from "cogo-toast";
import { useState } from "react";
import { useEffect } from "react";
import Body from "./components/Body";
import Divisor from "./components/Divisor";
import NavBar from "./components/NavBar";
import TimesTable from "./components/TimesTable";
import useApi from "./hooks/useApi";
import useDebounce from "./hooks/useDebounce";
import { ILightTime } from "./typings/EspLight";
// @ts-ignore
import isEqual from "lodash.isequal";

function App() {
  const api = useApi();

  const [times, setTimes] = useState<ILightTime[]>([]);
  const [editableTimes, setEditableTimes] = useState<ILightTime[]>();

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

  useDebounce(
    () => {
      if (api.serverUrl && editableTimes) {
        api.api
          .put("/light-times", editableTimes)
          .then(({ data }) => {
            cogoToast.success("saved light times");
            setTimes(data);
          })
          .catch(() => {
            cogoToast.error("error when save data, check your device");
          });
      }
    },
    750,
    [editableTimes]
  );

  return (
    <Body>
      <NavBar />
      <Divisor height={20} />
      <TimesTable times={times} editTimes={setEditableTimes} />
    </Body>
  );
}

export default App;
