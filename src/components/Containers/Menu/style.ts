import styled from "styled-components";
import { IFocusable } from "components/Structure/types";

export const Container = styled.div<IFocusable>`
  background-color: black;
  position: fixed;
  flex-direction: column;
  font-size: 18px;
  display: flex;
  height: 100vh;
  border-right: 1px solid rgba(255, 255, 255, 0.3);
  justify-content: center;
  max-width: ${(props) => (props.focused ? "200px" : "64px")};
  overflow-x: hidden;
  transition: 0.2s;
  min-width: 64px;
`;
