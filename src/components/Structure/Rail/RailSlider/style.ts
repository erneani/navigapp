import styled from "styled-components";
import { ISlider } from "./types";

export const Container = styled.div`
  position: absolute;
  max-width: 650px;
  overflow: hidden;
`;

export const Slider = styled.div<ISlider>`
  /* Translate for each translation iteration multiplied by the rail card total width */
  transform: translateX(${(props) => `-${props.translation * 140}px` ?? "0"});
  display: flex;
  flex-direction: row;
  transition: 0.3s;
`;
