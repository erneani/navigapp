import styled from "styled-components";
import { IIndexable, IFocusable } from "../../types";
import { ICanBeVideo } from "./types";

export const Container = styled.div<IFocusable & IIndexable & ICanBeVideo>`
  background-color: ${(props) => (props.focused ? "white" : "black")};
  color: ${(props) => (props.focused ? "black" : "white")};
  font-weight: bold;
  height: 150px;
  width: ${(props) => (props.video ? "240px" : "120px")};
  display: flex;
  align-items: flex-end;
  border: 2px solid white;
  padding: 5px;
`;

export const Wrapper = styled.div<IFocusable>`
  padding: 10px 10px;
  display: flex;
  align-items: flex-end;
`;
