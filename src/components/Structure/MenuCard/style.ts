import styled from "styled-components";
import { IFocusable, IIndexable } from "../types";
import { ISelectable } from "./types";

export const Container = styled.div<IFocusable & IIndexable & ISelectable>`
  background-color: ${(props) => (props.focused ? "white" : "black")};
  color: ${(props) =>
    props.focused
      ? "black"
      : props.isSelected
      ? "white"
      : "rgba(255, 255, 255, 0.6)"};
  padding: 20px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  word-wrap: normal;
`;

export const Icon = styled.span`
  margin-right: 20px;
`;
