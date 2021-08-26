import axios from "axios";
import cogoToast from "cogo-toast";
import React from "react";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";
import COLORS from "../COLORS";
import useApi from "../hooks/useApi";
import { SERVER_URL_KEY } from "../providers/ServerProvider";

const Wrapper = styled.div`
  height: 100%;
  z-index: 9;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${COLORS.background};

  display: flex;
  flex-direction: column;
  padding: 0 20px 0 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: ${COLORS.primary};
  }
`;

const Card = styled.div`
  border-radius: 10px;
  background-color: white;
  color: black;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  /* background-color: ${COLORS.primary}; */
  border-radius: 10px;
  border: 1px solid black;
  padding-top: 10px;
  padding-bottom: 10px;
  text-indent: 10px;

  :focus {
    outline: none;
  }
`;

const Button = styled.button`
  background-color: ${COLORS.primary};
  color: white;
  font-weight: bold;
  width: 100%;
  border-radius: 10px;
  border: none;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 1rem;
`;

const Divisor = styled.div`
  height: 10px;
`;

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
    <Wrapper>
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
    </Wrapper>
  );
};

export default Settings;
