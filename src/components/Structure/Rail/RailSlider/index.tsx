import React from "react";
import { Container, Slider } from "./style";
import { IRailSlider } from "./types";

const RailSlider = ({ children, translation }: IRailSlider) => {
  return (
    <Container id="rail-slider">
      <Slider translation={translation}>{children}</Slider>
    </Container>
  );
};

export { RailSlider };
