import axios from "axios";
import cogoToast from "cogo-toast";
import React from "react";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import useApi from "../hooks/useApi";
import { SERVER_URL_KEY } from "../providers/ServerProvider";
import Card from "./Card";
import Divisor from "./Divisor";
import FullScreenModal, { Button, Header, Input } from "./FullScreenModal";

const Settings: React.FC<{ toggle: CallableFunction }> = ({ toggle }) => {
  const api = useApi();

  const [ip, setIp] = useState(api.serverUrl);

  const changeIp = (value: string) => {
    setIp(value.includes("http") ? value : `http://${value}`);
  };

  const test = () => {
    axios
      .get(`${ip}/verify`)
      .then(() => cogoToast.success("success, server connected"))
      .catch((err) => cogoToast.error("server not found"));
  };

  const save = () => {
    window.localStorage.setItem(SERVER_URL_KEY, ip);
    cogoToast.success("ip saved");
    api.setServerUrl(ip);
  };

  return (
    <FullScreenModal>
      <Header>
        <h1>Settings</h1>
        <AiOutlineClose color="black" size={20} onClick={() => toggle()} />
      </Header>

      <Card>
        <label htmlFor="ipv4">Server ipv4</label>
        <Divisor />
        <Input
          id="ipv4"
          type="url"
          name="ip"
          value={ip}
          placeholder="type server ip here"
          pattern="^((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])$"
          onChange={({ target }) => changeIp(target.value)}
        />
        <Divisor />
        <Button onClick={() => test()}>Test</Button>
        <Divisor />
        <Button onClick={() => save()}>Save</Button>
      </Card>
    </FullScreenModal>
  );
};

export default Settings;
