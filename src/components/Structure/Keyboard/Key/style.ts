import styled from "styled-components";
import { IFocusable, IIndexable } from "components/Structure/types";
import { ICanBeBig } from "./types";

export const Container = styled.div<IFocusable & IIndexable & ICanBeBig>`
  height: 30px;
  width: ${(props) => (props.isBig ? "112px" : "50px")};
  padding: 5px;
  border: 1px solid white;
  background-color: ${(props) => (props.focused ? "white" : "black")};
  color: ${(props) => (props.focused ? "black" : "white")};
  display: flex;
  align-items: center;
  justify-content: center;
`;
