import styled from "styled-components";
import { ISlider } from "./types";
import { ICanBeVideo } from "../RailCard/types";

export const Container = styled.div`
  position: absolute;
  max-width: 650px;
  overflow: hidden;
`;

export const Slider = styled.div<ISlider & ICanBeVideo>`
  /* Translate for each translation iteration multiplied by the rail card total width */
  transform: translateX(
    ${(props) =>
      props.video
        ? `-${props.translation * 274}px`
        : `-${props.translation * 154}px`}
  );
  display: flex;
  flex-direction: row;
  transition: 0.3s;
`;
