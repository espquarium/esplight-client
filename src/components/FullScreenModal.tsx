import React from "react";
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

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: ${COLORS.primary};
  }
`;

export const Input = styled.input`
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

export const Button = styled.button`
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

const FullScreenModal: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default FullScreenModal;
