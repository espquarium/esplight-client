import React from "react";
import styled from "styled-components";
import { AiFillSetting } from "react-icons/ai";
import COLORS from "../COLORS";
import useToggle from "../hooks/useToggle";
import Settings from "./Settings";

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${COLORS.navbar};
  color: white;
  padding: 0 20px 0 20px;
  box-shadow: 0px 0px 19px -4px #000000;
  height: 60px;
`;

const NavBar: React.FC = () => {
  const [configOpen, toggle] = useToggle(false);

  return (
    <Wrapper>
      <h1>🐟 Esplight</h1>
      <AiFillSetting size={30} onClick={() => toggle()} />
      {configOpen && <Settings toggle={() => toggle()} />}
    </Wrapper>
  );
};

export default NavBar;
