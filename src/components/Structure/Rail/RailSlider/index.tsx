import React from "react";
import { Container, Slider } from "./style";
import { IRailSlider } from "./types";

const RailSlider = ({ children, translation, video = false }: IRailSlider) => {
  return (
    <Container id="rail-slider">
      <Slider video={video} translation={translation}>
        {children}
      </Slider>
    </Container>
  );
};

export { RailSlider };
