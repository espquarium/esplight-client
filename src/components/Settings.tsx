import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";
import COLORS from "../COLORS";

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
  // const autoDetect = () = > {

  // }

  return (
    <Wrapper>
      <Header>
        <h1>Settings</h1>
        <AiOutlineClose color="black" size={20} onClick={() => toggle()} />
      </Header>

      <Card>
        <label htmlFor="ipv4">Server ipv4</label>
        <Input
          id="ipv4"
          type="text"
          placeholder="type server ip here"
          pattern="^((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])$"
        />
        <Divisor />
        <Button>Save</Button>
      </Card>
      <Divisor />
      <Divisor />
      <Button>Automatic detection</Button>
    </Wrapper>
  );
};

export default Settings;
