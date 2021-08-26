import styled from "styled-components";

const Divisor = styled.div<{ height?: number }>`
  height: ${(props) => props.height || 10}px;
`;

export default Divisor;
