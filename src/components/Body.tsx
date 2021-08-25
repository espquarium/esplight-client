import React from "react";
import styled from "styled-components";
import COLORS from "../COLORS";

const Wrapper = styled.div`
  height: 100vh;
  background-color: ${COLORS.background};
`;

const Body: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Body;
